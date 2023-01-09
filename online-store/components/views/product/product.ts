import './product.scss';
import products from '../../../server/products.json';
import { ProductsInterface } from '../../appTypes/Interface';
import localStore from '../../localStorage/LocalStorage';
import Cards from '../main/cards/Cards';

function renderHtmlProduct(prod: ProductsInterface) {
  return `
  <section class="breadscrumbs">
    <div class="breadscrumbs-item">STORE</div>
    >>
    <div class="breadscrumbs-item">${prod.category.toUpperCase()}</div>
    >>
    <div class="breadscrumbs-item">${prod.company.toUpperCase()}</div>
    >>
    <div class="breadscrumbs-item">${prod.name.toUpperCase()}</div>
  </section>
  <section class="card">
    <h1 class="card-title">${prod.name}</h1>
    <div class="card-body">
      <div class="card-images">
        <div class="img-wrapper">
          <img class="main-img" src="${prod.image}" alt="${prod.name}">
        </div>
        <div>
          <img class="thumb-img" src="${prod.images[0]}" alt="${prod.name}">
          <img class="thumb-img" src="${prod.images[1]}" alt="${prod.name}">
          <img class="thumb-img" src="${prod.images[2]}" alt="${prod.name}">          
        </div>
      </div>
      <div class="card-properties">
        <div class="card-properties_item">
          <h3>Discount Percentage:</h3>
          <p>${prod.discount}</p>
        </div>
        <div class="card-properties_item">
          <h3>Popular:</h3>
          <p>${prod.popular}</p>
        </div>
        <div class="card-properties_item">
          <h3>Stock:</h3>
          <p>${prod.quantity}</p>
        </div>
        <div class="card-properties_item">
          <h3>Brand:</h3>
          <p>${prod.company}</p>
        </div>
        <div class="card-properties_item">
          <h3>Category:</h3>
          <p>${prod.category}</p>
        </div>
      </div>
      <div class="card-buy">
        <h2>$ ${prod.price}</h2>
        <button id="${prod.id}" class="card-btn add-btn">Add to cart</button>
        <button class="card-btn buy-btn">Buy now</button>
      </div>
    </div>
  </section>
  `;
}

function renderProduct(idPage: string) {
  let idProd = idPage.split('/')[1];
  let product: ProductsInterface[] = products.filter((n) => n.id === idProd);
  console.log(product);
  const html: string = renderHtmlProduct(product[0]);
  const render = <HTMLDivElement>document.querySelector('.render');
  render.classList.add('render-card');
  render.innerHTML = renderHtmlProduct(product[0]);

  const thumbImgs = document.querySelectorAll('.thumb-img');
  thumbImgs.forEach((item) => {
  item.addEventListener('click', (e) => {
    const mainImg = <HTMLImageElement>document.querySelector('.main-img');
    let img = <HTMLImageElement>e.currentTarget;
    mainImg.src = img.src;
  });
});
  const btnAdd = <HTMLButtonElement>document.querySelector('.add-btn');
  btnAdd.onclick = (): void => {
    if (localStore.getItems().length === 21) {
      btnAdd.classList.remove('active');
    }
    btnAdd.classList.toggle('active');

    let price: number = 0;
    for (let obj of products) {
      //! price of card
      if (obj.id === btnAdd.id) {
        price = obj.price;
      }
    }
    const cards = new Cards
    cards.handlerLocalStorage(btnAdd, btnAdd.id, price); //* child.id - el.id
  };
}

export default renderProduct;