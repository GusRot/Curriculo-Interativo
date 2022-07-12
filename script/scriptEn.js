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

    if (moreLess.innerHTML === "View less -") {
        moreLess.innerHTML = "View more +";
    } else if (moreLess.innerHTML === "View more +") {
        moreLess.innerHTML = "View less -";
    }
}

const personal = [
    "Birthdate: 13/01/1997",
    "Address: Caruaru – Pernambuco",
    "E-mail: gustavo.rotta@hotmail.com",
];

const personalLinks = [
    {
        name: "Contact Number: +55(81) 9 9735-9190",
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
        src: "https://bn02pap001files.storage.live.com/y4mfz4ITgsi8lZ7AASAiUrvXV9eICS12npEla7O_fCb5FHO_PBxRwd6ViK-VfbyFKkuBJCb0Qkop84TK_ddzqUrsSr5MdtnrPVhmGgaJHnldJuXaAsAVpOnZMVwgnFNm9FiHKGlf6naxr7EWT18fQ_WqVY-R6MYsW67CWtNLgoDCdl44-qP4CR068n_NjrCvdYE?width=450&height=428&cropmode=none",
    },
];

const objectives = [
    "Teach and learn.",
    "Expand professional experience.",
    "Grow with the organization.",
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
        title: "Financial Consultant freelance",
        period: "August / 2020 – June / 2021",
        activities: {
            activity:
                "Responsible for analyzing and evaluating the financial life of customers using the best financial product options that the Brazilian market offers according to each profile.",
            objectives:
                "Develop the best strategy for customers to achieve their goals.",
            improve:
                "Advanced knowledge of the financial market and developed a culture of excellent customer service. ",
        },
    },
    {
        title: "Commercial Consultant STONE ",
        period: "January / 2020 – August / 2020",
        activities: {
            activity:
                "Prospecting and attracting customers; portfolio analyses; Management of the sales funnel and churn prevention.",
            objectives:
                "Increase clients base, help customers improve their business by increasing their sales, and increasing their NPS.",
            improve:
                "Negotiation skills by dealing with different customer profiles and understanding their real needs. Learned to give and receive feedback with non-violent communication.",
        },
    },
    {
        title: "PCP Intern VITAMASSA(Industry)",
        period: "July / 2019 – December / 2019",
        activities: {
            activity:
                "Responsible for production planning and control activities; Use of ERP Protheus in resupply process; Framework Kaizen.",
            objectives:
                "Ensure resources and supplies at the right time at the right place, in addition to an improvement project with the application of Six Sigma methodology in the Supply process. ",
            improve:
                "Working in a multidisciplinary team to solve complex problems in an organization.",
        },
    },
    {
        title: "Manager Ciclo Consultoria - Junior Company",
        period: "Dec / 2017 – Dec / 2018",
        activities: {
            activity:
                "Negotiation and Sale of Services; Planning and Preparation of Commercial Proposals; Company Event Representative; Project Planning and Control.",
            objectives:
                "Enhance practical knowledge of the student community, in addition to the theoretical knowledge of the university. ",
            improve:
                "Dealing with all aspects of a real company, the attitude to solve problems in any scope and understanding of its impacts to the organization.",
        },
    },
];

const professional = [
    {
        title: "Adobe Commerce Developer - Webjump",
        period: "March / 2022 – current",
        activities: {
            activity:
                "Company specialized in Adobe Commerce, where I work with Magento. I use the MVC framework in a docker environment with versioning on Bitbucket. Currently working with B2B",
            objectives: "Develop fast and flexible storefronts",
            improve:
                "JS, KO, JQuery, LESS, XML, PHP, AJAX, Git, JIRA, LINUX, grunt",
        },
    },
    {
        title: "Developer Web React",
        period: "February / 2021 – current",
        activities: {
            activity:
                "Development of front-end applications in personal projects, maintenance, and implementation of new features. More than 20 completed projects and more than 300 commits that can be viewed on Github: https://github.com/GusRot",
            objectives:
                "Develop the best user experience through lines of code.",
            improve:
                "Javascript/ Typescript / ReactJS /HTML / CSS/ SASS / Bootstrap.",
        },
    },
];

