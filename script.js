// home :
const title = document.querySelector('#home-title');
const homeCards = document.querySelector('.home-cards')
const cardsLeft = document.querySelector('.cards-left')
const cardRight = document.querySelectorAll('.cards-right')

window.addEventListener('scroll', () => {
    let value = window.scrollY

    title.style.marginTop = value * 1 + 'px'
})





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
