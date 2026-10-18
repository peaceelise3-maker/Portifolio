import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, AboutBlock, CTA } from "@/components/studio";
import { siteMeta } from "@/lib/site-meta";
import { images } from "@/assets/images";
export const Route = createFileRoute("/about")({
  head: () =>
    siteMeta(
      "About IRAKOZE PEACE ELISE",
      "Learn more about IRAKOZE PEACE ELISE, a nursing student, healthcare learner, and future patient-care professional building her portfolio and learning journey.",
      images.hero,
      { url: "https://irakozepeaceelise.netlify.app/about", keywords: "IRAKOZE PEACE ELISE, nursing student, healthcare learner, student nurse, patient care, learning journey, nursing education" },
    ),
  component: About,
});
function About() {
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>About me</Eyebrow>
        <h1>
          IRAKOZE PEACE ELISE.
          <br />
          <em>Nursing student.</em>
        </h1>
        <p>
          I am a nursing student and healthcare learner, and this portfolio is a place to share my
          learning journey, personal growth, and passion for patient care.
        </p>
      </section>
      <AboutBlock />
      <section className="container detail-content">
        <div>
          <Eyebrow>My focus</Eyebrow>
          <h2>
            Learning today.
            <br />
            <em>Growing for tomorrow.</em>
          </h2>
        </div>
        <div>
          <p>
            I am building my knowledge through nursing studies and healthcare learning. My portfolio
            reflects the steps I am taking toward a future in patient care, education, and service,
            with each milestone contributing to my journey as a nursing student.
          </p>
          <div className="detail-list">
            <div>Nursing student</div>
            <div>Healthcare learner</div>
            <div>Patient care future</div>
          </div>
        </div>
      </section>
      <section className="container portrait-gallery" aria-labelledby="portrait-gallery-title">
        <Eyebrow>A few portraits</Eyebrow>
        <h2 id="portrait-gallery-title">
          A little more of me.
          <br />
          <em>Along the way.</em>
        </h2>
        <div className="portrait-gallery-grid">
          {images.portraits.map((portrait) => (
            <img
              key={portrait.src}
              src={portrait.src}
              alt={portrait.alt}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
