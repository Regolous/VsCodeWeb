const showSidebar = (toggleId, sidebarId, headerId, mainId) =>{
    const toggle = document.getElementById(toggleId),
          sidebar = document.getElementById(sidebarId),
          header = document.getElementById(headerId),
          main = document.getElementById(mainId)
 
    if(toggle && sidebar && header && main){
        toggle.addEventListener('click', ()=>{
            sidebar.classList.toggle('show-sidebar')
            header.classList.toggle('left-pd')
            main.classList.toggle('left-pd')
        })
    }
}

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