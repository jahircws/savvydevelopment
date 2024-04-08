// window.$ = window.jQuery = require('jquery');
// sticky header
// $(window).on('scroll', function () {
//     if ($(this).scrollTop() > 1) {
//         $("header").addClass("sticky_header");
//     } else {
//         $("header").removeClass("sticky_header");
//     }
// });

// function toggleList() {
//     var menuContent = document.getElementById("user-menu-content");
//     menuContent.classList.toggle("show");
// }

// Close the menu when clicking outside of it
// document.addEventListener("click", function (event) {
//     var menu = document.querySelector(".user-menu");
//     var menuContent = document.getElementById("user-menu-content");
//     if (!menu.contains(event.target)) {
//         menuContent.classList.remove("show");
//     }
// });

// $(document).ready(function () {
//     // jQuery code for hide/show functionality
//     $("#toggleButton").click(function (e) {
//         e.stopPropagation(); // Prevents the click event from propagating to the document body
//         $(".content").toggle(); // Toggle visibility of content
//         // var buttonText = $(this).text();
//         // $(this).text(buttonText == "Show Content" ? "Hide Content" :
//         //     "Show Content"); // Change button text
//     });

//     // Close content when clicking outside
//     $(document).click(function (e) {
//         if (!$(e.target).closest('.content').length && !$(e.target).is('#toggleButton')) {
//             $(".content").hide(); // Hide content
//         }
//     });
// });

// const MegaMenuList = document.querySelector("#Company-MegaMenu");
// const MMListItem = MegaMenuList.querySelectorAll("li");
// const MmTabsContent = document.querySelectorAll(".megamenu-tabcontent");

// MMListItem.forEach((listItem, i) => {
//     listItem.addEventListener("mouseover", function () {
//         var divID = listItem.getAttribute('data-href').toString();
//         for (let el of MmTabsContent) el.style.display = 'none';
//         for (let el of MMListItem) el.classList.remove("active");
//         document.getElementById(divID).style.display = "block";
//         listItem.classList.add("active");
//     })
// });
// // Function to remove 'active' class from all .megamenu-tabs list items
// function removeActiveClassFromTabs() {
//     $(".megamenu-tabs li").removeClass("active");
// }

// // Function to hide all elements with class .megamenu-tabcontent
// function hideTabContents() {
//     $(".megamenu-tabcontent").css("display", "none");
// }

// // Observe changes to the display property of .content
// const contentObserver = new MutationObserver(function (mutationsList, observer) {
//     for (let mutation of mutationsList) {
//         if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
//             if ($(mutation.target).css('display') === 'none') {
//                 // If .content is display none, remove 'active' class from all .megamenu-tabs list items
//                 removeActiveClassFromTabs();
//                 // Hide all elements with class .megamenu-tabcontent
//                 hideTabContents();
//             }
//         }
//     }
// });

// // Start observing .content for changes in style attribute
// contentObserver.observe($('.content')[0], {
//     attributes: true
// });

// const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// dropdownToggles.forEach(function (dropdownToggle) {
//     dropdownToggle.addEventListener('click', function (event) {
//         const dropdownMenu = this.nextElementSibling;
//         if (dropdownMenu.classList.contains('show')) {
//             dropdownMenu.classList.remove('show');
//         } else {
//             // Hide other dropdowns
//             const openDropdowns = document.querySelectorAll('.dropdown-menu.show');
//             openDropdowns.forEach(function (openDropdown) {
//                 openDropdown.classList.remove('show');
//             });
//             dropdownMenu.classList.add('show');
//         }
//         event.stopPropagation(); // Prevent default anchor event
//     });
// });

// // Close dropdowns when clicking outside
// document.addEventListener('click', function (event) {
//     const dropdowns = document.querySelectorAll('.dropdown-menu');
//     dropdowns.forEach(function (dropdown) {
//         if (!dropdown.contains(event.target)) {
//             dropdown.classList.remove('show');
//         }
//     });
// });