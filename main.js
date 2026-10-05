// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
const translations = {
    "ca": {
        "badge_status": "Treballant a NeodataMeat",
        "hero_hello": "Hola! Soc",
        "hero_role": "Tècnic de Sistemes · ASIX",
        "hero_desc": "Infraestructura Windows i automatització de processos a NeodataMeat. Fora de la feina, dissenyo i autoallotjo aplicacions amb IA.",
        "nav_about_short": "Sobre mi",
        "nav_exp_short": "Experiència",
        "nav_edu_short": "Educació",
        "nav_skills_short": "Habilitats",
        "nav_certs_short": "Cursos",
        "nav_about": "Sobre mi",
        "nav_exp": "Experiència Laboral",
        "nav_edu": "Educació",
        "nav_skills": "Habilitats",
        "nav_langs": "Idiomes",
        "about_p1": "Soc <strong>Tècnic de Sistemes</strong> amb experiència en entorns empresarials, especialitzat en administració de sistemes Windows, Active Directory i automatització de processos amb Power Platform.",
        "about_p2": "Treballo a <strong>NeodataMeat</strong> gestionant infraestructures IT, resolent incidències tècniques i participant activament en la millora de processos interns mitjançant Microsoft Dynamics CRM i Power Automate.",
        "about_p3": "Fora de la feina dissenyo, construeixo i autoallotjo aplicacions completes, del model de dades al desplegament, amb un interès especial pels <strong>agents d'IA amb <em>tool-calling</em></strong>, els sistemes multi-usuari i l'automatització pràctica.",
        "exp_title_1": "Tècnic Junior de Sistemes",
        "exp_date_1": "Març 2025 – Present",
        "exp_desc_1": "<li>Administració d'usuaris, grups i GPOs amb Active Directory.</li><li>Gestió i manteniment de servidors Windows Server.</li><li>Automatització de processos amb Power Automate.</li><li>Administració de Microsoft Dynamics AX/BC i CRM.</li><li>Suport tècnic de primer nivell als usuaris.</li><li>Gestió d'entorns virtualitzats.</li>",
        "exp_title_2": "Tècnic de Sistemes (Pràctiques DUAL)",
        "exp_date_2": "Juny 2024 – Febrer 2025",
        "exp_desc_2": "<li>Suport tècnic i resolució d'incidències.</li><li>Configuració i inventari d'equips informàtics.</li><li>Instal·lació i manteniment de programari.</li><li>Documentació tècnica de processos interns.</li>",
        "edu_title_1": "Grau Superior ASIX",
        "edu_desc_1": "Administració de Sistemes Informàtics en Xarxa",
        "edu_date_1": "En curs",
        "edu_title_2": "Grau Mitjà SMX",
        "edu_desc_2": "Sistemes Microinformàtics i Xarxes",
        "edu_date_2": "2023 – 2025",
        "skills_systems": "SISTEMES & XARXES",
        "skills_business": "EINES & PLATAFORMES",
        "skills_soft": "APTITUDS",
        "skill_net": "Serveis de Xarxa",
        "skill_virt": "Virtualització",
        "skill_azure": "Azure (bàsic)",
        "apt_1": "Resolució d'Incidències",
        "apt_3": "Aprenentatge ràpid",
        "apt_4": "Treball en equip",
        "apt_5": "Adaptabilitat",
        "apt_6": "Comunicació",
        "apt_7": "Analítica",
        "lang_cat": "Català",
        "lang_es": "Espanyol",
        "lang_en": "Anglès",
        "lang_native": "Natiu / Bilingüe",
        "lang_professional": "Professional Working",
        "courses_title": "Cursos i Certificats",
        "course_fortigate": "FortiGate 7.6 Operator",
        "course_getting_started": "Getting Started in Cybersecurity 3.0",
        "course_iot": "Internet de les Coses (IoT)",
        "course_1": "Google: IA i Productivitat",
        "course_2": "Microsoft Copilot",
        "course_3": "Fundamentos de ChatGPT",
        "course_4": "Ethical Hacking",
        "course_6": "Intro to Threat Landscape 3.0",
        "course_7": "Technical Intro to Cybersecurity 3.0",
        "nav_projects_short": "Projectes",
        "nav_projects": "Projectes Personals",
        "proj_kovia_sub": "Assistent personal multi-usuari amb IA",
        "proj_kovia_desc": "Aplicació web i PWA instal·lable on cada usuari gestiona despeses, agenda, hàbits, recordatoris, nutrició i notícies parlant amb un <strong>agent d'IA amb 23 eines</strong>, per text o per veu. És <strong>multi-usuari per disseny</strong>: l'aïllament de dades entre comptes s'aplica a PostgreSQL amb Row-Level Security. L'agent funciona sobre Claude (AWS Bedrock) amb streaming SSE i prompt caching, transcripció de veu amb Whisper i lectura de tiquets amb visió. Diversos workers en segon pla envien recordatoris, tasques cron i un resum matinal personalitzat per Web Push. Unes 7.500 línies de TypeScript, autoallotjat en una Raspberry Pi 4 darrere de Traefik amb HTTPS automàtic.",
        "proj_assistant_sub": "Assistent personal amb IA a Telegram",
        "proj_assistant_desc": "Assistent personal que funciona amb llenguatge natural i notes de veu: despeses, hàbits, recordatoris, tasques recurrents, Google Calendar, el temps, cerca web i dades de salut de Garmin. Agent amb <em>tool-calling</em> i <strong>enrutament entre dos models</strong> per reduir costos: Groq (Llama) per a les tasques ràpides i Claude (AWS Bedrock) per al raonament complex. Veu d'anada i tornada amb Whisper i Amazon Polly. La integració amb Garmin és un microservei en Python a part. Desplegat amb Docker en una Raspberry Pi.",
        "proj_view": "Veure al GitHub",
        "proj_habitforge_sub": "PWA autoallotjada de seguiment d'hàbits",
        "proj_habitforge_desc": "Seguiment d'hàbits multi-usuari, instal·lable al mòbil com una app nativa i amb funcionament offline. Notificacions push reals amb Web Push (VAPID) i un sistema de recordatoris prioritzat (ratxa en perill, última oportunitat i resum setmanal) que no envia mai més d'una notificació per hora. Ratxes, fites, estadístiques diàries, setmanals, mensuals i anuals, i un mapa de calor anual. API REST amb Express i MariaDB; frontend en JavaScript vanilla amb un service worker escrit a mà. Desplegat amb Docker Compose i Traefik amb HTTPS automàtic.",
        "proj_portfolio_title": "Portfolio Personal",
        "proj_portfolio_sub": "Web multilingüe (CA/ES/EN)",
        "proj_portfolio_desc": "Aquest mateix portfolio, desenvolupat des de zero: web d'una sola pàgina, responsive i amb tema fosc. Destaca un sistema multilingüe propi (català, castellà i anglès) amb canvi d'idioma instantani al client, sense recarregar la pàgina. Fet amb HTML, CSS i JavaScript vanilla, amb animacions d'scroll i navegació activa (scrollspy). Desplegat amb GitHub Pages.",
        "about_p4": "Curso el Grau Superior d'ASIX a Salesians Sarrià i continuo creixent en xarxes i ciberseguretat. Estic obert a oportunitats en administració de sistemes, infraestructura i automatització.",
        "skills_dev": "DESENVOLUPAMENT & IA",
        "proj_badge_case": "Cas d'estudi",
        "footer_rights": "Tots els drets reservats"
    },
    "es": {
        "badge_status": "Trabajando en NeodataMeat",
        "hero_hello": "¡Hola! Soy",
        "hero_role": "Técnico de Sistemas · ASIX",
        "hero_desc": "Infraestructura Windows y automatización de procesos en NeodataMeat. Fuera del trabajo, diseño y autoalojo aplicaciones con IA.",
        "nav_about_short": "Sobre mí",
        "nav_exp_short": "Experiencia",
        "nav_edu_short": "Educación",
        "nav_skills_short": "Habilidades",
        "nav_certs_short": "Cursos",
        "nav_about": "Sobre mí",
        "nav_exp": "Experiencia Laboral",
        "nav_edu": "Educación",
        "nav_skills": "Habilidades",
        "nav_langs": "Idiomas",
        "about_p1": "Soy <strong>Técnico de Sistemas</strong> con experiencia en entornos empresariales, especializado en administración de sistemas Windows, Active Directory y automatización de procesos con Power Platform.",
        "about_p2": "Trabajo en <strong>NeodataMeat</strong> gestionando infraestructuras IT, resolviendo incidencias técnicas y participando activamente en la mejora de procesos internos mediante Microsoft Dynamics CRM y Power Automate.",
        "about_p3": "Fuera del trabajo diseño, construyo y autoalojo aplicaciones completas, del modelo de datos al despliegue, con un interés especial por los <strong>agentes de IA con <em>tool-calling</em></strong>, los sistemas multiusuario y la automatización práctica.",
        "exp_title_1": "Técnico Junior de Sistemas",
        "exp_date_1": "Marzo 2025 – Presente",
        "exp_desc_1": "<li>Administración de usuarios, grupos y GPOs con Active Directory.</li><li>Gestión y mantenimiento de servidores Windows Server.</li><li>Automatización de procesos con Power Automate.</li><li>Administración de Microsoft Dynamics AX/BC y CRM.</li><li>Soporte técnico de primer nivel a los usuarios.</li><li>Gestión de entornos virtualizados.</li>",
        "exp_title_2": "Técnico de Sistemas (Prácticas DUAL)",
        "exp_date_2": "Junio 2024 – Febrero 2025",
        "exp_desc_2": "<li>Soporte técnico y resolución de incidencias.</li><li>Configuración e inventario de equipos informáticos.</li><li>Instalación y mantenimiento de software.</li><li>Documentación técnica de procesos internos.</li>",
        "edu_title_1": "Grado Superior ASIX",
        "edu_desc_1": "Administración de Sistemas Informáticos en Red",
        "edu_date_1": "En curso",
        "edu_title_2": "Grado Medio SMX",
        "edu_desc_2": "Sistemas Microinformáticos y Redes",
        "edu_date_2": "2023 – 2025",
        "skills_systems": "SISTEMAS Y REDES",
        "skills_business": "HERRAMIENTAS Y PLATAFORMAS",
        "skills_soft": "APTITUDES",
        "skill_net": "Servicios de Red",
        "skill_virt": "Virtualización",
        "skill_azure": "Azure (básico)",
        "apt_1": "Resolución de Incidencias",
        "apt_3": "Aprendizaje rápido",
        "apt_4": "Trabajo en equipo",
        "apt_5": "Adaptabilidad",
        "apt_6": "Comunicación",
        "apt_7": "Analítica",
        "lang_cat": "Catalán",
        "lang_es": "Español",
        "lang_en": "Inglés",
        "lang_native": "Nativo / Bilingüe",
        "lang_professional": "Professional Working",
        "courses_title": "Cursos y Certificados",
        "course_fortigate": "FortiGate 7.6 Operator",
        "course_getting_started": "Getting Started in Cybersecurity 3.0",
        "course_iot": "Internet de las Cosas (IoT)",
        "course_1": "Google: IA y Productividad",
        "course_2": "Microsoft Copilot",
        "course_3": "Fundamentos de ChatGPT",
        "course_4": "Ethical Hacking",
        "course_6": "Intro to Threat Landscape 3.0",
        "course_7": "Technical Intro to Cybersecurity 3.0",
        "nav_projects_short": "Proyectos",
        "nav_projects": "Proyectos Personales",
        "proj_kovia_sub": "Asistente personal multiusuario con IA",
        "proj_kovia_desc": "Aplicación web y PWA instalable donde cada usuario gestiona gastos, agenda, hábitos, recordatorios, nutrición y noticias hablando con un <strong>agente de IA con 23 herramientas</strong>, por texto o por voz. Es <strong>multiusuario por diseño</strong>: el aislamiento de datos entre cuentas se aplica en PostgreSQL con Row-Level Security. El agente funciona sobre Claude (AWS Bedrock) con streaming SSE y prompt caching, transcripción de voz con Whisper y lectura de tickets con visión. Varios workers en segundo plano envían recordatorios, tareas cron y un resumen matinal personalizado por Web Push. Unas 7.500 líneas de TypeScript, autoalojado en una Raspberry Pi 4 detrás de Traefik con HTTPS automático.",
        "proj_assistant_sub": "Asistente personal con IA en Telegram",
        "proj_assistant_desc": "Asistente personal que funciona con lenguaje natural y notas de voz: gastos, hábitos, recordatorios, tareas recurrentes, Google Calendar, el tiempo, búsqueda web y datos de salud de Garmin. Agente con <em>tool-calling</em> y <strong>enrutamiento entre dos modelos</strong> para reducir costes: Groq (Llama) para las tareas rápidas y Claude (AWS Bedrock) para el razonamiento complejo. Voz de ida y vuelta con Whisper y Amazon Polly. La integración con Garmin es un microservicio en Python aparte. Desplegado con Docker en una Raspberry Pi.",
        "proj_view": "Ver en GitHub",
        "proj_habitforge_sub": "PWA autoalojada de seguimiento de hábitos",
        "proj_habitforge_desc": "Seguimiento de hábitos multiusuario, instalable en el móvil como una app nativa y con funcionamiento offline. Notificaciones push reales con Web Push (VAPID) y un sistema de recordatorios priorizado (racha en peligro, última oportunidad y resumen semanal) que nunca envía más de una notificación por hora. Rachas, hitos, estadísticas diarias, semanales, mensuales y anuales, y un mapa de calor anual. API REST con Express y MariaDB; frontend en JavaScript vanilla con un service worker escrito a mano. Desplegado con Docker Compose y Traefik con HTTPS automático.",
        "proj_portfolio_title": "Portafolio Personal",
        "proj_portfolio_sub": "Web multilingüe (CA/ES/EN)",
        "proj_portfolio_desc": "Este mismo portafolio, desarrollado desde cero: web de una sola página, responsive y con tema oscuro. Destaca un sistema multilingüe propio (catalán, castellano e inglés) con cambio de idioma instantáneo en el cliente, sin recargar la página. Hecho con HTML, CSS y JavaScript vanilla, con animaciones de scroll y navegación activa (scrollspy). Desplegado con GitHub Pages.",
        "about_p4": "Curso el Grado Superior de ASIX en Salesians Sarrià y sigo creciendo en redes y ciberseguridad. Estoy abierto a oportunidades en administración de sistemas, infraestructura y automatización.",
        "skills_dev": "DESARROLLO E IA",
        "proj_badge_case": "Caso de estudio",
        "footer_rights": "Todos los derechos reservados"
    },
    "en": {
        "badge_status": "Working at NeodataMeat",
        "hero_hello": "Hey! I'm",
        "hero_role": "Systems Technician · ASIX",
        "hero_desc": "Windows infrastructure and process automation at NeodataMeat. Outside work, I design and self-host AI-powered applications.",
        "nav_about_short": "About",
        "nav_exp_short": "Experience",
        "nav_edu_short": "Education",
        "nav_skills_short": "Skills",
        "nav_certs_short": "Courses",
        "nav_about": "About me",
        "nav_exp": "Work Experience",
        "nav_edu": "Education",
        "nav_skills": "Skills",
        "nav_langs": "Languages",
        "about_p1": "I am a <strong>Systems Technician</strong> with experience in corporate environments, specialized in Windows systems administration, Active Directory, and process automation with Power Platform.",
        "about_p2": "I work at <strong>NeodataMeat</strong> managing IT infrastructure, resolving technical incidents, and actively participating in internal process improvements through Microsoft Dynamics CRM and Power Automate.",
        "about_p3": "Outside work I design, build and self-host complete applications, from the data model to deployment, with a particular interest in <strong>AI agents with <em>tool-calling</em></strong>, multi-user systems and practical automation.",
        "exp_title_1": "Junior Systems Technician",
        "exp_date_1": "March 2025 – Present",
        "exp_desc_1": "<li>User, group and GPO administration with Active Directory.</li><li>Windows Server management and maintenance.</li><li>Process automation with Power Automate.</li><li>Microsoft Dynamics AX/BC and CRM administration.</li><li>First-level IT helpdesk and technical support.</li><li>Virtualized environment management.</li>",
        "exp_title_2": "Systems Technician (DUAL Internship)",
        "exp_date_2": "June 2024 – February 2025",
        "exp_desc_2": "<li>Technical support and incident resolution.</li><li>Hardware configuration and inventory.</li><li>Software installation and maintenance.</li><li>Technical documentation of internal processes.</li>",
        "edu_title_1": "Higher Degree ASIX",
        "edu_desc_1": "Network Computer Systems Administration",
        "edu_date_1": "In progress",
        "edu_title_2": "Middle Degree SMX",
        "edu_desc_2": "Microcomputer Systems and Networks",
        "edu_date_2": "2023 – 2025",
        "skills_systems": "SYSTEMS & NETWORKS",
        "skills_business": "TOOLS & PLATFORMS",
        "skills_soft": "SOFT SKILLS",
        "skill_net": "Network Services",
        "skill_virt": "Virtualization",
        "skill_azure": "Azure (basic)",
        "apt_1": "Problem Solving",
        "apt_3": "Fast Learner",
        "apt_4": "Teamwork",
        "apt_5": "Adaptability",
        "apt_6": "Communication",
        "apt_7": "Analytics",
        "lang_cat": "Catalan",
        "lang_es": "Spanish",
        "lang_en": "English",
        "lang_native": "Native / Bilingual",
        "lang_professional": "Professional Working",
        "courses_title": "Courses & Certifications",
        "course_fortigate": "FortiGate 7.6 Operator",
        "course_getting_started": "Getting Started in Cybersecurity 3.0",
        "course_iot": "Internet of Things (IoT)",
        "course_1": "Google: AI and Productivity",
        "course_2": "Microsoft Copilot",
        "course_3": "ChatGPT Fundamentals",
        "course_4": "Ethical Hacking",
        "course_6": "Intro to Threat Landscape 3.0",
        "course_7": "Technical Intro to Cybersecurity 3.0",
        "nav_projects_short": "Projects",
        "nav_projects": "Personal Projects",
        "proj_kovia_sub": "Multi-user AI personal assistant",
        "proj_kovia_desc": "A web app and installable PWA where each user manages expenses, calendar, habits, reminders, nutrition and news by talking to an <strong>AI agent with 23 tools</strong>, in text or by voice. It is <strong>multi-tenant by design</strong>: per-user data isolation is enforced in PostgreSQL with Row-Level Security. The agent loop runs on Claude (AWS Bedrock) with SSE streaming and prompt caching, Whisper voice transcription and receipt reading with vision. Background workers send reminders, cron tasks and a personalised morning briefing via Web Push. About 7.5k lines of TypeScript, self-hosted on a Raspberry Pi 4 behind Traefik with automatic HTTPS.",
        "proj_assistant_sub": "AI-powered personal assistant on Telegram",
        "proj_assistant_desc": "A personal assistant driven by natural language and voice notes: expenses, habits, reminders, recurring tasks, Google Calendar, weather, web search and health data from Garmin. A tool-calling agent with <strong>dual-model routing</strong> to keep costs down: Groq (Llama) for fast tasks and Claude (AWS Bedrock) for complex reasoning. End-to-end voice with Whisper and Amazon Polly. The Garmin integration is a separate Python microservice. Deployed with Docker on a Raspberry Pi.",
        "proj_view": "View on GitHub",
        "proj_habitforge_sub": "Self-hosted habit-tracking PWA",
        "proj_habitforge_desc": "A multi-user habit tracker, installable on mobile like a native app and fully functional offline. Real push notifications with Web Push (VAPID) and a prioritised reminder system (streak at risk, last chance and weekly summary) that never sends more than one notification per hour. Streaks, milestones, daily, weekly, monthly and yearly stats, and an annual heatmap. REST API on Express and MariaDB; frontend in vanilla JavaScript with a hand-written service worker. Deployed with Docker Compose and Traefik with automatic HTTPS.",
        "proj_portfolio_title": "Personal Portfolio",
        "proj_portfolio_sub": "Multilingual website (CA/ES/EN)",
        "proj_portfolio_desc": "This very portfolio, built from scratch: a responsive single-page site with a dark theme. It features a custom multilingual system (Catalan, Spanish and English) with instant client-side language switching, no page reload. Built with vanilla HTML, CSS and JavaScript, with scroll animations and active-section navigation (scrollspy). Deployed on GitHub Pages.",
        "about_p4": "I'm studying the Higher Degree in ASIX at Salesians Sarrià and keep growing in networking and cybersecurity. I'm open to opportunities in systems administration, infrastructure and automation.",
        "skills_dev": "DEVELOPMENT & AI",
        "proj_badge_case": "Case study",
        "footer_rights": "All rights reserved"
    }
};

// ── LANGUAGE ──────────────────────────────────────────────────────────────────
function setLanguage(lang) {
    localStorage.setItem('cv-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang]?.[key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// ── SCROLL ANIMATIONS (IntersectionObserver) ──────────────────────────────────
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));
}

// ── SCROLLSPY ─────────────────────────────────────────────────────────────────
function initScrollspy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    if (!sections.length || !navLinks.length) return;

    const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${entry.target.id}`
                    );
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => spy.observe(s));
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('cv-lang') || 'ca';
    setLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });

    initScrollAnimations();
    initScrollspy();
});
