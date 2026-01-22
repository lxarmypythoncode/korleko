import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const quickLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Profil Desa', href: '#profil' },
  { name: 'Layanan', href: '#layanan' },
  { name: 'Berita', href: '#berita' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' },
];

const services = [
  'Surat Keterangan',
  'Administrasi Kependudukan',
  'Pengaduan Masyarakat',
  'Bantuan Sosial',
  'IMB & Izin Usaha',
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer id="kontak" className="bg-village-green-800 text-primary-foreground">
      {/* Main Footer */}
      <div className="container-village px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Desa Sejahtera</h3>
                <p className="text-sm text-primary-foreground/70">Kecamatan Makmur</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-6">
              Melayani masyarakat dengan sepenuh hati untuk mewujudkan desa yang maju, mandiri, dan sejahtera.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  Jl. Desa Sejahtera No. 1, Kecamatan Makmur, Kabupaten Bahagia, Provinsi Nusantara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@desasejahtera.id</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">Senin - Jumat: 08:00 - 16:00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-village px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© 2025 Desa Sejahtera. Hak Cipta Dilindungi.</p>
            <p>Dibuat dengan ❤️ untuk masyarakat desa</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
