function mobileNav() {
  // Mobile nav button
  let mobileNav = document.querySelector('.nav-list')
  let mobileBtn = document.querySelector('.nav__burger')
  let body = document.querySelector('.page')

  mobileBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('open')
    mobileBtn.classList.toggle('open')
    body.classList.toggle('stopscroll')
  })
}

export default mobileNav;