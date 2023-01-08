import './footer.scss';
class Footer {
  render(): void {
    const footer = <HTMLElement>document.querySelector('footer');
    const html = `
           <div class="footer__inner">
             <div class="copirite">
               <span class="fot">©</span>
               <span class="fot">2022</span>
               <span class="fot"><a class="fot-link" href="https://github.com/AlexxxSok"  target="_blank">github</a></span>
             </div>
             <div class="shcool">
               <a href="https://rs.school/js/" target="_blank">
               <img class= "footer-rs" src="./assets/svg/rss.svg" alt="rs school">
               </a>
             </div>
           </div>`;
    footer.innerHTML = html;
  }
}

export default Footer;
