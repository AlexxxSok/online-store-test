import { ProductsInterface, FilterInterface } from '../appTypes/Interface';
import AppView from '../views/AppView';
import CartView from '../views/CartView'; //! new
import localStore from '../localStorage/LocalStorage';
import products from '../../server/products.json';
class AppModel {
  products: ProductsInterface[];

  filterProducts: ProductsInterface[];

  filters: FilterInterface<string | number>;

  view: AppView;

  cartItems: CartView; //! new

  constructor() {
    this.products = products;
    this.filters = {
      category: [], //!
      company: [],
      discount: [], //!
      quantity: [],
      price: [],
      name: [],
      popular: [],
    };
    this.filterProducts = [];
    this.view = new AppView();
    this.cartItems = new CartView(); //! new
  }

  startCards(): void {
    const filter: FilterInterface<string | number>[] = localStore.getProducts();
    const sortProducts: ProductsInterface[] = localStore.getSortProducts();
    if (filter.length && sortProducts.length) {
      this.view.drawCards(this.filterArray(sortProducts, filter[0]));
      this.filters = filter[0];
      this.products = sortProducts;
    } else if (filter.length && !sortProducts.length) {
      this.view.drawCards(this.filterArray(this.products, filter[0]));
      this.filters = filter[0];
    } else if (!filter.length && sortProducts.length) {
      this.view.drawCards(this.filterArray(sortProducts, this.filters));
      this.products = sortProducts;
    } else {
      this.view.drawCards(this.filterArray(this.products, this.filters));
    }
  }

  //! CaRT
  startCart(): void {
    const cartProductsId: string[] = localStore.getItems();
    const cartData: ProductsInterface[] = [];
    for (let obj of products) {
      for (let string of cartProductsId) {
        if (obj.id === string) {
          cartData.push(obj);
        }
      }
    }

    this.cartItems.drawCards(cartData);
    this.cartItems.drawSummary();
  }

  //!

  addHeader(): void {
    if (localStore.getItems().length > 20) {
      this.view.drawHeader(localStore.getItems().length - 1, localStore.getSum());
    } else {
      this.view.drawHeader(localStore.getItems().length, localStore.getSum());
    }
  }

  addModalWindow(): void {
    this.view.drawModalWindow();
  }

  addFooter(): void {
    this.view.drawFooter();
  }

  doSort(value: string): void {
    if (value === '1') {
      this.products.sort((a, b): number => (a.price > b.price ? 1 : -1));
    }
    if (value === '2') {
      this.products.sort((a, b): number => (a.price < b.price ? 1 : -1));
    }
    if (value === '3') {
      this.products.sort((a, b): number => (a.name > b.name ? 1 : -1));
    }
    if (value === '4') {
      this.products.sort((a, b): number => (a.name < b.name ? 1 : -1));
    }
    localStore.putProducts(this.filters);
    console.log(localStore.putProducts(this.filters));

    localStore.putSortProducts(this.products);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  //! filterArray - key

  private filterArray(array: ProductsInterface[], filters: FilterInterface<string | number>): ProductsInterface[] {
    const filterKeys = Object.keys(filters);
    return array.filter((item: ProductsInterface) => {
      return filterKeys.every((key) => {
        if (!filters[key].length) return true;
        return filters[key].find((filter) => filter === (<string & number>item)[key]);
      });
    });
  }

  findCategory(value: string, check: boolean): void {
    if (check) {
      this.filters.category.push(value);
    } else {
      this.filters.category.splice(this.filters.category.indexOf(value), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findDiscount(value: string, check: boolean): void {
    if (check) {
      this.filters.discount.push(value);
    } else {
      this.filters.discount.splice(this.filters.discount.indexOf(value), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPopular(check: boolean): void {
    if (check) {
      this.filters.popular.push('yes');
    } else {
      this.filters.popular.splice(this.filters.popular.indexOf('yes'), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findCompany(value: string, check: boolean): void {
    if (check) {
      this.filters.company.push(value);
    } else {
      this.filters.company.splice(this.filters.company.indexOf(value), 1);
    }
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findPrice(valueMin: string, valueMax: string): void {
    const priceArr: number[] = [
      120,
      140,
      160,
      180,
      200,
      220,
      240,
      260,
      280,
      300,
      320,
      340,
      360,
      380,
      400,
      420,
      440,
      460,
      480,
      500,
      520, //!
    ];
    let priceFilter: number[] = [];
    const range: number[] = priceArr.slice(priceArr.indexOf(+valueMin), priceArr.indexOf(+valueMax) + 1);
    priceFilter = range;
    this.filters.price = priceFilter;
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findTotalItem(valueMin: string, valueMax: string): void {
    const itemArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let itemFilter: number[] = [];
    const range: number[] = itemArr.slice(itemArr.indexOf(+valueMin), itemArr.indexOf(+valueMax) + 1);
    itemFilter = range;
    this.filters.quantity = itemFilter;
    localStore.putProducts(this.filters);
    this.view.drawCards(this.filterArray(this.products, this.filters));
  }

  findText(value: string): void {
    const nameArr: string[] = [
      'iPhone 9',
      'iPhone X',
      'Samsung Universe 9',
      'OPPO F19',
      'Huawei P30',
      'MacBook Pro',
      'Galaxy Book',
      'Surface 4',
      'INBOOK',
      'HP Pavilion',
      'Wristwatch',
      'Brand Watch',
      'Royal Watch',
      'Skeleton Watch',
      'Wrist Watch',
      'Couple Watch',
      'Fashion Watch',
      'Luxury Watch',
      'Golden Watch',
      'Stainless Steel',
      'Crystal',
    ];
    const searchName: string[] = nameArr.filter((el) => {
      if (el.toLowerCase().includes(value.toLowerCase())) {
        return el;
      }
    });
    this.filters.name = searchName;
    if (searchName.length) {
      this.view.drawCards(this.filterArray(this.products, this.filters));
    } else {
      this.view.drawCards(this.filterArray(this.filterProducts, this.filters));
      this.filters.name.push(value);
    }
    localStore.putProducts(this.filters);
  }
}

export default AppModel;
