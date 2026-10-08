import hero from './hero-image.asset.json';
import about from './about-image.asset.json';
import botanicals from './project-1.asset.json';
import living from './project-2.asset.json';
export const images = { hero: hero.url, about: about.url, botanicals: botanicals.url, living: living.url };
export const projects = [
 { slug: 'avente', title: 'Avente Botanicals', category: 'Brand identity & web design', image: images.botanicals, description: 'A thoughtful botanical skincare brand, rooted in nature and everyday rituals.' },
 { slug: 'forma', title: 'Forma Living', category: 'Creative direction & e-commerce', image: images.living, description: 'An intentional online home for sculptural objects and considered living.' },
 { slug: 'bloom', title: 'The Bloom Edit', category: 'Website design & strategy', image: images.about, description: 'A soft, editorial website for a lifestyle brand with a beautiful point of view.' },
];
