let events = [];
let currentFilter = "all";

const eventForm = document.getElementById("event-form");
const eventList = document.getElementById("event-list");
const filterSelect = document.getElementById("filter");

eventForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("event-title").value;
  const date = document.getElementById("event-date").value;

  if (!title || !date) {
    alert("Please provide both title and date!");
    return;
  }

  const status = calculateStatus(date);
  events.push({ title, date, status });
  renderEvents();
  eventForm.reset();
});

function calculateStatus(date) {
  const today = new Date();
  const eventDate = new Date(date);
  return eventDate >= today ? "Upcoming" : "Past";
}

function renderEvents() {
  eventList.innerHTML = "";
  const filteredEvents = events.filter((event) =>
    currentFilter === "all" ? true : event.status.toLowerCase() === currentFilter
  );

  filteredEvents.forEach((event, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${event.title}</td>
      <td>${event.date}</td>
      <td>${event.status}</td>
      <td class="actions">
        <button class="edit-btn" onclick="editEvent(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteEvent(${index})">Delete</button>
      </td>
    `;

    eventList.appendChild(row);
  });
}


function editEvent(index) {
  const event = events[index];
  document.getElementById("event-title").value = event.title;
  document.getElementById("event-date").value = event.date;
  events.splice(index, 1);
  renderEvents();
}

function deleteEvent(index) {
  events.splice(index, 1);
  renderEvents();
}


function filterEvents() {
  currentFilter = filterSelect.value;
  renderEvents();
}
