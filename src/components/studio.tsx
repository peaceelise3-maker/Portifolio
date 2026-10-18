import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Flower2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/images";

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Elise's portfolio home">
      elise<span>portfolio</span>
      <Flower2 size={18} />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav aria-label="Main navigation" className="desktop-nav">
            <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "active" }}>
              Home
            </Link>
            <Link to="/about" activeProps={{ className: "active" }}>
              About
            </Link>
            <Link to="/portfolio" activeProps={{ className: "active" }}>
              Portfolio
            </Link>
          </nav>
          <Button asChild variant="studio" className="header-cta">
            <Link to="/portfolio">
              My learning journey <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function TextLink({
  to,
  children,
}: {
  to: "/" | "/about" | "/portfolio";
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" to={to}>
      {children}
      <ArrowUpRight size={16} />
    </Link>
  );
}

export function AboutBlock() {
  return (
    <section className="about-section container" id="discover">
      <div className="about-photo about-photo--portrait">
        <img src={images.about} alt="Portrait of IRAKOZE PEACE ELISE" loading="lazy" />
        <div className="paper-note">
          learning
          <br />
          <em>with care.</em>
        </div>
      </div>
      <div className="about-copy">
        <Eyebrow>A little about me</Eyebrow>
        <h2>
          A nursing student.
          <br />
          <em>Learning with purpose.</em>
        </h2>
        <p>
          My name is IRAKOZE PEACE ELISE, and I study nursing. This portfolio is a place to share my
          learning journey and the steps I take toward a future in nursing.
        </p>
        <TextLink to="/about">More about me</TextLink>
        <div className="values">
          <span>Nursing studies</span>
          <span>Learning and growth</span>
          <span>A future in care</span>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <Eyebrow>My learning journey</Eyebrow>
          <h2>
            One step at a time.
            <br />
            <em>A future in nursing.</em>
          </h2>
          <p>I’m studying nursing and building my knowledge as I go.</p>
          <Button asChild variant="studio">
            <Link to="/portfolio">
              Explore my portfolio <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="cta-image">
          <img src={images.hero} alt="Portrait of IRAKOZE PEACE ELISE" loading="lazy" />
          <div className="paper-note">
            learning
            <br />
            <em>with purpose.</em>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            A personal portfolio
            <br />
            about my nursing studies.
          </p>
          <TextLink to="/about">About me</TextLink>
        </div>
        <div>
          <Eyebrow>Explore</Eyebrow>
          <nav aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 IRAKOZE PEACE ELISE</span>
        <span>Nursing student portfolio</span>
      </div>
    </footer>
  );
}
