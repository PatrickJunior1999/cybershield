const LEVELS = [
  { level: 1, name: "Recruta Digital", xp: 0 },
  { level: 2, name: "Analista de Segurança", xp: 200 },
  { level: 3, name: "Especialista em Defesa", xp: 400 },
  { level: 4, name: "Defensor Digital", xp: 600 },
  { level: 5, name: "Agente CyberShield", xp: 1000 }
];

const ACHIEVEMENTS = [
  { id: "primeira-defesa", mission: "alpha", icon: "🛡", title: "Primeira Defesa", desc: "Concluiu a Missão Alpha." },
  { id: "firewall-ativado", mission: "firewall", icon: "🔥", title: "Firewall Ativado", desc: "Dominou conceitos de senhas e autenticação." },
  { id: "cacador-phishing", mission: "phishing", icon: "🎣", title: "Caçador de Phishing", desc: "Identificou golpes e engenharia social." },
  { id: "guardiao-privacidade", mission: "privacy", icon: "🔒", title: "Guardião da Privacidade", desc: "Protegeu sua identidade digital." },
  { id: "agente-cybershield", mission: "operation", icon: "⭐", title: "Agente CyberShield", desc: "Concluiu a operação final." }
];

const MISSIONS = [
  {
    id: "alpha",
    title: "Missão Alpha",
    desc: "Fundamentos da Segurança Digital",
    xp: 100,
    icon: "🛡",
    slides: [
      {
        title: "Briefing da Missão",
        visual: "🛰",
        text: "Agente, antes de proteger sistemas e dados, você precisa entender por que a Segurança da Informação existe.",
        cyra: "Toda defesa começa pelo conhecimento."
      },
      {
        title: "O que é Segurança da Informação?",
        visual: "🔐",
        text: "Segurança da Informação é o conjunto de práticas que protege dados e sistemas contra acessos indevidos, alterações não autorizadas e interrupções.",
        cyra: "Quando protegemos informações, protegemos pessoas, contas, serviços e decisões."
      },
      {
        title: "Por que isso importa?",
        visual: "🌐",
        text: "Redes sociais, bancos, escolas, hospitais e empresas dependem de dados. Quando esses dados são expostos ou alterados, pessoas podem ser prejudicadas.",
        cyra: "A segurança digital faz parte da vida cotidiana."
      },
      {
        title: "Os 3 Pilares",
        visual: "△",
        text: "Confidencialidade: apenas pessoas autorizadas acessam. Integridade: dados não são alterados indevidamente. Disponibilidade: informações ficam acessíveis quando necessário.",
        cyra: "Esses pilares são conhecidos como tríade CIA."
      },
      {
        title: "Mini Atividade",
        visual: "🎯",
        text: "Qual ambiente precisa de Segurança da Informação? A resposta correta é: qualquer lugar que utilize dados.",
        cyra: "Se existem dados importantes, existe necessidade de proteção."
      }
    ],
    quiz: [
      {
        question: "O que é Segurança da Informação?",
        options: [
          "Conjunto de jogos online",
          "Conjunto de práticas para proteger dados",
          "Um tipo de computador",
          "Um sistema operacional"
        ],
        correct: 1,
        feedback: "Segurança da Informação protege dados, sistemas e usuários contra riscos digitais."
      },
      {
        question: "Qual pilar garante que apenas pessoas autorizadas acessem informações?",
        options: ["Disponibilidade", "Integridade", "Confidencialidade", "Firewall"],
        correct: 2,
        feedback: "Confidencialidade trata do acesso autorizado às informações."
      },
      {
        question: "Qual pilar garante que os dados não sejam alterados indevidamente?",
        options: ["Integridade", "Privacidade", "Disponibilidade", "Backup"],
        correct: 0,
        feedback: "Integridade mantém os dados corretos e confiáveis."
      },
      {
        question: "Qual pilar garante que os dados estejam acessíveis quando necessário?",
        options: ["Criptografia", "Disponibilidade", "Confidencialidade", "Senha forte"],
        correct: 1,
        feedback: "Disponibilidade garante acesso aos dados e serviços quando eles são necessários."
      },
      {
        question: "A Segurança da Informação é importante para:",
        options: [
          "Apenas bancos",
          "Apenas empresas grandes",
          "Qualquer ambiente que utilize informações",
          "Apenas computadores"
        ],
        correct: 2,
        feedback: "Qualquer ambiente que usa informações precisa protegê-las."
      }
    ]
  },
  {
    id: "firewall",
    title: "Missão Firewall",
    desc: "Senhas e Autenticação",
    xp: 100,
    icon: "🔥",
    slides: [
      {
        title: "Briefing da Missão",
        visual: "🔥",
        text: "Agente, os ataques mais sofisticados nem sempre exploram falhas técnicas. Muitas vezes eles exploram senhas fracas.",
        cyra: "Sua missão é fortalecer a primeira barreira de defesa das suas contas."
      },
      {
        title: "O Problema das Senhas Fracas",
        visual: "⚠️",
        text: "Senhas como 123456, senha123 e qwerty são previsíveis e aparecem com frequência em vazamentos de dados.",
        cyra: "Invasores sabem que muitas pessoas ainda usam senhas simples."
      },
      {
        title: "O que torna uma senha forte?",
        visual: "🔐",
        text: "Uma senha forte combina letras maiúsculas, minúsculas, números, símbolos e possui bom comprimento.",
        cyra: "Quanto maior e mais variada for a combinação, mais difícil será descobri-la."
      },
      {
        type: "passwordClassify",
        title: "Detector de Senhas",
        visual: "🎯",
        text: "Analise cada senha e classifique como forte ou fraca.",
        cyra: "Observe tamanho, variedade de caracteres e previsibilidade."
      },
      {
        type: "passwordLab",
        title: "Laboratório de Senhas",
        visual: "🧪",
        text: "Digite uma senha no campo abaixo e observe o nível de segurança calculado pelo sistema.",
        cyra: "Tente criar uma senha classificada como forte."
      },
      {
        title: "Autenticação em Dois Fatores",
        visual: "📲",
        text: "A autenticação em dois fatores adiciona uma segunda etapa de verificação, como um código enviado ao celular.",
        cyra: "Mesmo que alguém descubra sua senha, ainda precisará do segundo fator."
      },
      {
        title: "Gerenciadores de Senha",
        visual: "🗄️",
        text: "Gerenciadores de senha ajudam a armazenar e gerar senhas fortes, evitando que você reutilize a mesma senha em vários serviços.",
        cyra: "Você lembra uma senha principal e o gerenciador cuida das outras."
      }
    ],
    quiz: [
      {
        question: "Qual senha é mais segura?",
        options: ["12345678", "senha123", "Maria2024", "T#9wP!2Lx@84"],
        correct: 3,
        feedback: "A senha mais forte combina letras, números, símbolos e não é previsível."
      },
      {
        question: "O que é autenticação em dois fatores?",
        options: [
          "Usar duas senhas parecidas",
          "Usar uma segunda verificação de identidade",
          "Trocar a senha todos os dias",
          "Usar a mesma senha em dois sites"
        ],
        correct: 1,
        feedback: "O 2FA adiciona uma segunda camada de proteção além da senha."
      },
      {
        question: "Por que reutilizar senhas é perigoso?",
        options: [
          "Porque dificulta o login",
          "Porque se uma conta vazar, outras também podem ser acessadas",
          "Porque deixa o computador lento",
          "Porque bloqueia o celular"
        ],
        correct: 1,
        feedback: "Se uma senha vazada for reutilizada, outras contas também ficam em risco."
      },
      {
        question: "Qual característica fortalece uma senha?",
        options: [
          "Ser curta",
          "Usar apenas números",
          "Usar nome e data de nascimento",
          "Ter variedade de caracteres e bom comprimento"
        ],
        correct: 3,
        feedback: "Senhas fortes têm variedade, comprimento e baixa previsibilidade."
      },
      {
        question: "Qual ferramenta ajuda a armazenar e gerar senhas seguras?",
        options: [
          "Gerenciador de senhas",
          "Editor de texto",
          "Calculadora",
          "Player de música"
        ],
        correct: 0,
        feedback: "Gerenciadores de senha são úteis para criar e guardar senhas fortes."
      }
    ]
  },
  {
    id: "phishing",
    title: "Missão Anti-Phishing",
    desc: "Golpes e Engenharia Social",
    xp: 100,
    icon: "🎣",
    slides: [
      {
        title: "Briefing da Missão",
        visual: "🎣",
        text: "Agente, nem toda ameaça invade sistemas. Muitas tentam enganar pessoas por mensagens, e-mails e links falsos.",
        cyra: "Sua missão é identificar golpes antes que eles capturem informações."
      },
      {
        type: "phishingSimulation",
        title: "Mensagem Suspeita",
        visual: "📱",
        text: "Analise a mensagem recebida e decida se ela é confiável.",
        cyra: "Golpes costumam usar urgência, medo e links suspeitos."
      },
      {
        title: "O que é Phishing?",
        visual: "🔎",
        text: "Phishing é uma tentativa de enganar usuários para roubar informações como senhas, dados bancários ou códigos de verificação.",
        cyra: "O nome vem da ideia de 'pescar' vítimas usando iscas digitais."
      },
      {
        title: "Sinais de Alerta",
        visual: "⚠️",
        text: "Mensagens urgentes, links estranhos, erros de português, promessas exageradas e pedidos de senha são sinais comuns de phishing.",
        cyra: "Quando uma mensagem tenta apressar sua decisão, investigue antes de clicar."
      },
      {
        type: "emailInvestigation",
        title: "Investigação Digital",
        visual: "📧",
        text: "Analise o e-mail falso e encontre os indícios de golpe.",
        cyra: "Clique nos elementos suspeitos para coletar evidências."
      },
      {
        title: "Engenharia Social",
        visual: "🧠",
        text: "Engenharia Social é a técnica de manipular pessoas para obter acesso a informações confidenciais.",
        cyra: "Muitas ameaças exploram confiança, medo ou distração."
      },
      {
        type: "socialEngineeringCase",
        title: "Caso Prático",
        visual: "☎️",
        text: "Você recebe uma ligação de alguém dizendo ser do banco e pedindo o código recebido por SMS.",
        cyra: "Códigos de verificação nunca devem ser compartilhados."
      }
    ],
    quiz: [
      {
        question: "O que é phishing?",
        options: [
          "Um antivírus",
          "Um golpe para roubar informações",
          "Um firewall",
          "Um sistema operacional"
        ],
        correct: 1,
        feedback: "Phishing é uma tentativa de enganar pessoas para obter informações sensíveis."
      },
      {
        question: "Qual é um sinal comum de phishing?",
        options: [
          "Mensagem urgente pedindo ação imediata",
          "Site oficial acessado manualmente",
          "Aplicativo instalado pela loja oficial",
          "Senha armazenada em gerenciador confiável"
        ],
        correct: 0,
        feedback: "Golpes costumam criar urgência para reduzir a atenção da vítima."
      },
      {
        question: "Engenharia Social consiste em:",
        options: [
          "Configurar redes",
          "Manipular pessoas para obter informações",
          "Criar senhas fortes",
          "Instalar atualizações"
        ],
        correct: 1,
        feedback: "Engenharia Social explora comportamento humano, como confiança, medo e pressa."
      },
      {
        question: "Um banco pode pedir sua senha ou código por WhatsApp?",
        options: [
          "Sim, sempre",
          "Apenas em emergências",
          "Não",
          "Apenas se usar foto oficial"
        ],
        correct: 2,
        feedback: "Instituições legítimas não solicitam senhas ou códigos de autenticação por mensagens."
      },
      {
        question: "Ao receber um link suspeito você deve:",
        options: [
          "Clicar para verificar",
          "Compartilhar com amigos",
          "Ignorar ou verificar por canais oficiais",
          "Informar seus dados rapidamente"
        ],
        correct: 2,
        feedback: "A atitude segura é verificar por canais oficiais, sem clicar no link suspeito."
      }
    ]
  },
  {
    id: "privacy",
    title: "Missão Privacidade",
    desc: "Identidade Digital",
    xp: 100,
    icon: "🔒",
    slides: [
      {
        title: "Briefing da Missão",
        visual: "🔒",
        text: "Agente, informações pessoais possuem valor. Quanto mais você expõe, mais oportunidades cria para golpistas e invasores.",
        cyra: "Nesta missão você aprenderá a proteger sua identidade digital."
      },
      {
        title: "O que é Identidade Digital?",
        visual: "🧬",
        text: "Identidade digital é o conjunto de informações que representam você no ambiente online: nome, fotos, e-mail, telefone, perfis e publicações.",
        cyra: "Tudo que você compartilha ajuda a formar uma imagem sobre quem você é."
      },
      {
        title: "Pegada Digital",
        visual: "👣",
        text: "Curtidas, comentários, cadastros, pesquisas e publicações deixam rastros. Esses registros formam sua pegada digital.",
        cyra: "Mesmo conteúdos apagados podem continuar circulando ou armazenados por muito tempo."
      },
      {
        type: "exposureSimulator",
        title: "Simulador de Exposição",
        visual: "📱",
        text: "Analise um perfil fictício e identifique quais informações podem representar risco.",
        cyra: "Nem toda informação deve estar disponível publicamente."
      },
      {
        type: "permissionsAuditor",
        title: "Auditor de Aplicativos",
        visual: "📲",
        text: "Analise permissões solicitadas por aplicativos e decida se fazem sentido.",
        cyra: "Permissões excessivas podem expor dados sem necessidade."
      },
      {
        type: "privacyCase",
        title: "Caso João",
        visual: "🕵️",
        text: "João publicou dados pessoais, rotina e foto do crachá escolar. Avalie os riscos.",
        cyra: "Pequenas informações combinadas podem gerar grandes riscos."
      },
      {
        title: "Checklist de Privacidade",
        visual: "✅",
        text: "Use perfil privado quando necessário, revise permissões, evite publicar localização em tempo real e proteja dados como telefone, CPF e documentos.",
        cyra: "Privacidade é uma configuração, mas também é um hábito."
      }
    ],
    quiz: [
      {
        question: "O que é identidade digital?",
        options: [
          "A senha do computador",
          "O conjunto de informações que representa uma pessoa online",
          "Um antivírus",
          "Um tipo de rede social"
        ],
        correct: 1,
        feedback: "Identidade digital reúne dados, perfis, publicações e registros associados a uma pessoa no ambiente online."
      },
      {
        question: "O que é pegada digital?",
        options: [
          "Um vírus que rastreia passos",
          "O conjunto de rastros deixados pelas ações na internet",
          "Um aplicativo de mapa",
          "Uma senha temporária"
        ],
        correct: 1,
        feedback: "Pegada digital é formada pelos registros deixados por curtidas, comentários, pesquisas, cadastros e publicações."
      },
      {
        question: "Qual informação deve ser protegida com mais cuidado?",
        options: [
          "Cor favorita",
          "Filme preferido",
          "Telefone pessoal",
          "Gênero musical preferido"
        ],
        correct: 2,
        feedback: "Telefone pessoal é uma informação sensível e pode ser usada em golpes ou tentativas de engenharia social."
      },
      {
        question: "Por que revisar permissões de aplicativos?",
        options: [
          "Para liberar mais espaço na tela",
          "Para evitar acesso desnecessário a dados pessoais",
          "Para aumentar o brilho do celular",
          "Para trocar a senha automaticamente"
        ],
        correct: 1,
        feedback: "Permissões excessivas podem permitir acesso desnecessário a localização, contatos, microfone ou câmera."
      },
      {
        question: "Como reduzir a exposição online?",
        options: [
          "Publicar localização em tempo real",
          "Compartilhar documentos",
          "Revisar privacidade e evitar dados sensíveis em posts",
          "Usar a mesma senha em todas as redes"
        ],
        correct: 2,
        feedback: "Configurações de privacidade e cuidado com dados sensíveis reduzem riscos de exposição."
      }
    ]
  },
  { id: "operation", title: "Operação CyberShield", desc: "Avaliação Final", xp: 600, icon: "⭐", special: true }
];

