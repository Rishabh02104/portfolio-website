       document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            const header = document.getElementById('header');
            
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href').substring(1) === entry.target.id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            window.onscroll = () => {
                if (window.scrollY > 50) {
                    header.classList.add('py-2');
                    header.classList.remove('py-4');
                } else {
                    header.classList.add('py-4');
                    header.classList.remove('py-2');
                }
            };

            // Initialize the first tab as active
            document.querySelector('.tab').click();
        });

        function openModal(modalId) {
            document.getElementById('modal-backdrop').style.display = 'block';
            document.getElementById(modalId + '-modal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeAllModals() {
            document.getElementById('modal-backdrop').style.display = 'none';
            document.querySelectorAll('.modal-content').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }

        function openTab(evt, tabName) {
            let i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }       document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            const header = document.getElementById('header');
            
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href').substring(1) === entry.target.id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            window.onscroll = () => {
                if (window.scrollY > 50) {
                    header.classList.add('py-2');
                    header.classList.remove('py-4');
                } else {
                    header.classList.add('py-4');
                    header.classList.remove('py-2');
                }
            };

            // Initialize the first tab as active
            document.querySelector('.tab').click();
        });

        function openModal(modalId) {
            document.getElementById('modal-backdrop').style.display = 'block';
            document.getElementById(modalId + '-modal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeAllModals() {
            document.getElementById('modal-backdrop').style.display = 'none';
            document.querySelectorAll('.modal-content').forEach(modal => {
                modal.style.display = 'none';
            });
            document.body.style.overflow = 'auto';
        }

        function openTab(evt, tabName) {
            let i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tab");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }





