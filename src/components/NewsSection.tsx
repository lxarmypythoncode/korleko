import { Calendar, ArrowRight } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery5 from '@/assets/gallery-5.jpg';

const news = [
  {
    id: 1,
    image: gallery3,
    date: '18 Januari 2025',
    category: 'Pengumuman',
    title: 'Musyawarah Desa Tahunan 2025',
    excerpt: 'Pemerintah desa mengundang seluruh warga untuk menghadiri musyawarah desa tahunan yang akan membahas program kerja tahun 2025.',
  },
  {
    id: 2,
    image: gallery1,
    date: '15 Januari 2025',
    category: 'Kegiatan',
    title: 'Festival Budaya Desa Sejahtera',
    excerpt: 'Desa Sejahtera menggelar festival budaya tahunan dengan berbagai pertunjukan seni dan kuliner tradisional.',
  },
  {
    id: 3,
    image: gallery5,
    date: '10 Januari 2025',
    category: 'Pendidikan',
    title: 'Program Beasiswa untuk Anak Berprestasi',
    excerpt: 'Pemerintah desa meluncurkan program beasiswa bagi siswa berprestasi dari keluarga kurang mampu.',
  },
];

const NewsSection = () => {
  return (
    <section id="berita" className="section-padding bg-muted">
      <div className="container-village">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Berita Terbaru
            </span>
            <h2 className="section-title">Berita & Pengumuman</h2>
            <p className="section-subtitle">
              Informasi terkini seputar kegiatan dan pengumuman desa
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            Lihat Semua Berita
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <article
              key={item.id}
              className="card-village overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
