document.getElementById('btnSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById("btnSwitch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById("btnSwitch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    }
})
document.getElementById('lightSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.getElementById("btnSwitch").innerHTML = '<i class="fa-solid fa-toggle-off"></i>';
    }
})
document.getElementById('darkSwitch').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'light') {
        document.documentElement.setAttribute('data-bs-theme','dark')
        document.getElementById("btnSwitch").innerHTML = '<i class="fa-solid fa-toggle-on"></i>';
    }
})
