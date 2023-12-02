import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = galleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function galleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => `
     <a class="gallery-item" href="${original}">
     <img class="gallery-image"
          src="${preview}" 
          alt="${description}" />
     </a>
    `).join("")
}







