let itemList = []

let itemListElement = document.getElementById('itemListElement')
let input = document.getElementById('input')
let alertMessage = document.getElementById('alertMessage')
let emptyMessage = document.getElementById('emptyMessage')
let clear = document.getElementById('clear')

const saveItem = () => {
    const isItemAllreadyHave = itemList.includes(input.value)//inputa girilen degeri ikinci kez varmi diye kontrol ediyor. 'INCLUDES' ile kontrolu gerceklestiriyor.
    const nulls = input.value == ""
    if (nulls) {
        emptyMessage.style.display = 'block'
        alertMessage.style.display = 'none'
    } else {
        emptyMessage.style.display = 'none'
        if (isItemAllreadyHave) {
            alertMessage.style.display = 'block'
            input.value = ''
        }
        else {
            let pElement = document.createElement('p')
            itemListElement.appendChild(pElement)
            pElement.textContent = input.value
            itemList.push(input.value)
            saveLocalTodo(input.value);
            input.value = ''
            alertMessage.style.display = 'none'


            pElement.addEventListener('click', function () {
                pElement.style.textDecoration = 'line-through';
            })

            pElement.addEventListener('dblclick', function () {
                pElement.remove();
                itemList = []
                input.value = ''
                alertMessage.style.display = 'none'
                emptyMessage.style.display = 'none'
            })

            clear.addEventListener('click', function () {
                pElement.remove();
                itemList = []
                input.value = ''
                alertMessage.style.display = 'none'
                emptyMessage.style.display = 'none'
            })
        }

    }

    function saveLocalTodo(todo) {
        let key;
        if (localStorage.getItem("key") === null) {
            key = [];
        } else {
            key = JSON.parse(localStorage.getItem("key"))
        }

        key.push(todo)
        localStorage.setItem("key", JSON.stringify(key))
    }

    function getTodo() {
        let todos;
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos"))
        }
    }
}

