import { Todo } from "./todo.js"
import { TodoList } from "./todoList.js"
let todoList = new TodoList()
let complete = new TodoList()
const getEle = (id) => {
    return document.getElementById(id)
}

let addTextList = () => {
    let text = getEle("newTask").value
    let ulText = getEle("todo")
    let txtTodo = new Todo(text, "todo");
    if (text != "") {
        todoList.addTodolist(txtTodo)
        showListText(ulText)
    }
    getEle("newTask").value = ""
}
const showListText = (todo) => {
    todo.innerHTML = todoList.showList()
}
const showListTextComplete = (todo) => {
    todo.innerHTML = complete.showList()
}
getEle("addItem").addEventListener('click', () => {
    addTextList();
})
const removeTodoList = (e) => {
    let item = e.currentTarget.getAttribute("data-index")
    let itemComplete = e.currentTarget.getAttribute("data-status")
    let ulText = getEle("todo")
    let ulTextComplete = getEle("completed")
    if (itemComplete == "todo") {
        todoList.removeTodo(item)
        showListText(ulText)
    } else if (itemComplete == "complete") {
        complete.removeTodo(item)
        showListTextComplete(ulTextComplete)
    } else {
        alert("Please choose again!")
    }

}
window.removeTodoList = removeTodoList
const completed = (e) => {
    let index = e.currentTarget.getAttribute("data-index")
    let status = e.currentTarget.getAttribute("data-status")
    let ulText = getEle("todo")
    let ulTextComplete = getEle("completed")
    if (status == "todo") {
        let completeItem = todoList.arrayList.slice(index, index + 1)
        let object = new Todo(completeItem[0].textTodo, "complete")
        moveElement(todoList, complete, object, index)
        showListText(ulText)
        showListTextComplete(ulTextComplete)
    } else if (status == "complete") {
        let uncomplete = complete.arrayList.slice(index, index + 1)
        let object = new Todo(uncomplete[0].textTodo, "todo")
        moveElement(complete, todoList, object, index)
        showListText(ulText)
        showListTextComplete(ulTextComplete)
    } else {
        alert("Please choose again!")
    }
}
window.completed = completed

const moveElement = (start, arrive, obj, index) => {
    start.removeTodo(index)
    arrive.addTodolist(obj)
}
const sortTrue = () => {
    let ulText = getEle("todo")
    todoList.sortElement(false)
    showListText(ulText)
}
window.sortTrue = sortTrue
const sortFalse = () => {
    let ulText = getEle("todo")
    todoList.sortElement(true)
    showListText(ulText)
}
window.sortFalse = sortFalse