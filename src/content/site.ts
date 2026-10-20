export const productUrls = {
  calendario: '',
  balancero: '',
  komersyo: '',
} as const

export type ProductId = keyof typeof productUrls

export const site = {
  title: 'Rafael — Digital Products',
  description:
    'I build web applications that turn everyday complexity into clearer, more manageable experiences — from coordinating projects and understanding personal finances to bringing businesses online.',
  logo: {
    name: 'RAFAEL',
    mark: 'DIGITAL PRODUCTS',
  },
  nav: [
    { label: 'WORK', href: '#work' },
    { label: 'APPROACH', href: '#approach' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ],
  navCta: {
    label: "LET'S TALK",
    href: '#contact',
  },
  footerNav: [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ],
} as const

export const hero = {
  eyebrow: 'INDEPENDENT SOFTWARE BUILDER / PRODUCT THINKING × ENGINEERING',
  headline: 'SOFTWARE FOR THE PARTS OF LIFE THAT NEED ORDER.',
  body: [
    'I build web applications that turn everyday complexity into clearer, more manageable experiences — from coordinating projects and understanding personal finances to bringing businesses online.',
    'Three products. Three different challenges. One guiding principle: make software genuinely useful.',
  ],
  primaryCta: {
    label: 'EXPLORE MY WORK',
    href: '#work',
    arrow: 'se' as const,
  },
  secondaryCta: {
    label: 'HAVE A PROJECT IN MIND?',
    href: '#contact',
    arrow: 'ne' as const,
  },
  sideLabels: [
    { number: '03', label: 'DIGITAL PRODUCTS' },
    { number: '03', label: 'DISTINCT PROBLEM SPACES' },
    { number: '01', label: 'BUILDING PHILOSOPHY' },
  ],
} as const

export const work = {
  label: '01 / SELECTED WORK',
  headline: 'DIFFERENT PROBLEMS. PURPOSEFUL SOLUTIONS.',
  body: [
    'I explore how thoughtful software can make complicated workflows easier to understand and everyday tasks easier to manage.',
    'These are three products built around different parts of modern life.',
  ],
} as const

export const projects = [
  {
    id: 'calendario' as const,
    number: '001',
    name: 'CALENDARIO',
    category: 'SCHEDULING / PROJECT MANAGEMENT',
    headline: 'MAKE ROOM FOR THE WORK THAT MATTERS.',
    lead: 'Projects move quickly. Priorities change. Plans need to adapt.',
    body: 'Calendario is a scheduling and project management web application built to bring planning and project coordination into a more organized digital workspace. Its purpose is simple: give users a clearer way to structure their work and keep moving forward.',
    focus: 'Planning · Scheduling · Project Management',
    statement: 'Turn scattered plans into a clearer path forward.',
    cta: 'EXPLORE CALENDARIO',
    tone: 'blue' as const,
    flip: false,
  },
  {
    id: 'balancero' as const,
    number: '002',
    name: 'BALANCERO',
    category: 'PERSONAL FINANCE / FINANCIAL ORGANIZATION',
    headline: 'YOUR MONEY, WITH A CLEARER PICTURE.',
    lead: "Managing personal finances starts with understanding what's happening with your money.",
    body: 'Balancero is a personal finance web application designed to make financial tracking more approachable. It brings the focus back to financial awareness: understanding your money, organizing the numbers, and making more informed everyday decisions.',
    focus: 'Personal Finance · Money Management · Financial Awareness',
    statement: 'Because better decisions start with better visibility.',
    cta: 'EXPLORE BALANCERO',
    tone: 'green' as const,
    flip: true,
  },
  {
    id: 'komersyo' as const,
    number: '003',
    name: 'KOMERSYO',
    category: 'E-COMMERCE / ONLINE BUSINESS',
    headline: 'TAKE YOUR BUSINESS BEYOND THE COUNTER.',
    lead: "A business shouldn't be limited by where its customers happen to be.",
    body: 'Komersyo is an e-commerce web application built around the opportunities of online selling. It aims to give businesses a digital channel for presenting their products and serving customers in an increasingly connected marketplace.',
    focus: 'E-commerce · Online Selling · Digital Commerce',
    statement: 'Build a digital storefront. Open a new path to customers.',
    cta: 'EXPLORE KOMERSYO',
    tone: 'amber' as const,
    flip: false,
  },
] as const

export const thread = {
  label: '02 / THE BIGGER PICTURE',
  headline: 'THREE PRODUCTS. ONE WAY OF THINKING.',
  body: [
    'Calendario organizes work. Balancero brings clarity to personal finances. Komersyo opens the door to online commerce.',
    'Their purposes are different, but the thinking behind them is connected: identify a real need, understand the workflow, and build a digital tool around what people are trying to accomplish.',
    'I believe good software should do more than offer features. It should make the next step easier to see.',
  ],
  principles: [
    {
      number: '01',
      title: 'CLARITY',
      body: 'Make information easier to understand and actions easier to navigate.',
    },
    {
      number: '02',
      title: 'PURPOSE',
      body: "Build around a real problem, not functionality for functionality's sake.",
    },
    {
      number: '03',
      title: 'USABILITY',
      body: 'Create experiences that help people accomplish their goals without unnecessary friction.',
    },
  ],
} as const

export const approach = {
  label: '03 / HOW I BUILD',
  headline: 'FROM A PROBLEM TO A WORKING PRODUCT.',
  intro: 'Good software starts before the first line of code. It starts with understanding what needs to work better.',
  steps: [
    {
      number: '01',
      title: 'UNDERSTAND',
      lead: 'Get to the root of the problem.',
      body: 'Identify the user, the workflow, the constraints, and what a successful solution needs to accomplish.',
    },
    {
      number: '02',
      title: 'STRUCTURE',
      lead: 'Give the solution a clear foundation.',
      body: 'Organize information, define the user journey, and establish how the pieces of the application should work together.',
    },
    {
      number: '03',
      title: 'BUILD',
      lead: 'Turn the plan into a usable application.',
      body: 'Translate the intended experience into a functional, responsive product with attention to maintainability and practical use.',
    },
    {
      number: '04',
      title: 'REFINE',
      lead: 'Make the experience more deliberate.',
      body: 'Review the details, address rough edges, and improve the product as new requirements and feedback emerge.',
    },
  ],
  closing: 'BUILD WITH PURPOSE. IMPROVE WITH INTENTION.',
} as const

export const about = {
  label: '04 / THE BUILDER',
  headline: 'I LIKE SOLVING PROBLEMS THAT SOFTWARE CAN MAKE SIMPLER.',
  body: [
    "I'm a software builder interested in the space between a real-world problem and a practical digital solution.",
    'My projects span scheduling and project management, personal finance, and e-commerce. Working across these areas lets me explore different challenges while staying focused on the same goal: building applications that are useful, understandable, and designed around real needs.',
    'I enjoy thinking beyond individual screens or isolated features. I want to understand how a product fits together, how people move through it, and how technology can make the experience better.',
    'For me, building software means combining clear thinking with practical execution — taking an idea, giving it structure, and turning it into something people can use.',
  ],
  principle: "DON'T BUILD MORE SOFTWARE. BUILD MORE USEFUL SOFTWARE.",
} as const

export const next = {
  label: "05 / WHAT'S NEXT",
  headline: "THERE'S ALWAYS A BETTER WAY TO DO THE WORK.",
  body: [
    "I'm interested in creating digital products that help individuals and businesses operate with greater clarity and less friction.",
    'That includes business applications, productivity tools, financial management systems, and e-commerce experiences — especially where better workflows and thoughtful engineering can make a meaningful difference.',
    "The objective isn't complexity for its own sake. It's creating systems that are useful today and capable of growing with tomorrow's needs.",
  ],
  interests: [
    'Business and productivity applications',
    'Workflow automation and management',
    'Financial tools and digital commerce',
    'Practical software solutions for everyday operations',
  ],
} as const

export const contact = {
  label: '06 / START A CONVERSATION',
  headline: 'HAVE A PROBLEM WORTH SOLVING?',
  body: [
    "Maybe it's a workflow that takes too many steps, an idea that deserves a working product, or a business process that could be handled better with software.",
    "Let's turn the challenge into something tangible.",
  ],
  primaryCta: "LET'S BUILD SOMETHING USEFUL",
  secondaryCta: 'GET IN TOUCH',
  supporting:
    'Open to discussing software projects, product ideas, and practical digital solutions.',
} as const

export const footer = {
  tagline: 'Building practical software for real-world problems.',
  legal: '© 2026 RAFAEL. DESIGNED WITH PURPOSE. BUILT WITH INTENTION.',
} as const
