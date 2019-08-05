const sendForm = () => {
    const inputName = document.querySelectorAll('input[name="user_name"]'),
            inputEmail = document.querySelectorAll('.form-email'),
            inputPhone = document.querySelectorAll('.form-phone'),
            inputMessage = document.getElementById('form2-message');


    const errorMessage = 'Что то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо! Мы скоро с вами свяжемся';

    const forms = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;'
    statusMessage.style.cssText = 'color: white;'

    for(let form of forms) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);
            let body = {}

            formData.forEach((val, key) => {
                body[key] = val;
            });

                postData(body)
                        .then((response) => {
                            for(let input of inputName) {
                                input.value = '';
                            }
                            for(let input of inputPhone) {
                                input.value = '';
                            }
                            for(let input of inputEmail) {
                                input.value = '';
                            
                            }
                            inputMessage.value = '';
                            if(response.status !== 200) {
                                throw new Error('status network not 200');

                            }
                            statusMessage.textContent = successMessage;
                        })
                        .catch((error) => 
                            statusMessage.textContent = errorMessage

                        );
        
        });

    }

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });

    }

};

export default sendForm;