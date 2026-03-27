/* ================= CONFIGURAÇÃO INICIAL E TEMA ================= */
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("temaBtn");
    const fundo = document.querySelector(".background");
    const icone = toggle.querySelector(".icone");
    const header = document.querySelector("header");
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");
    const navLinks = document.querySelectorAll(".nav-esquerda a");

    let claro = false;

    // Alternar Tema (Claro/Escuro)
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("ativo");
        if (!claro) {
            fundo.style.backgroundImage = "linear-gradient(to top, #dfe9f3, #ffffff)";
            document.body.classList.add("tema-claro");
            icone.textContent = "☀";
            claro = true;
        } else {
            fundo.style.backgroundImage = "linear-gradient(to top, #0f2027, #08083d)";
            document.body.classList.remove("tema-claro");
            icone.textContent = "🌙";
            claro = false;
        }
    });

    /* ================= MENU MOBILE (HAMBÚRGUER) ================= */
    if (menuToggle) {
        menuToggle.addEventListener("click", (e) => {
            header.classList.add("menu-aberto");
            e.stopPropagation();
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener("click", () => {
            header.classList.remove("menu-aberto");
        });
    }

    // Fecha menu ao clicar nos links ou fora dele
    navLinks.forEach(link => {
        link.addEventListener("click", () => header.classList.remove("menu-aberto"));
    });

    window.addEventListener("click", (e) => {
        if (header.classList.contains("menu-aberto") && !header.contains(e.target)) {
            header.classList.remove("menu-aberto");
        }
    });

    /* ================= HEADER QUE SOME AO SCROLL ================= */
    let ultimaPosicao = 0;
    window.addEventListener("scroll", () => {
        if (header.classList.contains("menu-aberto")) return;
        const posicaoAtual = window.scrollY;

        if (posicaoAtual > ultimaPosicao && posicaoAtual > 80) {
            header.classList.add("escondido");
            header.classList.remove("visivel");
        } else {
            header.classList.add("visivel");
            header.classList.remove("escondido");
        }
        ultimaPosicao = posicaoAtual;
    });
});

/* ================= SELETOR DE IDIOMAS E TRADUÇÃO ================= */
const langSelector = document.querySelector(".lang-selector");
const langBtn = document.querySelector(".lang-btn");
const langItems = document.querySelectorAll(".lang-menu li");

const traducoes = {
    br: {
        sobre: "Sobre",
        projetos: "Projetos",
        contato: "Contato",
        titulo: "Reginaldo Neto",
        subtitulo: "Desenvolvedor Web | Front-end e Back-end em formação",
        sobre1: "Sou estudante de Análise e Desenvolvimento de Sistemas pela Universidade Tiradentes e tenho grande interesse em desenvolvimento de software e aplicações web. Busco constantemente evoluir minhas habilidades técnicas criando projetos práticos e explorando novas tecnologias.",
        sobre2: "Tenho experiência no desenvolvimento de interfaces utilizando HTML, CSS e JavaScript, além de estar estudando React para construção de aplicações modernas. Também venho fortalecendo meus conhecimentos em back-end utilizando Node.js, Java e Python.",
        sobre3: "Além do desenvolvimento, possuo conhecimentos em banco de dados relacionais como MySQL e PostgreSQL, versionamento com Git e GitHub e boas práticas de organização de código. Meu objetivo é crescer profissionalmente na área de tecnologia contribuindo com soluções eficientes e bem estruturadas.",
        projeto0: "Website pessoal desenvolvido para apresentar meu currículo e projetos de forma profissional. O site utiliza HTML, CSS e JavaScript puro, com foco em design responsivo, animações modernas e um sistema completo de tradução multi-idiomas.",
        projeto1: "Jogo interativo desenvolvido em JavaScript onde o usuário deve adivinhar um número aleatório entre 1 e 100. O projeto utiliza lógica de programação, manipulação do DOM e eventos em tempo real para criar uma experiência dinâmica.",
        projeto2: "Aplicação web desenvolvida para monitoramento de indicadores do mercado financeiro. O projeto utiliza tecnologias front-end para apresentar dados complexos de forma organizada, intuitiva e totalmente responsiva para o usuário.",
        projeto3: "Sistema web robusto para gerenciamento de espaços de eventos, criado durante o programa Jovem Tech. A solução utiliza tecnologias de front-end integradas ao Python usando framework flask para otimizar a organização e o fluxo das informações."
    },
    en: {
        sobre: "About",
        projetos: "Projects",
        contato: "Contact",
        titulo: "Reginaldo Neto",
        subtitulo: "Web Developer | Front-end and Back-end in training",
        sobre1: "I am a student of Systems Analysis and Development at Tiradentes University and I have a great interest in software development and web applications. I constantly seek to improve my technical skills by creating practical projects and exploring new technologies.",
        sobre2: "I have experience in developing interfaces using HTML, CSS, and JavaScript, and I am also studying React to build modern applications. I have also been strengthening my knowledge in back-end development using Node.js, Java, and Python.",
        sobre3: "In addition to development, I have knowledge of relational databases such as MySQL and PostgreSQL, version control with Git and GitHub, and good code organization practices. My goal is to grow professionally in the technology field, contributing with efficient and well-structured solutions.",
        projeto0: "Personal website developed to showcase my resume and projects in a professional way. The site uses pure HTML, CSS, and JavaScript, focusing on responsive design, modern animations, and a complete multi-language translation system.",
        projeto1: "Interactive game developed in JavaScript where the user needs to guess a random number between 1 and 100. The project uses programming logic, DOM manipulation, and user interaction.",
        projeto2: "A web application developed as an academic project with the goal of tracking information related to the financial market. The project uses HTML, CSS, and JavaScript to present data in an organized and intuitive way.",
        projeto3: "Web-based system developed for managing event spaces. The project was created during a selection process for the Jovem Tech program and uses front-end technologies and Python using framework flask for information organization."
    },
    es: {
        sobre: "Sobre mí",
        projetos: "Proyectos",
        contato: "Contacto",
        titulo: "Reginaldo Neto",
        subtitulo: "Desarrollador Web | Front-end y Back-end en formación",
        sobre1: "Soy estudiante de Análisis y Desarrollo de Sistemas en la Universidad de Tiradentes y tengo un gran interés en el desarrollo de software y las aplicaciones web. Busco constantemente mejorar mis habilidades técnicas mediante la creación de proyectos prácticos y la exploración de nuevas tecnologías.",
        aobre2: "Tengo experiencia en el desarrollo de interfaces con HTML, CSS y JavaScript, y también estoy estudiando React para crear aplicaciones modernas. Además, he estado reforzando mis conocimientos de desarrollo back-end con Node.js, Java y Python.",
        sobre3: "Además del desarrollo, tengo conocimientos de bases de datos relacionales como MySQL y PostgreSQL, control de versiones con Git y GitHub, y buenas prácticas de organización de código. Mi objetivo es crecer profesionalmente en el ámbito tecnológico, aportando soluciones eficientes y bien estructuradas.",
        projeto0: "Sitio web personal desarrollado para presentar mi currículum y proyectos de forma profesional. El sitio utiliza HTML, CSS y JavaScript puro, con enfoque en diseño responsivo, animaciones modernas y un sistema completo de traducción multi-idioma.",
        projeto1: "Juego interactivo en JavaScript donde el usuario debe adivinar un número aleatorio entre 1 y 100. El proyecto utiliza lógica de programación, manipulación del DOM y eventos en tiempo real para una experiencia dinámica.",
        projeto2: "Aplicación web desarrollada para el monitoreo de indicadores del mercado financiero. El proyecto utiliza tecnologías front-end para presentar datos complejos de forma organizada, intuitiva y totalmente responsiva.",
        projeto3: "Sistema web para la gestión de espacios de eventos, creado durante el programa Jovem Tech. La solución utiliza tecnologías front-end integradas con Python para optimizar la organización y el flujo de la información."
    }
};

