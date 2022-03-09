export default class Section {
  constructor({items, renderer}, boxSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(boxSelector);
  };
  renderItems() {
    this._items.forEach(item => this._renderer(item));
  };
  addItem(domElem) {
    this._container.prepend(domElem);
  }
}