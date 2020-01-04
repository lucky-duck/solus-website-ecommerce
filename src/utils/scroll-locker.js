class ScrollLocker {
  constructor() {
    if (typeof document === 'undefined') {
      return;
    }

    this.element = document.body;
  }

  lock() {
    this.element.style.overflowY = 'hidden';
  }

  unlock() {
    this.element.style.overflowY = '';
  }
}

const scrollLocker = new ScrollLocker();

export default scrollLocker;
