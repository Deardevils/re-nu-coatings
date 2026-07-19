(function () {
	var popup = document.getElementById('gallery-popup');
	if (!popup) {
		return;
	}

	var popupImage = popup.getElementsByTagName('img')[0];
	var closeButton = popup.getElementsByTagName('button')[0];
	var galleryLinks = document.querySelectorAll('.gallery-link');

	function openPopup(event) {
		event.preventDefault();
		popupImage.src = this.href;
		popupImage.alt = this.getElementsByTagName('img')[0].alt;
		popup.className = 'gallery-popup open';
		popup.setAttribute('aria-hidden', 'false');
		closeButton.focus();
	}

	function closePopup() {
		popup.className = 'gallery-popup';
		popup.setAttribute('aria-hidden', 'true');
		popupImage.src = 'images/spacer.gif';
	}

	for (var i = 0; i < galleryLinks.length; i++) {
		galleryLinks[i].onclick = openPopup;
	}

	closeButton.onclick = closePopup;
	popup.onclick = function (event) {
		if (event.target === popup) {
			closePopup();
		}
	};
	document.onkeydown = function (event) {
		event = event || window.event;
		if (event.key === 'Escape' || event.keyCode === 27) {
			closePopup();
		}
	};
}());
