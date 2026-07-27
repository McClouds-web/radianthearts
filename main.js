document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    if (mobileMenuTrigger && mobileMenu) {
        mobileMenuTrigger.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });
    }

    if (mobileMenuClose && mobileMenu) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    }

    // Close menu when clicking on a link
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }

    // Page Scroll Effect for Header Navigation Bar
    const header = document.querySelector('nav');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('shadow-md', 'bg-surface/95');
                header.classList.remove('bg-surface/90');
            } else {
                header.classList.remove('shadow-md', 'bg-surface/95');
                header.classList.add('bg-surface/90');
            }
        });
    }

    // Fade-in Intersection Observer
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-12');
            }
        });
    }, observerOptions);

    // Observe content blocks, cards, and articles for fade-in animations
    document.querySelectorAll('section > div, header > div, article, .soft-shadow').forEach(el => {
        // Skip nav and items that shouldn't animate
        if (el.closest('nav') || el.classList.contains('no-anim') || el.closest('#mobile-menu')) return;
        el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-12');
        observer.observe(el);
    });

    // Accordion toggle for FAQ (if present on page)
    const accordions = document.querySelectorAll('.group.cursor-pointer');
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            const content = acc.querySelector('div:last-child');
            const icon = acc.querySelector('.material-symbols-outlined');
            if (content && icon) {
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    content.classList.add('hidden');
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});
