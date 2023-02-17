import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryEl = document.querySelector('.gallery');
const galeryImg = ({ preview, original, description }) =>
  `<a class="gallery__item" href="${original}"> 
    <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
const galleryEls = galleryItems.map(galeryImg).join('');
galleryEl.insertAdjacentHTML('afterbegin', galleryEls);
let gallery = new SimpleLightbox('.gallery a');