const STORAGE_KEY = "cybershield_progress_v1";

function assetIcon(name, className = "asset-icon") {
  return `<img class="${className}" src="assets/icons/${name}.svg" alt="" aria-hidden="true">`;
}

function badgeAsset(id) {
  return `<img class="badge-asset" src="assets/badges/${id}.svg" alt="" aria-hidden="true">`;
}

function cyraAvatar() {
  return `<img class="cyra-avatar" src="assets/characters/cyra.svg" alt="CYRA">`;
}


const app = document.getElementById("app");
const topbar = document.getElementById("topbar");

let state = loadState();
let currentSlide = 0;
let currentQuestion = 0;
let quizScore = 0;
let selectedOption = null;

function defaultState() {
  return {
    name: "",
    xp: 0,
    completedMissions: [],
    unlockedMissions: ["alpha"],
    achievements: []
  };
}

function calculateXpFromCompletedMissions(completedMissions = []) {
  return completedMissions.reduce((total, missionId) => {
    const mission = MISSIONS.find(item => item.id === missionId);
    return total + (mission ? mission.xp : 0);
  }, 0);
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return defaultState();

  const parsed = JSON.parse(saved);
  const repaired = {
    ...defaultState(),
    ...parsed,
    achievements: parsed.achievements || []
  };

  if (repaired.completedMissions.includes("privacy") && !repaired.unlockedMissions.includes("operation")) {
    repaired.unlockedMissions.push("operation");
  }

  const recalculatedXp = calculateXpFromCompletedMissions(repaired.completedMissions);
  if (recalculatedXp > repaired.xp) {
    repaired.xp = recalculatedXp;
  }

  if (repaired.completedMissions.includes("operation") && repaired.xp < 1000) {
    repaired.xp = 1000;
  }

  return repaired;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  updateHud();
}

