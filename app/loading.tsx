'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0f1117] flex items-center justify-center z-50">
      <div className="text-center space-y-6 relative">
        {/* Çoklu çember efekti */}
        <div className="relative mx-auto w-32 h-32">
          <div className="absolute inset-0 border-4 border-[#228B22]/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#228B22] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-4 border-[#228B22] border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>

        {/* Başlık ve animasyonlu noktalar */}
        <div className="space-y-4">
          <h2 className="text-[#228B22] text-4xl font-bold mb-2 animate-pulse">
            OoozeCloud
            <span className="ml-2 inline-flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <span 
                  key={i}
                  className="h-1 w-1 bg-[#228B22] rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg font-medium">
            <span className="animate-fade-in-out">Initializing game server</span>
            <span className="loading-dots ml-1">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </p>
        </div>

        {/* Arkaplan parçacık efekti */}
        <div className="absolute inset-0 -z-10 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#228B22] rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}