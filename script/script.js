function toggleMoreLess(moreLess) {
    let show = moreLess.nextSibling;
    while (show && show.nodeType != 1) {
        show = show.nextSibling;
        if (show.classList.value == "line") {
            show = show.nextSibling;
            while (show && show.nodeType != 1) {
                show = show.nextSibling;
            }
        }
    }
    show.classList.toggle("none");

    if (moreLess.innerHTML === "Ver menos -") {
        moreLess.innerHTML = "Ver mais +";
    } else if (moreLess.innerHTML === "Ver mais +") {
        moreLess.innerHTML = "Ver menos -";
    }
}

const personal = [
    "Data de Nascimento: 13/01/1997",
    "E-mail: gustavo.rotta@hotmail.com",
];

const personalLinks = [
    {
        name: "Telefone: (81) 9 9735-9190",
        href: "https://api.whatsapp.com/send?phone=5581997359190",
        src: "https://bn02pap001files.storage.live.com/y4mC_fq3ZGxicE9uc3cnBV6ei0qVHYuT3ov6Dbx2ibhY4VJXq1jw762cKZMzXML6P4htnz2SnUFncFgvsdxRgGwLIO2x03U4LZOcFa6-U5gxszuBLO3EsohVbXmnyL9G1IiSxJfNrELXbqV34b_X0WK6V1iDvBoKyRFNxNoPQDE8wFsreWTp812U_EfrjcQ8i1A?width=450&height=428&cropmode=none",
    },
    {
        name: "https://www.linkedin.com/in/gustavo-rotta-6447b0163/",
        href: "https://www.linkedin.com/in/gustavo-rotta-6447b0163/",
        src: "https://bn02pap001files.storage.live.com/y4mXSqMeRvbmHd2PZ3tkyho1Z1jfqG_6PLm7NzH5KCKVeqRzHIB4mNdtKiJO-RXoy3-Tb7atl6qEcUk1unRSzR5MxgFRTH_yvDrN6qYMBz6EKC-CmU-FogmK57jQ2tKGozAi44ZOqn7SfUDTFUIqgvkp9Gpbbou2BqyOO9onjQk66yMpdgbxUS87czmdPEGf-Ju?width=450&height=428&cropmode=none",
    },
    {
        name: "https://github.com/GusRot",
        href: "https://github.com/GusRot",
        src: "https://bn02pap001files.storage.live.com/y4mfz4ITgsi8lZ7AASAiUrvXV9eICS12npEla7O_fCb5FHO_PBxRwd6ViK-VfbyFKkuBJCb0Qkop84TK_ddzqUrsSr5MdtnrPVhmGgaJHnldJuXaAsAVpOnZMVwgnFNm9FiHKGlf6naxr7EWT18fQ_WqVY-R6MYsW67CWtNLgoDCdl44-qP4CR068n_NjrCvdYE?width=256&height=243&cropmode=none",
    },
];

const objectives = [
    "Aprender e Ensinar",
    "Ampliar experi??ncia profissional.",
    "Crescer com a organiza????o.",
];

const languages = [
    {
        name: "Javascript",
        class: "javascript",
    },
    {
        name: "Typescript",
        class: "typescript",
    },
    {
        name: "ReactJS",
        class: "react",
    },
    {
        name: "HTML",
        class: "html5",
    },
    {
        name: "CSS",
        class: "css3",
    },
    {
        name: "SASS",
        class: "sass",
    },
    {
        name: "Bootstrap",
        class: "bootstrap",
    },
];

