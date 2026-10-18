import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow, CTA } from "@/components/studio";
import { siteMeta } from "@/lib/site-meta";
export const Route = createFileRoute("/blog")({
  head: () =>
    siteMeta(
      "Learning journal",
      "Updates to be added as IRAKOZE PEACE ELISE continues her nursing studies.",
      undefined,
      { url: "https://irakozepeaceelise.netlify.app/blog" },
    ),
  component: Journal,
});
function Journal() {
  return (
    <>
      <section className="container page-heading">
        <Eyebrow>Learning journal</Eyebrow>
        <h1>
          Reflections and notes,
          <br />
          <em>coming in time.</em>
        </h1>
        <p>I will share learning reflections here as I continue my nursing studies.</p>
      </section>
      <section className="container detail-content">
        <div>
          <Eyebrow>Portfolio in progress</Eyebrow>
          <h2>
            More to come
            <br />
            <em>as I learn.</em>
          </h2>
        </div>
        <div>
          <p>
            No study notes or clinical experiences have been published yet. This page will be
            updated with my own reflections when they are ready.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
