// ==========================================================================
// DATA CENTRALIZADA — RONALD ROMARIO GUTIERREZ ARRATIA
// Datos reales alineados al CV, GitHub y credenciales oficiales verificadas
// ==========================================================================

export const profileData = {
  name: "Ronald Gutierrez",
  fullName: "Ronald Romario Gutierrez Arratia",
  role: "Desarrollador Full Stack · Arquitecto de Soluciones TI Junior",
  tagline:
    "Especializado en Python, C#, ASP.NET, React y arquitecturas backend escalables. Experiencia en sistemas ERP empresariales, soluciones RAG en GCP/AWS y aplicaciones interactivas en Unity (VR/AR/XR).",
  location: "Arequipa, Perú",
  phone: "+51 925238121",
  phoneFormatted: "+51 925 238 121",
  email: "ronaldgutierrez2905@gmail.com",
  academicEmail: "rgutierrezar@unsa.edu.pe",
  linkedin: "https://www.linkedin.com/in/ronaldgutierrezar/",
  github: "https://github.com/121-rrg?tab=repositories",
  cvUrl: "assets/Ronald_Gutierrez_CV.pdf",
  avatar: "profile_linkedin.jpg",
  stats: [
    { value: "+3 Años", label: "Experiencia Dev" },
    { value: "31+", label: "Repos Personales & Educativos" },
    { value: "10", label: "Hackathones" },
    { value: "11", label: "Certificaciones" }
  ]
};

export const featuredProjects = [
  {
    id: "noti-pe",
    title: "NOTI — Alertas de Cortes SEAL y SEDAPAR",
    category: "Web App · PWA",
    status: "En Producción",
    image: "assets/projects/noti.jpg",
    desc: "Plataforma ciudadana en Arequipa que centraliza cronogramas de cortes de energía (SEAL) y agua (SEDAPAR) con mapa interactivo 2D/3D, scraping automatizado y alertas por distrito.",
    tags: ["Next.js", "Firebase", "Python", "Playwright", "PWA"],
    demo: "https://noti-pe.web.app/",
    github: "https://github.com/Ronald-Gutierrez/Power-Outages-SEAL"
  },
  {
    id: "hanan-pachaq",
    title: "Hanan Pachaq Hatun Mayun — Videojuego VR",
    category: "Realidad Virtual · Unity",
    status: "XR / Game Dev",
    image: "assets/projects/hanan_pachaq.jpg",
    desc: "Experiencia inmersiva en Realidad Virtual desarrollada junto a FactorWaves basada en la cosmovisión andina y el río celestial 'Hatun Mayu', con interacción natural mediante Hand Tracking.",
    tags: ["Unity", "OpenXR", "C#", "Hand Tracking"],
    demo: "https://factorwavesre.vercel.app",
    github: "https://github.com/121-rrg/FactorWaves"
  },
  {
    id: "plane-war",
    title: "Plane War 3D — Control por Malla MANO",
    category: "Computer Vision · Unity",
    status: "Simulación 3D",
    image: "assets/projects/plane_war.jpg",
    desc: "Simulador aéreo 3D controlado sin mandos físicos mediante cámara web, MediaPipe y reconstrucción anatómica de malla 3D MANO transmitiendo telemetría de orientación en tiempo real.",
    tags: ["Unity", "Python", "OpenCV", "MediaPipe", "MANO 3D"],
    github: "https://github.com/121-rrg?tab=repositories"
  },
  {
    id: "soluti-eclipse",
    title: "Soluti — NASA Space Apps Challenge",
    category: "Web Educativa · Juego",
    status: "En Producción",
    image: "assets/projects/soluti.jpg",
    desc: "Aplicación web interactiva y minijuego educativo desarrollado para NASA Space Apps Challenge para comprender cómo ocurren los eclipses solares y lunares de forma práctica.",
    tags: ["JavaScript", "HTML5", "CSS3", "NASA Data"],
    demo: "https://soluti-eclipse.vercel.app/",
    github: "https://github.com/Ronald-Gutierrez/soluti-eclipse"
  },
  {
    id: "laberinto-emociones",
    title: "Laberinto de Emociones — Reconocimiento Facial",
    category: "IA & Visión Facial",
    status: "En Producción",
    image: "assets/projects/emociones.jpg",
    desc: "Juego web interactivo que detecta expresiones faciales en tiempo real con Face-API y MorphCast para vincular la gestión emocional con la progresión dentro del laberinto.",
    tags: ["JavaScript", "Face-API", "MorphCast", "HTML/CSS"],
    demo: "https://ronald-gutierrez.github.io/Reconocimiento-Facial/",
    github: "https://github.com/Ronald-Gutierrez/Reconocimiento-Facial/tree/game"
  },
  {
    id: "pelisfree",
    title: "PelisFree — Catálogo de Cine TMDB",
    category: "Frontend · React",
    status: "En Producción",
    image: "assets/projects/pelisfree.jpg",
    desc: "Aplicación web reactiva conectada a la API de TMDB con búsqueda instantánea, exploración por géneros, reproducción de tráileres y diseño adaptable a dispositivos.",
    tags: ["React", "Redux", "SCSS", "TMDB API", "Netlify"],
    demo: "https://pelisfree2.netlify.app/",
    github: "https://github.com/Ronald-Gutierrez/PaginaPeliculasFree"
  }
];

