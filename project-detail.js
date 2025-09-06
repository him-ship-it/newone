document.addEventListener('DOMContentLoaded', () => {
    const projectNameHeader = document.getElementById('projectNameHeader');
    const taskListDiv = document.getElementById('taskList');
    const newTaskBtn = document.getElementById('newTaskBtn');
    
    // Get the project name from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectName = urlParams.get('name');

    // Function to get all projects from localStorage
    function getProjects() {
        const projectsJson = localStorage.getItem('synergyProjects');
        return projectsJson ? JSON.parse(projectsJson) : [];
    }
    
    // Function to find the specific project and its tasks
    function getProjectTasks(name) {
        const projects = getProjects();
        const project = projects.find(p => p.name === name);
        if (project) {
            return project.tasks;
        }
        return null;
    }

    // Function to render tasks for the selected project
    function renderTasks() {
        if (projectName) {
            projectNameHeader.textContent = projectName;
            const tasks = getProjectTasks(projectName);

            if (tasks) {
                taskListDiv.innerHTML = '';
                if (tasks.length === 0) {
                    taskListDiv.innerHTML = '<p>No tasks found for this project. Add a new one!</p>';
                } else {
                    tasks.forEach(task => {
                        const taskCard = document.createElement('div');
                        taskCard.className = 'task-card';
                        
                        let statusClass = '';
                        if (task.status === 'To-Do') statusClass = 'status-todo';
                        else if (task.status === 'In Progress') statusClass = 'status-inprogress';
                        else if (task.status === 'Done') statusClass = 'status-done';
                        
                        taskCard.innerHTML = `
                            <div class="task-info">
                                <h3>${task.title}</h3>
                                <p>Assigned to: ${task.assignee} | Due: ${task.dueDate}</p>
                            </div>
                            <span class="task-status ${statusClass}">${task.status}</span>
                        `;
                        taskListDiv.appendChild(taskCard);
                    });
                }
            } else {
                projectNameHeader.textContent = 'Project Not Found';
                taskListDiv.innerHTML = '<p>The selected project could not be found.</p>';
            }
        } else {
            projectNameHeader.textContent = 'Project Details';
            taskListDiv.innerHTML = '<p>Please select a project from the dashboard.</p>';
        }
    }

    // New task button functionality (Will be updated later to handle data saving)
    newTaskBtn.addEventListener('click', () => {
        window.open('create-task.html');
       // alert("This feature is coming soon! You can add a task here.");
    });

    // Initial render
    renderTasks();
});