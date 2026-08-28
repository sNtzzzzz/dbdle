const killers = [

    { "id": 1, "name": "The Trapper", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/81/K01_TheTrapper_Portrait.png/revision/latest?cb=20240517102906", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2016, "origin": "Original", "powers": "M1" },
    { "id": 2, "name": "The Wraith", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c2/K02_TheWraith_Portrait.png/revision/latest?cb=20240517102909", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2016, "origin": "Original", "powers": "Furtividade, Mobilidade" },
    { "id": 3, "name": "The Hillbilly", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/24/K03_TheHillbilly_Portrait.png/revision/latest?cb=20240517102913", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2016, "origin": "Original", "powers": "Mobilidade" },
    { "id": 4, "name": "The Nurse", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3b/K04_TheNurse_Portrait.png/revision/latest?cb=20240517102916", "gender": "Feminino", "velocity": "3.8", "terrorRadius": "32", "height": "Médio", "realeseYear": 2016, "origin": "Original", "powers": "Teleporte" },
    { "id": 5, "name": "The Shape", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b5/K05_TheShape_Portrait.png/revision/latest?cb=20240517102953", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2016, "origin": "DLC", "powers": "Furtividade" },
    { "id": 6, "name": "The Hag", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c7/K06_TheHag_Portrait.png/revision/latest?cb=20240517102957", "gender": "Feminino", "velocity": "4.4", "terrorRadius": "24", "height": "Baixo", "realeseYear": 2016, "origin": "Original", "powers": "Teleporte" },
    { "id": 7, "name": "The Doctor", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/58/K07_TheDoctor_Portrait.png/revision/latest?cb=20240517103001", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2017, "origin": "Original", "powers": "M1" },
    { "id": 8, "name": "The Huntress", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f1/K08_TheHuntress_Portrait.png/revision/latest?cb=20240517103005", "gender": "Feminino", "velocity": "4.4", "terrorRadius": "20", "height": "Alto", "realeseYear": 2017, "origin": "Original", "powers": "Ataque a distância" },
    { "id": 9, "name": "The Nightmare", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d5/K10_TheNightmare_Portrait.png/revision/latest?cb=20240517103015", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2017, "origin": "DLC", "powers": "Teleporte" },
    { "id": 10, "name": "The Pig", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5c/K11_ThePig_Portrait.png/revision/latest?cb=20240517103021", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "24", "height": "Médio", "realeseYear": 2018, "origin": "DLC", "powers": "Furtividade" },
    { "id": 11, "name": "The Clown", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d1/K12_TheClown_Portrait.png/revision/latest?cb=20240517103029", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2018, "origin": "Original", "powers": "Mobilidade" },
    { "id": 12, "name": "The Spirit", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f1/K13_TheSpirit_Portrait.png/revision/latest?cb=20240517103034", "gender": "Feminino", "velocity": "4.4", "terrorRadius": "24", "height": "Médio", "realeseYear": 2018, "origin": "Original", "powers": "Mobilidade" },
    { "id": 13, "name": "The Legion", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/53/K14_TheLegion_Portrait.png/revision/latest?cb=20240517103043", "gender": "Vários", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2018, "origin": "Original", "powers": "Mobilidade" },
    { "id": 14, "name": "The Plague", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fe/K15_ThePlague_Portrait.png/revision/latest?cb=20240517103048", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2019, "origin": "Original", "powers": "Ataque a distância" },
    { "id": 15, "name": "The Ghost Face", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d1/K16_TheGhostFace_Portrait.png/revision/latest?cb=20240517103053", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2019, "origin": "DLC", "powers": "Furtividade" },
    { "id": 16, "name": "The Oni", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/80/K18_TheOni_Portrait.png/revision/latest?cb=20240517103106", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2019, "origin": "Original", "powers": "Mobilidade" },
    { "id": 17, "name": "The Deathslinger", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/K19_TheDeathslinger_Portrait.png/revision/latest?cb=20240517103108", "gender": "Masculino", "velocity": "4.4", "terrorRadius": "24", "height": "Alto", "realeseYear": 2020, "origin": "Original", "powers": "Ataque a distância" },
    { "id": 18, "name": "The Executioner", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c9/K20_TheExecutioner_Portrait.png/revision/latest?cb=20240517103116", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2020, "origin": "DLC", "powers": "Ataque a distância" },
    { "id": 19, "name": "The Blight", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1f/K21_TheBlight_Portrait.png/revision/latest?cb=20240517103126", "gender": "Masculino", "velocity": "4.4", "terrorRadius": "32", "height": "Médio", "realeseYear": 2020, "origin": "Original", "powers": "Mobilidade" },
    { "id": 20, "name": "The Twins", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/17/K22_TheTwins_Portrait.png/revision/latest?cb=20240517102938", "gender": "Vários", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2020, "origin": "Original", "powers": "Invocação" },
    { "id": 21, "name": "The Trickster", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c9/K23_TheTrickster_Portrait.png/revision/latest?cb=20240517102949", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2021, "origin": "Original", "powers": "Ataque a distância" },
    { "id": 22, "name": "The Nemesis", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/67/K24_TheNemesis_Portrait.png/revision/latest?cb=20240517103009", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2021, "origin": "DLC", "powers": "Ataque a distância" },
    { "id": 23, "name": "The Cenobite", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3b/K25_TheCenobite_Portrait.png/revision/latest?cb=20240517103027", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2021, "origin": "DLC", "powers": "Ataque a distância" },
    { "id": 24, "name": "The Artist", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/01/K26_TheArtist_Portrait.png/revision/latest?cb=20240517103041", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2021, "origin": "Original", "powers": "Ataque a distância" },
    { "id": 25, "name": "The Onryō", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/5f/K27_TheOnryo_Portrait.png/revision/latest?cb=20240517103045", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "24", "height": "Baixo", "realeseYear": 2022, "origin": "DLC", "powers": "Teleporte, Furtividade" },
    { "id": 26, "name": "The Dredge", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/K28_TheDredge_Portrait.png/revision/latest?cb=20240517103050", "gender": "Indefinido", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2022, "origin": "Original", "powers": "Teleporte" },
    { "id": 27, "name": "The Mastermind", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ec/K29_TheMastermind_Portrait.png/revision/latest?cb=20240517103054", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "40", "height": "Alto", "realeseYear": 2022, "origin": "DLC", "powers": "Mobilidade" },
    { "id": 28, "name": "The Knight", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/69/K30_TheKnight_Portrait.png/revision/latest?cb=20240517103100", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2022, "origin": "Original", "powers": "Invocação" },
    { "id": 29, "name": "The Skull Merchant", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/64/K31_TheSkullMerchant_Portrait.png/revision/latest?cb=20240517103102", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "24", "height": "Médio", "realeseYear": 2023, "origin": "Original", "powers": "Invocação" },
    { "id": 30, "name": "The Singularity", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/24/K32_TheSingularity_Portrait.png/revision/latest?cb=20240517103113", "gender": "Indefinido", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2023, "origin": "Original", "powers": "Teleporte" },
    { "id": 31, "name": "The Xenomorph", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/64/K33_TheXenomorph_Portrait.png/revision/latest?cb=20240517103121", "gender": "Indefinido", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2023, "origin": "DLC", "powers": "Ataque a distância" },
    { "id": 32, "name": "The Good Guy", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/81/K34_TheGoodGuy_Portrait.png/revision/latest?cb=20240517103130", "gender": "Masculino", "velocity": "4.4", "terrorRadius": "32", "height": "Baixo", "realeseYear": 2023, "origin": "DLC", "powers": "Mobilidade" },
    { "id": 33, "name": "The Unknown", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/51/K35_TheUnknown_Portrait.png/revision/latest?cb=20240517102932", "gender": "Indefinido", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2024, "origin": "Original", "powers": "Ataque a distância" },
    { "id": 34, "name": "The Lich", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f0/K36_TheLich_Portrait.png/revision/latest?cb=20240517102944", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2024, "origin": "DLC", "powers": "Ataque a distância, Mobilidade" },
    { "id": 35, "name": "The Dark Lord", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/62/K37_TheDarkLord_Portrait.png/revision/latest?cb=20240806171117", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2024, "origin": "DLC", "powers": "Mobilidade, Ataque a distância" },
    { "id": 36, "name": "The Cannibal", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6f/K09_TheCannibal_Portrait.png/revision/latest?cb=20240517102942", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2017, "origin": "DLC", "powers": "M1" },
    { "id": 37, "name": "The Houndmaster", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/96/K38_TheHoundmaster_Portrait.png/revision/latest?cb=20241107164729", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2024, "origin": "Original", "powers": "Invocação" },
    { "id": 38, "name": "The Ghoul", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c9/K39_TheGhoul_Portrait.png/revision/latest?cb=20250516092323", "gender": "Masculino", "velocity": "4.6", "terrorRadius": "40", "height": "Médio", "realeseYear": 2025, "origin": "DLC", "powers": "Mobilidade" },
    { "id": 39, "name": "The Demogorgon", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/75/K17_TheDemogorgon_Portrait.png/revision/latest?cb=20240517103057", "gender": "Indefinido", "velocity": "4.6", "terrorRadius": "32", "height": "Alto", "realeseYear": 2019, "origin": "DLC", "powers": "Mobilidade" },
    { "id": 40, "name": "The Animatronic", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/02/K40_TheAnimatronic_Portrait.png/revision/latest?cb=20250527205857", "gender": "Masculino", "velocity": "4.4", "terrorRadius": "24", "height": "Médio", "realeseYear": 2025, "origin": "DLC", "powers": "Ataque a distância" },
    { "id": 41, "name": "The Krasue", "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/K41_TheKrasue_Portrait.png", "gender": "Feminino", "velocity": "4.6", "terrorRadius": "32", "height": "Médio", "realeseYear": 2025, "origin": "Original", "powers": "Ataque a distância, Mobilidade" },
    { "id": 42, "name": "The First", "image": "./imagens/firstCerto.png", "gender": "Masculino", "velocity": "4.4", "terrorRadius": "32", "height": "Médio", "realeseYear": 2026, "origin": "DLC", "powers": "Ataque a distância, Mobilidade" },
    { "id": 43, "name": "The Slasher", "image": "./imagens/slasherCerto.png", "gender": "Masculino", "velocity": "4.4", "terrorRadius": "32", "height": "Médio", "realeseYear": 2026, "origin": "DLC", "powers": "Ataque a distância, Mobilidade, Furtividade" },
    { "id": 44, "name": "The Judgment", "image": "./imagens/judmentCerta.png", "gender": "Indefinido", "velocity": "4.4", "terrorRadius": "32", "height": "Alto", "realeseYear": 2026, "origin": "Original", "powers": "Ataque a distância" }

];

const killerSecreto = killers[Math.floor(Math.random() * killers.length)];
console.log("O killer secreto é:", killerSecreto.name);

function jogar() {
    const input = document.getElementById("inputKiller");
    const nomeChutado = input.value.trim();
    verificarChute(nomeChutado);
    input.value = "";
}

function verificarChute(nomeChutado) {
    const palpite = killers.find(k => k.name.toLowerCase() === nomeChutado.toLowerCase());

    if (!palpite) {
        alert("Killer não encontrado!");
        return;
    }

    const resultado = {
        name: palpite.name === killerSecreto.name ? "correto" : "errado",
        gender: palpite.gender === killerSecreto.gender ? "correto" : "errado",
        velocity: compararValores(palpite.velocity, killerSecreto.velocity),
        terrorRadius: compararValores(palpite.terrorRadius, killerSecreto.terrorRadius),
        height: palpite.height === killerSecreto.height ? "correto" : "errado",
        realeseYear: compararValores(palpite.realeseYear, killerSecreto.realeseYear),
        origin: palpite.origin === killerSecreto.origin ? "correto" : "errado",
        powers: compararPoderes(palpite.powers, killerSecreto.powers)
    };

    exibirNaTela(palpite, resultado);

    if (resultado.name === "correto") {
        setTimeout(() => {
            mostrarModalVitoria();
        }, 7000);
    }
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