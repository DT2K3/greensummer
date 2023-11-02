document.addEventListener("DOMContentLoaded", function () {
    const queryParams = new URLSearchParams(window.location.search);
    const projectID = queryParams.get("projectID");
    // Check if projectID exists in the query parameter
    if (projectID) {
        // Fetch project details based on projectID
        fetch(`http://localhost:3000/cl/projects/${projectID}`) // Use the dynamic projectID
            .then(response => response.json())
            .then(project => {
                console.log(project);
                // Update the content of the form or display the project details
                document.getElementById("projectID").textContent = project.IDProject;
                document.getElementById("projectName").textContent = project.Project_Name;
                document.getElementById("projectImage").src = project.Photo; // Use "Photo" property
                document.getElementById("projectDescription").textContent = project.Description;
                document.getElementById("projectQuantity").textContent = project.Quantity;
                document.getElementById("projectStartDate").textContent = project.BeginDate; // Use "BeginDate" property
                document.getElementById("projectEndDate").textContent = project.EndDate;
                document.getElementById("projectAddress").textContent = project.Address;
                document.getElementById("projectAbilities").textContent = project.AbilityList; // Use "AbilityList" property
                document.getElementById("projectStatus").textContent = project.Status;
            })
            .catch(error => {
                console.error("Error fetching project data: " + error);
            });
    } else {
        // Handle the case where projectID is not provided
        console.error("No project ID provided.");
    }
});
