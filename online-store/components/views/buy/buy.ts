import './buy.scss';

function renderBuyProduct() {
  const overlay = document.createElement('div');
  overlay.className = "overlay";
  overlay.innerHTML = `
    <div class="buy" onclick="event.stopPropagation()">
      <h2 class="buy-title">Personal details </h2>
      <div class="buy-item">
        <input class="buy-item_input" type="text" placeholder="Name" name="" id="">
      </div>
      <div class="buy-item">
        <input class="buy-item_input" type="text" placeholder="Delivery address" name="" id="">
      </div>
      <div class="buy-item">
        <input class="buy-item_input" type="tel" placeholder="Phone" name="" id="">
      </div>
      <div class="buy-item">
        <input class="buy-item_input" type="email" placeholder="E-mail" name="" id="">
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