import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { siteMeta } from "@/lib/site-meta";
export const Route = createFileRoute("/portfolio/$slug")({
  head: () =>
    siteMeta("Project not found", "This portfolio does not have a project at that address."),
  notFoundComponent: () => (
    <section className="container page-heading">
      <h1>Project not found</h1>
      <p>
        <Link to="/portfolio">Explore my portfolio</Link>
      </p>
    </section>
  ),
  component: ProjectDetail,
});
function ProjectDetail() {
  throw notFound();
}
