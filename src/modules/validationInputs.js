const validationInputs = () => {
    let inputNames = document.querySelectorAll('input[name="user_name"]'),
        inputPhones = document.querySelectorAll('input[name="user_phone"]'),
        inputMessages = document.querySelector('.mess');


    const validationInputName = () => {

        for(let item of inputNames) {
            item.value = item.value.replace(/[^А-Яа-я\s]/g, '');
        }               
    }
    
    for(let item of inputNames) {
        item.addEventListener('input', validationInputName); 
    }
                    
    const validationNumber = () => {

        for(let item of inputPhones) {
            item.value = item.value.replace(/[^0-9+]/g, ''); 
        }  
    };

    for(let item of inputPhones) {
        item.addEventListener('input', validationNumber); 
    }          

    const validationInputMessage = () => {
        inputMessages.value = inputMessages.value.replace(/[^А-Яа-я\s]/g, '');
    }

    inputMessages.addEventListener('input', validationInputMessage); 
};

export default validationInputs;