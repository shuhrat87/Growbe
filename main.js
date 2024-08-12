//header
const navBurger = document.querySelector(".nav__burger");
navBurger.addEventListener("click", function () {
  this.classList.toggle("active");
})

//

//scroll
const scrollImg = document.querySelectorAll(".header__card-img");

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  // scrollFantasy.style.objectPosition = `0 ${window.scrollY / 20}%`;

  scrollImg.forEach((item) => {
    
    const speed = item.getAttribute("data-speed")
    
    item.style.transform = `translateX(${window.scrollY / 2 * speed}px)`;
  });
  
  
});

//section latest
var swiper = new Swiper(".mySwiper", {
 
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1140: {
      slidesPerView: 1.5,
    },
    
  }
});


//client


var swiper = new Swiper(".mySwiper2", {
 
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    1140: {
      slidesPerView: 2,
    },
    1124: {
      
      slidesPerView: 1,
    }
    
    
  }
});

// team section

var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1140: {
      slidesPerView: 4,
    }
  }
});
//statistic
// const timerCardNum = document.querySelectorAll(".timer__card-num");

// timerCardNum.forEach((item) => {
//   const originalText = item.innerHTML;
//   const number = parseInt(originalText.replace(/\D/g, ''), 10);

//   timer(item, number, originalText);
// });

// function timer(elem, number, originalText, i = 0) {
//   i++;
//   elem.innerHTML = i;

//   const stop = setTimeout(() => {
//     timer(elem, number, originalText, i);
//   }, 15);

//   if (i >= number) {
//     clearTimeout(stop);
//     if (originalText.includes('+')) {
//       elem.innerHTML = `${i}+`;
//     }
//   }
// }
//statistic
const timerCardNum = document.querySelectorAll(".timer__card-num");

console.log('Found elements:', timerCardNum.length); // Должно вывести количество найденных элементов

// Анимация чисел
function animateNumbers(item) {
    const originalText = item.innerHTML;
    const number = parseInt(originalText.replace(/\D/g, ''), 10);

    let i = 0;
    const interval = setInterval(() => {
        item.innerHTML = ++i;
        if (i >= number) {
            clearInterval(interval);
            if (originalText.includes('+')) {
                item.innerHTML = `${i}+`;
            }
        }
    }, 50);
}

// Intersection Observer для запуска анимации при скролле
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const item = entry.target;
            if (!item.classList.contains('animated')) {
                item.classList.add('animated');
                animateNumbers(item);
                observer.unobserve(item);
            }
        }
    });
}, { threshold: 0.1 });

// Наблюдение за всеми элементами .timer__card-num
timerCardNum.forEach((item) => {
    observer.observe(item);
});
