import AnhDuy from '../assets/images/anhduydeptrai.jpg';

function QuoteComponent() {
  return (
    <section
      className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0"
      style={{ backgroundImage: `url(${AnhDuy})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-end justify-center h-screen text-right pr-8">
        <blockquote className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-8 leading-relaxed">
          "Uy tín là nền tảng, chuyên nghiệp là thái độ, <br />
          <span
            className="text-yellow-400"
            style={{
              background: "linear-gradient(to right, #f9f6d3, #caa340)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
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