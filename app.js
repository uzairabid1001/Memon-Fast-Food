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
