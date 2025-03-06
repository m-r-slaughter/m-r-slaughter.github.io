function getCurrentYear(){
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
  let dateSpan = document.querySelector('.date');
  
  dateSpan.innerHTML = getCurrentYear();