const professionalComplementary = [
    {
        title: "Consultor Financeiro Aut??nomo",
        period: "Agosto / 2020 ??? Junho / 2021",
        ativities: {
            ativitie:
                "Respons??vel por analisar e avaliar a vida financeira dos clientes utilizando as melhores op????es de produtos financeiros que o mercado brasileiro oferece de acordo com cada perfil.",
            objectives:
                "Desenvolver a melhor estrat??gia para os clientes atingirem os seus objetivos.",
            improve:
                "Conhecimentos avan??ados sobre o mercado financeiro e cultura de atendimento ao cliente com excel??ncia. ",
        },
    },
    {
        title: "Consultor Comercial STONE Pagamentos",
        period: "Janeiro / 2020 ??? Agosto / 2020",
        ativities: {
            ativitie:
                "Prospec????o e capta????o de clientes; Consultoria de adquir??ncia e assuntos relacionados; An??lises de carteira de clientes; Administra????o do funil de vendas e preven????o de churn. ",
            objectives:
                "Aumentar a base de clientes, auxiliar os clientes aprimorar seus neg??cios aumentando suas vendas, al??m de aumentar seu NPS.",
            improve:
                "Aprimorei habilidade de negocia????o ao lidar com diferentes perfis de clientes e entender suas reais necessidades. Aprendi a dar e receber feedbacks com comunica????o n??o-violenta.",
        },
    },
    {
        title: "Estagi??rio PCP CIPAN - VITAMASSA",
        period: "Julho / 2019 ??? Dezembro / 2019",
        ativities: {
            ativitie:
                "Respons??vel pelas atividades de planejamento e controle da produ????o; Utiliza????o do ERP Protheus no ressuprimento da f??brica; Realiza????o da melhoria cont??nua.",
            objectives:
                "Garantir os insumos na hora certa no local correto, al??m de um projeto de melhoria com a aplica????o do Seis Sigma no processo de Ressuprimento.",
            improve:
                "Trabalhar em uma equipe multidisciplinar para resolver problemas complexos de uma organiza????o.",
        },
    },
    {
        title: "Gerente Ciclo Consultoria - Empresa Junior ",
        period: "Dezembro / 2017 ??? Dezembro / 2018",
        ativities: {
            ativitie:
                "Negocia????o e Venda dos Servi??os; Planejamento e Elabora????o de Propostas; Representante em Evento; Monitoramento e Controle de Projetos.",
            objectives:
                "Aprimorar conhecimentos pr??ticos da comunidade estudantil, al??m dos conhecimentos te??ricos da faculdade.",
            improve:
                "Lidar com todos os aspectos de uma empresa real, atitude de dono da organiza????o para resolu????o dos problemas em qualquer ??mbito e entendimento de impactos em um aspecto pode interferir em outros.",
        },
    },
];

const professional = [
    {
        title: "Adobe Commerce Developer - Webjump",
        period: "Mar??o / 2022 ??? atualmente",
        ativities: {
            ativitie:
                "Empresa especializada em Adobe Commerce, em que atuo no desenvolvimento Magento. No meu dia a dia utilizo a estrutura MVC em um ambiente docker com versionamento no Bitbucket. Atualmente trabalhando com B2B",
            objectives: "Desenvolver r??pidas e eficientes storefronts",
            improve:
                "JS, KO, JQuery, LESS, XML, PHP, AJAX, Git, JIRA, LINUX, grunt",
        },
    },
    {
        title: "Desenvolvedor Web React",
        period: "Janeiro / 2021 ??? Atualmente",
        ativities: {
            ativitie:
                "Desenvolvimento de aplica????es front-end em projetos pessoais, manuten????o e implementa????o de novas funcionalidades. Mais de 20 projetos realizados e quase 300 commits que podem ser visualizados no Github: https://github.com/GusRot",
            objectives:
                "Desenvolver a melhor experiencia do usu??rio atrav??s de linhas de c??digos.",
            improve:
                "Javascript/ Typescript / ReactJS /HTML / CSS/ SASS / Bootstrap.",
        },
    },
];

const courses = [
    {
        name: "Front-End Developer ReactJS",
        institution: "Alura ??? 2022",
        description:
            "Desenvolver uma aplica????o completa utilizando as tecnologias citadas acima.",
        link: "https://1drv.ms/b/s!AvtEm98X2cVanfpDQeb6PJ1471Aj8g?e=2RA5Jj",
    },
    {
        name: "Magento Front-end",
        institution: "M.Academy ??? 2022",
        description:
            "Desenvolver aplica????es Adobe-Commerce usando: UiComponents / JS / KO / AJAX",
        link: "https://1drv.ms/u/s!AvtEm98X2cVanf4iRjndKa8BSn9b2w?e=TO6jQz",
    },
    {
        name: "Formula????o de um Planejamento Estrat??gico",
        institution: "Grupo Voitto ??? Janeiro / 2019",
        description:
            "Ferramentas para auxiliar na cria????o de um planejamento estrat??gico. Identificar oportunidades e se antecipar a riscos empresariais.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131676&authkey=ABapyVQR7KSZeKE&em=2",
    },
    {
        name: "Orat??ria e T??cnicas de Apresenta????o",
        institution: "Grupo Voitto ??? Janeiro / 2019",
        description:
            "Compreens??o do p??blico-alvo que se deseja comunicar, t??cnicas para uma melhor apresenta????o, respira????o, postura, comunica????o verbal e n??o-verbal.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131655&authkey=AK-EUDAuamcOp-Y&em=2",
    },
    {
        name: "Forma????o Master em MS Excel",
        institution: "Grupo Voitto ??? Janeiro / 2019",
        description:
            "Treinamento avan??ado com an??lise de grandes volumes de dados, tomadas de decis??es precisas, automatiza????o de c??lculos, gr??ficos din??micos e grava????o de macros.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131664&authkey=APlDz0cqGvIK50Y&em=2",
    },
];

