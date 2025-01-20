const data = [
    {
        id: 1,
        name: "John",
        tasks: [
            { taskId: 101, description: "Complete report", status: "Pending" },
            { taskId: 102, description: "Review code", status: "Completed" },
        ],
    },
    {
        id: 2,
        name: "Jane",
        tasks: [
            { taskId: 103, description: "Prepare slides", status: "In Progress" },
            { taskId: 104, description: "Team meeting", status: "Pending" },
        ],
    },
];

const tableBody = document.querySelector("#taskTable tbody");

data.forEach(person => {
    person.tasks.forEach(task => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = person.name;
        row.appendChild(nameCell);

        const descCell = document.createElement("td");
        descCell.textContent = task.description;
        row.appendChild(descCell);

        const statusCell = document.createElement("td");
        statusCell.textContent = task.status;
        row.appendChild(statusCell);

        tableBody.appendChild(row);
    });
});
