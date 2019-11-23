menuAnimation = (item) => {
    item.classList.toggle("change");
   
    let menuItems = document.querySelectorAll('.item')
    menuItems.forEach( item => {
        item.classList.toggle('show')
    })
}


let tags = document.querySelectorAll('.tag')
tags.forEach( item => {
    item.addEventListener('mouseenter', () => {
        item.style.height = '130px'
        item.style.backgroundColor = '#33d2fd'
    })
    item.addEventListener('mouseleave', () => {
        item.style.height = '63px'
        item.style.backgroundColor = '#fff'
    })
})

