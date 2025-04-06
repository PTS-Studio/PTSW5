const burgerCheckbox = document.getElementById('check');
const menuOverlay = document.querySelector('.menu-overlay');

burgerCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // Отключаем прокрутку
        document.body.style.overflow = 'hidden';
    } else {
        // Возвращаем прокрутку
        document.body.style.overflow = 'auto';
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Animate hamburger menu
      const bars = document.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.toggle('active'));
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('nav') && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      
      // Reset hamburger menu
      const bars = document.querySelectorAll('.bar');
      bars.forEach(bar => bar.classList.remove('active'));
    }
  });
  
  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'home.html')) {
      item.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add animation to elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Add style to the menu toggle
  if (menuToggle) {
    const bars = document.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
      bar.style.transition = `transform 0.3s ease ${index * 0.1}s`;
    });
  }
});

// Add active class to menu toggle bars
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const bars = document.querySelectorAll('.bar');
      
      if (bars[0].classList.contains('active')) {
        // Reset to hamburger
        bars[0].style.transform = 'rotate(0) translateY(0)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0) translateY(0)';
        
        bars.forEach(bar => bar.classList.remove('active'));
      } else {
        // Transform to X
        bars[0].style.transform = 'rotate(45deg) translateY(8px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        
        bars.forEach(bar => bar.classList.add('active'));
      }
    });
  }
});
// JavaScript for the Home page

document.addEventListener('DOMContentLoaded', function() {
  // Typing effect for the code block
  const codeElement = document.querySelector('.code-block code');
  
  if (codeElement) {
    const originalText = codeElement.innerHTML;
    codeElement.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        codeElement.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 20);
      }
    };
    
    // Start the typing effect after a short delay
    setTimeout(typeWriter, 1000);
  }
  
  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Animate hero section elements
  const animateHero = () => {
    const heroContent = document.querySelector('.sector_block_left');
    const heroImage = document.querySelector('.sector_block_right');
    
    if (heroContent && heroImage) {
      setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateY(0)';
      }, 600);
    }
  };
  
  // Add initial styles for animation
  const heroContent = document.querySelector('.sector_block_left');
  const heroImage = document.querySelector('.sector_block_right');
  
  if (heroContent && heroImage) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateY(20px)';
    heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Start animation
    animateHero();
  }
});