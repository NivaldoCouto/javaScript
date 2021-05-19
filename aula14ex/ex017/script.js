function gerar() {
    // pegar numero digitado user
    let nun = document.getElementById('txtn')
    let st = document.getElementById('seltab')
        // validação caso campo tiver em branco
    if (nun.value.length == 0) {
        alert('Por favor digite um numero!')
    } else {
        let n = Number(nun.value) //converter numero
        let c = 1 // começar o contador com 1
        st.innerHTML = '' // zera o campo
        while (c <= 10) {
            let item = document.createElement('option') // criar campo do select tag option
            item.text = `${n} x ${c} = ${n*c}` // mostra resultado
            st.appendChild(item) // add um elemento filho na tabuada que vai ser o item
            c++ // incrementar o valor de c 1, 2,3.....
        }
    }
}