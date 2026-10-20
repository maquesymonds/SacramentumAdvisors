import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. Built on the stage-1 approved copy
// (investSpecial, "Special Projects"). No search volume in any language: this
// page exists because the firm offers it (functional), and for AI answers.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Special Projects in Uruguay: Restructurings & Distressed Assets",
    metaDescription: "Select special projects in Uruguay for strategic investors: restructurings, distressed situations and refinancing in logistics, ports, urban development and real estate.",
    navLabel:        "Special projects",
    cardText:        "Restructurings, distressed situations and refinancing — confidential access for strategic investors.",
    eyebrow:         "Special projects",
    title:           "Special projects for strategic investors",
    intro: [
      "At Sacramentum Capital, we hold mandates and access to select special projects representing opportunities for strategic investors.",
      "These are situations where complexity creates value: they require technical depth, local judgment and discretion more than speed.",
    ],
    image: { src: "/placeholders/colonia.avif", alt: "Historic harbour in Colonia del Sacramento, Uruguay" },
    sections: [
      {
        heading: "A specialized approach",
        body: [
          "Projects involving complexity such as restructurings, distressed situations, refinancing processes, or scenarios requiring discreet expert guidance.",
        ],
      },
      {
        heading: "Key sectors",
        body: ["The projects we see most often are concentrated in sectors where Uruguay's position as a regional platform matters:"],
        bullets: [
          "Logistics and transport",
          "Port infrastructure",
          "Urban development",
          "Exclusive real estate",
        ],
      },
      {
        heading: "Confidential access",
        body: [
          "Direct and confidential management of selected projects for sophisticated investors. Opportunities are presented one by one, under confidentiality, once we understand your mandate.",
          "To learn more about these opportunities, please contact our team directly.",
        ],
      },
    ],
    faqs: [
      { q: "What is a special project?", a: "A transaction with added complexity — a restructuring, a distressed asset, a refinancing or a situation that requires discreet expert guidance — where that complexity is also the source of the opportunity." },
      { q: "Who are these opportunities for?", a: "Sophisticated and strategic investors — family offices, funds and companies — able to evaluate complex situations and act with discretion." },
      { q: "How are opportunities shared?", a: "Directly and confidentially, one project at a time, after an initial conversation about your investment mandate." },
    ],
    cta: {
      heading: "Interested in special projects?",
      body:    "Tell us about your mandate. We share opportunities directly and under confidentiality.",
      label:   "Contact our team",
    },
  },

  es: {
    metaTitle:       "Proyectos especiales en Uruguay: reestructuraciones y activos en dificultad",
    metaDescription: "Proyectos especiales seleccionados en Uruguay para inversores estratégicos: reestructuraciones, activos en dificultad y refinanciamientos en logística, puertos, desarrollo urbano y real estate.",
    navLabel:        "Proyectos especiales",
    cardText:        "Reestructuraciones, activos en dificultad y refinanciamientos, con acceso confidencial para inversores estratégicos.",
    eyebrow:         "Proyectos especiales",
    title:           "Proyectos especiales para inversores estratégicos",
    intro: [
      "En Sacramentum Capital contamos con mandatos y acceso a proyectos especiales seleccionados que representan oportunidades para inversores estratégicos.",
      "Son situaciones en las que la complejidad genera valor: requieren profundidad técnica, criterio local y discreción, más que velocidad.",
    ],
    image: { src: "/placeholders/colonia.avif", alt: "Puerto histórico de Colonia del Sacramento, Uruguay" },
    sections: [
      {
        heading: "Un enfoque especializado",
        body: [
          "Proyectos que involucran complejidad como reestructuraciones, situaciones de activos en dificultad, procesos de refinanciamiento o escenarios que requieren orientación experta discreta.",
        ],
      },
      {
        heading: "Sectores clave",
        body: ["Los proyectos que más vemos se concentran en sectores donde pesa el rol de Uruguay como plataforma regional:"],
        bullets: [
          "Logística y transporte",
          "Infraestructura portuaria",
          "Desarrollo urbano",
          "Real estate exclusivo",
        ],
      },
      {
        heading: "Acceso confidencial",
        body: [
          "Gestión directa y confidencial de proyectos seleccionados para inversores sofisticados. Las oportunidades se presentan una a una, bajo confidencialidad, una vez que entendemos su mandato.",
          "Para conocer más sobre estas oportunidades, contacte directamente a nuestro equipo.",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué es un proyecto especial?", a: "Una transacción con complejidad adicional (una reestructuración, un activo en dificultad, un refinanciamiento o una situación que requiere orientación experta discreta) en la que esa complejidad es también la fuente de la oportunidad." },
      { q: "¿Para quién son estas oportunidades?", a: "Para inversores sofisticados y estratégicos (family offices, fondos y empresas) capaces de evaluar situaciones complejas y actuar con discreción." },
      { q: "¿Cómo se comparten las oportunidades?", a: "De forma directa y confidencial, un proyecto a la vez, después de una conversación inicial sobre su mandato de inversión." },
    ],
    cta: {
      heading: "¿Le interesan los proyectos especiales?",
      body:    "Cuéntenos sobre su mandato. Compartimos oportunidades en forma directa y bajo confidencialidad.",
      label:   "Contactar al equipo",
    },
  },
};

export default copy;