function getCurrentLevel() {
  return LEVELS.reduce((current, level) => state.xp >= level.xp ? level : current, LEVELS[0]);
}

function getNextLevel() {
  const current = getCurrentLevel();
  return LEVELS.find(level => level.xp > current.xp) || LEVELS[LEVELS.length - 1];
}

function updateHud() {
  const current = getCurrentLevel();
  const next = getNextLevel();
  const percent = next.xp === current.xp ? 100 : Math.min(100, Math.round(((state.xp - current.xp) / (next.xp - current.xp)) * 100));

  document.getElementById("hudLevel").textContent = `${current.name}`;
  document.getElementById("hudXp").textContent = `${state.xp} XP`;
  document.getElementById("hudXpBar").style.width = `${percent}%`;
}

function showTopbar(show) {
  topbar.classList.toggle("hidden", !show);
  if (show) updateHud();
}

function renderHome() {
  showTopbar(false);
  app.innerHTML = `
    <section class="screen">
      <div class="card home-card">
        <div class="boot-lines">
          <span>Inicializando protocolo CyberShield...</span>
          <span>Conectando à Academia...</span>
          <span>Sistemas de defesa online.</span>
        </div>

        <div class="logo-mark svg-logo">${assetIcon("cybershield", "logo-svg")}</div>
        <h1>CyberShield</h1>
        <p class="subtitle">Aprenda a se proteger no mundo digital.</p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Conhecimento é sua primeira defesa. Inicie seu treinamento e torne-se um Agente CyberShield.
        </div>

        <div class="actions">
          <button class="btn" onclick="renderRegister()">INICIAR TREINAMENTO</button>
          ${state.name ? `<button class="btn secondary" onclick="renderMissionCenter()">CONTINUAR COMO ${state.name.toUpperCase()}</button>` : ""}
        </div>
      </div>
    </section>
  `;
}

