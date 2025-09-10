document.addEventListener("DOMContentLoaded", function () {
    const storedUsers = JSON.parse(localStorage.getItem('listOfUsers')) || [];

    renderUserList(storedUsers);

    document.getElementById("btn-submit").addEventListener("click", function (e) {
        e.preventDefault();

        const newUsername = document.getElementById("username").value.trim();

        // Regex to validate username (letters, numbers, and underscores only)
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

        if (!newUsername) {
            alert("Username cannot be empty");
            return;
        }

        if (!usernameRegex.test(newUsername)) {
            alert("Invalid Username: Username must be between 3-15 characters and can contain letters, numbers, and underscores only.");
            return;
        }

        addUser(newUsername);

        document.getElementById("username").value = "";
    });
});

function addUser(newUsername) {
    const storedUsers = JSON.parse(localStorage.getItem('listOfUsers')) || [];

    storedUsers.push(newUsername);
    localStorage.setItem('listOfUsers', JSON.stringify(storedUsers));

    renderUserList(storedUsers);
}

function editUser(index) {
    const storedUsers = JSON.parse(localStorage.getItem('listOfUsers')) || [];
    const newUsername = prompt("Edit username:", storedUsers[index]);

    if (newUsername && /^[a-zA-Z0-9_]{3,15}$/.test(newUsername)) {
        storedUsers[index] = newUsername;
        localStorage.setItem('listOfUsers', JSON.stringify(storedUsers));

        renderUserList(storedUsers);
    } else {
        alert("Invalid username or canceled.");
    }
}

function deleteUser(index) {
    const storedUsers = JSON.parse(localStorage.getItem('listOfUsers')) || [];
    storedUsers.splice(index, 1);
    localStorage.setItem('listOfUsers', JSON.stringify(storedUsers));

    renderUserList(storedUsers);
}

function renderUserList(storedUsers) {
    const tbody = document.getElementById("user-list");
    tbody.innerHTML = "";

    if (storedUsers.length === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td colspan="3" style="text-align: center;">No records available</td>
        `;
        tbody.appendChild(tr);
    } else {
        storedUsers.forEach((username, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>
                    <button class="edit-btn" onclick="editUser(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}
