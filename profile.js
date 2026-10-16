// Edit these details to personalize all three pages. Keep resumeUrl local for GitHub Pages.
const profile = {
  name: 'Isaiah Vander Wagen',
  initials: 'IVW',
  field: 'Computer science student',
  bio: 'I’m pursuing a bachelor’s degree in computer science. This portfolio brings together my coursework, projects, and growth as I learn to build useful, approachable technology.',
  email: 'vwisaiah@gmail.com',
  location: 'Bachelor’s in computer science · In progress',
  resumeUrl: './resume.pdf',
};
document.querySelectorAll('[data-profile]').forEach(el => {
  const value = profile[el.dataset.profile];
  if (value) el.textContent = value;
});
document.querySelectorAll('[data-resume]').forEach(el => { el.href = profile.resumeUrl; });
document.querySelectorAll('[data-email]').forEach(el => {
  if (profile.email) { el.href = 'mailto:' + profile.email; el.textContent = profile.email; }
  else { el.textContent = 'Add your contact email in profile.js'; el.removeAttribute('href'); }
});
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
