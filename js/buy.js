
let seleced_num = 0
const text = document.getElementById('text')
const code = document.getElementById('code')
const horizontal_arrow1 = document.getElementById("parc_horizontal_arrow1")
const horizontal_arrow_u1 = document.getElementById("parc_horizontal_arrow_u1")
const horizontal_arrow_d1 = document.getElementById("parc_horizontal_arrow_d1")
const horizontal_arrow2 = document.getElementById("parc_horizontal_arrow2")
const horizontal_arrow_u2 = document.getElementById("parc_horizontal_arrow_u2")
const horizontal_arrow_d2 = document.getElementById("parc_horizontal_arrow_d2")
const vertical_arrow = document.getElementById("parc_vertical_arrow")

function selected_number(number){
    const obj = document.getElementById('cell'+number)
    const status = obj.getAttribute('select')

    roadGenerator(String(number), status)

    if (status == '0'){
        document.getElementById('cell'+seleced_num).style.backgroundColor = '#555'
        document.getElementById('cell'+seleced_num).setAttribute('select', '0')
        obj.style.backgroundColor = 'green'
        obj.setAttribute('select', '1')
        seleced_num = number
    } else if (status == '1'){
        obj.style.backgroundColor = '#555'
        obj.setAttribute('select', '0')
        horizontal_arrow1.style.width = '0%'
        horizontal_arrow_u1.style.width = '0%'
        horizontal_arrow_d1.style.width = '0%'
        horizontal_arrow2.style.width = '0%'
        horizontal_arrow_u2.style.width = '0%'
        horizontal_arrow_d2.style.width = '0%'
        vertical_arrow.style.height = '0%'
    } 
}

function creatQr(){
    let qrdata = ['id'+(Math.floor(Math.random() * 30)+1), new Date()]
    const qr = document.getElementById('qrcode')
    console.log('Сгенерирован код :', qrdata)
    qr.src = 'https://chart.googleapis.com/chart?cht=qr&chl='+qrdata+'&chs=180x180&choe=UTF-8&chld=L|2'
    // qr.src = 'https://chart.googleapis.com/chart?cht=qr&chl=https://www.youtube.com/watch?v=dQw4w9WgXcQ&chs=180x180&choe=UTF-8&chld=L|2'
    qr.style = 'display: block;'
}

function buy(){
    
    
    code.style.visibility = 'visible'
    console.log('*что-то произошло👀*')
    creatQr()
}
