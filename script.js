var typed = new Typed('#element', {
    strings: ['A FullStack Developer.', 'An IoT Specialist.', 'A Tester.'],
    typeSpeed: 50,
    backspeed: 10,
    loop: true
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById('side-menu');

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxv97vakBVkFx1TqWFngHJ94wP_VGtybnQUXNbdNqILgjkPtK2FJ9c336DHfR-YY7MZ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }) // Form
        .then(response => {
            msg.innerHTML="Message Sent Successfully."
            setTimeout(()=>{
                msg.innerHTML = ""
            }, 10000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})