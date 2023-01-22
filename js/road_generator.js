let y
let arrow_length 
let x
let vertical_arrow_height
let number_cell
let parc_wigth
let start_length
let between_centers_length
let arrow_wigth
// window.addEventListener("resize", , false); //Масштабируем страницу при растягивании окна
window.onresize = function(  ) {getScreenSize()};

function roadGenerator(number, status){

    if (status != '2'){   
        number_cell = number
        getScreenSize()
        arrowResize()
    }
}
function arrowResize() {
    x = number_cell.charAt(number_cell.length-1)
    if (x === '0') x=9
    else x--
    // console.log('x:', x)
    arrow_length = parc_wigth - start_length - between_centers_length * x
    // console.log('arrow_length:', arrow_length)

    if (number_cell <= 10) {
        horizontal_arrow1.style.width = arrow_length+'px'
        horizontal_arrow_u1.style.width = arrow_length-arrow_wigth+'px'
        horizontal_arrow_d1.style.width = '100%'

        horizontal_arrow2.style.width = '0%'
        horizontal_arrow_u2.style.width = '100%'
        horizontal_arrow_d2.style.width = '100%'

        vertical_arrow.style.height = vertical_arrow_height[1]+'px'
    }
    else if (10 < number_cell && number_cell <= 20) {
        horizontal_arrow2.style.width = arrow_length+'px'
        horizontal_arrow_u2.style.width = arrow_length-arrow_wigth+'px'
        horizontal_arrow_d2.style.width = '100%'

        horizontal_arrow1.style.width = '0%'
        horizontal_arrow_u1.style.width = '100%'
        horizontal_arrow_d1.style.width = '100%'

        vertical_arrow.style.height = vertical_arrow_height[0]+'px'
    }
    else if (20 < number_cell && number_cell <= 30) {
        horizontal_arrow2.style.width = arrow_length+'px'
        horizontal_arrow_d2.style.width = arrow_length-arrow_wigth+'px'
        horizontal_arrow_u2.style.width = '100%'

        horizontal_arrow1.style.width = '0%'
        horizontal_arrow_u1.style.width = '100%'
        horizontal_arrow_d1.style.width = '100%'

        vertical_arrow.style.height = vertical_arrow_height[0]+'px'
    }
    // console.log(parc_wigth, start_length, between_centers_length, x)
    // console.log(arrow_length)
}


function getScreenSize(){
    let screen_wigth = window.innerWidth
    // console.log(screen_wigth)
    if(screen_wigth < 988)
    {
        parc_wigth = 350
        start_length = 15  
        between_centers_length = 35
        arrow_wigth = 5
        vertical_arrow_height = [92, 203]
        // console.log('size normal')
    } 
    if(screen_wigth < 500)
    {
        parc_wigth = 160
        start_length = 7  
        between_centers_length = 16
        arrow_wigth = 2
        vertical_arrow_height = [43.8, 98.7]
        console.log('size phone')
    }
    else{
        parc_wigth = 700
        start_length = 30  
        between_centers_length = 70
        arrow_wigth = 10
        vertical_arrow_height = [185, 405]
        // console.log('size big')
    }
    // console.log(vertical_arrow_height)
    arrowResize()
}