const topMenu = document.getElementById('hs-top-menu')
const togglerTopMenuIcon = document.getElementById('hs-toggle-top-menu')

document.addEventListener('click', (e) =>{
    if(togglerTopMenuIcon.contains(e.target)){
        // Click to Toggle Top Menu Icon
        topMenu.classList.toggle('hs-topmenu-expanded');
        topMenu.classList.toggle('hidden');
    }else {
        // Click Outside Toggle Top Menu Icon
        if(topMenu.classList.contains('hs-topmenu-expanded')){
            topMenu.classList.remove('hs-topmenu-expanded');
            topMenu.classList.add('hidden');
        }
    }
})