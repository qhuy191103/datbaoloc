import AnhDuy from '../assets/images/anhduydeptrai.jpg';

function QuoteComponent() {
  return (
    <section
      id="QuoteComponent"
      className="relative w-full h-auto bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${AnhDuy})` }}
    >
      {/* Overlay background */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Content wrapper with flex to align right */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-end justify-center min-h-screen text-right pr-4 sm:pr-8 lg:pr-16">
        <blockquote className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-8 leading-relaxed">
          "Uy tín là nền tảng, chuyên nghiệp là thái độ, <br />
          <span
            className="text-yellow-400"
            style={{
              background: "linear-gradient(to right, #f9f6d3, #caa340)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              paddingBottom: "1rem"
            }}
          >
            thành công là kết quả tất yếu
          </span>"
        </blockquote>
      </div>
    </section>
  );
}
export default QuoteComponent;