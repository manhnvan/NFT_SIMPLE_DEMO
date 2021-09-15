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


window.onload = async function () {

    await ERC721Sm.load()

    const urlSearchParams = new URLSearchParams(window.location.search);
    const { enemy, my } = Object.fromEntries(urlSearchParams.entries());

    const playerTemp = await ERC721Sm.getTokenDetail(my)
    console.log(playerTemp)
    const playerElement = `<img src="https://ipfs.io/ipfs/${playerTemp.run_action[0].IpfsHash}" class="card-img-top" alt="...">`
    $('#player').append(playerElement)
    const competitorTemp = await ERC721Sm.getTokenDetail(enemy)
    const competitorElement = `<img src="https://ipfs.io/ipfs/${competitorTemp.run_action[0].IpfsHash}" class="card-img-top" alt="...">`
    $('#competitor').append(competitorElement)


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

    const listMonstersPlayerElem = document.querySelectorAll("#monsters-for-player .flip-card");
    const listMonstersCompetitorElem = document.querySelectorAll("#monsters-for-competitor .flip-card");
    let i = 0;
    let roadPlayer = 0;
    let roadCompetitor = 0;
    const loop = setInterval(() => {
        switch (monstersForPlayer[i]) {
            case 1:
                roadPlayer += (playerTemp.red_barricade * playerTemp.base_speed)
            case 2:
                roadPlayer += (playerTemp.green_barricade * playerTemp.base_speed)
            case 3:
                roadPlayer += (playerTemp.yellow_barricade * playerTemp.base_speed)
            case 4:
                roadPlayer += (playerTemp.blue_barricade * playerTemp.base_speed)
            case 5:
                roadPlayer += (playerTemp.ping_barricade * playerTemp.base_speed)
            case 6:
                roadPlayer += (playerTemp.black_barricade * playerTemp.base_speed)
        }

        switch (monstersForCompetitor[i]) {
            case 1:
                roadCompetitor += (playerTemp.red_barricade * playerTemp.base_speed)
            case 2:
                roadCompetitor += (playerTemp.green_barricade * playerTemp.base_speed)
            case 3:
                roadCompetitor += (playerTemp.yellow_barricade * playerTemp.base_speed)
            case 4:
                roadCompetitor += (playerTemp.blue_barricade * playerTemp.base_speed)
            case 5:
                roadCompetitor += (playerTemp.ping_barricade * playerTemp.base_speed)
            case 6:
                roadCompetitor += (playerTemp.black_barricade * playerTemp.base_speed)
        }
        listMonstersPlayerElem[i].classList.add("flip-card-flip")
        listMonstersCompetitorElem[i].classList.add("flip-card-flip")
        i++;
        if (i >= 6) {
            console.log(roadPlayer, roadCompetitor)
            if (roadPlayer > roadCompetitor) {
                ERC721Sm.getPrice(my)
                alert("You Win")
            } else {
                alert("You Lose")
            }
            window.location.href = `http://localhost:3000/list_room.html`
            clearInterval(loop)
        }
    }, 1000)


}
