const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popupClose = document.querySelector('.popup-close'),
    popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem)=> {
        elem.addEventListener('click', () => { 
           
        if(screen.width > 768){
            popup.style.display = 'block';

            var start = Date.now();
            var stop = setInterval(function() {
              
                var timePassed = Date.now() - start;
              
                if (timePassed >= 1800) {
                  clearInterval(stop); 
                  return;
                }
              
                draw(timePassed);
              
              }, 20);
            
              function draw(timePassed) {
                popupContent.style.left = timePassed / 3 + 'px';
              }
            }

            else {
                popup.style.display = 'block';
            }


    
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
        });
};

export default togglePopUp;
