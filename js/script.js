$(document).ready(function () {
    $('.side-show a').removeAttr('href');

    $('.side-show').on('click', function () {
        $('.side-show').toggleClass('show-hide');
        $('.category-menu ul > li:gt(4)').toggleClass('side-hide');
    });
});


//================main===================
//---------------slide--------------------
function load() {
    var content = document.getElementById("content");
    var slides = document.querySelectorAll(".slide");
    var header = document.querySelector(".header_bg");
    var body = document.querySelector(".body_bg");
    var footer = document.querySelector(".footer_bg");
    var dots = document.querySelectorAll(".icon_footer i");
    var currentSlide = 0;
    var currentIndex = 0;

    //hiển thị slide thứ n
    function showSlide(n) {
        slides.forEach((slide) => {
            slide.style.display = "none"; // Ẩn tất cả các slide
        });
        dots.forEach((dot) => {
            dot.classList.remove("active"); //Loại bỏ lớp "active" của các biểu tượng vòng tròn
        });
        slides[n].style.display = "block"; // Hiển thị slide hiện tại
        dots[n].classList.add("active"); //Cập nhật lớp "active" cho biểu tượng vòng tròn tương ứng

        // Lấy ảnh hiện tại từ slide và đặt làm nền cho header, body và footer
        var currentSlideBackground = getComputedStyle(slides[n]).backgroundImage;
        header.style.backgroundImage = currentSlideBackground;
        body.style.backgroundImage = currentSlideBackground;
        footer.style.backgroundImage = currentSlideBackground;
    }

    // Chuyển đến slide tiếp theo
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Chuyển đến slide trước đó
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Thêm sự kiện click cho các biểu tượng vòng tròn
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            showSlide(index);
        });
    });

    // Thêm sự kiện click cho nút Previous và Next
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);

    // Tự động chuyển đổi sau 5 giây
    function autoSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(autoSlide, 5000);

} window.onload = load;


// Tạo danh sách sản phẩm tương ứng với mỗi tab -->
// --------------Fruites---------------

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".nav-link");
    const productLists = document.querySelectorAll(".our-product-four");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Ẩn tất cả các danh sách sản phẩm
            productLists.forEach((productList) => {
                productList.style.display = "none";
            });

            // Kiểm tra class của tab hiện tại
            if (tab.dataset.tab === "fruits") {
                // Hiển thị danh sách "Fruits"
                productLists[index].style.display = "block";
            } else if (tab.dataset.tab === "milk") {
                // Hiển thị danh sách "Milk"
                productLists[index].style.display = "block";
            }
        });
    });

    // Hiển thị danh sách "Fruits" mặc định khi trang được tải
    const defaultTab = document.querySelectorAll(".tab-fruits");
    if (defaultTab) {
        const defaultTabIndex = Array.from(tabs).indexOf(defaultTab);
        productLists[defaultTabIndex].style.display = "block";
    }
});


