alert("JavaScript Connected Successfully!");

const events = [
    {
        name: "Tech Conference",
        date: "2026-07-15",
        description: "Latest technology trends."
    },
    {
        name: "Sports Gala",
        date: "2026-03-20",
        description: "Annual sports event."
    }
];

const eventList = document.getElementById("eventList");

events.forEach(event => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h3>${event.name}</h3>
        <p><b>Date:</b> ${event.date}</p>
        <p>${event.description}</p>
    `;

    eventList.appendChild(card);

});
