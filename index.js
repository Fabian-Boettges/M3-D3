let imageWrapper = document.querySelectorAll('svg')
let images = document.getElementsByTagName('img')
let test = document.querySelector('#test')
let card = document.querySelectorAll('#card')

// console.log(imageWrapper)
function loadImages()
{
    fetch("https://api.pexels.com/v1/search?query=cars", {
        headers: { Authorization: "Bearer 563492ad6f91700001000001019e8da5373c467d99250c3231c5499d" }

    })

        .then(response => response.json())
        .then(data =>
        {
            console.log(data)
            for (let dat of data.photos)
            // for (let i = 0; i < images.length; i++)
            {
                card.innerHTML = `<div>${data.photos}</div>`
                // test.photos[0].src.large
                // images[i] = images.photos[i].src.large
                // imageWrapper[i].style.display = 'none'

                // imageWrapper.innerHTML = `
                // <div>
                // <img src='${images.photos[i].src.medium}'>
                // </div>
                // `
            }
        })
}

