document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    handleToDo(e.target.newtaskdescription.value)
  }) 
});

function handleToDo(todo){
      const output = document.createElement('li')
      const btn = document.createElement('button')
      btn.addEventListener('click', deleteToDo)
      output.textContent = `${todo}    `
      btn.textContent = 'X'
      output.appendChild(btn)
      document.querySelector('#tasks').appendChild(output)

}

function deleteToDo(e){
  e.target.parentNode.remove()
}
