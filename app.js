const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
iconMenu.onclick = function(){
  menu.classList.toggle('active');
}