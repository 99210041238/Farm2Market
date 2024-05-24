  <script>
        function toggleNav() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('open');
        }

        // Add event listeners to the menu icon
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.addEventListener('click', toggleNav);

        // Add event listeners to the sign-up buttons
        const signUpFarmerBtn = document.querySelector('a[href="#signup-farmer"]');
        const signUpMarketBtn = document.querySelector('a[href="#signup-market"]');

        signUpFarmerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms('farmer');
        });

        signUpMarketBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms('market');
        });

        function toggleForms(formType) {
            const farmerForm = document.getElementById('signup-farmer');
            const marketForm = document.getElementById('signup-market');

            if (formType === 'farmer') {
                farmerForm.style.display = 'block';
                marketForm.style.display = 'none';
            } else if (formType === 'market') {
                farmerForm.style.display = 'none';
                marketForm.style.display = 'block';
            }
        }

        // Scroll to the section when clicking on the menu options
        const menuLinks = document.querySelectorAll('.slide-menu a');

        menuLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            });
        });
    </script>
