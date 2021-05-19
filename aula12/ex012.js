var Agora = new Date()  //hora do sistema
var h =  Agora.getHours()
var m = Agora.getMinutes()
console.log(`Agora são exatamente ${h} horas e ${m} Minutos.`)

if (h < 12) {
    console.log('Bom Dia!')
} else if (h < 18 ){
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite')
}