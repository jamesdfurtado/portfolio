import { goToPage } from '../assets/scripts.js'

export function createCard(title="title", imgSrc=null, desc="desc", redirect){
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => goToPage(redirect);
                                
    const titleEl = document.createElement("p");
    titleEl.innerText = title;
    card.append(titleEl);

    const imageEl = document.createElement("img");
    imageEl.src = imgSrc;
    imageEl.alt = "img not loaded";
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