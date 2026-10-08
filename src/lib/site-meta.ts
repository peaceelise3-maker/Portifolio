export function siteMeta(title: string, description: string, image?: string) {
 return { meta: [{title:`${title} — Anne Studio`},{name:'description',content:description},{property:'og:title',content:`${title} — Anne Studio`},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'},...(image ? [{property:'og:image',content:image},{name:'twitter:image',content:image}] : [])] };
}
