// ── TRANSLATIONS ──────────────────────────────────────────────────────────────
// Each key matches a data-i18n attribute in index.html (applied with innerHTML).
// data-i18n-alt keys set an image's alt text. Add every key to ca, es and en.
const translations = {
    ca: {
        skip: "Salta al contingut",
        nav_projects: "Projectes",
        nav_exp: "Experiència",
        nav_about: "Sobre mi",
        nav_contact: "Contacte",
        hero_eyebrow: "Barcelona · Tècnic de sistemes a NeodataMeat",
        hero_title: "Mantinc sistemes en marxa i construeixo apps que la gent fa servir.",
        hero_lead: "Soc en Jan. Administro infraestructura Windows i automatitzo processos amb Power Platform. Pel meu compte he dissenyat, programat i publicat <strong>Sulfata</strong>, una app per a pagesos que ja és a l'App Store i a Google Play.",
        cta_work: "Veure projectes",
        cta_contact: "Parlem",
        fact_stores: "botigues on és Sulfata: App Store i Google Play",
        fact_products: "productes fitosanitaris consultables sense connexió",
        fact_since: "any en què vaig començar a NeodataMeat com a tècnic de sistemes",
        fact_langs: "idiomes de treball: català, castellà i anglès",
        projects_title: "Projectes",
        projects_intro: "Productes que he portat de la idea a usuaris reals, fets en el meu temps lliure.",
        live: "Publicada",
        sulfata_kind: "App mòbil · iOS i Android",
        sulfata_lead: "Diu als pagesos quins productes fitosanitaris estan autoritzats a Espanya per al seu cultiu i la seva plaga, amb la dosi, el termini de seguretat i el nombre màxim d'aplicacions.",
        sulfata_p1_t: "Funciona al camp, sense cobertura",
        sulfata_p1: "Tot el registre oficial (més de 2.000 productes i 60.000 usos) va dins de l'app en una base SQLite comprimida d'uns 2,5 MB.",
        sulfata_p2_t: "Dades sempre al dia, sense servidor",
        sulfata_p2: "Un pipeline amb GitHub Actions descarrega el registre del Ministeri, el converteix, en valida el resultat i el publica. L'app s'actualitza sola.",
        sulfata_p3_t: "Calendari i avisos",
        sulfata_p3: "Calcula el primer dia de collita després de cada tractament i avisa si un producte desat deixa d'estar autoritzat.",
        sulfata_p4_t: "Privacitat per defecte",
        sulfata_p4: "Sense comptes, sense anuncis i sense seguiment. Subscripció gestionada amb RevenueCat i errors a Sentry (regió UE).",
        store_apple_small: "Descarrega-la a",
        store_google_small: "Disponible a",
        alt_sulfata_1: "Productes autoritzats contra el míldiu de la vinya a Sulfata",
        alt_sulfata_2: "Fitxa d'un producte a Sulfata",
        alt_sulfata_3: "Calendari de tractaments amb el termini de seguretat a Sulfata",
        kovia_kind: "Aplicació web i PWA · IA",
        kovia_status: "Fase de validació",
        kovia_desc: "Assistent personal multiusuari: despeses, agenda, hàbits, recordatoris, nutrició i notícies, gestionats parlant amb un <strong>agent d'IA amb 23 eines</strong>, per text o per veu.",
        kovia_points: "<li>Aïllament de dades per usuari a PostgreSQL amb <strong>Row-Level Security</strong>.</li><li>Agent sobre <strong>Claude (AWS Bedrock)</strong> amb streaming i prompt caching; veu amb Whisper; despeses a partir de tiquets amb visió.</li><li>Workers en segon pla per a recordatoris i un resum matinal per Web Push.</li>",
        exp_title: "Experiència",
        exp_where: "Barcelona · Juny 2024 – actualitat",
        exp_role_1: "Tècnic júnior de sistemes",
        exp_date_1: "Març 2025 – actualitat",
        exp_desc_1: "<li>Usuaris, grups i GPO amb Active Directory.</li><li>Administració i manteniment de Windows Server i d'entorns virtualitzats.</li><li>Automatització de processos interns amb Power Automate.</li><li>Administració de Microsoft Dynamics AX/BC i CRM.</li><li>Helpdesk i suport tècnic als usuaris.</li>",
        exp_role_2: "Tècnic de sistemes (FP dual)",
        exp_date_2: "Juny 2024 – febrer 2025",
        exp_desc_2: "<li>Resolució d'incidències.</li><li>Configuració i inventari de maquinari.</li><li>Desplegament i manteniment de programari.</li><li>Documentació tècnica de processos interns.</li>",
        about_title: "Sobre mi",
        about_p1: "De dia treballo a sistemes: que la gent pugui entrar, que els servidors responguin i que les tasques repetitives es facin soles. Aquest ofici m'ha ensenyat a pensar en el que passa quan alguna cosa falla.",
        about_p2: "Fora de la feina faig productes sencers: investigo el mercat, dissenyo, programo, publico a les botigues i en faig el manteniment. Treballo amb agents d'IA com Claude Code, amb fases clares i proves abans de cada publicació.",
        edu_title: "Formació",
        edu_date_1: "· en curs",
        langs_title: "Idiomes",
        langs_text: "Català i castellà (nadiu) · Anglès (professional)",
        skills_systems: "Sistemes i infraestructura",
        skills_business: "Plataformes i automatització",
        skills_dev: "Desenvolupament",
        skills_data: "Dades, cloud i IA",
        skill_azure: "Azure (bàsic)",
        certs_title: "Cursos i certificacions",
        course_iot: "Internet de les Coses (IoT)",
        course_google: "Google: IA i productivitat",
        course_chatgpt: "Fonaments de ChatGPT",
        contact_title: "Tens un projecte o una vacant? Parlem.",
        contact_text: "Obert a oportunitats en sistemes, infraestructura i automatització, i a encàrrecs d'apps mòbils.",
        footer_built: "Fet a mà amb HTML, CSS i JavaScript.",
        theme_label: "Canvia el tema"
    },
    es: {
        skip: "Saltar al contenido",
        nav_projects: "Proyectos",
        nav_exp: "Experiencia",
        nav_about: "Sobre mí",
        nav_contact: "Contacto",
        hero_eyebrow: "Barcelona · Técnico de sistemas en NeodataMeat",
        hero_title: "Mantengo sistemas en marcha y construyo apps que la gente usa.",
        hero_lead: "Soy Jan. Administro infraestructura Windows y automatizo procesos con Power Platform. Por mi cuenta he diseñado, programado y publicado <strong>Sulfata</strong>, una app para agricultores que ya está en la App Store y en Google Play.",
        cta_work: "Ver proyectos",
        cta_contact: "Hablemos",
        fact_stores: "tiendas donde está Sulfata: App Store y Google Play",
        fact_products: "productos fitosanitarios consultables sin conexión",
        fact_since: "año en que empecé en NeodataMeat como técnico de sistemas",
        fact_langs: "idiomas de trabajo: catalán, castellano e inglés",
        projects_title: "Proyectos",
        projects_intro: "Productos que he llevado de la idea a usuarios reales, hechos en mi tiempo libre.",
        live: "Publicada",
        sulfata_kind: "App móvil · iOS y Android",
        sulfata_lead: "Dice a los agricultores qué productos fitosanitarios están autorizados en España para su cultivo y su plaga, con la dosis, el plazo de seguridad y el número máximo de aplicaciones.",
        sulfata_p1_t: "Funciona en el campo, sin cobertura",
        sulfata_p1: "Todo el registro oficial (más de 2.000 productos y 60.000 usos) va dentro de la app en una base SQLite comprimida de unos 2,5 MB.",
        sulfata_p2_t: "Datos siempre al día, sin servidor",
        sulfata_p2: "Un pipeline con GitHub Actions descarga el registro del Ministerio, lo convierte, valida el resultado y lo publica. La app se actualiza sola.",
        sulfata_p3_t: "Calendario y avisos",
        sulfata_p3: "Calcula el primer día de cosecha después de cada tratamiento y avisa si un producto guardado deja de estar autorizado.",
        sulfata_p4_t: "Privacidad por defecto",
        sulfata_p4: "Sin cuentas, sin anuncios y sin seguimiento. Suscripción gestionada con RevenueCat y errores en Sentry (región UE).",
        store_apple_small: "Descárgala en",
        store_google_small: "Disponible en",
        alt_sulfata_1: "Productos autorizados contra el mildiu de la vid en Sulfata",
        alt_sulfata_2: "Ficha de un producto en Sulfata",
        alt_sulfata_3: "Calendario de tratamientos con el plazo de seguridad en Sulfata",
        kovia_kind: "Aplicación web y PWA · IA",
        kovia_status: "Fase de validación",
        kovia_desc: "Asistente personal multiusuario: gastos, agenda, hábitos, recordatorios, nutrición y noticias, gestionados hablando con un <strong>agente de IA con 23 herramientas</strong>, por texto o por voz.",
        kovia_points: "<li>Aislamiento de datos por usuario en PostgreSQL con <strong>Row-Level Security</strong>.</li><li>Agente sobre <strong>Claude (AWS Bedrock)</strong> con streaming y prompt caching; voz con Whisper; gastos a partir de tickets con visión.</li><li>Workers en segundo plano para recordatorios y un resumen matinal por Web Push.</li>",
        exp_title: "Experiencia",
        exp_where: "Barcelona · Junio 2024 – actualidad",
        exp_role_1: "Técnico júnior de sistemas",
        exp_date_1: "Marzo 2025 – actualidad",
        exp_desc_1: "<li>Usuarios, grupos y GPO con Active Directory.</li><li>Administración y mantenimiento de Windows Server y de entornos virtualizados.</li><li>Automatización de procesos internos con Power Automate.</li><li>Administración de Microsoft Dynamics AX/BC y CRM.</li><li>Helpdesk y soporte técnico a los usuarios.</li>",
        exp_role_2: "Técnico de sistemas (FP dual)",
        exp_date_2: "Junio 2024 – febrero 2025",
        exp_desc_2: "<li>Resolución de incidencias.</li><li>Configuración e inventario de hardware.</li><li>Despliegue y mantenimiento de software.</li><li>Documentación técnica de procesos internos.</li>",
        about_title: "Sobre mí",
        about_p1: "De día trabajo en sistemas: que la gente pueda entrar, que los servidores respondan y que las tareas repetitivas se hagan solas. Este oficio me ha enseñado a pensar en lo que pasa cuando algo falla.",
        about_p2: "Fuera del trabajo hago productos completos: investigo el mercado, diseño, programo, publico en las tiendas y me ocupo del mantenimiento. Trabajo con agentes de IA como Claude Code, con fases claras y pruebas antes de cada publicación.",
        edu_title: "Formación",
        edu_date_1: "· en curso",
        langs_title: "Idiomas",
        langs_text: "Catalán y castellano (nativo) · Inglés (profesional)",
        skills_systems: "Sistemas e infraestructura",
        skills_business: "Plataformas y automatización",
        skills_dev: "Desarrollo",
        skills_data: "Datos, cloud e IA",
        skill_azure: "Azure (básico)",
        certs_title: "Cursos y certificaciones",
        course_iot: "Internet de las Cosas (IoT)",
        course_google: "Google: IA y productividad",
        course_chatgpt: "Fundamentos de ChatGPT",
        contact_title: "¿Tienes un proyecto o una vacante? Hablemos.",
        contact_text: "Abierto a oportunidades en sistemas, infraestructura y automatización, y a encargos de apps móviles.",
        footer_built: "Hecho a mano con HTML, CSS y JavaScript.",
        theme_label: "Cambiar el tema"
    },
    en: {
        skip: "Skip to content",
        nav_projects: "Projects",
        nav_exp: "Experience",
        nav_about: "About",
        nav_contact: "Contact",
        hero_eyebrow: "Barcelona · Systems technician at NeodataMeat",
        hero_title: "I keep systems running and build apps people actually use.",
        hero_lead: "I'm Jan. I run Windows infrastructure and automate processes with the Power Platform. On my own I designed, built and shipped <strong>Sulfata</strong>, an app for farmers that is live on the App Store and Google Play.",
        cta_work: "See projects",
        cta_contact: "Get in touch",
        fact_stores: "stores where Sulfata is live: App Store and Google Play",
        fact_products: "plant protection products searchable offline",
        fact_since: "the year I joined NeodataMeat as a systems technician",
        fact_langs: "working languages: Catalan, Spanish and English",
        projects_title: "Projects",
        projects_intro: "Products I've taken from idea to real users, built in my spare time.",
        live: "Live",
        sulfata_kind: "Mobile app · iOS and Android",
        sulfata_lead: "Tells farmers which plant protection products are authorised in Spain for their crop and pest, with the dose, the pre-harvest interval and the maximum number of applications.",
        sulfata_p1_t: "Works in the field, with no signal",
        sulfata_p1: "The whole official register (over 2,000 products and 60,000 uses) ships inside the app as a compressed SQLite database of about 2.5 MB.",
        sulfata_p2_t: "Always up-to-date data, no server",
        sulfata_p2: "A GitHub Actions pipeline downloads the Ministry's register, converts it, validates the result and publishes it. The app updates itself.",
        sulfata_p3_t: "Calendar and alerts",
        sulfata_p3: "Works out the first harvest day after each treatment and warns you if a saved product loses its authorisation.",
        sulfata_p4_t: "Private by default",
        sulfata_p4: "No accounts, no ads and no tracking. Subscriptions handled with RevenueCat and errors in Sentry (EU region).",
        store_apple_small: "Download on the",
        store_google_small: "Get it on",
        alt_sulfata_1: "Products authorised against grapevine downy mildew in Sulfata",
        alt_sulfata_2: "A product's detail page in Sulfata",
        alt_sulfata_3: "Treatment calendar with pre-harvest intervals in Sulfata",
        kovia_kind: "Web app and PWA · AI",
        kovia_status: "Validation phase",
        kovia_desc: "A multi-user personal assistant: expenses, calendar, habits, reminders, nutrition and news, managed by talking to an <strong>AI agent with 23 tools</strong>, in text or by voice.",
        kovia_points: "<li>Per-user data isolation in PostgreSQL with <strong>Row-Level Security</strong>.</li><li>Agent on <strong>Claude (AWS Bedrock)</strong> with streaming and prompt caching; voice with Whisper; receipts turned into expenses with vision.</li><li>Background workers for reminders and a morning briefing via Web Push.</li>",
        exp_title: "Experience",
        exp_where: "Barcelona · Jun 2024 – present",
        exp_role_1: "Junior Systems Technician",
        exp_date_1: "Mar 2025 – present",
        exp_desc_1: "<li>Users, groups and GPOs with Active Directory.</li><li>Windows Server and virtualised environment administration and maintenance.</li><li>Internal process automation with Power Automate.</li><li>Microsoft Dynamics AX/BC and CRM administration.</li><li>Helpdesk and user support.</li>",
        exp_role_2: "Systems Technician (dual VET internship)",
        exp_date_2: "Jun 2024 – Feb 2025",
        exp_desc_2: "<li>Incident resolution.</li><li>Hardware configuration and inventory.</li><li>Software deployment and maintenance.</li><li>Technical documentation of internal processes.</li>",
        about_title: "About",
        about_p1: "By day I work in systems: making sure people can log in, servers respond and repetitive tasks run on their own. The job has taught me to think about what happens when something breaks.",
        about_p2: "Outside work I build complete products: I research the market, design, code, ship to the stores and maintain them. I work with AI agents such as Claude Code, with clear phases and tests before every release.",
        edu_title: "Education",
        edu_date_1: "· in progress",
        langs_title: "Languages",
        langs_text: "Catalan and Spanish (native) · English (professional)",
        skills_systems: "Systems & infrastructure",
        skills_business: "Platforms & automation",
        skills_dev: "Development",
        skills_data: "Data, cloud & AI",
        skill_azure: "Azure (basic)",
        certs_title: "Courses & certifications",
        course_iot: "Internet of Things (IoT)",
        course_google: "Google: AI and Productivity",
        course_chatgpt: "ChatGPT Fundamentals",
        contact_title: "Got a project or an opening? Let's talk.",
        contact_text: "Open to roles in systems, infrastructure and automation, and to mobile app work.",
        footer_built: "Hand-built with HTML, CSS and JavaScript.",
        theme_label: "Toggle theme"
    }
};

