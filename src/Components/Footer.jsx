import logo_text from "../assets/img/VICE_White.png"
export default function Footer() {
    return (
      <footer className="bg-back_color w-full text-white px-[254.24px] py-12">
        <div className="mx-auto">
          <div className="flex justify-between items-start md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            {/* Logo */}
            <div className="lg:col-span-4 w-[234px] h-[86px]">
              <img
                src={logo_text}
                alt="VICE"
                className=""
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
  
            {/* Navigation Links */}
            <nav className="lg:col-span-8 w-[664px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="space-y-4 text-[32px]">
                  <a href="#" className="block hover:text-white">
                    Home
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white ">
                    Features
                  </a>
                  <a href="#" className="block hover:text-white text-white/70">
                    Competitions
                  </a>
                </div>
  
                {/* Column 2 */}
                <div className="space-y-4 text-[32px]">
                  <a href="#" className="block hover:text-white">
                    Token
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    Contact Us
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    Telegram
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    Instagram
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    X
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    Tik Tok
                  </a>
                </div>
  
                {/* Column 3 */}
                <div className="space-y-4 text-[32px]">
                  <a href="#" className="block hover:text-white">
                    FAQ
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    Help Center
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    How it Works
                  </a>
                  <a href="#" className="block text-white/70 hover:text-white">
                    FAQ
                  </a>
                  
                </div>
              </div>
            </nav>
          </div>
  
          {/* Divider */}
          <div className="h-px bg-white/70 my-8"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-[32px]">
              <a href="#" className="hover:text-gray-300 mr-[30px]">
                Terms and Conditions
              </a>
              <a href="#" className="hover:text-gray-300 mr-[30px]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 mr-[30px]">
                Legal Notice
              </a>
              <a href="#" className="hover:text-gray-300 mr-[30px]">
                Cookie Setting
              </a>
            </div>
  
            {/* Copyright */}
            <div className="text-gray-400 text-[32px]">© 2025, VICE</div>
          </div>
        </div>
      </footer>
    )
  }
  
  