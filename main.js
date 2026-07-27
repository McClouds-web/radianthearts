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
            // chevron icons were removed sitewide, so the icon is optional here
            const icon = acc.querySelector('.material-symbols-outlined');
            if (content) {
                const opening = content.classList.contains('hidden');
                content.classList.toggle('hidden', !opening);
                if (icon) icon.style.transform = opening ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        });
    });

    // ---- Gallery category filter ----
    const filterButtons = document.querySelectorAll('[data-filter]');
    const galleryItems = document.querySelectorAll('.masonry-item[data-cat]');
    if (filterButtons.length && galleryItems.length) {
        const ACTIVE = ['bg-primary', 'text-on-primary'];
        const IDLE = ['bg-surface-container', 'text-primary'];

        const setActive = (btn) => {
            filterButtons.forEach(b => {
                const on = b === btn;
                b.classList.toggle('bg-primary', on);
                b.classList.toggle('text-on-primary', on);
                b.setAttribute('aria-pressed', on ? 'true' : 'false');
            });
        };

        filterButtons.forEach(btn => {
            btn.setAttribute('aria-pressed', 'false');
            btn.addEventListener('click', () => {
                const want = btn.dataset.filter;
                galleryItems.forEach(item => {
                    const show = want === 'all' || item.dataset.cat === want;
                    item.style.display = show ? '' : 'none';
                });
                setActive(btn);
            });
        });
        // default state
        const initial = document.querySelector('[data-filter="all"]');
        if (initial) setActive(initial);
    }

    // ---- Forms: no backend, so compose a real email the visitor can send ----
    const SCHOOL_EMAIL = 'admissions@radianthearts.co.bw';

    const flash = (form, message) => {
        let note = form.querySelector('.form-note');
        if (!note) {
            note = document.createElement('p');
            note.className = 'form-note text-body-sm font-body-sm mt-3';
            form.appendChild(note);
        }
        note.textContent = message;
        note.style.color = '#B35A12';
    };

    // Contact page enquiry form
    const contactForm = document.querySelector('form.relative.z-10.space-y-6');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = (sel) => {
                const el = contactForm.querySelector(sel);
                return el ? el.value.trim() : '';
            };
            const name = val('input[type="text"]');
            const email = val('input[type="email"]');
            const phone = val('input[type="tel"]');
            const select = contactForm.querySelector('select');
            const topic = select ? select.options[select.selectedIndex].text : '';
            const message = val('textarea');

            if (!name || !email || !message) {
                flash(contactForm, 'Please add your name, email and a message.');
                return;
            }

            const body = [
                'Name: ' + name,
                'Email: ' + email,
                phone ? 'Phone: ' + phone : null,
                topic ? 'Enquiry about: ' + topic : null,
                '',
                message
            ].filter(Boolean).join('\n');

            window.location.href = 'mailto:' + SCHOOL_EMAIL +
                '?subject=' + encodeURIComponent('Website enquiry from ' + name) +
                '&body=' + encodeURIComponent(body);
            flash(contactForm, 'Opening your email app to send this message...');
        });
    }

    // Newsletter forms (footer on every page)
    document.querySelectorAll('form').forEach(form => {
        if (form === contactForm) return;
        const emailField = form.querySelector('input[type="email"]');
        if (!emailField || !form.querySelector('button')) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const address = emailField.value.trim();
            if (!address) { flash(form, 'Please enter your email address.'); return; }
            window.location.href = 'mailto:' + SCHOOL_EMAIL +
                '?subject=' + encodeURIComponent('Newsletter signup') +
                '&body=' + encodeURIComponent('Please add this address to the Radiant Hearts newsletter: ' + address);
            flash(form, 'Opening your email app to confirm your signup...');
        });
    });

    // Contact page newsletter arrow -> focus the footer signup field
    const newsletterArrow = document.querySelector('button [data-icon="arrow_forward"]');
    if (newsletterArrow) {
        const btn = newsletterArrow.closest('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', 'Go to newsletter signup');
        btn.addEventListener('click', () => {
            const target = document.querySelector('footer input[type="email"], form input[type="email"]');
            if (target) { target.scrollIntoView({ block: 'center' }); target.focus(); }
        });
    }
});

