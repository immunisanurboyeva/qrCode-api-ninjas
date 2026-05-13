const form = document.querySelector('form')
const input = document.querySelector('input')
const image = document.querySelector('img')

let randomNum = getRandomInt(10000000000000, 1000000000000000)
input.value = randomNum
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    barCode(input.value)
})

const token = "GnxpyjjORxM1tGWnAHb104SzKiIG8McqnS7opIpX"
const API = `https://api-ninjas.com/api/barcode`

async function barCode(text){
    const res = await fetch( `https://api.api-ninjas.com/v1/barcodegenerate?format=png&type=upc&text=${text}`, {
        method: "GET",
        headers:{
            "X-Api-Key": `GnxpyjjORxM1tGWnAHb104SzKiIG8McqnS7opIpX`,
            Accept: "image/png"
        }
    })

    const data = await res.blob()
    const imgUrl = URL.createObjectURL(data)

    image.src = imgUrl
    image.style.borderColor = "#6bff97c7"
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
