const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevents page reload

  // Collect form values using FormData
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // Print the captured form data to the browser console
  console.log("Form Submitted Successfully:", data);

  alert(`Registration submitted for: ${data.fullName} (${data.email})`);
});