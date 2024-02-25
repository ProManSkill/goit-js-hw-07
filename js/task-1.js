const allLists = document.querySelectorAll('.item')
console.log(`Number of categories: ${allLists.length}`)

const titles = document.querySelectorAll("h2");
titles.forEach(function (title) { 
    const titleName = title.textContent
    console.log(`Category: ${titleName}`)
    const lists = title.parentElement.querySelectorAll("li")
    console.log(`Elements: ${lists.length}`)
})




