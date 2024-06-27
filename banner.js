// GSAP animation
gsap.from(".banrap", { opacity: 0, duration: 1, y: -50, ease: "power4.out" });
gsap.from(".banrap h1, .banrap h3, .banrap p", { opacity: 0, duration: 1, y: 50, delay: 0.5, stagger: 0.2, ease: "back.out(1.7)" });
gsap.from(".icons i", { opacity: 0, duration: 1, delay: 1, scale: 0.5, stagger: 0.2, ease: "elastic.out(1, 0.3)" });
gsap.from(".btn", { opacity: 0, duration: 1, delay: 1.5, y: 30, ease: "power4.out" });
document.getElementById("github").onclick = function () {
    window.location.href = "https://github.com/soumyadeepsaha1200";
};
document.getElementById("link").onclick = function () {
    window.location.href = "https://www.linkedin.com/in/soumya-deep-saha-579a73222/";
};
document.getElementById("facebook").onclick = function () {
    window.location.href = "https://www.facebook.com/profile.php?id=100010056245109";
};
document.getElementById("instragram").onclick = function () {
    window.location.href = "https://www.instagram.com/the_nature_in_my_lens/";
};
document.getElementById("google").onclick = function () {
    window.location.href = "https://www.google.com/";
};
document.getElementById("hacker").onclick = function () {
    window.location.href = "https://www.hackerrank.com/dashboard";
};
// Add onclick event for WhatsApp icon to open WhatsApp with a predefined message
document.getElementById("whatsapp").onclick = function () {
    var phoneNumber = "6291307445"; // Change this to your phone number
    var message = "Hello! I visited your portfolio and would like to connect."; // Change this to your desired message
    window.open("https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message), "_blank");
};
