

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

            const newBankAmount = bankAmount + donationAmount;
            const totalDonation = document.getElementById(totalId).innerText;
            const totalDonationAmount = parseFloat(totalDonation);
            const newTotalDonation = donationAmount + totalDonationAmount;

            document.getElementById(totalId).innerText = newTotalDonation;
            document.getElementById('bank').innerText = newBankAmount;


            document.getElementById('popup-modal').classList.remove('hidden');


            addDonationToHistory(donationAmount, historyListId);


            document.getElementById(amountInputId).value = '';
        } else {
            alert('Please enter a valid donation amount.');
        }
    });
}


function addDonationToHistory(donationAmount, historyListId) {
    const li = document.createElement('li');
    li.classList.add('flex', 'display-block', 'py-2', 'border-b', 'border-gray-300');

    const now = new Date();
    const dateString = now.toLocaleString();

    const amountElement = document.createElement('div');
    amountElement.textContent = `Amount: ${donationAmount} Taka

    `;
    amountElement.classList.add('text-green-600', 'w-1/3', 'text-center');

    const dateTime = document.createElement('div');
    dateTime.textContent = dateString;
    dateTime.classList.add('text-gray-500', 'display-block', 'w-1/3');

    li.appendChild(amountElement);
    li.appendChild(dateTime);

    document.getElementById(historyListId).appendChild(li);
}




document.getElementById('donation').addEventListener('click', function () {

    document.getElementById('hidden').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');

    this.classList.add('bg-green-400');
    document.getElementById('history').classList.remove('bg-green-400');
});

document.getElementById('history').addEventListener('click', function () {

    document.getElementById('hidden').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');


    this.classList.add('bg-green-400');
    document.getElementById('donation').classList.remove('bg-green-400');
});



handleDonation('donate-button', 'total', 'amount', 'history-section');
handleDonation('donate-button2', 'total2', 'amount2', 'history-section');
handleDonation('donate-button3', 'total3', 'amount3', 'history-section');

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('popup-modal').classList.add('hidden');
});






