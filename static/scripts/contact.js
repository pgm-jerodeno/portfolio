(() => {
  const app = {
    init() {
      this.cacheElements();
      this.contact();
    },
    cacheElements() {
      this.$formContact = document.querySelector('#form__contact');
      this.$thanks = document.querySelector('.thanks');
    },
    contact() {
      this.$formContact.addEventListener('submit', (ev) => {
        ev.preventDefault();
        window.location.href = "contact.html";
      })
    }
  }
  app.init();
})();