export default class ToggleSelected {
  constructor(list) {
    this.list = document.querySelectorAll(list);
    this.classSelected = 'selected';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ currentTarget }) {
    this.list.forEach((item) => item.classList.remove(this.classSelected));
    currentTarget.classList.add('selected');
  }

  handleEvents() {
    this.list.forEach((item) => item.addEventListener('click', this.handleClick));
  }

  init() {
    this.handleEvents();
  }
}
