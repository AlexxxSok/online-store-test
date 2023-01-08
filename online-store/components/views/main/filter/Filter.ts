import './filter.scss';
class Filter {
  inputCategory: HTMLFormElement;

  inputCompany: HTMLFormElement;

  InputDiscount: HTMLFormElement;

  inputPopular: HTMLFormElement;

  constructor() {
    this.inputCategory = document.createElement('form');
    this.inputCompany = document.createElement('form');
    this.InputDiscount = document.createElement('form');
    this.inputPopular = document.createElement('form');
  }

  addCategory(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputCategory.className = 'category';
    this.inputCategory.innerHTML = `<p class="category-title">Category</p>`;
    const company: string[] = ['smartphones', 'laptops', 'mens-watches', 'womens-watches'];
    company.forEach((elem: string): void => {
      const categoryBlock: HTMLDivElement = document.createElement('div'); //!
      categoryBlock.className = 'category__content';
      const text: HTMLElement = document.createElement('p');
      text.className = 'category-name';
      text.innerHTML = elem;
      const input: HTMLInputElement = document.createElement('input');
      input.className = `category-button ${elem}`;
      input.type = 'checkbox';
      input.name = elem;
      categoryBlock.append(input);
      categoryBlock.append(text);
      this.inputCategory.append(categoryBlock);
    });

    render.append(this.inputCategory);
  }

  addCompany(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputCompany.className = 'company';
    this.inputCompany.innerHTML = `<p class="company-title">Company</p>`;
    const company: string[] = [
      'Apple',
      'Samsung',
      'OPPO',
      'Huawei',
      'Microsoft',
      'Infinix',
      'HP',
      'Naviforce',
      'Eastern Watches',
    ]; //! change company
    company.forEach((elem: string): void => {
      const companyBlock: HTMLDivElement = document.createElement('div');
      companyBlock.className = 'company__content';
      const text: HTMLElement = document.createElement('p');
      text.className = 'company-name';
      text.innerHTML = elem;
      const input: HTMLInputElement = document.createElement('input');
      input.className = `company-button ${elem}`;
      input.type = 'checkbox';
      input.name = elem;
      companyBlock.append(input);
      companyBlock.append(text);
      this.inputCompany.append(companyBlock);
    });

    render.append(this.inputCompany);
  }

  addDiscount(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.InputDiscount.className = 'discount';
    this.InputDiscount.innerHTML = `<p class="discount-title">Discount</p>`;
    const company: string[] = ['5%', '10%', '15%'];
    company.forEach((elem: string): void => {
      const discountBlock: HTMLDivElement = document.createElement('div');
      discountBlock.className = 'discount__content';
      const text: HTMLElement = document.createElement('p');
      text.className = 'discount-name';
      text.innerHTML = elem;
      const input: HTMLInputElement = document.createElement('input');
      input.className = `discount-button ${elem}`;
      input.type = 'checkbox';
      input.name = elem;
      discountBlock.append(input);
      discountBlock.append(text);
      this.InputDiscount.append(discountBlock);
    });

    render.append(this.InputDiscount);
  }

  addPopular(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.inputPopular.className = 'popular';
    this.inputPopular.innerHTML = `<p class="popular-title">Popular</p>`;
    const input: HTMLInputElement = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'popular';
    input.className = `popular-button`;
    this.inputPopular.append(input);
    render.append(this.inputPopular);
  }
}

export default Filter;
