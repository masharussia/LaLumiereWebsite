import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
          <div className="lg:col-span-1">
            <div className="bg-light-gray p-8">
              <img
                src="/favicon.png"
                alt="Site logo"
                className="w-full h-auto mb-6"
              />
              <h3 className="font-mont font-extrabold text-lg tracking-[1.4px] uppercase mb-3">
                Watch our new video
              </h3>
              <p className="font-mont text-[#888] text-sm leading-relaxed">
                Discover the artistry and craftsmanship behind our finest jewelry collections. Watch exclusive behind-the-scenes footage of our master jewelers at work.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-mont font-extrabold text-lg tracking-[1.4px] uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-6">
              <li><Link to="/delivery" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Delivery</Link></li>
              <li><Link to="/jewellery" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Your Jewellery</Link></li>
              <li><Link to="/return" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Return</Link></li>
              <li><Link to="/policy" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Return policy</Link></li>
              <li><Link to="/vr" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">VR Experience</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mont font-extrabold text-lg tracking-[1.4px] uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-6">
              <li><Link to="/careers" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/invest" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Invest</Link></li>
              <li><Link to="/affiliate" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Affiliate</Link></li>
              <li><Link to="/reports" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Reports</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mont font-extrabold text-lg tracking-[1.4px] uppercase mb-6">
              Contact
            </h3>
            <ul className="space-y-6">
              <li><Link to="/customer-care" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Customer care</Link></li>
              <li><Link to="/email" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Email us</Link></li>
              <li><Link to="/store-locator" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Store locator</Link></li>
              <li><Link to="/chat" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Chat with AI Bot</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mont font-extrabold text-lg tracking-[1.4px] uppercase mb-6">
              More
            </h3>
            <ul className="space-y-6">
              <li><Link to="/faq" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">FAQ</Link></li>
              <li><Link to="/sitemap" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Site map</Link></li>
              <li><Link to="/store-locator" className="font-mont font-semibold text-xs tracking-[1px] uppercase text-[#868686] hover:text-black transition-colors">Store locator</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-gray-200">
          <div className="text-center mb-6">
            <h3 className="font-mont font-extrabold text-lg tracking-[1.4px] uppercase mb-6">
              Follow us on
            </h3>
            <div className="flex items-center justify-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#868686] hover:text-black transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#868686] hover:text-black transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#868686] hover:text-black transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-[#888]">
            <Link to="/terms" className="font-mont font-semibold text-xs hover:text-black transition-colors">Terms & conditions</Link>
            <span className="text-[#A9A9A9]">|</span>
            <Link to="/privacy" className="font-mont font-semibold text-xs hover:text-black transition-colors">Privacy</Link>
            <span className="text-[#A9A9A9]">|</span>
            <Link to="/cookies" className="font-mont font-semibold text-xs hover:text-black transition-colors">Cookie settings</Link>
          </div>

          <div className="text-center">
            <p className="font-mont font-semibold text-xs text-[#505050]">
              © 2022 Jewellery All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
