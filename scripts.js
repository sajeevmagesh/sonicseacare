// Impact Section - Count-up Animation
document.addEventListener('DOMContentLoaded', function () {
    let counters = document.querySelectorAll('.impact-number');
    let options = {
      threshold: 1
    };
  
    let observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let counter = entry.target;
          let count = parseInt(counter.getAttribute('data-count'));
          let currentCount = 0;
          let interval = setInterval(() => {
            if (currentCount < count) {
              currentCount++;
              counter.textContent = currentCount;
            } else {
              clearInterval(interval);
            }
          }, 10);
          observer.unobserve(counter);
        }
      });
    }, options);
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  