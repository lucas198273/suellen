import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutLoja() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="min-h-screen pt-32 pb-16 px-4"
      style={{
        background: "linear-gradient(to right, #5e1f3d, #3e1428)",
        color: "#fdf6f0",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Imagem da fundadora */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-right"
        >
          <img
            src="/assets/imgdn.jpeg"
            alt="Suellen, fundadora da loja"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Texto da seção */}
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Sobre a Nossa Loja
          </h2>

          <p className="text-lg sm:text-xl mb-6">
            Fundada por <strong>Suellen</strong>, uma apaixonada por fragrâncias autênticas e marcantes, nossa loja nasceu com o propósito de entregar perfumes que contam histórias.
          </p>

          <p className="text-lg sm:text-xl mb-6">
            Trabalhamos exclusivamente com <strong>perfumes originais e importados</strong>, cuidadosamente selecionados para garantir qualidade, sofisticação e durabilidade.
          </p>

          <p className="text-lg sm:text-xl">
            Cada fragrância disponível em nosso catálogo é fruto de uma curadoria atenta, feita com carinho para proporcionar experiências únicas a cada cliente. Seja para uso pessoal ou para presentear alguém especial, você encontra aqui o aroma perfeito para cada momento.
          </p>
        </div>
      </div>
    </section>
  );
}
