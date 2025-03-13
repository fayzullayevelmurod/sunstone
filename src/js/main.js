const togglePassword = document.querySelectorAll('.toggle-password');
if (togglePassword) {
  togglePassword.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const input = document.getElementById(targetId);

      if (input.type === 'password') {
        input.type = 'text';
        // Ikonani o'zgartirish mumkin (masalan, yashirish uchun boshqa SVG)
      } else {
        input.type = 'password';
        // Ikonani qayta tiklash mumkin
      }
    });
  });
}
// Mobile menu toggle
const menuButton = document.getElementById('menuButton');
if (menuButton) {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('overlay');
  const closeMenuButton = document.getElementById('closeMenuButton');
  menuButton.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('active');
  });
  closeMenuButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  })

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  });

  // Profile dropdown toggle
  const profileButton = document.getElementById('profileButton');
  const profileDropdown = document.getElementById('profileDropdown');

  profileButton.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('hidden');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    profileDropdown.classList.add('hidden');
  });

  // Tab functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      tabButtons.forEach(btn => {
        btn.classList.remove('text-[#6c5ce7]', 'border-b-2', 'border-[#6c5ce7]');
        btn.classList.add('text-gray-600');
      });

      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Add active class to clicked button and corresponding content
      button.classList.add('text-[#6c5ce7]', 'border-b-2', 'border-[#6c5ce7]');
      button.classList.remove('text-gray-600');

      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
}

const dropdownButton = document.getElementById('coinDropdown');
const dropdownMenu = document.getElementById('dropdownMenu');
const selectedCoin = document.getElementById('selectedCoin');
const dropdownIcon = document.getElementById('dropdownIcon');
const dropdownItems = document.querySelectorAll('.dropdown-item');

if (dropdownMenu && dropdownButton) {
  // Toggle dropdown
  dropdownButton.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
    dropdownIcon.classList.toggle('rotate-180');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    dropdownMenu.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
  });

  // Prevent dropdown from closing when clicking inside it
  dropdownMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Selecting item
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      selectedCoin.textContent = e.target.dataset.value;
      dropdownMenu.classList.add('hidden');
      dropdownIcon.classList.remove('rotate-180');
    });
  });
}
