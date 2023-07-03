class Event {
    constructor(name, date, location, availableTickets) {
      this.name = name;
      this.date = date;
      this.location = location;
      this.availableTickets = availableTickets;
    }
  }
  
  // Sample event data
  const events = [
    new Event('JCole Live', '2023-09-18', 'Johannesburg, Sandton', 10),
    new Event('Masego Live', '2023-09-19', 'Johannesburg, Rosebank', 5),
    new Event('OOPS Night Live', '2023-09-20', 'Johannesburg, Sandton', 8),
    new Event('JCole & Masego Shutdown', '2023-09-21', 'Johannesburg, Rosebank', 3)
  ];
  
  // Get the event list container element
  const eventListContainer = document.getElementById('event-list');
  
  // Iterate through each event and create an event card element
  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
  
    // Create an element for the event name and set its text content
    const eventName = document.createElement('div');
    eventName.classList.add('event-name');
    eventName.textContent = event.name;
  
    // Create an element for the event date and set its text content
    const eventDate = document.createElement('div');
    eventDate.classList.add('event-date');
    eventDate.textContent = event.date;
  
    // Create an element for the event location and set its text content
    const eventLocation = document.createElement('div');
    eventLocation.classList.add('event-location');
    eventLocation.textContent = event.location;
  
    // Create a button to view tickets and attach an event listener
    const viewTicketsButton = document.createElement('button');
    viewTicketsButton.textContent = 'View Tickets';
    viewTicketsButton.addEventListener('click', () => {
      openTicketModal(event);
    });
  
    // Append the event name, event date, event location, and view tickets button to the event card // 
    eventCard.appendChild(eventName);
    eventCard.appendChild(eventDate);
    eventCard.appendChild(eventLocation);
    eventCard.appendChild(viewTicketsButton);
  
    // Append the event card to the event list container
    eventListContainer.appendChild(eventCard);
  });
  
  // Get the ticket modal element
  const ticketModal = document.getElementById('ticket-modal');
  
  // Get the confirmation modal element
  const confirmationModal = document.getElementById('confirmation-modal');
  
  // Get the close buttons for both modals
  const ticketModalClose = ticketModal.querySelector('.close');
  const confirmationModalClose = confirmationModal.querySelector('.close');
  
  // Get other necessary elements from the modals
  const eventModalName = document.getElementById('event-name');
  const eventModalDate = document.getElementById('event-date');
  const eventModalLocation = document.getElementById('event-location');
  const ticketQuantityInput = document.getElementById('ticket-quantity');
  const bookNowButton = document.getElementById('book-now');
  const confirmationEvent = document.getElementById('confirmation-event');
  const confirmationDate = document.getElementById('confirmation-date');
  const confirmationLocation = document.getElementById('confirmation-location');
  const confirmationTickets = document.getElementById('confirmation-tickets');
  const confirmationNumber = document.getElementById('confirmation-number');
  
  // Function to open the ticket modal
  function openTicketModal(event) {
    eventModalName.textContent = event.name;
    eventModalDate.textContent = event.date;
    eventModalLocation.textContent = event.location;
  
    // Add event listener to the "Book Now" button
    bookNowButton.addEventListener('click', () => {
      const selectedTickets = parseInt(ticketQuantityInput.value);
      if (isNaN(selectedTickets) || selectedTickets <= 0) {
        alert('Please enter a valid number of tickets.');
        return;
      }
  
      if (selectedTickets > event.availableTickets) {
        alert('Not enough tickets available.');
        return;
      }
  
      // Deduct the number of booked tickets from the available tickets
      event.availableTickets -= selectedTickets;
  
      // Generate a random confirmation number
      const confirmationNumberValue = generateConfirmationNumber();
  
      // Display the confirmation details in the confirmation modal
      confirmationEvent.textContent = event.name;
      confirmationDate.textContent = event.date;
      confirmationLocation.textContent = event.location;
      confirmationTickets.textContent = selectedTickets;
      confirmationNumber.textContent = confirmationNumberValue;
  
      // Show the confirmation modal
      confirmationModal.style.display = 'block';
  
      // Reset the ticket modal input
      ticketQuantityInput.value = 1;
  
      // Close the ticket modal
      ticketModal.style.display = 'none';
    });
  
    // Show the ticket modal
    ticketModal.style.display = 'block';
  }
  
  // Function to generate a random confirmation number
  function generateConfirmationNumber() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let confirmationNumber = '';
  
    for (let i = 0; i < 8; i++) {
      confirmationNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    return confirmationNumber;
  }
  
  // Event listener for closing the ticket modal
  ticketModalClose.addEventListener('click', () => {
    ticketModal.style.display = 'none';
  });
  
  // Event listener for closing the confirmation modal
  confirmationModalClose.addEventListener('click', () => {
    confirmationModal.style.display = 'none';
  });
  