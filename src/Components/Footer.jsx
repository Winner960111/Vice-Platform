
export default function Footer() {
    return (
      <footer className="bg-back_color w-full text-text_color px-[100px] py-12">
        <div className="mx-auto">
          <div className="flex justify-between items-start md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">

            {/* Logo */}
            <div className="lg:col-span-4 w-[110px]">
              <img
                src='VICE_White 2.png'
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
                <div className="space-y-4 text-[14px]">
                  <a href="#" className="block hover:text-text_color">
                    Home
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color ">
                    Features
                  </a>
                  <a href="#" className="block hover:text-text_color text-text_color/70">
                    Competitions
                  </a>
                </div>
  
                {/* Column 2 */}
                <div className="space-y-4 text-[14px]">
                  <a href="#" className="block hover:text-text_color">
                    Token
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    Contact Us
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    Telegram
                  </a>
                  <a href="https://www.instagram.com/vicetoken/" className="block text-text_color/70 hover:text-text_color">
                    Instagram
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    X
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    Tik Tok
                  </a>
                </div>
  
                {/* Column 3 */}
                <div className="space-y-4 text-[14px]">
                  <a href="#" className="block hover:text-text_color">
                    FAQ
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    Help Center
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    How it Works
                  </a>
                  <a href="#" className="block text-text_color/70 hover:text-text_color">
                    FAQ
                  </a>
                  
                </div>
              </div>
            </nav>
          </div>
  
          {/* Divider */}
          <div className="h-px bg-text_color/70 my-8"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-[14px]">
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
            <div className="text-gray-400 font-Space_Grotesk text-[14px]">&#169; 2025, VICE</div>
          </div>
        </div>
      </footer>
    )
  }
  
  