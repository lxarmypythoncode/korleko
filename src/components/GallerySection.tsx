import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryItems = [
  { id: 1, image: gallery1, title: 'Festival Budaya Desa' },
  { id: 2, image: gallery2, title: 'Pertanian Padi Desa' },
  { id: 3, image: gallery3, title: 'Musyawarah Desa' },
  { id: 4, image: gallery4, title: 'Arsitektur Tradisional' },
  { id: 5, image: gallery5, title: 'Pendidikan Anak Desa' },
  { id: 6, image: gallery6, title: 'Masjid Desa' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <>
      <section id="galeri" className="section-padding bg-background">
        <div className="container-village">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Galeri Foto
            </span>
            <h2 className="section-title">Dokumentasi Kegiatan Desa</h2>
            <p className="section-subtitle mx-auto">
              Kumpulan foto kegiatan dan pemandangan indah Desa Sejahtera
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-xl aspect-square cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage({ image: item.image, title: item.title })}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <ZoomIn className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <span className="text-primary-foreground font-medium">{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center text-primary-foreground mt-4 text-lg font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
