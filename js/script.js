// Compact Header Toggle

const headerWrapper = document.getElementById('header-wrapper');
const navToggleWrapper = document.getElementById('nav-toggle-wrapper');
const navToggle = document.getElementById('nav-toggle');

function ToggleCompactNav() {
    headerWrapper.classList.toggle('open');
    navToggle.classList.toggle('open');
}

navToggleWrapper.addEventListener('click', ToggleCompactNav);

if (document.body.style.width >= '700px') {
    headerWrapper.classList.remove('open');
}




// The email address you want to copy
const emailAddress = "hannah.hizer@gmail.com"; 

// Get the button and status message elements
const copyBtn = document.getElementById("copy-email-btn");
const statusMsg = document.getElementById("copy-status");

copyBtn.addEventListener("click", async () => {
  try {
    // Write the email to the clipboard
    await navigator.clipboard.writeText(emailAddress);
    
    // Show the "Copied!" message
    statusMsg.style.display = "inline";
    
    // Hide the message again after 2 seconds
    setTimeout(() => {
      statusMsg.style.display = "none";
    }, 2000);
    
  } catch (err) {
    // Handle errors (e.g., if the user denies clipboard permission)
    console.error("Failed to copy text: ", err);
    alert("Failed to copy email to clipboard.");
  }
});








function switchDoc(event, docId) {
  // 1. Hide all elements with the class "doc-content"
  const contents = document.querySelectorAll(".doc-content");
  contents.forEach(content => {
    content.style.display = "none";
  });

  // 2. Remove the "active" class from all tab buttons
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.classList.remove("active");
  });

  // 3. Show the specific document you clicked on
  document.getElementById(docId).style.display = "block";

  // 4. Add the "active" class to the button that was just clicked
  event.currentTarget.classList.add("active");
}