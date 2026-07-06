import Logo from "@/components/Logo";
import LinkCard from "@/components/LinkCard";

export default function Home() {
  return (
    <main className="min-h-screen">

      <section
        className="
        mx-auto
        max-w-md
        px-6
        py-20
      "
      >

        <Logo />

        <div className="mt-14 space-y-5">

          <LinkCard
            title="🛍 Shopee"
            href="#"
          />

          <LinkCard
            title="📷 Instagram"
            href="#"
          />

          <LinkCard
            title="🎵 TikTok"
            href="#"
          />

          <LinkCard
            title="💬 WhatsApp"
            href="#"
          />

        </div>

      </section>

    </main>
  );
}
