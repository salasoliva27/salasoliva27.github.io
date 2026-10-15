// English is the page as written (and what search engines read). Spanish is
// swapped in on request: the EN / ES switch, remembered on this device, or a
// link with ?lang=es (what the Spanish emails send). Every
// element that changes carries data-i18n (its HTML) or data-i18n-attr
// ("attr:key;attr:key").
(() => {
  const ES = {
    _title: "Alejandro Salas Oliva — Ingeniero de Datos e IA",
    _desc: "Ingeniero de datos e IA. Pipelines en Snowflake, machine learning y sistemas de agentes con LLM — además de los productos de IA que construyo por mi cuenta.",

    nav_work: "Proyectos",
    nav_rates: "Tarifas",
    nav_exp: "Experiencia",
    nav_contact: "Contacto",
    lang_group: "Idioma",
    theme_change: "Cambiar tema",
    theme_dark: "Oscuro",
    theme_light: "Claro",
    theme_midnight: "Medianoche",
    theme_sand: "Arena",
    theme_terminal: "Terminal",

    hero_eyebrow: "Ciudad de México · abierto a trabajo remoto",
    hero_role: "Ingeniero de Datos e IA",
    hero_lede: "Construyo pipelines de datos, modelos de machine learning y sistemas de agentes con LLM. En mi trabajo eso ha significado migraciones a Snowflake y modelos de churn para empresas como Exxon Mobil y Oracle. También ayudo a empresas a integrar la IA en su forma de trabajar, y construyo mis propios productos de IA — los proyectos de abajo.",
    cta_email: "Escríbeme",
    wa_link: "https://wa.me/525529845788?text=Hola%20Alejandro%2C%20vi%20tu%20portafolio",

    work_h: "Proyectos destacados",
    work_note: "Ninguno está publicado todavía. Cada captura viene del proyecto real corriendo en mi computadora; los datos personales están difuminados y el chat de Janus muestra una conversación de ejemplo.",

    janus_kicker: "Principal · personal",
    janus_status: "En uso diario · privado",
    janus_sum: "Mi IA personal. Maneja lo que uso todos los días — tanto para mi vida como para mi trabajo y mis proyectos — en tableros en vivo, con un chat siempre abierto al lado, para que cualquier cosa en pantalla esté a una pregunta de distancia.",
    janus_1: "Un tablero de inicio para el día: agenda, correo, entrenamiento, movimientos del mercado y oportunidades de trabajo, cada uno se actualiza solo.",
    janus_2: "Apps para cada parte de la vida y el trabajo: bitácora del gimnasio, finanzas personales, flujos que corren a cierta hora, el avance de cada proyecto y un historial de chats con búsqueda.",
    janus_3: "El chat actúa, no solo responde: lee mi correo, registra un entrenamiento, arregla un flujo que falló o construye una función, y recuerda entre conversaciones.",
    janus_4: "Por dentro, agentes de IA que comparten una sola memoria (Supabase + pgvector, un grafo en Neo4j), con Claude Code y Codex como motores intercambiables — en computadora o en el celular.",
    janus_5: "Cada pregunta va al modelo que su dificultad pide — uno rápido, uno de uso diario o uno profundo — y cada cambio corre como un ciclo con pruebas que tiene que pasar antes de darse por terminado.",
    alt_janus_home: "Inicio de Janus IA: una conversación de ejemplo en el chat a la izquierda, junto al tablero del día — agenda, correo, entrenamiento, mercados y oportunidades de trabajo (datos personales difuminados)",
    alt_janus_apps: "Menú de apps de Janus IA — apps de trabajo, personales y de automatización — abierto sobre el plan y la bitácora de entrenamiento del gimnasio",

    alt_ozum_onb: "Onboarding de OZUM AI: los nueve pasos guiados, de conectar un motor a tener la IA de la empresa funcionando, en español",
    alt_ozum_ws: "Espacio de trabajo de OZUM AI con un chat junto a la consola de onboarding",
    ozum_kicker: "Cliente · adopción de IA",
    ozum_status: "Cliente activo · primera fase entregada",
    ozum_sum: "Ozum es una empresa de eventos corporativos y viajes de incentivo con más de 30 años en México y Estados Unidos. Estoy integrando la IA en su forma de trabajar: primero su propia plataforma de IA, luego flujos construidos con el equipo, y después enseñarle a cada persona a construir sobre ella.",
    ozum_1: "<strong>Entregado:</strong> OZUM AI, una plataforma de IA en español con la marca de Ozum que se instala con un doble clic en Mac o Windows — sin preparar nada antes.",
    ozum_2: "<strong>Entregado:</strong> un onboarding guiado que lleva a una persona sin conocimientos técnicos de cero a un motor de IA funcionando, memoria compartida de la empresa e inicio de sesión con roles (cliente, negocio, desarrollador, admin), probado con instalaciones desde cero.",
    ozum_new: "<strong>Construido desde entonces:</strong> un tablero de la empresa que se arma solo a partir del onboarding del dueño, y una memoria compartida que se mantiene consistente cuando varias personas escriben a la vez — con las memorias de cada empleado privadas por defecto.",
    ozum_3: "<strong>Siguiente:</strong> ya está instalada en la computadora del dueño; sigue su onboarding, luego los primeros flujos construidos con él a partir de problemas reales y después cada empleado creando los suyos.",
    ozum_4: "Un plan de adopción de 12 semanas con dos puntos donde el gasto se detiene solo si la plataforma no se está usando.",
    ozum_price: "Programa de adopción de IA <small>$4,700</small>",

    alt_bosques_p: "Página de proyecto de Espacio Bosques con la línea de hitos y el avance del financiamiento",
    alt_bosques_d: "Tablero de Espacio Bosques con la lista de proyectos de la comunidad",
    bosques_kicker: "Fintech cívica",
    bosques_status: "Prueba de concepto · modo simulación",
    bosques_sum: "Una plataforma de financiamiento comunitario para una colonia de la Ciudad de México: los vecinos proponen, financian y siguen proyectos locales, y el dinero se libera hito por hito.",
    bosques_1: "Claude redacta el plan completo del proyecto — presupuesto, hitos, calendario — a partir de una idea en lenguaje sencillo.",
    bosques_2: "Los proveedores suben evidencia; la visión de Claude lee facturas mexicanas (CFDI) y valida los RFC contra la lista negra del SAT.",
    bosques_3: "Votación comunitaria con umbrales que crecen con el número de participantes; bilingüe EN/ES.",

    alt_mercado: "Tablero de Mercado Bot después de diez rondas simuladas: gráfica del portafolio, señales, registro de operaciones, calculadora de Kelly",
    mercado_kicker: "Investigación cuantitativa",
    mercado_status: "Prototipo · solo simulación",
    mercado_sum: "Un bot de investigación para mercados de predicción que estima probabilidades con un LLM y dimensiona posiciones como lo haría un quant — nunca con dinero real.",
    mercado_1: "Pipeline de cinco etapas: escanear mercados, investigar, predecir, ejecutar en papel, reinvertir.",
    mercado_2: "Tamaño de posición con el criterio de Kelly; mide tasa de aciertos, Brier score y Sharpe ratio.",
    mercado_3: "Monitor de riesgo con límite de caída, límite de gasto en API y un interruptor de paro; la operación real está bloqueada.",

    alt_long_hero: "Portada del sitio de Longevité Therapeutics con video de fondo",
    alt_long_phone: "Sitio de Longevité en un celular",
    long_kicker: "Sitio web para cliente",
    long_status: "Terminado · por lanzar",
    long_sum: "Un sitio bilingüe para una clínica de longevidad y medicina funcional en la Ciudad de México, rehecho a lo largo de varias rondas de revisión con la clienta.",
    long_1: "Portada con video, tarjetas de programas que se expanden, preguntas frecuentes con fuentes citadas y contacto directo a WhatsApp.",
    long_2: "HTML, CSS y JavaScript puros — modular, sin paso de compilación, rápido en el celular.",
    long_3: "Cada ronda de revisión verificada por una suite de Playwright con 35 pruebas automáticas.",

    also_h: "También en construcción",
    also_platu: "Un agente de IA para aprender idiomas que califica conversaciones completas — si puedes seguirla, aportar y corregirte — en lugar de contar errores.",
    also_clippmx: "Un marketplace de campañas de video corto, primero en México: cualquiera publica una campaña, los creadores la recortan y la publican en sus propias cuentas, y cobran por vista verificada por SPEI o PayPal — las vistas se cuentan solo con la API oficial de cada red.",

    rates_h: "Tarifas",
    rates_note: "Para trabajo freelance y por contrato, en USD. Cada precio fijo es mi estimación de horas por la tarifa por hora, para que veas la cuenta. El alcance se acuerda por escrito antes de empezar.",
    rate_hour: "/ hora",
    rate_p: "Consultoría, ingeniería de datos, integración de IA y todo lo que no entre en el programa de abajo.",
    prod_h: "Programa de adopción de IA",
    prod_desc: "Para una empresa que quiere integrar la IA en su forma de trabajar: su propia plataforma de IA instalada, los primeros flujos construidos con su equipo y todos aprendiendo a construir los suyos. Doce semanas, con dos puntos donde el gasto se detiene si no se está usando.",
    prod_hours: "94 h · 12 semanas",
    prod_extra: "Después $750/mes para hasta 10 personas: plataforma, actualizaciones y 3 horas de trabajo al mes.",
    rates_foot: "Los costos de IA y hosting (suscripciones a modelos, bases de datos) los pagas tú directamente a cada proveedor, sin margen agregado.",

    exp_h: "Experiencia",
    exp_1_when: "oct 2025 — hoy",
    exp_1: "Responsable de punta a punta de los pipelines de ingesta al warehouse corporativo en Snowflake, del contrato con la fuente a producción. Construí un patrón resiliente de API a Snowflake que se reutiliza en varias integraciones, y convierto tickets vagos de calidad de datos en causas raíz con nombre.",
    exp_2_when: "mar 2025 — hoy",
    exp_2_h: "Consultor de ML e IA · Outlier AI, LATAM Coders",
    exp_2: "Evalúo y corrijo modelos de IA de frontera para clientes como Tesla y OpenAI: prompting, análisis, detección de objetos y confiabilidad de código.",
    exp_3_when: "nov 2023 — abr 2025",
    exp_3_h: "Consultor Sr. de Tecnología · EY, AI &amp; Tech",
    exp_3: "Co-dirigí la migración por fases de SAP a Snowflake de Exxon Mobil; construí herramientas de validación en Python para QA y concilié métricas de emisiones bajo escrutinio regulatorio.",
    exp_4_when: "dic 2021 — nov 2023",
    exp_4_h: "Científico de Datos Sr. · Oracle, TINNO",
    exp_4: "Construí modelos de churn y riesgo de renovación (regresión logística, gradient boosting) para un grupo de trabajo directivo, además de una capa de análisis de sentimiento con NLP sobre tickets de soporte con BERT, NLTK y la API de OpenAI.",

    skills_h: "Habilidades",
    skills_eng: "Ingeniería",
    edu_1: "<strong>Posgrado, Data Science &amp; Business Analytics</strong> — University of Texas at Austin, 2021",
    edu_2: "<strong>Ingeniería Industrial</strong> — Universidad Anáhuac Norte, 2020",
    edu_3: "<strong>Idiomas</strong> — español (nativo), inglés (avanzado), francés (avanzado)",

    contact_h: "Hablemos",
    contact_p: "¿Buscas ingeniería de datos o de IA, o quieres que te muestre alguno de los proyectos? Casi todo el código vive en repositorios privados — con gusto te lo enseño en una llamada.",
    shot: "Captura",
    close: "Cerrar",
  };

  const KEY = "lang";
  const root = document.documentElement;
  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const attrNodes = [...document.querySelectorAll("[data-i18n-attr]")];
  const pairs = (n) => n.dataset.i18nAttr.split(";").map((p) => p.split(":"));
  const enHTML = new Map(nodes.map((n) => [n, n.innerHTML]));
  const enAttr = new Map(attrNodes.map((n) => [n, Object.fromEntries(pairs(n).map(([a]) => [a, n.getAttribute(a)]))]));
  const metaDesc = document.querySelector('meta[name="description"]');
  const en = { title: document.title, desc: metaDesc ? metaDesc.content : "" };
  const choices = [...document.querySelectorAll(".lang-switch [data-lang]")];

  function apply(lang) {
    const es = lang === "es";
    root.lang = es ? "es" : "en";
    nodes.forEach((n) => { const v = ES[n.dataset.i18n]; n.innerHTML = es && v != null ? v : enHTML.get(n); });
    attrNodes.forEach((n) => pairs(n).forEach(([a, k]) => { const v = ES[k]; n.setAttribute(a, es && v != null ? v : enAttr.get(n)[a]); }));
    document.title = es ? ES._title : en.title;
    if (metaDesc) metaDesc.content = es ? ES._desc : en.desc;
    // The theme trigger shows the chosen theme's name; follow the language.
    const chosen = document.querySelector('[data-theme-choice][aria-checked="true"]');
    const nameEl = document.querySelector(".theme-btn .theme-name");
    if (chosen && nameEl) nameEl.textContent = chosen.textContent.trim();
    choices.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }

  const fromUrl = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* private mode */ }
  let lang = fromUrl === "es" || fromUrl === "en" ? fromUrl : saved === "es" ? "es" : "en";
  if (fromUrl === "es" || fromUrl === "en") { try { localStorage.setItem(KEY, fromUrl); } catch (e) { /* ok */ } }
  apply(lang);

  choices.forEach((b) => b.addEventListener("click", () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem(KEY, lang); } catch (e) { /* ok */ }
    // A ?lang= link only picks the first language; a choice made here has to
    // survive a reload, so drop the parameter from the address.
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) { url.searchParams.delete("lang"); history.replaceState(null, "", url); }
    apply(lang);
  }));
})();
