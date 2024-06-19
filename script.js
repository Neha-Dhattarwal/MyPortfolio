const form = document.getElementById('contact-form');
form.addEventListener('submit', change);

function change(event){
    const name = document.getElementById('name').value;
    alert(`Thanks ${name} ,for contacting me`);
}