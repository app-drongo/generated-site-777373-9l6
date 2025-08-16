import About from '../../components/About';
import Contact from '../../components/Contact';

export default function AboutPage() {
  return (
    <>
      <section id="about" className="scroll-mt-16">
        <About />
      </section>
      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
    </>
  );
}