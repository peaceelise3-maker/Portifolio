type SiteMetaOptions = {
  url?: string;
  keywords?: string;
  author?: string;
};

export function siteMeta(
  title: string,
  description: string,
  image?: string,
  options: SiteMetaOptions = {},
) {
  const pageTitle = title.includes("IRAKOZE PEACE ELISE") ? title : `${title} | IRAKOZE PEACE ELISE`;
  const canonicalUrl = options.url ?? "https://irakozepeaceelise.netlify.app/";
  const keywords =
    options.keywords ??
    "IRAKOZE PEACE ELISE, nursing student, nursing student portfolio, healthcare student, student nurse, nursing studies, patient care, learning journey";

  return {
    meta: [
      { title: pageTitle },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "author", content: options.author ?? "IRAKOZE PEACE ELISE" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:site_name", content: "IRAKOZE PEACE ELISE Portfolio" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: description },
      ...(image
        ? [
            { property: "og:image", content: image },
            { property: "og:image:alt", content: pageTitle },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
