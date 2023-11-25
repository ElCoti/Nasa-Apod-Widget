// Enter the API KEY
const API_TOKEN = 'VAdVBtfgzOfIwYd0ZG7cFsUinOgkxqZeegNdW52c'

// Do not change anything below this line
const w = new ListWidget()

const request = new Request('https://api.nasa.gov/planetary/apod?api_key='+API_TOKEN)
request.loadJSON().then(json => {
    const imageR = new Request(json["url"])
    imageR.loadImage().then(img => {
        w.backgroundImage = img
        w.presentLarge()
    })

})