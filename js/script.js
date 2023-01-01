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

//selecting and assigning <li> and <section> from the DOM to variables 
const navigation = document.getElementById('navbar__list');
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

  let navBarInterface = '';
  // looping sections for id and dataset
  sections.forEach(section => {

    const sectionId = section.id; //targeting the id of every section tag
    const sectionDatasetNav = section.dataset.nav; //targetting data-nav of every section tag

    navBarInterface += `<li><a class="menu__link" href="#${sectionId}">${sectionDatasetNav}</a></li>`;

  });
  // appending elements to 'nav__bar' using innerHTML
  navigation.innerHTML = navBarInterface;


};

nav();

// Add class 'active' to section when near top of viewport

//basically every section that is in my viewport, an 'active class' will dynamically navigate through it 

// function to get the relative position and size of element
const posSize = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// remove active class
const noActiveClass = (section) => {
  section.classList.remove('your-active-class');

  //adds styling to non-active classes, doesn't leave it red
  section.style.cssText = ('background: linear-gradient(0deg, rgba(255, 255, 255, .1) 0%, rgba(255, 255, 255, .2) 100%);')

};
// add active class
const activeClass = (condition, section) => {
  if (condition) {
    section.classList.add('your-active-class');


    //adds a red styling to the current active class
    section.style.cssText = 'background-color: red;'

  };
};


const activateClass = () => {
  sections.forEach(section => {
    const elementPosition = posSize(section);

    inviewport = () => elementPosition < 200 && elementPosition >= -200;

    noActiveClass(section);
    activeClass(inviewport(), section);
  });
};

document.addEventListener('scroll', activateClass);


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active