// ── STORAGE (can throw in private mode) ──────────────────────────────────────
const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
};

// ── LANGUAGE ──────────────────────────────────────────────────────────────────
function setLanguage(lang) {
    if (!translations[lang]) lang = 'ca';
    const t = translations[lang];
    store.set('cv-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (t[key] !== undefined) el.alt = t[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const on = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on);
    });
    const toggle = document.getElementById('theme-toggle');
    if (toggle) toggle.setAttribute('aria-label', t.theme_label);
}

// ── THEME ─────────────────────────────────────────────────────────────────────
function currentTheme() {
    const forced = document.documentElement.dataset.theme;
    if (forced) return forced;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function paintThemeIcon() {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) icon.className = currentTheme() === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}

function initTheme() {
    paintThemeIcon();
    document.getElementById('theme-toggle')?.addEventListener('click', () => {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        store.set('cv-theme', next);
        paintThemeIcon();
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', paintThemeIcon);
}

// ── REVEAL ON SCROLL ──────────────────────────────────────────────────────────
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => observer.observe(el));
}

// ── SCROLLSPY + HEADER BORDER ─────────────────────────────────────────────────
function initScrollspy() {
    const links = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = [...links].map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);

    const spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
            }
        });
    }, { rootMargin: '-35% 0px -60% 0px' });
    sections.forEach(s => spy.observe(s));

    const header = document.querySelector('.site-header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    setLanguage(store.get('cv-lang') || 'ca');
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
    initTheme();
    initReveal();
    initScrollspy();
});
