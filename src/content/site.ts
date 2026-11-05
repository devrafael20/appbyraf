export const productUrls = {
  calendario: 'https://calendario.appbyraf.com',
  balancero: 'https://balancero.appbyraf.com',
  komersyo: '',
} as const

export type ProductId = keyof typeof productUrls

export type ProjectFilter = 'all' | 'business' | 'finance' | 'ecommerce'

export type ProjectStatus = 'in-development' | 'improving' | 'exploring'

export const site = {
  title: 'Rafael | Developer & Product Builder',
  description:
    'Explore the projects, skills, and work of Rafael — a developer building practical web applications, business systems, finance tools, and ecommerce experiences.',
  logo: 'DEVRAF',
  availability: 'Available for interesting projects',
  github: 'https://github.com/devrafael20',
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export const hero = {
  kicker: 'DEVELOPER · PRODUCT BUILDER · PROBLEM SOLVER',
  heading: ['Hey, I’m Rafael.', 'I build apps that make work feel less like work.'],
  body: 'I’m a developer who enjoys turning complicated business processes into simple, useful software. From finance apps and ERP systems to ecommerce platforms, I build products that solve real problems.',
  highlights: ['Calendario', 'Balancero', 'Komersyo'],
  primaryCta: { label: 'Explore my work', href: '#work' },
  secondaryCta: { label: 'A little about me', href: '#about' },
  terminal: {
    title: 'rafael@devraf ~',
    commands: [
      {
        prompt: 'whoami',
        lines: ['Rafael — Developer & Product Builder'],
      },
      {
        prompt: 'currently_building',
        lines: ['Calendario', 'Balancero', 'Komersyo'],
      },
      {
        prompt: 'mission',
        lines: ['Turn complex workflows into simple software.'],
      },
    ],
  },
} as const

export const about = {
  heading: 'So, who am I?',
  body: [
    'I’m Rafael — a developer who enjoys figuring out how things work and finding better ways to build them.',
    'My journey started with web development, but over time, I became interested in something bigger than websites.',
    'I wanted to build applications that solve actual business problems.',
    'That led me into accounting software, ERP systems, financial tools, ecommerce, and workflow automation.',
    'Today, I work across frontend development, backend development, database design, and product development.',
    'I enjoy taking an idea from a rough concept to something people can interact with, test, and use.',
    'I’m particularly interested in the space where technology meets everyday business operations.',
    'Because honestly, the best software isn’t always the most complicated.',
    'Sometimes, it’s the one that makes someone’s day a little easier.',
  ],
  factsTitle: 'Things you might not know about me',
  facts: [
    {
      title: 'I enjoy building products more than just building pages.',
      body: 'A page can look finished and still not help anyone. I care more about whether the software holds up once people start using it for real work.',
    },
    {
      title: 'I like understanding the business process before writing the code.',
      body: 'If I don’t know how the work actually happens — who does what, where it breaks, what “done” looks like — the app usually ends up solving the wrong problem.',
    },
    {
      title: 'My projects often start with a real problem that needs fixing.',
      body: 'Calendario, Balancero, and Komersyo each came from a workflow that felt harder than it needed to be. I build from that friction, not from a feature checklist.',
    },
    {
      title: 'I enjoy experimenting with new technologies and AI-assisted development.',
      body: 'When a project needs a new tool, I learn it. AI helps me move faster, but the product still has to make sense to the person using it.',
    },
  ],
} as const

export const work = {
  heading: 'Selected work',
  intro:
    'These are the applications I am building and refining. Each one started with a real workflow that needed a clearer, more usable tool.',
  filters: [
    { id: 'all' as const, label: 'All' },
    { id: 'business' as const, label: 'Business' },
    { id: 'finance' as const, label: 'Finance' },
    { id: 'ecommerce' as const, label: 'Ecommerce' },
  ],
}

export const projects = [
  {
    id: 'calendario' as const,
    name: 'Calendario',
    filter: 'business' as const,
    category: 'Business Applications · ERP · Project Management',
    status: 'in-development' as const,
    statusLabel: 'In development',
    short: 'Making business workflows easier to manage, one module at a time.',
    overview:
      'Calendario is a business application focused on bringing projects, operations, and accounting workflows into one connected experience. The goal is to make complex business processes easier to understand, manage, and work with.',
    problem:
      'Offices often split the same client work across calendars, spreadsheets, invoices, and chat. Visits get booked in one place, billing lives in another, and field staff do not always see the same picture as the desk.',
    role: 'I design and develop Calendario end to end — product direction, interface, backend logic, and the data model that keeps scheduling, clients, and billing connected.',
    workedOn: [
      'Business application development',
      'ERP and accounting workflows',
      'Frontend development',
      'Database-driven functionality',
      'API integration',
      'User interface improvements',
    ],
    technologies: ['Vue.js', 'JavaScript', 'PHP', 'MySQL', 'REST APIs'],
    challenges:
      'The hard part is not adding another module. It is connecting schedule, clients, sales, and catalog so the app still feels like one workspace — for office staff and for people in the field.',
    lessons:
      'Business software only gets simpler when the workflow is understood first. If the process is fuzzy, the interface becomes a pile of screens.',
    screenshot: '/screenshots/calendario.png',
    screenshotAlt: 'Calendario client records screen with schedule, sales, and catalog navigation.',
    preview: 'desktop' as const,
    liveUrl: productUrls.calendario,
    repoUrl: '',
  },
  {
    id: 'balancero' as const,
    name: 'Balancero',
    filter: 'finance' as const,
    category: 'Personal Finance · Budgeting · Expense Tracking',
    status: 'improving' as const,
    statusLabel: 'Improving',
    short: 'Helping people understand where their money goes.',
    overview:
      'Balancero is a personal finance application focused on making financial tracking more organized, approachable, and easier to understand. It explores how people can manage expenses, see their finances clearly, and build better habits through a calmer digital experience.',
    problem:
      'Money gets scattered across cash, cards, bills, and invoices. People know they spent something — they just cannot see the full picture without opening five different places.',
    role: 'I am building Balancero as a practical finance product: the interface, the ledger logic, and the workflows around accounts, bills, and planning.',
    workedOn: [
      'Personal finance workflows',
      'Expense and bill tracking',
      'Frontend development',
      'Data visualization',
      'Local-first bookkeeping structure',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Data visualization', 'Finance workflows'],
    challenges:
      'Finance apps fail when they feel like accounting class. The challenge is showing real numbers clearly without hiding the details people actually need.',
    lessons:
      'Visibility comes before advice. If someone can see where the money went, better decisions have somewhere to start.',
    screenshot: '/screenshots/balancero.png',
    screenshotAlt: 'Balancero home screen showing total balance, bills, and payments.',
    preview: 'phone' as const,
    liveUrl: productUrls.balancero,
    repoUrl: '',
  },
  {
    id: 'komersyo' as const,
    name: 'Komersyo',
    filter: 'ecommerce' as const,
    category: 'Ecommerce · Online Store · Commerce Tools',
    status: 'exploring' as const,
    statusLabel: 'Exploring',
    short: 'Building a better way to sell online.',
    overview:
      'Komersyo is an ecommerce application focused on product management, online selling, and a more connected shopping experience. The project explores the functionality and workflows required to build a practical ecommerce platform.',
    problem:
      'Selling online is more than a product grid. Inventory, orders, and customer flow have to work together — otherwise the store looks open and still feels unfinished.',
    role: 'I am exploring the product shape of Komersyo: what a practical store actually needs, and how those pieces should connect before the interface gets overbuilt.',
    workedOn: [
      'Ecommerce workflow mapping',
      'Product management concepts',
      'Frontend architecture',
      'Database-driven store structure',
    ],
    technologies: ['Vue.js', 'JavaScript', 'PHP', 'MySQL'],
    challenges:
      'It is tempting to copy every feature a large marketplace has. The real work is deciding which selling workflows matter first, and which ones can wait.',
    lessons:
      'Ecommerce is an operations problem as much as a storefront problem. The catalog is only useful if orders, stock, and checkout can keep up.',
    screenshot: '',
    screenshotAlt: '',
    preview: 'abstract' as const,
    liveUrl: productUrls.komersyo,
    repoUrl: '',
  },
] as const

export type Project = (typeof projects)[number]

export const skills = {
  heading: 'The tools I work with',
  intro: [
    'I don’t believe in collecting technologies just to make a longer skills list.',
    'I focus on understanding the tools I need to build something useful.',
    'My work usually involves frontend development, backend logic, database management, and connecting everything into a working application.',
    'I’m comfortable working across different layers of a project, from designing the interface to handling the data behind it.',
    'And when a project requires something new, I’m always willing to learn and experiment.',
  ],
  categories: [
    {
      id: 'frontend',
      label: 'Frontend',
      items: ['Vue.js', 'JavaScript', 'HTML', 'CSS', 'PrimeVue', 'PrimeFlex', 'Responsive UI'],
    },
    {
      id: 'backend',
      label: 'Backend',
      items: ['PHP', 'REST APIs', 'PDO', 'Authentication', 'Business logic', 'Integrations'],
    },
    {
      id: 'database',
      label: 'Database',
      items: ['MySQL', 'SQL', 'Database design', 'Data modeling', 'Query optimization'],
    },
    {
      id: 'tools',
      label: 'Tools & workflow',
      items: ['Git', 'GitHub', 'Vite', 'Axios', 'WordPress', 'WooCommerce', 'AI-assisted development'],
    },
  ],
} as const

export const services = {
  heading: 'What I can help build',
  items: [
    {
      id: 'web',
      title: 'Web Development',
      body: 'Responsive websites, web applications, and custom interfaces.',
    },
    {
      id: 'business',
      title: 'Business Applications',
      body: 'ERP systems, accounting workflows, and operational tools.',
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      body: 'Database-driven systems, integrations, and backend functionality.',
    },
    {
      id: 'automation',
      title: 'Workflow Automation',
      body: 'Simplifying repetitive processes and improving business operations.',
    },
  ],
} as const

export const process = {
  heading: 'I don’t just start coding. Here’s how I approach a project.',
  steps: [
    {
      number: '01',
      title: 'Understand the problem',
      body: 'Before writing code, I want to understand what needs to be solved, who will use it, and how the process works.',
    },
    {
      number: '02',
      title: 'Plan the experience',
      body: 'I organize the requirements, think through the workflow, and design how the application should behave.',
    },
    {
      number: '03',
      title: 'Build the solution',
      body: 'I develop the interface, backend functionality, database structure, and integrations needed to make it work.',
    },
    {
      number: '04',
      title: 'Test and improve',
      body: 'I review the actual behavior, identify problems, and refine the experience until it makes sense.',
    },
  ],
} as const

export const workbench = {
  heading: 'What’s on my workbench?',
  intro:
    'I’m always working on something. Right now, I’m focused on building and improving applications that solve practical problems.',
  items: [
    {
      id: 'calendario' as const,
      name: 'Calendario',
      statusLabel: 'In development',
      summary: 'Exploring business workflows, ERP functionality, and accounting features.',
      workingOn: 'Connecting scheduling, client records, and billing so office and field work share the same source of truth.',
      exploring: 'How operational modules can stay useful without turning the app into a maze of disconnected screens.',
    },
    {
      id: 'balancero' as const,
      name: 'Balancero',
      statusLabel: 'Improving',
      summary: 'Improving the experience of tracking personal finances.',
      workingOn: 'Making balances, bills, and everyday cash flow easier to read at a glance.',
      exploring: 'How planning tools can sit beside the ledger without making the product feel heavier.',
    },
    {
      id: 'komersyo' as const,
      name: 'Komersyo',
      statusLabel: 'Exploring',
      summary: 'Exploring ecommerce functionality and online selling workflows.',
      workingOn: 'Mapping the store workflows that have to exist before a catalog is useful: products, orders, and checkout.',
      exploring: 'What a practical selling platform needs first, and what can wait until the core path is solid.',
    },
  ],
} as const

export const contact = {
  heading: 'Have something in mind?',
  body: [
    'A project, an idea, a problem that needs solving — I’m always interested in hearing about it.',
    'Whether you’re looking for someone to build a web application, improve an existing system, or explore a new idea, let’s talk.',
    'You don’t need a complete plan to reach out.',
    'Sometimes the best projects start with a simple conversation.',
    'Let’s build something useful.',
  ],
  prompt: 'What are you thinking of building?',
  options: [
    { id: 'web', label: 'Web application' },
    { id: 'business', label: 'Business system' },
    { id: 'ecommerce', label: 'Ecommerce platform' },
    { id: 'other', label: 'Something else' },
  ],
  ideaLabel: 'Tell me a little about your idea...',
  copyLabel: 'Copy inquiry',
  copiedLabel: 'Inquiry copied',
} as const

export const footer = {
  note: 'Made with curiosity, coffee, and a lot of debugging.',
  legal: '© 2026 Rafael',
  stack: 'Built with React · TypeScript · CSS',
} as const
