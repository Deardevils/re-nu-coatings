# Re-Nu Coatings website

This is a static HTML website for Re-Nu Coatings.

## Main files

- `index.html` — current live page.
- `index-20260720.html` — earlier backup from 20 July 2026.
- `index-20260720popup.html` — saved lightbox/popup version from 20 July 2026.
- `stylesheets/renu.css` — shared site, gallery, and lightbox styles.
- `js/gallery.js` — lightbox behaviour retained for possible future use.
- `images/` — site and gallery images.

## Current gallery

The gallery in `index.html` uses static, non-clickable images arranged in two
columns. Each image keeps its natural aspect ratio; it is not cropped to a
fixed 4:3 ratio.

The gallery table has these classes:

```html
<table class="new-gallery static-gallery">
```

The `static-gallery` CSS overrides the original 4:3 lightbox thumbnail rules:

```css
.new-gallery.static-gallery img {
	box-sizing: border-box;
	margin-bottom: 8px;
	border: 2px solid #CCBD88;
	background: #000000;
	aspect-ratio: auto;
	height: auto;
	object-fit: initial;
}
```

Gallery images should remain as plain `<img>` elements, without links:

```html
<img src="images/re-nu-gallery/column%201/image1.jpeg"
     alt="Restored bath gallery image 1">
```

## Restoring the lightbox

Use `index-20260720popup.html` as the reference. To restore the lightbox
without replacing unrelated future page changes:

1. Wrap every gallery image in an anchor with the `gallery-link` class. The
   link and image should use the same image path.
2. Remove `static-gallery` from the gallery table class.
3. Restore the `#gallery-popup` block immediately before `</body>`.
4. Keep the existing `js/gallery.js` script reference in the page `<head>`.

Example clickable image:

```html
<a href="images/re-nu-gallery/column%201/image1.jpeg" class="gallery-link">
	<img src="images/re-nu-gallery/column%201/image1.jpeg"
	     alt="Restored bath gallery image 1">
</a>
```

Required popup block:

```html
<div id="gallery-popup" class="gallery-popup" role="dialog"
     aria-modal="true" aria-label="Gallery image" aria-hidden="true">
	<button type="button" class="gallery-close"
	        aria-label="Close image">&times;</button>
	<img src="images/spacer.gif" alt="">
</div>
```

The lightbox JavaScript and CSS have intentionally been left in place. On the
current static page, `gallery.js` detects that the popup block is absent and
exits without changing the page.

## Adding gallery images

Add the image file under `images/re-nu-gallery/`, then insert a plain `<img>`
element into the appropriate gallery column in `index.html`. Use a short,
descriptive `alt` attribute and URL-encode spaces in paths as `%20`.

