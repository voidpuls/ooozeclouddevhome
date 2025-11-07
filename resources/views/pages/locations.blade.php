@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24">
    {{-- Animated Background --}}
    <div class="fixed inset-0 -z-10">
        <div class="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#228B22]/50 to-transparent"></div>
    </div>

    <livewire:locations-map />
</div>
@endsection

{{-- Livewire Component: resources/views/livewire/locations-map.blade.php --}}
<div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mb-6 text-center sm:mb-8 md:mb-10">
            <div class="mb-2 text-xl font-bold sm:mb-4 lg:text-3xl text-white">
                Our Global Reach
            </div>
            <p class="text-gray-300">
                With data centers around the world, we're always close to you.
            </p>
        </div>
        
        <div class="relative">
            <img src="{{ asset('images/world-map.webp') }}" 
                 alt="World Map"
                 class="h-full w-full object-cover rounded-xl">
            
            @foreach($locations as $location)
            <div class="absolute flex items-center justify-center"
                 style="top: {{ $location['position']['top'] }}; left: {{ $location['position']['left'] }}; transform: translate(-50%, -50%);">
                <div class="relative flex flex-col items-center"
                     wire:mouseenter="setActiveLocation('{{ $location['id'] }}')"
                     wire:mouseleave="setActiveLocation(null)">
                    {{-- Flag --}}
                    <div class="relative w-8 h-5 rounded-sm overflow-hidden mb-2 shadow-lg">
                        <img src="{{ asset('images/flag/' . $location['flag'] . '.svg') }}"
                             alt="{{ $location['country'] }}"
                             class="object-cover w-full h-full">
                    </div>

                    {{-- Location Point --}}
                    <div class="relative">
                        <div class="w-1.5 h-1.5 bg-[#228B22] rounded-sm transform rotate-45 border border-[#228B22]"></div>
                    </div>

                    {{-- Ping Info --}}
                    <div class="mt-2 bg-[#0B0E14]/90 backdrop-blur-sm rounded-full px-3 py-1 border border-[#228B22]/10">
                        @if($pingErrors[$location['id']] ?? false)
                            <div class="text-red-400 text-xs">Failed</div>
                        @else
                            <div class="text-xs font-medium flex items-center gap-1 {{ $this->getPingColor($pings[$location['id']] ?? $location['basePing']) }}">
                                @if(isset($pings[$location['id']]))
                                    {{ $pings[$location['id']] }}
                                    <span class="text-[10px]">ms</span>
                                @else
                                    <div class="flex items-center gap-1">
                                        <div class="animate-pulse w-6 h-3 bg-gray-700 rounded"></div>
                                        <span class="text-[10px]">ms</span>
                                    </div>
                                @endif
                            </div>
                        @endif
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div> 