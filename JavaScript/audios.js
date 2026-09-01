const audioSkillCheck = new Audio("audio/skillCheck.mp3");
const audioGoodSkillCheck = new Audio("audio/goodSkillCheck.mp3");
const audioPerfectSkillCheck = new Audio("audio/perfectSkillCheck.mp3");
const audioWrongSkillCheck = new Audio("audio/wrongSkillCheck.mp3");
audioSkillCheck.volume = 0.2;
audioGoodSkillCheck.volume = 0.05;
audioPerfectSkillCheck.volume = 0.05;
audioWrongSkillCheck.volume = 0.1;

document.getElementById("inputKiller").addEventListener("focus", () => {

    audioSkillCheck.currentTime = 0;
    audioSkillCheck.play();
    const musica = document.getElementById("musicaFundo");
    musica.volume = 0.1;
    musica.play()
});