/* The topic page's content sections as stacked cards (Web System S7, after
   Walde): number, heading, text and an optional photo per card. Server
   markup, so every heading and paragraph is in the HTML; StackCover adds
   the covering effect. */

import Image      from "next/image";
import StackCover from "./StackCover";
import s          from "./stack.module.css";
import type { TopicSection } from "@/lib/topics";

function Body({ sec }: { sec: TopicSection }) {
  return (
    <div className={s.body}>
      {sec.body.map((p, j) => <p key={j}>{p}</p>)}
      {sec.bullets && (
        <ul className={s.bullets}>
          {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
        </ul>
      )}
    </div>
  );
}

export default function StackSections({ sections }: { sections: TopicSection[] }) {
  return (
    <section className={s.section} data-nav-dark>
      <div className="container-site">
        <ol className={s.stack} data-stack>
          {sections.map((sec, i) => (
            <li key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
              <article className={`${s.card} ${sec.image ? "" : s.noImage}`}>
                {/* Without a photo: number and heading left, text right */}
                <div>
                  <span className={s.number} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className={s.title}>{sec.heading}</h2>
                  {sec.image && <Body sec={sec} />}
                </div>
                {!sec.image && <Body sec={sec} />}
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
