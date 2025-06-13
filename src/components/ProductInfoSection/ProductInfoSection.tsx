import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductInfoSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="py-16 px-4"
      style={{
        background: "linear-gradient(to right, #5e1f3d, #3e1428)",
        color: "#5e1f3d",
      }}
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 text-stone-100"
          style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Sobre Nossos Produtos e Vendas
        </h2>
        <p
          className="text-lg md:text-xl mb-6 text-stone-50"
          style={{ fontStyle: "italic", lineHeight: "1.6" }}
        >
          Trabalhamos com perfumes originais e internacionais, trazendo fragrâncias exclusivas
          diretamente para você. Cada produto é autêntico, garantindo qualidade e sofisticação.
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            className="p-6 rounded-lg shadow-lg"
            style={{ backgroundColor: "#fdf6f0", border: "1px solid #5e1f3d" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Meios de Venda</h3>
            <p className="text-base">
              Todas as nossas vendas são finalizadas via WhatsApp. Entre em contato para
              consultar disponibilidade e personalizar sua compra.
            </p>
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-6 py-3 text-white rounded-lg transition-colors"
              style={{ backgroundColor: "#f43f5e" }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f43f5e80")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f43f5e")}
            >
              Fale Conosco
            </a>
          </div>
          <div
            className="p-6 rounded-lg shadow-lg"
            style={{ backgroundColor: "#fdf6f0", border: "1px solid #5e1f3d" }}
          >
            <h3 className="text-2xl font-semibold mb-4">Entrega</h3>
            <p className="text-base">
              Oferecemos entrega grátis em Betim e região em MG. Para demais locais, o frete é
              calculado no momento da compra. Consulte-nos para mais detalhes!
            </p>
          </div>
        </div>
        <p
          className="text-lg md:text-xl"
          style={{ color: "#ffffff", fontWeight: "bold" }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Compromisso com a excelência em cada fragrância.
        </p>
      </div>
    </section>
  );
};

export default ProductInfoSection;