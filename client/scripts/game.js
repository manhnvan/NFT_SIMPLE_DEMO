console.log("game.js")

const NUMBER_OF_MONSTER = 16;

function randomMonsters() {
    const allMonsters = []
    for (let i = 0; i < NUMBER_OF_MONSTER; i++) {
        allMonsters.push(Math.floor((Math.floor(Math.random() * 1024) * Math.random()) % 6) + 1)
    }
    return allMonsters
}

function useCreateMonsters() {
    const monsterForLand1 = randomMonsters();
    const monsterForLand2 = randomMonsters();
    const monsterForLand3 = randomMonsters();
    const monsterForLand4 = randomMonsters();
    const monsterForLand5 = randomMonsters();
    return [monsterForLand1, monsterForLand2, monsterForLand3, monsterForLand4, monsterForLand5]
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

    // const playerTemp = await ERC721Sm.getTokenDetail(my)
    // console.log(playerTemp)
    // const playerElement = `<img src="https://ipfs.io/ipfs/${playerTemp.run_action[0].IpfsHash}" class="card-img-top" alt="...">`
    // $('#player').append(playerElement)
    // const competitorTemp = await ERC721Sm.getTokenDetail(enemy)
    // const competitorElement = `<img src="https://ipfs.io/ipfs/${competitorTemp.run_action[0].IpfsHash}" class="card-img-top" alt="...">`
    // $('#competitor').append(competitorElement)

    const playerTemp = { "name": "zombiegirls", "run_action": [{ "IpfsHash": "QmYkNoPjugXcGMMkpJYSn4BhBfBtVMU2BoV6r2pww31TnT", "PinSize": 102497, "Timestamp": "2021-09-12T03:15:08.971Z", "isDuplicate": true }, { "IpfsHash": "QmWGZwsqYcywkwKr2Gz4u7CBsGgLyjWKJpsz1aB7r8zdZX", "PinSize": 101820, "Timestamp": "2021-09-12T03:10:12.168Z", "isDuplicate": true }, { "IpfsHash": "QmUyYuW3PV3y4JgpXZQZ2ySnatstfJEyJFA2yfiN9ZyAsN", "PinSize": 107829, "Timestamp": "2021-09-12T03:15:38.740Z", "isDuplicate": true }, { "IpfsHash": "QmUnKmheH7DGx1cuZBciXzzH133f6Dfmw2Q3Jz13KWUucc", "PinSize": 108168, "Timestamp": "2021-09-12T05:15:07.118Z", "isDuplicate": true }, { "IpfsHash": "QmYmAwnhBduPMUKxTT4E12YHLBxAENCWWh1ytGFDzfWZvT", "PinSize": 109882, "Timestamp": "2021-09-12T05:15:06.924Z", "isDuplicate": true }, { "IpfsHash": "QmYaEbXy7fMCaJZZfnjmDJcQnUDP4r87kbHpxjvdmhZaQm", "PinSize": 108033, "Timestamp": "2021-09-12T05:15:09.633Z", "isDuplicate": true }, { "IpfsHash": "QmaAZforVsHp5LG3SiSNuWdp9ezeDy6mvRDpiu1arKKH5b", "PinSize": 106396, "Timestamp": "2021-09-12T05:15:09.615Z", "isDuplicate": true }, { "IpfsHash": "QmefpAWM45vfL5qSkcyTPSRckFT3X5hA6BG1RotwS7te6Z", "PinSize": 103631, "Timestamp": "2021-09-12T05:15:08.156Z", "isDuplicate": true }, { "IpfsHash": "QmbHnBz7Tf6wkc3oSMe5TqSuCvuLeq3EpPqPNdfssBqg9y", "PinSize": 103791, "Timestamp": "2021-09-12T03:15:30.154Z", "isDuplicate": true }, { "IpfsHash": "QmbfkDPXCeWBrj6Uj9rFSWaNnsfZHxNm4w9Cw2dd7jUjR7", "PinSize": 106422, "Timestamp": "2021-09-12T05:15:08.616Z", "isDuplicate": true }], "base_speed": 100, "red_barricade": 1.2508876680030931, "green_barricade": 1.0843079738584693, "yellow_barricade": 0.8816963669009414, "blue_barricade": 1.1144161610994487, "ping_barricade": 1.2948238135976697, "black_barricade": 0.8334254804721224 }

    const competitorTemp = { "name": "zombieboys", "run_action": [{ "IpfsHash": "QmeA4ceWFfrqaK3thwd3ZhbhXZbSWKSLvNGEQwWjm97weV", "PinSize": 90918, "Timestamp": "2021-09-12T05:10:10.817Z", "isDuplicate": true }, { "IpfsHash": "QmXjFKn3p2uyacFHGrXA2GBfP3Ln2wxRYmvpCDmW1yjEKk", "PinSize": 86462, "Timestamp": "2021-09-12T03:13:59.293Z", "isDuplicate": true }, { "IpfsHash": "QmX75b6Cu3JE4qe9kB6t1QpmneL3wJUy1U6ga1tfJ2jiwV", "PinSize": 95232, "Timestamp": "2021-09-12T05:10:11.157Z", "isDuplicate": true }, { "IpfsHash": "QmR2T4ZZPbVw89nyi66tJijm2B8uisMeDPVgN94viMMpji", "PinSize": 95123, "Timestamp": "2021-09-12T05:10:10.121Z", "isDuplicate": true }, { "IpfsHash": "QmUdX2khD9cbV96QrurBpkjccvNxeRzvQ6W6gCqvubkZQm", "PinSize": 96296, "Timestamp": "2021-09-12T03:15:37.729Z", "isDuplicate": true }, { "IpfsHash": "QmQgEqMaqgWPiz43E3kSfTp1q3UDTEWiB7LFxkzLUEboJC", "PinSize": 95645, "Timestamp": "2021-09-12T03:15:39.750Z", "isDuplicate": true }, { "IpfsHash": "QmSevx5e6GSpDb5jhFSN1N431u9KdxJ1NaALVY3qHLYoyj", "PinSize": 92736, "Timestamp": "2021-09-12T05:10:09.805Z", "isDuplicate": true }, { "IpfsHash": "QmPvcgSAqsZiXiVqY1pboWwaQ2CDK7tsJoptsUqc2PrDS5", "PinSize": 92380, "Timestamp": "2021-09-12T05:10:08.792Z", "isDuplicate": true }, { "IpfsHash": "QmYwA7mq7BHcpvQQhkrQ99rVhgmVxzWSeytdYC6H8Rvr3a", "PinSize": 92902, "Timestamp": "2021-09-12T03:13:58.283Z", "isDuplicate": true }, { "IpfsHash": "QmRNFfUGaSobZG3ERzheoJmDV4oXfwHcouhroC7NVmQTCs", "PinSize": 94801, "Timestamp": "2021-09-12T05:10:09.084Z", "isDuplicate": true }], "base_speed": 100, "red_barricade": 0.8621460226035059, "green_barricade": 1.0720958326532657, "yellow_barricade": 0.9939405371822997, "blue_barricade": 0.9697934478648799, "ping_barricade": 1.344709458866593, "black_barricade": 1.3780578870348323 }

    const playerElement = `<img src="../assets/dog/Run (1).png" class="card-img-top" alt="...">`
    $('#player').append(playerElement)

    const competitorElement = `<img src="../assets/cat/Run (1).png" class="card-img-top" alt="...">`
    $('#competitor').append(competitorElement)


    // create monsters
    const monsterMap = useCreateMonsters();
    console.log(monsterMap)

    for (let roadIdx = 0; roadIdx < 5; roadIdx++) {
        for (let i = 0; i < NUMBER_OF_MONSTER; i++) {
            let elemPlayer = `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                    </div>
                    <div class="flip-card-back">
                        <img src="assets/jelly/Jelly (${monsterMap[roadIdx][i]}).png" id="monster-${roadIdx}-${i}" alt="monster ${monsterMap[roadIdx][i]}" style="width:50px; height:50px;">
                    </div>
                </div>
            </div>
            `
            $(`#monsters-land-${roadIdx + 1}`).append(elemPlayer)

        }
    }

    const monsterLand1Elem = document.querySelectorAll("#monsters-land-1 .flip-card");
    const monsterLand2Elem = document.querySelectorAll("#monsters-land-2 .flip-card");
    const monsterLand3Elem = document.querySelectorAll("#monsters-land-3 .flip-card");
    const monsterLand4Elem = document.querySelectorAll("#monsters-land-4 .flip-card");
    const monsterLand5Elem = document.querySelectorAll("#monsters-land-5 .flip-card");
    // start variable
    let i = 0;

    let roadPlayer = 0;
    let roadCompetitor = 0;

    let playerStartPoint = prompt("Chọn điểm bắt đầu (1 -> 5):", 1) - 1;
    let competitorStartPoint = Math.floor((Math.floor(Math.random() * 1024) * Math.random()) % 6);

    let playerPoint = playerStartPoint;
    let competitorPoint = competitorStartPoint;

    flipNext()

    document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.add("player-point")
    document.getElementById(`monster-${competitorPoint}-${i}`).parentNode.classList.add("competitor-point")

    i += 1;
    flipNext()

    addEventListener("keyup", (e) => {
        handleKeyUp(e)
    })

    function handleKeyUp (e) {
        if (e.keyCode === 40) {
            document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.remove("player-point")
            playerPoint += playerPoint >= 0 && playerPoint < 4 ? 1 : 0
            document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.add("player-point")
        } else if (e.keyCode === 38) {
            document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.remove("player-point")
            playerPoint -= playerPoint > 0 && playerPoint < 5 ? 1 : 0
            document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.add("player-point")
        } else if (e.keyCode === 32) {
            document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.remove("player-point")
            playerPoint += 0
            document.getElementById(`monster-${playerPoint}-${i}`).parentNode.classList.add("player-point")
        }

        switch (monsterMap[playerPoint][i]) {
            case 1:
                roadPlayer += (playerTemp.red_barricade * playerTemp.base_speed)
                break;
            case 2:
                roadPlayer += (playerTemp.green_barricade * playerTemp.base_speed)
                break;
            case 3:
                roadPlayer += (playerTemp.yellow_barricade * playerTemp.base_speed)
                break;
            case 4:
                roadPlayer += (playerTemp.blue_barricade * playerTemp.base_speed)
                break;
            case 5:
                roadPlayer += (playerTemp.ping_barricade * playerTemp.base_speed)
                break;
            case 6:
                roadPlayer += (playerTemp.black_barricade * playerTemp.base_speed)
                break;
        }

        competitorPoint += (Math.random() < 0.7 ? (Math.random() < 0.4 ? -1 : 0) : 1);
        if (competitorPoint < 0) {
            competitorPoint = 0;
        } else if (competitorPoint >= 4) {
            competitorPoint = 4;
        }

        switch (monsterMap[competitorPoint][i]) {
            case 1:
                roadCompetitor += (competitorTemp.red_barricade * competitorTemp.base_speed)
                break;
            case 2:
                roadCompetitor += (competitorTemp.green_barricade * competitorTemp.base_speed)
                break;
            case 3:
                roadCompetitor += (competitorTemp.yellow_barricade * competitorTemp.base_speed)
                break;
            case 4:
                roadCompetitor += (competitorTemp.blue_barricade * competitorTemp.base_speed)
                break;
            case 5:
                roadCompetitor += (competitorTemp.ping_barricade * competitorTemp.base_speed)
                break;
            case 6:
                roadCompetitor += (competitorTemp.black_barricade * competitorTemp.base_speed)
                break;
        }

        document.getElementById(`monster-${competitorPoint}-${i}`).parentNode.classList.add("competitor-point")
        i++;
        if (i >= NUMBER_OF_MONSTER) {

            if (roadPlayer > roadCompetitor) {
                ERC721Sm.getPrice(my)
                alert("Win")
            } else {
                alert("Lose")
            }
        }
        flipNext()
    }

    function flipNext() {
        monsterLand1Elem[i].classList.add("flip-card-flip")
        monsterLand2Elem[i].classList.add("flip-card-flip")
        monsterLand3Elem[i].classList.add("flip-card-flip")
        monsterLand4Elem[i].classList.add("flip-card-flip")
        monsterLand5Elem[i].classList.add("flip-card-flip")
    }
}
