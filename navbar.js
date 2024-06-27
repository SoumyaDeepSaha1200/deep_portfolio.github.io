const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    if (sidebar.style.right === '-250px') {
        sidebar.style.right = '0';
    } else {
        sidebar.style.right = '-250px';
    }
});




function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('hidden');
}
