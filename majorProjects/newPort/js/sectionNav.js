function sectionNav() {
    //get the navigation items
    var elements = document.querySelectorAll('.sectionNav ul li'),
        //get the 0 point
        bodyRect = document.body.getBoundingClientRect(),
        //get the 1st sections coordinates
        section1Rect = document.getElementById('WebDesign').getBoundingClientRect(),
        //calc 1st section position from 0 point
        section1 = section1Rect.top - bodyRect.top,
        //get the 2nd sections coordinates
        section2Rect = document.getElementById('GraphicDesign').getBoundingClientRect(),
        //calc 2nd section position from 0 point
        section2 = section2Rect.top - bodyRect.top,
        //variables for later
        x = null,
        counter = null;

    //when window scrolls perform function
    window.addEventListener('scroll', function myScroll() {

        //get the point when the section is scrolled half the way to the screen
        x = document.documentElement.scrollTop + screen.height / 1.5;

        //make all inactive, remove active class
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add(`inactive`);
            elements[i].classList.remove(`active`);
        }

        //if document is before the 1st section
        if (x < section1) {

            //make all inactive, remove active class
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.remove(`inactive`);
                elements[i].classList.remove(`active`);
            }

            //if document is inside 1st section
        } else if (x >= section1 && x < section2) {

            //set counter value to the 1st object in the array of elements
            counter = 0;

            //make first object active and remove inactive class
            elements[counter].classList.add('active');
            elements[counter].classList.remove('inactive');

            //if document is inside 2nd section
        } else if (x >= section2) {

            //set counter to the 2nd object in the array of elements
            counter = 1;

            //make second object active and remove inactive class
            elements[counter].classList.add('active');
            elements[counter].classList.remove('inactive');
        }

        //set up interactions for hover and focus states

        //for first element, when screen is in area 2
        elements[0].addEventListener('mouseover', () => {
            if (x >= section2) {
                elements[0].classList.remove('inactive');
            }
        });
        elements[0].addEventListener('mouseout', () => {
            if (x >= section2) {
                elements[0].classList.add('inactive');
            }
        });
        elements[0].addEventListener('focus', () => {
            if (x >= section2) {
                elements[0].classList.remove('inactive');
            }
        });
        elements[0].addEventListener('blur', () => {
            if (x >= section2) {
                elements[0].classList.add('inactive');
            }
        });

        //for second element, when screen is in area 1
        elements[1].addEventListener('mouseover', () => {
            if (x >= section1 && x < section2) {
                elements[1].classList.remove('inactive');
            }
        });
        elements[1].addEventListener('mouseout', () => {
            if (x >= section1 && x < section2) {
                elements[1].classList.add('inactive');
            }
        });
        elements[1].addEventListener('focus', () => {
            if (x >= section1 && x < section2) {
                elements[1].classList.remove('inactive');
            }
        });
        elements[1].addEventListener('blur', () => {
            if (x >= section1 && x < section2) {
                elements[1].classList.add('inactive');
            }
        });
    });
}
sectionNav();