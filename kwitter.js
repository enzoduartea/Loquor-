
function addUser()
{
    name_of_user = document.getElementById("name_of_user").value;

    localStorage.setItem("name_of_user", name_of_user);

    window.location = "kwitter_room.html";
}
