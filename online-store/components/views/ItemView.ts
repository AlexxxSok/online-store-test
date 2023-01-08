import Item from './item/Item';
import { ProductsInterface } from '../appTypes/Interface';
import Header from './header/Header';
import Footer from './footer/Footer';
import ModalWindow from './main/modalWindow/ModalWindow';

class AppView {
  header: Header;

  item: Item;

  footer: Footer;

  modalWindow: ModalWindow;

  constructor() {
    this.header = new Header();
    this.item = new Item();
    this.footer = new Footer();
    this.modalWindow = new ModalWindow();
  }

  drawHeader(item: number, sum: number): void {
    this.header.renderHeader(item, sum);
  }

  drawModalWindow(): void {
    this.modalWindow.renderModalWindow();
  }

  drawCards(data: ProductsInterface[]): void {
    this.item.renderCards(data);
  }

  drawFooter(): void {
    this.footer.render();
  }
}