export const experiences = [
  {
    role: "Desarrollador Full Stack | Arquitecto de Soluciones TI Junior",
    company: "WYA Soluciones Integrales",
    period: "Abr 2025 – Oct 2026",
    modality: "Lima, Perú · Tiempo Completo",
    bullets: [
      "Desarrollo y evolución de sistemas ERP empresariales bajo arquitecturas MVC, Monolito Modular y Por Capas.",
      "Diseño de APIs REST, integración de módulos de negocio y optimización de consultas en PostgreSQL y SQL Server.",
      "Análisis de requerimientos funcionales, evaluación de tecnologías y definición técnica de soluciones."
    ],
    tags: ["C#", "ASP.NET", "PostgreSQL", "SQL Server", "Arquitectura TI"]
  },
  {
    role: "Desarrollador Backend (Unity) & Líder de Desarrollo Web",
    company: "Factor Waves",
    period: "Jun 2025 – Jun 2026",
    modality: "Arequipa, Perú · Tiempo Parcial",
    bullets: [
      "Desarrollo de lógica backend escalable para aplicaciones interactivas en Unity con VR, AR y XR.",
      "Liderazgo del equipo de desarrollo web, coordinando entregables, estándares y revisión técnica.",
      "Integración de servicios backend con aplicaciones Unity y plataformas web."
    ],
    tags: ["Unity", "C#", "VR / AR / XR", "Backend", "Liderazgo Web"]
  },
  {
    role: "Desarrollador Full Stack (Python y React)",
    company: "Ops Range",
    period: "Nov 2024 – May 2026",
    modality: "Arequipa, Perú · Tiempo Parcial",
    bullets: [
      "Desarrollo y mantenimiento de aplicaciones web y servicios backend con Python y React.",
      "Implementación de flujos de generación de respuestas automatizadas (RAG) sobre Google Cloud Platform."
    ],
    tags: ["Python", "FastAPI", "React", "GCP", "RAG"]
  },
  {
    role: "Investigador Junior (Python y JS)",
    company: "UNSA Investiga",
    period: "Mar 2024 – Dic 2024",
    modality: "Arequipa, Perú",
    bullets: [
      "Investigación en Machine Learning y análisis de datos aplicados a calidad del aire y variables meteorológicas.",
      "Entrenamiento, evaluación de modelos predictivos y visualización de grandes volúmenes de datos."
    ],
    tags: ["Python", "Machine Learning", "JavaScript", "Data Science"]
  },
  {
    role: "Desarrollador Full Stack & Frontend",
    company: "Freelancer & AM Digital",
    period: "Ene 2023 – Ago 2024",
    modality: "Arequipa, Perú",
    bullets: [
      "Sitios y sistemas web completos con Flask, FastAPI, Laravel, React y Node.js (e-commerce, boletería, interfaces PHP).",
      "Automatización de bots con las APIs de WhatsApp y Telegram para atención y notificaciones."
    ],
    tags: ["Flask", "FastAPI", "Laravel", "React", "WhatsApp/Telegram APIs"]
  }
];

