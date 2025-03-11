function ajouterIngredient() {
    const ingredientDiv = document.getElementById("ingredients");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Ingrédient";
    ingredientDiv.appendChild(input);
}

function toggleDetails(element) {
    const details = element.nextElementSibling;
    details.style.display = details.style.display === "block" ? "none" : "block";
}
