function generateTicketId() {
  const now = new Date();

  // Format date as DDMMYYYY
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();

  const datePart = `${day}${month}${year}`; // e.g., "17052025"

  // Generate a random alphanumeric suffix (10 chars)
  const randomSuffix = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 16).toString(16)
  ).join("");

  return `T${datePart}${randomSuffix}`;
}

function getFormattedBookingTime() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[now.getMonth()];
  const year = String(now.getFullYear()).slice(-2); // → "25"

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 to 12
  const paddedHours = String(hours).padStart(2, "0"); // → "08", "01", etc.

  const timePart = `${paddedHours}:${minutes} ${ampm}`;

  return `${day} ${month}, ${year} | ${timePart}`;
}
