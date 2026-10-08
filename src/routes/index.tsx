import { createFileRoute } from "@tanstack/react-router";
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ArrowDown, Star, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AboutBlock, ProjectGrid, ServicesBlock, Testimonial, CTA, Eyebrow, TextLink } from '@/components/studio';
import { images } from '@/assets/images';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'Anne Studio — Brands with soul. Websites with purpose.' },
    { name: 'description', content: 'Thoughtful brand identity, website design and creative direction by Anne Chance Nyirahabimana.' },
    { property: 'og:title', content: 'Anne Studio — Brands with soul. Websites with purpose.' },
    { property: 'og:description', content: 'Thoughtful brands and beautiful websites for people with a vision.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
    { property: 'og:image', content: images.hero }, { name: 'twitter:image', content: images.hero },
  ] }),
  component: Index,
});
function Index() {
  return <><section className="hero"><div className="container hero-inner"><div className="hero-copy"><Eyebrow>A creative mind. A thoughtful heart.</Eyebrow><h1>I craft digital<br/>experiences.<em>With a little soul.</em></h1><p className="hero-description">Thoughtful brands and beautiful websites for people with a vision. Let’s bring yours to life.</p><div className="hero-actions"><Button asChild variant="studio"><Link to="/contact">Let’s create together<ArrowUpRight/></Link></Button><TextLink to="/portfolio">View my work</TextLink></div><div className="hero-signature"><Flower2 size={27} strokeWidth={1}/><div><strong>Anne Chance Nyirahabimana</strong><small>Creative portfolio & design studio</small></div></div></div><div className="hero-photo"><img src={images.hero} alt="Illustrative creative studio portrait in soft pink sunlight" fetchPriority="high"/><Star className="hero-star" size={37}/><div className="paper-note">made with<br/><em>intention.</em></div><div className="availability">Open to beautiful possibilities</div></div><div className="hero-bottom"><Eyebrow>Brand identity　/　Web design　/　Creative direction</Eyebrow><a href="#discover" className="scroll-link" aria-label="Discover the studio"><ArrowDown size={16}/></a></div></div></section><AboutBlock/><section className="container work-section"><div className="section-top"><div><Eyebrow>A few things I’ve poured my heart into</Eyebrow><h2>Selected work</h2></div><TextLink to="/portfolio">Explore the portfolio</TextLink></div><ProjectGrid/><p className="concept-note">A collection of studio concept projects.</p></section><ServicesBlock/><Testimonial/><CTA/></>;
}