export const educationList = [
  {
    institution: "Universidad Nacional de San Agustín de Arequipa",
    degree: "Ciencia de la Computación",
    period: "Mar 2020 – Dic 2024",
    detail: "Estructuras de Datos, Ingeniería de Software, Inteligencia Artificial, Desarrollo Web y Computación en la Nube."
  },
  {
    institution: "SENATI",
    degree: "Técnico Mecatrónico Automotriz",
    period: "2015 – 2018",
    detail: "Base técnica en sistemas electrónicos, diagnóstico y resolución estructurada de fallas complejas."
  }
];

export const skillGroups = [
  {
    area: "Lenguajes & Frontend",
    items: ["Python", "C#", "JavaScript", "C++", "PHP", "React", "Next.js", "Tailwind CSS"]
  },
  {
    area: "Backend & Bases de Datos",
    items: ["FastAPI", "Flask", "ASP.NET", "Node.js", "Laravel", "PostgreSQL", "SQL Server", "MySQL", "Firebase"]
  },
  {
    area: "Cloud, IA & XR",
    items: ["Google Cloud (GCP)", "AWS", "RAG & Agentes IA", "Machine Learning", "Unity (VR/AR/XR)", "Docker", "Git Flow"]
  }
];

// ==========================================================================
// CREDENCIALES SEPARADAS EN:
// 1) hackathonsList (10 eventos y hackathones reales)
// 2) certificationsList (11 certificaciones técnicas reales)
// ==========================================================================

