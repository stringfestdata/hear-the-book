# Play the Book

**[Open the library](https://playthebook.stringfestanalytics.com/)** · **[Make your own](https://playthebook.stringfestanalytics.com/make-your-own.html)**

A growing library of playable tables of contents. The first and currently only book is Hal Leonard's *100 Most Beautiful Songs Ever for Fingerstyle Ukulele* (ISBN 9781495099304). [Open its listening companion](https://playthebook.stringfestanalytics.com/book.html?book=100-beautiful-ukulele).

Search by title, artist, or page, compare recordings, and build a listening queue. **Reference recording** means an independently selected performance, generally by the TOC's credited artist. It is not publisher audio or necessarily the original. Earlier/original selections include sources; instrument performances may use different arrangements. Direct links remain available if a player fails.

Optional saved songs and notes stay in your browser. Use the book page's backup controls to transfer them. A backup from the original Hear the Book site remains compatible with this ukulele book, but browser storage does not automatically follow a new domain.

## Use the skill

Download playable-toc-skill.zip or copy skill/playable-toc/SKILL.md into your assistant's supported skill location. The make-your-own page includes a copy-ready prompt. No particular assistant, instrument, or hosting service is required.

## Run or add a book

This is a buildless static site. Serve this directory with any static web server; GitHub Pages uses the main branch root. The CNAME file sets the public domain.

books.js is the library manifest. Each entry has a stable ID, title/edition metadata, publisher link, instrument, dataFile, and unique storageKey. Add a new book's verified catalog as a separate JavaScript file assigning window.SONGS, using songs.js as the schema example. Add its manifest entry; the shared book.html page loads it through ?book=THE-ID. Keep song IDs stable because notes use them. Recording kind ukulele is the legacy internal name for the instrument-performance category; the visible label follows the book's instrument. Never reuse another book's storageKey.

The existing songs.js and listening-links.txt belong only to the ukulele book. Old #song-pNN links redirect to its book page. Preserve direct source links and version qualifications when updating recordings.

Independent listening companion by George Mount / Stringfest Analytics. Not affiliated with Hal Leonard or the artists. No notation, tablature, lyrics, or audio files are distributed. The official Stringfest logo is included intact.

Google Analytics uses the existing Stringfest GA4 measurement ID G-HYN5W1BYX5. It runs only on the production hostname; local previews are excluded. No practice-note text is sent to analytics.

