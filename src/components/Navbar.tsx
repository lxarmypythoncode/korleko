import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';

const navItems = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Profil', href: '#profil' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Berita', href: '#berita' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-village px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Jl. Desa Sejahtera No. 1, Kecamatan Makmur
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (021) 1234-5678
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Senin - Jumat: 08:00 - 16:00 WIB</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-card/95 backdrop-blur-md shadow-card'
            : 'bg-card/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-village px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#beranda" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg lg:text-xl">D</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-foreground text-lg lg:text-xl">Desa Sejahtera</h1>
                <p className="text-xs text-muted-foreground">Kecamatan Makmur, Kabupaten Bahagia</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a href="#layanan" className="btn-primary text-sm">
                Layanan Online
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg font-medium transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#layanan"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Layanan Online
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
