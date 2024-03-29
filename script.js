const textarea = document.getElementById('textarea');
const tagsdiv = document.getElementById("tags");

textarea.focus()
textarea.addEventListener('keyup', (e) => {
    createTag(e.target.value)

})


function createTag(input) {

    const tags = input.split('-').filter(tag => tag.trim() !== "").map(tag => tag.trim())
    tagsdiv.innerHTML = ''
    tags.forEach(tag => {
        let temp = document.createElement('span')
        temp.classList.add('tag')
        temp.innerText = tag;
        tagsdiv.appendChild(temp)
    })
}

window.addEventListener('dragstart',(e)=>{
console.log('dragstart')
})
window.addEventListener('dragend',(e)=>{
console.log('dragend')
})
window.addEventListener('dragenter',(e)=>{
console.log('Entering drag')
})