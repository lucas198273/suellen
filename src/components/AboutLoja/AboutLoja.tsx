import { useEffect } from "react";
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
        {/* Imagem do perfume */}
        <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src="/assets/fly.png"
            alt="Perfume Hypnose"
            className="rounded-xl shadow-lg w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* Texto sobre o perfume */}
        <div className="w-full lg:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Hypnose - Nº 163
          </h2>

          <p className="text-lg sm:text-xl mb-6">
            O perfume <strong>Hypnose</strong> é uma fragrância envolvente, sofisticada e marcante. Ideal para quem deseja deixar uma impressão duradoura por onde passa.
          </p>

          <p className="text-lg sm:text-xl mb-6">
            Seus principais acordes combinam notas irresistíveis que proporcionam uma experiência sensorial única:
          </p>

          <ul className="list-disc pl-6 text-lg sm:text-xl space-y-1">
            <li><strong>Baunilha</strong> – doce e aconchegante</li>
            <li><strong>Floral</strong> – delicado e elegante</li>
            <li><strong>Floral branco</strong> – suave e sofisticado</li>
            <li><strong>Frutado</strong> – toque leve e refrescante</li>
            <li><strong>Doce</strong> – marcante e feminino</li>
          </ul>

          <p className="text-lg sm:text-xl mt-6">
            Um perfume perfeito para ocasiões especiais ou para quem deseja se destacar no dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
}
