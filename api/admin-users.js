document.addEventListener('DOMContentLoaded', async () => {
    try {
        const fetchUser = await fetch('/api/admin/view/users', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        });

        if (!fetchUser.ok) {
            alert("Error Fetching User")
            return;
        }


        const data = await fetchUser.json();

        const user = Array.isArray(data.allUsers) ? data.allUsers : [];
        if (!Array.isArray(user)) {
            throw new Error("Users is not an Array format!");
        }

        const tableBody = document.querySelector("#table tbody");
        tableBody.innerHTML = '';  // Clear existing rows

        user.forEach((user) => {
            const userRow = `
            <tr>
                <td>${user.firstName || "N/A"}</td>
                <td>${user.email || "N/A"}</td>
                <td>${user.number || "N/A"}</td>

                <td> <img src="../bin(1).png" class="icons" style="width:20px; height: 20px; cursor:pointer;" data-id="${user._id}"/></td>
            </tr>
            `;
            tableBody.innerHTML += userRow;  // Add each user row to the table
        });




    } catch (error) {
        console.log(`Error: Fetching users ${error}`);
        alert("Error: Something Went Wrong");
        return;
    };


    const table = document.querySelector('#table');
    table.addEventListener('click', async (event) => {
        if (event.target.tagName === "IMG" && event.target.getAttribute('src') === '../bin(1).png') {
            const id = event.target.dataset.id;
            console.log(`Id Delete ${id}`);
            if (id == "678215f5db04064a0ba61f15") {
                alert("Admin is not Delete")
                return;
            }
            if (confirm("Are You sure you want to Delete User ?")) {
                try {
                    const response = await fetch(`/api/admin/delete/user/${id}`, {
                        method: "DELETE",
                    });
                    if (!response.ok) {
                        throw new Error("Error: DELETE User !!");
                    }
                    const result = await response.json();
                    alert(result.message || "User Delete Succesfull");
                    location.reload()
                } catch (error) {
                    console.log(`Error: Delete User : ${error}`);
                }
            }
        }
    });
})