document.addEventListener('DOMContentLoaded', () => {
    const projectListDiv = document.getElementById('project-list');
    const newProjectBtn = document.getElementById('newProjectBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Function to get projects from localStorage, or use a default list
    function getProjects() {
        const projectsJson = localStorage.getItem('synergyProjects');
        if (projectsJson) {
            return JSON.parse(projectsJson);
        }
        // Default projects if none are in storage
        //return [
           // { name: 'SynergySphere MVP', tasks: 15, completed: 8, status: 'In Progress' },
            //{ name: 'Website Redesign', tasks: 22, completed: 10, status: 'In Progress' },
            //{ name: 'Marketing Campaign 2025', tasks: 5, completed: 5, status: 'Completed' }
       // ];
    }

    // Function to save projects to localStorage
    function saveProjects(projects) {
        localStorage.setItem('synergyProjects', JSON.stringify(projects));
    }

    // Function to render projects on the page
    function renderProjects() {
        const projects = getProjects();
        projectListDiv.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>Tasks: ${project.tasks}</p>
                <p>Status: <strong>${project.status}</strong></p>
            `;
            projectCard.addEventListener('click', () => {
                // Future: open project detail page
              projectCard.addEventListener('click', () => {
               window.location.href =' project-detail.html?name= '+$encodeURIComponent(project.name);
              });
                //alert('Opening project: ${project.nam}');
            });
            projectListDiv.appendChild(projectCard);
        });

    
    }

    // New Project button functionality to open a new window
    newProjectBtn.addEventListener('click', () => {
        window.open('create-project.html', '_blank', 'width=500,height=350');
    });

    // Listen for storage changes from other windows/tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'synergyProjects') {
            renderProjects();
        }
    });

    // Logout button functionality
    logoutBtn.addEventListener('click', () => {
        alert("Logged out successfully!");
        window.location.href = 'index.html';
    });

    // Initial render
    renderProjects();document.addEventListener('DOMContentLoaded', () => {
    const projectListDiv = document.getElementById('project-list');
    const newProjectBtn = document.getElementById('newProjectBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Function to get projects from localStorage, or use a default list
    function getProjects() {
        const projectsJson = localStorage.getItem('synergyProjects');
        if (projectsJson) {
            return JSON.parse(projectsJson);
        }
        // Default projects if none are in storage
        //return [
           // { name: 'SynergySphere MVP', tasks: 15, completed: 8, status: 'In Progress' },
            //{ name: 'Website Redesign', tasks: 22, completed: 10, status: 'In Progress' },
            //{ name: 'Marketing Campaign 2025', tasks: 5, completed: 5, status: 'Completed' }
       // ];
    }

    // Function to save projects to localStorage
    function saveProjects(projects) {
        localStorage.setItem('synergyProjects', JSON.stringify(projects));
    }

    // Function to render projects on the page
    function renderProjects() {
        const projects = getProjects();
        projectListDiv.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>Tasks: ${project.tasks}</p>
                <p>Status: <strong>${project.status}</strong></p>
            `;
            projectCard.addEventListener('click', () => {
                // Future: open project detail page
              projectCard.addEventListener('click', () => {
               window.location.href =`project-detail.html?name= ${encodeURIComponent}(project.name)`;
              });
                //alert('Opening project: ${project.nam}');
            });
            projectListDiv.appendChild(projectCard);
        });

    
    }

    // New Project button functionality to open a new window
    newProjectBtn.addEventListener('click', () => {
        window.open('create-project.html', '_blank', 'width=500,height=350');
    });

    // Listen for storage changes from other windows/tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'synergyProjects') {
            renderProjects();
        }
    });

    // Logout button functionality
    logoutBtn.addEventListener('click', () => {
        alert("Logged out successfully!");
        window.location.href = 'index.html';
    });

    // Initial render
    renderProjects();document.addEventListener('DOMContentLoaded', () => {
    const projectListDiv = document.getElementById('project-list');
    const newProjectBtn = document.getElementById('newProjectBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Function to get projects from localStorage, or use a default list
    function getProjects() {
        const projectsJson = localStorage.getItem('synergyProjects');
        if (projectsJson) {
            return JSON.parse(projectsJson);
        }
        // Default projects if none are in storage
        const defaultProjects = [
            { name: 'SynergySphere MVP', tasks: 15, completed: 8, status: 'In Progress' },
            { name: 'Website Redesign', tasks: 22, completed: 10, status: 'In Progress' },
            { name: 'Marketing Campaign 2025', tasks: 5, completed: 5, status: 'Completed' }
        ];
        localStorage.setItem('synergyProjects', JSON.stringify(defaultProjects));
        return defaultProjects;
    }

    // Function to save projects to localStorage
    function saveProjects(projects) {
        localStorage.setItem('synergyProjects', JSON.stringify(projects));
    }

    // Function to render projects on the page
    function renderProjects() {
        const projects = getProjects();
        projectListDiv.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>Tasks: ${project.tasks}</p>
                <p>Status: <strong>${project.status}</strong></p>
            `;
            
            projectCard.addEventListener('click', () => {
                window.location.href = 'project-detail.html?name'+$encodeURIComponent(project.name);
            });
            projectListDiv.appendChild(projectCard);
        });
    }

    // Listen for storage changes from other windows/tabs
    window.addEventListener('storage', (e) => {
        if (e.key === 'synergyProjects') {
            renderProjects();
        }
    });

    // New Project button functionality
    newProjectBtn.addEventListener('click', () => {
        window.open('create-project.html', '_blank', 'width=500,height=350');
    });

    // Logout button functionality
    logoutBtn.addEventListener('click', () => {
        alert("Logged out successfully!");
        window.location.href = 'index.html';
    });

    // Initial render
    renderProjects();
});
});
});