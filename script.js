const audioSkillCheck = new Audio("audio/skillCheck.mp3");
const audioGoodSkillCheck = new Audio("audio/goodSkillCheck.mp3");
const audioPerfectSkillCheck = new Audio("audio/perfectSkillCheck.mp3");
const audioWrongSkillCheck = new Audio("audio/wrongSkillCheck.mp3");
audioSkillCheck.volume = 0.2;
audioGoodSkillCheck.volume = 0.05;
audioPerfectSkillCheck.volume = 0.05;
audioWrongSkillCheck.volume = 0.1;

const killersChutados = [];

document.getElementById("inputKiller").addEventListener("focus", () => {

    // Toca o skill check
    audioSkillCheck.currentTime = 0;
    audioSkillCheck.play();

    // Inicia a música de fundo
    const musica = document.getElementById("musicaFundo");
    musica.volume = 0.1;

    musica.play().catch(() => {
        console.log("Não foi possível iniciar a música.");
    });

});

const killerSecreto = killers[Math.floor(Math.random() * killers.length)];
console.log("O killer secreto é:", killerSecreto.name);

function jogar() {
    const input = document.getElementById("inputKiller");
    const nomeChutado = input.value.trim();
    verificarChute(nomeChutado);
    input.value = "";
}

function encontrarKiller(nomeDigitado) {
    const busca = nomeDigitado.trim().toLowerCase();

    return killers.find(killer => {

        // Não considera Killers que já foram chutados
        if (killersChutados.includes(killer.name)) {
            return false;
        }

        // Procura pelo nome oficial
        if (killer.name.toLowerCase() === busca) {
            return true;
        }

        // Procura pelos aliases
        return killer.aliases.some(alias =>
            alias.toLowerCase() === busca
        );
    });
}

function verificarChute(nomeChutado) {
    const busca = nomeChutado.trim().toLowerCase();

    // Procura qualquer Killer que corresponda ao nome/alias
    const killersCorrespondentes = killers.filter(killer => {
        return killer.name.toLowerCase() === busca ||
            killer.aliases.some(alias =>
                alias.toLowerCase() === busca
            );
    });

    // Nenhum Killer possui esse nome ou alias
    if (killersCorrespondentes.length === 0) {
        alert("Killer não encontrado!");
        return;
    }

    // Procura um Killer correspondente que ainda não foi chutado
    const palpite = killersCorrespondentes.find(killer =>
        !killersChutados.includes(killer.name)
    );

    // Todos os Killers correspondentes já foram chutados
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

    console.log("Atributos corretos:", atributosCorretos);

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
        // 1. Criamos o container principal
        const quadrado = document.createElement("div");
        quadrado.className = "quadrado";

        // 2. Criamos o "inner" que vai girar
        const inner = document.createElement("div");
        inner.className = "carta-inner";

        // 3. Face da frente (Cinza)
        const frente = document.createElement("div");
        frente.className = "face-frente";


        const verso = document.createElement("div");
        verso.className = "face-verso";

        // LÓGICA DA IMAGEM:
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



        // Montamos a estrutura
        inner.appendChild(frente);
        inner.appendChild(verso);
        quadrado.appendChild(inner);
        linha.appendChild(quadrado);

        // Disparamos o giro da direita para a esquerda (rotateY)
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

// Evento que dispara toda vez que o usuário digita algo
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

        // Não mostra Killers que já foram chutados
        if (killersChutados.includes(k.name)) {
            return false;
        }

        // Procura no nome oficial
        const nomeCorresponde = k.name
            .toLowerCase()
            .includes(valor);

        // Procura nos aliases
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

// Fecha a caixa de sugestões se clicar fora dela
document.addEventListener("click", function(e) {
    if (e.target !== inputKiller) {
        sugestoesBox.style.display = "none";
    }
});