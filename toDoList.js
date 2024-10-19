//get list from storage or make an empty one
const todos = JSON.parse(localStorage.getItem('todo-list')) || []
//get html elements
const input = document.querySelector('#new-todo')
const todoList = document.querySelector('.todo-list')
const submitButton = document.querySelector('#todoSubmit')

const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach(({ text }) => {
        //create and add li element
        const li = document.createElement('li')
        li.textContent = text
        todoList.append(li)
})}

renderTodos()

submitButton.addEventListener('click', () => {
    todos.push({ text: input.value , completed: false})
    localStorage.setItem('todo-list', JSON.stringify(todos))
    renderTodos()
})


