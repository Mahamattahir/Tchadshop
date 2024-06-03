import React, { useEffect } from 'react';

function main() {
    useEffect(() => {
        // Dropdown on mouse hover
        function toggleNavbarMethod() {
            if (window.innerWidth > 992) {
                document.querySelectorAll('.navbar .dropdown').forEach(item => {
                    item.addEventListener('mouseover', function () {
                        this.querySelector('.dropdown-toggle').click();
                    });
                    item.addEventListener('mouseout', function () {
                        this.querySelector('.dropdown-toggle').click();
                    });
                });
            } else {
                document.querySelectorAll('.navbar .dropdown').forEach(item => {
                    item.removeEventListener('mouseover', function () {
                        this.querySelector('.dropdown-toggle').click();
                    });
                    item.removeEventListener('mouseout', function () {
                        this.querySelector('.dropdown-toggle').click();
                    });
                });
            }
        }

        toggleNavbarMethod();
        window.addEventListener('resize', toggleNavbarMethod);

        // Back to top button
        function handleScroll() {
            if (window.pageYOffset > 100) {
                document.querySelector('.back-to-top').style.display = 'block';
            } else {
                document.querySelector('.back-to-top').style.display = 'none';
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', toggleNavbarMethod);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Back to top button click handler
    function handleBackToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            {/* Your JSX code here */}
            <div className="back-to-top" onClick={handleBackToTop}>Back to Top</div>
        </div>
    );
}

export default main;
