import './curt.scss';
import { ProductsInterface } from '../../appTypes/Interface';
import localStore from '../../localStorage/LocalStorage';
import info from '../../../server/products.json'; //! ADD
class Curt {
  products: ProductsInterface[];

  content: HTMLDivElement;

  classNameActive: string;

  constructor() {
    this.content = document.createElement('div');
    this.products = [];
    this.classNameActive = 'active';
  }

  private handlerLocalStorage(element: HTMLButtonElement, id: string, price: number) {
    const cart = <HTMLDivElement>document.querySelector('.cart');
    const sum = <HTMLDivElement>document.querySelector('.total-sum'); //! total sum
    const { pushProduct, products } = localStore.putItems(id, price);
    const totalSum = localStore.getSum();

    if (pushProduct) {
      element.classList.add(this.classNameActive);
    } else {
      element.classList.remove(this.classNameActive);
    }

    cart.innerHTML = `${products.length}`;
    sum.innerHTML = `${totalSum}`; //! total sum
    // let  total: number = prod.map(el => Object.values(el)).flat().map(el => +el).filter(Boolean).reduce((acc, el) => acc + el); //! new sum
  }

  renderCurt(data: ProductsInterface[]): void {
    const main = <HTMLElement>document.querySelector('main');
    this.content.className = 'cards';
    this.products = data;
    if (!data.length) {
      this.content.innerHTML = `<p class="name-notfound">The Curt is empty</p>`;
    } else {
      this.content.innerHTML = this.products
        .map((el): string => {
          return `<div class="cards__inner" id="${el.id}">
                  <p class="name-item">${el.name}</p>
                  <div class="curt__content-item">
                    <img class="cards-image" src=${el.image} alt="item">
                    <ul class="list">
                    <li class="list-item">Category: ${el.category}</li>
                    <li class="list-item">Brand: ${el.company}</li>
                    <li class="list-item">Discount: ${el.discount}</li>
                    <li class="list-item">Popular: ${el.popular}</li>
                    <li class="list-item">Stock: ${el.quantity}</li>
                    <li class="list-item">Price: ${el.price} $</li>
                  </ul>
                </div>
              </div>`;
        })
        .join('');
    }
    const childNode: HTMLCollection = this.content.children;
    const itemStore: string[] = localStore.getItems();
    for (const child of childNode) {
      const button: HTMLButtonElement = document.createElement('button');
      let activeClass = '';

      if (itemStore.includes(child.id)) {
        activeClass = 'active';
      }

      button.className = `button-card ${activeClass}`;
      button.innerHTML = 'ADD TO CART';
      button.onclick = (): void => {
        if (localStore.getItems().length === 21) {
          button.classList.remove('active');
        }
        button.classList.toggle('active');

        let price: number = 0;
        for (let obj of info) {
          //! price of card
          if (obj.id === child.id) {
            price = obj.price;
            console.log(obj.price);
          }
        }
        this.handlerLocalStorage(button, child.id, price); //* child.id - el.id
      };
      child.lastElementChild?.append(button);
    }
    main.append(this.content);
  }
}

export default Curt;
