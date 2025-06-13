import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    perfume: '',
    dataEntrega: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Gostaria de fazer um pedido de perfume.\n\nNome: ${form.nome}\nPerfume desejado: ${form.perfume}\nData preferida para entrega: ${form.dataEntrega}`;
    const whatsappLink = `https://wa.me/5531983703055?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-pink-50 to-pink-200 text-pink-900 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto principal */}
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Descubra <br />
            o Perfume <span className="text-pink-600">Perfeito</span> para Você
          </h1>
          <p className="text-lg text-pink-800 mb-6 max-w-md">
            Explore aromas sofisticados e exclusivos. Encontre seu novo perfume favorito e realce sua essência!
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition text-white font-semibold"
          >
            Faça seu Pedido
          </button>
        </div>

        {/* Imagem */}
        <div data-aos="fade-left" className="w-full md:w-1/2">
          <img
            src="/assets/img1.png" // Substitua pela imagem do perfume que quiser
            alt="Frasco de perfume elegante"
            loading="lazy"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div
            data-aos="zoom-in"
            className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative"
          >
            {/* Botão de fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              aria-label="Fechar"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-4 text-pink-900">Faça seu Pedido</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Seu nome"
                required
                maxLength={50}
                pattern="[A-Za-zÀ-ÿ\s.'-]+"
                title="Somente letras e pontuação básica"
                className="w-full px-4 py-2 border border-pink-300 rounded-lg text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="text"
                name="perfume"
                value={form.perfume}
                onChange={handleChange}
                placeholder="Nome do perfume desejado"
                required
                maxLength={50}
                className="w-full px-4 py-2 border border-pink-300 rounded-lg text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="date"
                name="dataEntrega"
                value={form.dataEntrega}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-pink-300 rounded-lg text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-500 transition"
              >
                Enviar para WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
