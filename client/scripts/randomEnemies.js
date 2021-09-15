const randomEnemies = () => {
    const roadEnemies = []
    for (let i = 0; i < 6; i++) {
        roadEnemies.push({
            id: Math.floor((Math.floor(Math.random() * 1024) * Math.random()) % 6),
            pos: 300 + i * 150 + Math.random() * 90
        })
    }
    return roadEnemies
}

const renderEnemy = (id, posX, posY) => {
    const yellowJelly = new PIXI.Texture.from(`../assets/jelly/Jelly (${id + 1}).png`)
    const enemy = new PIXI.Sprite(yellowJelly)
    enemy.anchor.set(0.5)
    enemy.position.set(posX, posY)
    enemy.width = 32
    enemy.height = 32
    runScreen.addChild(enemy)
}
