$(document).ready(function() {
    $('.side-show a').removeAttr('href');

    $('.side-show').on('click', function() {
        $('.side-show').toggleClass('show-hide');
        $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
    });
});


// ===============================main=================================

// ---------------------------------------------------------------------
function load() {
    // Xử lý sự kiện khi click nút tăng
    const incButton = document.querySelector(".inc");
    incButton.addEventListener("click", function (e) {
      e.preventDefault();
      const quantityInput = document.querySelector("input[name='quantity']");
      const currentValue = parseInt(quantityInput.value);
      quantityInput.value = currentValue + 1;
    });
  
    // Xử lý sự kiện khi click nút giảm
    const decButton = document.querySelector(".dec");
    decButton.addEventListener("click", function (e) {
      e.preventDefault();
      const quantityInput = document.querySelector("input[name='quantity']");
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    // Xử lý chuyển đổi giữa các tab
    const tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(tab => {
      tab.addEventListener('click', (event) => {
        event.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        event.currentTarget.classList.add('active');
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const tabContents = document.querySelectorAll('.tab-pane');
        tabContents.forEach(content => {
          content.classList.remove('show', 'active');
        });
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add('show', 'active');
      });
    });
  }
  
  window.onload = load;

  




