document.addEventListener("DOMContentLoaded", function () {
    // Fetch data from the API
    fetch("http://localhost:3000/projects")
        .then(response => response.json())
        .then(data => {
            const listMyExistingProj = document.querySelector(".listMyExistingProj");

            if (data.length > 0) {
                // Create a table element
                const table = document.createElement("table");

                // Create table header
                const tableHeader = table.createTHead();
                const headerRow = tableHeader.insertRow();
                const headerLabels = ["Project ID", "Project Name", "Quantity", "Start Date", "End Date", "Address", "Ability List", "Status"];

                headerLabels.forEach(label => {
                    const headerCell = document.createElement("th");
                    headerCell.textContent = label;
                    headerRow.appendChild(headerCell);
                });

                // Create table body
                const tableBody = table.createTBody();

                // Iterate through the data and create table rows
                data.forEach(project => {
                    const row = tableBody.insertRow();
                    row.innerHTML = `
                        <td>${project.ID}</td>
                        <td>${project.ProjectName}</td>
                        <td>${project.Quantity}</td>
                        <td>${project.StartDate}</td>
                        <td>${project.EndDate}</td>
                        <td>${project.Address}</td>
                        <td>${project.AbilityList}</td>
                        <td class="${getStatusClass(project.Status)}">${project.Status}</td>
                    `;
                });

                // Append the table to the existing HTML element
                listMyExistingProj.appendChild(table);
            } else {
                // Handle the case when there are no projects to display
                listMyExistingProj.textContent = "No projects found.";
            }
        })
        .catch(error => {
            console.error("Error fetching data: " + error);
        });

    // Function to get the CSS class for each status
    function getStatusClass(status) {
        switch (status) {
            case "approved":
                return "status-accepted";
            case "waiting":
                return "status-waiting";
            case "rejected":
                return "status-rejected";
            default:
                return "";
        }
    }
});
