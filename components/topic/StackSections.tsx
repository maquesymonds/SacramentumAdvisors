/* The topic page's content sections as stacked cards (Web System S7, after
   Walde): number, heading, text and an optional photo per card. Server
   markup, so every heading and paragraph is in the HTML; StackCover adds
   the covering effect. */

import Image      from "next/image";
import StackCover from "./StackCover";
import s          from "./stack.module.css";
import type { TopicSection } from "@/lib/topics";
import LinkedText from "@/components/ui/LinkedText";
import type { Locale } from "@/lib/i18n";

function Body({ sec, locale }: { sec: TopicSection; locale?: Locale }) {
  return (
    <div className={s.body}>
      {sec.body.map((p, j) => <p key={j}><LinkedText text={p} locale={locale} /></p>)}
      {sec.bullets && (
        <ul className={s.bullets}>
          {sec.bullets.map((b, j) => <li key={j}><LinkedText text={b} locale={locale} /></li>)}
        </ul>
      )}
    </div>
  );
}

export default function StackSections({ heading, sections, locale }: { heading?: string; sections: TopicSection[]; locale?: Locale }) {
  return (
    <section className={s.section}>
      <div className="container-site">
        {heading && <h2 className={s.heading}>{heading}</h2>}
        <ol className={s.stack} data-stack>
          {sections.map((sec, i) => (
            <li key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
              <article className={`${s.card} ${sec.image ? "" : s.noImage}`}>
                {/* Without a photo: number and heading left, text right */}
                <div>
                  <h3 className={s.title}>
                    <span className={s.number} aria-hidden="true">{i + 1}.</span>
                    {sec.heading}
                  </h3>
                  {sec.image && <Body sec={sec} locale={locale} />}
                </div>
                {!sec.image && <Body sec={sec} locale={locale} />}
                {sec.image && (
                  <figure className={s.pic}>
                    <Image src={sec.image.src} alt={sec.image.alt} fill sizes="(max-width: 900px) 92vw, 40vw" className="object-cover" />
                  </figure>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
      <StackCover />
    </section>
  );
}
