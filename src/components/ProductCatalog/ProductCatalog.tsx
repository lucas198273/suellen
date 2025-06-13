import React, { useEffect, useState } from "react";
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

const ProductCatalog: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
    {
      id: "p6",
      name: "Aurora Sublime",
      price: 259.0,
      imageUrl: "/assets/img1.png",
      description:
        "A radiant fragrance with a blend of floral and spicy notes, perfect for day or night.",
      notes: ["Saffron", "Lily", "Ambergris", "Cedar"],
    },   {
      id: "p7",
      name: "Aurora Sublime",
      price: 259.0,
      imageUrl: "/assets/img1.png",
      description:
        "A radiant fragrance with a blend of floral and spicy notes, perfect for day or night.",
      notes: ["Saffron", "Lily", "Ambergris", "Cedar"],
    },   {
      id: "p8",
      name: "Aurora Sublime",
      price: 259.0,
      imageUrl: "/assets/img1.png",
      description:
        "A radiant fragrance with a blend of floral and spicy notes, perfect for day or night.",
      notes: ["Saffron", "Lily", "Ambergris", "Cedar"],
    },
  ];

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(to right, #5e1f3d, #3e1428)",
        color: "#fff",
      }}
      data-aos="fade-in"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Catálogo de Perfumes
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-aos="zoom-in"
        >
          {perfumes.map((perfume, index) => (
            <div
              key={perfume.id}
              className="group bg-[#fdf6f0]/90 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#f43f5e]/50"
              style={{ border: "1px solid #f43f5e" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={perfume.imageUrl}
                  alt={perfume.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#5e1f3d]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backdropFilter: "blur(2px)" }}
                />
              </div>
              <div className="p-4 text-center">
                <h3
                  className="text-xl font-semibold mb-2 truncate"
                  style={{ color: "#5e1f3d" }}
                >
                  {perfume.name}
                </h3>
                <p
                  className="text-lg font-bold mb-4"
                  style={{ color: "#3e1428" }}
                >
                  R$ {perfume.price.toFixed(2)}
                </p>
                <button
                  onClick={() => setSelectedPerfume(perfume)}
                  className="w-full px-4 py-2 text-white rounded-lg transition-colors"
                  style={{ backgroundColor: "#f43f5e" }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f43f5e80")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f43f5e")}
                  aria-label={`Ver mais sobre ${perfume.name}`}
                >
                  Ver Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Perfume Details */}
        {selectedPerfume && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            data-aos="zoom-in"
            role="dialog"
            aria-labelledby="modal-title"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            <div
              className="bg-[#fdf6f0]/95 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
              style={{ border: "1px solid #5e1f3d" }}
            >
              <button
                onClick={() => setSelectedPerfume(null)}
                className="absolute top-4 right-4"
                style={{ color: "#5e1f3d" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#3e1428")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#5e1f3d")}
                aria-label="Fechar modal"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
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
              <p className="text-base sm:text-lg mb-4" style={{ color: "#5e1f3d" }}>
                {selectedPerfume.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-lg sm:text-xl mb-2" style={{ color: "#5e1f3d" }}>
                  Notas Olfativas
                </h4>
                <ul className="list-disc list-inside text-base sm:text-lg" style={{ color: "#5e1f3d" }}>
                  {selectedPerfume.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>
              <p className="font-bold text-lg sm:text-xl mb-4" style={{ color: "#3e1428" }}>
                R$ {selectedPerfume.price.toFixed(2)}
              </p>
              <a
                href={`https://wa.me/5531999999999?text=Olá! Tenho interesse no perfume "${selectedPerfume.name}" por R$${selectedPerfume.price.toFixed(2)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block px-4 py-3 text-white rounded-lg transition-colors text-center"
                style={{ backgroundColor: "#5e1f3d" }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3e1428")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5e1f3d")}
              >
                Comprar via WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;