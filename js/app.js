const progressTag = document.querySelector(".progress")
// const pixelsTag = document.querySelector(".pixels")

const bodyTag = document.querySelector('body')
const sections = document.querySelectorAll('section')
const clientTag = document.querySelector('.client')
const pageTag = document.querySelector('.page')
const headerTag = document.querySelector('header')


document.addEventListener('scroll', function () {

  const pixels = window.pageYOffset
  const midViewport = pixels + (window.innerHeight / 2)

  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance 

  // pixelsTag.innerHTML = pixels
  progressTag.style.width = `${100 * percentage}%`

  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client')
      pageTag.innerHTML = section.getAttribute('data-page')

      if (section.hasAttribute('data-is-dark')) {
        headerTag.classList.add('white')
        progressTag.classList.add('white')
      } else {
        headerTag.classList.remove('white')
        progressTag.classList.remove('white')
        
      }
    }

    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    
    const distanceToSection = midViewport - midSection

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })


  })
    
})

