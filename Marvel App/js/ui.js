class UI {
  constructor() {
    this.alertBox = document.getElementById('alertBox');
  }

    generateAlert(classname, message) {
    // Create Alert
    const alert = document.createElement('div');
    // Add class
    alert.className = `alert ${classname} animated fadeInRight`;
    // Append text to alert
    alert.appendChild(document.createTextNode(message));
    // Create x button
    const xButton = document.createElement('button');
    // Add class to xButton
    xButton.className = 'deleteBtn';
    // Add "x" into the button
    xButton.innerHTML = '&times;';
    // Append xButton to alert
    alert.appendChild(xButton);
    // Append alert to alert-box
    this.alertBox.appendChild(alert);
    // Set time duration for alert to 7s
    setTimeout(() => {
      alert.classList.add("fadeaway");
      setTimeout(() => {alert.remove();}, 300);
    }, 3500);
  }
}
