let cards = [];
let isLeftGlobal = false;

let startCoordinateX;

document.addEventListener('touchstart', evt => {
    startCoordinateX = evt.touches[0].pageX;
    startCoordinateY = evt.touches[0].pageY;
})

document.addEventListener('touchend', evt => {
    const deltaX = evt.changedTouches[0].pageX - startCoordinateX;

    if( startCoordinateY>= 210 && startCoordinateY<=375){
    if (deltaX > 50 || deltaX<-50){
        if(deltaX > 0){
            moveCards(true);
        }else{
            moveCards(false);
        }
    }
}

})


document.addEventListener('DOMContentLoaded', () => {
    cards = [...document.querySelectorAll('.card')];
    setActive();
})

function moveCards(isLeft){
    isLeftGlobal = isLeft;
    if(isLeftGlobal){
        let lastElement = cards[cards.length-1];
        cards.unshift(lastElement);
        cards.pop();
    } else {
        let firstElement = cards[0];
        cards.shift();
        cards.push(firstElement);
    }

    updateRender();
    setActive();
}


function updateRender(){
    const cardsContainer = document.getElementById('swipe-cards-container');
    cardsContainer.innerHTML = '';
    cards.forEach(card => {
        card.classList.remove('animate__animated', 'animate__slideInLeft', 'animate__slideInRight');

        if (isLeftGlobal) {
            card.classList.add('animate__animated', 'animate__slideInLeft');
        } else {
            card.classList.add('animate__animated', 'animate__slideInRight');
        }

        const container = document.getElementById('swipe-cards-container');
        container.appendChild(card);
        //alert("carta nuova");
    })

}

function setActive(){
    cards.forEach(element => {
        element.classList.remove('active')
    })
    cards[Math.floor(cards.length/2)].classList.add('active')
}