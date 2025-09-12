
function createCard(title="title", imgSrc=null, desc="desc"){
    const card = document.createElement("div");
    card.className = "card";
                                
    const titleEl = document.createElement("p");
    titleEl.innerText = title;
    card.append(titleEl);

    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", imgSrc);
    imageEl.setAttribute("alt", "photo loading error");
    card.append(imageEl)

    const descEl = document.createElement("p");
    descEl.innerText = desc;
    card.append(descEl);

    return card;
}

/* HTML equivelant

   <div class="card" onclick="goToPage('pages/mini-ecommerce')">
        <p>Mini ecommerce SPA</p>
        <img alt="photo"></img>
        <p>A short description of the project.</p>
    </div>
*/