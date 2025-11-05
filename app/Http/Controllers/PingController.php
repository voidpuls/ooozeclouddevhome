<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Process;

class PingController extends Controller
{
    private $locationIPs = [
        'germany' => '78.46.170.2',
        'norway' => '185.243.216.1',
        'turkey' => '185.50.70.47',
        'russia' => '185.71.67.1',
        'india' => '103.168.30.1',
        'usa' => '104.37.173.20',
        'mexico' => '189.201.128.1',
        'japan' => '223.27.68.216',
        'australia' => '51.161.196.97'
    ];

    public function ping(Request $request)
    {
        $locationId = $request->query('location');

        if (!$locationId || !isset($this->locationIPs[$locationId])) {
            return response()->json([
                'error' => 'Invalid location'
            ], 400);
        }

        try {
            $ip = $this->locationIPs[$locationId];
            $command = PHP_OS_FAMILY === 'Windows' 
                ? "ping -n 1 {$ip}"  // Windows
                : "ping -c 1 {$ip}"; // Linux/MacOS

            $result = Process::run($command);
            
            if ($result->successful()) {
                $output = $result->output();
                
                // Parse ping time from output
                $pingTime = 0;
                if (PHP_OS_FAMILY === 'Windows') {
                    if (preg_match('/Average = (\d+)ms/', $output, $matches)) {
                        $pingTime = (int) $matches[1];
                    }
                } else {
                    if (preg_match('/time=(\d+\.?\d*) ms/', $output, $matches)) {
                        $pingTime = (float) $matches[1];
                    }
                }

                return response()->json([
                    'success' => true,
                    'ping' => $pingTime,
                    'location' => $locationId
                ]);
            }

            return response()->json([
                'success' => false,
                'error' => 'Connection failed',
                'location' => $locationId
            ], 500);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => $e->getMessage(),
                'location' => $locationId
            ], 500);
        }
    }
} 