let panel = document.querySelector('#panel')
let panelicon = document.querySelector('#panel i')
let mainpanel = document.querySelector('#mainpanel')
let paneldiv = document.querySelector('#paneldiv')
let panels = document.querySelectorAll('#paneldiv a')

panel.onclick = () => {
    panelicon.classList.toggle('rotate')
    paneldiv.classList.toggle('display')
}

for(let pnl of panels) {
    pnl.onclick = function() {
        for(let pnl of panels) {
            panel.onclick()
            pnl.classList.remove('d-none')
            this.classList.add('d-none')
        }

        let context = pnl.querySelectorAll('span')
        mainpanel.innerHTML = context[0].innerHTML
    }
}

let search = document.querySelector('#search')
let searchdiv = document.querySelector('#searchdiv')
let closeicon = document.querySelector('#closeicon')

search.onclick = () => searchdiv.classList.toggle('display')

closeicon.onclick = () => search.onclick()

let mainlang = document.querySelector('#mainlang')
let langicon = document.querySelector('#langicon')
let langdiv = document.querySelector('#langdiv')
let langs = document.querySelectorAll('#langdiv a')

mainlang.onclick = () => {
    langdiv.classList.toggle('display')
    langicon.classList.toggle('rotate')
}

langicon.onclick = () => mainlang.onclick()

for(let lang of langs) {
    lang.onclick = function() {
        for(let lang of langs) {
            mainlang.onclick()
            lang.classList.remove('d-none')
            this.classList.add('d-none')
        }

        let changelang = lang.querySelectorAll('span')
        mainlang.innerHTML = changelang[1].innerHTML
    }
}