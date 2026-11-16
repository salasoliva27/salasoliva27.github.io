// English is the page as written (and what search engines read). Spanish is
// swapped in on request: the EN / ES switch, remembered on this device, or a
// link with ?lang=es (what the Spanish emails send). Every
// element that changes carries data-i18n (its HTML) or data-i18n-attr
// ("attr:key;attr:key"). The window contents (.win-sources) are translated here
// too; site.js re-renders open windows on the "langchange" event.
(() => {
  const ES = {
    _title: "Alejandro Salas Oliva — Ingeniero de Datos e IA",
    _desc: "Ingeniero de datos e IA. Fundador de clippana, un marketplace de creadores en vivo en México, y creador de Janus IA, una plataforma de IA que corre automatizaciones en producción. Antes: pipelines en Snowflake y machine learning para Exxon Mobil y Oracle.",

    nav_main: "Principal",
    nav_work: "Proyectos",
    nav_sites: "Sitios web",
    nav_auto: "Automatizaciones",
    nav_rates: "Tarifas",
    nav_exp: "Experiencia",
    nav_contact: "Contacto",
    lang_group: "Idioma",

    hero_where: "Ingeniero de Datos e IA · Ciudad de México · abierto a trabajo remoto",
    hero_claim: "Construyo productos de IA que corren en producción. <b>clippana</b>, mi marketplace de creadores, está en vivo en México. <b>Janus IA</b>, mi plataforma de IA, corre cinco automatizaciones sobre <b>75+</b> tareas programadas — y una IA que construí diseña sitios web a partir de la marca de cada negocio.",
    hero_lede: "Antes: pipelines en Snowflake y modelos de machine learning para empresas como Exxon Mobil y Oracle. Haz clic en cualquier cosa de esta página para ver cómo funciona.",
    cta_email: "Escríbeme",
    wa_link: "https://wa.me/525529845788?text=Hola%20Alejandro%2C%20vi%20tu%20portafolio",

    reel_label: "Muestra de trabajo",
    reel1_s: "La plataforma de IA sobre la que corre todo",
    reel2_t: "Sitios de mi IA",
    reel2_s: "Diseñados a partir de la marca de cada negocio",
    reel3_s: "Videos y carruseles de noticias, hechos por IA",
    reel4_s: "Un marketplace de creadores, en vivo en México",
    reel_pause: "Pausa",

    sites_h: "Sitios web diseñados por una IA que construí",
    sites_why_h: "Por qué la construí",
    sites_why: "Los negocios pequeños casi nunca compran un sitio web por una presentación — lo compran cuando ven el suyo. Diseñar uno a mano para cada negocio no escala, así que construí una IA que hace la investigación y el primer diseño, y yo dedico mi tiempo a los negocios que responden.",
    sites_how_h: "Qué hace",
    sites_how: "Lee la marca de cada negocio — sus colores, tipografías, logo, fotos y palabras —, diseña un sitio con ese estilo y se lo envía al negocio gratis, como un archivo que es suyo. Un video corto y una propuesta llegan cuando responden. No hay plantilla por industria: cada página parte del negocio mismo.",
    sites_note: "Cada página se diseñó para un negocio real y se le envió en privado. Estas son capturas de las páginas tal como se enviaron; haz clic en una para verla completa.",

    work_h: "Proyectos destacados",
    work_note: "Cada imagen viene del proyecto real: clippana.com tal como está en vivo, los demás corriendo en mi computadora. Los datos personales están difuminados y el chat de Janus muestra una conversación de ejemplo. Haz clic en un proyecto para abrirlo.",
    open_case: "Abrir el caso",
    w_what: "Qué hace",

    janus_kicker: "Principal · plataforma de IA",
    janus_status: "En producción · en uso todos los días",
    janus_sum: "Una plataforma de IA que maneja el trabajo del día a día en tableros en vivo con un chat siempre al lado — y el motor sobre el que corren las automatizaciones de abajo. Cualquier cosa en pantalla está a una pregunta de distancia, y el chat actúa, no solo responde.",
    janus_open: "Explorar Janus IA",
    janus_1: "Un tablero de inicio para el día: agenda, correo, entrenamiento, movimientos del mercado y oportunidades, cada uno se actualiza solo.",
    janus_2: "Apps para cada parte del trabajo y del día: el avance de cada proyecto, flujos que corren a cierta hora, finanzas, bitácora del gimnasio y un historial de chats con búsqueda.",
    janus_3: "El chat actúa, no solo responde: lee el correo, registra un entrenamiento, arregla un flujo que falló o construye una función, y recuerda entre conversaciones.",
    janus_4: "Por dentro, agentes de IA que comparten una sola memoria (Supabase + pgvector, un grafo en Neo4j), con Claude Code y Codex como motores intercambiables — en computadora o en el celular.",
    janus_5: "Cada pregunta va al modelo que su dificultad pide — uno rápido, uno de uso diario o uno profundo — y cada cambio corre como un ciclo con pruebas que tiene que pasar antes de darse por terminado.",
    janus_6: "Corre las cinco automatizaciones en producción de esta página.",
    janus_goto: "Ver las automatizaciones que corre",
    alt_janus_home: "Inicio de Janus IA: una conversación de ejemplo en el chat a la izquierda, junto al tablero del día — agenda, correo, entrenamiento, mercados y oportunidades de trabajo (datos personales difuminados)",
    alt_janus_apps: "Menú de apps de Janus IA — apps de trabajo, personales y de automatización — abierto sobre el plan y la bitácora de entrenamiento del gimnasio",


    alt_long_hero: "Portada del sitio de Longevité Therapeutics con video de fondo",
    alt_long_phone: "Sitio de Longevité en un celular",
    long_kicker: "Sitio web para cliente",
    long_status: "Terminado · por lanzar",
    long_sum: "Un sitio bilingüe para una clínica de longevidad y medicina funcional en la Ciudad de México, rehecho a lo largo de varias rondas de revisión con la clienta.",
    long_1: "Portada con video, tarjetas de programas que se expanden, preguntas frecuentes con fuentes citadas y contacto directo a WhatsApp.",
    long_2: "HTML, CSS y JavaScript puros — modular, sin paso de compilación, rápido en el celular.",
    long_3: "Cada ronda de revisión verificada por una suite de Playwright con 35 pruebas automáticas.",
    clippana_kicker: "Principal · producto propio",
    clippana_status: "En vivo en clippana.com · desde noviembre de 2026",
    clippana_sum: "Un marketplace de campañas de video corto, primero en México. Los anunciantes fondean una campaña en pesos; los creadores publican en sus propias cuentas y cobran por vista verificada. Lo diseñé, lo construí y lo opero.",
    clippana_open: "Explorar clippana",
    alt_clippana_home: "clippana.com en una computadora: el titular «Clips que pagan por cada vista verificada» junto a un muro de clips reproduciéndose",
    alt_clippana_phone: "clippana.com en un celular: los clips se reproducen detrás del titular",
    clippana_1: "Un anunciante fondea una campaña en pesos y elige una de tres formas de participar: clips de su propio video, contenido original hecho por el creador, o una mezcla de las dos.",
    clippana_2: "Los creadores publican en sus propias cuentas y mandan el enlace. Las vistas se leen solo por el acceso oficial de cada red, nunca con scraping; el anunciante aprueba o rechaza cada clip con un motivo, y la plataforma decide una apelación.",
    clippana_3: "Ganancias, una retención de siete días, una alerta de fraude y los pagos corren sobre un libro contable, y cada tipo de cuenta — creador, anunciante, administrador — ve solo sus propias herramientas.",
    clippana_4: "La portada muestra solo lo que es cierto: sus cifras se leen de los registros, así que una plataforma nueva dice cero, y los creadores se ordenan por vistas verificadas, nunca por lo que ganan.",
    clippana_how_h: "Cómo está construido",
    clippana_5: "Node.js puro, sin framework, sobre Cloudflare Workers y Durable Objects, en español e inglés, con 228 pruebas automáticas.",
    clippana_6: "No corre JavaScript en el navegador: el movimiento, los modos claro y oscuro, los interruptores y las calculadoras son CSS, bajo una política que rechaza cualquier script.",
    clippana_7: "Diseñado en ocho rondas, por separado para celular y computadora, revisado en Chromium, Firefox y WebKit, con el contraste de cada texto medido.",
    clippana_8: "Nació de una automatización de clips que corrí cinco semanas: 142 publicaciones y 24,087 vistas entre TikTok, YouTube e Instagram.",
    clippana_note: "Imágenes de clippana.com tomadas el 15 de noviembre de 2026. Los clips de su muro son ejemplos hechos por computadora, y el sitio lo dice.",

    auto_h: "Automatizaciones en producción",
    auto_note: "Sistemas que corren con horario, sin que nadie apriete un botón — construidos, operados y monitoreados por mí. Los mismos pipelines pueden correr para cualquier negocio: contenido, investigación de proveedores, analítica. Haz clic en un sistema o en cualquiera de sus pasos.",
    w_auto_kicker: "Automatización · en producción",
    w_step_hint: "Haz clic en un paso para ver qué pasa en él.",
    f_views: "vistas",
    f_best: "en la mejor publicación",

    news_name: "Sala de noticias de IA",
    news_when: "Corriendo · lunes y jueves a las 19:00",
    news_line: "Encuentra las noticias de IA del día, convierte una historia en un video corto o en un carrusel con los colores de la empresa, y lo publica en Instagram y TikTok.",
    news_f1: "publicaciones desde el 14 de octubre",
    news_s1: "Elegir las historias", news_s1s: "las noticias del día",
    news_s2: "Escribir desde la fuente", news_s2s: "filtro de datos",
    news_s3: "Imágenes y movimiento", news_s3s: "IA, en nuestra GPU",
    news_s4: "Voz y re-escucha", news_s4s: "cada línea revisada",
    news_s5: "Edición y subtítulos", news_s5s: "video + carruseles",
    news_s6: "Publicar", news_s6s: "mar y vie, 12:30",
    news_biz: "Una sala de noticias que corre sola. Dos veces por semana lee las noticias de IA del día, elige la historia que vale la pena contar y produce un video corto o un carrusel terminado — guion, imágenes, movimiento, voz, subtítulos y música — y lo programa. Apúntala a las noticias, novedades de producto o blog de una empresa y se vuelve un canal de video sin equipo de producción.",
    news_note: "Conteo del 15 de noviembre de 2026: publicaciones del 14 de octubre al 6 de noviembre. Publicó todos los días hasta principios de noviembre y dos veces por semana desde entonces. La mayoría de las vistas vienen de TikTok.",
    news_acc_h: "Cómo se mantiene exacta",
    news_acc: "El guion se escribe solo a partir del artículo. Un filtro rechaza cualquier cita o cifra que no esté en la fuente, y una revisión de voz a texto escucha cada línea de la narración antes de publicar nada.",
    alt_news_1: "Cuadro de un video de noticias de IA publicado: Google anunció Genie 4",
    alt_news_2: "Cuadro del mismo video: un mundo de montañas generado en una pantalla, con subtítulos palabra por palabra",
    alt_news_3: "Cuadro del mismo video: una persona frente a una costa generada",
    news_trk: "Abrir su tracker",
    news_d1: "Cada corrida lee las noticias de IA del día y elige la historia que vale un video. Se dejan fuera crímenes, muertes y política, y se saltan los enlaces ya usados.",
    news_d2: "El guion — unos 35 segundos — se escribe solo a partir del artículo. Un filtro de datos rechaza cualquier cita o cifra que no esté en el texto fuente.",
    news_d3: "Cada escena recibe una imagen generada con IA, animada en un clip corto, más logos reales cuando la historia menciona a una empresa. Todo corre en nuestra propia GPU, así que un video no tiene costo por render.",
    news_d4: "Una voz clonada lee el guion. Luego un modelo de voz a texto escucha cada línea y la compara con el guion; una línea que no coincide se marca y se rehace antes de que el video avance.",
    news_d5: "Escenas, subtítulos palabra por palabra, música y efectos de sonido se arman en un video vertical. Una corrida puede hacer, en su lugar, un carrusel de fotos con los colores de la empresa.",
    news_d6: "Se programa para el siguiente día de publicación a las 12:30, con un texto que explica la historia. Las vistas se recogen cada dos horas y alimentan el tracker de contenido.",

    models_name: "Inteligencia de modelos de IA",
    models_when: "Corriendo · cada semana, martes y jueves",
    models_line: "Compara los modelos de IA del mercado — texto, voz a texto, visión, embeddings, voz, imagen, video, 3D — en rankings públicos y con precios reales, y recomienda un cambio solo cuando una prueba lo demuestra.",
    models_f1: "modelos seguidos",
    models_f2: "tipos de modelo",
    models_f3: "cifras sin fuente",
    models_s1: "Leer los rankings", models_s1s: "puntajes + precios",
    models_s2: "Fuera lo sin fuente", models_s2s: "sin enlace, sin cifra",
    models_s3: "Comparar iguales", models_s3s: "dentro de cada tipo",
    models_s4: "Prever el cambio", models_s4s: "costo + calidad",
    models_s5: "Prueba a ciegas", models_s5s: "con trabajo real",
    models_s6: "Cambiar o quedarse", models_s6s: "a un clic de volver",
    models_biz: "Elegir proveedores de IA se vuelve obsoleto en semanas. Esto mantiene la elección al día: cada semana lee los rankings públicos y las páginas de precios de cada tipo de modelo, compara solo iguales con iguales y muestra qué cambiaría un cambio en costo y calidad en cada lugar donde se usa el modelo. Nada cambia solo por un ranking — un candidato primero tiene que ganar una prueba con trabajo real.",
    models_ex_h: "Una decisión real que tomó",
    models_ex: "Voz a texto, octubre de 2026: un modelo más nuevo empató con el que está en uso en inglés (2.02% contra 2.25% de palabras erróneas) y perdió claramente en español (10.78% contra 5.99%). Se quedó el modelo actual, y el nuevo quedó instalado a un clic.",
    models_trk: "Abrir su tracker",
    models_d1: "Cada semana lee los rankings públicos de cada tipo de modelo — LMArena, Artificial Analysis, MTEB, Open ASR y otros — y las páginas de precios de cada fabricante.",
    models_d2: "Un precio o puntaje sin la página donde se leyó se descarta. Nada se adivina ni se arrastra de memoria.",
    models_d3: "Los modelos se comparan solo contra otros de su mismo tipo, en el mismo ranking, así que un modelo de voz nunca se mide contra un chatbot.",
    models_d4: "Para cada lugar donde se usa un modelo, muestra qué cambiaría un cambio: precio, calidad y si puede correr en nuestro propio hardware.",
    models_d5: "Un candidato corre con trabajo real junto al modelo en uso y se califica con el mismo material.",
    models_d6: "Solo una victoria clara entra, y cada cambio deja la configuración anterior a un clic.",

    market_name: "Analítica de mercado y trading en papel",
    market_when: "Corriendo · cada día de mercado, cada hora",
    market_line: "Busca acciones que cayeron pero se espera que se recuperen, opera con reglas un portafolio en papel contra el S&amp;P 500, y escribe un resumen en lenguaje sencillo. El código calcula cada cifra; la IA solo escribe el comentario.",
    market_f1: "entre análisis en horario de mercado",
    market_f2: "entre revisiones de stops",
    market_f3: "órdenes reales — solo en papel",
    market_s1: "Entran precios", market_s1s: "de la apertura al cierre",
    market_s2: "Indicadores en código", market_s2s: "nunca de la IA",
    market_s3: "Filtrar caídas", market_s3s: "cayeron, siguen sanas",
    market_s4: "Operaciones en papel", market_s4s: "stops dinámicos",
    market_s5: "Comentario", market_s5s: "lenguaje sencillo",
    market_s6: "Revisión semanal", market_s6s: "con backtests",
    market_biz: "Un escritorio de análisis que nunca duerme y nunca inventa una cifra. Los precios entran durante el día; caídas, promedios móviles y RSI se calculan en código; un filtro marca acciones que cayeron fuerte pero se ven sanas; un portafolio en papel opera con reglas fijas y stops dinámicos y se mide contra el S&amp;P 500; y el modelo solo escribe el comentario en lenguaje sencillo encima.",
    market_note: "Solo dinero de papel: sin llaves de bróker y sin órdenes reales.",
    market_trk: "Abrir su tracker",
    market_d1: "El primer análisis del día corre antes de que abra el mercado de EE. UU., luego cada hora mientras opera, y una vez más después del cierre.",
    market_d2: "Caídas, promedios móviles y RSI se calculan en código a partir de los precios. La IA nunca produce una cifra.",
    market_d3: "Las acciones que cayeron fuerte pero se ven sanas se marcan en el tablero, que se actualiza cada hora con el mercado abierto.",
    market_d4: "Un portafolio en papel compra y vende con reglas fijas de momentum, con stops dinámicos revisados cada 15 minutos, y se mide contra el S&amp;P 500.",
    market_d5: "La IA lee las cifras calculadas y escribe un resumen corto en lenguaje sencillo.",
    market_d6: "Cada sábado una revisión puede cambiar un ajuste — y lo conserva solo si gana los backtests de 3, 6 y 12 meses.",

    photos_name: "Estudio de foto a publicación",
    photos_when: "Corriendo · revisa una carpeta compartida cada 5 minutos",
    photos_line: "Deja una foto en una carpeta compartida de Drive y regresa como una publicación con la marca: color corregido, retocada, con texto y diseño, revisada contra la original y en cola como borrador por aprobar.",
    photos_s1: "Dejar en Drive", photos_s1s: "carpeta compartida",
    photos_s2: "Corregir", photos_s2s: "luz + color",
    photos_s3: "Retocar", photos_s3s: "cuando ayuda",
    photos_s4: "Texto y diseño", photos_s4s: "el estilo de la marca",
    photos_s5: "Autorrevisión", photos_s5s: "vs. la original",
    photos_s6: "Encolar", photos_s6s: "borrador por aprobar",
    photos_biz: "Para un negocio que tiene fotos pero no diseñador: el equipo deja fotos en una carpeta y cada una regresa como una publicación con el estilo de la marca. Cada edición se compara con la original en una hoja de revisión antes de entrar a la cola, así que nada sale peor de lo que entró.",
    photos_d1: "El equipo deja fotos en una carpeta compartida de Google Drive. Se revisa cada 5 minutos; no hay nada más que aprender.",
    photos_d2: "Se corrigen luz, color y encuadre para el formato de la publicación.",
    photos_d3: "Cuando ayuda, el fondo se limpia o se reemplaza; una foto que ya está bien se deja como está.",
    photos_d4: "Se agregan texto y diseño con las tipografías y colores de la marca.",
    photos_d5: "Cada edición se pone junto a la original en una hoja de revisión y se juzga antes de seguir.",
    photos_d6: "Las ediciones aprobadas entran a la cola como borradores, con sus textos, para que una persona las publique.",

    ops_name: "Operaciones que se reparan solas",
    ops_when: "Corriendo · todo el tiempo",
    ops_line: "La capa debajo de todo lo anterior: un programador de tareas que recupera las corridas perdidas mientras la máquina estaba apagada, distingue \"no corrió\" de \"falló\", le da a cada falla un arreglo con IA de un clic, y retoma el trabajo de IA interrumpido a media respuesta.",
    ops_f1: "tareas programadas",
    ops_f2: "flujos con horario",
    ops_s1: "Programar", ops_s1s: "relojes + vigilantes",
    ops_s2: "Correr", ops_s2s: "un trabajo pesado a la vez",
    ops_s3: "Vigilar", ops_s3s: "watchdog",
    ops_s4: "Ponerse al día", ops_s4s: "corridas perdidas",
    ops_s5: "Arreglar con IA", ops_s5s: "un clic",
    ops_s6: "Reportar", ops_s6s: "solo lo importante",
    ops_biz: "Las automatizaciones solo valen algo si corren cuando nadie está mirando. Este es el programador y el vigilante debajo de cada sistema de esta página. Una corrida que no pudo pasar — la máquina dormida, sin internet — aparece como \"no corrió\", no como falla, y sale en cuanto puede. Una falla real llega como una tarjeta que dice qué se rompió y dónde, con un botón \"Arreglar con IA\" que le pasa ese error exacto a un ingeniero de IA.",
    ops_trk: "Abrir su tracker",
    ops_d1: "Cada flujo corre con un reloj o un vigilante: construcciones nocturnas, revisiones cada hora, carpetas y bandejas revisadas cada pocos minutos.",
    ops_d2: "Los trabajos pesados — renders de video, corridas de modelos — se turnan la GPU, así que uno nunca deja sin recursos a otro.",
    ops_d3: "Un watchdog mantiene arriba los servicios, y el trabajo de IA interrumpido a media respuesta se retoma donde se quedó.",
    ops_d4: "Las corridas perdidas mientras la máquina estaba dormida o sin conexión se recuperan en cuanto vuelve — se muestran como \"no corrió\", nunca como falla.",
    ops_d5: "Una falla real llega como una tarjeta con qué se rompió, dónde y cómo; \"Arreglar con IA\" le pasa ese error exacto a un ingeniero de IA.",
    ops_d6: "Las notificaciones se guardan para lo importante — una falla, un resultado, algo que necesita a una persona — no para cada corrida terminada.",

    trk_h: "Trackers",
    trk_note: "Tableros en vivo que vigilan las cifras que producen estos sistemas.",
    w_trk_kicker: "Tracker · en vivo",
    trk1_name: "Rendimiento del contenido",
    trk1_line: "Vistas por publicación, día y plataforma, y la mejor hora para publicar — se actualiza cada 2 horas.",
    trk1_biz: "Cada publicación de la sala de noticias se sigue durante dos semanas: vistas, alcance y tiempo de reproducción por publicación, por día y por plataforma, más la mejor hora y día para publicar. Los hallazgos se calculan en código; con menos de tres publicaciones de un lado, un hallazgo se muestra como pista, no como hecho.",
    trk1_chart_h: "Vistas según el día en que salió la publicación",
    trk1_note: "Octubre de 2026. Los días 25 y 26 no salió ninguna publicación. Corte del 29 de octubre.",
    trk1_split_h: "De dónde vienen las vistas",
    trk1_auto: "Abrir la sala de noticias",
    trk2_name: "Caídas del mercado",
    trk2_line: "Acciones que cayeron pero se espera que se recuperen, con las cifras detrás de cada una — cada hora que el mercado está abierto.",
    trk2_biz: "Una lista que se llena sola: acciones que bajaron pero cuyas cifras siguen sanas, cada una con la caída, la tendencia y el momentum detrás. Se actualiza cada hora mientras el mercado de EE. UU. está abierto. Cada cifra se calcula en código; la IA escribe una línea en lenguaje sencillo encima.",
    trk2_auto: "Abrir el sistema de mercado",
    trk3_name: "Salud de los flujos",
    trk3_line: "Cada corrida programada de las últimas 24 horas — terminada, fallida o no corrió — cada falla con su botón para arreglarla.",
    trk3_biz: "Una vista de cada corrida programada de las últimas 24 horas. Lo terminado no hace ruido; una falla trae su botón \"Arreglar con IA\"; una corrida que no pudo empezar — máquina dormida, sin internet — aparece en gris como \"no corrió\", para que un problema real nunca se pierda entre falsas alarmas. Cuando una falla se arregla, la fila vuelve a la normalidad.",
    trk3_auto: "Abrir la capa de operaciones",
    trk4_name: "Ranking de modelos",
    trk4_line: "Cada tipo de modelo de IA comparado dentro de su tipo, con lo que cambiaría un cambio donde se usa.",
    trk4_biz: "Cada tipo de modelo de IA — texto, voz a texto, visión, embeddings, voz, imagen, video, 3D — en su propio ranking, con el modelo en uso marcado, su precio, sus puntajes públicos con enlaces y lo que cambiaría un cambio en cada lugar donde se usa.",
    trk4_auto: "Abrir la inteligencia de modelos",

    rates_h: "Tarifas",
    rates_note: "Para trabajo freelance y por contrato, en USD. Cada precio fijo es mi estimación de horas por la tarifa por hora, para que veas la cuenta. El alcance se acuerda por escrito antes de empezar.",
    rate_hour: "/ hora",
    rate_p: "Consultoría, ingeniería de datos, integración de IA y automatización, y todo lo que no entre en el programa.",
    prod_h: "Programa de adopción de IA",
    prod_desc: "Para una empresa que quiere integrar la IA en su forma de trabajar: su propia plataforma de IA instalada, los primeros flujos construidos con su equipo y todos aprendiendo a construir los suyos. Doce semanas, con dos puntos donde el gasto se detiene si no se está usando.",
    prod_hours: "94 h · 12 semanas",
    prod_extra: "Después $750/mes para hasta 10 personas: plataforma, actualizaciones y 3 horas de trabajo al mes.",
    rates_foot: "Los costos de IA y hosting (suscripciones a modelos, bases de datos) los pagas tú directamente a cada proveedor, sin margen agregado.",

    exp_h: "Experiencia",
    exp_0_when: "oct 2026 — hoy",
    exp_0_h: "Fundador e ingeniero · clippana",
    exp_0: "Diseñé, construí y lancé clippana.com, un marketplace donde los anunciantes fondean campañas de video corto y los creadores cobran por vista verificada: la plataforma sobre Cloudflare Workers, las integraciones con la API oficial de cada red y una interfaz que no corre JavaScript en el navegador.",
    exp_1_when: "oct 2025 — sep 2026",
    exp_1: "Fui responsable de punta a punta de los pipelines de ingesta al warehouse corporativo en Snowflake, del contrato con la fuente a producción. Construí un patrón resiliente de API a Snowflake que se reutiliza en varias integraciones, y convertí tickets vagos de calidad de datos en causas raíz con nombre.",
    exp_3_when: "nov 2023 — abr 2025",
    exp_3_h: "Consultor Sr. de Tecnología · EY, AI &amp; Tech",
    exp_3: "Co-dirigí la migración por fases de SAP a Snowflake de Exxon Mobil; construí herramientas de validación en Python para QA y concilié métricas de emisiones bajo escrutinio regulatorio.",
    exp_4_when: "dic 2021 — nov 2023",
    exp_4_h: "Científico de Datos Sr. · Oracle, TINNO",
    exp_4: "Construí modelos de churn y riesgo de renovación (regresión logística, gradient boosting) para un grupo de trabajo directivo, además de una capa de análisis de sentimiento con NLP sobre tickets de soporte con BERT, NLTK y la API de OpenAI.",

    skills_h: "Habilidades",
    skills_note: "Haz clic en una tecnología para ver dónde la he usado.",
    skills_eng: "Ingeniería",
    skills_media: "Automatización y medios",
    edu_1: "<strong>Posgrado, Data Science &amp; Business Analytics</strong> — University of Texas at Austin, 2021",
    edu_2: "<strong>Ingeniería Industrial</strong> — Universidad Anáhuac Norte, 2020",
    edu_3: "<strong>Idiomas</strong> — español (nativo), inglés (avanzado), francés (avanzado)",

    contact_h: "Hablemos",
    contact_p: "¿Buscas ingeniería de datos o de IA, quieres una de estas automatizaciones corriendo para tu negocio, o que te muestre alguno de los proyectos? Casi todo el código vive en repositorios privados — con gusto te lo enseño en una llamada.",
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
    choices.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
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
