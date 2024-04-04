// home :
const homeTitle = document.querySelector('#home-title')
const discovering = document.querySelector('#discovering')
const card = document.querySelectorAll('.card')
const about = document.querySelector('.about')
const aboutLeft = document.querySelector('.about-left')

window.addEventListener('scroll', () => {
    const top = window.scrollY

    // home
    homeTitle.style.marginTop = top * 0.7 + 'px'
    discovering.style.marginTop =  top * 0.7 + 'px'
    exploring.style.marginTop = top * 0.7 + 'px'
    card.forEach(item => {
        item.style.marginTop = top * 0.7 + 'px'
    })
    
})


// top >= offsetTop && top < offsetTop + offsetHeight
// let top = window.scrollY               
// let offsetTop = section.offsetTop - 100
// let offsetHeight = section.offsetHeight
// let id = section.getAttribute('id')


// //about :
// const basicInfo = document.querySelectorAll(".basic-info")
// const moreInfo = document.querySelectorAll(".more-info")
// const button = document.querySelector("#more-info")


// button.addEventListener("click", () => {
//     Array.from(basicInfo).forEach(element => {
//         element.classList.toggle("visible");
//         element.classList.toggle("hidden");
//     });

//     Array.from(moreInfo).forEach(element => {
//         element.classList.toggle("visible");
//         element.classList.toggle("hidden");
//     });
// });
