// import './bank.scss';
import info from '../../../server/products.json'; //! ADD
import { doc } from 'prettier';
class Bank {
  content: HTMLDivElement;

  constructor() {
    this.content = document.createElement('div');
  }

  renderBank(): void {
    const main = <HTMLElement>document.querySelector('main');
    let modal: HTMLElement = document.createElement('div');
    modal.className = 'bank';
    modal.innerHTML = `
              <div class="modal_bank" id="summary">
              <div class="modal_content">
                <div class="bank_content">

                  <div class="bank_person">
                    <h2 class="personal">Personal details</h2>
                    <div class="form name">
                      <input class="input_name" type="text" placeholder="Name">
                    </div>
                    <div class="form phone">
                      <input class="input_phone" type="text" placeholder="Phone number">
                    </div>
                    <div class="form address">
                      <input class="input_address" type="text" placeholder="Delivery address">
                    </div>
                    <div class="form email">
                      <input class="input_email" type="text" placeholder="Email">
                    </div>
                  </div>

                  <div class="bank_card">
                    <h2 class="card_name">Credit card details</h2>
                    <div class="bank_card_data">

                      <div class="bank_card_number">
                        <div class="card_img">visa</div> 
                        <input class="card_number" type="text" placeholder="Card number">
                      </div>

                      <div class="bank_card_date">
                        <div class="card_date">Valid:
                        <input class="card_date_input" type="text" placeholder="Valid date"> 
                        </div>
                        <div class="card_cvv">CVV:
                        <input class="card_cvv_input" type="text" placeholder="CVV"> 
                        </div>  
                      </div>

                    </div>
                  </div>
                    <button class="button-card" type="submit">CINFIRM</button>
                </div>
              </div>
            </div>
            `;

    main.append(modal);

    const buttonCard: HTMLButtonElement | null = document.querySelector('.button-card');

    if (buttonCard !== null) {
      buttonCard.onclick = (): void => {
        alert('The oreder was confirmed');
      };
    }
  }
}

export default Bank;
