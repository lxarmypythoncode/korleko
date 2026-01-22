import { History, Target, Users } from 'lucide-react';
import { useState } from 'react';

const tabs = [
  { id: 'sejarah', icon: History, label: 'Sejarah' },
  { id: 'visi-misi', icon: Target, label: 'Visi & Misi' },
  { id: 'struktur', icon: Users, label: 'Struktur Organisasi' },
];

const struktur = [
  { jabatan: 'Kepala Desa', nama: 'H. Ahmad Suryadi, S.Sos' },
  { jabatan: 'Sekretaris Desa', nama: 'Budi Santoso, S.AP' },
  { jabatan: 'Kaur Keuangan', nama: 'Sri Wahyuni, S.E' },
  { jabatan: 'Kaur Perencanaan', nama: 'Drs. Hendra Wijaya' },
  { jabatan: 'Kasi Pemerintahan', nama: 'Agus Pratama, S.H' },
  { jabatan: 'Kasi Kesejahteraan', nama: 'Siti Nurhaliza, S.Kesos' },
];

const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState('sejarah');

  return (
    <section id="profil" className="section-padding bg-muted">
      <div className="container-village">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Profil Desa
          </span>
          <h2 className="section-title">Mengenal Lebih Dekat</h2>
          <p className="section-subtitle mx-auto">
            Pelajari sejarah, visi misi, dan struktur organisasi Desa Sejahtera
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-foreground hover:bg-secondary'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="card-village p-6 lg:p-10">
          {activeTab === 'sejarah' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Sejarah Desa Sejahtera</h3>
              <div className="prose max-w-none text-muted-foreground space-y-4">
                <p>
                  Desa Sejahtera didirikan pada tahun 1945 oleh para pendiri yang memiliki visi untuk menciptakan 
                  komunitas yang mandiri dan berkembang. Awalnya, desa ini merupakan perkampungan kecil dengan 
                  beberapa keluarga petani yang hidup harmonis dengan alam.
                </p>
                <p>
                  Seiring berjalannya waktu, Desa Sejahtera berkembang menjadi desa yang maju dengan berbagai 
                  fasilitas modern namun tetap menjaga kearifan lokal dan budaya leluhur. Pada tahun 1980, 
                  desa ini diresmikan sebagai desa administratif di bawah Kecamatan Makmur.
                </p>
                <p>
                  Saat ini, Desa Sejahtera telah menjadi salah satu desa percontohan dalam hal pengelolaan 
                  pemerintahan desa yang baik dan pelayanan publik yang prima. Berbagai penghargaan telah 
                  diraih sebagai bukti komitmen dalam melayani masyarakat.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'visi-misi' && (
            <div className="animate-fade-in">
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Visi</h3>
                <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                  <p className="text-lg text-foreground italic">
                    "Terwujudnya Desa Sejahtera yang Maju, Mandiri, dan Berbudaya menuju Masyarakat yang 
                    Adil dan Makmur"
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Misi</h3>
                <ul className="space-y-4">
                  {[
                    'Meningkatkan kualitas pelayanan publik yang prima dan transparan',
                    'Mengembangkan potensi ekonomi lokal berbasis pertanian dan UMKM',
                    'Membangun infrastruktur desa yang berkualitas dan merata',
                    'Meningkatkan kualitas sumber daya manusia melalui pendidikan dan pelatihan',
                    'Melestarikan budaya dan kearifan lokal desa',
                  ].map((misi, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground pt-1">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'struktur' && (
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Struktur Organisasi Pemerintah Desa</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {struktur.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-secondary rounded-xl hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.nama}</h4>
                    <p className="text-sm text-muted-foreground">{item.jabatan}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
