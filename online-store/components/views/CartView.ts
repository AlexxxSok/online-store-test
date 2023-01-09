import Cart from './cart/Cart';
import { ProductsInterface } from '../appTypes/Interface';
import Header from './header/Header';
import Footer from './footer/Footer';
import Bank from './bank/Bank';

class CartView {
  header: Header;

  cart: Cart;

  footer: Footer;

  bank: Bank;

  constructor() {
    this.header = new Header();
    this.cart = new Cart();
    this.footer = new Footer();
    this.bank = new Bank();
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

  drawBank(): void {
    this.bank.renderBank();
  }
}
export default CartView;
