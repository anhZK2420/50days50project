const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const circles = document.querySelectorAll('.circle');
const bar = document.querySelector('.bar');
const bars = document.querySelectorAll('.bar');

let currentIndex = 0;
prevButton.classList.toggle('disabled', currentIndex === 0);



function updateCircle() {
    circles.forEach((circle, index) => {

        nextButton.classList.toggle('disabled', currentIndex === circles.length - 1); 
        prevButton.classList.toggle('disabled', currentIndex === 0);


        if (index <= currentIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

}


function updateBar() {
    bars.forEach((bar, index) => {
        if (index < currentIndex) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    });

   
}

nextButton.addEventListener('click', () => {
    if (currentIndex < circles.length -1) {
        currentIndex++;
        updateBar();

        updateCircle();
    }

   
});

prevButton.addEventListener('click', () => {
  prevButton.classList.toggle('disabled', currentIndex === 0);

    if (currentIndex > 0) {
        currentIndex--;
        updateBar();
        updateCircle();
    }
});

updateCircle(); 