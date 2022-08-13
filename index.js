let hoverpart1 = document.querySelector('#heading');
let hoverpart2 = document.querySelector('#first');
let hoverpart3 = document.querySelector('#second');
let hoverpart4 = document.querySelector('#third');
let hoverpart5 = document.querySelector('.semi_circle');

/*hoverpart1.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = `url('/shade2.png')` ;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.webkitbackgroundsize = `cover` ;
    document.body.style.backgroundSize = `cover` ;
    document.getElementById("heading").style.display = `none`
    
});
hoverpart1.addEventListener('mouseleave',()=>{
    document.body.style.backgroundImage = `url('/shade.png')` ;
    document.getElementById("heading").style.display = `block`
});

hoverpart2.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = `url('/shade2.png')` ;
});
hoverpart2.addEventListener('mouseleave',()=>{
    document.body.style.backgroundImage = `url('/shade.png')` ;
});

hoverpart3.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = `url('/shade2.png')` ;
});
hoverpart3.addEventListener('mouseleave',()=>{
    document.body.style.backgroundImage = `url('/shade.png')` ;
});

hoverpart4.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = `url('/shade2.png')` ;
});
hoverpart4.addEventListener('mouseleave',()=>{
    document.body.style.backgroundImage = `url('/shade.png')` ;
});*/

hoverpart5.addEventListener('mouseover',()=>{
    document.body.style.backgroundImage = `url('shade2.png')` ;
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.webkitbackgroundsize = `cover` ;
    document.body.style.backgroundSize = `cover` ;
    //document.getElementById("heading").style.visibility = `hidden` ;
   /* document.getElementById("semi_circle").style.width = `450px` ;
    document.getElementById("semi_circle").style.height = `225px` ;
    document.getElementById("semi_circle").style.marginLeft = `668px` ;
    document.getElementById("semi_circle").style.position = `absolute` ;
    document.getElementById("semi_circle").style.bottom = `280px` ;
    document.getElementById("semi_circle").style.backgroundImage = `linear-gradient(120deg,#FFFFFF,#3DC9D7)` ;
    document.getElementById("semi_circle").style.transform = `rotate(105deg)` ;
    document.getElementById("semi_circle").style.backgroundColor = `#3DC9D` ;
    document.getElementById("semi_circle").style.borderTopLeftRadius = `220px` ;
    document.getElementById("semi_circle").style.borderTopRightRadius = `220px` ;
    document.getElementById("semi_circle").style.bottom =`0` ;*/
    document.getElementById("parting").style.visibility = `hidden` ;
    document.getElementById("heading").style.color = `white` ;
    document.getElementById("first").style.color = `white` ;
    document.getElementById("second").style.color = `white` ;




});
hoverpart5.addEventListener('mouseleave',()=>{
    document.body.style.backgroundImage = `url('shade.png')` ;
    document.getElementById("heading").style.visibility = `visible`;
    document.getElementById("parting").style.visibility = `visible` ;
    document.getElementById("heading").style.color = `black` ;
    document.getElementById("first").style.color = `black` ;
    document.getElementById("second").style.color = `black` ;
});