const someProjects = [
    {
        title: "Adobe Commerce ??? Front-end Development",
        period: "Desenvolvimento Magento",
        ativities: [
            "HTML, CSS, JS, XML. (b??sico PHP).",
            "Less pre-processadores, padr??es de arquiteturas CSS, Cria????o de Mixins, UI responsivo.",
            "Biblioteca JQuery, JQuery Widgets, Requisi????es Ajax, fun????es ass??ncronas.",
            "Solu????es em UiComponents e Knockout(ko).",
            "SEO, accessibilidade, e performance em ambiente de produ????o.",
            "Desenvolvimento de blocos CMS e components page builder. ",
            "Contribui????o para reuni??es di??rias, planejamento de sprints e estimativas.",
            "Git versionamento e code reviews.",
            `Meus reposit??rios pessoais: 
            <a class="links" href="https://github.com/GusRot/Magento-Quick-Learn" target="blank">Repo1 </a>
            <a class="links" href="https://github.com/GusRot/Magento-Theme" target="blank">Repo2 </a>
            <a class="links" href="https://github.com/GusRot/Magento-Styles" target="blank">Repo3</a>
            `,
        ],
    },
    {
        title: "Projeto dt-money",
        period: "Desenvolvimento React, foram utilizados:",
        ativities: [
            "Function Components como padr??o.",
            "Typescript para um maior controle das vari??veis na aplica????o.",
            "Context para controlar as transa????es com vari??veis globais.",
            "Requisi????es de uma API de Transa????es do Usu??rio com a biblioteca Axios.",
            "API Simulada com biblioteca MirageJS.",
            "Utiliza????o do Storage para salvar os dados salvos pelo usu??rio. ",
            `Deploy com Vercel: <a class="links" href="https://dt-money-one.vercel.app" target="blank">Build Link</a> Reposit??rio: <a class="links" href="https://github.com/GusRot/DTMoney" target="blank">Link Repo</a>`,
        ],
    },
    {
        title: "Projeto e-commerce",
        period: "Desenvolvimento React, foram utilizados",
        ativities: [
            "Class Components como padr??o.",
            "REDUX para controlar produtos no carrinho com vari??veis globais.",
            "Requisi????es com o client Apollo de um endpoint desenvolvido em GRAPHQL.",
            "Styled componentes para manusear estados por props, como o dark-mode.",
            "Utiliza????o do REDUX-Persist para salvar os dados salvos pelo usu??rio. ",
            "React-router-dom para manusear as diferentes rotas(PLP, PDP, CartPage). ",
            `Deploy com Vercel (<a class="links" href="https://github.com/GusRot/e-commerce" target="blank">ler instru????es no reposit??rio</a>):`,
        ],
    },
    {
        title: "Projeto portif??lio ",
        period: "Desenvolvimento React - Todos os meus projetos em um link. ",
        ativities: [
            `Para visualizar o build do projeto. <a class="links" href="https://portifolio-gusrot.vercel.app" target="blank">[Acesse link aqui]</a> `,
        ],
    },
];

const complementaryIdioms = [
    {
        idiom: "Ingl??s",
        level: "Avan??ado",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131475&authkey=AOS_DPwXsIyfWxc&em=2",
    },
    {
        idiom: "Italiano",
        level: "B??sico",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2168002&authkey=ANitbVjIj2AqKWU&em=2",
    },
    {
        idiom: "Alem??o",
        level: "B??sico",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2167729&authkey=AHHfVIbgCHTMRNg&em=2",
    },
];

const complementary = [
    "Conhecimentos: Metodologia ??gil, Scrum, Lean, Kanban.",
    "Trabalho em equipe, proativo, resiliente, din??mico.",
    "Disponibilidade de mudar endere??o.",
];

