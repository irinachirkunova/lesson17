const insertOnlyNumbers = () => {
    let calcItems = document.querySelectorAll('.calc-item');
     
    for(let item of calcItems) {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^\d.]/g, '');
         
        })
    }           
};

export default insertOnlyNumbers;