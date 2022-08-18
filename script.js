const LightModeIcon = "fa-regular"
const DarkModeIcon = "fa-solid"
const openBottomDrawerElement = document.getElementById('open-bottom-drawer-button');
const closeBottomDrawerElement = document.getElementById('close-bottom-drawer-button');
const bottomDrawerElement = document.getElementById('bottom-drawer');
const bottomNavbarOptions = document.getElementById('bottom-navbar-options');
const themeElement = document.getElementById('theme-mode');
const bottomThemeElement = document.getElementById('bottom-theme-mode');
var darkMode = false;

function openBottomDrawer(){
    bottomDrawerElement.style.display = 'grid';
    closeBottomDrawerElement.style.display = 'inline-block'
    openBottomDrawerElement.style.display = 'none'
}

function closeBottomDrawer(){
    bottomDrawerElement.style.display = 'none';
    closeBottomDrawerElement.style.display = 'none'
    openBottomDrawerElement.style.display = 'inline-block'
}

function toggleTheme(){
    darkMode = !darkMode;
    if (darkMode){
        themeElement.classList.remove(LightModeIcon);
        themeElement.classList.add(DarkModeIcon);
        bottomThemeElement.classList.remove(LightModeIcon);
        bottomThemeElement.classList.add(DarkModeIcon);
    }
    else{
        themeElement.classList.remove(DarkModeIcon);
        themeElement.classList.add(LightModeIcon);
        bottomThemeElement.classList.remove(DarkModeIcon);
        bottomThemeElement.classList.add(LightModeIcon);
    }
    

}

openBottomDrawerElement.addEventListener('click', openBottomDrawer)
closeBottomDrawerElement.addEventListener('click', closeBottomDrawer)
themeElement.addEventListener('click', toggleTheme)
bottomThemeElement.addEventListener('click', toggleTheme)
bottomDrawerElement.addEventListener('click', toggleTheme)


