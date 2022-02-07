export class TodoList {
    constructor() {
        this.arrayList = [];
    }
    addTodolist(todo) {
        this.arrayList.push(todo);
    }
    removeTodo(index) {
        this.arrayList.splice(index, 1);
    }
    showList() {
        let content = ""
        content = this.arrayList.reduceRight((element, item, index) => {
            element += `
            <li>
                <span>${item.textTodo}</span>
                <div class="buttons" >
                    <button class="remove" data-status="${item.status}" data-index="${index}" onclick="removeTodoList(event)">
                        <i class="fa fa-trash-alt" ></i>
                    </button>
                    <button class="complete" data-index="${index}" data-status="${item.status}" onclick="completed(event)">
                         <i class="far fa-check-circle"></i>
                         <i class="fas fa-check-circle"></i>
                    </button>   
                </div>
            </li>
            `
            return element
        }, '')
        return content
    }
    sortElement(ischeck) {
        this.arrayList.sort((sortA, sortB) => {
            let text1 = sortA.textTodo.toLowerCase();
            let text2 = sortB.textTodo.toLowerCase();
            return text2.localeCompare(text1)
        })
        if (ischeck) {
            this.arrayList.reverse()
        }

    }
}