export const Footer = () => {
  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ];

  const gymLinks = ["Find a Gym", "Own a Gym", "Franchise Login"];
  const companyLinks = [
    "About Us",
    "Contact Us",
    "FAQs",
    "Privacy Policy",
    "Employee Wellness",
    "Press & Marketing",
    "Terms & Conditions",
  ];
  const moreInfoLinks = ["Careers", "Refer a Friend", "Events and Gallery"];

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-10 border-t border-zinc-900 font-montserrat">
      <div className="max-w-7xl mx-auto grid grid-cols-2 min-[1140px]:grid-cols-4! gap-10 md:gap-12">
        <div className="flex flex-col gap-6 justify-between">
          <div className="w-20 h-20 md:w-24 md:h-24 flex flex-col gap-1">
            {/* Logo/Icon */}
            <div className="w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_162_8)">
                  <rect x="10.6667" y="30.6667" width="26.6667" height="4" rx="2" fill="#F5D73D"/>
                  <rect x="13.3333" y="24" width="21.3333" height="4" rx="2" fill="#F5D73D"/>
                  <rect x="16" y="17.3333" width="16" height="4" rx="2" fill="#F5D73D"/>
                  <rect x="18.6667" y="10.6667" width="10.6667" height="4" rx="2" fill="#F5D73D"/>
                </g>
                <defs>
                  <clipPath id="clip0_162_8">
                    <rect width="48" height="48" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3 text-white">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white hover:text-gymYellow hover:border-gymYellow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {index === 0 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                )}
                {index === 1 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 8.5V7.2C14 6.5 14.5 6 15.2 6H17V3H15.2C12.9 3 11 4.9 11 7.2V8.5H9V12H11V21H14V12H16.7L17 8.5H14Z"
                      fill="currentColor"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11 10L15 12L11 14V10Z" fill="currentColor" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gymYellow mb-6 font-teko text-3xl md:text-5xl">GYMS</h4>
          <ul className="space-y-3 text-sm font-semibold text-white font-montserrat uppercase tracking-wide">
            {gymLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-gymYellow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gymYellow mb-6 font-teko text-3xl md:text-5xl">COMPANY</h4>
          <ul className="space-y-3 text-sm font-semibold uppercase text-white font-montserrat">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-gymYellow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gymYellow mb-6 font-teko text-3xl md:text-5xl">MORE INFO</h4>
          <ul className="space-y-3 text-sm font-semibold uppercase text-white font-montserrat">
            {moreInfoLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-gymYellow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gymYellow focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};