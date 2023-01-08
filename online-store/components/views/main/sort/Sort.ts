import './sort.scss';
class Sort {
  sort: HTMLDivElement;

  search: HTMLDivElement;

  constructor() {
    this.sort = document.createElement('div');
    this.search = document.createElement('div');
  }

  addSort(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.sort.className = 'sort';
    const html = `
      <form action="" method="post">
        <p>Sort by</p>
        <select class="select">
          <option selected value="1" class="Lowest">Price Lowest</option>
          <option value="2" class="Highest">Price Highest</option>
          <option value="3" class="A">Name A-Z</option>
          <option value="4" class="Z">Name Z-A</option>
       </select>
      </form>`;

    this.sort.innerHTML = html;
    render.append(this.sort);
  }

  addSearch(): void {
    const render = <HTMLDivElement>document.querySelector('.render');
    this.search.className = 'search';
    const html = `<p>Search</p>
      <input placeholder="Enter text" type="search" class="search-input" value>`;
    this.search.innerHTML = html;
    this.search.focus();
    render.append(this.search);
  }
}

export default Sort;
