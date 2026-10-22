import type { Bi } from "../i18n";

export const profile = {
  name: "Vinícius Nunes",
  location: "Recife, Brazil",
  email: "viniciusnds.freela@gmail.com",
  github: { label: "github.com/buttowsk", href: "https://github.com/buttowsk" },
  linkedin: { label: "linkedin.com/in/vinicius00nunes", href: "https://www.linkedin.com/in/vinicius00nunes" },
  remote: { en: "remote", pt: "remoto" } as Bi,
  role: {
    en: "Full stack developer. I build AI-assisted automations and web apps that remove manual work.",
    pt: "Desenvolvedor full stack. Construo automações com IA e aplicações web que eliminam trabalho manual.",
  } as Bi,
  intro: {
    en: "Three years shipping production software on AWS, React and Node.js, now taking on freelance projects for small businesses that lose time or leads to slow replies and repetitive admin.",
    pt: "Três anos entregando software em produção com AWS, React e Node.js. Agora atendo projetos freelance para pequenas empresas que perdem tempo ou clientes com respostas lentas e trabalho administrativo repetitivo.",
  } as Bi,
};

export const offers: { title: Bi; text: Bi }[] = [
  {
    title: { en: "Lead intake and instant reply", pt: "Captação de leads e resposta imediata" },
    text: {
      en: "New inquiries from a form, email or messages get an immediate reply and a row in your spreadsheet or CRM, with follow-up reminders.",
      pt: "Novos contatos por formulário, email ou mensagem recebem resposta imediata e entram na sua planilha ou CRM, com lembretes de follow-up.",
    },
  },
  {
    title: { en: "Email triage and reports", pt: "Triagem de email e relatórios" },
    text: {
      en: "Claude sorts and summarizes incoming email and turns data you already have into a weekly report.",
      pt: "O Claude organiza e resume os emails recebidos e transforma dados que você já tem em um relatório semanal.",
    },
  },
  {
    title: { en: "Workflow automation and web apps", pt: "Automação de processos e apps web" },
    text: {
      en: "Python and AWS pipelines, scheduled jobs, and custom web apps when a spreadsheet stops being enough.",
      pt: "Pipelines em Python e AWS, tarefas agendadas e aplicações web sob medida quando a planilha não basta mais.",
    },
  },
];

export const price: Bi = {
  en: "First automation from R$1,500 (USD 300), fixed price agreed up front, built in about a week. Optional monthly upkeep from R$250.",
  pt: "Primeira automação a partir de R$1.500 (USD 300), preço fechado antes de começar, pronta em cerca de uma semana. Manutenção mensal opcional a partir de R$250.",
};

export type Project = {
  name: string;
  meta: Bi;
  summary: Bi;
  points: Bi[];
  tags: string[];
  note: Bi;
};

const privateWalkthrough: Bi = {
  en: "Private repository. Walkthrough on request.",
  pt: "Repositório privado. Demonstração sob demanda.",
};

