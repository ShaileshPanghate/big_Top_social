import Navbar from "../components/Navbar";

export default function Testimonials() {
  const feedback = [
    { name: "Rahul Sharma", text: "Fantastic team! Our traffic grew by 120% in 3 months." },
    { name: "Sneha Patel", text: "Professional and strategic — their SEO results were amazing." },
    { name: "Amit Verma", text: "Our ad campaigns delivered outstanding ROI!" },
  ];

  return (
    <>
    <Navbar />
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-12">What Our Clients Say</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {feedback.map((f, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="italic text-gray-700 mb-4">“{f.text}”</p>
            <h4 className="font-semibold text-indigo-600">{f.name}</h4>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
