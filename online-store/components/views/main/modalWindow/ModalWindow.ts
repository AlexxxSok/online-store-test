import './modalWindow.scss';

class ModalWindow {
  renderModalWindow(): void {
    const render = <HTMLElement>document.querySelector('.render');
    const modal: HTMLDivElement = document.createElement('div');
    modal.className = 'modal__window';
    modal.innerHTML = 'Error 404, this page not found!!! ';
    render.append(modal);
  }
}

export default ModalWindow;
