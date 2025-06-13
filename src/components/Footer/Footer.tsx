import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 mt-10"
      style={{
        background: "linear-gradient(to right, #5e1f3d, #fdf6f0)",
        color: "#fff",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <h2
          className="text-xl font-bold mb-4 md:mb-0"
          style={{ color: "#5e1f3d", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Perfumes Exclusivos
        </h2>

        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.instagram.com/listen_kazak?igsh=MTJyM2M2eWtuc29qag%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f43f5e" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f43f5e80")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f43f5e")}
            className="transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@listen_kazak?si=WWjfE2QBzP4pNmdH"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f43f5e" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#f43f5e80")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#f43f5e")}
            className="transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div
        className="text-center text-sm mt-6"
        style={{ color: "#5e1f3d", fontStyle: "italic" }}
      >
        © {new Date().getFullYear()} Perfumes Exclusivos. Todos os direitos reservados.
      </div>
    </footer>
  );
}