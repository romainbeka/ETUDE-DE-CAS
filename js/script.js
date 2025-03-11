function ajouterIngredient() {
    const ingredientDiv = document.getElementById("ingredients");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "";
    ingredientDiv.appendChild(input);
}

document.getElementById("recette-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupération des valeurs du formulaire
    const titre = document.getElementById("titre").value;
    const description = document.getElementById("description").value;
    const categorie = document.getElementById("categorie").value;
    const ingredientsNodes = document.getElementById("ingredients").getElementsByTagName("input");
    const ingredients = Array.from(ingredientsNodes).map(input => input.value).join(", ");

    // Création des éléments pour la nouvelle recette
    const recetteItem = document.createElement("li");
    recetteItem.className = "recette-item";
    recetteItem.onclick = function() { toggleDetails(this); };
    recetteItem.innerHTML = `${titre}<span>${categorie}</span>`;

    const recetteDetails = document.createElement("div");
    recetteDetails.className = "recette-details";
    recetteDetails.style.display = "none"; // Masquer les détails par défaut
    recetteDetails.innerHTML = `<p>${description}</p><p><strong>Ingrédients :</strong> ${ingredients}</p>`;

    // Ajout des nouveaux éléments à la liste des recettes
    const recetteList = document.getElementById("recette-list");
    recetteList.appendChild(recetteItem);
    recetteList.appendChild(recetteDetails);

    // Réinitialisation du formulaire
    document.getElementById("recette-form").reset();
});

function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
}