const someProjects = [
    {
        title: "Adobe Commerce – Front-end Development",
        period: "Desenvolvimento Magento",
        activities: [
            "HTML, CSS, JS, XML. (basic PHP).",
            "Less pre-processor, CSS architecture patterns, Mixin modeling, UI responsive.",
            "JQuery library, JQuery Widgets, Ajax requisitions, asynchronous functions.",
            "UiComponents and Knockout(ko) solutions.",
            "SEO, accessibility, and performance in production environment.",
            "Development of CMS blocks and page builder components.",
            "Contributing to daily meetings, sprint planning and estimations.",
            "Git versioning and code reviews.",
            `Meus repositórios pessoais: 
            <a class="links" href="https://github.com/GusRot/Magento-Quick-Learn" target="blank">Repo1 </a>
            <a class="links" href="https://github.com/GusRot/Magento-Theme" target="blank">Repo2 </a>
            <a class="links" href="https://github.com/GusRot/Magento-Styles" target="blank">Repo3</a>
            `,
        ],
    },
    {
        title: "Project dt-money",
        period: "React Development",
        activities: [
            "Function Components as standard.",
            "Typescript for greater control over variables in the application.",
            "Context to control transactions with global variables.",
            "Requests from UserTransaction API with the Axios library.",
            "Use of Storage to save data saved by the user.",
            `Deploy with Vercel: <a class="links" href="https://dt-money-one.vercel.app" target="blank">Build Link</a> Repository: <a class="links" href="https://github.com/GusRot/DTMoney" target="blank">Link Repo</a>`,
        ],
    },
    {
        title: "Project e-commerce",
        period: "React Development",
        activities: [
            "Class Components as standard.",
            "REDUX to control products in cart with global variables.",
            "Requests with the Apollo client from an endpoint developed in GRAPHQL.",
            "Styled components to handle states by props, like dark-mode.",
            "React-router-dom to handle routes(PLP, PDP, CartPage).",
            `Deploy with Vercel (<a class="links" href="https://github.com/GusRot/e-commerce" target="blank">ler instructions on repository</a>):`,
        ],
    },
    {
        title: "Project portfolio ",
        period: "React Development - All of my projects in one link. ",
        activities: [
            `to visualize build of project. <a class="links" href="https://portifolio-gusrot.vercel.app" target="blank">[Access link here]</a> `,
        ],
    },
];

const courses = [
    {
        name: "Front-End Developer ReactJS",
        institution: "Alura – December / 2021",
        description:
            "Develop a front-end application with the technologies listed in the certificate",
        link: "https://1drv.ms/b/s!AvtEm98X2cVanfpDQeb6PJ1471Aj8g?e=2RA5Jj",
    },
    {
        name: "Magento Front-end",
        institution: "M.Academy – 2022",
        description:
            "Develop Adobe-Commerce applications using: UiComponents / JS / KO / AJAX",
        link: "https://1drv.ms/u/s!AvtEm98X2cVanf4iRjndKa8BSn9b2w?e=TO6jQz",
    },
    {
        name: "Formulation of a Strategic Plan",
        institution: "Voitto – January / 2019",
        description:
            "Tools to assist in creating a strategic plan. Identify opportunities and anticipate business risks.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131676&authkey=ABapyVQR7KSZeKE&em=2",
    },
    {
        name: "Public Speaking and Presentation Techniques ",
        institution: "Voitto – January / 2019",
        description:
            "Understanding the target audience, techniques for a better presentation, breathing, posture, verbal, and non-verbal communication.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131655&authkey=AK-EUDAuamcOp-Y&em=2",
    },
    {
        name: "Master Formation MS Excel",
        institution: "Grupo Voitto – January / 2019",
        description:
            "Advanced training with big data analysis, accurate decision making, calculation automation, dynamic graphics, and macro recording.",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131664&authkey=APlDz0cqGvIK50Y&em=2",
    },
];

const complementaryIdioms = [
    {
        idiom: "English",
        level: "Advanced",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2131475&authkey=AOS_DPwXsIyfWxc&em=2",
    },
    {
        idiom: "Italian",
        level: "Básic",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2168002&authkey=ANitbVjIj2AqKWU&em=2",
    },
    {
        idiom: "German",
        level: "Básic",
        certificate:
            "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%2167729&authkey=AHHfVIbgCHTMRNg&em=2",
    },
];

const complementary = [
    "knowhow: Agile Methodology, Scrum, Lean, Kanban.",
    "Teamwork, proactive, resilient, dynamic",
    "Availability to change address.",
];

window.onload = function () {
    const personalId = document.getElementById("personal");
    for (let i = 0; i < personal.length; i++) {
        personalId.innerHTML += `<li class="linha">${personal[i]}</li>`;
    }
    for (let i = 0; i < personalLinks.length; i++) {
        personalId.innerHTML += `<li class="linha">${personalLinks[i].name} 
        <p><a href=${personalLinks[i].href} target="blank"><img class="logo" src=${personalLinks[i].src}></img></a></p>
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
                <strong>activities:</strong>${professional[i].activities.activity}<br>
                <strong>Objective:</strong> ${professional[i].activities.objectives}<br>
                <strong>Improved:</strong> ${professional[i].activities.improve}
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
                <strong>activities:</strong>${professionalComplementary[i].activities.activity}<br>
                <strong>Objective:</strong> ${professionalComplementary[i].activities.objectives}<br>
                <strong>Improved:</strong> ${professionalComplementary[i].activities.improve}
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
    for (let j = 0; j < someProjects[i].activities.length; j++) {
        activityProject.innerHTML += `
            <p class="arrow-before">
                <em>${someProjects[i].activities[j]}</em>
            </p>
        `;
    }
}
