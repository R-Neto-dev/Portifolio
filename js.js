let form = document.getElementById("form")

form.addEventListener("submit", function (event) {

    event.preventDefault()

    let email = document.getElementById("email").value

    let erro = false

    document.getElementById("erroEmail").innerHTML = ""

    if (email === "") {
        document.getElementById("erroEmail").innerText = "O e-mail é obrigatório"
        erro = true
    }else if (/\d/.test(email)) {
        document.getElementById("erroEmail").innerHTML = "N pd"
        erro = true
    }

    if (!erro) {
        alert("O seu formulário foi enviado com sucesso")
        form.reset()
    }
})





const seta = document.querySelector(".scroll-indicator");

window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY;
    const alturaTela = window.innerHeight;
    const alturaPagina = document.documentElement.scrollHeight;

    const chegouNoFim = scrollAtual + alturaTela >= alturaPagina - 5;

    if (scrollAtual > 10 || chegouNoFim) {
        seta.style.opacity = "0";
    } else {
        seta.style.opacity = "1";
    }
});





// alert("Bem Vindo ao portifólio de Reginaldo")

// let nome = prompt("Qual o seu nome?")
// let idade = prompt("Qual a sua idade?")

// if (idade <= 13) {
//     alert(nome + " você é uma criança")
// } else if (idade >= 14 && idade <= 17) {
//     alert( nome + " você é um adolescente chato(a)")
// } else if (idade >= 18 && idade <= 22) {
//     alert(nome + " você é um jovem bonito(a) ")
// } else {
//     alert(nome + " você é um velho(a) acabado(a)")
// }



// let like = document.getElementById("like")
// let deslike = document.getElementById("deslike")

// like.addEventListener("click", function () {
//     this.style.backgroundColor = "#21f093"
//     deslike.style.backgroundColor = "white"
//     alert("Obrigado!")
// })

// deslike.addEventListener("click", function () {
//     this.style.backgroundColor = "#f02821ff"
//     like.style.backgroundColor = "white"
//     alert("Você é um fracassado!")
// })






// let nome = prompt("Qual o seu nome?")
// window.alert("Seja Bem vindo(a) " + nome)

// let num1 = prompt("Diga um número")
// let num2 = prompt("Diga outro número")
// let soma = +num1 + +num2
// alert("A soma dos números foi " + soma)