function doFirst() {

    document.getElementById('theForm').onsubmit = addTask
}

tasks = []

function addTask(e) {
    e.preventDefault()

    let task = document.getElementById('task')
    let feedback = ``

    tasks.push(task.value)
    task.value = ''

    feedback += `You have ${tasks.length} task(s) in To-Do List.`
    feedback += `<ol><li>`
    feedback += tasks.join(`</li><li>`)
    feedback += `</li></ol>`

    document.getElementById('feedback').innerHTML = feedback
}
window.addEventListener('load', doFirst)