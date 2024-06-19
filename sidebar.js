<script>
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.getElementById('menu');
        const menutext = document.querySelector('.menutext');
        const navbar = document.querySelector('.navbar');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                menutext.style.transform = 'translateX(0)';
                navbar.style.transform = 'translateX(0)';
                menutext.style.opacity = '1';
                navbar.style.opacity = '1';
            } else {
                menutext.style.transform = 'translateX(-100%)';
                navbar.style.transform = 'translateX(-100%)';
                menutext.style.opacity = '0';
                navbar.style.opacity = '0';
            }
        });
    });
</script>
