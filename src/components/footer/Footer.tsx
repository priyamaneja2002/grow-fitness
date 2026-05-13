import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 md:px-10 border-t border-zinc-900 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 min-[1140px]:!grid-cols-4 gap-12">
        <div className="flex flex-col gap-6 justify-between">
          <div className="w-18 h-18 md:w-24 md:h-24 flex flex-col gap-1">
            {/* Logo/Icon */}
            <Link href="#top" aria-label="Go to top" className="w-full h-full inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#footer-logo-clip)">
                  <rect x="10.6667" y="30.6667" width="26.6667" height="4" rx="2" fill="#F5D73D"/>
                  <rect x="13.3333" y="24" width="21.3333" height="4" rx="2" fill="#F5D73D"/>
                  <rect x="16" y="17.3333" width="16" height="4" rx="2" fill="#F5D73D"/>
                  <rect x="18.6667" y="10.6667" width="10.6667" height="4" rx="2" fill="#F5D73D"/>
                </g>
                <defs>
                  <clipPath id="footer-logo-clip">
                    <rect width="48" height="48" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-white">
            <Link href="#" aria-label="Instagram" className="w-12 h-12 inline-flex items-center justify-center rounded-full hover:text-gymYellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </Link>
            <Link href="#" aria-label="Facebook" className="w-12 h-12 inline-flex items-center justify-center rounded-full hover:text-gymYellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.5V7.2C14 6.5 14.5 6 15.2 6H17V3H15.2C12.9 3 11 4.9 11 7.2V8.5H9V12H11V21H14V12H16.7L17 8.5H14Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link href="#" aria-label="YouTube" className="w-12 h-12 inline-flex items-center justify-center rounded-full hover:text-gymYellow transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 10L15 12L11 14V10Z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gymYellow mb-6 font-teko text-3xl md:text-5xl">GYMS</h4>
          <ul className="space-y-3 text-sm font-semibold text-white font-montserrat">
            <li><Link href="#facilities" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">FIND A GYM</Link></li>
            <li><Link href="#membership-plans" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">OWN A GYM</Link></li>
            <li><Link href="#join-now" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">FRANCHISE LOGIN</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gymYellow mb-6 font-teko text-3xl md:text-5xl">COMPANY</h4>
          <ul className="space-y-3 text-sm font-semibold uppercase text-white font-montserrat">
            <li><Link href="#about" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">About Us</Link></li>
            <li><Link href="#join-now" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Contact Us</Link></li>
            <li><Link href="#classes" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">FAQs</Link></li>
            <li><Link href="#" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Privacy Policy</Link></li>
            <li><Link href="#join-the-movement" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Employee Wellness</Link></li>
            <li><Link href="#" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Press & Marketing</Link></li>
            <li><Link href="#" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gymYellow mb-6 font-teko text-3xl md:text-5xl">MORE INFO</h4>
          <ul className="space-y-3 text-sm font-semibold uppercase text-white font-montserrat">
            <li><Link href="#" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Careers</Link></li>
            <li><Link href="#join-now" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Refer a Friend</Link></li>
            <li><Link href="#classes" className="hover:text-gymYellow transition-all duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow/80">Events and Gallery</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};