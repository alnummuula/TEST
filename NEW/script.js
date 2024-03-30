// Déclaration de la liste des utilisateurs
var users = [
    // DEMONSTRATION :
    { username: "-", password: "-", grade: "PRINCIPALE", numero: "999999", documents: [], messages: [] },


    { username: "eleve", password: "demo-eleve", grade: "ELEVE", classe: "5B", numero: "111111", parentUsername: "parent", documents: [], messages: [] },
    { username: "parent", password: "demo-parent", grade: "PARENT", numero: "222222", documents: [], messages: [] },
    { username: "professeur", password: "demo-professeur", grade: "PROFESSEUR", numero: "333333", documents: [], messages: [] },
    { username: "vie scolaire", password: "demo-vie_scolaire", grade: "VIE SCOLAIRE", numero: "444444", documents: [], messages: [] },
    { username: "direction", password: "demo-direction", grade: "DIRECTION", numero: "555555", documents: [], messages: [] },

    // PROFESSEUR :
        // ÉCOLE :
    { username: "Anne BRECHETEAU", password: "A.Brecheteau", grade: "PROFESSEUR", numero: "625242", documents: [], messages: [] },
    { username: "Axel GRAZO", password: "A.GRAZO!acogre", grade: "PROFESSEUR", numero: "768153", documents: [], messages: [] },
    { username: "Isabelle KIRANO", password: "ISAK!654877", grade: "PROFESSEUR", numero: "654877", documents: [], messages: [] },
    { username: "Julia PORTO", password: "JJPPACOGRE", grade: "PROFESSEUR", numero: "852149", documents: [], messages: [] },
    { username: "Laura HURATTU", password: "L.H!acogre", grade: "PROFESSEUR", numero: "578541", documents: [], messages: [] },
    { username: "Louna POUTVA", password: "LP1234?ACOgre", grade: "PROFESSEUR", numero: "411824", documents: [], messages: [] },
    { username: "Margaux LAGEU", password: "MARGAUX.L@acogre", grade: "PROFESSEUR", numero: "896417", documents: [], messages: [] },
    { username: "Mathis SOURICE", password: "M.s!aaaaaa", grade: "PROFESSEUR", numero: "158145", documents: [], messages: [] },
    { username: "Mylaine DARREAU", password: "DARREAU.M", grade: "PROFESSEUR", numero: "632585", documents: [], messages: [] },
    { username: "Noah HAYE HUMEAU", password: "Noah", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "Noé MYRAUT", password: "N0é.M@0000", grade: "PROFESSEUR", numero: "233485", documents: [], messages: [] },
    { username: "Solange LAROGEAU", password: "Solange.LA!ACOGRE", grade: "PROFESSEUR", numero: "732432", documents: [], messages: [] },
    { username: "Éline JOCAT", password: "ACOGRE@EJ*", grade: "PROFESSEUR", numero: "564256", documents: [], messages: [] },
    { username: "Étienne BARANGER", password: "0E0T0ACO", grade: "PROFESSEUR", numero: "374965", documents: [], messages: [] },

        // COLLÈGE :
    { username: "Marie FARIDE", password: "-", grade: "PROFESSEUR", numero: "492247", documents: [], messages: [] },
    { username: "Patricia AUGUIDY", password: "-", grade: "PROFESSEUR", numero: "746910", documents: [], messages: [] },
    { username: "Mélanie JEAN", password: "-", grade: "PROFESSEUR", numero: "726103", documents: [], messages: [] },
    { username: "Erwan FRATEAU", password: "-", grade: "PROFESSEUR", numero: "517234", documents: [], messages: [] },
    { username: "Romain FUDIOS", password: "-", grade: "PROFESSEUR", numero: "711694", documents: [], messages: [] },
    { username: "Kévin PAGERIE", password: "-", grade: "PROFESSEUR", numero: "344904", documents: [], messages: [] },
    { username: "Sonia ISTRAIRE", password: "-", grade: "PROFESSEUR", numero: "755135", documents: [], messages: [] },
    { username: "Catherine DOS", password: "-", grade: "PROFESSEUR", numero: "846751", documents: [], messages: [] },
    { username: "Sandrine CHOPIN", password: "-", grade: "PROFESSEUR", numero: "857651", documents: [], messages: [] },
    { username: "Lisa CARTI", password: "-", grade: "PROFESSEUR", numero: "765154", documents: [], messages: [] },
    { username: "Stéphane DOS", password: "-", grade: "PROFESSEUR", numero: "783211", documents: [], messages: [] },
    { username: "Patrice DEAUJARD", password: "-", grade: "PROFESSEUR", numero: "499673", documents: [], messages: [] },
    { username: "Séverine SIATIC", password: "-", grade: "PROFESSEUR", numero: "486113", documents: [], messages: [] },
    { username: "Saddie MALINGE", password: "-", grade: "PROFESSEUR", numero: "785513", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },
    { username: "", password: "-", grade: "PROFESSEUR", numero: "0", documents: [], messages: [] },

    // DIRECTION :
    { username: "Enzo HAYE HUMEAU", password: "Enzo3696", grade: "DIRECTION", numero: "168423", documents: [], messages: [] },

    // VIE SCOLAIRE :

    // ÉLÈVES :
        // ÉCOLE :


        // COLLÈGE :
    { username: "6A - A", password: "1", grade: "ELEVE", classe: "6A", numero: "555555", documents: [], messages: [] },
    { username: "6B - B", password: "1", grade: "ELEVE", classe: "6B", numero: "555555", documents: [], messages: [] },

    // PARENTS :
        // ÉCOLE :


        // COLLÈGE :
];

