const cars = [
    { name: "Toyota Corolla", price: 50, image: "./Images/IMAGE6.avif" },
    { name: "Honda Civic", price: 60, image: "./Images/IMAGE2.avif" },
    { name: "Ford Mustang", price: 70, image: "./Images/IMAGE3.jpeg" },
    { name: "Chevrolet Malibu", price: 55, image: "./Images/IMAGE4.avif" },
    { name: "Tesla Model 3", price: 90, image: "./Images/IMAGE5.avif" },
    { name: "BMW X5", price: 100, image: "./Images/IMAGE1.jpeg" },
  ];
  
  // Populate home page
  const carList = document.getElementById("car-list");
  function displayCars() {
    carList.innerHTML = "";
    cars.forEach((car, index) => {
      const carCard = document.createElement("div");
      carCard.className = "car-card";
      carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
        <p>Price: $${car.price}/day</p>
        <button onclick="selectCar(${index})">Book Now</button>
      `;
      carList.appendChild(carCard);
    });
  }
  displayCars();
  
  // Handle "Book Now" button
  function selectCar(index) {
    const selectedCar = cars[index];
    localStorage.setItem("selectedCar", JSON.stringify(selectedCar));
    document.getElementById("selected-car").innerText = `Selected Car: ${selectedCar.name} - $${selectedCar.price}/day`;
    showSection("booking");
  }
  
  // Booking page functionality
  document.getElementById("booking-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const car = JSON.parse(localStorage.getItem("selectedCar"));
    const startDate = new Date(document.getElementById("start-date").value);
    const endDate = new Date(document.getElementById("end-date").value);
    const today = new Date();
  
    if (startDate < today) {
      alert("Start date cannot be in the past.");
      return;
    }
  
    if (endDate <= startDate) {
      alert("End date must be after the start date.");
      return;
    }
  
    const rentalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const totalCost = rentalDays * car.price;
  
    document.getElementById("confirmation").innerHTML = `
      <h3>Booking Confirmation</h3>
      <p>Car: ${car.name}</p>
      <p>Rental Days: ${rentalDays}</p>
      <p>Total Cost: $${totalCost}</p>
    `;
    document.getElementById("confirmation").style.display = "block";
  });
  
  // Admin Panel
  document.getElementById("add-car-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("car-name").value;
    const price = document.getElementById("car-price").value;
    const image = URL.createObjectURL(document.getElementById("car-image").files[0]);
  
    cars.push({ name, price: parseFloat(price), image });
    displayCars();
    alert("Car added successfully!");
  });
  
  // Navigation
  function showSection(section) {
    document.querySelectorAll("section").forEach((s) => (s.style.display = "none"));
    document.getElementById(section).style.display = "block";
 }
//   cars.forEach((car) => {
//     const carCard = document.createElement("div");
//     carCard.className = "car-card";
  
//     carCard.innerHTML = `
//       <img src="${car.image}" alt="${car.name}" class="car-image">
//       <h3>${car.name}</h3>
//       <p>Price per day: $${car.price}</p>
//       <button class="book-now">Book Now</button>
//     `;
  
//     carList.appendChild(carCard);
//   });
  