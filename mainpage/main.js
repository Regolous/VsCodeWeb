const showSidebar = (toggleId, sidebarId) =>{
    const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId)
  
    if(toggle && sidebar){
        toggle.addEventListener('click', button());
        {
            sidebar.classList.toggle('show-sidebar')
        }
    }
}

showSidebar('header-toggle','sidebar');

const sidebarLink = document.querySelectorAll('.sidebar-list a')

function linkColor(){
    sidebarLink.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}

sidebarLink.forEach(l => l.addEventListener('click', linkColor))

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-fill'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
})