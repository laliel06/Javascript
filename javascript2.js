let lista = [
    "Fernanda",
    "Maria",
    "Bruna",
    "Patricia"
]

const listaItem = document.getElementById("listaItem")

for (let i = 0; i < lista.length; i++) {
    var item = document.createElement("li")
    item.innerText = lista[i]
    listaItem.appendChild(item)
}

document.getElementById("mylist").innerHTML = lista

lista = lista.sort()

const listaOrdenada = document.getElementById("listaOrdenada")

for (let i = 0; i < lista.length; i++) {
    var item = document.createElement("li")
    item.innerText = lista[i]
    listaOrdenada.appendChild(item)
}

//-------------------------------------
const formulario = {
    numero1: document.getElementById("numero1"),
    numero2:  document.getElementById("numero2"),
    result: document.getElementById("result"),
    sendForm: function() {
        const number1 = parseInt(this.numero1.value)
        const number2 = parseInt(this.numero2.value)

        const total = number1 + number2

        this.result.innerHTML = "La soma de "+number1+" + "+number2+" es: "+total

    }
}