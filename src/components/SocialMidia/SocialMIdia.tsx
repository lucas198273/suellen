import React from "react";
import { FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const SocialMediaSection: React.FC = () => {
  return (
    <section
      className="py-12 px-4"
      style={{
        background: "linear-gradient(to right, #5e1f3d, #fdf6f0)",
        color: "#fff",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="/public/assets/logo.jpeg" // Replace with your perfume logo
          alt="Perfumes Exclusivos"
          className="mx-auto mb-6 w-32 h-32  object-cover shadow-lg"
        />
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ color: "#5e1f3d", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Conecte-se com Perfumes Exclusivos
        </h2>
        <p
          className="mb-6 text-lg"
          style={{ color: "#5e1f3d", fontStyle: "italic" }}
        >
          Siga nossas redes sociais e descubra as fragrâncias mais exclusivas.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://youtube.com/@listen_kazak?si=WWjfE2QBzP4pNmdH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform transform hover:scale-110"
            style={{ color: "#f43f5e" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f43f5e80")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f43f5e")}
          >
            <FaYoutube className="w-10 h-10 mb-2" />
            <span className="text-sm">YouTube</span>
          </a>
          <a
            href="https://www.tiktok.com/@listen_kazak?_t=ZM-8wW1Kr6GF4H&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform transform hover:scale-110"
            style={{ color: "#f43f5e" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f43f5e80")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f43f5e")}
          >
            <FaTiktok className="w-10 h-10 mb-2" />
            <span className="text-sm">TikTok</span>
          </a>
          <a
            href="https://www.instagram.com/listen_kazak?igsh=MTJyM2M2eWtuc29qag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-transform transform hover:scale-110"
            style={{ color: "#f43f5e" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f43f5e80")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f43f5e")}
          >
            <FaInstagram className="w-10 h-10 mb-2" />
            <span className="text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;