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
    } else if (moreLess.innerHTML === "View less -") {
        moreLess.innerHTML = "View more +";
    } else if (moreLess.innerHTML === "View more +") {
        moreLess.innerHTML = "View less -";
    }
}

const personal = [
    "Data de Nascimento: 13/01/1997",
    "Endereço: Caruaru – Pernambuco",
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
        link: "https://bn02pap001files.storage.live.com/y4mfz4ITgsi8lZ7AASAiUrvXV9eICS12npEla7O_fCb5FHO_PBxRwd6ViK-VfbyFKkuBJCb0Qkop84TK_ddzqUrsSr5MdtnrPVhmGgaJHnldJuXaAsAVpOnZMVwgnFNm9FiHKGlf6naxr7EWT18fQ_WqVY-R6MYsW67CWtNLgoDCdl44-qP4CR068n_NjrCvdYE?width=450&height=428&cropmode=none",
    },
];

const objectives = [
    "Aprender e Ensinar",
    "Ampliar experiência profissional.",
    "Crescer com a organização.",
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

const professional = [
    {
        title: "Gerente de Projetos Softmakers",
        period: "Maio / 2021 - Outubro / 2021",
        ativities: {
            ativitie:
                "Gerenciamento de entregas incrementais da equipe de desenvolvimento por meio da utilização do framework Scrum, no qual o trabalho é dividido em iterações (Sprints) direcionados por uma meta a cada ciclo.",
            objectives:
                "Levar a transformação digital para as empresas de acordo com a necessidade de cada negócio.",
            improve:
                "Gerenciamento de pessoas e recursos. Gestão de conflitos.",
        },
    },
    {
        title: "Consultor Financeiro Autônomo",
        period: "Agosto / 2020 – Junho / 2021",
        ativities: {
            ativitie:
                "Responsável por analisar e avaliar a vida financeira dos clientes utilizando as melhores opções de produtos financeiros que o mercado brasileiro oferece de acordo com cada perfil.",
            objectives:
                "Desenvolver a melhor estratégia para os clientes atingirem os seus objetivos.",
            improve:
                "Conhecimentos avançados sobre o mercado financeiro e cultura de atendimento ao cliente com excelência. ",
        },
    },
    {
        title: "Consultor Comercial STONE Pagamentos",
        period: "Janeiro / 2020 – Agosto / 2020",
        ativities: {
            ativitie:
                "Prospecção e captação de clientes; Consultoria de adquirência e assuntos relacionados; Análises de carteira de clientes; Administração do funil de vendas e prevenção de churn. ",
            objectives:
                "Aumentar a base de clientes, auxiliar os clientes aprimorar seus negócios aumentando suas vendas, além de aumentar seu NPS.",
            improve:
                "Aprimorei habilidade de negociação ao lidar com diferentes perfis de clientes e entender suas reais necessidades. Aprendi a dar e receber feedbacks com comunicação não-violenta.",
        },
    },
    {
        title: "Estagiário PCP CIPAN - VITAMASSA",
        period: "Julho / 2019 – Dezembro / 2019",
        ativities: {
            ativitie:
                "Responsável pelas atividades de planejamento e controle da produção; Utilização do ERP Protheus no ressuprimento da fábrica; Realização da melhoria contínua.",
            objectives:
                "Garantir os insumos na hora certa no local correto, além de um projeto de melhoria com a aplicação do Seis Sigma no processo de Ressuprimento.",
            improve:
                "Trabalhar em uma equipe multidisciplinar para resolver problemas complexos de uma organização.",
        },
    },
    {
        title: "Gerente Ciclo Consultoria - Empresa Junior ",
        period: "Dezembro / 2017 – Dezembro / 2018",
        ativities: {
            ativitie:
                "Negociação e Venda dos Serviços; Planejamento e Elaboração de Propostas; Representante em Evento; Monitoramento e Controle de Projetos.",
            objectives:
                "Aprimorar conhecimentos práticos da comunidade estudantil, além dos conhecimentos teóricos da faculdade.",
            improve:
                "Lidar com todos os aspectos de uma empresa real, atitude de dono da organização para resolução dos problemas em qualquer âmbito e entendimento de impactos em um aspecto pode interferir em outros.",
        },
    },
];

const courses = [
    {
        name: "Front-End Developer ReactJS",
        institution: "Alura – Dezembro / 2021",
        description:
            "Desenvolver uma aplicação completa utilizando as tecnologias citadas acima.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%21156023&authkey=ACTcfT5ENlpL_I4&em=2",
    },
    {
        name: "Formulação de um Planejamento Estratégico",
        institution: "Grupo Voitto – Janeiro / 2019",
        description:
            "Ferramentas para auxiliar na criação de um planejamento estratégico. Identificar oportunidades e se antecipar a riscos empresariais.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131676&authkey=ABapyVQR7KSZeKE&em=2",
    },
    {
        name: "Oratória e Técnicas de Apresentação",
        institution: "Grupo Voitto – Janeiro / 2019",
        description:
            "Compreensão do público-alvo que se deseja comunicar, técnicas para uma melhor apresentação, respiração, postura, comunicação verbal e não-verbal.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131655&authkey=AK-EUDAuamcOp-Y&em=2",
    },
    {
        name: "Formação Master em MS Excel",
        institution: "Grupo Voitto – Janeiro / 2019",
        description:
            "Treinamento avançado com análise de grandes volumes de dados, tomadas de decisões precisas, automatização de cálculos, gráficos dinâmicos e gravação de macros.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131664&authkey=APlDz0cqGvIK50Y&em=2",
    },
];

const complementaryIdioms = [
    {
        idiom: "Inglês",
        level: "Avançado",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131475&authkey=AOS_DPwXsIyfWxc&em=2",
    },
    {
        idiom: "Italiano",
        level: "Básico",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2168002&authkey=ANitbVjIj2AqKWU&em=2",
    },
    {
        idiom: "Alemão",
        level: "Básico",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2167729&authkey=AHHfVIbgCHTMRNg&em=2",
    },
];

const complementary = [
    "Conhecimentos: Metodologia ágil, Scrum, Lean, Kanban.",
    "Trabalho em equipe, proativo, resiliente, dinâmico.",
    "Disponibilidade de mudar endereço.",
];

window.onload = function () {
    const personalId = document.getElementById("personal");
    for (let i = 0; i < personal.length; i++) {
        personalId.innerHTML += `<li class="linha">${personal[i]}</li>`;
    }
    for (let i = 0; i < personalLinks.length; i++) {
        personalId.innerHTML += `<li class="linha">${personalLinks[i].name} 
        <p><a href=${personalLinks[i].href} src=${personalLinks[i].src}></a></p>
    </li>`;
    }

    const objectivesID = document.getElementById("objectives");
    for (let i = 0; i < objectives.length; i++) {
        objectivesID.innerHTML += `<li class="linha">${objectives[i]}</li>`;
    }

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
    </li> `;
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
