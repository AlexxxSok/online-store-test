import Cards from './main/cards/Cards';
import Sort from './main/sort/Sort';
import Filter from './main/filter/Filter';
import Slider from './main/slider/Slider';
import Reset from './main/reset/Reset';
import { ProductsInterface } from '../appTypes/Interface';
import Header from './header/Header';
import Footer from './footer/Footer';
import ModalWindow from './main/modalWindow/ModalWindow';

class AppView {
  header: Header;

  sort: Sort;

  filter: Filter;

  slider: Slider;

  reset: Reset;

  cards: Cards;

  footer: Footer;

  modalWindow: ModalWindow;

  constructor() {
    this.header = new Header();
    this.sort = new Sort();
    this.filter = new Filter();
    this.slider = new Slider();
    this.reset = new Reset();
    this.cards = new Cards();
    this.footer = new Footer();
    this.modalWindow = new ModalWindow();
  }

  drawHeader(item: number, sum: number): void {
    this.header.renderHeader(item, sum);
  }

  drawModalWindow(): void {
    this.modalWindow.renderModalWindow();
  }

  showSort(): void {
    this.sort.addSort();
    this.sort.addSearch();
  }

  showFilter(): void {
    this.filter.addCategory();
    this.filter.addCompany();
    this.filter.addDiscount();
    this.filter.addPopular();
  }

  showSlider(): void {
    this.slider.addSliderPrice();
    this.slider.addSliderQuantity();
  }

  showResets(): void {
    this.reset.addResetFilters();
    this.reset.addResetSetting();
  }

  drawCards(data: ProductsInterface[]): void {
    this.cards.renderCards(data);
  }

  drawFooter(): void {
    this.footer.render();
  }
}
export default AppView;
