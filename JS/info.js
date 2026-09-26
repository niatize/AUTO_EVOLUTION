const objet = {
    "voir sur le maps":"maps",
    "siège commerciale":"siège",
    "localisation":"localisation"
}
const search = document.getElementById('search')
const form = document.getElementById('form')
form.addEventListener('submit',(e)=>{
let a = search.value.trim().toLowerCase()
    e.preventDefault()
        if(objet[a] !==undefined){
    window.location.href = `#${objet[a]}`
    search.value=""
        }else if(a ===""){
            alert('veuiller entrer la valeur de la section a rechercher')
        }else if(objet[a] === undefined){
            alert("cette section ne se trouve pas sur cette page ")
        }
})