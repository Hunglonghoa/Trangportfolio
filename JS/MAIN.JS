// Menu
// Hiện Menu
const Menu = document.querySelector(".navbar__links");
const MenuButton = document.querySelector(".navbar__icons");
const overplay = document.querySelector("#overplay")

MenuButton.addEventListener('click', () => {
 Menu.classList.toggle("navbar__open"); 
//  XỔ MENU CHUYÊN ĐỔI
 MenuButton.classList.toggle("open")
 overplay.classList.toggle("show")
});

// Đóng MENU
overplay.addEventListener("click", ()=>{
 Menu.classList.toggle("navbar__open"); 
 MenuButton.classList.toggle("open")
 overplay.classList.toggle("show")
})
