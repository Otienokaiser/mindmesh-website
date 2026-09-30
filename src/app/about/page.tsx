import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { WhyUs } from "@/components/sections/WhyUs";
import { TechStack } from "@/components/sections/TechStack";
import { pageMetadata } from "@/lib/seo";
import styles from "./about.module.css";

export const metadata = pageMetadata({
  title: "About MindMesh — Practical technology from Kenya",
  description:
    "MindMesh is a Kenyan technology company building software, data and AI systems for schools, businesses and organizations, and the maker of Schoolary.",
  path: "/about",
});

const beliefs = [
  { t: "Mission", d: "To build practical technology that helps organizations operate better and serve the people who depend on them." },
  { t: "What we believe", d: "Software should be simple to use, honest about what it does, and built to keep working as an organization changes." },
  { t: "Who we build for", d: "Schools, businesses and organizations that want to replace manual, fragmented processes with systems that work together." },
  { t: "Where we work", d: "Kenya first. We understand the local context, and build to a standard that holds up anywhere." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Technology should make things simpler."
        lead="MindMesh is a Kenyan technology company that builds software, digital products and intelligent systems for organizations that want to work better."
      />
      <section className="section" aria-label="Our story">
        <div className={`container ${styles.story}`}>
          <div className={styles.prose}>
            <p>
              Too much software adds work instead of removing it. It asks people to adapt to the tool, hides simple
              things behind complicated screens and breaks the moment an organization grows or changes.
            </p>
            <p>
              MindMesh exists to build the opposite. We start from the problem and the people who live with it, then
              design the simplest system that solves it. Sometimes that&rsquo;s a custom application. Sometimes it&rsquo;s
              a dashboard, an automation, or an honest recommendation that software isn&rsquo;t the answer.
            </p>
            <p>
              We are also a product company. Schoolary, our school management platform, is designed, built and
              operated by MindMesh. Running a product of our own keeps our standards grounded in daily use, and shows
              clients what we build rather than only what we say.
            </p>
            <p>
              Our long-term vision is a growing family of practical products and systems, built in Kenya, that make
              everyday operations clearer for the organizations that rely on them.
            </p>
          </div>
          <dl className={styles.beliefs}>
            {beliefs.map((b) => (
              <div key={b.t}>
                <dt>{b.t}</dt>
                <dd>{b.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <WhyUs />
      <TechStack />
      <CTASection />
    </>
  );
}
