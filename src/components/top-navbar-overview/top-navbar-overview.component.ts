import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';

const componentCSS = require('./top-navbar-overview.component.scss');

@customElement('top-navbar-overview')
class AppComponent extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  render() {
    return html`
  <div class="container shadow">
    <h2>bronco-top-navbar <a style="float:right" target="_blank" title="Live demo" href="https://codepen.io/marius2502/pen/gNyWWV">
        TODO<i class="material-icons" target="_blank" href="https://codepen.io/marius2502/pen/gNyWWV">launch</i>

      </a></h2>
    <div class="row">
      <div class="col justify-content-center align-center">
        <div class="componentInfo">
          <span class="comment">&lt!-- Detailed Documentation on <a class="comment" target="_blank" href="https://github.com/marius2502/bronco-top-navbar"
              class="attributeName"><strong>Github</strong></a> --></span>
          <br>
          <br>
          <span class="tag">&ltbronco-top-navbar
            <span class="attribute">hideOnTop=<span class="attributeName">"false"</span></span>
          </span>
          <span class="tag">></span>

          <br>
          <br>
          <span class="tag">&lth5<span class="attribute"> slot=<span class="attributeName">"left"</span></span>>
          </span>
          <span style="color:white">
            Left slot
          </span>
          <span class="tag">&lt/h5></span>


          <br>
          <br>
          <span class="tag">&ltbronco-searchbar<span class="attribute"> slot=<span class="attributeName">"center"</span></span>>
          </span>
          <span style="color:white">
            Left slot
          </span>
          <span class="tag">&lt/bronco-searchbar></span>
          <br>
          <br>

          <span class="tag">&ltimg
            <span class="attribute">
              slot=<span class="attributeName">"right"</span>
              src=<span class="attributeName">"https://thispersondoesnotexist.com/image"</span>
            </span>
            >
          </span>


          <br>
          <br>
          <span class="tag">&lt/bronco-top-navbar></span>
          <br>
          <br>

          <!-- Styling -->
          <span class="tag">&ltstyle></span>
          <br>
          <span style="color:white">
            <br>
            <span class="tag">bronco-top-navbar<span style="color:white"> {</span></span>
            <br>
            <span class="attribute">--position: <span class="attributeName">relative;</span></span>
            <br>
            <span style="color:white">}</span>
            <br>
            <br>
            <span class="tag">&lt/style></span>
          </span>
        </div>
      </div>
      <div class="col justify-content-center align-center my-5">
        <div style="width: 100%; height: 100px">
          <bronco-top-navbar>
            <h5 slot="left">Left slot</h5>
            <bronco-searchbar slot="center" .searchArray=${['Item1', 'Item2' , 'Item3' ]}></bronco-searchbar>
            <img slot="right" src="https://thispersondoesnotexist.com/image"></h5>
          </bronco-top-navbar>
        </div>
      </div>
    </div>
  </div>
`;
  }

}
