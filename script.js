const toggleBtn = document.querySelector(".toggle-btn")
const toggleBtnIcon = document.querySelector(".toggle-btn i")
const dropDownMenu = document.querySelector(".dropdown_menu")

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars"
}

const navClose = () =>{
  dropDownMenu.classList.remove('open')

  const isOpen = dropDownMenu.classList.contains('open')
  toggleBtnIcon.classList = isOpen ? "fas fa-xmark" : "fas fa-bars"
}

window.onscroll = function() {
  if (dropDownMenu.classList.contains('open')) {
    dropDownMenu.classList.remove('open');
    toggleBtnIcon.classList = "fas fa-bars";
  }
};

document.addEventListener('DOMContentLoaded', function() {
  const copyIcons = document.querySelectorAll('.fa-copy');

  copyIcons.forEach(icon => {
    icon.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default action of the click event

      const copyId = this.getAttribute('data-copy');
      const copyText = document.getElementById(copyId).innerText;

      // Copy text to clipboard
      navigator.clipboard.writeText(copyText)
        .then(() => {
          // Create and show a pop-up notification
          const notification = document.createElement('div');
          notification.textContent = 'Copied to clipboard';
          notification.style.fontSize = '4vw';
          notification.style.color = '#9cb6dd';
          notification.style.position = 'fixed';
          notification.style.top = '24.2%';
          notification.style.left = '50%';
          notification.style.textAlign = "center";
          notification.style.transform = 'translate(-50%, -200%)';
          notification.style.backgroundColor = 'rgba(65, 78, 110, 0.5)';
          notification.style.color = '#fff';
          notification.style.padding = '10px 20px';
          notification.style.borderRadius = '5px';
          notification.style.zIndex = '9999';
          document.body.appendChild(notification);

          // Remove the notification after 1 second
          setTimeout(() => {
            document.body.removeChild(notification);
          }, 1000);
        })
        .catch(err => {
          console.error('Error copying to clipboard:', err);
        });
    });
  });
});



