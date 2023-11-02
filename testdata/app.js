
document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the API
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(data => {
            const userTable = document.getElementById("userTable");

            // Iterate through the data and create table rows
            data.forEach(user => {
                const row = userTable.insertRow();
                const usernameCell = row.insertCell(0);
                const emailCell = row.insertCell(1);
                const passwordCell = row.insertCell(2);
                const roleCell = row.insertCell(3);

                usernameCell.innerHTML = user.username;
                emailCell.innerHTML = user.email;
                passwordCell.innerHTML = user.password;
                roleCell.innerHTML = user.role;
            });
        })
        .catch(error => {
            console.error("Error fetching data: " + error);
        });
});