// Partie 1: Connexion et gestion de session
document.addEventListener("DOMContentLoaded", function() {

    // Écouter l'événement de soumission du formulaire de connexion
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire par défaut

            // Récupérer les valeurs des champs du formulaire
            var enteredUsername = document.getElementById("username").value.trim();
            var enteredPassword = document.getElementById("password").value;
            var enteredNumero = document.getElementById("numero").value;

            // Vérifier les informations de connexion et récupérer l'utilisateur correspondant
            var user = users.find(function(user) {
                return user.username === enteredUsername && user.password === enteredPassword && user.numero === enteredNumero;
            });

            // Rediriger l'utilisateur s'il est connecté avec succès, sinon afficher une alerte
            if (user) {
                setCookies(user); // Définir les cookies avec les informations de l'utilisateur
                redirectToUserHomePage();
            } else {
                alert("Informations d'identification incorrectes. Veuillez réessayer.");
            }
        });
    }

    // Fonction pour rediriger l'utilisateur vers sa page d'accueil après connexion
    function redirectToUserHomePage() {
        window.location.href = "accueil.html"; 
    }

    // Fonction pour définir les cookies avec les informations de l'utilisateur
    function setCookies(user) {
        document.cookie = "username=" + encodeURIComponent(user.username) + "; path=/";
        document.cookie = "numero=" + encodeURIComponent(user.numero) + "; path=/";
    }

    // Fonction pour récupérer la valeur d'un cookie par son nom
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift().trim(); // Trim le nom d'utilisateur
    }

    // Fonction pour se déconnecter
    function logout() {
        // Supprimer les cookies côté client
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "numero=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // Rediriger l'utilisateur vers la page de connexion
        window.location.href = "login.html";
    };

    // Fonction pour vérifier la session de l'utilisateur et afficher ses préférences
    function displayUserPreferences() {
        var userPreferencesElement = document.getElementById("userPreferences");
        if (userPreferencesElement) {
            var username = getCookie("username");
            var user = users.find(function(user) {
            return user.username === username;
            });
            if (user) {
            userPreferencesElement.innerHTML = "<p>Connecté en tant que : " + user.username + " (" + user.classe + ") </p>";
            } else {
            userPreferencesElement.innerHTML = "<p>NON CONNECTÉ</p>";
            }
            var logoutIcon = document.getElementById("logoutIcon");
            if (logoutIcon) {
            logoutIcon.addEventListener("click", function() {
            logout();
            });
            } else {
            console.error("Icône de déconnexion non trouvée.");
            }
            } else {
            console.error("Un problème est survenu.");
            }
            }

            // Appeler la fonction pour afficher les préférences de l'utilisateur lors du chargement de la page
