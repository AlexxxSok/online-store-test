import './slider.scss';

class Slider {
  price: HTMLDivElement;

  quantity: HTMLDivElement;

  constructor() {
    this.price = document.createElement('div');
    this.quantity = document.createElement('div');
  }

  addSliderPrice(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.price.className = 'slieder-container';
    const content = `<p class="title">Price</p>
                     <div class="number">
                       <div class="min-price">120</div>
                       <div class="max-price">520</div>
                     </div>
                     <div class="container-price">
                       <input type="range" min="120" step="20" max="520" value="120">
                       <input type="range" min="120" step="20" max="520" value="520">
                     </div>`;
    this.price.innerHTML = content;
    render.append(this.price);
  }

  addSliderQuantity(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.quantity.className = 'search-container';
    const content = `<p class="title">Stock</p>
                     <div class="number">
                       <div class="min-item">1</div>
                       <div class="max-item">15</div>
                     </div>
                     <div class="container-item">
                       <input type="range" min="1" step="1" max="15" value="1">
                       <input type="range" min="1" step="1" max="15" value="15">
                     </div>`;
    this.quantity.innerHTML = content;
    render.append(this.quantity);
  }
}

export default Slider;
