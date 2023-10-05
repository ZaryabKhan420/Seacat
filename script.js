
Draggable.create("#dragme", {
    type:"x", 
    bounds:".controller", 
    inertia:true
});

gsap.to("#dragme",{
    rotate:"-360deg",
    duration:2,
})

document.addEventListener("mousemove",()=>{
    var dragger = document.querySelector("#dragme");
    var target = document.querySelector("#target");
    var video1 = document.querySelector(".video1");

    var p1 = dragger.getBoundingClientRect();
    var p2 = target.getBoundingClientRect();

    if(p1.right < p2.left) {
        video1.style.opacity = 1;
    }
    else{
        video1.style.opacity = 0;

    }
})

document.addEventListener("touchmove",()=>{
    var dragger = document.querySelector("#dragme");
    var target = document.querySelector("#target");
    var video1 = document.querySelector(".video1");

    var p1 = dragger.getBoundingClientRect();
    var p2 = target.getBoundingClientRect();

    if(p1.right < p2.left) {
        video1.style.opacity = 1;
    }
    else{
        video1.style.opacity = 0;

    }
})



