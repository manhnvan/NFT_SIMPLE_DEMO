console.log("game.js")

function randomMonsters() {
    const allMonsters = []
    for (let i = 0; i < 6; i++) {
        allMonsters.push(Math.floor((Math.floor(Math.random() * 1024) * Math.random()) % 6) + 1)
    }
    return allMonsters
}

function useCreateMonsters() {
    const monstersForPlayer = randomMonsters();
    const monstersForCompetitor = randomMonsters();
    return [monstersForPlayer, monstersForCompetitor]
}

function createHTMLCard(imageSrc) {
    const elem = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                </div>
                <div class="flip-card-back">
                    <img src="${imageSrc}" alt="monster" style="width:300px; height:300px;">
                </div>
            </div>
        </div>
        `
    return elem;
}


window.onload = function () {
    // create monsters
    const [monstersForPlayer, monstersForCompetitor] = useCreateMonsters();

    for (let i of monstersForPlayer) {
        let elemPlayer = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                </div>
                <div class="flip-card-back">
                    <img src="assets/jelly/Jelly (${i}).png" alt="monster ${i}" style="width:150px; height:150px;">
                </div>
            </div>
        </div>
        `
        $("#monsters-for-player").append(elemPlayer)

    }

    for (let i of monstersForCompetitor) {
        let elemCompetitor = `
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                </div>
                <div class="flip-card-back">
                    <img src="assets/jelly/Jelly (${i}).png" alt="monster ${i}" style="width:150px; height:150px;">
                </div>
            </div>
        </div>
        `
        $("#monsters-for-competitor").append(elemCompetitor)
    }
}
