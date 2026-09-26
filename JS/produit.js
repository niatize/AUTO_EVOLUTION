
document.addEventListener("DOMContentLoaded", () => {

    /* ============================================================
       AUTO ÉVOLUTION
       CATALOGUE DE 100 PIÈCES ET OUTILS AUTOMOBILES
       ============================================================ */

    /* ============================================================
       ÉLÉMENTS HTML
       ============================================================ */

    const grid = document.getElementById("products_grid");
    const searchInput = document.getElementById("search_input");
    const selectionBar = document.getElementById("selection_bar");
    const selectedCount = document.getElementById("selected_count");
    const btnSendOrder = document.getElementById("btn_send_order");
    const btnClearSelection = document.getElementById("btn_clear_selection");
    const categoryFilters = document.getElementById("category_filters");
    const catalogueCount = document.getElementById("catalogue_count");


    /* ============================================================
       IMAGE DE SECOURS
       ============================================================ */

    const FALLBACK_IMAGE =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Question_mark_%28black%29.svg/512px-Question_mark_%28black%29.svg.png";


    /* ============================================================
       CATALOGUE
       
       100 PRODUITS :
       - pièces moteur
       - freinage
       - suspension
       - direction
       - transmission
       - électricité
       - refroidissement
       - filtration
       - injection
       - échappement
       - climatisation
       - pneus / roues
       - éclairage
       - carrosserie
       - diagnostic
       - dépannage / outillage
       ============================================================ */

    const products = [

        /* ========================================================
           FILTRATION
           ======================================================== */

        {
            id: "auto_001",
            name: "Filtre à huile",
            price: 5000,
            category: "Filtration",
            search: "automotive oil filter"
        },

        {
            id: "auto_002",
            name: "Filtre à air moteur",
            price: 8000,
            category: "Filtration",
            search: "automotive engine air filter"
        },

        {
            id: "auto_003",
            name: "Filtre à carburant diesel",
            price: 10000,
            category: "Filtration",
            search: "automotive diesel fuel filter"
        },

        {
            id: "auto_004",
            name: "Filtre à carburant essence",
            price: 8000,
            category: "Filtration",
            search: "automotive gasoline fuel filter"
        },

        {
            id: "auto_005",
            name: "Filtre habitacle",
            price: 7000,
            category: "Filtration",
            search: "automotive cabin air filter"
        },


        /* ========================================================
           FREINAGE
           ======================================================== */

        {
            id: "auto_006",
            name: "Plaquettes de frein avant",
            price: 22000,
            category: "Freinage",
            search: "automotive front brake pads"
        },

        {
            id: "auto_007",
            name: "Plaquettes de frein arrière",
            price: 20000,
            category: "Freinage",
            search: "automotive rear brake pads"
        },

        {
            id: "auto_008",
            name: "Disque de frein avant",
            price: 30000,
            category: "Freinage",
            search: "automotive front brake disc"
        },

        {
            id: "auto_009",
            name: "Disque de frein arrière",
            price: 28000,
            category: "Freinage",
            search: "automotive rear brake disc"
        },

        {
            id: "auto_010",
            name: "Étrier de frein",
            price: 60000,
            category: "Freinage",
            search: "automotive brake caliper"
        },

        {
            id: "auto_011",
            name: "Maître-cylindre de frein",
            price: 45000,
            category: "Freinage",
            search: "automotive brake master cylinder"
        },

        {
            id: "auto_012",
            name: "Flexible de frein",
            price: 10000,
            category: "Freinage",
            search: "automotive brake hose"
        },

        {
            id: "auto_013",
            name: "Câble de frein à main",
            price: 12000,
            category: "Freinage",
            search: "automotive parking brake cable"
        },

        {
            id: "auto_014",
            name: "Capteur ABS de roue",
            price: 25000,
            category: "Freinage",
            search: "automotive ABS wheel speed sensor"
        },

        {
            id: "auto_015",
            name: "Liquide de frein DOT 4",
            price: 6000,
            category: "Freinage",
            search: "automotive DOT 4 brake fluid"
        },


        /* ========================================================
           MOTEUR
           ======================================================== */

        {
            id: "auto_016",
            name: "Courroie de distribution",
            price: 25000,
            category: "Moteur",
            search: "automotive timing belt"
        },

        {
            id: "auto_017",
            name: "Kit distribution complet",
            price: 90000,
            category: "Moteur",
            search: "automotive timing belt kit"
        },

        {
            id: "auto_018",
            name: "Courroie accessoire",
            price: 15000,
            category: "Moteur",
            search: "automotive serpentine belt"
        },

        {
            id: "auto_019",
            name: "Pompe à eau",
            price: 35000,
            category: "Moteur",
            search: "automotive engine water pump"
        },

        {
            id: "auto_020",
            name: "Joint de culasse",
            price: 35000,
            category: "Moteur",
            search: "automotive cylinder head gasket"
        },

        {
            id: "auto_021",
            name: "Culasse moteur",
            price: 180000,
            category: "Moteur",
            search: "automotive engine cylinder head"
        },

        {
            id: "auto_022",
            name: "Joint cache-culbuteurs",
            price: 12000,
            category: "Moteur",
            search: "automotive valve cover gasket"
        },

        {
            id: "auto_023",
            name: "Carter d'huile moteur",
            price: 50000,
            category: "Moteur",
            search: "automotive engine oil pan"
        },

        {
            id: "auto_024",
            name: "Pompe à huile moteur",
            price: 65000,
            category: "Moteur",
            search: "automotive engine oil pump"
        },

        {
            id: "auto_025",
            name: "Thermostat moteur",
            price: 15000,
            category: "Moteur",
            search: "automotive engine thermostat"
        },

        {
            id: "auto_026",
            name: "Capteur vilebrequin",
            price: 18000,
            category: "Moteur",
            search: "automotive crankshaft position sensor"
        },

        {
            id: "auto_027",
            name: "Capteur arbre à cames",
            price: 18000,
            category: "Moteur",
            search: "automotive camshaft position sensor"
        },

        {
            id: "auto_028",
            name: "Piston moteur",
            price: 30000,
            category: "Moteur",
            search: "automotive engine piston"
        },

        {
            id: "auto_029",
            name: "Segments de piston",
            price: 18000,
            category: "Moteur",
            search: "automotive piston rings"
        },

        {
            id: "auto_030",
            name: "Bielle moteur",
            price: 30000,
            category: "Moteur",
            search: "automotive engine connecting rod"
        },


        /* ========================================================
           REFROIDISSEMENT
           ======================================================== */

        {
            id: "auto_031",
            name: "Radiateur moteur",
            price: 90000,
            category: "Refroidissement",
            search: "automotive engine radiator"
        },

        {
            id: "auto_032",
            name: "Ventilateur radiateur",
            price: 45000,
            category: "Refroidissement",
            search: "automotive radiator cooling fan"
        },

        {
            id: "auto_033",
            name: "Durite supérieure radiateur",
            price: 15000,
            category: "Refroidissement",
            search: "automotive upper radiator hose"
        },

        {
            id: "auto_034",
            name: "Durite inférieure radiateur",
            price: 15000,
            category: "Refroidissement",
            search: "automotive lower radiator hose"
        },

        {
            id: "auto_035",
            name: "Bouchon de radiateur",
            price: 5000,
            category: "Refroidissement",
            search: "automotive radiator cap"
        },

        {
            id: "auto_036",
            name: "Vase d'expansion",
            price: 25000,
            category: "Refroidissement",
            search: "automotive coolant expansion tank"
        },

        {
            id: "auto_037",
            name: "Liquide de refroidissement 5L",
            price: 12000,
            category: "Refroidissement",
            search: "automotive engine coolant"
        },


        /* ========================================================
           EMBRAYAGE / TRANSMISSION
           ======================================================== */

        {
            id: "auto_038",
            name: "Kit embrayage complet",
            price: 120000,
            category: "Embrayage",
            search: "automotive clutch kit"
        },

        {
            id: "auto_039",
            name: "Disque d'embrayage",
            price: 50000,
            category: "Embrayage",
            search: "automotive clutch disc"
        },

        {
            id: "auto_040",
            name: "Mécanisme d'embrayage",
            price: 55000,
            category: "Embrayage",
            search: "automotive clutch pressure plate"
        },

        {
            id: "auto_041",
            name: "Butée d'embrayage",
            price: 25000,
            category: "Embrayage",
            search: "automotive clutch release bearing"
        },

        {
            id: "auto_042",
            name: "Volant moteur",
            price: 100000,
            category: "Transmission",
            search: "automotive flywheel"
        },

        {
            id: "auto_043",
            name: "Cardan transmission",
            price: 70000,
            category: "Transmission",
            search: "automotive CV axle"
        },

        {
            id: "auto_044",
            name: "Soufflet de cardan",
            price: 10000,
            category: "Transmission",
            search: "automotive CV joint boot"
        },

        {
            id: "auto_045",
            name: "Joint homocinétique",
            price: 35000,
            category: "Transmission",
            search: "automotive CV joint"
        },

        {
            id: "auto_046",
            name: "Roulement de roue avant",
            price: 30000,
            category: "Transmission",
            search: "automotive front wheel bearing"
        },

        {
            id: "auto_047",
            name: "Roulement de roue arrière",
            price: 30000,
            category: "Transmission",
            search: "automotive rear wheel bearing"
        },


        /* ========================================================
           SUSPENSION / DIRECTION
           ======================================================== */

        {
            id: "auto_048",
            name: "Amortisseur avant",
            price: 60000,
            category: "Suspension",
            search: "automotive front shock absorber"
        },

        {
            id: "auto_049",
            name: "Amortisseur arrière",
            price: 55000,
            category: "Suspension",
            search: "automotive rear shock absorber"
        },

        {
            id: "auto_050",
            name: "Ressort suspension",
            price: 30000,
            category: "Suspension",
            search: "automotive suspension coil spring"
        },

        {
            id: "auto_051",
            name: "Rotule de suspension",
            price: 15000,
            category: "Suspension",
            search: "automotive suspension ball joint"
        },

        {
            id: "auto_052",
            name: "Biellette barre stabilisatrice",
            price: 15000,
            category: "Suspension",
            search: "automotive sway bar link"
        },

        {
            id: "auto_053",
            name: "Silentbloc triangle",
            price: 12000,
            category: "Suspension",
            search: "automotive control arm bushing"
        },

        {
            id: "auto_054",
            name: "Triangle de suspension",
            price: 45000,
            category: "Suspension",
            search: "automotive control arm"
        },

        {
            id: "auto_055",
            name: "Crémaillère de direction",
            price: 150000,
            category: "Direction",
            search: "automotive steering rack"
        },

        {
            id: "auto_056",
            name: "Pompe direction assistée",
            price: 70000,
            category: "Direction",
            search: "automotive power steering pump"
        },

        {
            id: "auto_057",
            name: "Rotule de direction",
            price: 15000,
            category: "Direction",
            search: "automotive tie rod end"
        },


        /* ========================================================
           ÉLECTRICITÉ / ALLUMAGE
           ======================================================== */

        {
            id: "auto_058",
            name: "Batterie automobile 45 Ah",
            price: 45000,
            category: "Électricité",
            search: "automotive car battery"
        },

        {
            id: "auto_059",
            name: "Batterie automobile 60 Ah",
            price: 55000,
            category: "Électricité",
            search: "automotive 60Ah car battery"
        },

        {
            id: "auto_060",
            name: "Alternateur",
            price: 120000,
            category: "Électricité",
            search: "automotive alternator"
        },

        {
            id: "auto_061",
            name: "Démarreur",
            price: 190000,
            category: "Électricité",
            search: "automotive starter motor"
        },

        {
            id: "auto_062",
            name: "Bougie d'allumage",
            price: 5000,
            category: "Allumage",
            search: "automotive spark plug"
        },

        {
            id: "auto_063",
            name: "Bougie de préchauffage diesel",
            price: 8000,
            category: "Allumage",
            search: "automotive diesel glow plug"
        },

        {
            id: "auto_064",
            name: "Bobine d'allumage",
            price: 25000,
            category: "Allumage",
            search: "automotive ignition coil"
        },

        {
            id: "auto_065",
            name: "Relais automobile",
            price: 5000,
            category: "Électricité",
            search: "automotive electrical relay"
        },

        {
            id: "auto_066",
            name: "Fusibles automobile",
            price: 1000,
            category: "Électricité",
            search: "automotive car fuse"
        },


        /* ========================================================
           INJECTION / ÉLECTRONIQUE
           ======================================================== */

        {
            id: "auto_067",
            name: "Capteur MAP",
            price: 20000,
            category: "Électronique",
            search: "automotive MAP sensor"
        },

        {
            id: "auto_068",
            name: "Débitmètre MAF",
            price: 35000,
            category: "Électronique",
            search: "automotive mass air flow sensor"
        },

        {
            id: "auto_069",
            name: "Sonde lambda",
            price: 25000,
            category: "Électronique",
            search: "automotive oxygen sensor lambda"
        },

        {
            id: "auto_070",
            name: "Capteur pression carburant",
            price: 30000,
            category: "Électronique",
            search: "automotive fuel pressure sensor"
        },

        {
            id: "auto_071",
            name: "Capteur position papillon",
            price: 20000,
            category: "Électronique",
            search: "automotive throttle position sensor"
        },

        {
            id: "auto_072",
            name: "Injecteur diesel",
            price: 75000,
            category: "Injection",
            search: "automotive diesel fuel injector"
        },

        {
            id: "auto_073",
            name: "Injecteur essence",
            price: 35000,
            category: "Injection",
            search: "automotive gasoline fuel injector"
        },

        {
            id: "auto_074",
            name: "Pompe à carburant",
            price: 45000,
            category: "Injection",
            search: "automotive fuel pump"
        },

        {
            id: "auto_075",
            name: "Pompe haute pression diesel",
            price: 180000,
            category: "Injection",
            search: "automotive diesel high pressure fuel pump"
        },

        {
            id: "auto_076",
            name: "Vanne EGR",
            price: 50000,
            category: "Injection",
            search: "automotive EGR valve"
        },


        /* ========================================================
           ÉCHAPPEMENT
           ======================================================== */

        {
            id: "auto_077",
            name: "Silencieux arrière",
            price: 60000,
            category: "Échappement",
            search: "automotive rear muffler"
        },

        {
            id: "auto_078",
            name: "Catalyseur",
            price: 120000,
            category: "Échappement",
            search: "automotive catalytic converter"
        },

        {
            id: "auto_079",
            name: "Filtre à particules FAP",
            price: 250000,
            category: "Échappement",
            search: "automotive diesel particulate filter DPF"
        },

        {
            id: "auto_080",
            name: "Flexible échappement",
            price: 25000,
            category: "Échappement",
            search: "automotive exhaust flex pipe"
        },


        /* ========================================================
           CLIMATISATION
           ======================================================== */

        {
            id: "auto_081",
            name: "Compresseur climatisation",
            price: 180000,
            category: "Climatisation",
            search: "automotive AC compressor"
        },

        {
            id: "auto_082",
            name: "Condenseur climatisation",
            price: 90000,
            category: "Climatisation",
            search: "automotive AC condenser"
        },

        {
            id: "auto_083",
            name: "Évaporateur climatisation",
            price: 100000,
            category: "Climatisation",
            search: "automotive AC evaporator"
        },

        {
            id: "auto_084",
            name: "Filtre déshydrateur climatisation",
            price: 25000,
            category: "Climatisation",
            search: "automotive AC receiver drier"
        },


        /* ========================================================
           PNEUS / ROUES
           ======================================================== */

        {
            id: "auto_085",
            name: "Pneu 175/65 R14",
            price: 35000,
            category: "Pneus",
            search: "automotive car tire 175 65 R14"
        },

        {
            id: "auto_086",
            name: "Pneu 185/65 R15",
            price: 40000,
            category: "Pneus",
            search: "automotive car tire 185 65 R15"
        },

        {
            id: "auto_087",
            name: "Pneu 195/65 R15",
            price: 45000,
            category: "Pneus",
            search: "automotive car tire 195 65 R15"
        },

        {
            id: "auto_088",
            name: "Pneu 205/55 R16",
            price: 55000,
            category: "Pneus",
            search: "automotive car tire 205 55 R16"
        },

        {
            id: "auto_089",
            name: "Jante acier automobile",
            price: 45000,
            category: "Roues",
            search: "automotive steel wheel rim"
        },


        /* ========================================================
           ÉCLAIRAGE
           ======================================================== */

        {
            id: "auto_090",
            name: "Phare avant",
            price: 80000,
            category: "Éclairage",
            search: "automotive car headlight"
        },

        {
            id: "auto_091",
            name: "Feu arrière",
            price: 50000,
            category: "Éclairage",
            search: "automotive rear tail light"
        },

        {
            id: "auto_092",
            name: "Antibrouillard avant",
            price: 25000,
            category: "Éclairage",
            search: "automotive front fog light"
        },

        {
            id: "auto_093",
            name: "Ampoule H4",
            price: 3000,
            category: "Éclairage",
            search: "automotive H4 headlight bulb"
        },


        /* ========================================================
           OUTILLAGE / DÉPANNAGE / DIAGNOSTIC
           ======================================================== */

        {
            id: "auto_094",
            name: "Cric hydraulique 2 tonnes",
            price: 45000,
            category: "Outillage",
            search: "automotive hydraulic floor jack"
        },

        {
            id: "auto_095",
            name: "Câbles de démarrage",
            price: 15000,
            category: "Dépannage",
            search: "automotive jumper cables"
        },

        {
            id: "auto_096",
            name: "Compresseur d'air 12V",
            price: 25000,
            category: "Outillage",
            search: "automotive 12V tire inflator"
        },

        {
            id: "auto_097",
            name: "Clé démonte-roue",
            price: 8000,
            category: "Outillage",
            search: "automotive lug wrench"
        },

        {
            id: "auto_098",
            name: "Clé à bougies",
            price: 7000,
            category: "Outillage",
            search: "automotive spark plug socket wrench"
        },

        {
            id: "auto_099",
            name: "Valise diagnostic OBD2",
            price: 35000,
            category: "Diagnostic",
            search: "automotive OBD2 diagnostic scanner"
        },

        {
            id: "auto_100",
            name: "Multimètre automobile",
            price: 15000,
            category: "Diagnostic",
            search: "automotive digital multimeter"
        }

    ];


    /* ============================================================
       VARIABLES
       ============================================================ */

    let selectedProducts = [];
    let activeCategory = "Toutes";


    /* ============================================================
       RÉCUPÉRATION DE LA SÉLECTION
       ============================================================ */

    try {

        const saved = JSON.parse(
            localStorage.getItem("selectedProducts")
        );

        if (Array.isArray(saved)) {
            selectedProducts = saved;
        }

    } catch (error) {

        console.warn(
            "Impossible de récupérer la sélection.",
            error
        );

    }


    /* ============================================================
       FORMATAGE DU PRIX
       ============================================================ */

    function formatPrice(price) {

        return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";

    }


    /* ============================================================
       RECHERCHE IMAGE WIKIMEDIA
       ============================================================ */

    async function searchWikimediaImage(product) {

        const params = new URLSearchParams({

            action: "query",

            generator: "search",

            gsrsearch:
                `${product.search} automobile part`,

            gsrnamespace: "6",

            gsrlimit: "8",

            prop: "imageinfo",

            iiprop: "url",

            iiurlwidth: "600",

            format: "json",

            origin: "*"

        });


        try {

            const response = await fetch(
                "https://commons.wikimedia.org/w/api.php?" +
                params.toString()
            );


            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }


            const data = await response.json();

            const pages = data?.query?.pages;


            if (!pages) {
                return FALLBACK_IMAGE;
            }


            const candidates = Object.values(pages);


            for (const page of candidates) {

                const info = page?.imageinfo?.[0];

                if (!info) {
                    continue;
                }


                const image =
                    info.thumburl ||
                    info.url;


                if (image) {
                    return image;
                }

            }

        } catch (error) {

            console.warn(
                `Image introuvable pour ${product.name}`,
                error
            );

        }


        return FALLBACK_IMAGE;

    }


    /* ============================================================
       CATÉGORIES
       ============================================================ */

    function createCategoryFilters() {

        if (!categoryFilters) {
            return;
        }


        const categories = [
            "Toutes",
            ...new Set(
                products.map(product => product.category)
            )
        ];


        categoryFilters.innerHTML = "";


        categories.forEach(category => {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className = "category_filter";


            if (category === activeCategory) {

                button.classList.add("active");

            }


            button.textContent = category;


            button.addEventListener("click", () => {

                activeCategory = category;

                createCategoryFilters();

                renderProducts(
                    getFilteredProducts()
                );

            });


            categoryFilters.appendChild(button);

        });

    }


    /* ============================================================
       FILTRAGE
       ============================================================ */

    function getFilteredProducts() {

        const query =
            searchInput?.value
                ?.trim()
                .toLowerCase() || "";


        return products.filter(product => {

            const matchesCategory =
                activeCategory === "Toutes" ||
                product.category === activeCategory;


            const text = [
                product.name,
                product.category,
                product.search
            ]
                .join(" ")
                .toLowerCase();


            const matchesSearch =
                !query ||
                text.includes(query);


            return matchesCategory && matchesSearch;

        });

    }


    /* ============================================================
       AFFICHAGE DES PRODUITS
       ============================================================ */

    function renderProducts(items) {

        if (!grid) {
            return;
        }


        grid.innerHTML = "";


        if (catalogueCount) {

            catalogueCount.textContent =
                `${items.length} pièce(s) affichée(s)`;

        }


        if (items.length === 0) {

            grid.innerHTML = `
                <div class="no_products">
                    <strong>Aucune pièce trouvée</strong>
                    <p>
                        Essayez un autre nom ou une autre catégorie.
                    </p>
                </div>
            `;

            return;

        }


        items.forEach(product => {

            const card =
                document.createElement("article");


            card.className = "child";

            card.dataset.id = product.id;


            const isSelected =
                selectedProducts.some(
                    item => item.id === product.id
                );


            if (isSelected) {

                card.classList.add("selected");

            }


            card.innerHTML = `

                <div class="select_badge">
                    ✓
                </div>

                <div class="product_image_container">

                    <img
                        src="${product.src || FALLBACK_IMAGE}"
                        class="img"
                        alt="${product.name}"
                        loading="lazy"
                    >

                    <div class="image_product_name">

                        ${product.name}

                        <strong>
                            ${formatPrice(product.price)}
                        </strong>

                    </div>

                </div>

                <div class="product_info">

                    <p class="product_name">
                        ${product.name}
                    </p>

                    <p class="product_price">
                        ${formatPrice(product.price)}
                    </p>

                    <span class="product_category">
                        ${product.category}
                    </span>

                </div>

            `;


            /* ====================================================
               SÉLECTION
               ==================================================== */

            card.addEventListener("click", () => {

                toggleProduct(product, card);

            });


            /* ====================================================
               ERREUR IMAGE
               ==================================================== */

            const image =
                card.querySelector(".img");


            if (image) {

                image.addEventListener("error", () => {

                    image.src = FALLBACK_IMAGE;

                });

            }


            grid.appendChild(card);

        });


        updateSelectionUI(false);

    }


    /* ============================================================
       SÉLECTION / DÉSÉLECTION
       ============================================================ */

    function toggleProduct(product, card) {

        const index =
            selectedProducts.findIndex(
                item => item.id === product.id
            );


        if (index !== -1) {

            selectedProducts.splice(index, 1);

            card.classList.remove("selected");

        } else {

            selectedProducts.push({

                id: product.id,

                name: product.name,

                price: product.price,

                category: product.category

            });

            card.classList.add("selected");

        }


        saveSelection();

        updateSelectionUI(false);

    }


    /* ============================================================
       SAUVEGARDE
       ============================================================ */

    function saveSelection() {

        try {

            localStorage.setItem(
                "selectedProducts",
                JSON.stringify(selectedProducts)
            );

        } catch (error) {

            console.warn(
                "Erreur de sauvegarde :",
                error
            );

        }

    }


    /* ============================================================
       INTERFACE SÉLECTION
       ============================================================ */

    function updateSelectionUI(save = true) {

        if (save) {
            saveSelection();
        }


        if (selectedCount) {

            selectedCount.textContent =
                selectedProducts.length;

        }


        if (selectionBar) {

            selectionBar.classList.toggle(
                "active",
                selectedProducts.length > 0
            );

        }


        if (grid) {

            const cards =
                grid.querySelectorAll(".child");


            cards.forEach(card => {

                const selected =
                    selectedProducts.some(
                        item =>
                            item.id === card.dataset.id
                    );


                card.classList.toggle(
                    "selected",
                    selected
                );

            });

        }

    }


    /* ============================================================
       TOUT DÉSÉLECTIONNER
       ============================================================ */

    if (btnClearSelection) {

        btnClearSelection.addEventListener(
            "click",
            () => {

                selectedProducts = [];

                saveSelection();

                updateSelectionUI(false);

            }
        );

    }


    /* ============================================================
       RECHERCHE
       ============================================================ */

    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                renderProducts(
                    getFilteredProducts()
                );

            }
        );

    }


    /* ============================================================
       ENVOYER LA COMMANDE
       ============================================================ */

    if (btnSendOrder) {

        btnSendOrder.addEventListener(
            "click",
            () => {

                if (selectedProducts.length === 0) {

                    alert(
                        "Veuillez sélectionner au moins une pièce."
                    );

                    return;

                }


                saveSelection();

                window.location.href = "achat.html";

            }
        );

    }


    /* ============================================================
       CHARGEMENT DES IMAGES
       ============================================================ */

    async function loadImages() {

        const batchSize = 5;


        for (
            let i = 0;
            i < products.length;
            i += batchSize
        ) {

            const batch =
                products.slice(i, i + batchSize);


            await Promise.all(

                batch.map(async product => {

                    product.src =
                        await searchWikimediaImage(product);

                })

            );


            /*
             * On ne recharge l'affichage que si
             * les produits concernés sont visibles.
             */

            renderProducts(
                getFilteredProducts()
            );

        }

    }


    /* ============================================================
       INITIALISATION
       ============================================================ */

    createCategoryFilters();


    renderProducts(products);


    updateSelectionUI(false);


    /*
     * Mise à jour du compteur initial.
     */

    if (catalogueCount) {

        catalogueCount.textContent =
            `${products.length} pièces disponibles`;

    }


    /*
     * Chargement progressif des images.
     */

    loadImages();

});