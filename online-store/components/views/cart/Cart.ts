import './cart.scss';
import { ProductsInterface } from '../../appTypes/Interface';
import localStore from '../../localStorage/LocalStorage';
import info from '../../../server/products.json'; //! ADD
import { doc } from 'prettier';
class Cart {
  products: ProductsInterface[];

  content: HTMLDivElement;

  constructor() {
    this.products = [];
    this.content = document.createElement('div');
  }

  private handlerLocalStorage(element: HTMLButtonElement, id: string, price: number) {
    const cart = <HTMLDivElement>document.querySelector('.cart');
    const sum = <HTMLDivElement>document.querySelector('.total-sum'); //! total sum
    const sumNum = <HTMLDivElement>document.querySelector('.summ_num');
    const sumSum = <HTMLDivElement>document.querySelector('.summ_sum');
    const { pushProduct, products } = localStore.putItems(id, price);
    const totalSum = localStore.getSum();

    cart.innerHTML = `${products.length}`;
    sum.innerHTML = `${totalSum}`; //! total sum
    sumSum.innerHTML = `${totalSum} $`;
    sumNum.innerHTML = `${products.length} pcs.`;
    // let  total: number = prod.map(el => Object.values(el)).flat().map(el => +el).filter(Boolean).reduce((acc, el) => acc + el); //! new sum
  }

  renderCart(data: ProductsInterface[]): void {
    const main = <HTMLElement>document.querySelector('main');
    this.content.className = 'cards';
    this.products = data;
    if (!data.length) {
      this.content.innerHTML = `<p class="name-notfound">The Cart is empty</p>`;
    } else {
      this.content.innerHTML = this.products
        .map((el): string => {
          return `<div class="cards__inner" id="${el.id}">
                  <p class="name-item">${el.name}</p>
                  <div class="cart__content-item">
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
      const buttonMin: HTMLButtonElement = document.createElement('button');
      button.className = 'button-plus';
      button.innerHTML = '+';
      buttonMin.className = 'button-minus';
      buttonMin.innerHTML = '-';

      button.onclick = (): void => {
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

      buttonMin.onclick = (): void => {
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
      child.lastElementChild?.append(buttonMin);
    }

    main.append(this.content);
  }

  //!
  renderSummary(): void {
    const main = <HTMLElement>document.querySelector('main');
    let summary: HTMLElement = document.createElement('div');
    const headerTotal: HTMLElement | null = document.querySelector('.total-sum');
    const headerCart: HTMLElement | null = document.querySelector('.cart');
    let sumToSummary = headerTotal?.innerHTML;
    let quantToSummary = headerCart?.innerHTML;
    summary.className = 'summary';
    summary.innerHTML = `
            <div class="cards_summary" id="summary">
                <p class="summary_name">Summary</p>
                <div class="summary_content">
                <div class="summary_products">Products <p class="summ_num">${quantToSummary} pcs.</p></div>
                <div class="summary_total">Total <p class="summ_sum">${sumToSummary} $</p></div>
                <input class="summary_input"  placeholder="Enter promo code" type="search" value>
                <p class="discount_code">Promo for test: 'RS', 'TECH'</p>
                <button class="button-buy">BUY NOW</button>
                </div>
            </div>
            `;

    main.append(summary);

    const buttonBuy: HTMLElement | null = document.querySelector('.button-buy');

    if (buttonBuy !== null) {
      buttonBuy.onclick = (): void => {
        console.log('buy goods');
      };
    }
  }
}

export default Cart;
