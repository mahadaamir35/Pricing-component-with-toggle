const toggleButton = document.getElementById('toggleButton');
const toggleIcon = document.querySelector('#toggleButton div');
const basicPrice = document.getElementById('basicPrice');
const professionalPrice = document.getElementById('professionalPrice');
const masterPrice = document.getElementById('masterPrice');
toggleButton.addEventListener('click', function() {
	toggleIcon.classList.toggle('annually');
	if (toggleIcon.classList.contains('annually')) {
		basicPrice.innerText = `$199.99`;
		professionalPrice.innerText = `$249.99`;
		masterPrice.innerText = `$399.99`;
		return;
	}
	basicPrice.innerText = `$19.99`;
	professionalPrice.innerText = `$24.99`;
	masterPrice.innerText = `$39.99`;
});
