import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, CTA } from "@/components/studio";
import { siteMeta } from "@/lib/site-meta";
export const Route = createFileRoute("/contact")({
  head: () =>
    siteMeta(
      "Contact IRAKOZE PEACE ELISE",
      "Learn more about IRAKOZE PEACE ELISE, a nursing student and healthcare learner, through her personal portfolio and learning journey.",
      undefined,
      {
        url: "https://irakozepeaceelise.netlify.app/contact",
        keywords:
          "IRAKOZE PEACE ELISE, nursing student, healthcare learner, patient care, nursing studies, portfolio contact, learning journey",
      },
    ),
  component: Contact,
});
function Contact() {
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>Contact</Eyebrow>
        <h1>
          Thank you for
          <br />
          <em>visiting my portfolio.</em>
        </h1>
        <p>
          This personal portfolio does not publish direct contact details, but it shares the story of
          a nursing student building a career in patient care and healthcare education.
        </p>
      </section>
      <section className="container detail-content">
        <div>
          <Eyebrow>About this page</Eyebrow>
          <h2>
            A safe space
            <br />
            <em>to share my learning.</em>
          </h2>
        </div>
        <div>
          <p>
            I am a nursing student and healthcare learner. This site shares information about my
            learning journey, nursing studies, and future in patient care without publishing private
            contact details.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
