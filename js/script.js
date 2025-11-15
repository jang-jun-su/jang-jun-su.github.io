/**
 * Wedding Invitation - PhotoSwipe Gallery
 * Initialize PhotoSwipe lightbox for gallery
 */

document.addEventListener('DOMContentLoaded', function() {
    // PhotoSwipe Lightbox initialization
    if (typeof PhotoSwipeLightbox !== 'undefined') {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#gallery',
            children: 'a',
            pswpModule: PhotoSwipe,

            // UI options
            bgOpacity: 0.95,
            padding: { top: 20, bottom: 20, left: 20, right: 20 },

            // Zoom options
            maxZoomLevel: 3,

            // Animation options
            showHideAnimationType: 'fade',

            // Accessibility
            ariaLabel: {
                close: '닫기',
                zoomIn: '확대',
                zoomOut: '축소',
                previous: '이전',
                next: '다음'
            }
        });

        lightbox.init();
    }

    // Smooth scroll for anchor links (if any added in future)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Lazy loading images optimization
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});