function renderRegister() {
  showTopbar(false);
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>Identificação do Agente</h2>
        <p class="content-text">Informe seu nome para personalizar sua experiência e preparar seu certificado final.</p>

        <label for="agentName">Nome do Agente</label>
        <input id="agentName" type="text" placeholder="Digite seu nome" value="${state.name || ""}" />

        <div class="actions">
          <button class="btn" onclick="saveAgent()">ACESSAR ACADEMIA</button>
          <button class="btn secondary" onclick="renderHome()">VOLTAR</button>
        </div>
      </div>
    </section>
  `;
}

function saveAgent() {
  const input = document.getElementById("agentName");
  const name = input.value.trim();

  if (!name) {
    alert("Informe o nome do agente para continuar.");
    return;
  }

  state.name = name;
  saveState();
  renderMissionCenter();
}

function renderMissionCenter() {
  showTopbar(true);
  const current = getCurrentLevel();
  const progress = Math.round((state.completedMissions.length / MISSIONS.length) * 100);

  app.innerHTML = `
    <section class="screen screen-wide">
      <div class="card">
        <h2>Centro de Missões</h2>
        <p class="small">Agente: ${state.name || "Não identificado"}</p>
        <p class="small">Classificação: ${current.name}</p>

        <div class="progress-line"><div style="width:${progress}%"></div></div>
        <p class="small">Progresso geral: ${progress}%</p>

        <div class="mission-list">
          ${MISSIONS.map(mission => missionButton(mission)).join("")}
        </div>

        <div class="actions">
          <button class="btn secondary" onclick="renderCommandCenter()">📡 CENTRO DE COMANDO</button>
          <button class="btn secondary" onclick="resetProgress()">REINICIAR PROGRESSO</button>
        </div>
      </div>
    </section>
  `;
}

function getMissionAssetName(id) {
  const map = {
    alpha: "alpha",
    firewall: "firewall",
    phishing: "phishing",
    privacy: "privacy",
    operation: "operation"
  };

  return map[id] || "cybershield";
}

function missionButton(mission) {
  const completed = state.completedMissions.includes(mission.id);
  const unlocked = state.unlockedMissions.includes(mission.id);
  const status = completed ? "✅" : unlocked ? mission.icon : "🔒";

  return `
    <button class="mission-item ${unlocked ? "" : "locked"}" onclick="${unlocked ? `startMission('${mission.id}')` : ""}">
      <span class="mission-status">${status}</span>
      <span>
        <span class="mission-title">${mission.title}</span>
        <span class="mission-desc">${mission.desc}</span>
      </span>
    </button>
  `;
}

function renderCommandCenter() {
  showTopbar(true);
  const current = getCurrentLevel();

  app.innerHTML = `
    <section class="screen screen-wide">
      <div class="card">
        <h2>Centro de Comando</h2>
        <div class="visual-placeholder">📡</div>
        <p class="content-text"><strong>Agente:</strong> ${state.name}</p>
        <p class="content-text"><strong>XP:</strong> ${state.xp} / 1000</p>
        <p class="content-text"><strong>Nível:</strong> ${current.name}</p>
        <p class="content-text"><strong>Missões concluídas:</strong> ${state.completedMissions.length}/${MISSIONS.length}</p>

        <h3 class="section-title">Conquistas</h3>
        <div class="achievement-grid">
          ${ACHIEVEMENTS.map(renderAchievementBadge).join("")}
        </div>

        <div class="actions">
          ${state.completedMissions.includes("operation") ? `<button class="btn" onclick="renderCertificate()">VER CERTIFICADO</button>` : ""}
          <button class="btn command-center-return" onclick="renderMissionCenter()">VOLTAR AO CENTRO DE MISSÕES</button>
        </div>
      </div>
    </section>
  `;
}

function startMission(id) {
  const mission = MISSIONS.find(m => m.id === id);

  if (id === "operation") {
    startOperation();
    return;
  }

  if (!mission.slides) {
    renderComingSoon(mission);
    return;
  }

  currentSlide = 0;
  currentQuestion = 0;
  quizScore = 0;
  selectedOption = null;
  renderMissionSlide(id);
}

function renderComingSoon(mission) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${mission.title}</h2>
        <div class="visual-placeholder">${mission.icon}</div>
        <p class="content-text">Esta missão já está prevista na arquitetura do CyberShield e será implementada na próxima sprint.</p>
        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          A estrutura expansível já está preparada para receber novos conteúdos.
        </div>
        <div class="actions">
          <button class="btn" onclick="renderMissionCenter()">VOLTAR</button>
        </div>
      </div>
    </section>
  `;
}

function missionVisual(id, fallback) {
  return assetIcon(getMissionAssetName(id), "visual-svg");
}

function renderMissionSlide(id) {
  showTopbar(true);
  const mission = MISSIONS.find(m => m.id === id);
  const slide = mission.slides[currentSlide];
  const percent = Math.round(((currentSlide + 1) / mission.slides.length) * 100);

  if (slide.type === "phishingSimulation") {
    renderPhishingSimulation(id, percent);
    return;
  }

  if (slide.type === "emailInvestigation") {
    renderEmailInvestigation(id, percent);
    return;
  }

  if (slide.type === "socialEngineeringCase") {
    renderSocialEngineeringCase(id, percent);
    return;
  }

  if (slide.type === "passwordClassify") {
    renderPasswordClassify(id, percent);
    return;
  }

  if (slide.type === "passwordLab") {
    renderPasswordLab(id, percent);
    return;
  }

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">${mission.title} • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>${slide.title}</h2>
        <div class="visual-placeholder">${slide.visual}</div>
        <p class="content-text">${slide.text}</p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${slide.cyra}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">${currentSlide === mission.slides.length - 1 ? "INICIAR QUIZ" : "CONTINUAR"}</button>
          <button class="btn secondary" onclick="renderMissionCenter()">SAIR DA MISSÃO</button>
        </div>
      </div>
    </section>
  `;
}




function renderExposureSimulator(id, percent) {
  window.exposureSelected = window.exposureSelected || [];

  const items = [
    { key: "telefone", label: "Telefone pessoal", risky: true },
    { key: "localizacao", label: "Localização em tempo real", risky: true },
    { key: "escola", label: "Nome da escola", risky: true },
    { key: "hobby", label: "Hobby favorito", risky: false },
    { key: "cidade", label: "Cidade onde mora", risky: true },
    { key: "musica", label: "Música favorita", risky: false }
  ];

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Privacidade • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Simulador de Exposição</h2>

        <div class="profile-card">
          <div class="profile-avatar">👤</div>
          <div>
            <strong>João Silva</strong>
            <p>Perfil público</p>
          </div>
        </div>

        <p class="content-text">Selecione as informações que podem representar risco quando publicadas em um perfil aberto.</p>

        <div class="privacy-select-list">
          ${items.map(item => privacyOptionButton(item.key, item.label)).join("")}
        </div>

        <div class="actions">
          <button class="btn" onclick="finishExposureSimulator('${id}')">ANALISAR EXPOSIÇÃO</button>
        </div>
      </div>
    </section>
  `;
}

function privacyOptionButton(key, label) {
  const selected = window.exposureSelected && window.exposureSelected.includes(key);
  return `
    <button class="privacy-option ${selected ? "selected" : ""}" onclick="toggleExposureOption('${key}')">
      ${selected ? "✓" : "□"} ${label}
    </button>
  `;
}

function toggleExposureOption(key) {
  window.exposureSelected = window.exposureSelected || [];
  if (window.exposureSelected.includes(key)) {
    window.exposureSelected = window.exposureSelected.filter(item => item !== key);
  } else {
    window.exposureSelected.push(key);
  }

  const mission = MISSIONS.find(m => m.id === "privacy");
  const percent = Math.round(((currentSlide + 1) / mission.slides.length) * 100);
  renderExposureSimulator("privacy", percent);
}

function finishExposureSimulator(id) {
  const risky = ["telefone", "localizacao", "escola", "cidade"];
  const selected = window.exposureSelected || [];
  const correct = risky.every(item => selected.includes(item)) && selected.every(item => risky.includes(item));

  window.exposureSelected = [];

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Exposição Identificada" : "⚠️ Análise Parcial"}</h2>
        <p class="content-text">
          Informações como telefone, localização, escola e cidade podem facilitar golpes, abordagens indevidas e engenharia social.
        </p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Excelente avaliação, Agente." : "Algumas informações aparentemente simples também podem gerar riscos quando combinadas."}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function renderPermissionsAuditor(id, percent) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Privacidade • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Auditor de Aplicativos</h2>

        <div class="app-permission-card">
          <div class="app-icon">💡</div>
          <div>
            <strong>App Lanterna Plus</strong>
            <p>Solicita acesso a:</p>
            <ul>
              <li>Microfone</li>
              <li>Contatos</li>
              <li>Localização</li>
            </ul>
          </div>
        </div>

        <p class="content-text">Essas permissões fazem sentido para um aplicativo de lanterna?</p>

        <div class="actions">
          <button class="btn" onclick="answerPermissionsAuditor('${id}', true)">NÃO, SÃO EXCESSIVAS</button>
          <button class="btn secondary" onclick="answerPermissionsAuditor('${id}', false)">SIM, SÃO NORMAIS</button>
        </div>
      </div>
    </section>
  `;
}

function answerPermissionsAuditor(id, correct) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Auditoria Correta" : "❌ Permissão Arriscada"}</h2>
        <p class="content-text">
          Um app de lanterna não precisa acessar contatos, microfone ou localização. Permissões desnecessárias podem expor dados pessoais.
        </p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Boa decisão. Permissões devem ser compatíveis com a função do aplicativo." : "Sempre desconfie quando um app pede mais acesso do que precisa."}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function renderPrivacyCase(id, percent) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Privacidade • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Caso João</h2>

        <div class="case-box">
          <p>João publicou uma foto do crachá da escola, marcou a localização e comentou que sai de casa todos os dias às 06h30.</p>
        </div>

        <p class="content-text">Quais riscos existem nessa publicação?</p>

        <div class="actions">
          <button class="btn secondary" onclick="answerPrivacyCase('${id}', false)">Apenas exposição pessoal</button>
          <button class="btn secondary" onclick="answerPrivacyCase('${id}', false)">Apenas risco de roubo de identidade</button>
          <button class="btn" onclick="answerPrivacyCase('${id}', true)">Todas as anteriores</button>
        </div>
      </div>
    </section>
  `;
}

