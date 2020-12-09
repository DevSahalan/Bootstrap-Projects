var tabEl = document.querySelector('#my-nav ')
tabEl.addEventListener('shown.bs.tab', function (event) {
  console.log(event.target) // newly activated tab
  console.log(event.relatedTarget) // previous active tab
})

gsap.from('.row', {
  opacity: 0,
  duration: 0.5,
  delay: 2,
  stagger: 0.5,
})
