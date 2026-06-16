import { Mountain, Heart, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion";
import { Counter } from "@/components/Counter";

export const metadata = {
  title: "About Munsiyari Ride Hub | Local Bike Rental Experts",
  description: "Munsiyari Ride Hub is a locally owned bike & scooty rental built by passionate riders. Learn our story, why Munsiyari, and why riders trust us.",
  openGraph: {
    title: "About Munsiyari Ride Hub",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

const values = [
  { icon: Mountain, title: "Local Expertise", text: "We're born in these mountains and ride them every season." },
  { icon: Heart, title: "Genuine Care", text: "Honest advice, fair rates and a team that wants you to love Munsiyari." },
  { icon: ShieldCheck, title: "Safety First", text: "Serviced vehicles, free helmets and roadside assistance on every ride." },
  { icon: Users, title: "Community", text: "Supporting local guides, homestays and artisans across the region." },
];

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Born to Ride Munsiyari"
        subtitle="We started Munsiyari Ride Hub to share the freedom of self-drive exploration in one of the Himalayas' most beautiful corners." />
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
            Munsiyari Ride Hub was founded by local riders who grew up chasing sunrises over the Panchachuli peaks. We saw travellers struggle to explore beyond the bus stand — so we built a fleet of well-maintained bikes and scooters to set them free.
          </p>
        </Reveal>
        <Reveal className="mt-8">
          <h2 className="text-2xl font-bold">Why Munsiyari</h2>
          <p className="mt-3 font-serif text-lg leading-relaxed text-muted-foreground">
            Munsiyari is where the road ends and the adventure begins — snow peaks, alpine meadows, waterfalls and warm Kumaoni culture. There's no better way to experience it than on two wheels at your own pace.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl bg-secondary/50 p-6 text-center">
          <div><div className="text-3xl font-bold text-primary"><Counter to={1200} suffix="+" /></div><p className="text-xs text-muted-foreground">Happy riders</p></div>
          <div><div className="text-3xl font-bold text-primary">4.9★</div><p className="text-xs text-muted-foreground">Avg. rating</p></div>
          <div><div className="text-3xl font-bold text-primary"><Counter to={6} suffix="+" /></div><p className="text-xs text-muted-foreground">Years riding</p></div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground"><v.icon className="h-6 w-6" /></span>
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
