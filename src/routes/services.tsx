import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, CTA } from "@/components/studio";
import { siteMeta } from "@/lib/site-meta";
export const Route = createFileRoute("/services")({
  head: () =>
    siteMeta(
      "Nursing Studies Journey",
      "Follow IRAKOZE PEACE ELISE's nursing studies journey, healthcare learning, and patient-care focus through her portfolio.",
      undefined,
      {
        url: "https://localhost:8081/services",
        keywords:
          "IRAKOZE PEACE ELISE, nursing studies, healthcare education, student nurse, patient care, nursing learning, nursing student portfolio",
      },
    ),
  component: Studies,
});
function Studies() {
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>My studies</Eyebrow>
        <h1>
          Learning about
          <br />
          <em>nursing.</em>
        </h1>
        <p>
          I am studying nursing and sharing my healthcare learning journey as my portfolio develops,
          with a focus on patient care, clinical learning, and professional growth.
        </p>
      </section>
      <section className="container detail-content">
        <div>
          <Eyebrow>Learning journey</Eyebrow>
          <h2>
            One step
            <br />
            <em>at a time.</em>
          </h2>
        </div>
        <div>
          <p>
            This page will grow with my nursing studies. I am learning through healthcare education,
            patient care principles, and the development of practical understanding in a future
            clinical career.
          </p>
          <div className="detail-list">
            <div>Field of study: Nursing</div>
            <div>Current stage: Student nurse</div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
