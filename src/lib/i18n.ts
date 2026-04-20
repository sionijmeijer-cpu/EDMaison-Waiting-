export type Lang = "en" | "pt" | "fr" | "it";

export const translations = {
  en: {
    nav: { services: "Services", story: "Our Story", waitlist: "Join Waitlist" },
    hero: {
      eyebrow: "Opening Soon — By Invitation",
      title: "The Art of the Well-Kept Home",
      subtitle:
        "ED Maison is a private housekeeping service built around one idea, that your home should feel like a sanctuary, not a to-do list. Cleaning, laundry, ironing, moving. Done properly, by people who care.",
      cta: "Reserve Your Place",
      secondary: "Discover the Services",
      note: "Limited memberships at launch. Priority granted to early subscribers.",
    },
    stats: [
      { k: "Braga", v: "Launching in Braga" },
      { k: "72h", v: "Response Window" },
      { k: "100%", v: "Every Home Inspected First" },
      { k: "∞", v: "Attention to Detail" },
    ],
    services: {
      eyebrow: "The Maison Services",
      title: "Care, in every corner of the home",
      subtitle:
        "We don't rush through a home. We learn it. Each service is carried out by trained housekeepers who follow the Maison standard, which simply means we do it the way you would, if you had the time.",
      items: [
        {
          name: "Residential Housekeeping",
          desc: "Daily, weekly, and monthly care for private residences. Discreet, consistent, immaculate.",
        },
        {
          name: "Fine Laundry & Linens",
          desc: "Hand-finished laundry with attention to fibers, fragrances, and fold. Returned as it was meant to be.",
        },
        {
          name: "Ironing & Pressing",
          desc: "Shirts, bed sheets, table linens. We take our time so you don't have to.",
        },
        {
          name: "White-Glove Moving",
          desc: "Packing, transport, and placement handled by our Maison team. Nothing out of place.",
        },
        {
          name: "Deep & Seasonal Cleaning",
          desc: "A full reset for your home. Twice a year or whenever it feels like time.",
        },
        {
          name: "Household Essentials",
          desc: "Restocking, pantry keeping, and the quiet tasks that keep a home running gracefully.",
        },
      ],
    },
    story: {
      eyebrow: "Our Philosophy",
      title: "Housekeepers, in the old tradition.",
      body: [
        "E&D Maison started from something simple. A home that is looked after with real care gives something back. It's calmer. It feels lighter. You actually want to be there.",
        "We take the time to learn how you live. How you like your towels folded. What your laundry should smell like. The things that matter to you that nobody else would think to ask about.",
        "Then we show up, every time, and keep it exactly that way.",
        "This is not a service you book when things get bad. It is someone who knows your home and takes care of it so you never have to think about it again.",
        "That is what we are building.",
      ],
      signature: "— The ED Maison",
    },
    waitlist: {
      eyebrow: "The Waiting List",
      title: "Be among the first in Braga",
      subtitle:
        "We are preparing to welcome our founding members. Leave your details and we will be in touch the moment doors open in your city.",
      email: "Email address",
      phone: "Phone number",
      name: "Your name",
      city: "City",
      cityPlaceholder: "Which Braga area?",
      submit: "Reserve My Place",
      submitting: "Reserving…",
      success: "You are on the list.",
      successBody:
        "Thank you. A member of the Maison will be in touch as launch approaches. Your discretion is ours.",
      another: "Add another email",
      privacy: "Your details are held in confidence. No spam, ever.",
      cityHint: "please pick the closest area",
    },
    footer: {
      tagline: "A private housekeeping atelier.",
      copyright: "© ED Maison. Launching in Braga",
      contact: "For press & partnerships",
    },
  },
  fr: {
    nav: { services: "Services", story: "Notre Histoire", waitlist: "Liste d'Attente" },
    hero: {
      eyebrow: "Ouverture Prochaine — Sur Invitation",
      title: "L'Art du Foyer Bien Entretenu",
      subtitle:
        "ED Maison est un service privé de gouvernantes fondé sur une idée simple : votre maison doit être un sanctuaire, pas une liste de tâches. Ménage, linge, repassage, déménagement. Fait correctement, par des gens qui en ont cure.",
      cta: "Réservez Votre Place",
      secondary: "Découvrir les Services",
      note: "Places limitées au lancement. Priorité donnée aux premiers inscrits.",
    },
    stats: [
      { k: "Braga", v: "Lancement à Braga" },
      { k: "72h", v: "Délai de Réponse" },
      { k: "100%", v: "Chaque Maison Inspectée D'abord" },
      { k: "∞", v: "Souci du Détail" },
    ],
    services: {
      eyebrow: "Les Services de la Maison",
      title: "Le soin, dans chaque recoin",
      subtitle:
        "Nous ne survolons pas une maison. Nous l'apprenons. Chaque service est exécuté par des gouvernantes formées selon le standard Maison, ce qui signifie simplement : nous le faisons comme vous le feriez, si vous aviez le temps.",
      items: [
        {
          name: "Gouvernance Résidentielle",
          desc: "Entretien quotidien, hebdomadaire ou mensuel de résidences privées. Discret, constant, impeccable.",
        },
        {
          name: "Linge & Blanchisserie Fine",
          desc: "Blanchisserie finie à la main, avec attention aux fibres, aux parfums et au pliage.",
        },
        {
          name: "Repassage",
          desc: "Chemises, draps, linge de table. Nous prenons notre temps pour que vous n'ayez pas à le faire.",
        },
        {
          name: "Déménagement Ganté-Blanc",
          desc: "Emballage, transport et installation par notre équipe Maison. Rien ne dépasse.",
        },
        {
          name: "Nettoyage en Profondeur",
          desc: "Une remise à neuf complète de votre maison. Deux fois par an ou quand vous le ressentez.",
        },
        {
          name: "Essentiels de la Maison",
          desc: "Réassort, gestion du garde-manger et les tâches silencieuses qui font vivre une maison.",
        },
      ],
    },
    story: {
      eyebrow: "Notre Philosophie",
      title: "Gouvernantes, à l'ancienne.",
      body: [
        "ED Maison a commencé par quelque chose de simple. Une maison soignée avec attention donne quelque chose en retour. C'est plus calme. Ça semble plus léger. Vous avez vraiment envie d'y être.",
        "Nous prenons le temps d'apprendre comment vous vivez. Comment vous aimez vos serviettes pliées. Ce que votre linge doit sentir. Les détails qui vous importent et que personne d'autre ne songerait à vous demander.",
        "Puis nous arrivons, à chaque fois, et le gardons exactement comme ça.",
        "Ce n'est pas un service que vous réservez quand tout va mal. C'est quelqu'un qui connaît votre maison et en prend soin pour que vous n'ayez jamais à y penser.",
        "C'est ce que nous construisons.",
      ],
      signature: "— The ED Maison",
    },
    waitlist: {
      eyebrow: "La Liste d'Attente",
      title: "Soyez parmi les premiers à Braga",
      subtitle:
        "Nous nous préparons à accueillir nos membres fondateurs. Laissez vos coordonnées et nous vous contacterons dès l'ouverture dans votre ville.",
      email: "Adresse e-mail",
      phone: "Numéro de téléphone",
      name: "Votre nom",
      city: "Ville",
      cityPlaceholder: "Quel quartier de Braga ?",
      submit: "Réserver Ma Place",
      submitting: "Réservation…",
      success: "Vous êtes sur la liste.",
      successBody:
        "Merci. Un membre de la Maison vous contactera à l'approche du lancement. Votre discrétion est la nôtre.",
      another: "Ajouter un autre e-mail",
      privacy: "Vos coordonnées sont conservées en toute confidentialité. Jamais de spam.",
      cityHint: "veuillez sélectionner la zone la plus proche",
    },
    footer: {
      tagline: "Un atelier privé de gouvernantes.",
      copyright: "© ED Maison. Lancement à Braga",
      contact: "Presse & partenariats",
    },
  },
  it: {
    nav: { services: "Servizi", story: "La Nostra Storia", waitlist: "Lista d'Attesa" },
    hero: {
      eyebrow: "Apertura Prossima — Su Invito",
      title: "L'Arte della Casa Ben Curata",
      subtitle:
        "ED Maison è un servizio privato di governanti fondato su un'idea: la tua casa dovrebbe essere un santuario, non una lista di cose da fare. Pulizie, bucato, stiratura, traslochi. Fatto bene, da persone che se ne preoccupano.",
      cta: "Prenota il Tuo Posto",
      secondary: "Scopri i Servizi",
      note: "Posti limitati al lancio. Priorità ai primi iscritti.",
    },
    stats: [
      { k: "Braga", v: "Lancio a Braga" },
      { k: "72h", v: "Tempo di Risposta" },
      { k: "100%", v: "Ogni Casa Ispezionata Per Prima" },
      { k: "∞", v: "Cura del Dettaglio" },
    ],
    services: {
      eyebrow: "I Servizi della Maison",
      title: "Cura, in ogni angolo della casa",
      subtitle:
        "Non corriamo attraverso una casa. La impariamo. Ogni servizio è eseguito da governanti formate secondo lo standard Maison, il che significa semplicemente: lo facciamo come lo fareste voi, se aveste il tempo.",
      items: [
        {
          name: "Governo della Casa",
          desc: "Cura quotidiana, settimanale e mensile di residenze private. Discreto, costante, impeccabile.",
        },
        {
          name: "Bucato e Biancheria Fine",
          desc: "Bucato rifinito a mano, con attenzione alle fibre, ai profumi e alla piegatura.",
        },
        {
          name: "Stiratura",
          desc: "Camicie, lenzuola, tovaglie. Prendiamo il nostro tempo così tu non devi.",
        },
        {
          name: "Trasloco Guanto Bianco",
          desc: "Imballaggio, trasporto e collocazione a cura del nostro team Maison. Nulla fuori posto.",
        },
        {
          name: "Pulizia Profonda",
          desc: "Un reset completo della tua casa. Due volte l'anno o quando senti che è ora.",
        },
        {
          name: "Essenziali della Casa",
          desc: "Rifornimenti, dispensa e le attività silenziose che fanno funzionare una casa.",
        },
      ],
    },
    story: {
      eyebrow: "La Nostra Filosofia",
      title: "Governanti, alla vecchia maniera.",
      body: [
        "ED Maison è nata da qualcosa di semplice. Una casa curata con attenzione dà qualcosa in cambio. È più calma. Sembra più leggera. Hai davvero voglia di esserci.",
        "Prendiamo il tempo di imparare come vivi. Come ami le tue asciugamani piegate. Come dovrebbe profumare il tuo bucato. Le cose che contano per te che nessun altro si sognerebbe di chiederti.",
        "Poi arriviamo, ogni volta, e la manteniamo esattamente così.",
        "Non è un servizio che prenoti quando tutto va male. È qualcuno che conosce la tua casa e se ne prende cura in modo che tu non deva mai pensarci.",
        "Questo è quello che stiamo costruendo.",
      ],
      signature: "— The ED Maison",
    },
    waitlist: {
      eyebrow: "La Lista d'Attesa",
      title: "Siate tra i primi a Braga",
      subtitle:
        "Ci prepariamo ad accogliere i nostri membri fondatori. Lasciate i vostri contatti e vi scriveremo all'apertura nella vostra città.",
      email: "Indirizzo e-mail",
      phone: "Numero di telefono",
      name: "Il tuo nome",
      city: "Città",
      cityPlaceholder: "Quale zona di Braga?",
      submit: "Prenota il Mio Posto",
      submitting: "Prenotazione…",
      success: "Sei in lista.",
      successBody:
        "Grazie. Un membro della Maison vi contatterà all'avvicinarsi del lancio. La vostra discrezione è la nostra.",
      another: "Aggiungi un'altra e-mail",
      privacy: "I tuoi dati sono custoditi con discrezione. Nessuno spam, mai.",
      cityHint: "si prega di scegliere l'area più vicina",
    },
    footer: {
      tagline: "Un atelier privato di governanti.",
      copyright: "© ED Maison. Apertura a Braga",
      contact: "Stampa & partnership",
    },
  },
  pt: {
    nav: { services: "Serviços", story: "Nossa História", waitlist: "Lista de Espera" },
    hero: {
      eyebrow: "Abertura em Breve — Por Convite",
      title: "A Arte da Casa Bem Cuidada",
      subtitle:
        "A ED Maison é um serviço privado de governantas construído em torno de uma ideia: sua casa deve ser um santuário, não uma lista de tarefas. Limpeza, lavanderia, passadoria, mudanças. Feito corretamente, por pessoas que se importam.",
      cta: "Reserve Seu Lugar",
      secondary: "Conhecer os Serviços",
      note: "Vagas limitadas no lançamento. Prioridade para os primeiros inscritos.",
    },
    stats: [
      { k: "Braga", v: "Lançamento em Braga" },
      { k: "72h", v: "Tempo de Resposta" },
      { k: "100%", v: "Cada Casa Inspecionada Primeiro" },
      { k: "∞", v: "Atenção aos Detalhes" },
    ],
    services: {
      eyebrow: "Os Serviços da Maison",
      title: "Cuidado, em cada canto da casa",
      subtitle:
        "Não passamos rápido por uma casa. Nós a aprendemos. Cada serviço é executado por governantas treinadas segundo o padrão Maison, o que significa simplesmente: fazemos como você faria, se tivesse tempo.",
      items: [
        {
          name: "Governança Residencial",
          desc: "Cuidado diário, semanal ou mensal de residências privadas. Discreto, consistente, impecável.",
        },
        {
          name: "Lavanderia Fina",
          desc: "Lavanderia finalizada à mão, com atenção às fibras, aos perfumes e à dobragem.",
        },
        {
          name: "Passadoria",
          desc: "Camisas, lençóis, toalhas de mesa. Tomamos nosso tempo para que você não precise.",
        },
        {
          name: "Mudança Luva-Branca",
          desc: "Embalagem, transporte e colocação pela nossa equipe Maison. Nada fora do lugar.",
        },
        {
          name: "Limpeza Profunda",
          desc: "Um reinício completo da sua casa. Duas vezes por ano ou sempre que achar que é hora.",
        },
        {
          name: "Essenciais da Casa",
          desc: "Reposição, despensa e as tarefas silenciosas que mantêm a casa em harmonia.",
        },
      ],
    },
    story: {
      eyebrow: "Nossa Filosofia",
      title: "Governantas, à moda antiga.",
      body: [
        "A ED Maison começou com algo simples. Uma casa cuidada com atenção real devolve algo. É mais calma. Parece mais leve. Você realmente quer estar lá.",
        "Tomamos o tempo de aprender como você vive. Como gosta que suas toalhas sejam dobradas. Como sua roupa deve cheirar. As coisas que importam para você e que ninguém mais pensaria em perguntar.",
        "Depois aparecemos, sempre, e mantemos exatamente assim.",
        "Não é um serviço que você contrata quando as coisas ficam ruins. É alguém que conhece sua casa e cuida dela para que você nunca precise pensar nisso novamente.",
        "Isso é o que estamos construindo.",
      ],
      signature: "— The ED Maison",
    },
    waitlist: {
      eyebrow: "A Lista de Espera",
      title: "Esteja entre os primeiros em Braga",
      subtitle:
        "Estamos a preparar a chegada dos nossos membros fundadores. Deixe seus dados e entraremos em contacto assim que abrirmos na sua cidade.",
      email: "Endereço de e-mail",
      phone: "Número de telefone",
      name: "Seu nome",
      city: "Cidade",
      cityPlaceholder: "Qual é o seu bairro em Braga?",
      submit: "Reservar Meu Lugar",
      submitting: "Reservando…",
      success: "Você está na lista.",
      successBody:
        "Obrigado. Um membro da Maison entrará em contacto conforme o lançamento se aproxima. Sua discrição é a nossa.",
      another: "Adicionar outro e-mail",
      privacy: "Seus dados são mantidos em sigilo. Sem spam — nunca.",
      cityHint: "por favor, escolha a área mais próxima",
    },
    footer: {
      tagline: "Um ateliê privado de governantas.",
      copyright: "© ED Maison. Lançamento em Braga",
      contact: "Imprensa & parcerias",
    },
  },
} as const;

export const languages: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "EN" },
  { code: "pt", label: "Português", flag: "PT" },
  { code: "fr", label: "Français", flag: "FR" },
  { code: "it", label: "Italiano", flag: "IT" },
];
