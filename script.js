const navLinks = document.querySelectorAll('a[href^="#"]');
const videoButton = document.querySelector('.video-copy');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.body.classList.add('animations-ready');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

videoButton?.addEventListener('click', () => {
  videoButton.classList.toggle('is-playing');
});

const contactModal = document.querySelector('#contact-modal');
const openContactButtons = document.querySelectorAll('[data-open-contact-modal]');
const closeContactButtons = document.querySelectorAll('[data-close-contact-modal]');

const openContactModal = () => {
  if (!contactModal) return;

  contactModal.classList.add('is-open');
  contactModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  contactModal.querySelector('input, select, textarea, button')?.focus();
};

const closeContactModal = () => {
  if (!contactModal) return;

  contactModal.classList.remove('is-open');
  contactModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
};

openContactButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    openContactModal();
  });
});

closeContactButtons.forEach((button) => {
  button.addEventListener('click', closeContactModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeContactModal();
});

document.querySelectorAll('.contact-form').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    submitButton?.classList.add('is-submitting');
    if (submitButton) submitButton.disabled = true;
    if (status) {
      status.textContent = 'Sending your enquiry...';
      status.classList.remove('is-error');
    }

    try {
      const response = await fetch(form.action || '/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Unable to submit enquiry');

      form.reset();
      if (status) status.textContent = 'Thank you. Our team will get back to you shortly.';
    } catch (error) {
      if (status) {
        status.textContent = 'Something went wrong. Please call or email us directly.';
        status.classList.add('is-error');
      }
    } finally {
      submitButton?.classList.remove('is-submitting');
      if (submitButton) submitButton.disabled = false;
    }
  });
});

document.querySelectorAll('[data-slider]').forEach((slider) => {
  const track = slider.querySelector('.pillar-track');
  const previousButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');

  if (!track || !previousButton || !nextButton) return;

  const getSlideDistance = () => {
    const slide = track.querySelector('.pillar-slide');
    if (!slide) return track.clientWidth;

    const trackStyles = window.getComputedStyle(track);
    const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap) || 0;
    return slide.getBoundingClientRect().width + gap;
  };

  previousButton.addEventListener('click', () => {
    track.scrollBy({ left: -getSlideDistance(), behavior: 'smooth' });
  });

  nextButton.addEventListener('click', () => {
    track.scrollBy({ left: getSlideDistance(), behavior: 'smooth' });
  });
});

const revealSelectors = [
  'section h1',
  'section h2',
  'section > .container > p',
  '.intro-section p',
  '.villa-wellbeing p',
  '.banner-caption',
  '.wellness-tile',
  '.stage',
  '.journey-line',
  '.cta-copy > *',
  '.layout-copy',
  '.layout-rule',
  '.plan-card',
  '.ownership-model .subtitle',
  '.ownership-steps article',
  '.privilege-grid article',
  '.legacy-line',
  '.partner-grid article',
  '.team-line',
  '.comparison-wrap',
  '.investment-section article',
  '.villa-faq .accordion-item',
  '.villa-final-cta > *',
  '.venn-circle',
  '.venn-overlap',
  '.journey-step',
  '.connected-line',
  '.asset-row',
  '.return-overlay > *',
  '.location-card',
  '.life-swaragya p',
  '.planning-cta > *',
  '.investor-card',
  '.web-final-cta > *',
  '.contact-hero-copy > *',
  '.contact-intro > *',
  '.contact-card',
  '.contact-form-copy > *',
  '.contact-form .form-field',
  '.contact-form button',
  '.contact-cta > *',
  '.story-hero-copy > *',
  '.story-logo-panel',
  '.story-intro-title > *',
  '.story-intro-copy > *',
  '.story-pillars article',
  '.story-cta > *',
  '.web-footer > *'
];

const imageRevealSelectors = [
  '.image-banner',
  '.cta-image',
  '.villa-hero',
  '.web-hero',
  '.contact-hero',
  '.healing-image',
  '.return-banner',
  '.gallery-section'
];

const revealItems = [
  ...document.querySelectorAll(revealSelectors.join(',')),
  ...document.querySelectorAll(imageRevealSelectors.join(','))
];

document.querySelectorAll(imageRevealSelectors.join(',')).forEach((item) => {
  item.classList.add('image-reveal');
});

document.querySelectorAll(revealSelectors.join(',')).forEach((item) => {
  item.classList.add('reveal');
});

const setStagger = (selector, step = 85) => {
  document.querySelectorAll(selector).forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index * step, 520)}ms`);
  });
};

setStagger('.wellness-tile');
setStagger('.stage', 95);
setStagger('.plan-card', 120);
setStagger('.ownership-steps article', 120);
setStagger('.privilege-grid article', 120);
setStagger('.partner-grid article', 110);
setStagger('.investment-section article', 120);
setStagger('.villa-faq .accordion-item', 70);
setStagger('.venn-circle, .venn-overlap', 120);
setStagger('.journey-step', 110);
setStagger('.asset-row', 100);
setStagger('.location-card', 100);
setStagger('.investor-card', 130);
setStagger('.contact-card', 120);
setStagger('.contact-form .form-field', 90);
setStagger('.story-pillars article', 120);

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
    rootMargin: '0px 0px -8% 0px'
  });

  revealItems.forEach((item) => revealObserver.observe(item));
}
