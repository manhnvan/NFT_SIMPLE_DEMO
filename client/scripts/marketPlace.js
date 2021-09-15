console.log(App)

const renderToken = async () => {
    const tokenIds = await App.getAllNotOwnToken();
    console.log(tokenIds)
}
renderToken()