langBtn.addEventListener("click", (e) => {
    langSelector.classList.toggle("ativo");
    e.stopPropagation();
});

langItems.forEach(item => {
    item.addEventListener("click", () => {
        const idioma = item.dataset.lang;
        const img = item.querySelector("img").src;

        // Atualiza o botão visualmente
        langBtn.innerHTML = `<img src="${img}" width="20"> ${idioma.toUpperCase()}`;

        // Aplica a tradução
        document.querySelectorAll("[data-translate]").forEach(el => {
            const chave = el.dataset.translate;
            if (traducoes[idioma][chave]) el.textContent = traducoes[idioma][chave];
        });

        langSelector.classList.remove("ativo");
    });
});

document.addEventListener("click", () => langSelector.classList.remove("ativo"));

/* ================= ENVIO DE EMAIL (EMAILJS) ================= */
emailjs.init("Bx48Uu5GhoOmWKGcO");
const form = document.getElementById("contatoForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const params = {
        from_name: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        message: document.getElementById("mensagem").value
    };

    emailjs.send("caixa_potifolio", "template_acujax8", params)
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            form.reset();
        })
        .catch(() => alert("Erro ao enviar mensagem"));
});



/* ================= HEADER E SETA DE SCROLL ================= */
let ultimaPosicao = 0;
const setaScroll = document.querySelector(".scroll-down"); // Seleciona sua seta

window.addEventListener("scroll", () => {
    const posicaoAtual = window.scrollY;
    const alturaTotalPagina = document.documentElement.scrollHeight;
    const alturaJanela = window.innerHeight;

    // 1. Lógica do Header (Esconder/Mostrar)
    if (header && !header.classList.contains("menu-aberto")) {
        if (posicaoAtual > ultimaPosicao && posicaoAtual > 80) {
            header.classList.add("escondido");
            header.classList.remove("visivel");
        } else {
            header.classList.add("visivel");
            header.classList.remove("escondido");
        }
    }
    ultimaPosicao = posicaoAtual;

    // 2. Lógica da Seta (Suma ao chegar no fim)
    if (setaScroll) {
        // Se o usuário scrollou até 50px antes do fim da página
        if ((posicaoAtual + alturaJanela) >= (alturaTotalPagina - 50)) {
            setaScroll.style.opacity = "0";
            setaScroll.style.visibility = "hidden"; // Garante que ela suma mesmo
            setaScroll.style.transition = "0.3s";
        } else {
            setaScroll.style.opacity = "1";
            setaScroll.style.visibility = "visible";
        }
    }
});