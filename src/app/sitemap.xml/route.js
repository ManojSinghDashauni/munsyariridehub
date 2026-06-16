import { vehicles, destinations, blogPosts } from "@/lib/data";
import { knowledgeGuides } from "@/lib/tools";

const BASE_URL = "";

export async function GET() {
  const paths = [
    "/", "/rentals", "/destinations", "/travel-guide", "/travel-knowledge", "/gallery", "/about", "/contact", "/faq",
    "/route-planner", "/weather", "/fuel-calculator", "/best-time", "/photography", "/food-culture", "/hidden-gems", "/emergency",
    ...vehicles.map((v) => `/rentals/${v.slug}`),
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...blogPosts.map((p) => `/travel-guide/${p.slug}`),
    ...knowledgeGuides.map((g) => `/travel-knowledge/${g.slug}`),
  ];
  const urls = paths
    .map((p) => `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
  });
}