displayUserPreferences();
});

// Partie 2: Gestion des documents
document.addEventListener("DOMContentLoaded", function() {
    var boutonrond = document.getElementById("boutonrond");
    var popup = document.getElementById("popup");
    var addDocumentForm = document.getElementById("addDocumentForm");
    var closePopup = document.getElementById("closePopup");

    // Ajout d'écouteurs d'événements pour le bouton rond, le formulaire de popup et le bouton de fermeture
    if (boutonrond && popup && addDocumentForm && closePopup) {
        boutonrond.addEventListener("click", function() {
            popup.style.display = "block";
            loadUserList();
        });

        closePopup.addEventListener("click", function() {
            popup.style.display = "none";
        });

        addDocumentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var selectedUser = document.getElementById("selectUser").value;
            var documentTitle = document.getElementById("documentTitle").value;
            var selectedCategory = document.getElementById("selectCategory").value;
            var selectedFile = document.getElementById("selectFile").files[0];
            addDocument(selectedUser, documentTitle, selectedCategory, selectedFile);
            this.reset();
            popup.style.display = "none";
        });
    }

    function addDocument(username, documentTitle, selectedCategory, selectedFile) {
        var selectedUser = users.find(function(user) {
            return user.username === username;
        });
    
        if (selectedUser) {
            // Vérifier si la propriété "documents" existe, sinon la créer
            if (!selectedUser.documents) {
                console.log("Documents property not found. Initializing...");
                selectedUser.documents = [];
            } else if (!Array.isArray(selectedUser.documents)) {
                console.log("Documents property not an array. Initializing...");
                selectedUser.documents = []; // Réinitialiser en tant que tableau
            }

            var newDocument = {
                title: documentTitle,
                category: selectedCategory,
                file: selectedFile
            };
            selectedUser.documents.push(newDocument);
            displayUserDocuments(selectedUser, selectedCategory);
        } else {
            console.error("L'utilisateur sélectionné n'existe pas.");
        }
    }

    // Fonction pour afficher les documents de l'utilisateur dans la catégorie sélectionnée
    function displayUserDocuments(user, selectedCategory) {
        var documentsContainerId = selectedCategory.toLowerCase() + "Documents";
        var documentsContainer = document.getElementById(documentsContainerId);

        if (!documentsContainer) {
            return;
        }

        documentsContainer.innerHTML = "";

        var filteredDocuments = user.documents.filter(function(document) {
            return document.category === selectedCategory;
        });

        filteredDocuments.forEach(function(document) {
            var documentItem = document.createElement("div");
            documentItem.className = "document-item";

            var documentName = document.createElement("span");
            documentName.textContent = document.title;
            documentItem.appendChild(documentName);

            var separator = document.createElement("hr");
            documentItem.appendChild(separator);

            var downloadIcon = document.createElement("span");
            downloadIcon.className = "download-icon";
            downloadIcon.innerHTML = "&#x2B07;"; // Icone de téléchargement
            downloadIcon.addEventListener("click", function() {
                downloadDocument(document.file);
            });
            documentItem.appendChild(downloadIcon);

            documentItem.addEventListener("click", function() {
                openDocumentWindow(document.file);
            });

            documentsContainer.appendChild(documentItem);
        });
    }
});

