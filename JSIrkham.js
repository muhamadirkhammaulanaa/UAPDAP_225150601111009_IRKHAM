// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const downloadResumeBtn = document.getElementById('download-resume');

  downloadResumeBtn.addEventListener('click', function () {
    const cvPath = 'CV_Muhamad Irkham Maulana_2023.pdf'; 


    const downloadLink = document.createElement('a');
    downloadLink.href = cvPath;
    downloadLink.download = '.pdf';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list ul');

  hamburger.addEventListener('click', function () {
    navList.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  navList.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', function () {
      navList.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', function () {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    const navLinks = document.querySelectorAll('.nav-list ul li a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === currentSection) {
        link.classList.add('active');
      }
    });
  });
});
