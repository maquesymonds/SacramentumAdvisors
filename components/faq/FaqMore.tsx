"use client";

/* The "+" under a FAQ list: the first questions are shown, the rest stay in
   the HTML (crawlable, and in the FAQPage JSON-LD) and open on click. Once
   open it turns into a "−" that folds them back. */

import { useState } from "react";
import s from "./faq.module.css";

export default function FaqMore({ more, less }: { more: string; less: string }) {
  const [open, setOpen] = useState(false);
  const label = open ? less : more;
  return (
    <button
      type="button"
      className={s.more}
      aria-expanded={open}
      aria-label={label}
      title={label}
      onClick={e => {
        const list = e.currentTarget.previousElementSibling;
        if (open) list?.removeAttribute("data-expanded");
        else list?.setAttribute("data-expanded", "");
        setOpen(!open);
      }}
    />
  );
}