function answerPrivacyCase(id, correct) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Riscos Avaliados" : "⚠️ Risco Subestimado"}</h2>
        <p class="content-text">
          A publicação expõe rotina, localização, vínculo escolar e dados visuais. Isso pode facilitar engenharia social e uso indevido de informações.
        </p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Informações isoladas podem parecer inofensivas, mas juntas podem revelar muito.
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}


function renderPhishingSimulation(id, percent) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Anti-Phishing • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Mensagem Suspeita</h2>

        <div class="message-sim">
          <div class="message-header">Banco Digital</div>
          <p>Detectamos atividade suspeita em sua conta.</p>
          <p>Clique imediatamente no link abaixo para evitar o bloqueio.</p>
          <p class="fake-link">www.bancoseguro-premio.com</p>
        </div>

        <p class="content-text">Essa mensagem parece confiável?</p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Analise urgência, link e solicitação antes de responder.
        </div>

        <div class="actions">
          <button class="btn secondary" onclick="answerPhishingSimulation('${id}', false)">NÃO, É SUSPEITA</button>
          <button class="btn" onclick="answerPhishingSimulation('${id}', true)">SIM, É CONFIÁVEL</button>
        </div>
      </div>
    </section>
  `;
}

function answerPhishingSimulation(id, trusted) {
  const correct = !trusted;
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Ameaça Identificada" : "❌ Golpe Não Detectado"}</h2>
        <p class="content-text">
          Essa mensagem apresenta sinais de phishing: urgência exagerada, ameaça de bloqueio e link suspeito.
        </p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Excelente análise, Agente." : "Cuidado. Golpes frequentemente usam pressão para induzir cliques."}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function renderEmailInvestigation(id, percent) {
  window.evidenceFound = window.evidenceFound || [];

  const total = 4;
  const found = window.evidenceFound.length;
  const threatWidth = Math.max(15, 100 - found * 22);

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Anti-Phishing • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Investigação Digital</h2>

        <div class="fake-email">
          <p><strong>De:</strong> suporte@micr0soft-security.net</p>
          <p><strong>Assunto:</strong> URGENTE - Sua conta será bloqueada</p>
          <p>Sua conta será suspensa em 24 horas. Clique no link abaixo para confirmar sua senha.</p>
          <p class="fake-link">http://seguranca-login-verificacao.net</p>
        </div>

        <p class="small">Radar de ameaça</p>
        <div class="threat-meter"><div class="threat-fill" style="width:${threatWidth}%"></div></div>
        <p class="small">Evidências encontradas: ${found}/${total}</p>

        <div class="evidence-list">
          ${evidenceButton("dominio", "Domínio estranho no remetente")}
          ${evidenceButton("urgencia", "Tom de urgência exagerado")}
          ${evidenceButton("senha", "Pedido de confirmação de senha")}
          ${evidenceButton("link", "Link suspeito")}
        </div>

        <div class="actions">
          <button class="btn" onclick="finishEmailInvestigation('${id}')" ${found < total ? "disabled" : ""}>CONCLUIR INVESTIGAÇÃO</button>
        </div>
      </div>
    </section>
  `;
}

function evidenceButton(key, label) {
  const found = window.evidenceFound && window.evidenceFound.includes(key);
  return `
    <button class="evidence-item ${found ? "found" : ""}" onclick="markEvidence('${key}')">
      ${found ? "✓" : "□"} ${label}
    </button>
  `;
}

function markEvidence(key) {
  window.evidenceFound = window.evidenceFound || [];
  if (!window.evidenceFound.includes(key)) {
    window.evidenceFound.push(key);
  }
  const mission = MISSIONS.find(m => m.id === "phishing");
  const percent = Math.round(((currentSlide + 1) / mission.slides.length) * 100);
  renderEmailInvestigation("phishing", percent);
}

function finishEmailInvestigation(id) {
  window.evidenceFound = [];
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>✅ Evidências Coletadas</h2>
        <p class="content-text">Você identificou os principais sinais do golpe e reduziu o nível de ameaça.</p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Boa investigação. A atenção aos detalhes é essencial contra phishing.
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function renderSocialEngineeringCase(id, percent) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Anti-Phishing • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Caso Prático</h2>

        <div class="case-box">
          <p>Você recebe uma ligação.</p>
          <p>A pessoa afirma ser do banco e solicita o código recebido por SMS para "cancelar uma compra suspeita".</p>
        </div>

        <p class="content-text">O que você deve fazer?</p>

        <div class="actions">
          <button class="btn secondary" onclick="answerSocialCase('${id}', false)">INFORMAR O CÓDIGO</button>
          <button class="btn" onclick="answerSocialCase('${id}', true)">ENCERRAR A LIGAÇÃO</button>
        </div>
      </div>
    </section>
  `;
}

function answerSocialCase(id, correct) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Decisão Segura" : "❌ Decisão Arriscada"}</h2>
        <p class="content-text">
          Códigos de autenticação não devem ser compartilhados. A atitude correta é encerrar a ligação e verificar pelos canais oficiais.
        </p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Excelente decisão, Agente." : "Nunca compartilhe códigos recebidos por SMS ou aplicativo."}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">INICIAR QUIZ</button>
        </div>
      </div>
    </section>
  `;
}


