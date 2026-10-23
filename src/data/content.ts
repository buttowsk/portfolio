import type { Bi } from "../i18n";

export const profile = {
  name: "Vinícius Nunes",
  role: { en: "Software engineer", pt: "Engenheiro de software" } as Bi,
  year: "2026",
  location: { en: "Recife, Pernambuco, Brazil", pt: "Recife, Pernambuco, Brasil" } as Bi,
  email: "vinicius.nunes.ds0104@gmail.com",
  github: { label: "GitHub", handle: "buttowsk", href: "https://github.com/buttowsk" },
  linkedin: { label: "LinkedIn", handle: "vinicius00nunes", href: "https://www.linkedin.com/in/vinicius00nunes" },
  resumes: [
    { lang: "EN", label: { en: "Resume in English", pt: "Currículo em inglês" } as Bi, file: "Resume_Vinicius_Nunes_EN.docx" },
    { lang: "PT", label: { en: "Resume in Portuguese", pt: "Currículo em português" } as Bi, file: "Curriculo_Vinicius_Nunes_PT.docx" },
  ],
};

export const nav: { id: string; label: Bi }[] = [
  { id: "about", label: { en: "About", pt: "Sobre" } },
  { id: "work", label: { en: "Work", pt: "Projetos" } },
  { id: "stack", label: { en: "Stack", pt: "Stack" } },
  { id: "journey", label: { en: "Journey", pt: "Trajetória" } },
];

export const ui = {
  skip: { en: "Skip to content", pt: "Pular para o conteúdo" } as Bi,
  home: { en: "Vinícius Nunes, back to top", pt: "Vinícius Nunes, voltar ao topo" } as Bi,
  sections: { en: "Sections", pt: "Seções" } as Bi,
  language: { en: "Language", pt: "Idioma" } as Bi,
  getInTouch: { en: "Get in touch", pt: "Fale comigo" } as Bi,
  copyEmail: { en: "Copy email address", pt: "Copiar endereço de email" } as Bi,
  copied: { en: "Copied", pt: "Copiado" } as Bi,
  copy: { en: "Copy", pt: "Copiar" } as Bi,
  built: { en: "What I built", pt: "O que construí" } as Bi,
  stackUsed: { en: "Stack", pt: "Stack" } as Bi,
  viewRepo: { en: "View repository", pt: "Ver repositório" } as Bi,
  rights: { en: "Built with React and TypeScript.", pt: "Feito com React e TypeScript." } as Bi,
  backToTop: { en: "Back to top", pt: "Voltar ao topo" } as Bi,
};

export const hero = {
  greeting: { en: "Hello", pt: "Olá" } as Bi,
  intro: { en: "— I'm Vinícius, I build things end to end", pt: "— Sou o Vinícius, construo de ponta a ponta" } as Bi,
  stats: [
    { value: "100", label: { en: "Business units on the systems I ship", pt: "Unidades de negócio nos sistemas que entrego" } as Bi },
    { value: "3", label: { en: "Years on production AWS", pt: "Anos com AWS em produção" } as Bi },
  ],
  scroll: { en: "Scroll down", pt: "Role para baixo" } as Bi,
};

export const about = {
  title: { en: "About me", pt: "Sobre mim" } as Bi,
  lede: {
    en: "I'm a Full Stack Developer building scalable web applications, working end-to-end from cloud infrastructure (AWS) to React interfaces.",
    pt: "Sou desenvolvedor Full Stack e construo aplicações web escaláveis, atuando ponta a ponta desde a infraestrutura em nuvem (AWS) até interfaces em React.",
  } as Bi,
  paragraphs: [
    {
      en: "Over the past few years, I've contributed to enterprise-grade applications in production, used by 100+ business units across the UK and multiple countries in Europe, with a focus on performance, scalable architecture, and solid engineering practices.",
      pt: "Nos últimos anos, participei do desenvolvimento de aplicações corporativas em produção, utilizadas por mais de 100 unidades de negócio no Reino Unido e em diversos países da Europa, com foco em performance, arquitetura escalável e boas práticas de engenharia.",
    },
    {
      en: "I work with React, TypeScript, Next.js, Node.js and NestJS, along with the AWS ecosystem (Lambda, Step Functions, DynamoDB, CDK and more). I've also been applying generative AI and LLMs in production workflows, integrating language models into real systems.",
      pt: "Tenho experiência prática com React, TypeScript, Next.js, Node.js e NestJS, além do ecossistema AWS (Lambda, Step Functions, DynamoDB, CDK, entre outros). Também venho aplicando IA generativa e LLMs em fluxos de produção, integrando modelos de linguagem a sistemas reais.",
    },
  ] as Bi[],
  stat: {
    value: "10–15 s",
    label: {
      en: "File processing time, down from 10–15 minutes, after I resolved a critical bottleneck in a State Machine.",
      pt: "Tempo de processamento de arquivos, antes 10–15 minutos, depois que resolvi um gargalo crítico em uma State Machine.",
    } as Bi,
  },
  location: { en: "Based in", pt: "Moro em" } as Bi,
};

