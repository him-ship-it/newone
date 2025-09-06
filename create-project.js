document.addEventListener('DOMContentLoaded', () => {
    const createProjectForm = document.getElementById('createProjectForm');
    const projectNameInput = document.getElementById('projectName');
    const cancelButton = document.querySelector('.cancel-btn');

    createProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const projectName = projectNameInput.value;
        const projectsJson = localStorage.getItem('synergyProjects');
        const projects = projectsJson ? JSON.parse(projectsJson) : [];

        const newProject = {
            name: projectName,
            tasks: 0,
            completed: 0,
            status: 'To-Do'
        };
        projects.push(newProject);
        localStorage.setItem('synergyProjects', JSON.stringify(projects));

        alert('Project ${projectName}created!');
        
        // This will trigger the 'storage' event in the parent window
         window.open('project-detail.html');
     
    });

    cancelButton.addEventListener('click', () => {
        window.close(); // Just close the window
    });
});