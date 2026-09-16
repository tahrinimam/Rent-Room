function searchRooms() {

    const location = document
        .getElementById("locationSearch")
        .value
        .trim();

    const type = document
        .getElementById("roomType")
        .value;

    if (location === "" && type === "") {
        alert("Please enter a location or select a room type.");
        return;
    }

    localStorage.setItem("searchLocation", location);
    localStorage.setItem("searchType", type);

    window.location.href = "rooms.html";
}
