import { FileText, Users, MessageSquare, Building, CreditCard, FileCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Surat Keterangan',
    description: 'Surat keterangan domisili, tidak mampu, kematian, kelahiran, dan lainnya.',
    color: 'bg-village-green-500',
  },
  {
    icon: Users,
    title: 'Administrasi Kependudukan',
    description: 'Pengurusan KTP, KK, akta kelahiran, dan dokumen kependudukan lainnya.',
    color: 'bg-village-blue-500',
  },
  {
    icon: MessageSquare,
    title: 'Pengaduan Masyarakat',
    description: 'Layanan pengaduan dan aspirasi masyarakat secara online 24 jam.',
    color: 'bg-village-earth-500',
  },
  {
    icon: Building,
    title: 'IMB & Izin Usaha',
    description: 'Pengurusan izin mendirikan bangunan dan izin usaha mikro kecil.',
    color: 'bg-village-green-500',
  },
  {
    icon: CreditCard,
    title: 'Bantuan Sosial',
    description: 'Pendaftaran dan verifikasi penerima bantuan sosial pemerintah.',
    color: 'bg-village-blue-500',
  },
  {
    icon: FileCheck,
    title: 'Legalisasi Dokumen',
    description: 'Legalisasi berbagai dokumen resmi untuk keperluan administrasi.',
    color: 'bg-village-earth-500',
  },
];

const ServicesSection = () => {
  return (
    <section id="layanan" className="section-padding bg-background">
      <div className="container-village">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Layanan Kami
          </span>
          <h2 className="section-title">Layanan Publik Desa</h2>
          <p className="section-subtitle mx-auto">
            Berbagai layanan administrasi untuk memenuhi kebutuhan masyarakat desa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-village p-6 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
              >
                Ajukan Permohonan
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-primary/5 rounded-2xl">
            <div className="text-left">
              <h4 className="font-semibold text-foreground">Butuh bantuan?</h4>
              <p className="text-muted-foreground text-sm">Hubungi kami untuk informasi lebih lanjut</p>
            </div>
            <a href="#kontak" className="btn-primary whitespace-nowrap">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
