document.addEventListener('DOMContentLoaded', () => {
    // Numéro WhatsApp configuré (+237 Cameroun)
    const PHONE_NUMBER = "237687333882"; 

    const cartList = document.getElementById('cart_list');
    const form = document.getElementById('whatsapp_form');
    let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

    function renderList() {
        cartList.innerHTML = '';
        if (selectedProducts.length === 0) {
            cartList.innerHTML = '<li style="text-align:center; padding: 20px; color:#e53e3e;">Aucune pièce sélectionnée.<br><br><a href="produits.html" style="color:#00a2ff; font-weight:bold;">← Retourner au catalogue</a></li>';
            return;
        }

        selectedProducts.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = 'list_item';
            li.innerHTML = `
                <span>${item.name}</span>
                <span class="btn_remove" onclick="removeItem(${index})">Supprimer ✕</span>
            `;
            cartList.appendChild(li);
        });
    }

    window.removeItem = (index) => {
        selectedProducts.splice(index, 1);
        localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
        renderList();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (selectedProducts.length === 0) {
            alert("Veuillez sélectionner au moins une pièce avant d'envoyer votre commande.");
            return;
        }

        const name = document.getElementById('client_name').value.trim();
        const city = document.getElementById('client_city').value.trim();
        const note = document.getElementById('client_note').value.trim();

        // Formatage du message prédéfini pour WhatsApp
        let message = `*NOUVELLE DEMANDE DE DEVIS - AUTO ÉVOLUTION*\n\n`;
        message += `*Liste des pièces demandées :*\n`;
        selectedProducts.forEach((p, i) => {
            message += `${i + 1}. ${p.name}\n`;
        });

        message += `\n*Informations du client :*\n`;
        message += `• *Nom :* ${name}\n`;
        message += `• *Ville :* ${city}\n`;
        if (note) {
            message += `• *Message :* ${note}\n`;
        }

        // Génération de l'URL WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

        // Vider le panier après validation
        localStorage.removeItem('selectedProducts');

        // Redirection directe vers l'application / web WhatsApp
        window.open(whatsappUrl, '_blank');
    });

    renderList();
});