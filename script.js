// Dados do conteúdo (extraídos do texto fornecido)
const conteudo = [
  // Conhecimentos Gerais
  {
    titulo: "1. Desafios do Estado de Direito</>",
    secao: "gerais",
    itens: [         
      "Formação histórica do Estado Democrático de Direito.",
      "Constituição Federal de 1988: direitos fundamentais, sociais e políticos, consolidação da democracia, representação política e participação cidadã.",
      "Relações entre os Poderes Executivo e Legislativo e os desafios da governabilidade.",
      "Judicialização de políticas públicas.",
      "Capacidades estatais e democracia.",
      "Efetivação e reparação de Direitos Humanos: demandas sociais históricas, autoritarismo, violência de Estado, memória, verdade e justiça."
    ]
  },
  {
    titulo: "2. Políticas Públicas",
    secao: "gerais",
    itens: [
      "Fundamentos de políticas públicas: conceitos e tipologias.",
      "Ciclos de políticas públicas: agenda, formulação, processos decisórios, implementação de planos, programas e projetos, monitoramento e avaliação.",
      "Levantamento, sistematização, análise e interpretação de dados quantitativos, qualitativos e indicadores de políticas públicas.",
      "Federalismo, descentralização e sistemas de políticas públicas no Brasil.",
      "Intersetorialidade e transversalidade.",
      "Transformação digital e seus impactos na sociedade e nas políticas públicas."
    ]
  },
  {
    titulo: "3. Ética e Integridade",
    secao: "gerais",
    itens: [
      "Princípios e valores éticos do serviço público, seus direitos e deveres.",
      "Governança pública e sistemas de governança.",
      "Transparência.",
      "Acesso à informação."
    ]
  },
  {
    titulo: "4. Diversidade e Inclusão",
    secao: "gerais",
    itens: [
      "Diversidade de sexo, gênero e sexualidade; diversidade étnico-racial; diversidade cultural.",
      "Desafios sociopolíticos da inclusão de grupos vulnerabilizados: crianças e adolescentes; idosos; LGBTQIA+; pessoas com deficiências; pessoas em situação de rua, povos indígenas, comunidades quilombolas e demais minorias sociais.",
      "Desigualdades e interseccionalidades."
    ]
  },
  {
    titulo: "5. Administração Pública Federal",
    secao: "gerais",
    itens: [
      "Princípios constitucionais e normas que regem a administração pública.",
      "Evolução das reformas da administração e do serviço público no Brasil e estrutura organizacional da Administração Pública Federal.",
      "Sistemas estruturantes da administração pública federal.",
      "Fundamentos das finanças públicas, tributação e do planejamento-orçamento (Plano Plurianual, Lei de Diretrizes Orçamentárias e Lei Orçamentária Anual)."
    ]
  },
  {
    titulo: "6. Trabalho e Tecnologia",
    secao: "gerais",
    itens: [
      "Evolução das relações de trabalho e uso de novas tecnologias.",
      "Inteligência Artificial, automação e produtividade no setor público.",
      "Limitações, riscos e problemas associados ao uso das novas tecnologias no setor público."
    ]
  },

  // Conhecimentos Específicos
  {
    titulo: "EIXO TEMÁTICO 1 – CIÊNCIA, TECNOLOGIA E SOCIEDADE (CTS)",
    secao: "especificos",
    itens: [
      "Paradigmas, conceitos, origens e evolução;",
      "Modelos e concepções de inovação tecnológica.",
      "Pensamento crítico sobre os impactos e responsabilidades sociais relacionados à ciência e tecnologia.",
      "Interações entre ciência, tecnologia, cultura e valores sociais.",
      "A relação entre desenvolvimento tecnológico e desenvolvimento social.",
      "Ética em pesquisa científica: comitês de ética, consentimento livre e esclarecido, integridade na produção de dados.",
      "Popularização da ciência, educação científica e engajamento público.",
      "Desigualdades no acesso à ciência e tecnologia: questões de gênero, raça e território.",
      "Ciência aberta, acesso livre à informação científica e reprodutibilidade."
    ]
  },
  {
    titulo: "EIXO TEMÁTICO 2 – POLÍTICAS PÚBLICAS DE CT&I",
    secao: "especificos",
    itens: [
      "Estrutura e funcionamento do Sistema Nacional de Ciência, Tecnologia e Inovação (SNCTI).",
      "Marco legal da CT&I no Brasil: Lei nº 13.243/2016 (Marco Legal da CT&I), Lei da Inovação, Lei do Bem.",
      "Instituições de fomento: CNPq, CAPES, FINEP, FNDCT, EMBRAPII.",
      "Modelos institucionais: Triângulo de Sábato, Hélice Tripla (universidade–indústria–governo).",
      "Programas de desenvolvimento tecnológico: histórico, desafios, Nova Indústria Brasil.",
      "Indicadores de CT&I: PINTEC/IBGE, indicadores nacionais.",
      "Contribuições da CT&I para os ODS e Agenda 2030.",
      "Governança, accountability e transparência na gestão pública."
    ]
  },
  {
    titulo: "EIXO TEMÁTICO 3 – GESTÃO DE PROJETOS EM CT&I",
    secao: "especificos",
    itens: [
      "Conceitos básicos de gestão de projetos em CT&I.",
      "Ciclo de vida: iniciação, planejamento, execução, monitoramento, encerramento.",
      "Gestão de escopo, tempo, custo, qualidade, riscos, recursos, comunicações, stakeholders.",
      "Ferramentas: Gráficos de Gantt, PERT/CPM, Matriz RACI, Kanban, SCRUM.",
      "Gestão da Inovação e do Conhecimento."
    ]
  },
  {
    titulo: "EIXO TEMÁTICO 4 – TICs & CIÊNCIA DE DADOS",
    secao: "especificos",
    itens: [
      "Fundamentos das TICs e transformação digital.",
      "Dados como ativo estratégico para políticas públicas.",
      "Inteligência artificial, aprendizado de máquina e análise preditiva.",
      "Ética, vieses algorítmicos e impactos sociais da IA.",
      "Governança de dados, interoperabilidade e LGPD.",
      "Visualização e interpretação de dados.",
      "Uso de dados para formulação, monitoramento e avaliação de políticas públicas.",
      "Dados abertos e transparência na gestão pública."
    ]
  },
  {
    titulo: "EIXO TEMÁTICO 5 – METODOLOGIA DA PESQUISA CIENTÍFICA",
    secao: "especificos",
    itens: [
      "Finalidades da pesquisa: básica, aplicada, exploratória, descritiva, explicativa.",
      "Abordagens: qualitativa, quantitativa, mista.",
      "Métodos: indutivo, dedutivo, hipotético-dedutivo.",
      "Tipos de pesquisa: estudos de caso, pesquisa-ação, levantamento, experimental.",
      "Revisão sistemática, bibliográfica e integrativa.",
      "Elementos do projeto: tema, problema, justificativa, objetivos, hipóteses, metodologia.",
      "Instrumentos: entrevistas, questionários, observação, análise documental.",
      "Redação científica, estrutura de artigos, normas ABNT, APA, Vancouver."
    ]
  }
];

