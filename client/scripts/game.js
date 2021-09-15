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

    // const player = await ERC721Sm.getTokenDetail(my)
    // console.log(player)
    // const competitor = await ERC721Sm.getTokenDetail(enemy)
    // console.log(competitor)

    const playerTemp = {
        "name": "santasprites",
        "run_action": [
            {
                "IpfsHash": "QmSoo6Zh8XcsdJBkSC4DJvj1spXLhfsCrhud2dJokLFncF",
                "PinSize": 144143,
                "Timestamp": "2021-09-12T05:00:12.487Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmZNr7bD6jh5fqHiZNHquxHouzimoFZZLURCLyLagnQFRU",
                "PinSize": 142964,
                "Timestamp": "2021-09-12T05:00:12.221Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmTaTrj7NG4S99iZfV8iTCiHqXTqHbnWk3V23CJWB8M1YA",
                "PinSize": 143293,
                "Timestamp": "2021-09-12T05:00:13.728Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmTdNDV12xBswq3syV7U1fntNSJqYcjRccYk6eHsipijEW",
                "PinSize": 143523,
                "Timestamp": "2021-09-12T05:00:08.710Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmdxuG3R6tXeYEGHSduKjbiggx626ioq2ddfquSZsCzQGv",
                "PinSize": 144976,
                "Timestamp": "2021-09-12T03:15:12.256Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmeRfsmrsWq8nQHAiJFmo2GPy3aHDd2DQ6sdV8UgzFGLH9",
                "PinSize": 144659,
                "Timestamp": "2021-09-12T05:00:11.217Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmVwhaoRzsL3H6p9LxAgcBjwJ6uCnKJHi3DJHTSWAzH8HF",
                "PinSize": 144744,
                "Timestamp": "2021-09-12T05:00:11.430Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmVuZNvDkpSUkhnhBbE4YQ8eNAGuwW7RTxR5MvpYjNU414",
                "PinSize": 144949,
                "Timestamp": "2021-09-12T03:10:11.045Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmYH8pzBeCYQcyrNUct475nwnzrbsbpyZ89KxzK8YTi4Ae",
                "PinSize": 148805,
                "Timestamp": "2021-09-12T05:00:09.713Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmbfuUz1WT8UB93pTtS1jCyne5f9Zt61mKZofBvDsEodH3",
                "PinSize": 145735,
                "Timestamp": "2021-09-12T05:00:09.056Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmUufAfXLBxfnEo4z9oT7eVYsv2YNV5i3aoBjBAzUXtehL",
                "PinSize": 145829,
                "Timestamp": "2021-09-12T05:00:10.111Z",
                "isDuplicate": true
            }
        ],
        "base_speed": 100,
        "red_barricade": 1.078623735606189,
        "green_barricade": 0.8935597211876471,
        "yellow_barricade": 1.3078353876666609,
        "blue_barricade": 1.1508379788274392,
        "ping_barricade": 1.1509110459815977,
        "black_barricade": 0.8105263603071179
    }

    const competitorTemp = {
        "name": "santasprites",
        "run_action": [
            {
                "IpfsHash": "QmSoo6Zh8XcsdJBkSC4DJvj1spXLhfsCrhud2dJokLFncF",
                "PinSize": 144143,
                "Timestamp": "2021-09-12T05:00:12.487Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmZNr7bD6jh5fqHiZNHquxHouzimoFZZLURCLyLagnQFRU",
                "PinSize": 142964,
                "Timestamp": "2021-09-12T05:00:12.221Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmTaTrj7NG4S99iZfV8iTCiHqXTqHbnWk3V23CJWB8M1YA",
                "PinSize": 143293,
                "Timestamp": "2021-09-12T05:00:13.728Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmTdNDV12xBswq3syV7U1fntNSJqYcjRccYk6eHsipijEW",
                "PinSize": 143523,
                "Timestamp": "2021-09-12T05:00:08.710Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmdxuG3R6tXeYEGHSduKjbiggx626ioq2ddfquSZsCzQGv",
                "PinSize": 144976,
                "Timestamp": "2021-09-12T03:15:12.256Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmeRfsmrsWq8nQHAiJFmo2GPy3aHDd2DQ6sdV8UgzFGLH9",
                "PinSize": 144659,
                "Timestamp": "2021-09-12T05:00:11.217Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmVwhaoRzsL3H6p9LxAgcBjwJ6uCnKJHi3DJHTSWAzH8HF",
                "PinSize": 144744,
                "Timestamp": "2021-09-12T05:00:11.430Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmVuZNvDkpSUkhnhBbE4YQ8eNAGuwW7RTxR5MvpYjNU414",
                "PinSize": 144949,
                "Timestamp": "2021-09-12T03:10:11.045Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmYH8pzBeCYQcyrNUct475nwnzrbsbpyZ89KxzK8YTi4Ae",
                "PinSize": 148805,
                "Timestamp": "2021-09-12T05:00:09.713Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmbfuUz1WT8UB93pTtS1jCyne5f9Zt61mKZofBvDsEodH3",
                "PinSize": 145735,
                "Timestamp": "2021-09-12T05:00:09.056Z",
                "isDuplicate": true
            },
            {
                "IpfsHash": "QmUufAfXLBxfnEo4z9oT7eVYsv2YNV5i3aoBjBAzUXtehL",
                "PinSize": 145829,
                "Timestamp": "2021-09-12T05:00:10.111Z",
                "isDuplicate": true
            }
        ],
        "base_speed": 100,
        "red_barricade": 1.078623735606189,
        "green_barricade": 0.8935597211876471,
        "yellow_barricade": 1.3078353876666609,
        "blue_barricade": 1.1508379788274392,
        "ping_barricade": 1.1509110459815977,
        "black_barricade": 0.8105263603071179
    }

    console.log(playerTemp.base_speed)

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
                ERC721Sm.getPrice()
                alert("You Win")
            } else {
                alert("You Lose")
            }
            clearInterval(loop)
        }
    }, 1000)


}
