/* =====================================================================
   data.js | DADOS DOS PROJETOS
   Para adicionar um projeto, basta incluir um novo objeto no array.
   O carrossel 3D ajusta sozinho o raio e o ângulo conforme a quantidade.

   Campos:
     id          identificador único (string)
     icon        monograma exibido no card (1 a 2 letras)
     status      selo do card (ex.: "API", "Em grupo", "Em breve")
     title       nome do projeto
     subtitle    linha curta abaixo do título
     summary     resumo exibido no card
     description texto longo exibido no painel de detalhes
     highlights  lista de destaques (painel de detalhes)
     tags        tecnologias
     links       [{ label, url }]  (deixe [] se ainda não houver links)
   ===================================================================== */
(function (global) {
  'use strict';

  const projects = [
    {
      id: 'task-diet',
      icon: 'TD',
      status: 'API (Solo)',
      title: 'Task Diet',
      subtitle: 'API de receitas com filtros alimentares',
      summary:
        'API de receitas que permite filtrar pratos por restrição alimentar, ajudando quem precisa seguir uma dieta específica a encontrar opções adequadas.',
      description:
        'O Task Diet é uma API de receitas com filtros por restrição alimentar. O objetivo é facilitar a busca por pratos compatíveis com a necessidade de cada pessoa, expondo endpoints REST simples de consumir por qualquer interface.',
      highlights: [
        'Filtros por restrição alimentar (ex.: vegetariano, sem glúten, sem lactose)',
        'API REST construída com FastAPI e documentação automática (OpenAPI/Swagger)',
        'Persistência de dados em SQLite',
        'Front-end em JavaScript consumindo a API',
      ],
      tags: ['FastAPI', 'SQLite', 'JavaScript', 'REST'],
      links: [
        { label: 'Código no GitHub', url: 'https://github.com/oliveiraalexandredaniel-lgtm/task-diet' },
      ],
    },
    {
      id: 'bot-vacinacao',
      icon: 'BV',
      status: 'API (Em grupo)',
      title: 'Bot de Vacinação',
      subtitle: 'Bot/API de agendamento e notificações',
      summary:
        'Bot/API desenvolvido em grupo na FATEC, com lógica de agendamento de vacinação e envio de notificações aos usuários.',
      description:
        'Projeto desenvolvido em equipe durante o curso na FATEC. Desenvolvi dados via Json (fazendo scrapping de páginas autorizadas), estes que continham as informações de vacinas por idade, afim do bot poder apresentar informações especificas sobre qual vacina o usuário deve tomar conforme sua idade, de crianças até idosos.',
      highlights: [
        'Lógica de agendamento de vacinação',
        'Notificações para os usuários',
        'Desenvolvimento colaborativo em grupo (Git/GitHub)',
        'Projeto acadêmico aplicado a um problema real',
      ],
      tags: ['Python', 'Bot', 'API', 'Agendamento', 'Trabalho em equipe'],
      links: [
        { label: 'Código no GitHub', url: 'https://github.com/PI-Nexus/Projeto-Integrador-I' },
      ],
    },
    {
     id: 'landing-dm',
     icon: 'DM',
     status: 'Web (Em grupo)',
     title: 'Landing Page DM',
     subtitle: 'Captação e pré-qualificação de clientes',
     summary:
       'Aplicação web de captação de clientes para cartões, com formulário em etapas e aprovação ou reprovação automática conforme as regras da empresa parceira.',
     description:
       'Projeto Integrador II da FATEC, feito em equipe com metodologia Scrum (3 sprints, Jira e GitHub). Fui encarregado de criar uma conexão do backend em python, com framework flask, com o java script usado no site, logo após fiz as condições referente a renda do cliente, fiz e conectei as paginas de validação/negação/analise, tudo conectado ao framework em python como java script.
       'Formulário em 4 etapas, com busca de endereço por CEP e máscaras de campos',
       'Aprovação e reprovação automáticas por tipo de cartão, renda e localização (UF da loja)',
       'Painel administrativo com dashboard, cadastro de parceiros e de vendedores',
       'Back-end Flask em camadas (rotas, services, repository) com MySQL, em Docker',
     ],
     tags: ['Python', 'Flask', 'MySQL', 'Docker', 'JavaScript', 'Scrum'],
     links: [
       { label: 'Código no GitHub', url: 'COLE_AQUI_O_LINK_DO_REPOSITORIO' },
       { label: 'Demonstração (YouTube)', url: 'https://youtu.be/BsbRDVgEaKY' },
     ],
   },
  ];

  global.PortfolioData = { projects };
})(window);
