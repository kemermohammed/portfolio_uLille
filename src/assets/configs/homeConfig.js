import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane, GiLaptop } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name"> Kemeriya</strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name"> Kemeriya</strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "ML engineer",
      "Open Source Contributor",
      "Backend Developer",
      "Data Scientist",
      "Machine Learning Specialist",
      "Colombian",
    ],
    es: [
      "Científico de Datos",
      "Especialista en Aprendizaje Automático",
      "Colaborador de Código Abierto",
      "Desarrollador Backend",
      "Ingeniero de ML",
      "Colombiano",
    ],
  },

  about_i18n: {
    en: {
     start: 
  "I'm a motivated data science enthusiast with a strong entrepreneurial mindset. I enjoy solving problems using Python, SQL, machine learning, and mathematical modeling, while staying business-oriented and team-focused.",
exit: 
  "I am seeking an internship to apply my skills in machine learning, data analysis, and SQL to real-world projects, contribute effectively to a team, and continue growing as a data science professional."
},
    es: {
      start:
        "He trabajado por más de nueve años en proyectos de ciencia de datos. Me entusiasma aprender cosas nuevas, contribuir a la comunidad y compartir conocimiento.",
      exit:
        "Domino Python, bases de datos SQL, herramientas de BI y más, con un fuerte interés en el aprendizaje automático.",
    },
  },


  workTimeline: [
  {
    id: "work-2",
    title: "Product Manager",
    title_i18n: { en: "Product Manager", fr: "Chef de Produit" },
    company: "A2SV",
    description_i18n: {
      en: "Led product development initiatives for educational platforms. Coordinated cross-functional teams, gathered user requirements, and implemented data-driven improvements to enhance learning outcomes.",
      fr: "Dirigé les initiatives de développement de produits pour les plateformes éducatives. Coordination des équipes interfonctionnelles, collecte des besoins des utilisateurs et mise en œuvre d'améliorations basées sur les données pour améliorer les résultats d'apprentissage.",
    },
    date: "Feb 2025 - Jun 2025",
    icon: <GiLaptop />, // Replace with a relevant icon, e.g., GiLaptop
    tags: ["product management", "data analysis", "team coordination", "agile", "education tech"],
  },
  {
    id: "work-1",
    title: "Product Manager",
    title_i18n: { en: "Product Manager", fr: "Chef de Produit" },
    company: "Dime",
    description_i18n: {
      en: "Oversaw product lifecycle from ideation to delivery for financial tech solutions. Collaborated with engineers and designers, prioritized features, and optimized workflows to improve user engagement.",
      fr: "Supervision du cycle de vie des produits, de l’idéation à la livraison, pour des solutions fintech. Collaboration avec les ingénieurs et designers, priorisation des fonctionnalités et optimisation des flux de travail pour améliorer l'engagement des utilisateurs.",
    },
    date: "Aug 2024 - Jan 2025",
    icon: <GiCommercialAirplane />,
    tags: ["product management", "fintech", "agile", "data-driven", "UX/UI"],
  },
  {
    id: "work-0",
    title: "Software Engineer Intern",
    title_i18n: { en: "Software Engineer Intern", fr: "Stagiaire Ingénieur Logiciel" },
    company: "A2SV",
    description_i18n: {
      en: "Developed and maintained features for educational software. Implemented data processing pipelines, collaborated with senior engineers, and contributed to code reviews and testing.",
      fr: "Développement et maintenance des fonctionnalités pour le logiciel éducatif. Mise en œuvre de pipelines de traitement des données, collaboration avec les ingénieurs seniors et contribution aux revues de code et tests.",
    },
    date: "Aug 2023 - Feb 2024",
    icon: <BsClipboardData />,
    tags: ["python", "data pipelines", "software development", "code review", "collaboration"],
  },

  ],
};

export default homeConfig;
