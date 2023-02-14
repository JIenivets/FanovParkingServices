let booked_list = _.shuffle(_.range(1,31)).slice(0,Math.floor(Math.random() * 15)+1)
document.getElementById('text').innerText = 'Количество свободных мест: '+ (30 - Number(booked_list.length))
console.log(booked_list)
for(let i of booked_list){
    const cell = document.getElementById('cell'+ i)
    cell.setAttribute('select', '2')
    cell.style.backgroundColor = '#bd0202'
}