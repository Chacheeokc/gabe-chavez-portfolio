import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Experience } from "~/experience/experience";
import { About } from "~/about/about";
import { Skills } from "~/skills/skills";
import { Navbar } from "~/navbar/navbar";
import { Footer } from "~/footer/footer";
import { SITE } from "~/constants";

export function meta({}: Route.MetaArgs) {
  return [
    { title: `${SITE.name} | ${SITE.title}` },
    { name: "description", content: SITE.metaDescription },
    { property: "og:title", content: `${SITE.name} | ${SITE.title}` },
    { property: "og:description", content: SITE.metaDescription },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: `${SITE.name} | ${SITE.title}` },
    { name: "twitter:description", content: SITE.metaDescription },
  ];
}

export default function Home() {
  return (
  <>
     <Navbar />
     <About />
     <Experience />
     <Skills />
     <div id="contact">
       <Footer />
     </div>
  </>
);
}