function renderPasswordClassify(id, percent) {
  const examples = [
    { password: "123456", correct: "fraca", reason: "É curta, previsível e muito utilizada." },
    { password: "abc123", correct: "fraca", reason: "Usa uma sequência simples e fácil de adivinhar." },
    { password: "T#9wP!2Lx@84", correct: "forte", reason: "Tem bom tamanho e mistura letras, números e símbolos." }
  ];

  const current = examples[window.passwordChallengeIndex || 0];

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Firewall • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Detector de Senhas</h2>
        <p class="content-text">Classifique a senha abaixo como forte ou fraca.</p>

        <div class="classify-card">${current.password}</div>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Observe se a senha é previsível, curta ou se utiliza combinações variadas.
        </div>

        <div class="actions">
          <button class="btn" onclick="answerPasswordClassify('${id}', 'forte')">FORTE</button>
          <button class="btn secondary" onclick="answerPasswordClassify('${id}', 'fraca')">FRACA</button>
        </div>
      </div>
    </section>
  `;
}

function answerPasswordClassify(id, answer) {
  const examples = [
    { password: "123456", correct: "fraca", reason: "É curta, previsível e muito utilizada." },
    { password: "abc123", correct: "fraca", reason: "Usa uma sequência simples e fácil de adivinhar." },
    { password: "T#9wP!2Lx@84", correct: "forte", reason: "Tem bom tamanho e mistura letras, números e símbolos." }
  ];

  const index = window.passwordChallengeIndex || 0;
  const current = examples[index];
  const correct = answer === current.correct;

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Análise Correta" : "❌ Análise Incorreta"}</h2>
        <p class="content-text">${current.reason}</p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Boa leitura, Agente." : "Revise os sinais de uma senha segura."}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextPasswordClassify('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function nextPasswordClassify(id) {
  window.passwordChallengeIndex = (window.passwordChallengeIndex || 0) + 1;

  if (window.passwordChallengeIndex >= 3) {
    window.passwordChallengeIndex = 0;
    nextSlide(id);
  } else {
    const mission = MISSIONS.find(m => m.id === id);
    const percent = Math.round(((currentSlide + 1) / mission.slides.length) * 100);
    renderPasswordClassify(id, percent);
  }
}

function renderPasswordLab(id, percent) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Missão Firewall • ${percent}%</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>Laboratório de Senhas</h2>
        <p class="content-text">Digite uma senha e veja como o CyberShield avalia sua força.</p>

        <div class="password-lab">
          <label for="passwordInput">Senha de teste</label>
          <input id="passwordInput" type="text" placeholder="Digite uma senha" oninput="evaluatePassword()" />

          <div class="strength-box">
            <div class="strength-title" id="strengthLabel">Aguardando análise</div>
            <div class="strength-meter">
              <div class="strength-fill" id="strengthFill"></div>
            </div>
            <div class="check-list">
              <span id="checkLength" class="no">□ 8 ou mais caracteres</span>
              <span id="checkUpper" class="no">□ Letra maiúscula</span>
              <span id="checkLower" class="no">□ Letra minúscula</span>
              <span id="checkNumber" class="no">□ Número</span>
              <span id="checkSymbol" class="no">□ Símbolo especial</span>
            </div>
          </div>
        </div>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Uma senha forte combina comprimento, variedade e baixa previsibilidade.
        </div>

        <div class="actions">
          <button class="btn" onclick="nextSlide('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function evaluatePassword() {
  const value = document.getElementById("passwordInput").value;
  const checks = {
    length: value.length >= 8,
    upper: /[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(value),
    lower: /[a-záéíóúâêôãõç]/.test(value),
    number: /[0-9]/.test(value),
    symbol: /[^A-Za-z0-9ÁÉÍÓÚÂÊÔÃÕÇáéíóúâêôãõç]/.test(value)
  };

  const score = Object.values(checks).filter(Boolean).length;
  const label = document.getElementById("strengthLabel");
  const fill = document.getElementById("strengthFill");

  setCheck("checkLength", checks.length, "8 ou mais caracteres");
  setCheck("checkUpper", checks.upper, "Letra maiúscula");
  setCheck("checkLower", checks.lower, "Letra minúscula");
  setCheck("checkNumber", checks.number, "Número");
  setCheck("checkSymbol", checks.symbol, "Símbolo especial");

  fill.className = "strength-fill";

  if (!value) {
    label.textContent = "Aguardando análise";
    return;
  }

  if (score <= 2) {
    label.textContent = "🔴 Senha Fraca";
    fill.classList.add("weak");
  } else if (score <= 4) {
    label.textContent = "🟡 Senha Média";
    fill.classList.add("medium");
  } else {
    label.textContent = "🟢 Senha Forte";
    fill.classList.add("strong");
  }
}

function setCheck(id, ok, text) {
  const el = document.getElementById(id);
  el.textContent = `${ok ? "✓" : "□"} ${text}`;
  el.className = ok ? "ok" : "no";
}


function nextSlide(id) {
  const mission = MISSIONS.find(m => m.id === id);

  if (currentSlide < mission.slides.length - 1) {
    currentSlide++;
    renderMissionSlide(id);
  } else {
    renderQuiz(id);
  }
}

function renderQuiz(id) {
  const mission = MISSIONS.find(m => m.id === id);
  const q = mission.quiz[currentQuestion];
  selectedOption = null;

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Quiz: ${mission.title} • Pergunta ${currentQuestion + 1}/${mission.quiz.length}</p>
        <div class="progress-line"><div style="width:${Math.round(((currentQuestion + 1) / mission.quiz.length) * 100)}%"></div></div>

        <h2>${q.question}</h2>
        <p class="small">Vale 20 XP</p>

        <div>
          ${q.options.map((option, index) => `
            <button class="option" onclick="selectOption(${index})" id="option-${index}">
              ${option}
            </button>
          `).join("")}
        </div>

        <div class="actions">
          <button class="btn" onclick="confirmAnswer('${id}')">CONFIRMAR RESPOSTA</button>
        </div>
      </div>
    </section>
  `;
}

function selectOption(index) {
  selectedOption = index;
  document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
  document.getElementById(`option-${index}`).classList.add("selected");
}

function confirmAnswer(id) {
  if (selectedOption === null) {
    alert("Selecione uma alternativa.");
    return;
  }

  const mission = MISSIONS.find(m => m.id === id);
  const q = mission.quiz[currentQuestion];
  const correct = selectedOption === q.correct;

  if (correct) quizScore++;

  document.querySelectorAll(".option").forEach((el, index) => {
    el.disabled = true;
    if (index === q.correct) el.classList.add("correct");
    if (index === selectedOption && !correct) el.classList.add("wrong");
  });

  setTimeout(() => renderQuestionFeedback(id, correct, q.feedback), 450);
}

function renderQuestionFeedback(id, correct, feedback) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Correto" : "❌ Incorreto"}</h2>
        <p class="content-text">${feedback}</p>
        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Excelente análise, Agente." : "Observe novamente os conceitos antes de avançar."}
        </div>
        <div class="actions">
          <button class="btn" onclick="nextQuestion('${id}')">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function nextQuestion(id) {
  const mission = MISSIONS.find(m => m.id === id);

  if (currentQuestion < mission.quiz.length - 1) {
    currentQuestion++;
    renderQuiz(id);
  } else {
    renderMissionResult(id);
  }
}

