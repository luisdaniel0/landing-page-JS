/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const nav = () => {

  let navUI = '';
  // looping over all sections for its id and dataset
  sections.forEach(section => {

    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;

    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

  });
  // append elements to the navigation
  navigation.innerHTML = navUI;


};

nav();

// Add class 'active' to section when near top of viewport

// getting the largest value that's less or equal to the number
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');

};
// adding the active class
const addActive = (conditional, section) => {
  if (conditional) {
    section.classList.add('your-active-class');

  };
};

//implementating the actual function

const sectionActivation = () => {
  sections.forEach(section => {
    const elementOffset = offset(section);

    inviewport = () => elementOffset < 100 && elementOffset >= -100;

    removeActive(section);
    addActive(inviewport(), section);
  });
};

window.addEventListener('scroll', sectionActivation);


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active