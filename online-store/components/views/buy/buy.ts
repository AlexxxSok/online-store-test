import './buy.scss';

function renderBuyProduct() {
  const overlay = document.createElement('div');
  overlay.className = "overlay";
  overlay.innerHTML = `    
      <div class="modal_content" id="summary" onclick="event.stopPropagation()>
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
            <button class="button-card" type="submit">CONFIRM</button>
        </div>
      </div>
    
  `;
  document.body.classList.add('body_hidden');
  document.body.append(overlay);  
  overlay.addEventListener('click', closeBuyProduct);
  
}

function closeBuyProduct() {
  const overlay = <HTMLElement>document.querySelector('.overlay');
  document.body.classList.remove('body_hidden');
  overlay.remove(); 
}

// function showModal(content) {  
//   let overlay = document.createElement('div');
//   overlay.className = "overlay";
//   overlay.innerHTML = `
//   <div class="win" onclick="event.stopPropagation()">
//     <div class="close">
//       <img class="modal-close" src="./src/assets/x_icon.png" alt="close">        
//     </div>
//     ${content}
//   </div>`;

//   document.body.append(overlay);
//   let closeIcon = document.querySelector('.close');
//   overlay.addEventListener('click', closeResults);
//   closeIcon.addEventListener('click', closeResults);
// }

export default renderBuyProduct;