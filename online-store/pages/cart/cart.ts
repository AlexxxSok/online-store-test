import Page from '../../core/templates/page';

class Cart extends Page {
  static TextObject = {
    MainTitle: 'Cart',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(Cart.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default Cart;
