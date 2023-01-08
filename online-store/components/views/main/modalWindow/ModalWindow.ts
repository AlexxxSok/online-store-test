import './modalWindow.scss';

class ModalWindow {
  renderModalWindow(): void {
    const main = <HTMLElement>document.querySelector('main');
    const modal: HTMLDivElement = document.createElement('div');
    modal.className = 'modal__window';
    modal.innerHTML = 'Error 404, this page not found!!! ';
    main.append(modal);
  }
}

export default ModalWindow;
