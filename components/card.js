
function createCard(title="title", desc="desc"){
    console.log("running createCard!")
    const card = document.createElement("div");
    card.className = "card";
    document.body.append(card);
}