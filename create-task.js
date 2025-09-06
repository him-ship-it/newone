document.addEventListener('DOMContentLoaded', () => {
    const createTaskForm = document.getElementById('createTaskForm');
    const cancelButton = document.querySelector('.cancel-btn');

    // Get the project name from the URL of the parent window
    const urlParams = new URLSearchParams(window.opener.location.search);
    const projectName = urlParams.get('name');

    //if (!projectName) {
        //alert("Error: No project selected.");
        //window.close();
        //return;
   // }

    createTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskTitle = document.getElementById('taskTitle').value;
        const taskDesc = document.getElementById('taskDesc').value;
        const taskAssignee = document.getElementById('taskAssignee').value;
        const taskDueDate = document.getElementById('taskDueDate').value;

        const newTask = {
            title: taskTitle,
            description: taskDesc,
            assignee: taskAssignee || 'Unassigned',
            dueDate: taskDueDate || 'N/A',
            status: 'To-Do'
        };

        // Get all projects from localStorage
        const projectsJson = localStorage.getItem('synergyProjects');
        const projects = projectsJson ? JSON.parse(projectsJson) : [];

        // Find the specific project and add the new task
        const projectIndex = projects.findIndex(p => p.name === projectName);
        if (projectIndex !== -1) {
            if (!projects[projectIndex].tasks) {
                projects[projectIndex].tasks = [];
            }
            projects[projectIndex].tasks.push(newTask);
            localStorage.setItem('synergyProjects', JSON.stringify(projects));
            
            alert(`newTask +${newTasktitle}addedsuccessfully!`);
            
            // This will trigger a reload on the project detail page
            setTimeout(() => {
                window.opener.location.reload();
                window.close();
            }, 100);
        } else {
            alert("task create");
            window.close();
        }
    });

    cancelButton.addEventListener('click', () => {
        window.close();
    });
});