// Função para gerar cards
function renderCards(secao, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const cards = conteudo.filter(item => item.secao === secao);

  cards.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <span>${item.titulo}</span>
        <i class="fas fa-chevron-down small-icon"></i>
      </div>
      <div class="card-body">
        <ul>
          ${item.itens.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `;
    container.appendChild(card);

    // Adiciona evento de expansão
    const header = card.querySelector('.card-header');
    const body = card.querySelector('.card-body');
    let isExpanded = false;

    header.addEventListener('click', () => {
      isExpanded = !isExpanded;
      body.style.display = isExpanded ? 'block' : 'none';
      header.querySelector('.small-icon').classList.toggle('fa-chevron-down', !isExpanded);
      header.querySelector('.small-icon').classList.toggle('fa-chevron-up', isExpanded);
    });
  });
}

// Busca em tempo real
document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();
  if (!query) {
    document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    return;
  }

  // Remove highlights anteriores
  document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));

  // Encontra e marca termos
  const allText = document.body.innerText.toLowerCase();
  const matches = [...allText.matchAll(new RegExp(`\\b${query}\\b`, 'gi'))];
  
  matches.forEach(match => {
    const element = match.input.substring(match.index, match.index + match[0].length);
    const span = document.createElement('span');
    span.className = 'highlight';
    span.textContent = match[0];
    
    const parent = document.elementFromPoint(
      window.pageXOffset + match.index,
      window.pageYOffset + match.index
    );
    if (parent && parent.parentElement) {
      parent.parentElement.replaceChild(span, parent);
    }
  });
});

// Menu Hamburger
document.getElementById('menuToggle').addEventListener('click', function () {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
});

// Inicializa
document.addEventListener("DOMContentLoaded", function () {
  renderCards('gerais', 'cards-gerais');
  renderCards('especificos', 'cards-especificos');

  // Scroll suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
});