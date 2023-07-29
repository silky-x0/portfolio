const symbol = "!@#$%^&*QAXCMFJDLOE)_+-=[]\{}|;':,?";
const element = document.querySelector(".name");

function animateText() {
  let iteration = 0;
  const originalText = element.dataset.value;
  
  const interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return originalText[index];
        }
      
        return symbol[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= originalText.length){ 
      clearInterval(interval);
      setTimeout(() => {
        animateText();
      }, 2000); // 2 seconds delay before next animation starts
    }
    
    iteration += 1 / 3;
  }, 50);
}

animateText();
