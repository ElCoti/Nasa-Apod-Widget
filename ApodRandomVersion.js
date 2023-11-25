// Enter the API KEY
const API_TOKEN = 'VAdVBtfgzOfIwYd0ZG7cFsUinOgkxqZeegNdW52c'

// Do not change anything below this line
const w = new ListWidget()

const request = new Request('https://api.nasa.gov/planetary/apod?api_key='+API_TOKEN+'&count=1')
request.loadJSON().then(images => {
    const json = images[0]
    const [year, month, day] = json["date"].split("-")

    const date = year.slice(2, 4) + month + day
    w.url = https://apod.nasa.gov/apod/ap${date}.html

    const imageR = new Request(json["url"])
    imageR.loadImage().then(img => {
        w.backgroundImage = img
        w.presentLarge()
    })
})