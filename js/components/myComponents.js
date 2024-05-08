class H7 extends HTMLElement{
  
  constructor(){
    super();
    this.attachShadow({mode:"open"})
    this.shadowRoot.innerHTML =/*html*/`
    <link rel="stylesheet" href="css/myComponent.css">
    <div class="h7">7</div>
    `; 
  }
}
customElements.define("my-h7", H7)

