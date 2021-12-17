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
        link: "https://bn02pap001files.storage.live.com/y4mfz4ITgsi8lZ7AASAiUrvXV9eICS12npEla7O_fCb5FHO_PBxRwd6ViK-VfbyFKkuBJCb0Qkop84TK_ddzqUrsSr5MdtnrPVhmGgaJHnldJuXaAsAVpOnZMVwgnFNm9FiHKGlf6naxr7EWT18fQ_WqVY-R6MYsW67CWtNLgoDCdl44-qP4CR068n_NjrCvdYE?width=450&height=428&cropmode=none",
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

const professional = [
    {
        title: "Project Manager Softmakers",
        period: " May / 2021 – October / 2021",
        ativities: {
            ativitie:
                "Management of incremental deliveries of development team through the Scrum framework, divided into Sprints driven by a goal in each cycle.",
            objectives:
                "Bring digital transformation to companies according to the needs of each business.",
            improve: "People and resources management and conflict management.",
        },
    },
    {
        title: "Financial Consultant freelance",
        period: "Agosto / 2020 – Junho / 2021",
        ativities: {
            ativitie:
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
        ativities: {
            ativitie:
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
        ativities: {
            ativitie:
                "Responsible for production planning and control activities; Use of ERP Protheus in resupply process; Framework Kaizen.",
            objectives:
                "Ensure resources and supplies at the right time at the right place, in addition to an improvement project with the application of Six Sigma methodology in the Supply process. ",
            improve:
                "Working in a multidisciplinary team to solve complex problems in an organization.",
        },
    },
    {
        title: "Manager Ciclo Consultoria - Junior Company",
        period: "December / 2017 – December / 2018",
        ativities: {
            ativitie:
                "Negotiation and Sale of Services; Planning and Preparation of Commercial Proposals; Company Event Representative; Project Planning and Control.",
            objectives:
                "Enhance practical knowledge of the student community, in addition to the theoretical knowledge of the university. ",
            improve:
                "Dealing with all aspects of a real company, the attitude to solve problems in any scope and understanding of its impacts to the organization.",
        },
    },
];

const courses = [
    {
        name: "Front-End Developer ReactJS",
        institution: "Alura – December / 2021",
        description:
            "Develop a front-end application with the technologies listed in the certificate",
        link: "https://onedrive.live.com/embed?cid=5AC5D917DF9B44FB&resid=5AC5D917DF9B44FB%21156023&authkey=ACTcfT5ENlpL_I4&em=2",
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
