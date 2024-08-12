document.addEventListener('DOMContentLoaded', function() {
    fetch('ganttChart.json')
        .then(response => response.json())
        .then(data => {
            const tasks = transformDataToGanttTasks(data);
            gantt.init("gantt_here");
            gantt.parse({ data: tasks });
        });

    function transformDataToGanttTasks(data) {
        let taskId = 1;
        const tasks = [];

        function addTask(name, startDate, duration, parent = 0) {
            tasks.push({
                id: taskId++,
                text: name,
                start_date: startDate,
                duration: duration,
                parent: parent,
                progress: 0.4
            });
        }

        addTask("Design", "2024-06-01", 3);
        addTask("Wireframes", "2024-06-04", 2, 1);
        addTask("Validation", "2024-06-06", 1, 1);

        addTask("Frontend Development", "2024-06-10", 10);
        addTask("Home Page", "2024-06-10", 2, 4);
        addTask("Services Page", "2024-06-12", 1, 4);
        addTask("About and Contact Pages", "2024-06-13", 1, 4);

        addTask("Backend Development", "2024-06-20", 5);
        addTask("TVA API", "2024-06-20", 2, 8);
        addTask("CV API", "2024-06-22", 2, 8);

        addTask("Interactive Features", "2024-06-27", 2);
        addTask("Navigation and Forms", "2024-06-27", 1, 11);
        addTask("Charts", "2024-06-28", 1, 11);

        addTask("AI Integration", "2024-07-01", 3);
        addTask("Recommendations", "2024-07-01", 2, 14);
        addTask("Chatbot", "2024-07-03", 1, 14);

        addTask("Testing and Deployment", "2024-07-06", 3);
        addTask("Testing", "2024-07-06", 2, 17);
        addTask("Deployment", "2024-07-08", 1, 17);

        addTask("Maintenance and Updates", "2024-07-10", 5);

        return tasks;
    }
});
