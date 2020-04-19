// CODE FOR DELETE BUTTON FADEAWAY
let deleteBtns = document.querySelectorAll('.deleteBtn');

window.addEventListener('click', (e) => {
  deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach(deleteBtn => {
    if(e.target == deleteBtn) {
      e.target.parentElement.classList.add("fadeaway");
      setTimeout(() => {e.target.parentElement.remove();}, 300);
    }
  });
});
