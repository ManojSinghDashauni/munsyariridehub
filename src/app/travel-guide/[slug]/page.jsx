import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts } from "@/lib/data";
import { whatsappLink, bookingMessage } from "@/lib/site";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = blogPosts.find((post) => post.slug === slug);
  if (!p) return {};

  return {
    title: `${p.title} | Munsiyari Ride Hub`,
    description: p.excerpt,
    openGraph: {
      title: p.title,
      images: [p.image],
      url: `/travel-guide/${p.slug}`,
    },
    alternates: {
      canonical: `/travel-guide/${p.slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const p = blogPosts.find((post) => post.slug === slug);
  if (!p) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          image: p.image,
          articleSection: p.category,
          author: { "@type": "Organization", name: "Munsiyari Ride Hub" },
        }}
      />
      <article className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
        <Link href="/travel-guide" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Travel guide
        </Link>
        <span className="mt-6 block text-sm font-semibold uppercase tracking-wide text-primary">{p.category}</span>
        <h1 className="mt-2 text-4xl font-extrabold">{p.title}</h1>
        <p className="mt-3 flex items-center gap-1 text-sm text-muted-foreground"><Clock className="h-4 w-4" /> {p.readTime} read</p>
        <img src={p.image} alt={p.title} width={1024} height={768} className="mt-6 w-full rounded-2xl object-cover shadow-lg" />
        <div className="mt-8 space-y-5 font-serif text-lg leading-relaxed text-muted-foreground">
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        <div className="mt-10 rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold">Plan your Munsiyari ride</h2>
          <Button asChild variant="whatsapp" size="lg" className="mt-4">
            <a href={whatsappLink(bookingMessage())} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Book on WhatsApp
            </a>
          </Button>
        </div>
      </article>
    </>
  );
}
