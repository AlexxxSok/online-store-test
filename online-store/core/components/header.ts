import Component from '../templates/components';
import { PageIds } from '../../pages/app/app';

const Buttons = [
  {
    id: PageIds.MainPage,
    text: 'Main Page',
  },
  {
    id: PageIds.Cart,
    text: 'Cart',
  },
  {
    id: PageIds.Item,
    text: 'Item',
  },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`; //? button's id -> link
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
