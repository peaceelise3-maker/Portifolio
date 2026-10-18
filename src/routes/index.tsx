import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutBlock, CTA, Eyebrow, TextLink } from "@/components/studio";
import { images } from "@/assets/images";
import { siteMeta } from "@/lib/site-meta";
export const Route = createFileRoute("/")({
  head: () =>
    siteMeta(
      "Nursing Student Portfolio",
      "IRAKOZE PEACE ELISE is a nursing student sharing her healthcare learning journey, nursing studies, and passion for patient care.",
      images.hero,
      { url: "https://irakozepeaceelise.netlify.app/", keywords: "IRAKOZE PEACE ELISE, nursing student, nursing student portfolio, healthcare student, student nurse, nursing studies, patient care, learning journey" },
    ),
  component: Index,
});
function Index() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <Eyebrow>Nursing student</Eyebrow>
            <h1>
              IRAKOZE
              <br />
              PEACE ELISE.<em>Learning with care.</em>
            </h1>
            <p className="hero-description">
              I am IRAKOZE PEACE ELISE, a nursing student sharing my healthcare learning journey,
              nursing studies, and passion for patient care through a personal portfolio built around
              growth, education, and care.
            </p>
            <div className="hero-actions">
              <Button asChild variant="studio">
                <Link to="/portfolio">
                  My portfolio
                  <ArrowUpRight />
                </Link>
              </Button>
              <TextLink to="/about">About me</TextLink>
            </div>
            <div className="hero-signature">
              <div>
                <strong>IRAKOZE PEACE ELISE</strong>
                <small>Nursing student</small>
              </div>
            </div>
          </div>
          <div className="hero-photo">
            <img src={images.hero} alt="Portrait of IRAKOZE PEACE ELISE" fetchPriority="high" />
            <div className="paper-note">
              learning
              <br />
              <em>with purpose.</em>
            </div>
            <div className="availability">Nursing student · Personal portfolio</div>
          </div>
          <div className="hero-bottom">
            <Eyebrow>Nursing studies / Learning / Personal growth</Eyebrow>
            <a href="#discover" className="scroll-link" aria-label="Discover more about me">
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <AboutBlock />
      <CTA />
    </>
  );
}
