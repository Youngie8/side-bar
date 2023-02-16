let toggleBtn = document.querySelector('.togglebtn');
let closeBtn = document.querySelector('.closebtn');
let sideBar = document.querySelector('.side-bar');


toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('displayOn');
});
closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('displayOn');
});