const $form = document.querySelector('#form');
const $btnSend = document.querySelector('#sendEmail');

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('nombre'));
    $btnSend.setAttribute('href', 'mailto:cconstancio76@gmail.com?subject=${form.get('nombre')}${form.get('email')}&body=${form.get('mensaje');
    $btnSend.click();
}