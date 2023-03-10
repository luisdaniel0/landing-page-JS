

//selecting and assigning <li> and <section> from the DOM to variables 
const navigationBar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
//empty variable, can't use const because will be re-assigning it later
 let navbarContent = '';


//navbar function
const navbar = () => {
  
  //looping through every section and adding HTML via the DOM and string interpolation
  sections.forEach(section => {
    navbarContent += `<li><a class="menu__link" href=#${section.id}>${section.dataset.nav}</a></li>`
  });

  //appending the navigationBar with the navBarcontent
  navigationBar.innerHTML = navbarContent;
};

navbar();

window.addEventListener('scroll', function () {
  setActiveState();
})

const setActiveState = () => {
  sections.forEach(section => {

    if (section.getBoundingClientRect().top <= 150 && section.getBoundingClientRect().bottom >= 150) {
      //apply active state condition
      section.classList.add('active');
      section.style.cssText= 'background-color:red';


    } else {
       //remove state when its not active
      section.classList.remove('active');
      section.style.removeProperty('background-color')

      
    }
  })
}

/*RESOURCE LINKS:
https://knowledge.udacity.com/questions/148631
https://www.youtube.com/watch?v=MKpZadkuT-0 */