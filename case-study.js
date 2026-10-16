const screenshotDialog = document.getElementById('screenshot-dialog');
if (screenshotDialog) {
  const fullImage = document.getElementById('enlarged-screenshot');
  const caption = document.getElementById('screenshot-caption');
  document.querySelectorAll('[data-enlarge]').forEach(button => {
    button.addEventListener('click', () => {
      const source = button.querySelector('img');
      fullImage.src = source.src;
      fullImage.alt = source.alt;
      caption.textContent = source.alt;
      screenshotDialog.showModal();
    });
  });
  document.getElementById('close-screenshot').addEventListener('click', () => screenshotDialog.close());
  screenshotDialog.addEventListener('click', event => {
    if (event.target === screenshotDialog) {
      const rect = screenshotDialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) screenshotDialog.close();
    }
  });
}
