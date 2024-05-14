const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const submitBtn = document.getElementById('submitBtn')

function mailTo() {
    window.location.href = `mailto:romanyunker@gmail.com?subject=Interested In Volunteering @ VegFest Nelson&body=Hello, my name is ${nameInput.value} and I am interested in volunteering at the Nelson VegFest!`;
}

submitBtn.addEventListener('click', (e) => {
e.preventDefault()
mailTo()
})
