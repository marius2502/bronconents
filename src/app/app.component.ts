import { css, customElement, html, LitElement, property, unsafeCSS, queryAll, query } from 'lit-element';
import { router } from './../services/router';

const componentCSS = require('./app.component.scss');

const logoImg = require('./../assets/logo2.png');
const logoSvg = require('./../assets/logo.svg');

/**
 * @author Marius Bongarts
 * Root web component
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  static styles = css`${unsafeCSS(componentCSS)}`;

  @property()
  path: string = router.getPath();

  @property()
  components = ['bronco-button', 'bronco-corner-navbar', 'bronco-left-navbar', 'bronco-searchbar', 'bronco-side-navbar', 'bronco-template', 'bronco-top-navbar'];

  @property()
  navItems = ['Get started', 'Components'];

  firstUpdated() {
    router.subscribe((path: string) => {
      this.path = path;
      this.requestUpdate();
    });
  }

  renderRouterOutlet() {
    const path = router.getPath();
    switch (path.toLowerCase()) {
      case 'home':
        return html`<landing-page></landing-page>`;
      case 'components':
        return html`<components-page></components-page>`;
      default:
        return html`<landing-page></landing-page>`;
    }
  }

  render() {
    return html`
    <bronco-template .hideNavForever=${this.path != 'components'.toLowerCase()}>
          <div slot="header">
            <bronco-top-navbar .navItems=${this.navItems} .hideOnNotTop=${false}
            @selected=${(e: CustomEvent) => this.navItems.find(item => item === e.detail) ? router.navigate(e.detail.toLowerCase()) : ''}>

              <img src="${logoSvg}" slot="left" tabindex="0" @click=${()=> router.navigate('home')}>

              <bronco-searchbar
          .searchArray=${this.components}
          @selected=${(e: CustomEvent) => router.navigate('components?component=' + e.detail)} slot="center"></bronco-searchbar>


              <a slot="right" href="https://github.com/marius2502/bronconents" target="_blank"><svg class="octicon octicon-mark-github v-align-middle"
                  height="100%" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg></a>

            </bronco-top-navbar>
          </div>

          <div slot="nav">
            <bronco-side-navbar .hideOnMobile=${false} .navItems=${this.components} @selected=${(e:
              CustomEvent)=>
              router.navigate('components?component=' + e.detail)}}>
            </bronco-side-navbar>
          </div>

          <div slot="main">
          ${this.renderRouterOutlet()}
          </div>
        </bronco-template>

`;
  }

}