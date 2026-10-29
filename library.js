'use strict';
const escapeText = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
if (/^#song-p\d+$/.test(location.hash)) location.replace('book.html?book=100-beautiful-ukulele'+location.hash);
document.getElementById('library-count').textContent = `${window.BOOKS.length} ${window.BOOKS.length===1?'book':'books'}`;
document.getElementById('book-grid').innerHTML = window.BOOKS.map(b=>`<article class="book-card"><p class="eyebrow">${escapeText(b.instruments.join(' + '))} · ${b.songCount} SONGS</p><h3>${escapeText(b.title)}<span>${escapeText(b.subtitle)}</span></h3><p>${escapeText(b.description)}</p><div class="book-card-actions"><a class="primary" href="book.html?book=${encodeURIComponent(b.id)}">Open this book</a><a href="${escapeText(b.publisherUrl)}" target="_blank" rel="noopener">About the ${escapeText(b.publisher)} songbook</a></div></article>`).join('');