// Partie 3: Messagerie
document.addEventListener("DOMContentLoaded", function() {
    var destinatairesSelect = document.getElementById("destinataires");
    // Ajouter un gestionnaire d'événements pour la sélection de destinataires
    destinatairesSelect.addEventListener("change", function() {
        var selectedOption = destinatairesSelect.options[destinatairesSelect.selectedIndex];
        if (selectedOption) {
            var destinataire = selectedOption.text;
            addRecipient(destinataire);
        }
    });

    loadUserList(); // Charger la liste des utilisateurs lors du chargement de la page

    var boutonrond = document.getElementById("boutonrond");
    var popup = document.getElementById("popup");
    var closePopup = document.getElementById("closePopup");

    // Ajouter un gestionnaire d'événements pour le bouton rond
    boutonrond.addEventListener("click", function() {
        popup.style.display = "block";
        loadUserList(); // Charger la liste des destinataires dans la popup
    });

    // Ajouter un gestionnaire d'événements pour le bouton de fermeture de la popup
    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });

    var sendButton = document.getElementById("sendButton");

    // Ajouter un gestionnaire d'événements pour le bouton d'envoi
    sendButton.addEventListener("click", function() {
        sendMessage();
    });
});

function loadUserList() {
    var selectDestinataire = document.getElementById("destinataires");
    if (selectDestinataire) {
        selectDestinataire.innerHTML = "";

        // Créer un objet pour stocker les utilisateurs par catégorie et classe
        var categories = {
            "ÉLÈVES": {
                "6A": [],
                "6B": [],
                "6C": [],
                "6D": [],
                "5A": [],
                "5B": [],
                "5C": [],
                "5D": [],
                "4A": [],
                "4B": [],
                "4C": [],
                "4D": [],
                "3A": [],
                "3B": [],
                "3C": [],
                "3D": [],
            },
            "PARENT": [],
            "PROFESSEUR": [],
            "VIE SCOLAIRE": [],
            "DIRECTION": [],
            "PRINCIPALE": [],
        };

        // Organiser les utilisateurs dans les catégories appropriées
        users.forEach(function(user) {
            if (user.grade === "ELEVE") {
                if (categories["ÉLÈVES"][user.classe]) { // Vérifier si la classe de l'élève est définie
                    categories["ÉLÈVES"][user.classe].push(user);
                } else {
                    console.error("Classe d'élève non définie :", user.classe);
                }
            } else if (categories[user.grade]) {
                categories[user.grade].push(user);
            } else {
                console.error("Catégorie d'utilisateur non définie :", user.grade);
            }
        });

        // Ajouter les catégories au select
        for (var category in categories) {
            if (category === "ÉLÈVES") {
                for (var classe in categories[category]) {
                    var optgroup = document.createElement("optgroup");
                    optgroup.label = classe;
                    categories[category][classe].forEach(function(user) {
                        var option = document.createElement("option");
                        option.value = user.numero;
                        option.textContent = user.username;
                        optgroup.appendChild(option);
                    });
                    selectDestinataire.appendChild(optgroup);
                }
            } else {
                var optgroup = document.createElement("optgroup");
                optgroup.label = category;
                categories[category].forEach(function(user) {
                    var option = document.createElement("option");
                    option.value = user.numero;
                    option.textContent = user.username;
                    optgroup.appendChild(option);
                });
                selectDestinataire.appendChild(optgroup);
            }
        }
    }
}

