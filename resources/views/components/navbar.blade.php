@php
$navItems = [
    [
        'title' => 'VPS Servers',
        'url' => '/vps',
        'hasDropdown' => true,
        'dropdownItems' => [
            [
                'title' => 'Premium VPS',
                'url' => '/vps/premium',
                'flags' => ['us', 'gb', 'au', 'in', 'za'],
                'specs' => ['Ryzen 9 7950X ✨ 20 Gbps ✨ 4 Tbps DDoS Protection']
            ],
            [
                'title' => 'Budget VPS',
                'url' => '/vps/budget',
                'flags' => ['us', 'gb'],
                'specs' => ['AMD EPYC 7K Series ✨ 5 Gbps ✨ 4 Tbps DDoS Protection']
            ]
        ]
    ],
    [
        'title' => 'Dedicated Servers',
        'url' => '/dedicated',
        'hasDropdown' => true,
        'hasUpdate' => true,
        'dropdownItems' => [
            [
                'title' => 'Premium Dedicated',
                'url' => '/dedicated/premium',
                'flags' => ['pl', 'tr', 'gb'],
                'specs' => ['Intel Xeon ✨ 10 Gbps ✨ DDoS Protection']
            ]
        ]
    ],
    // Game Servers ve Other menüleri de benzer şekilde eklenir
];
@endphp

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {{ request()->is('/') ? '' : 'bg-[#0B0E14]/95 backdrop-blur-md shadow-lg border-b border-[#fbbf24]/10' }}">
    <div class="w-full mx-auto flex items-center justify-between px-6 py-4">
        {{-- Logo Section --}}
        <div class="flex items-center space-x-8">
            <a href="/" class="group flex items-center">
                <h1 class="text-[#fbbf24] text-3xl font-bold tracking-tight group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    LIQUID
                </h1>
            </a>

            {{-- Announcement Bar --}}
            <div class="hidden md:flex items-center space-x-6">
                <div class="flex items-center space-x-2 px-4 py-1 bg-[#fbbf24]/10 rounded-full">
                    <span class="flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#fbbf24] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-[#fbbf24]"></span>
                    </span>
                    <span class="text-[#fbbf24] text-sm">New servers available!</span>
                    <span class="text-white bg-[#fbbf24] px-2 py-0.5 text-xs rounded-full">5</span>
                </div>
            </div>
        </div>

        {{-- Navigation Items --}}
        <div class="hidden md:flex items-center space-x-1">
            @foreach($navItems as $item)
                <div class="relative group" x-data="{ open: false }" @mouseleave="open = false">
                    <a href="{{ $item['url'] }}" 
                       class="px-4 py-2 text-white hover:text-[#fbbf24] transition-colors duration-200 flex items-center space-x-1"
                       @mouseenter="open = {{ $item['hasDropdown'] ? 'true' : 'false' }}"
                       @click.prevent="{{ $item['hasDropdown'] ? 'open = !open' : '' }}">
                        <span>{{ $item['title'] }}</span>
                        @if($item['hasDropdown'])
                            <svg class="w-4 h-4 transition-transform duration-200" 
                                 :class="{ 'rotate-180': open }"
                                 fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        @endif
                        @if(isset($item['hasUpdate']) && $item['hasUpdate'])
                            <span class="ml-2 px-2 py-0.5 text-xs bg-[#fbbf24] text-black rounded-full">
                                UPDATE
                            </span>
                        @endif
                    </a>

                    @if($item['hasDropdown'])
                        <div x-show="open" 
                             x-transition:enter="transition ease-out duration-200"
                             x-transition:enter-start="opacity-0 transform scale-95"
                             x-transition:enter-end="opacity-100 transform scale-100"
                             class="absolute mt-0 bg-[#0B0E14] border border-[#fbbf24]/10 rounded-lg shadow-xl"
                             :class="{
                                'w-[800px] p-4 -translate-x-1/2 left-1/2': '{{ $item['title'] }}' === 'Game Servers',
                                'w-[200px] -translate-x-1/4 left-1/2': '{{ $item['title'] }}' === 'Other',
                                'w-[600px] -translate-x-1/4 left-1/2': true
                             }">
                            {{-- Dropdown içeriği buraya gelecek --}}
                        </div>
                    @endif
                </div>
            @endforeach
        </div>

        {{-- Right Side Buttons --}}
        <div class="hidden md:flex items-center space-x-8">
            <a href="https://discord.gg" 
               class="text-white hover:text-[#5865F2] transition-all duration-300 p-2 hover:bg-[#5865F2]/10 rounded-lg"
               target="_blank"
               rel="noopener noreferrer">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
            </a>
            <a href="/login"
               class="bg-[#fbbf24] hover:bg-[#f59e0b] text-black px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#fbbf24]/20">
                LOGIN
            </a>
        </div>

        {{-- Mobile Menu Button --}}
        <button class="md:hidden text-gray-400 hover:text-[#fbbf24] transition-colors duration-300"
                x-data="{ open: false }"
                @click="open = !open">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      :d="open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
            </svg>
        </button>
    </div>
</nav> 