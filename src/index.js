document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      addTask(newTask)
      form.reset()
    })
  });
  
  //e.target.new-task.description.value was not working
  const newTask = document.getElementById('new-task-description')

  const addTask = task => {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteTask)
    btn.textContent = 'x'
    li.appendChild(document.createTextNode(newTask.value));
    li.appendChild(btn)
    document.querySelector('#tasks').appendChild(li)
  }

const deleteTask = (e) => {
  e.target.parentNode.remove()
}