// Fonction pour ajouter un destinataire sélectionné
function addRecipient(recipient) {
    var destinatairesDiv = document.getElementById("destinataires-selectionnes");

    // Vérifier si l'élément destinataires-selectionnes existe
    if (!destinatairesDiv) {
        console.error("L'élément destinataires-selectionnes est introuvable.");
        return;
    }

    var recipientId = document.getElementById("destinataires").value;

    // Vérifier si le destinataire est déjà sélectionné
    var recipientExists = Array.from(destinatairesDiv.children).some(function(item) {
        return item.textContent.trim() === recipient.trim();
    });

    if (recipientExists) {
        // Si le destinataire est déjà sélectionné, ajouter une classe de surbrillance
        var recipients = destinatairesDiv.children;
        for (var i = 0; i < recipients.length; i++) {
            if (recipients[i].textContent.trim() === recipient.trim()) {
                recipients[i].classList.add('highlighted');
                // Arrêter de clignoter après 2 secondes (2000 ms)
                setTimeout(function(element) {
                    element.classList.remove('highlighted');
                }, 2000, recipients[i]);
            }
        }
    } else {
        var recipientDiv = document.createElement("div");
        recipientDiv.classList.add("recipient");
        recipientDiv.textContent = recipient;
        destinatairesDiv.appendChild(recipientDiv);

        // Ajouter un gestionnaire d'événements pour supprimer le destinataire lorsqu'il est cliqué
        recipientDiv.addEventListener('click', function() {
            this.parentNode.removeChild(this);
        });
    }
}

// Fonction pour charger le contenu de la page
function loadContent(page) {
    var contenuDiv = document.getElementById("contenu");

    // Vérifier si l'élément contenu existe
    if (!contenuDiv) {
        console.error("L'élément contenu est introuvable.");
        return;
    }

    // Charger le contenu de la page
    contenuDiv.textContent = page;
}

// Fonction pour envoyer un message
function sendMessage() {
    var messageContentElement = document.getElementById("contenu");
    
    // Vérifier si l'élément textarea existe
    if (messageContentElement) {
        var messageContent = messageContentElement.value.trim();
        
        // Vérifier si le contenu du message n'est pas vide
        if (messageContent !== "") {
            // Envoyer le message
            console.log("Message envoyé:", messageContent);
        } else {
            // Afficher un message d'erreur ou prendre une autre action appropriée
            console.error("Le contenu du message est vide.");
        }
    } else {
        // Gérer le cas où l'élément textarea est introuvable
        console.error("L'élément textarea 'contenu' est introuvable.");
    }
}

// Fonction pour rafraîchir l'affichage de la boîte de réception du destinataire
function refreshInbox(user) {
    // Mettez en forme le message pour l'affichage
    var messageHTML = "<div class='message'>" +
                      "<span class='sender'>" + user.messages[user.messages.length - 1].sender + "</span>" +
                      "<span class='timestamp'>" + user.messages[user.messages.length - 1].timestamp + "</span>" +
                      "<p class='content'>" + user.messages[user.messages.length - 1].content + "</p>" +
                      "</div>";

    // Ajoutez le message à la boîte de réception du destinataire
    var inboxElement = document.getElementById("inbox-" + user.numero);
    if (inboxElement) {
        inboxElement.insertAdjacentHTML("beforeend", messageHTML);
    } else {
        console.error("Élément de boîte de réception introuvable pour l'utilisateur :", user.username);
    }
}

// Déplacez ici l'appel aux fonctions qui dépendent de la variable users
document.addEventListener("DOMContentLoaded", function() {
    // Appels des fonctions qui dépendent de la variable users
    displayUserPreferences();
    loadUserList();
});

document.getElementById('lien-boite-de-reception').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement de redirection par défaut
    document.getElementById('boite-de-reception').style.display = 'block';
    document.getElementById('brouillons').style.display = 'none';
    document.getElementById('messages-envoyes').style.display = 'none';
});

document.getElementById('lien-brouillons').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement de redirection par défaut
    document.getElementById('boite-de-reception').style.display = 'none';
    document.getElementById('brouillons').style.display = 'block';
    document.getElementById('messages-envoyes').style.display = 'none';
});

document.getElementById('lien-messages-envoyes').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement de redirection par défaut
    document.getElementById('boite-de-reception').style.display = 'none';
    document.getElementById('brouillons').style.display = 'none';
    document.getElementById('messages-envoyes').style.display = 'block';
});