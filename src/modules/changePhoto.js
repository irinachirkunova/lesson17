const changePhoto = () => {
    let images = document.querySelectorAll('.command__photo');
    for(let img of images) {

        let imageSrc = img.src;

        img.addEventListener('mouseenter', (event) => {
            if(event.target.matches('.command__photo')) {
                event.target.src = event.target.dataset.img;
            }
        });
        img.addEventListener('mouseout', (event) => {
            event.target.src =  imageSrc;
        })
    }
   
};

export default changePhoto;
