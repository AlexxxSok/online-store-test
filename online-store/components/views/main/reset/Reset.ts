import './reset.scss';
class Reset {
  resetFilters: HTMLDivElement;

  resetSettings: HTMLDivElement;

  constructor() {
    this.resetFilters = document.createElement('div');
    this.resetSettings = document.createElement('div');
  }

  addResetFilters(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.resetFilters.className = 'reset-filters';
    const content = `<input type="button" value="Reset filters">`;
    this.resetFilters.innerHTML = content;
    render.append(this.resetFilters);
  }

  addResetSetting(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.resetSettings.className = 'reset-setting';
    const content = `<input type="button" value="Reset settings">`;
    this.resetSettings.innerHTML = content;
    render.append(this.resetSettings);
  }
}

export default Reset;
