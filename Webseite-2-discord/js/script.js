// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e=>{
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Background particles
const particleCount=50;
for(let i=0;i<particleCount;i++){
    const p=document.createElement('div');
    p.classList.add('particle');
    p.style.left=Math.random()*window.innerWidth+'px';
    p.style.top=Math.random()*window.innerHeight+'px';
    p.style.width=p.style.height=Math.random()*5+2+'px';
    p.style.animationDuration=(5+Math.random()*10)+'s';
    document.body.appendChild(p);
}
