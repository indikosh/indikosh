const SERVICES = [
  { label: 'Best Tour Guide', href: '#' },
  { label: 'Tour Booking', href: '#' },
  { label: 'Hotel Booking', href: '#' },
  { label: 'Ticket Booking', href: '#' },
]

const SOCIAL_LINKS = [
  { icon: 'Facebook', href: '#', faClass: 'fa-brands fa-facebook' },
  { icon: 'YouTube', href: '#', faClass: 'fa-brands fa-youtube' },
  { icon: 'LinkedIn', href: '#', faClass: 'fa-brands fa-linkedin' },
  { icon: 'Instagram', href: '#', faClass: 'fa-brands fa-instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1C2F] text-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <a href="#">
                <img src="/company_logo.png" alt="Indikosh" className="h-12 w-auto brightness-0 invert" />
              </a>
            </div>
            <div className="text-gray-300 text-sm leading-relaxed space-y-1">
              <p><strong className="text-white">Indikosh Travels</strong></p>
              <p><strong className="text-gray-400">GST:</strong> 08ABCDE1234F1Z5</p>
              <p><strong className="text-gray-400">CIN:</strong> U12345RJ2020PTC123456</p>
            </div>
            <div className="flex gap-3 mt-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container transition-all"
                >
                  <i className={`${link.faClass} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-secondary-container transition-colors text-sm"
                  >
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5">location_on</span>
                <div>
                  <h6 className="text-gray-300 text-sm leading-relaxed">
                    14/40 Chopasani Housing Board, <br /> Jodhpur (Raj.) 342001
                  </h6>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5">mail</span>
                <div>
                  <h6>
                    <a href="mailto:info@indikosh.com" className="text-gray-300 hover:text-secondary-container transition-colors text-sm">
                      info@indikosh.com
                    </a>
                  </h6>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5">call</span>
                <div>
                  <h6>
                    <a href="tel:+919588410022" className="text-gray-300 hover:text-secondary-container transition-colors text-sm">
                      +91 95884 10022
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4 leading-snug">
              Our Newsletter
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              Stay connected &amp; never miss a deal! Subscribe to our newsletter and get travel offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-gray-400 w-full focus:outline-none focus:ring-1 focus:ring-secondary-container"
              />
              <button
                type="submit"
                className="orange-gradient-btn text-white px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h2 className="mb-4 select-none text-center text-[clamp(42px,12vw,100px)] font-bold leading-none text-white/5">
              INDIKOSH
            </h2>
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                @Copyright 2025 <span className="text-white font-semibold">INDIKOSH,</span> All rights reserved
              </p>
              <p className="text-gray-500 text-[10px] mt-1">ISO 9001:2015 Certified</p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary-container transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined">keyboard_arrow_up</span>

              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
