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

function verificarChute(nomeChutado) {

    const palpite = killers.find(
        k => k.name.toLowerCase() === nomeChutado.toLowerCase()
    );

    if (!palpite) {
        alert("Killer não encontrado!");
        return;
    }

    if (killersChutados.includes(palpite.name)) {
        alert("Você já chutou esse Killer!");
        return;
    }

    killersChutados.push(palpite.name);

    const resultado = {

        name: palpite.name === killerSecreto.name ? "correto" : "errado",

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

    // Conta quantos atributos foram acertados
    const atributosCorretos = Object.values(resultado)
        .filter(status => status === "correto")
        .length;

    console.log("Atributos corretos:", atributosCorretos);

    // Espera todas as cartas terminarem de virar
    setTimeout(() => {

        if (resultado.name === "correto") {

            // Acertou o Killer = Perfect
            audioPerfectSkillCheck.currentTime = 0;
            audioPerfectSkillCheck.play();

            mostrarModalVitoria();

        } else if (atributosCorretos >= 3) {

            // Acertou de 3 até 7 atributos
            audioGoodSkillCheck.currentTime = 0;
            audioGoodSkillCheck.play();

        } else {

            // Acertou 0, 1 ou 2 atributos
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

// Evento que dispara toda vez que o usuário digita algo
inputKiller.addEventListener("input", function() {
    const valor = this.value.toLowerCase();
    sugestoesBox.innerHTML = ""; // Limpa as sugestões anteriores

    if (!valor) {
        sugestoesBox.style.display = "none";
        return;
    }

    // Filtra os killers que começam ou contêm o texto digitado
    const filtrados = killers.filter(k => 
        k.name.toLowerCase().includes(valor)
    );

    if (filtrados.length > 0) {
        filtrados.forEach(k => {
            const div = document.createElement("div");
            div.className = "sugestao-item";
            div.innerText = k.name;
            
            // Quando clicar na sugestão, preenche o input e fecha a caixa
            div.onclick = function() {
                inputKiller.value = k.name;
                sugestoesBox.style.display = "none";
                jogar(); // Opcional: já faz o chute automaticamente ao clicar
            };
            
            sugestoesBox.appendChild(div);
        });
        sugestoesBox.style.display = "block";
    } else {
        sugestoesBox.style.display = "none";
    }
});

// Fecha a caixa de sugestões se clicar fora dela
document.addEventListener("click", function(e) {
    if (e.target !== inputKiller) {
        sugestoesBox.style.display = "none";
    }
});