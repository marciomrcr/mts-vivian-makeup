import Contact from "@/components/contact";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import Navigation from "@/components/navigation";
import PageLoader from "@/components/page-loader";
import Products from "@/components/products";
import Services from "@/components/services";
import Videos from "@/components/videos";
import contentData from "@/data/content.json";

export default function Home() {
  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-black">
        <Navigation />
        <section id="hero">
          <HeroCarousel slides={contentData.hero.slides} />
        </section>
        <section id="services">
          <Services services={contentData.services} />
        </section>
        <section id="products">
          <Products products={contentData.products} />
        </section>
        <section id="videos">
          <Videos videos={contentData.videos} />
        </section>
        <section id="contact">
          <Contact
            socials={contentData.socials}
            contacts={contentData.contacts}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