window.onload = function () {
    const personalId = document.getElementById("personal");
    for (let i = 0; i < personal.length; i++) {
        personalId.innerHTML += `<li class="linha">${personal[i]}</li>`;
    }
    for (let i = 0; i < personalLinks.length; i++) {
        personalId.innerHTML += `<li class="linha">${personalLinks[i].name} 
        <p><a href=${personalLinks[i].href}} target="blank"><img class="logo" src=${personalLinks[i].src}></img></a></p>
    </li>`;
    }

    // const objectivesID = document.getElementById("objectives");
    // for (let i = 0; i < objectives.length; i++) {
    //     objectivesID.innerHTML += `<li class="linha">${objectives[i]}</li>`;
    // }

    const languagesID = document.getElementById("languages");
    for (let i = 0; i < languages.length; i++) {
        languagesID.innerHTML += `<li>
        <i class="devicon-${languages[i].class}-plain colored"></i>
        <p>${languages[i].name}</p>
    </li>`;
    }

    const professionalID = document.getElementById("professional");
    for (let i = 0; i < professional.length; i++) {
        professionalID.innerHTML += `<li>
        <p><strong>${professional[i].title}</strong>: ${professional[i].period} </p>
        <button class="show-more-less" onclick = "toggleMoreLess(this)">Ver menos -</button>
        <div>
            <p class="arrow-before"><em>
                <strong>Atividades:</strong>${professional[i].ativities.ativitie}<br>
                <strong>Objetivos:</strong> ${professional[i].ativities.objectives}<br>
                <strong>Aprendizados:</strong> ${professional[i].ativities.improve}
            </em></p>
        </div>
    </li> <br>`;
    }

    const coursesID = document.getElementById("courses");
    for (let i = 0; i < courses.length; i++) {
        coursesID.innerHTML += ` <li>
        <p><strong>${courses[i].name}</strong> - ${courses[i].institution} </p>
        <button class="show-more-less" onclick = "toggleMoreLess(this)">Ver mais +</button>
        <div class="none">
            <p class="arrow-before"><em>${courses[i].description}  </em> 
            <a class="links" href=${courses[i].link} width="476" height="288" frameborder="0" scrolling="no" target="blank">*Certificado</a></p>
        </div>
    </li>`;
    }

    const complementaryID = document.getElementById("complementary");
    for (let i = 0; i < complementary.length; i++) {
        complementaryID.innerHTML += `<li class="linha margin-t">${complementary[i]}</li>`;
    }
    for (let i = 0; i < complementaryIdioms.length; i++) {
        complementaryID.innerHTML += `<li class="linha">${complementaryIdioms[i].idiom} <strong>${complementaryIdioms[i].level} </strong>.   
        <a class="links" href=${complementaryIdioms[i].certificate}  width="476" height="288" frameborder="0" scrolling="no" target="blank">*Certificado</a>
    </li>`;
    }
};

const professionalCompID = document.getElementById("professionalComplementary");
for (let i = 0; i < professionalComplementary.length; i++) {
    professionalCompID.innerHTML += `<li>
        <p><strong>${professionalComplementary[i].title}</strong>: ${professionalComplementary[i].period} </p>
        <button class="show-more-less" onclick = "toggleMoreLess(this)">Ver menos -</button>
        <div>
            <p class="arrow-before"><em>
                <strong>Atividades:</strong>${professionalComplementary[i].ativities.ativitie}<br>
                <strong>Objetivos:</strong> ${professionalComplementary[i].ativities.objectives}<br>
                <strong>Aprendizados:</strong> ${professionalComplementary[i].ativities.improve}
            </em></p>
        </div>
    </li>         <br>
    `;
}

const projectsReact = document.getElementById("projectsReact");
for (let i = 0; i < someProjects.length; i++) {
    projectsReact.innerHTML += `<li>
        <p><strong>${someProjects[i].title}</strong>: ${someProjects[i].period} </p>
        <button class="show-more-less" onclick = "toggleMoreLess(this)">Ver menos -</button>
        <div id="activityProject${i}">
        </div>
        <br>
    </li> `;

    const activityProject = document.getElementById(`activityProject${i}`);
    for (let j = 0; j < someProjects[i].ativities.length; j++) {
        activityProject.innerHTML += `
            <p class="arrow-before">
                <em>${someProjects[i].ativities[j]}</em>
            </p>
        `;
    }
}
