import { ArrowRight, Users, FileText, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-village.jpg';

const stats = [
  { icon: Users, value: '3,245', label: 'Penduduk' },
  { icon: FileText, value: '1,200+', label: 'Layanan/Tahun' },
  { icon: MapPin, value: '15', label: 'RT/RW' },
];

const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pemandangan Desa Sejahtera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-village px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
            <span className="text-sm font-medium">Website Resmi Pemerintah Desa</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Selamat Datang di{' '}
            <span className="text-village-green-200">Desa Sejahtera</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Melayani masyarakat dengan sepenuh hati untuk mewujudkan desa yang maju, mandiri, dan sejahtera. 
            Bersama membangun masa depan yang lebih baik.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#layanan" className="btn-primary bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Layanan Desa
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#profil" className="btn-outline border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Tentang Kami
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-village-green-200 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
