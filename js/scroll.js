const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries=>{
    console.log(entries)
    entries.forEach(entry =>{
       entry.target.classList.toggle("show",entry.isIntersecting) 
    })
},{
    threshold:0.5,
rootMargin:"-100px"

})

cards.forEach(card=>{
    observer.observe(card)
})