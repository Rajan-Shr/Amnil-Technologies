let isEditMode = false;
let editIndex = null;

document.addEventListener("DOMContentLoaded", function () {
    storedUsers = getStoredUsers();
    renderUserList(storedUsers);

    document.getElementById("btn-submit").addEventListener("click", function (e) {
        e.preventDefault();

        const usernameInput = document.getElementById("username");
        const newUsername = usernameInput.value.trim();
        const errorDisplay = document.getElementById("error-display");
        const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

        if (!newUsername) {
            errorDisplay.textContent = "Username cannot be empty.";
            return;
        }

        if (!usernameRegex.test(newUsername)) {
            errorDisplay.textContent = "Invalid Username: Username must be between 3–15 characters and can contain letters, numbers, and underscores only.";
            return;
        }

        const users = getStoredUsers();

        if (isEditMode) {
            users[editIndex] = newUsername;
            document.getElementById("popup").style.display = "inline";
            document.getElementById("popup-message").textContent = "Username updated successfully.";
            document.getElementById("popup").style.backgroundColor = "#27ae60";
            setTimeout(() => {
                document.getElementById("popup").style.display = "none";
            }, 3000);
            isEditMode = false;
            editIndex = null;
            document.getElementById("btn-submit").textContent = "Add to List";
        } else {
            users.push(newUsername);
            document.getElementById("popup").style.display = "inline";
            document.getElementById("popup-message").textContent = "Username added successfully.";
            document.getElementById("popup").style.backgroundColor = "#27ae60";
            setTimeout(() => {
                document.getElementById("popup").style.display = "none";
            }, 3000);
        }

        localStorage.setItem('listOfUsers', JSON.stringify(users));
        usernameInput.value = "";
        errorDisplay.textContent = "";

        renderUserList(users);
    });
});

function editUser(index) {
    const users = getStoredUsers();
    const usernameInput = document.getElementById("username");

    usernameInput.value = users[index];
    usernameInput.focus();

    isEditMode = true;
    editIndex = index;

    document.getElementById("btn-submit").textContent = "Update User";
    document.getElementById("error-display").textContent = "";
}

function deleteUser(index) {
    const users = getStoredUsers();
    users.splice(index, 1);
    document.getElementById("popup").style.display = "inline";
    document.getElementById("popup-message").textContent = "Username deleted successfully.";
    document.getElementById("popup").style.backgroundColor = "#c0392b";
    setTimeout(() => {
        document.getElementById("popup").style.display = "none";
    }, 3000);

    localStorage.setItem('listOfUsers', JSON.stringify(users));

    renderUserList(users);
}

function renderUserList(users) {
    const tbody = document.getElementById("user-list");
    tbody.innerHTML = "";

    if (users.length === 0) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td colspan="3" style="text-align: center;">No records available</td>`;
        tbody.appendChild(tr);
    } else {
        users.forEach((username, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
                        <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
                    </div>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function getStoredUsers() {
    return JSON.parse(localStorage.getItem('listOfUsers')) || [];
}
