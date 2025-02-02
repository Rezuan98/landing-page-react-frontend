import { Facebook, Twitter, Instagram } from "lucide-react";
export default function SocialIcon() {
  return (
    <section className="py-8 bg-amber-100">
      <div className="container mx-auto flex justify-center gap-6">
        {[
          { icon: <Facebook />, link: "#" },
          { icon: <Instagram />, link: "#" },
          { icon: <Twitter />, link: "#" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            className="text-amber-900 hover:text-amber-500 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
