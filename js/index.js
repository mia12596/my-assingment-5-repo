document.getElementById('donate-button').addEventListener('click', function () {
    const z = document.getElementById('bank').innerText;
    const h = parseFloat(z);
    const a = document.getElementById('amount').value;
    const d = parseFloat(a);
    const b = document.getElementById('total').innerText;
    const c = parseFloat(b);
    const sum = d + c;
    const v = h + sum;

    document.getElementById('total').innerText = sum;
    document.getElementById('bank').innerText = v;

    // Show the popup modal
    document.getElementById('popup-modal').classList.remove('hidden');

});

// Close the popup modal when the 'Close' button is clicked
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup-modal').classList.add('hidden');
});




// Get the donation and history buttons
const donationButton = document.getElementById('donation');
const historyButton = document.getElementById('history');

// Event listener for Donation button
donationButton.addEventListener('click', function () {
    // Change Donation button to active (green)
    donationButton.classList.remove('bg-gray-200');
    donationButton.classList.add('bg-[rgb(180,240,97)]');

    // Change History button to inactive (gray)
    historyButton.classList.remove('bg-[rgb(180,240,97)]');
    historyButton.classList.add('bg-gray-200');
    document.getElementById('hidden').classList.remove('hidden');


});

// Event listener for History button
historyButton.addEventListener('click', function () {
    // Change History button to active (green)
    historyButton.classList.remove('bg-gray-200');
    historyButton.classList.add('bg-[rgb(180,240,97)]');

    // Change Donation button to inactive (gray)
    donationButton.classList.remove('bg-[rgb(180,240,97)]');
    donationButton.classList.add('bg-gray-200');
    document.getElementById('hidden').classList.add('hidden');
    const historyList = document.getElementById('donation-history');
    const newEntry = document.createElement('li');
    newEntry.textContent = `Donated  to Noakhali flood relief.`;
    historyList.appendChild(newEntry);



});