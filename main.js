window.onload = () => {
    
    const todos = JSON.parse(localStorage.getItem("todos")) || [];//lo primero que hara la app es renderizar los 
    //elementos que se encuentren dentro del arreglo todo

    const render = () => {
        const todoList = document.getElementById("todo-list");
        const todoTemplate = todos.map(t => `<li>${t}</li>`)
        todoList.innerHTML = todoTemplate.join("");
        const elementos = document.querySelectorAll("#todo-list li");
        //ciclo forEach
        elementos.forEach((li, indice) =>{
            li.addEventListener("click", ()=>{
                li.parentNode.removeChild(li);
                todos.splice(indice,1);
                actualizaTodos(todos)//Esta funcion actualiza el estado de el array
                render()//actualiza las posiciones del array
            })
        })
    }

    const actualizaTodos = (todos) =>{
        const todoStrings = JSON.stringify(todos)
        localStorage.setItem("todos", todoStrings)
    }

    render()//this is render nos permitira que no se borre los items al recargar

    const form = document.getElementById("todo-form");
    form.onsubmit = (e) =>{//onsubmit es una funcion que captura el evento de click 
        e.preventDefault()
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = "";//vaciamos input
        todos.push(todoText)//asignamos el valor de todo a todoText y lo asignamos a arreglo todos
        actualizaTodos(todos)
        render()
    }
}
const formText = document.querySelector("#form-text-lenght");

function capturarValor(param){
    let valorInput = param.value
    console.log(valorInput);
    quitarEspacios(valorInput)
}

function quitarEspacios(param){
    let espacioString = param.trim()
    console.log(espacioString)
    lengthText(espacioString)
}

function lengthText(param){
    let lengthInput = param.length;
    console.log(lengthInput)
    renderValue(lengthInput);
}

function renderValue(param){
    console.log(`El length del string es ${param}`)
}

formText.onsubmit = (e) =>{
    e.preventDefault()
    const inputText = document.querySelector("#input-text");
    capturarValor(inputText);
}

