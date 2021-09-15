$(() => {
    $(window).load(async () => {
        ERC721Sm.load()
        const tokenIds = await ERC721Sm.getBalance();
        console.log(tokenIds)
    })
})