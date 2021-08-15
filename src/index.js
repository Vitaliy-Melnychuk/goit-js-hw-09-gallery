import './sass/main.scss';
import {galleryItems} from './js/app';

const galleryEl = document.querySelector('.js-gallery');
galleryEl.innerHTML = galleryItems.map( galleryItem => {
  return `
    <li class="gallery__item">
      <a
        class="gallery__link"
        href="${galleryItem.original}"
      >
        <img
          class="gallery__image"
          src="${galleryItem.preview}"
          data-source="${galleryItem.original}"
          alt="${galleryItem.description}"
        />
      </a>
    </li>
  `;
}).join('');

const linkEls = document.querySelectorAll('a');
linkEls.forEach(function (linkEl) {
  linkEl.onclick = function(event) {
    event.preventDefault();
  }
});

const lightboxEl = document.querySelector('.js-lightbox');
const lightboxImgEl = document.querySelector('.lightbox__image');

galleryEl.addEventListener('click', openModal);
function openModal (evt) {
  lightboxEl.classList.add('is-open');
  lightboxImgEl.src = evt.target.dataset.source;
}

const btnEl = document.querySelector('button');
btnEl.addEventListener('click', closeModal);
function closeModal () {
  lightboxEl.classList.remove('is-open');
  lightboxImgEl.src = '';
}
 