function renderMissionResult(id) {
  const mission = MISSIONS.find(m => m.id === id);
  const percent = Math.round((quizScore / mission.quiz.length) * 100);
  const approved = percent >= 70;

  if (approved && !state.completedMissions.includes(id)) {
    state.xp += mission.xp;
    state.completedMissions.push(id);
    const newAchievement = unlockAchievementForMission(id);
    unlockNextMission(id);
    saveState();
    window.lastAchievement = newAchievement;
  }

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${approved ? "Missão Concluída" : "Missão Falhou"}</h2>
        <div class="result-score">${percent}%</div>

        <p class="content-text">
          ${approved
            ? `Parabéns, Agente. Você recebeu +${mission.xp} XP e desbloqueou a próxima missão.`
            : "Você precisa atingir pelo menos 70% para avançar. Revise o conteúdo e tente novamente."}
        </p>

        ${approved && window.lastAchievement ? `
          <div class="achievement-unlocked">
            <div class="achievement-icon-big">${window.lastAchievement.icon}</div>
            <div>
              <strong>Conquista desbloqueada</strong>
              <span>${window.lastAchievement.title}</span>
            </div>
          </div>
        ` : ""}

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${approved
            ? "Fundamentos dominados. A próxima etapa do treinamento está disponível."
            : "O treinamento ainda não foi concluído. Tente novamente para reforçar sua defesa."}
        </div>

        <div class="actions">
          ${approved ? `<button class="btn success" onclick="renderMissionCenter()">VOLTAR AO CENTRO DE MISSÕES</button>` : `<button class="btn" onclick="startMission('${id}')">TENTAR NOVAMENTE</button>`}
        </div>
      </div>
    </section>
  `;
}


const OPERATION_QUESTIONS = [
  {
    title: "Incidente 1 — Acesso Desconhecido",
    icon: "🔑",
    scenario: "Sua rede social informa que sua conta foi acessada de um dispositivo desconhecido.",
    question: "Qual deve ser sua primeira ação?",
    options: ["Ignorar o alerta", "Alterar a senha e ativar 2FA", "Postar que foi invadido", "Criar uma nova conta"],
    correct: 1,
    feedback: "Alterar a senha e ativar 2FA reduz o risco de novo acesso indevido."
  },
  {
    title: "Incidente 2 — E-mail Suspeito",
    icon: "📧",
    scenario: "Você recebe um e-mail de suporte@micr0soft-security.net dizendo que sua conta será bloqueada em 24 horas.",
    question: "Qual elemento indica possível fraude?",
    options: ["O domínio suspeito do remetente", "O horário da mensagem", "O tamanho do e-mail", "A cor da interface"],
    correct: 0,
    feedback: "Domínios falsos ou parecidos com marcas conhecidas são sinais comuns de phishing."
  },
  {
    title: "Incidente 3 — Código SMS",
    icon: "📱",
    scenario: "Uma pessoa afirma ser do banco e pede o código de verificação recebido por SMS.",
    question: "O que você deve fazer?",
    options: ["Informar o código", "Enviar apenas metade", "Encerrar o contato e verificar pelo canal oficial", "Mandar o código por e-mail"],
    correct: 2,
    feedback: "Códigos de autenticação nunca devem ser compartilhados."
  },
  {
    title: "Incidente 4 — Senha Fraca",
    icon: "🔐",
    scenario: "Um colega usa a senha escola123 em todas as contas.",
    question: "Qual é o principal risco?",
    options: ["A senha ser difícil de lembrar", "Se uma conta vazar, outras também podem ser acessadas", "O celular ficar lento", "O Wi-Fi parar de funcionar"],
    correct: 1,
    feedback: "Reutilizar senhas aumenta o impacto de um vazamento."
  },
  {
    title: "Incidente 5 — Perfil Público",
    icon: "🔒",
    scenario: "Um perfil público mostra telefone, escola, cidade e localização em tempo real.",
    question: "Qual é o maior problema?",
    options: ["Poucas curtidas", "Exposição de dados pessoais e rotina", "Foto com baixa qualidade", "Falta de hashtags"],
    correct: 1,
    feedback: "Dados pessoais e rotina podem ser usados em golpes e engenharia social."
  },
  {
    title: "Incidente 6 — Link Encurtado",
    icon: "🔗",
    scenario: "Você recebe uma promoção dizendo: 'Ganhe um celular agora' com um link encurtado desconhecido.",
    question: "Qual atitude é mais segura?",
    options: ["Clicar para testar", "Enviar para amigos", "Verificar a promoção em canais oficiais", "Inserir dados rapidamente"],
    correct: 2,
    feedback: "Promoções suspeitas devem ser verificadas em canais oficiais."
  },
  {
    title: "Incidente 7 — Permissões Excessivas",
    icon: "📲",
    scenario: "Um app de lanterna solicita acesso a contatos, microfone e localização.",
    question: "O que isso indica?",
    options: ["Permissões possivelmente excessivas", "Funcionamento normal", "Atualização obrigatória", "Senha fraca"],
    correct: 0,
    feedback: "Apps devem pedir apenas permissões compatíveis com sua função."
  },
  {
    title: "Incidente 8 — Pedido de Senha",
    icon: "⚠️",
    scenario: "Uma mensagem no WhatsApp diz ser do suporte da escola e pede sua senha para atualizar cadastro.",
    question: "Qual decisão é correta?",
    options: ["Enviar a senha", "Enviar apenas se conhecer a escola", "Não informar senha e verificar por canal oficial", "Mandar a senha depois"],
    correct: 2,
    feedback: "Senhas não devem ser compartilhadas por mensagens."
  },
  {
    title: "Incidente 9 — Documento Exposto",
    icon: "🪪",
    scenario: "Uma pessoa posta foto de um documento de matrícula com dados pessoais visíveis.",
    question: "Qual risco isso gera?",
    options: ["Roubo de identidade ou golpes com dados pessoais", "Aumento de seguidores", "Melhor organização do perfil", "Nenhum risco"],
    correct: 0,
    feedback: "Documentos podem conter dados úteis para golpes e fraudes."
  },
  {
    title: "Incidente 10 — Decisão Final",
    icon: "🛡",
    scenario: "Você recebe uma mensagem urgente com link, promessa de prêmio e pedido de dados pessoais.",
    question: "Qual é a melhor resposta?",
    options: ["Clicar rapidamente", "Ignorar os sinais e preencher", "Não clicar, analisar sinais e verificar a fonte", "Compartilhar com todos"],
    correct: 2,
    feedback: "A melhor defesa é analisar sinais de risco e validar a fonte antes de agir."
  }
];

function startOperation() {
  showTopbar(true);
  window.operationIndex = 0;
  window.operationScore = 0;
  selectedOption = null;
  renderOperationIntro();
}

function renderOperationIntro() {
  showTopbar(true);

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Operação CyberShield</p>
        <div class="visual-placeholder">⭐</div>
        <h2>Avaliação Final</h2>

        <p class="content-text">
          Agente, você concluiu o treinamento básico. Agora enfrentará 10 incidentes digitais.
          Para receber o título de Agente CyberShield, é necessário atingir pelo menos 70% de acertos.
        </p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Analise cada cenário com atenção. Esta operação avalia tudo que você aprendeu.
        </div>

        <div class="actions">
          <button class="btn" onclick="renderOperationQuestion()">INICIAR OPERAÇÃO</button>
          <button class="btn secondary" onclick="renderMissionCenter()">VOLTAR</button>
        </div>
      </div>
    </section>
  `;
}

