<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Http;

class LocationsMap extends Component
{
    public $locations = [
        [
            'id' => 'germany',
            'name' => 'Frankfurt',
            'country' => 'Germany',
            'flag' => 'de',
            'position' => [
                'top' => '37.1%',
                'left' => '50%'
            ],
            'specs' => ['10 Gbps Network', 'Intel Xeon Processors', 'NVMe Storage'],
            'ip' => '78.46.170.2',
            'basePing' => 45
        ],
        [
            'id' => 'norway',
            'name' => 'Oslo',
            'country' => 'Norway',
            'flag' => 'no',
            'position' => [
                'top' => '27.2%',
                'left' => '50%'
            ],
            'specs' => ['10 Gbps Network', 'AMD EPYC Processors', 'NVMe Storage'],
            'ip' => '185.243.216.1',
            'basePing' => 60
        ],
        // Diğer lokasyonlar da benzer şekilde eklenir
    ];

    public $pings = [];
    public $pingErrors = [];
    public $activeLocation = null;

    protected $listeners = ['refresh' => '$refresh'];

    public function mount()
    {
        $this->startPingRequests();
    }

    public function startPingRequests()
    {
        foreach ($this->locations as $location) {
            $this->sendPingRequest($location['id']);
        }
    }

    public function sendPingRequest($locationId)
    {
        try {
            $response = Http::get("/api/ping", [
                'location' => $locationId
            ]);
            
            $data = $response->json();
            
            if ($data['success']) {
                $this->pings[$locationId] = $data['ping'];
                $this->pingErrors[$locationId] = false;
            } else {
                $this->pingErrors[$locationId] = true;
            }
        } catch (\Exception $e) {
            $this->pingErrors[$locationId] = true;
        }

        $this->emit('refresh');
    }

    public function getPingColor($ping)
    {
        if ($ping < 100) return 'text-green-400';
        if ($ping < 150) return 'text-[#28a745]';
        return 'text-red-400';
    }

    public function setActiveLocation($locationId)
    {
        $this->activeLocation = $locationId;
    }

    public function render()
    {
        return view('livewire.locations-map');
    }

    public function dehydrate()
    {
        // Her 1 saniyede bir ping isteklerini yenile
        $this->dispatchBrowserEvent('ping-refresh', [
            'interval' => 1000
        ]);
    }
} 