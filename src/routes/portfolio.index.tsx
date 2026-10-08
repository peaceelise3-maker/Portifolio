import { createFileRoute, Link } from '@tanstack/react-router';
import { Eyebrow, ProjectGrid, CTA, Testimonial } from '@/components/studio';
import { images } from '@/assets/images';
import { siteMeta } from '@/lib/site-meta';
export const Route = createFileRoute('/portfolio/')({head:()=>siteMeta('Selected Work','A collection of thoughtful brands, beautiful websites and creative studio concepts.',images.botanicals),component:Portfolio});
function Portfolio() {return <><section className="container page-heading"><div className="breadcrumb"><Link to="/">Home</Link> / Portfolio</div><Eyebrow>A collection of creative possibilities</Eyebrow><h1>Good ideas.<br/><em>Beautifully made.</em></h1><p>A little strategy, a lot of heart. Explore a selection of brands and digital experiences, made with intention.</p></section><section className="container portfolio-content"><ProjectGrid/><p className="concept-note">A collection of studio concept projects.</p></section><Testimonial/><CTA/></>;}
