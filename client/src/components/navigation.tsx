import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import logo from '/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#dfeef1]/80 backdrop-blur-xl shadow-lg shadow-slate-900/10 border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link href="/">
            <div className="flex items-center group cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-[#122458] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img src={logo} alt="6VC Logo" className="w-12 h-12 object-contain" />
                </div>
                <div className="flex flex-col">
                  {/* <span className="text-4xl font-bold font-poppins text-blue-600" data-testid="logo" style={{letterSpacing: '0.05em'}}>
                    6VC
                  </span> */}
                  {/* <span className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-[#dfeef1]/80'} font-medium tracking-wider`}>IT CONSULTING</span> */}
                </div>
              </div>
            </div>
          </Link>

          {/* Professional Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('home')} 
              className={`relative px-4 py-2 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-[#dfeef1] hover:text-white'} font-medium transition-all duration-300 group`}
              data-testid="nav-home"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className={`relative px-4 py-2 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-[#dfeef1] hover:text-white'} font-medium transition-all duration-300 group flex items-center gap-1`}
                  data-testid="nav-services"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border border-slate-200">
                <DropdownMenuItem asChild>
                  <Link href="/ai-analytics-service">
                    <span className="block w-full px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer">
                      AI & Analytics Services
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cloud-services">
                    <span className="block w-full px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer">
                      Cloud Services
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/digital-modernization">
                    <span className="block w-full px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer">
                      Digital Modernization
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/data-management-services">
                    <span className="block w-full px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer">
                      Data Management Services
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/cybersecurity-services">
                    <span className="block w-full px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer">
                      Cybersecurity Services
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/professional-services">
                    <span className="block w-full px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded cursor-pointer">
                      Professional Services
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button 
              onClick={() => scrollToSection('about')} 
              className={`relative px-4 py-2 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-[#dfeef1] hover:text-white'} font-medium transition-all duration-300 group`}
              data-testid="nav-about"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className={`relative px-4 py-2 ${isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-[#dfeef1] hover:text-white'} font-medium transition-all duration-300 group`}
              data-testid="nav-contact"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>

            {/* CTA Button */}
            <div className="ml-6 pl-6 border-l border-slate-200">
              <button 
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('contact')}
                data-testid="nav-cta"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMenuOpen ? 
                <X className={`w-5 h-5 ${isScrolled ? 'text-slate-700' : 'text-[#dfeef1]'}`} /> : 
                <Menu className={`w-5 h-5 ${isScrolled ? 'text-slate-700' : 'text-[#dfeef1]'}`} />
              }
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#dfeef1]/95 backdrop-blur-xl border-t border-slate-200/50 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                data-testid="mobile-nav-home"
              >
                Home
              </button>

              {/* Mobile Services Dropdown */}
              <div className="space-y-1">
                <Link href="/ai-analytics-service">
                  <span 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                  >
                    AI & Analytics Services
                  </span>
                </Link>
                <Link href="/cloud-services">
                  <span 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                  >
                    Cloud Services
                  </span>
                </Link>
                <Link href="/digital-modernization">
                  <span 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                  >
                    Digital Modernization
                  </span>
                </Link>
                <Link href="/data-management-services">
                  <span 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                  >
                    Data Management Services
                  </span>
                </Link>
                <Link href="/cybersecurity-services">
                  <span 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                  >
                    Cybersecurity Services
                  </span>
                </Link>
                <Link href="/professional-services">
                  <span 
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200 cursor-pointer"
                  >
                    Professional Services
                  </span>
                </Link>
              </div>

              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg font-medium transition-all duration-200"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>

              <div className="pt-4 border-t border-slate-200">
                <button 
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                  data-testid="mobile-nav-cta"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}