function renderOperationQuestion() {
  showTopbar(true);
  selectedOption = null;

  const index = window.operationIndex || 0;
  const item = OPERATION_QUESTIONS[index];
  const percent = Math.round(((index + 1) / OPERATION_QUESTIONS.length) * 100);

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <p class="small">Operação CyberShield • Incidente ${index + 1}/${OPERATION_QUESTIONS.length}</p>
        <div class="progress-line"><div style="width:${percent}%"></div></div>

        <h2>${item.icon} ${item.title}</h2>

        <div class="operation-scenario">
          <strong>Cenário:</strong>
          <p>${item.scenario}</p>
        </div>

        <h3>${item.question}</h3>

        <div>
          ${item.options.map((option, optionIndex) => `
            <button class="option" onclick="selectOption(${optionIndex})" id="option-${optionIndex}">
              ${option}
            </button>
          `).join("")}
        </div>

        <div class="actions">
          <button class="btn" onclick="confirmOperationAnswer()">CONFIRMAR DECISÃO</button>
        </div>
      </div>
    </section>
  `;
}

function confirmOperationAnswer() {
  if (selectedOption === null) {
    alert("Selecione uma alternativa.");
    return;
  }

  const index = window.operationIndex || 0;
  const item = OPERATION_QUESTIONS[index];
  const correct = selectedOption === item.correct;

  if (correct) {
    window.operationScore = (window.operationScore || 0) + 1;
  }

  document.querySelectorAll(".option").forEach((el, optionIndex) => {
    el.disabled = true;
    if (optionIndex === item.correct) el.classList.add("correct");
    if (optionIndex === selectedOption && !correct) el.classList.add("wrong");
  });

  setTimeout(() => renderOperationFeedback(correct, item.feedback), 450);
}

function renderOperationFeedback(correct, feedback) {
  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${correct ? "✅ Incidente Contido" : "⚠️ Resposta Insegura"}</h2>
        <p class="content-text">${feedback}</p>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${correct ? "Boa decisão operacional, Agente." : "Analise novamente os sinais de risco antes de agir."}
        </div>

        <div class="actions">
          <button class="btn" onclick="nextOperationQuestion()">CONTINUAR</button>
        </div>
      </div>
    </section>
  `;
}

function nextOperationQuestion() {
  window.operationIndex = (window.operationIndex || 0) + 1;

  if (window.operationIndex >= OPERATION_QUESTIONS.length) {
    renderOperationResult();
    return;
  }

  renderOperationQuestion();
}

function renderOperationResult() {
  const mission = MISSIONS.find(m => m.id === "operation");
  const score = window.operationScore || 0;
  const total = OPERATION_QUESTIONS.length;
  const percent = Math.round((score / total) * 100);
  const approved = percent >= 70;

  if (approved && !state.completedMissions.includes("operation")) {
    state.xp += mission.xp;
    state.completedMissions.push("operation");
    const newAchievement = unlockAchievementForMission("operation");
    saveState();
    window.lastAchievement = newAchievement;
  }

  app.innerHTML = `
    <section class="screen">
      <div class="card">
        <h2>${approved ? "Operação Concluída" : "Operação Reprovada"}</h2>
        ${approved ? `
          <div class="final-rank">
            <span>CLASSIFICAÇÃO FINAL</span>
            <strong>AGENTE CYBERSHIELD</strong>
          </div>
        ` : ""}
        <div class="result-score">${percent}%</div>

        <p class="content-text">Você acertou ${score} de ${total} incidentes.</p>

        <p class="content-text">
          <strong>Resultado:</strong> ${approved ? "Aprovado — Agente CyberShield" : "Reprovado — treinamento necessário"}
        </p>

        <p class="content-text">
          ${approved
            ? `Parabéns, Agente. Você recebeu o título de Agente CyberShield e ganhou +${mission.xp} XP.`
            : "Você precisa atingir pelo menos 70% para receber o título de Agente CyberShield."}
        </p>

        ${approved && window.lastAchievement ? `
          <div class="achievement-unlocked">
            <div class="achievement-icon-big">${window.lastAchievement.icon}</div>
            <div>
              <strong>Conquista desbloqueada</strong>
              <span>${window.lastAchievement.title}</span>
            </div>
          </div>
        ` : ""}

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          ${approved
            ? "Parabéns. Você concluiu a formação e recebeu o título de Agente CyberShield."
            : "Revise as missões anteriores e tente novamente."}
        </div>

        <div class="actions">
          ${approved ? `<button class="btn success" onclick="renderCertificate()">VER CERTIFICADO</button>` : `<button class="btn" onclick="startOperation()">TENTAR NOVAMENTE</button>`}
          <button class="btn secondary" onclick="renderMissionCenter()">CENTRO DE MISSÕES</button>
        </div>
      </div>
    </section>
  `;

  window.operationIndex = 0;
  window.operationScore = 0;
}

function renderCertificate() {
  showTopbar(true);
  const today = new Date().toLocaleDateString("pt-BR");

  app.innerHTML = `
    <section class="screen screen-wide">
      <div class="card certificate-card" id="certificateArea">
        <div class="certificate-emblem">🛡</div>
        <h2>Certificado de Conclusão</h2>
        <p class="subtitle">CyberShield: Aprenda a se Proteger no Mundo Digital</p>

        <p class="certificate-text">Certificamos que</p>
        <h3 class="certificate-name">${state.name}</h3>
        <p class="certificate-text">concluiu com sucesso o treinamento de Segurança da Informação.</p>

        <div class="certificate-info">
          <p><strong>Classificação:</strong> Agente CyberShield</p>
          <p><strong>XP Final:</strong> ${state.xp} XP</p>
          <p><strong>Conquistas:</strong> ${state.achievements.length}/5</p>
          <p><strong>Data:</strong> ${today}</p>
        </div>

        <div class="certificate-seal">
          <span>ACADEMIA CYBERSHIELD</span>
          <strong>CONHECIMENTO É SUA PRIMEIRA DEFESA</strong>
        </div>

        <div class="cyra-box">
          <span class="cyra-label">◉ CYRA</span>
          Certificação validada. O agente demonstrou domínio dos fundamentos de Segurança da Informação.
        </div>
      </div>

      <div class="card certificate-actions">
        <div class="actions">
          <button class="btn" onclick="window.print()">IMPRIMIR / SALVAR PDF</button>
          <button class="btn secondary" onclick="renderMissionCenter()">VOLTAR AO CENTRO DE MISSÕES</button>
        </div>
      </div>
    </section>
  `;
}


function unlockAchievementForMission(missionId) {
  const achievement = ACHIEVEMENTS.find(item => item.mission === missionId);

  if (!achievement) return null;

  if (!state.achievements.includes(achievement.id)) {
    state.achievements.push(achievement.id);
    return achievement;
  }

  return null;
}

function renderAchievementBadge(achievement) {
  const unlocked = state.achievements.includes(achievement.id);

  return `
    <div class="achievement-badge ${unlocked ? "unlocked" : "locked"}">
      <div class="achievement-icon">${unlocked ? achievement.icon : "⬛"}</div>
      <div>
        <strong>${achievement.title}</strong>
        <span>${unlocked ? achievement.desc : "Conquista bloqueada"}</span>
      </div>
    </div>
  `;
}

function unlockNextMission(id) {
  const index = MISSIONS.findIndex(m => m.id === id);
  const next = MISSIONS[index + 1];

  if (next && !state.unlockedMissions.includes(next.id)) {
    state.unlockedMissions.push(next.id);
  }

  if (id === "privacy" && !state.unlockedMissions.includes("operation")) {
    state.unlockedMissions.push("operation");
  }
}

function resetProgress() {
  if (!confirm("Deseja reiniciar todo o progresso?")) return;
  const name = state.name;
  state = defaultState();
  state.name = name;
  saveState();
  renderMissionCenter();
}

renderHome();
