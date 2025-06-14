import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Perfume {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  notes: string[];
}

export default function PerfumeCarrousel() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null);

  const perfumes: Perfume[] = [
    {
      id: "p1",
      name: "Flor de Lis",
      price: 199.9,
      imageUrl: "/assets/img1.png",
      description:
        "A delicate floral fragrance inspired by the elegance of the iris flower, evoking sophistication and grace.",
      notes: ["Iris", "Jasmine", "Vanilla", "Sandalwood"],
    },
    {
      id: "p2",
      name: "Noite de Verão",
      price: 249.5,
      imageUrl: "/assets/img1.png",
      description:
        "A vibrant and warm scent capturing the essence of a summer night, with citrus and woody undertones.",
      notes: ["Bergamot", "Cedarwood", "Amber", "Musk"],
    },
    {
      id: "p3",
      name: "Étoile d’Or",
      price: 299.0,
      imageUrl: "/assets/img1.png",
      description:
        "A luxurious fragrance with sparkling top notes and a rich, golden heart, perfect for evening wear.",
      notes: ["Champagne", "Rose", "Oud", "Patchouli"],
    },
    {
      id: "p4",
      name: "Brisa do Mar",
      price: 229.9,
      imageUrl: "/assets/img1.png",
      description:
        "A fresh and aquatic scent reminiscent of ocean breezes, with a touch of tropical fruits.",
      notes: ["Sea Salt", "Mango", "Coconut", "Driftwood"],
    },
    {
      id: "p5",
      name: "Velvet Noir",
      price: 279.5,
      imageUrl: "/assets/img1.png",
      description:
        "A deep, sensual fragrance with velvety notes, ideal for those who embrace mystery.",
      notes: ["Black Orchid", "Leather", "Tonka Bean", "Incense"],
    },
  ];

  const phoneNumber = "5531999999999";

  const handleWhatsApp = (perfume: Perfume) => {
    const mensagem = encodeURIComponent(
      `Olá! Tenho interesse no perfume "${perfume.name}" por R$${perfume.price.toFixed(2)}.`
    );
    return `https://wa.me/${phoneNumber}?text=${mensagem}`;
  };

  return (
    <section
      className="relative bg-gradient-to-r from-[#5e1f3d] to-[#fdf6f0] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden"
      data-aos="fade-in"
      style={{
        backgroundImage: "url(/assets/texture.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg mb-10 text-center tracking-tight"
          data-aos="fade-up"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Perfumes em Destaque
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6 px-1 sm:px-0">
              {perfumes.map((perfume, index) => (
                <div
                  key={perfume.id}
                  className="flex-none w-[85%] sm:w-[50%] md:w-[33%] lg:w-[22%] min-w-[220px] max-w-xs"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="group bg-[#fdf6f0]/95 rounded-2xl overflow-hidden shadow-2xl h-[380px] sm:h-[420px] flex flex-col transition-all duration-300 hover:shadow-[#f43f5e]/50"
                    style={{ border: "1px solid #5e1f3d" }}
                  >
                    <div className="relative h-60 sm:h-64 overflow-hidden">
                      <img
                        src={perfume.imageUrl}
                        alt={perfume.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#5e1f3d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backdropFilter: "blur(2px)" }}
                      />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div className="text-center">
                        <p
                          className="font-semibold text-base sm:text-lg truncate"
                          style={{ color: "#5e1f3d" }}
                        >
                          {perfume.name}
                        </p>
                        <p
                          className="font-bold text-sm sm:text-base"
                          style={{ color: "#3e1428" }}
                        >
                          R$ {perfume.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-3 flex flex-col gap-2">
                        <button
                          onClick={() => setSelectedPerfume(perfume)}
                          className="w-full px-4 py-2 text-sm rounded-lg transition-colors"
                          style={{ backgroundColor: "#f43f5e", color: "#fff" }}
                        >
                          Ver Mais
                        </button>
                        <a
                          href={handleWhatsApp(perfume)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-2 text-sm rounded-lg transition-colors text-center"
                          style={{ backgroundColor: "#5e1f3d", color: "#fff" }}
                        >
                          Comprar via WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="z-10 absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f43f5e]"
            style={{ backgroundColor: "#5e1f3d", color: "#fff" }}
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="z-10 absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 p-3 rounded-full shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#f43f5e]"
            style={{ backgroundColor: "#5e1f3d", color: "#fff" }}
            aria-label="Próximo slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedPerfume && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          data-aos="zoom-in"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div
            className="relative w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto bg-[#fdf6f0] p-6 sm:p-8 rounded-2xl border"
            style={{ borderColor: "#5e1f3d" }}
          >
            <button
              onClick={() => setSelectedPerfume(null)}
              className="absolute top-4 right-4 text-[#5e1f3d] hover:text-[#3e1428]"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>
            <h3
              id="modal-title"
              className="text-2xl sm:text-3xl font-bold mb-4"
              style={{ color: "#5e1f3d" }}
            >
              {selectedPerfume.name}
            </h3>
            <img
              src={selectedPerfume.imageUrl}
              alt={selectedPerfume.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-sm sm:text-base mb-4" style={{ color: "#5e1f3d" }}>
              {selectedPerfume.description}
            </p>
            <div className="mb-4">
              <h4 className="font-semibold text-base sm:text-lg" style={{ color: "#5e1f3d" }}>
                Notas Olfativas
              </h4>
              <ul
                className="list-disc list-inside text-sm sm:text-base"
                style={{ color: "#5e1f3d" }}
              >
                {selectedPerfume.notes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
            <p className="font-bold text-base sm:text-lg mb-4" style={{ color: "#3e1428" }}>
              R$ {selectedPerfume.price.toFixed(2)}
            </p>
            <a
              href={handleWhatsApp(selectedPerfume)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block px-4 py-3 text-sm rounded-lg transition-colors text-center"
              style={{ backgroundColor: "#5e1f3d", color: "#fff" }}
            >
              Comprar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
