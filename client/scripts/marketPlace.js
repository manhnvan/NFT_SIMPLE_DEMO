$(() => {
    $(window).load(async () => {
        console.log(ERC721Sm)
        await ERC721Sm.load()
        const tokenIds = await ERC721Sm.getBalance(ERC721Sm.account);
        console.log(tokenIds)
    })
})