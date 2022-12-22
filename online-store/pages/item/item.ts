import Page from '../../core/templates/page';

class Item extends Page {
  static TextObject = {
    MainTitle: 'Item',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(Item.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default Item;
