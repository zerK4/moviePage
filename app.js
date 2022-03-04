const arrows = document.querySelectorAll('.arrow')
const movieLists = document.querySelectorAll('.movieWrapper')

arrows.forEach((arrow, i)=>{
    const itemNumber = movieLists[i].querySelectorAll('img').length
    let clickCounter = 0
    
    arrow.addEventListener('click', ()=>{
        const ratio = Math.floor(window.innerHeight / 170)
        clickCounter++
        if(itemNumber - (4 + clickCounter) + ( 4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get('transform')[0].x.value - 300
            }px)`
        }else{
            movieLists[i].style.transform = `translateX(0)`
            clickCounter = 0
        }
    })
})

