const killersChutados = [];

const killerSecreto = killers[Math.floor(Math.random() * killers.length)];
console.log("O killer secreto é:", killerSecreto.name);

function jogar() {
    const input = document.getElementById("inputKiller");
    const nomeChutado = input.value.trim();
    verificarChute(nomeChutado);
    input.value = "";
}

function verificarChute(nomeChutado) {
    const busca = nomeChutado.trim().toLowerCase();
    const killersCorrespondentes = killers.filter(killer => {
        return killer.name.toLowerCase() === busca ||
            killer.aliases.some(alias =>
                alias.toLowerCase() === busca
            );
    });

    if (killersCorrespondentes.length === 0) {
        alert("Killer não encontrado!");
        return;

    }

    const palpite = killersCorrespondentes.find(killer =>
        !killersChutados.includes(killer.name)

    );

    if (!palpite) {
        alert("Você já chutou esse Killer!");
        return;

    }

    killersChutados.push(palpite.name);

    const resultado = {

        name: palpite.name === killerSecreto.name
            ? "correto"
            : "errado",

        gender: palpite.gender === killerSecreto.gender
            ? "correto"
            : "errado",

        velocity: compararValores(
            palpite.velocity,
            killerSecreto.velocity
        ),

        terrorRadius: compararValores(
            palpite.terrorRadius,
            killerSecreto.terrorRadius
        ),

        height: palpite.height === killerSecreto.height
            ? "correto"
            : "errado",

        realeseYear: compararValores(
            palpite.realeseYear,
            killerSecreto.realeseYear
        ),

        origin: palpite.origin === killerSecreto.origin
            ? "correto"
            : "errado",

        powers: compararPoderes(
            palpite.powers,
            killerSecreto.powers
        )

    };

    exibirNaTela(palpite, resultado);

    const atributosCorretos = Object.values(resultado)
        .filter(status => status === "correto")
        .length;

    setTimeout(() => {

        if (resultado.name === "correto") {
            audioPerfectSkillCheck.currentTime = 0;
            audioPerfectSkillCheck.play();
            mostrarModalVitoria();

        } else if (atributosCorretos >= 3) {
            audioGoodSkillCheck.currentTime = 0;
            audioGoodSkillCheck.play();

        } else {
            audioWrongSkillCheck.currentTime = 0;
            audioWrongSkillCheck.play();
        }

    }, 6800);

}

function compararPoderes(poderesChute, poderesSecreto) {

    const chute = poderesChute
        .split(",")
        .map(poder => poder.trim().toLowerCase());
    const secreto = poderesSecreto

        .split(",") 
        .map(poder => poder.trim().toLowerCase());

    const acertos = chute.filter(poder => secreto.includes(poder));

    if (acertos.length === secreto.length && chute.length === secreto.length) {
        return "correto";
    }

    if (acertos.length > 0) {
        return "parcial";

    }

    return "errado";

}



function mostrarModalVitoria() {

    const modal = document.getElementById("modalVitoria");

    const nomeTxt = document.getElementById("nomeKillerVitoria");

    nomeTxt.innerText = killerSecreto.name;

    modal.style.display = "flex";

}

function reiniciarJogo() {

    location.reload();

}

function compararValores(valorChute, valorSecreto) {
    const vChute = parseFloat(valorChute);
    const vSecreto = parseFloat(valorSecreto);
    if (vChute === vSecreto) return "correto";
    return vChute < vSecreto ? "maior" : "menor";

}

function exibirNaTela(palpite, resultado) {
    const lista = document.getElementById("listaTentativas");
    const linha = document.createElement("div");
    linha.className = "linha";
    const atributos = [ "name", "gender", "velocity", "terrorRadius", "height", "realeseYear", "origin", "powers" ];
    atributos.forEach((attr, index) => {

        const quadrado = document.createElement("div");

        quadrado.className = "quadrado";

        const inner = document.createElement("div");

        inner.className = "carta-inner";

        const frente = document.createElement("div");

        frente.className = "face-frente";

        const verso = document.createElement("div");
        verso.className = "face-verso";

        if (attr === "name" && palpite.image) {

            const img = document.createElement("img");
            img.src = palpite.image;
            img.className = "foto-killer";
            verso.appendChild(img);

        } else {
            verso.innerText = palpite[attr];

        }

        const status = resultado[attr];

        if (status === "correto") {
            verso.classList.add("correto");

        } else if (status === "parcial") {
            verso.classList.add("parcial");

        } else {
            verso.classList.add("errado");

            if (status === "maior" || status === "menor") {
                verso.classList.add(status);

            }

        }

        inner.appendChild(frente);
        inner.appendChild(verso);
        quadrado.appendChild(inner);
        linha.appendChild(quadrado);

        setTimeout(() => {
            quadrado.classList.add("revelar");
        }, index * 800);

    });
    lista.insertBefore(linha, lista.firstChild);
}

const inputKiller = document.getElementById("inputKiller");
const sugestoesBox = document.getElementById("sugestoes");
let sugestoesAtuais = [];
let sugestaoSelecionada = -1;

inputKiller.addEventListener("input", function() {

    const valor = this.value.toLowerCase();

    sugestoesBox.innerHTML = "";

    sugestoesAtuais = [];

    sugestaoSelecionada = -1;

    if (!valor) {
        sugestoesBox.style.display = "none";
        return;
    }

    const filtrados = killers.filter(k => {

        if (killersChutados.includes(k.name)) {
            return false;
        }

        const nomeCorresponde = k.name
            .toLowerCase()
            .includes(valor);
        const aliasCorresponde = k.aliases.some(alias =>
            alias.toLowerCase().includes(valor)
        );
        return nomeCorresponde || aliasCorresponde;
    });

    sugestoesAtuais = filtrados;

    if (filtrados.length > 0) {
        filtrados.forEach((k, index) => {
            const div = document.createElement("div");
            div.className = "sugestao-item";
            div.innerText = k.name;
            div.onclick = function() {
                inputKiller.value = k.name;
                sugestoesBox.style.display = "none";
                sugestoesAtuais = [];
                sugestaoSelecionada = -1;
                jogar();
            };
            sugestoesBox.appendChild(div);
        });
        sugestoesBox.style.display = "block";
    } else {
        sugestoesBox.style.display = "none";
    }

});

inputKiller.addEventListener("keydown", function(e) {

    if (e.key === "Tab" && sugestoesAtuais.length > 0) {
        e.preventDefault();
        sugestaoSelecionada++;
        if (sugestaoSelecionada >= sugestoesAtuais.length) {
            sugestaoSelecionada = 0;

        }

        const itens = sugestoesBox.querySelectorAll(".sugestao-item");
        itens.forEach(item => {
            item.classList.remove("selecionada");
        });

        itens[sugestaoSelecionada].classList.add("selecionada");
        inputKiller.value =
            sugestoesAtuais[sugestaoSelecionada].name;

    }

    if (e.key === "Enter" && sugestaoSelecionada >= 0) {
        e.preventDefault();
        jogar();
        sugestoesAtuais = [];
        sugestaoSelecionada = -1;
        sugestoesBox.style.display = "none";

    }

});

document.addEventListener("click", function(e) {

    if (e.target !== inputKiller) {
        sugestoesBox.style.display = "none";
    }

});