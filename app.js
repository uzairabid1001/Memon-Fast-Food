const deliveryBtn = document.getElementById('delivery');
const selectBtn = document.getElementById('selectBtn');
const locationSelect = document.getElementById('location');
const popup = document.getElementById('popup');


deliveryBtn.addEventListener('click', () => {
  deliveryBtn.classList.add('active');
  
});



// Handle select button click
selectBtn.addEventListener('click', () => {
  const location = locationSelect.value;
  if (!location) {
    alert('Please select a location!');
    return;
  }
  popup.innerHTML=""
  // Close popup or proceed
  // alert(`Order Type: ${deliveryBtn.classList.contains('active') ? 'Delivery' : 'Pickup'}\nLocation: ${location}`);
  
  document.getElementById('popup').style.display = 'none';
});






function openModal(element) {

  const title = element.getAttribute('data-title');
  const description = element.getAttribute('data-description');
  const imageSrc = element.getAttribute('data-image');
  const Rs = element.getAttribute('data-rs');
  
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('modalImage').src = imageSrc;
  document.getElementById('modalrs').textContent = Rs;

  
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {

  document.getElementById('modal').style.display = 'none';
}


window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
};
