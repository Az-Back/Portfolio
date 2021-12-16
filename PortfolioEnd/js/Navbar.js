window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
    
let menutoggle = document.querySelector('.toggle');
let navmenu = document.querySelector('.topnav ul');

menutoggle.addEventListener('click', () =>
{
  menutoggle.classList.toggle('active');
  navmenu.classList.toggle('activeNav');
});