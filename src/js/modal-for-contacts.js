(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-for-contacts-open]'),
    closeModalBtn: document.querySelector('[data-modal-for-contacts-close]'),
    modal: document.querySelector('[data-modal-for-contacts]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
