// my expertise - change the display when clicking the left and right arrow
document.addEventListener('DOMContentLoaded', function() {

      // Adhoc Data Analysis
      const myExpertiseLeftArrow1 = document.getElementById("my-expertise-left-arrow-1");
      const myExpertiseRightArrow1 = document.getElementById("my-expertise-right-arrow-1");
      const myExpertiseSteps1 = document.getElementById("my-expertise-step-cards-1");
  
      myExpertiseRightArrow1.addEventListener("click", function() {
          // when clicking the right arrow, the cards shift to the left
          myExpertiseSteps1.appendChild(myExpertiseSteps1.firstElementChild);
      });
  
      myExpertiseLeftArrow1.addEventListener("click", function() {
          // when clicking the left arrow, the cards shift to the right
          myExpertiseSteps1.insertBefore(myExpertiseSteps1.lastElementChild, myExpertiseSteps1.firstElementChild);
      });
  
      // Predictive Analysis
      const myExpertiseLeftArrow2 = document.getElementById("my-expertise-left-arrow-2");
      const myExpertiseRightArrow2 = document.getElementById("my-expertise-right-arrow-2");
      const myExpertiseSteps2 = document.getElementById("my-expertise-step-cards-2");
  
      myExpertiseRightArrow2.addEventListener("click", function() {
          // when clicking the right arrow, the cards shift to the left
          myExpertiseSteps2.appendChild(myExpertiseSteps2.firstElementChild);
      });
  
      myExpertiseLeftArrow2.addEventListener("click", function() {
          // when clicking the left arrow, the cards shift to the right
          myExpertiseSteps2.insertBefore(myExpertiseSteps2.lastElementChild, myExpertiseSteps2.firstElementChild);
      });

  });


// var elements = document.getElementsByClassName('ease-in');

// function isElementPartiallyVisible(element) {
// var rect = element.getBoundingClientRect();
// var windowHeight = window.innerHeight || document.documentElement.clientHeight;

// return rect.top < windowHeight && rect.bottom >= 0;
// }

// function changeOpacityOneByOne() {
// for (var i = 0; i < elements.length; i++) {
//     (function(index) {
//     setTimeout(function() {
//         if (isElementPartiallyVisible(elements[index])) {
//         elements[index].style.opacity = '1';
//         }
//     }, index * 0); // Adjust the duration between each element
//     })(i);
// }
// }

// window.addEventListener('scroll', function() {
// changeOpacityOneByOne();
// });

