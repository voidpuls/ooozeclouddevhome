'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 relative">
        {/* Logo with gradient lines */}
        <div className="flex items-center gap-x-4 mb-24 max-w-[1920px] mx-auto">
          <div className="h-0.5 w-full bg-gradient-to-l from-[#28a745] via-[#28a745]/80 to-transparent"></div>
          <svg className="w-10 h-10 text-[#28a745] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            <path d="M12 8l-4 4h3v4h2v-4h3z"/>
          </svg>
          <div className="h-0.5 w-full bg-gradient-to-r from-[#28a745] via-[#28a745]/80 to-transparent"></div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-16 mb-24 max-w-[1400px] mx-auto">
          {/* ALL SERVICES */}
          <div className="space-y-6">
            <h4 className="text-[#28a745] font-bold text-base uppercase mb-8">PRODUCTS</h4>
            <ul className="space-y-4">
              {[
                { label: "Premium VPS", href: "/vps" },
                { label: "Budget VPS", href: "/vps/budget" },
                { label: "Dedicated Servers", href: "/dedicated" },
                { label: "Web Hosting", href: "/webhosting" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#8b8b8b] hover:text-gray-300 transition-colors duration-300 text-[15px] tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GAME SERVERS */}
          <div className="space-y-6">
            <h4 className="text-[#28a745] font-bold text-base uppercase mb-8">GAME SERVERS</h4>
            <ul className="space-y-4">
              {[
                { label: "Ark: Survival Evolved", href: "/games/ark-survival-evolved" },
                { label: "Minecraft", href: "/games/minecraft" },
                { label: "Palworld", href: "/games/palworld" },
                { label: "Rust", href: "/games/rust" },
                { label: "7 Days to Die", href: "/games/7-days-to-die" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#8b8b8b] hover:text-gray-300 transition-colors duration-300 text-[15px] tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HELP & SUPPORT */}
          <div className="space-y-6">
            <h4 className="text-[#28a745] font-bold text-base uppercase mb-8">HELP & SUPPORT</h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "/company/about" },
                { label: "Documentation", href: "https://docs.oozecloud.com" },
                { label: "Discord", href: "https://discord.gg/oozecloud" },
                { label: "Network Status", href: "https://status.oozecloud.com" },
                { label: "Submit a Ticket", href: "https://client.oozecloud.com/tickets" },
                { label: "Hardware", href: "/hardware" },
                { label: "Terms & Service", href: "/company/terms" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#8b8b8b] hover:text-gray-300 transition-colors duration-300 text-[15px] tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CUSTOMER RESOURCES */}
          <div className="space-y-6">
            <h4 className="text-[#28a745] font-bold text-base uppercase mb-8">CUSTOMER RESOURCES</h4>
            <ul className="space-y-4">
              {[
                { label: "Dashboard", href: "https://control.oozecloud.com" },
                { label: "Billing", href: "https://client.oozecloud.com/" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#8b8b8b] hover:text-gray-300 transition-colors duration-300 text-[15px] tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center max-w-[1400px] mx-auto">
          <div className="flex flex-col items-center space-y-5 w-full">
            <div className="flex items-center w-full">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#28a745] to-transparent"></div>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-[#28a745]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 8l-4 4h3v4h2v-4h3z"/>
              </svg>
              <span className="text-[#28a745] font-bold text-lg">OozeCloud</span>
            </div>
            <p className="text-[#8b8b8b] text-[15px]">© 2025 OozeCloud. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 