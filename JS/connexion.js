    const user_name = document.getElementById('user_name')
        // variables pour quitter de la page de connexion a la page d'école
    let connexion_form = document.getElementById("connexion_form");
    let submit=document.getElementById('sub')
    let rotate=document.getElementById('rotate')

    // instruction pout allez a la page après inscription
connexion_form.addEventListener('submit',(e)=>{
    e.preventDefault()
    submit.classList.toggle(`sub_color`)
    rotate.classList.toggle('rotation')
    setTimeout(() => {
        window.location.href=`https://wa.me/237687043746?text=bonjouur%20avous%20monsieur%20je%20me%20nomme%20${user_name}%20J'ai%20besoin%20des%20pièces%20mécanique`
    }, 1000);
})

