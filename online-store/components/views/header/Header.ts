import './header.scss';
class Header {
  renderHeader(item: number, sum: number): void {
    const header = <HTMLElement>document.querySelector('header');
    const html = `<div class="header__content">
                <div class="header__top">
                  <h1 class="main-title"><a href="/#">technical store</a></h1>
                  <div class="total">
                    <p class="total-title">Total</p>
                    <div class ="total-sum">${sum}</div>
                    <div class ="dollar">$</div>
                  </div>
                  <a href="#cart">
                  <div class="inner-cart">
                    <p class="cart-title">Cart</p>
                    <div class ="cart">${item}</div>
                  </div>
                  </a> 
                </div>  
               </div>`;
    header.innerHTML = html;
  }
}

export default Header;
