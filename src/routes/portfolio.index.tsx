import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, CTA } from "@/components/studio";
import { siteMeta } from "@/lib/site-meta";
export const Route = createFileRoute("/portfolio/")({
  head: () =>
    siteMeta(
      "My Nursing Portfolio",
      "Explore the nursing student portfolio of IRAKOZE PEACE ELISE, highlighting her learning journey, healthcare education, and growth in patient care.",
      undefined,
      {
        url: "https://localhost:8081/portfolio",
        keywords:
          "IRAKOZE PEACE ELISE, nursing student portfolio, healthcare education, student nurse, patient care, learning journey, nursing studies",
      },
    ),
  component: Portfolio,
});
function Portfolio() {
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>My portfolio</Eyebrow>
        <h1>
          A nursing student.
          <br />
          <em>Learning as I grow.</em>
        </h1>
        <p>
          This nursing student portfolio is a work in progress. It highlights my learning journey,
          healthcare studies, and the growth I am building as I continue toward a future in patient
          care and nursing education.
        </p>
      </section>
      <section className="container detail-content">
        <div>
          <Eyebrow>Where I am now</Eyebrow>
          <h2>
            Studying nursing.
            <br />
            <em>Building my knowledge.</em>
          </h2>
        </div>
        <div>
          <p>
            I am currently a nursing student focused on healthcare education and patient care. More
            details about my studies, learning reflections, and milestones will be added here over
            time.
          </p>
          <div className="detail-list">
            <div>Current focus: nursing studies</div>
            <div>Portfolio focus: healthcare learning</div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
