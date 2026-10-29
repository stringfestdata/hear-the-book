'use strict';
const selectedBook = window.BOOKS.find(b => b.id === new URLSearchParams(location.search).get('book'));
if (!selectedBook) {
  document.querySelector('main').innerHTML='<section class="book-intro"><h1>Choose a book</h1><p>This listening page needs a book from the library.</p><a class="primary" href="./">Go to the library</a></section>';
} else {
  window.CURRENT_BOOK=selectedBook;
  document.title=selectedBook.fullTitle+' · Play the Book';
  document.getElementById('book-title').textContent=selectedBook.title;
  document.getElementById('book-subtitle').textContent=selectedBook.subtitle;
  document.getElementById('book-description').textContent=selectedBook.description;
  const link=document.getElementById('publisher-link'); link.href=selectedBook.publisherUrl; link.textContent='About the '+selectedBook.publisher+' songbook';
  document.getElementById('book-meta').textContent=' · ISBN '+selectedBook.isbn;
  document.getElementById('instrument-option').textContent='With '+selectedBook.instrument.toLowerCase()+' versions';
  document.getElementById('queue-ukulele').textContent='Queue '+selectedBook.instrument.toLowerCase()+' versions';
  document.getElementById('checked-date').textContent='Selections checked '+selectedBook.checkedDate+'. Availability can change. Each selection includes a direct link and a search for alternatives.';
  const data=document.createElement('script');data.src=selectedBook.dataFile;
  data.onload=()=>{const app=document.createElement('script');app.src='app.js';document.body.append(app);};
  data.onerror=()=>{document.getElementById('song-detail').textContent='The song list could not load. Please reload this page.';};document.body.append(data);
}

