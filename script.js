let navigator = document.querySelector('.menu-bar')
let nav = document.querySelector('.nav')

navigator.addEventListener('click', () => {
    if (navigator.className === 'menu-bar' && nav.className === 'nav') {
        navigator.className += ' active'
        nav.className += ' nav-display'
    } else {
        navigator.className = 'menu-bar'
        nav.className = 'nav'
    }
})

let slide = document.querySelectorAll('.slide-content')
let next = document.querySelector('.nxt-btn')
let previous = document.querySelector('.prev-btn')

// next.addEventListener('click', () => {
//     slide.scrollBy(200, 0)
// })
    let x = 0
    let index = 1;
next.addEventListener('click', () => {
    index += 2;
    if (index > slide.length) {
        index = 1
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
    }
    slide[index - 1].style.display = "block";
    slide[index].style.display = "block";
})

previous.addEventListener('click', () => {
    index -= 2
    if (index < 1) {
        index = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";  
    }
    // console.log(index);
    slide[index - 2].style.display = "block";
    slide[index - 1].style.display = "block";
})
