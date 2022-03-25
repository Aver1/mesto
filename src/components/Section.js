export default class Section {
  constructor({renderer}, boxSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(boxSelector);
  };
  renderItems(data) {
    data.forEach(item => this._renderer(item));
  };
  addItem(domElem) {
    this._container.prepend(domElem);
  }
}