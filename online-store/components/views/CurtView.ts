import Curt from './curt/Curt';
import { ProductsInterface } from '../appTypes/Interface';
import Header from './header/Header';
import Footer from './footer/Footer';

class CurtView {
  header: Header;

  curt: Curt;

  footer: Footer;

  constructor() {
    this.header = new Header();
    this.curt = new Curt();
    this.footer = new Footer();
  }

  drawHeader(item: number, sum: number): void {
    this.header.renderHeader(item, sum);
  }

  drawCards(data: ProductsInterface[]): void {
    this.curt.renderCurt(data);
  }

  drawFooter(): void {
    this.footer.render();
  }
}
export default CurtView;