export type ProjectArt = "workflow" | "capture" | "video" | "prices" | "terminal" | "orbit";

export type Project = {
  id: string;
  name: Bi;
  kind: Bi;
  year: string;
  summary: Bi;
  built: Bi[];
  stack: string[];
  art: ProjectArt;
  note?: Bi;
  repo?: string;
};

export const work = {
  title: { en: "Selected work", pt: "Projetos selecionados" } as Bi,
  watermark: { en: "Portfolio", pt: "Portfólio" } as Bi,
  intro: {
    en: "Production work I can describe, and things I build for myself.",
    pt: "Trabalho em produção que posso descrever, e coisas que construo para mim.",
  } as Bi,
};

const privateRepo: Bi = { en: "Private repository", pt: "Repositório privado" };

export const projects: Project[] = [
  {
    id: "enterprise",
    name: { en: "Enterprise platform on AWS", pt: "Plataforma corporativa na AWS" },
    kind: { en: "Full stack, production", pt: "Full stack, produção" },
    year: "2023 — 2026",
    summary: {
      en: "Full stack development of enterprise applications with 100% AWS infrastructure, serving 100+ business units in the UK and across Europe.",
      pt: "Desenvolvimento full stack de aplicações corporativas com infraestrutura 100% AWS, atendendo mais de 100 unidades de negócio no Reino Unido e na Europa.",
    },
    built: [
      {
        en: "Workflows with Step Functions and WebSocket, using LangChain and LLMs for response generation with persistent memory in DynamoDB",
        pt: "Fluxos com Step Functions e WebSocket, usando LangChain e LLMs para geração de respostas com memória persistente em DynamoDB",
      },
      {
        en: "Resolved a critical bottleneck in a State Machine, reducing file processing from 10–15 minutes to 10–15 seconds",
        pt: "Resolvi um gargalo crítico em uma State Machine, reduzindo o processamento de arquivos de 10–15 minutos para 10–15 segundos",
      },
      {
        en: "An application built from the ground up, infrastructure and code, focused on image recognition and barcode reading",
        pt: "Uma aplicação construída do zero, infraestrutura e código, com foco em reconhecimento de imagens e leitura de código de barras",
      },
      {
        en: "Infrastructure as code with AWS CDK and CI/CD with CodePipeline across dev, staging and production",
        pt: "Infraestrutura como código com AWS CDK e CI/CD com CodePipeline em dev, staging e produção",
      },
    ],
    stack: ["React", "Next.js", "NestJS", "Step Functions", "DynamoDB", "LangChain", "AWS CDK"],
    art: "workflow",
    note: { en: "Client work, details are confidential", pt: "Trabalho para cliente, detalhes confidenciais" },
  },
  {
    id: "finance-tracker",
    name: { en: "Finance Tracker", pt: "Finance Tracker" },
    kind: { en: "Web and Android app", pt: "App web e Android" },
    year: "2026",
    summary: {
      en: "A personal finance app for Brazil, on the web and on Android. It captures purchases from bank app notifications, so expenses log themselves.",
      pt: "Um app de finanças pessoais para o Brasil, na web e no Android. Captura compras a partir das notificações dos apps de banco, então os gastos se registram sozinhos.",
    },
    built: [
      {
        en: "Notification capture with a parser per bank, a generic fallback and a review list for captures that fail",
        pt: "Captura de notificações com um parser por banco, um parser genérico de reserva e uma lista de revisão para capturas que falham",
      },
      { en: "Cards, installments, subscriptions, forecast and reports", pt: "Cartões, parcelamentos, assinaturas, previsão e relatórios" },
      {
        en: "Feature-based structure with tests in each feature, and a biometric app lock on Android",
        pt: "Estrutura por funcionalidade com testes em cada uma, e bloqueio biométrico no Android",
      },
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Capacitor", "Tailwind", "Jest"],
    art: "capture",
    note: privateRepo,
  },
  {
    id: "video-automation",
    name: { en: "Video Automation", pt: "Video Automation" },
    kind: { en: "Python pipeline", pt: "Pipeline em Python" },
    year: "2026",
    summary: {
      en: "A hands-off pipeline that writes a short video script with Claude, records a voiceover, adds stock footage, renders and uploads it. A second pipeline turns clips into subtitled vertical videos on a daily schedule.",
      pt: "Um pipeline sem intervenção que escreve o roteiro de um vídeo curto com o Claude, gera a narração, adiciona imagens de banco, renderiza e publica. Um segundo pipeline transforma clipes em vídeos verticais legendados, em horário agendado.",
    },
    built: [
      { en: "Scripts from the Claude API, returned as structured JSON", pt: "Roteiros pela API do Claude, retornados como JSON estruturado" },
      { en: "Text-to-speech voiceover and Whisper subtitles", pt: "Narração por síntese de voz e legendas com Whisper" },
      {
        en: "SQLite history so topics never repeat, an upload gate and a blocklist, with tests",
        pt: "Histórico em SQLite para nunca repetir temas, trava de publicação e lista de bloqueio, com testes",
      },
    ],
    stack: ["Python", "Claude API", "faster-whisper", "MoviePy", "YouTube Data API", "SQLite"],
    art: "video",
    note: privateRepo,
  },
  {
    id: "price-extension",
    name: { en: "Comparador de Preços BR", pt: "Comparador de Preços BR" },
    kind: { en: "Chrome extension", pt: "Extensão do Chrome" },
    year: "2026",
    summary: {
      en: "A browser extension that finds the same product across 10 Brazilian marketplaces and shows the prices side by side in one tab.",
      pt: "Uma extensão de navegador que encontra o mesmo produto em 10 marketplaces brasileiros e mostra os preços lado a lado em uma única aba.",
    },
    built: [
      {
        en: "One scraper per store, reading the HTML or the store's own API where there is one",
        pt: "Um scraper por loja, lendo o HTML ou a API da própria loja quando existe",
      },
      {
        en: "Manifest V3 with a background service worker, popup, content script and a comparison tab",
        pt: "Manifest V3 com service worker, popup, content script e uma aba de comparação",
      },
    ],
    stack: ["JavaScript", "Chrome MV3", "Web scraping"],
    art: "prices",
    note: privateRepo,
  },
  {
    id: "workday",
    name: { en: "workday", pt: "workday" },
    kind: { en: "Command-line tool", pt: "Ferramenta de linha de comando" },
    year: "2026",
    summary: {
      en: "A CLI that runs my daily support routine. It snapshots my open tickets, watches them in the background, drafts hourly status updates and an end-of-day report with Claude, and writes everything into a Logseq graph.",
      pt: "Uma CLI que conduz minha rotina diária de suporte. Tira um retrato dos meus tickets abertos, acompanha mudanças em segundo plano, rascunha atualizações de status por hora e um relatório de fim de dia com o Claude, e grava tudo em um grafo do Logseq.",
    },
    built: [
      { en: "Browser automation behind SSO with Playwright", pt: "Automação de navegador com SSO usando Playwright" },
      {
        en: "A background daemon that diffs ticket changes and sends desktop notifications",
        pt: "Um daemon em segundo plano que compara mudanças nos tickets e envia notificações no desktop",
      },
      {
        en: "Daily journal, ticket and meeting pages in Logseq, with editable prompt templates",
        pt: "Diário, páginas de tickets e de reuniões no Logseq, com templates de prompt editáveis",
      },
    ],
    stack: ["Python", "Click", "Playwright", "Claude Code", "Logseq"],
    art: "terminal",
    note: { en: "Personal tool, not published", pt: "Ferramenta pessoal, não publicada" },
  },
  {
    id: "space-traveler",
    name: { en: "Space Traveler", pt: "Space Traveler" },
    kind: { en: "REST API in Crystal", pt: "API REST em Crystal" },
    year: "2023",
    summary: {
      en: "A small REST API for travel plans whose stops are locations from the Rick and Morty GraphQL API. Built in two days, in a language that was new to me.",
      pt: "Uma pequena API REST de planos de viagem cujas paradas são locais da API GraphQL de Rick and Morty. Feita em dois dias, numa linguagem nova para mim.",
    },
    built: [
      { en: "CRUD for travel plans on Kemal, with Jennifer ORM and SQLite", pt: "CRUD de planos de viagem com Kemal, Jennifer ORM e SQLite" },
      {
        en: "Expand option that fetches each stop's details over GraphQL, and a popularity score per stop",
        pt: "Opção de expandir que busca os detalhes de cada parada via GraphQL, e uma pontuação de popularidade por parada",
      },
    ],
    stack: ["Crystal", "Kemal", "GraphQL", "SQLite", "Docker"],
    art: "orbit",
    repo: "https://github.com/buttowsk/space-traveler",
  },
];

export const stack = {
  title: { en: "Stack", pt: "Stack" } as Bi,
  intro: {
    en: "What I use day to day, from the interface down to the infrastructure.",
    pt: "O que uso no dia a dia, da interface até a infraestrutura.",
  } as Bi,
  groups: [
    { label: { en: "Front end", pt: "Front end" }, items: ["React", "TypeScript", "Next.js", "Mantine", "TailwindCSS", "Styled Components"] },
    { label: { en: "Back end", pt: "Back end" }, items: ["Node.js", "NestJS", "Python", "MySQL", "RabbitMQ", "Amazon MQ"] },
    {
      label: { en: "AWS", pt: "AWS" },
      items: [
        "Lambda",
        "Step Functions",
        "DynamoDB",
        "CDK",
        "S3",
        "SQS",
        "EventBridge",
        "API Gateway",
        "Aurora RDS",
        "Cognito",
        "Route53",
        "CloudFront",
        "CloudWatch",
        "CloudFormation",
        "Amplify",
        "CodePipeline",
      ],
    },
    { label: { en: "AI", pt: "IA" }, items: ["LangChain", "LLMs", "Claude API"] },
    { label: { en: "Testing", pt: "Testes" }, items: ["Cypress", "Vitest", "Jest"] },
    { label: { en: "Data", pt: "Dados" }, items: ["Apache Airflow", "Apache Spark", "Kubernetes", "Google Cloud"] },
  ] as { label: Bi; items: string[] }[],
};

export type JourneyEntry = {
  start: string;
  when: Bi;
  role: Bi;
  org: string;
  place?: Bi;
  points?: Bi[];
  now?: boolean;
};

export const journey = {
  title: { en: "Journey", pt: "Trajetória" } as Bi,
  now: { en: "Now", pt: "Atual" } as Bi,
  entries: [
    {
      start: "2023-06",
      when: { en: "June 2023 — Present", pt: "Junho de 2023 — Presente" },
      role: { en: "Software Engineer", pt: "Engenheiro de Software" },
      org: "WestPoint Software Solutions",
      place: { en: "Greater London, United Kingdom", pt: "Londres e Região, Reino Unido" },
      points: [
        {
          en: "Full stack development of enterprise applications with 100% AWS infrastructure, serving 100+ business units in the UK and across Europe.",
          pt: "Desenvolvimento full stack de aplicações corporativas com infraestrutura 100% AWS, atendendo mais de 100 unidades de negócio no Reino Unido e na Europa.",
        },
        {
          en: "APIs built with Node.js and NestJS, including an architecture migration for better modularity and maintainability.",
          pt: "APIs em Node.js e NestJS, com migração de arquitetura para melhor modularização e manutenibilidade.",
        },
        {
          en: "Authentication with Cognito and JWT, automated deployments with Amplify, observability with CloudWatch, messaging with RabbitMQ and Amazon MQ.",
          pt: "Autenticação com Cognito e JWT, deploys automatizados com Amplify, observabilidade com CloudWatch, mensageria com RabbitMQ e AmazonMQ.",
        },
      ],
      now: true,
    },
    {
      start: "2023-02",
      when: { en: "February 2023 — April 2023", pt: "Fevereiro de 2023 — Abril de 2023" },
      role: { en: "Back-end Developer", pt: "Desenvolvedor Back-end" },
      org: "NUTES (Núcleo de Telessaúde do HC/UFPE)",
      place: { en: "Recife, Pernambuco, Brazil", pt: "Recife, Pernambuco, Brasil" },
    },
    {
      start: "2022-06",
      when: { en: "June 2022 — September 2022", pt: "Junho de 2022 — Setembro de 2022" },
      role: { en: "Back End Developer", pt: "Desenvolvedor Back End" },
      org: "NUTES (Núcleo de Telessaúde do HC/UFPE)",
      place: { en: "Recife, Pernambuco, Brazil", pt: "Recife, Pernambuco, Brasil" },
    },
    {
      start: "2022-02",
      when: { en: "February 2022 — July 2023", pt: "Fevereiro de 2022 — Julho de 2023" },
      role: { en: "Technical Degree, Systems Development", pt: "Ensino Técnico, Desenvolvimento de Sistemas" },
      org: "ETE Cícero Dias NAVE",
    },
  ] as JourneyEntry[],
};

export const contact = {
  title: { en: "Let's build something", pt: "Vamos construir algo" } as Bi,
  text: {
    en: "Open to interesting projects. Email is the fastest way to reach me.",
    pt: "Aberto a projetos interessantes. Email é o jeito mais rápido de falar comigo.",
  } as Bi,
  emailLabel: { en: "Email", pt: "Email" } as Bi,
  elsewhere: { en: "Elsewhere", pt: "Redes" } as Bi,
  resume: { en: "Resume", pt: "Currículo" } as Bi,
};
