

document.getElementById('blogButton').addEventListener('click', function () {
    window.location.href = 'blog.html';
});

function handleDonation(buttonId, totalId, amountInputId, historyListId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const bank = document.getElementById('bank').innerText;
        const bankAmount = parseFloat(bank);
        const amount = document.getElementById(amountInputId).value;
        const donationAmount = parseFloat(amount);

        if (!isNaN(donationAmount) && donationAmount > 0) {
            // Update total donation and bank balance
            const newBankAmount = bankAmount + donationAmount;
            const totalDonation = document.getElementById(totalId).innerText;
            const totalDonationAmount = parseFloat(totalDonation);
            const newTotalDonation = donationAmount + totalDonationAmount;

            document.getElementById(totalId).innerText = newTotalDonation;
            document.getElementById('bank').innerText = newBankAmount;

            // Show the popup modal
            document.getElementById('popup-modal').classList.remove('hidden');

            // Add donation to history
            addDonationToHistory(donationAmount, historyListId);

            // Clear the donation input field
            document.getElementById(amountInputId).value = '';
        } else {
            alert('Please enter a valid donation amount.');
        }
    });
}

// Function to add donations to history
function addDonationToHistory(donationAmount, historyListId) {
    const li = document.createElement('li');
    li.classList.add('flex', 'display-block', 'py-2', 'border-b', 'border-gray-300');

    const now = new Date();
    const dateString = now.toLocaleString();

    const amountElement = document.createElement('div');
    amountElement.textContent = `Amount: ${donationAmount} Taka`;
    amountElement.classList.add('text-green-600', 'w-1/3', 'text-center');

    const dateTime = document.createElement('div');
    dateTime.textContent = dateString;
    dateTime.classList.add('text-gray-500', 'display-block', 'w-1/3');

    li.appendChild(amountElement);
    li.appendChild(dateTime);

    document.getElementById(historyListId).appendChild(li);
}

// Toggle views between Donation and History
document.getElementById('donation').addEventListener('click', function () {
    document.getElementById('hidden').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    this.classList.add('bg-[rgb(180,240,97)]');
    document.getElementById('history').classList.remove('bg-[rgb(180,240,97)]');
});

document.getElementById('history').addEventListener('click', function () {
    document.getElementById('hidden').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    this.classList.add('bg-[rgb(180,240,97)]');
    document.getElementById('donation').classList.remove('bg-[rgb(180,240,97)]');
});

// Initialize donation buttons
handleDonation('donate-button', 'total', 'amount', 'history-section');
handleDonation('donate-button2', 'total2', 'amount2', 'history-section');
handleDonation('donate-button3', 'total3', 'amount3', 'history-section');

// Close the popup modal
document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup-modal').classList.add('hidden');
});


