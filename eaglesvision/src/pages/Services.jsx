import "../styles/main.css";

export default function Services() {
  const services = [
    { title: "Website Development", desc: "Beautiful, fast, and responsive websites." },
    { title: "SEO Optimization", desc: "Improve your visibility on Google." },
    { title: "Brand Design", desc: "Professional logos and digital branding." },
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