export const hackathonsList = [
  {
    id: "transformagob-2026",
    title: "Hackatón Nacional Transformagob 2026",
    issuer: "Gobierno del Perú (PCM)",
    date: "Jul 2026",
    idCode: "Hackatón Transformagob · PCM-SGTD-2026-82-VRHYQB",
    certImg: "certs/transformagob_2026.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1670352359/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "global-game-jam-2025",
    title: "Global Game Jam 2025",
    issuer: "ACM, Association for Computing Machinery",
    date: "Ene 2025",
    idCode: null,
    certImg: "certs/global_game_jam_2025.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1234017376/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "hack4edu-salamanca",
    title: "Hackathon Internacional de Innovación Educativa con Tecnología",
    issuer: "Universidad Pontificia de Salamanca",
    date: "Ene 2025",
    idCode: "V Edición Hack4Edu",
    certImg: "certs/innovacion_educativa_salamanca.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1352091818/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "hackathon-ravn",
    title: "Participación en la Hackathon de RAVN",
    issuer: "Ravn",
    date: "Nov 2024",
    idCode: null,
    certImg: "certs/hackathon_ravn.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1129145805/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "nasa-galactic-mentor",
    title: "Galactic Local Mentor",
    issuer: "NASA Space Apps Challenge - Arequipa",
    date: "Oct 2024",
    idCode: null,
    certImg: "certs/nasa_spaceapps_mentor_2024.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1163317321/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "nasa-galactic-team",
    title: "Galactic Team Member",
    issuer: "NASA Space Apps Challenge - Arequipa",
    date: "Oct 2024",
    idCode: null,
    certImg: "certs/nasa_spaceapps_team_2024.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1442944125/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "nasa-galactic-solver",
    title: "Galactic Problem Solver",
    issuer: "NASA Space Apps Challenge - Arequipa",
    date: "Oct 2023",
    idCode: null,
    certImg: "certs/nasa_spaceapps_solver_2023.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/853034979/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "hackathon-bcp",
    title: "Participación en la Hackathon de BCP (InnovaBCP)",
    issuer: "Banco de Crédito BCP",
    date: "Oct 2023",
    idCode: null,
    certImg: "certs/hackathon_bcp.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1129403600/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "hackathon-belcorp",
    title: "Participación en la Hackathon de BELCORP",
    issuer: "Belcorp",
    date: "Sept 2023",
    idCode: "Hackathon 4.0",
    certImg: "certs/hackathon_belcorp.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1129742492/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "hackathon-nttdata",
    title: "Participación en la Hackathon de NTT DATA",
    issuer: "NTT DATA",
    date: "Sept 2023",
    idCode: "TechSuyo 2023",
    certImg: "certs/hackathon_nttdata.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/1129590118/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  }
];

export const certificationsList = [
  {
    id: "aws-llm",
    title: "Building Language Models on AWS",
    issuer: "AWS Training and Certifications",
    date: "Ene 2025",
    idCode: null,
    certImg: "certs/aws_llm.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/797286701/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "aws-prompt-eng",
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training and Certifications",
    date: "Ene 2025",
    idCode: null,
    certImg: "certs/aws_prompt_eng.jpg",
    link: "https://www.linkedin.com/in/ronaldgutierrezar/overlay/Certifications/794220477/treasury/?profileId=ACoAADxTlCIBB2RoYi5DAoUpkFUcgpWhtAIJThQ"
  },
  {
    id: "todocode-mysql",
    title: "Introducción a las Bases de Datos Relacionales (Con MySQL)",
    issuer: "TodoCode",
    date: "Ene 2025",
    idCode: "bd-relacionales-con-mysql-gaj",
    certImg: "certs/todocode_mysql.jpg",
    link: "https://todocodeacademy.com/certificate/bd-relacionales-con-mysql-gaj/"
  },
  {
    id: "aws-cloud-architecting",
    title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
    issuer: "Amazon Web Services (AWS)",
    date: "Dic 2024",
    idCode: "Credly · 81d71895",
    certImg: "certs/aws_cloud_architecting.png",
    link: "https://www.credly.com/badges/81d71895-c5ea-4afd-9be6-33a527d450c0/linked_in_profile"
  },
  {
    id: "ci-explora-unsa",
    title: "Participación Activa en Talleres y Ponencias en CI EXPLORA",
    issuer: "Centro de Cómputo de Ingeniería Industrial UNSA",
    date: "Nov 2024",
    idCode: "CCII-CE-044-2024-024",
    certImg: null,
    link: "https://iacerts.com/usuario/certificado/f4d3ce99-a154-4c6d-ac7d-2036a5bf2147"
  },
  {
    id: "datacamp-keras",
    title: "Introduction to Deep Learning with Keras",
    issuer: "DataCamp",
    date: "May 2024",
    idCode: "ce7263269c262119cf704272b9f3ecc9c29ef345",
    certImg: "certs/datacamp_keras.jpg",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/ce7263269c262119cf704272b9f3ecc9c29ef345?raw=1"
  },
  {
    id: "datacamp-pytorch",
    title: "Deep Learning for Images with PyTorch",
    issuer: "DataCamp",
    date: "May 2024",
    idCode: "e5295a9233b6b7599de8cc8fa7ed268f00488a6e",
    certImg: "certs/datacamp_pytorch.jpg",
    link: "https://www.datacamp.com/statement-of-accomplishment/course/e5295a9233b6b7599de8cc8fa7ed268f00488a6e?raw=1"
  },
  {
    id: "aws-intro-cloud-s1",
    title: "AWS Academy Graduate - Introduction to Cloud Semester 1",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2024",
    idCode: "Credly · 96c89463",
    certImg: "certs/aws_intro_cloud_s1.png",
    link: "https://www.credly.com/badges/96c89463-79c6-46b0-b99a-b7472d0e3388/linked_in_profile"
  },
  {
    id: "aws-cloud-foundations",
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2024",
    idCode: "Credly · 17d8f8e7",
    certImg: "certs/aws_cloud_foundations.png",
    link: "https://www.credly.com/badges/17d8f8e7-0017-4eaf-b5f1-cef89838f31a/linked_in_profile"
  },
  {
    id: "nvidia-deep-learning",
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "Oct 2023",
    idCode: "c3ff2bac3d54491cbcd87e1c217ae94b",
    certImg: "certs/nvidia_deep_learning.jpg",
    link: "https://courses.nvidia.com/certificates/c3ff2bac3d54491cbcd87e1c217ae94b/"
  },
  {
    id: "nvidia-accelerated-ds",
    title: "Fundamentals of Accelerated Data Science",
    issuer: "NVIDIA",
    date: "Oct 2022",
    idCode: "2ad09fc594d640919307b054408cba67",
    certImg: "certs/nvidia_accelerated_ds.jpg",
    link: "https://courses.nvidia.com/certificates/2ad09fc594d640919307b054408cba67/"
  }
];
