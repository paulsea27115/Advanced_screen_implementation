const cards = document.querySelectorAll(".card");
const cards_back = document.querySelectorAll(".card_back");

window.onload = ()=>{
    cards.forEach((e)=>{
        e.classList.add("start");
    })
}

cards.forEach((e, idx)=>{
    e.addEventListener("click",(e)=>{
        e.currentTarget.children[0].classList.toggle("turn")
        cards_back[idx].classList.toggle("turn");
    });
})