export const projects: Project[] = [
  {
    name: "Finance Tracker",
    meta: { en: "2026 · 270+ commits", pt: "2026 · 270+ commits" },
    summary: {
      en: "A personal finance app for Brazil, on the web and as an Android app. It captures purchases automatically from bank app notifications, so expenses log themselves.",
      pt: "Um app de finanças pessoais para o Brasil, na web e em Android. Captura compras automaticamente a partir das notificações dos apps de banco, então os gastos se registram sozinhos.",
    },
    points: [
      { en: "Cards, installments, subscriptions, forecast and reports", pt: "Cartões, parcelamentos, assinaturas, previsão e relatórios" },
      { en: "Per-bank parsers for notification text", pt: "Parsers por banco para o texto das notificações" },
      { en: "Feature-based structure with tests per feature", pt: "Estrutura por funcionalidade, com testes por funcionalidade" },
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Capacitor", "Vercel"],
    note: privateWalkthrough,
  },
  {
    name: "Video Automation",
    meta: { en: "2026 · Python", pt: "2026 · Python" },
    summary: {
      en: "A hands-off pipeline that writes a script with AI, records a voiceover, adds subtitles, renders the video and uploads it on a daily schedule. Already-used topics are tracked so it never repeats.",
      pt: "Um pipeline sem intervenção que escreve o roteiro com IA, gera a narração, adiciona legendas, renderiza o vídeo e publica em horário agendado. Controla os temas já usados para nunca repetir.",
    },
    points: [
      { en: "Script generation with Claude, parsed from structured JSON", pt: "Roteiros com Claude, lidos a partir de JSON estruturado" },
      { en: "Speech-to-text subtitles, text-to-speech voiceover", pt: "Legendas por reconhecimento de fala, narração por síntese de voz" },
      { en: "Upload gate, SQLite history, scheduler, tests", pt: "Trava de publicação, histórico em SQLite, agendador, testes" },
    ],
    tags: ["Python", "Claude API", "Whisper", "SQLite"],
    note: { en: "Private repository. Demo video on request.", pt: "Repositório privado. Vídeo de demonstração sob demanda." },
  },
  {
    name: "Comparador de Preços BR",
    meta: { en: "2026 · Chrome extension", pt: "2026 · Extensão do Chrome" },
    summary: {
      en: "A browser extension that finds the same product across 10 Brazilian marketplaces and shows the prices side by side in one tab.",
      pt: "Uma extensão de navegador que encontra o mesmo produto em 10 marketplaces brasileiros e mostra os preços lado a lado em uma única aba.",
    },
    points: [
      { en: "One scraper per store, using HTML parsing or the store's own API where it exists", pt: "Um scraper por loja, via HTML ou pela API da própria loja quando existe" },
      { en: "Manifest V3, background worker, unit tests with Jest", pt: "Manifest V3, service worker, testes unitários com Jest" },
    ],
    tags: ["JavaScript", "Chrome MV3", "Web scraping", "Jest"],
    note: privateWalkthrough,
  },
  {
    name: "Outreach Automation",
    meta: { en: "2026 · Python", pt: "2026 · Python" },
    summary: {
      en: "The tool I use to find freelance work. Each day it drafts personalized proposals with Claude, waits for my approval, sends through Gmail with an opt-out line, then reads replies and sorts them into interested, question or not interested.",
      pt: "A ferramenta que uso para conseguir trabalho freelance. Todo dia ela rascunha propostas personalizadas com o Claude, espera minha aprovação, envia pelo Gmail com opção de descadastro, e depois lê as respostas e classifica em interessado, dúvida ou sem interesse.",
    },
    points: [
      { en: "Nothing sends without approval, hard daily cap, suppression list", pt: "Nada é enviado sem aprovação, limite diário rígido, lista de bloqueio" },
      { en: "Gmail API with OAuth, SQLite state, 20 automated tests", pt: "Gmail API com OAuth, estado em SQLite, 20 testes automatizados" },
    ],
    tags: ["Python", "Gmail API", "Claude", "SQLite", "pytest"],
    note: {
      en: "A working example of the lead intake and reply automation I build for clients.",
      pt: "Um exemplo funcional das automações de captação e resposta que construo para clientes.",
    },
  },
];

export const production = {
  intro: {
    en: "Since June 2023 I have worked as a full stack engineer on enterprise applications, on 100% AWS infrastructure, used by more than 100 business units in the UK and across Europe. Client details are private. Here is what I can describe.",
    pt: "Desde junho de 2023 atuo como engenheiro full stack em aplicações corporativas, com 100% de infraestrutura na AWS, usadas por mais de 100 unidades de negócio no Reino Unido e na Europa. Os detalhes dos clientes são privados. Aqui está o que posso descrever.",
  } as Bi,
  items: [
    {
      title: { en: "Minutes to seconds", pt: "De minutos a segundos" },
      text: {
        en: "Fixed a bottleneck in a Step Functions state machine and cut file processing from 10 to 15 minutes down to 10 to 15 seconds.",
        pt: "Corrigi um gargalo em uma máquina de estados do Step Functions e reduzi o processamento de arquivos de 10 a 15 minutos para 10 a 15 segundos.",
      },
    },
    {
      title: { en: "LLMs in a real workflow", pt: "LLMs em um fluxo real" },
      text: {
        en: "Built workflows that use LangChain and LLMs to generate responses, with conversation memory stored in DynamoDB and live updates over WebSocket.",
        pt: "Construí fluxos com LangChain e LLMs para gerar respostas, com memória de conversa no DynamoDB e atualizações em tempo real por WebSocket.",
      },
    },
    {
      title: { en: "An app from zero", pt: "Um app do zero" },
      text: {
        en: "Built an application from scratch, infrastructure and code, centered on image recognition and barcode reading.",
        pt: "Construí uma aplicação do zero, infraestrutura e código, focada em reconhecimento de imagem e leitura de código de barras.",
      },
    },
    {
      title: { en: "Engineering habits", pt: "Práticas de engenharia" },
      text: {
        en: "Infrastructure as code with AWS CDK, CI/CD across dev, staging and production, Cognito auth, Cypress and Vitest tests.",
        pt: "Infraestrutura como código com AWS CDK, CI/CD em dev, staging e produção, autenticação com Cognito, testes com Cypress e Vitest.",
      },
    },
  ],
};

export type TimelineEntry = {
  year: number;
  when: Bi;
  title: Bi;
  text: Bi;
  links?: { label: string; href: string }[];
  now?: boolean;
};

const pages = "https://buttowsk.github.io";
const gh = "https://github.com/buttowsk";

export const timeline: TimelineEntry[] = [
  {
    year: 2022,
    when: { en: "Feb 2022", pt: "Fev 2022" },
    title: { en: "Technical degree in Systems Development", pt: "Curso técnico em Desenvolvimento de Sistemas" },
    text: { en: "Started at ETE Cícero Dias NAVE, finished July 2023.", pt: "Início na ETE Cícero Dias NAVE, conclusão em julho de 2023." },
  },
  {
    year: 2022,
    when: { en: "May to Jun 2022", pt: "Mai a Jun 2022" },
    title: { en: "First code", pt: "Primeiro código" },
    text: { en: "HTML and CSS pages, a temperature converter and a Python CRUD.", pt: "Páginas em HTML e CSS, um conversor de temperatura e um CRUD em Python." },
  },
  {
    year: 2022,
    when: { en: "Jun to Sep 2022", pt: "Jun a Set 2022" },
    title: {
      en: "Back-end developer, university hospital telehealth center",
      pt: "Desenvolvedor back-end, núcleo de telessaúde de um hospital universitário",
    },
    text: {
      en: "First professional work (NUTES, HC/UFPE): an API integration project and a chatbot.",
      pt: "Primeiro trabalho profissional (NUTES, HC/UFPE): um projeto de integração de APIs e um chatbot.",
    },
  },
  {
    year: 2022,
    when: { en: "Aug to Nov 2022", pt: "Ago a Nov 2022" },
    title: { en: "Small JavaScript sites", pt: "Pequenos sites em JavaScript" },
    text: {
      en: "A recipe site, a calculator and a CSS exercise set, deployed on GitHub Pages.",
      pt: "Um site de receitas, uma calculadora e uma lista de exercícios de CSS, publicados no GitHub Pages.",
    },
    links: [
      { label: "recipe site", href: `${pages}/Site-de-receitas/` },
      { label: "css exercises", href: `${pages}/Lista1CSS/` },
    ],
  },
  {
    year: 2023,
    when: { en: "Feb to Apr 2023", pt: "Fev a Abr 2023" },
    title: { en: "Back to NUTES, and the move to React", pt: "De volta ao NUTES, e a mudança para React" },
    text: {
      en: "A second stint on the back end, and my first React apps: a GitHub user search using the GitHub API, a calculator and a to-do list.",
      pt: "Uma segunda passagem pelo back-end e meus primeiros apps em React: uma busca de usuários usando a API do GitHub, uma calculadora e uma lista de tarefas.",
    },
    links: [{ label: "gitfind", href: `${pages}/gitfind-react/` }],
  },
  {
    year: 2023,
    when: { en: "Mar to Jun 2023", pt: "Mar a Jun 2023" },
    title: { en: "Pokédex and a small store", pt: "Pokédex e uma loja simples" },
    text: {
      en: "A React front end on the PokéAPI with its own Flask API behind it, plus a simple e-commerce app.",
      pt: "Um front end em React sobre a PokéAPI, com uma API própria em Flask, e também um e-commerce simples.",
    },
    links: [
      { label: "pokedex", href: `${pages}/pokedex-react/` },
      { label: "flask api", href: `${gh}/pokedex-flask-api` },
      { label: "store", href: `${pages}/reacommerce-react/` },
    ],
  },
  {
    year: 2023,
    when: { en: "May 2023", pt: "Mai 2023" },
    title: { en: "CineGuide", pt: "CineGuide" },
    text: { en: "A movie guide with a React front end and a Python back end.", pt: "Um guia de filmes com front end em React e back end em Python." },
    links: [
      { label: "front end", href: `${gh}/cineguide-react` },
      { label: "back end", href: `${gh}/cineguide-backend` },
    ],
  },
  {
    year: 2023,
    when: { en: "Jun to Jul 2023", pt: "Jun a Jul 2023" },
    title: {
      en: "Money Sage, final project of the interface design course",
      pt: "Money Sage, projeto final da matéria de design de interfaces",
    },
    text: {
      en: "A personal finance interface with a live demo. Also a real-time chat app in TypeScript.",
      pt: "Uma interface de finanças pessoais com demo online. Também um chat em tempo real em TypeScript.",
    },
    links: [
      { label: "money sage", href: `${pages}/money-sage/` },
      { label: "realtime chat", href: `${gh}/realtime-chat` },
    ],
  },
  {
    year: 2023,
    when: { en: "Jun 2023 to now", pt: "Jun 2023 até hoje" },
    title: { en: "Software engineer, enterprise applications on AWS", pt: "Engenheiro de software, aplicações corporativas na AWS" },
    text: {
      en: "Full stack work with React, Next.js, Node.js, NestJS and AWS CDK, serving more than 100 business units. See Production experience above.",
      pt: "Trabalho full stack com React, Next.js, Node.js, NestJS e AWS CDK, atendendo mais de 100 unidades de negócio. Veja Experiência em produção acima.",
    },
    now: true,
  },
  {
    year: 2026,
    when: { en: "May 2026", pt: "Mai 2026" },
    title: { en: "Personal products", pt: "Produtos pessoais" },
    text: {
      en: "Built the price comparison extension and the video automation pipeline, then started Finance Tracker, a full product with a web app and an Android build.",
      pt: "Criei a extensão de comparação de preços e o pipeline de automação de vídeo, e depois comecei o Finance Tracker, um produto completo com app web e build Android.",
    },
  },
  {
    year: 2026,
    when: { en: "Oct 2026", pt: "Out 2026" },
    title: { en: "Freelance work, with my own automation", pt: "Trabalho freelance, com minha própria automação" },
    text: {
      en: "Built the outreach automation and opened my freelance practice, focused on AI-assisted automations for small businesses.",
      pt: "Construí a automação de prospecção e abri minha atuação freelance, focada em automações com IA para pequenas empresas.",
    },
    now: true,
  },
];

export const stack: { label: Bi; items: string[] }[] = [
  { label: { en: "Front end", pt: "Front end" }, items: ["React", "Next.js", "TypeScript", "Tailwind", "Mantine"] },
  { label: { en: "Back end", pt: "Back end" }, items: ["Node.js", "NestJS", "Python", "Flask", "MySQL"] },
  { label: { en: "AWS", pt: "AWS" }, items: ["Lambda", "Step Functions", "DynamoDB", "CDK", "SQS", "API Gateway", "Cognito", "Amplify"] },
  { label: { en: "AI", pt: "IA" }, items: ["Claude API", "LangChain", "Prompt design", "Structured output"] },
  { label: { en: "Quality", pt: "Qualidade" }, items: ["Cypress", "Vitest", "Jest", "pytest", "CI/CD"] },
];
