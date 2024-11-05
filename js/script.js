const projects = [
    {
        title: 'Pokemon App',
        screenshot: '',
        description: 'Small web application with HTML, CSS, and JavaScript that loads Pokemon data from an external API and enables the viewing of data points in detail.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://ptn6389.github.io/pokemon-app/',
        sourceLink: 'https://github.com/PTN6389/pokemon-app'
},
    {
        title: 'Movie API',
        screenshot: '',
        description: 'Server-side component of a “movies” web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.',
        technologies: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'JSON', 'JavaScript', 'Postman', 'Heroku'],
        liveLink: '',
        sourceLink: 'https://github.com/PTN6389/movie_api'
},
    {
        title: 'myFlix App',
        screenshot: '',
        description: 'React client-side code for an app called myFlix based on the existing Movie API server-side code (REST API and database).',
        technologies: ['React', 'Parcel', 'Bootstrap', 'React Redux', 'Netlify'],
        //liveLink: 'https://myflix-ptn.netlify.app/',
        liveLink: '',
        sourceLink: 'https://github.com/PTN6389/myFlix-client'  
    },
    {
        title: 'Meet App',
        screenshot: '',
        description: 'Serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.',
        technologies: ['React', 'Test Driven Development(TDD) using Jest', 'AWS Lambda serverless function'],
        //liveLink: 'https://ptn6389.github.io/meet/',
        liveLink: '',
        sourceLink: 'https://github.com/PTN6389/meet'
    },
    {
        title: 'Chat App',
        screenshot: '',
        description: 'Chat app for mobile devices using React Native that provides users with a chat interface and options to share images and their location.',
        technologies: ['React Native', 'Expo', 'Google Firestore Database', 'Google Firebase Authentication', 'Firebase Cloud Storage', 'Gifted Chat Library'],
        liveLink: '',
        sourceLink: 'https://github.com/PTN6389/chat-app'
    },
    {
        title: 'myFlix App',
        screenshot: '',
        description: 'Angular client-side for an application called myFlix based on the existing Movie API server-side code (REST API and database).',
        technologies: ['Angular', 'Angular Material Design', 'TypeDoc', 'JSDoc'],
        //liveLink: 'https://ptn6389.github.io/myFlix-Angular-client/welcome',
        liveLink: '',
        sourceLink: 'https://github.com/PTN6389/myFlix-Angular-client'  
    },
    {
        title: 'QR Code Component',
        screenshot: '',
        description: 'This is a solution to the <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H" target="_blank">QR code component challenge</a> on Frontend Mentor. This simple UI utilizes HTML and CSS to display a card with a QR code, title, and text.',
        technologies: ['HTML', 'CSS'],
        liveLink: 'https://ptn6389.github.io/qr-code-component/',
        sourceLink: 'https://github.com/PTN6389/qr-code-component'  
    },
    {
        title: 'Blog Preview Card',
        screenshot: '',
        description: 'This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). This UI utilizes HTML and CSS to display a blog card with image, classification button, published date, title, text, avatar image, and author.',
        technologies: ['HTML', 'CSS'],
        liveLink: 'https://ptn6389.github.io/blog-preview-card/',
        sourceLink: 'https://github.com/PTN6389/blog-preview-card'  
    }
]

const technologies = [];

projects.forEach(project => {
    let projectElement = document.createElement('div');
    projectElement.classList.add('grid__item');
    projectElement.innerHTML = `   
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><a href="${project.liveLink}" target="_blank">Live Demo</a></p>
        <p><a href="${project.sourceLink}" target="_blank">Source Code</a></p>
        <h4>Technologies:</h4>
        <span>
            ${project.technologies.map(tech => `${tech}`).join(',  ')}
        </span>        
    `
    document.querySelector('.grid').appendChild(projectElement);
});

// Get distinct list of technologies from each project
projects.forEach(project => {
    project.technologies.forEach(tech => {
        if(!technologies.includes(tech)) {
            technologies.push(tech);
        }
    });
    technologies.sort();
});



// Create function to display technologies in filter select
(function createTechnologiesFilter() {
    const filter = document.getElementById('filter');
    technologies.forEach(tech => {
        let li = document.createElement('li');
        li.classList.add('filter__item');
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.value = tech;
        input.id = tech;
        input.name = 'options';
        input.classList.add('filter__checkbox');
        li.appendChild(input);

        let label = document.createElement('label');
        label.for = tech;
        label.textContent = tech;
        label.classList.add('filter__label');
        li.appendChild(label);

        filter.appendChild(li);

    });
})();

document.querySelector('.dropdown-btn').addEventListener('click', function() {
    const dropdownList = document.querySelector('.dropdown-list');
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
  });
  
  // Close the dropdown when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.filter__item') && !event.target.matches('.filter__checkbox') && !event.target.matches('.filter__label')) {
      const dropdowns = document.querySelectorAll('.dropdown-list');
      dropdowns.forEach(function(dropdown) {
        dropdown.style.display = 'none';
      });
    }
  };

// Filter projects based on selected technologies
document.querySelector('#filter').addEventListener('change', function(e) {
    const selectedTechs = Array.from(document.querySelectorAll('.filter__checkbox:checked')).map(checkbox => checkbox.value);
    const projects = document.querySelectorAll('.grid__item');
    projects.forEach(project => {
        const projectTechs = Array.from(project.querySelectorAll('span')[0].textContent.split(',').map(tech => tech.trim()));
        if(selectedTechs.length === 0) {
            project.style.display = 'block';
        } else {
            if(selectedTechs.some(tech => projectTechs.includes(tech))) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        }
    });
});

    
(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#email');

    function showErrorMessage(input,message) {
        let container = input.parentElement; //the .input-wrapper
        //check and remove any existing errors
        let error = container.querySelector('.error-message');
        if(error) {
            container.removeChild(error);
        }
        //add error if message isn't empy
        if(message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;
        if(!value) {
            showErrorMessage(emailInput,'Email is a required field.');
            return false;
        }
        if(value.indexOf('@') === -1){
            showErrorMessage(emailInput,'You must enter a valid email address');
            return false;
        }
        if(value.indexOf('.') === -1) {
            showErrorMessage(emailInput,'You must enter a valid email address');
            return false;
        }
        showErrorMessage(emailInput,null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validateEmail();
        return isValidEmail;
    }

    if(form) {
        form.addEventListener('submit',(e) => {
            e.preventDefault(); //do not submit to server
            if(validateForm()) {
                alert('Success!');
            }
        })

        emailInput.addEventListener('input',validateEmail);
    }
    

    
})();