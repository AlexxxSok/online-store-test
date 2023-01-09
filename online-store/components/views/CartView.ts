import Cart from './cart/Cart';
import { ProductsInterface } from '../appTypes/Interface';
import Header from './header/Header';
import Footer from './footer/Footer';

class CartView {
  header: Header;

  cart: Cart;

  footer: Footer;

  constructor() {
    this.header = new Header();
    this.cart = new Cart();
    this.footer = new Footer();
  }

  drawHeader(item: number, sum: number): void {
    this.header.renderHeader(item, sum);
  }

  drawCards(data: ProductsInterface[]): void {
    this.cart.renderCart(data);
  }

  drawSummary(): void {
    this.cart.renderSummary();
  }

  drawFooter(): void {
    this.footer.render();
  }
}
export default CartView;
