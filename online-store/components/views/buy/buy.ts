import './buy.scss';

function renderBuyProduct() {
  const overlay = document.createElement('div');
  overlay.className = "overlay";
  overlay.innerHTML = `    
      <div class="modal_content" id="summary" onclick="event.stopPropagation()">
        <div class="bank_content">

          <div class="bank_person">
            <h2 class="personal">Personal details</h2>
            <div class="form name">
              <input class="input_name" type="text" pattern="[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}" placeholder="Name" required>
            </div>
            <div class="form phone">
              <input class="input_phone" type="tel" pattern="[\+][0-9]{9,}" placeholder="Phone number" required>
            </div>
            <div class="form address">
              <input class="input_address" type="text" placeholder="Delivery address" required>
            </div>
            <div class="form email">
              <input class="input_email" type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" placeholder="Email" required>
            </div>
          </div>

          <div class="bank_card">
            <h2 class="card_name">Credit card details</h2>
            <div class="bank_card_data">

              <div class="bank_card_number">
                <div class="card_img"></div> 
                <input class="card_number" type="text" pattern="[0-9]{16}" placeholder="Card number" required>
              </div>

              <div class="bank_card_date">
                <div class="card_date">Valid:
                <input class="card_date_input" type="text" pattern="[0-9]{2}[\/][0-9]{2}" placeholder="Valid date" required> 
                </div>
                <div class="card_cvv">CVV:
                <input class="card_cvv_input" type="text" pattern="[0-9]{3}" placeholder="CVV" required> 
                </div>  
              </div>

            </div>
          </div>
            <button class="button-card" type="submit">CONFIRM</button>
        </div>
      </div>
    
  `;
  document.body.classList.add('body_hidden');
  document.body.append(overlay);  
  overlay.addEventListener('click', closeBuyProduct);
  
  const name = <HTMLInputElement>document.querySelector('.input_name');
  // name.addEventListener('click', checkName);

  const btnConfirm = <HTMLButtonElement>document.querySelector('.button-card');
  btnConfirm.addEventListener('click', completPuchase);
}

function closeBuyProduct() {
  const overlay = <HTMLElement>document.querySelector('.overlay');
  document.body.classList.remove('body_hidden');
  overlay.remove(); 
}

function completPuchase() {
  const modal = <HTMLElement>document.querySelector('.modal_content');
  modal.innerHTML = `<h1 class="confimed">Your order has been placed!</h1>`;
  localStorage.clear();
  setTimeout(() => {
    closeBuyProduct();
    window.location.href = "/#"
  }, 3000);
}


export default renderBuyProduct;