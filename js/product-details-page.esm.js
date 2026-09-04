import{j as z,y as r,f as E,g as c,t as L,h as B,k as A}from"../chunks/lit-WqMxC_PA.esm.js";import{u as b,A as W,_ as M,i as k,d as D,a as G}from"../chunks/localize-Btu9xYcE.esm.js";import{D as R,W as y,j as _,S as j}from"../chunks/routes-DbSRg8Jw.esm.js";import{c as O,d as H,e as U}from"../chunks/enforce-config-CZ3ToOgr.esm.js";import{c as K}from"../chunks/responsive-BR8qUfBa.esm.js";import"../chunks/vendor-KKSARHWL.esm.js";import{p as N}from"../chunks/promo-pill-label-CbW_Vcru.esm.js";import{formatStoreAndReturnPromoCodes as V,isEmptyPromoData as q,parseJsonStringArray as J,getPromoCodesFromCart as Y,setPromoCodesInLocalStorage as Z,setPromoCodeInCookie as Q}from"../utils/promoManager.esm.js";import{B as X}from"../chunks/cart-contents-DkoytiZh.esm.js";import{createScopedLocalStorage as ee}from"../utils/local-storage.esm.js";import{makeApiKeyHeader as te}from"../utils/makeApiKeyHeader.esm.js";import{f as w,a as S}from"../chunks/events-Dki0ka4F.esm.js";import{getBeamCartId as oe}from"../utils/cart.esm.js";import"../chunks/beam-errors-Ci0d3926.esm.js";import"../utils/logger.esm.js";import"../chunks/promo-types-DKAOFHJr.esm.js";import"../utils/cookies.esm.js";const ae=(n="",{borderRadius:e="0px",borderStyle:t="unset",borderColor:o="#000000",borderWidth:i="1px"}={})=>{const a=n.startsWith("--beam-")?n:`--beam-${n}`;return{[`${a}-borderRadius`]:e,[`${a}-borderStyle`]:t,[`${a}-borderColor`]:o,[`${a}-borderWidth`]:i}},ie=(n="",{borderRadius:e="0px",borderStyle:t="unset",borderColor:o="#000000",borderWidth:i="1px"}={})=>{const a=n.startsWith("--beam-")?n:`--beam-${n}`;return z(`        border-radius: var(${a}-borderRadius, ${e});
        border-style: var(${a}-borderStyle, ${t});
        border-color: var(${a}-borderColor, ${o});
        border-width: var(${a}-borderWidth, ${i});
    `)},re=()=>r` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  part="svg"
>
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M12 16v-4"></path>
  <path d="M12 8h.01"></path>
</svg>`,v={en:{ctaTitle:()=>"Choose Your Impact",ctaMessage:()=>"At no extra cost, 1% of every order will be donated to a nonprofit you choose. Add to cart to choose. Powered by Beam",inlineSeparator:()=>":"},fr:{ctaTitle:()=>"Choisissez votre impact",ctaMessage:()=>"Sans frais suppl\xE9mentaires, 1 % de chaque commande est revers\xE9 \xE0 l'association de votre choix. Ajoutez au panier pour choisir. Propuls\xE9 par Beam.",inlineSeparator:()=>":"},es:{ctaTitle:()=>"Elige tu impacto",ctaMessage:()=>"Sin coste adicional, el 1 % de cada pedido se dona a la organizaci\xF3n sin \xE1nimo de lucro que elijas. A\xF1\xE1delo al carrito para elegir. Impulsado por Beam.",inlineSeparator:()=>":"},de:{ctaTitle:()=>"W\xE4hlen Sie Ihren Impact",ctaMessage:()=>"Ohne zus\xE4tzliche Kosten wird 1 % jeder Bestellung an eine von Ihnen gew\xE4hlte gemeinn\xFCtzige Organisation gespendet. Zum Warenkorb hinzuf\xFCgen, um auszuw\xE4hlen. Unterst\xFCtzt von Beam.",inlineSeparator:()=>":"},it:{ctaTitle:()=>"Scegli il tuo impatto",ctaMessage:()=>"L'1 % di ogni acquisto viene donato, senza alcun costo aggiuntivo, a un'organizzazione no-profit a tua scelta. Aggiungi al carrello per scegliere. Promosso da Beam.",inlineSeparator:()=>":"},pl:{ctaTitle:()=>"Wybierz sw\xF3j wp\u0142yw",ctaMessage:()=>"1 % warto\u015Bci ka\u017Cdego zam\xF3wienia przekazywany jest na wybran\u0105 przez Ciebie organizacj\u0119 non-profit \u2013 bez dodatkowych koszt\xF3w. Dodaj do koszyka, aby wybra\u0107. Obs\u0142ugiwane przez Beam.",inlineSeparator:()=>":"}};var se=Object.defineProperty,d=(n,e,t,o)=>{for(var i=void 0,a=n.length-1,l;a>=0;a--)(l=n[a])&&(i=l(e,t,i)||i);return i&&se(e,t,i),i};const le="--beam-ProductDetailsPage-imageUrl";class s extends B{constructor(){super(...arguments),this.baseUrl=R,this.lang="en",this.draftConfig=!1,this.debug=!1,this.localStorage=ee(this),this.pluginPromoCodes=[],this.handlePromoCodesStored=e=>{const t=(e.detail.promoCodes?.unvalidatedPromoCodes??[]).map(o=>o.attributes?.value??o.attributes?.url??"").sort();this.pluginPromoCodes=t},this.postProductDetailsPageData=async()=>{U(["apiKey","storeId"],this);const e=oe(X,{apiKey:this.apiKey}),t=this.getManualPromoCodes(),o=V(t.map(l=>({value:l})),this.apiKey),i=o&&!q(o);i&&this.dispatchEvent(new w({source:y.product_details_page}));const a=await _({baseUrl:this.baseUrl,headers:te(this.apiKey),queryParams:{version:"1.0.0",lang:this.configLang,storeId:this.storeId,widgetName:y.product_details_page,draftConfig:this.draftConfig,remoteProductIdentifier:this.remoteProductIdentifier},requestBody:{...i&&{promos:o},beamCartId:e||void 0}});return this.handleValidatedPromoCodes(a),a},this.productDetailsPageDataController=new W(this,this.postProductDetailsPageData)}get configLang(){return j[this.lang]||"en"}get parsedPromoCodes(){return J(this.promoCodes)}getManualPromoCodes(){if(this.parsedPromoCodes&&this.parsedPromoCodes.length>0)return this.parsedPromoCodes;const e=this.localStorage.getItemJson("cart");return e?Y(e):[]}async handleValidatedPromoCodes(e){e.promos?.validatedPromoCodes&&(await Promise.all([Z({apiKey:this.apiKey,promoCodes:{validatedPromoCodes:e.promos.validatedPromoCodes,unvalidatedPromoCodes:[]}}),Q({validatedPromoCodes:e.promos.validatedPromoCodes,domain:this.domain})]),this.dispatchEvent(new w({source:y.product_details_page})))}async firstUpdated(){window.addEventListener(S.eventName,this.handlePromoCodesStored)}disconnectedCallback(){window.removeEventListener(S.eventName,this.handlePromoCodesStored),super.disconnectedCallback()}async updated(e){const t=["storeId","baseUrl","lang","apiKey","pluginPromoCodes","promoCodes"];this.pluginPromoCodes;for(const o of t)if(e.has(o)){await this.productDetailsPageDataController.exec();break}}render(){const{data:e,loading:t}=this.productDetailsPageDataController,o=this.cssVariables["--beam-ProductDetailsPage-image-placement"],i=P=>P!=="0px"&&P!=="0",a=this.cssVariables["--beam-ProductDetailsPage-shouldDisplayPromoPill"]==="true",l=!!e?.config?.web?.promo,p=i(this.cssVariables["--beam-ProductDetailsPage-imageHeight"]),h=i(this.cssVariables["--beam-ProductDetailsPage-title-fontSize"]),g=a&&l&&p&&h,m=this.cssVariables["--beam-ProductDetailsPage-shouldDisplayColon"]==="true";return t?r``:e==null?this.debug?M({error:new Error("No data")}):"":r`
      <style>
        :host {
          ${this.cssVariables.toCSS()}
        }
      </style>
      <div
        class="root ${o==="block-center"?"block-display":"inline-display"}"
        aria-label="product detail page Beam component"
      >
        ${o==="block-center"?r`
              ${this.renderWidgetIcon(o)}
              ${g?r`
                    <div class="promo-container">
                      <beam-promo-info-pill .promo=${e?.config?.web?.promo}></beam-promo-info-pill>
                    </div>
                  `:r``}
              <div class="info-container">${this.renderContent(g,m,e)}</div>
            `:r`
              ${g?r`
                    <div class="promo-container">
                      <beam-promo-info-pill .promo=${e?.config?.web?.promo}></beam-promo-info-pill>
                    </div>
                  `:r``}
              <div class="content-inline">
                ${this.renderWidgetIcon(o)}
                <div class="info-container">${this.renderContent(g,m,e)}</div>
              </div>
            `}
      </div>
    `}renderWidgetIcon(e){const t=this.cssVariables[le];return t?r`
      <span class="icon-container" part="icon" ${e==="block-center"?'style="order:1"':""}>
        <img src=${t} part="icon" aria-hidden="true" alt="" />
      </span>
    `:r``}renderContent(e,t,o){const i=k(this.configLang,o?.config?.web?.title)||v[this.configLang].ctaTitle(),a=k(this.configLang,o?.config?.web?.description)||v[this.configLang].ctaMessage();return e?r`
          <div class="info-inline-promo">
            <span class="title">${i+(t?v[this.configLang].inlineSeparator():"")}</span>
            <span class="description"> <span>${a}</span> ${this.renderDisclosureTooltip()} </span>
          </div>
        `:r`
          <div class="title-block">
            <h3 class="title">${i}</h3>
          </div>
          <div class="description-block">
            <span class="description"> <span>${a}</span> ${this.renderDisclosureTooltip()} </span>
          </div>
        `}renderCloseTooltipIcon(){return r`<svg
      aria-hidden="true"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.40836 5.40811L1.48828 1.48804M5.40836 5.40811L9.32843 9.32819M5.40836 5.40811L9.32843 1.48804M5.40836 5.40811L1.48828 9.32819"
        stroke="white"
        stroke-width="1.56803"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg> `}renderDisclosureTooltip(){let e,t;const o=()=>document.activeElement?.tagName.toLowerCase()===this.tagName.toLowerCase(),i=()=>{clearTimeout(t),t=setTimeout(()=>{this.renderRoot.querySelector(".ppgf-disclosure-tooltip-content")?.setAttribute("aria-hidden","true")},50)},a=()=>{clearTimeout(t),this.renderRoot.querySelector(".ppgf-disclosure-tooltip-content")?.setAttribute("aria-hidden","false")},l=({skipDelay:u=!1,keepOpenIfFocused:f=!1})=>{clearTimeout(e),e=setTimeout(()=>{f&&o()||this.renderRoot.querySelector(".ppgf-disclosure-tooltip")?.hide()},u?0:300)},p=()=>{clearTimeout(e),this.renderRoot.querySelector(".ppgf-disclosure-tooltip")?.show()},h=({skipDelay:u=!1,keepOpenIfFocused:f=!1})=>{const x=this.renderRoot.querySelector(".ppgf-disclosure-tooltip");x&&(x.open?l({skipDelay:u,keepOpenIfFocused:f}):p())},g=()=>{p()},m=()=>{l({skipDelay:!1,keepOpenIfFocused:!0})},P=()=>{p()},$=()=>{p()},I=()=>{l({skipDelay:!1,keepOpenIfFocused:!1})},F=u=>{if(u.key==="Enter"||u.key===" "){h({skipDelay:!0,keepOpenIfFocused:!1});return}l({skipDelay:!0,keepOpenIfFocused:!0})},T=()=>{l({skipDelay:!0,keepOpenIfFocused:!1})},C=this.productDetailsPageDataController.data?.ppgfDisclosure;return C?r`<sl-tooltip
          class="ppgf-disclosure-tooltip"
          part="tooltip"
          trigger="manual"
          tabindex="0"
          @mouseenter="${$}"
          @mouseleave="${I}"
          @keydown="${F}"
          @sl-after-hide="${i}"
          @sl-after-show="${a}"
        >
          <div
            class="ppgf-disclosure-tooltip-content"
            id="BeamPPGFDisclosure"
            slot="content"
            part="tooltip-content"
            aria-hidden="true"
          >
            <button
              class="ppgf-disclosure-close"
              role="button"
              aria-label="Close tooltip"
              part="tooltip-close-button"
              @click="${T}"
            >
              ${this.renderCloseTooltipIcon()}
            </button>
            <div class="ppgf-disclosure-tooltip-copy" part="tooltip-disclosure-copy">
              ${A(C.copy)}
            </div>
          </div>
          <span
            class="ppgf-disclosure-tooltip-trigger"
            part="tooltip-disclosure-icon"
            aria-label="More Information"
            role="button"
            tabindex="0"
            @focus="${g}"
            @blur="${m}"
            @click="${P}"
          >
            <div class="ppgf-disclosure-tooltip-trigger-mask d-lg-none"></div>
            <sl-button
              variant="text"
              size="small"
              class="ppgf-disclosure-tooltip-trigger"
              part="tooltip-disclosure-button"
              aria-hidden="true"
              tabindex="-1"
              circle
            >
              ${re()}
            </sl-button>
          </span>
        </sl-tooltip>`:r``}get cssVariables(){const e={"--beam-ProductDetailsPage-imageWidth":"24px","--beam-ProductDetailsPage-imageHeight":"24px","--beam-ProductDetailsPage-maxWidth":"346px","--beam-ProductDetailsPage-paddingTop":"8px","--beam-ProductDetailsPage-paddingRight":"12px","--beam-ProductDetailsPage-paddingBottom":"8px","--beam-ProductDetailsPage-paddingLeft":"15px","--beam-ProductDetailsPage-InfoContainer-marginLeft":"8px","--beam-ProductDetailsPage-InfoContainer-textAlign":"inherit","--beam-ProductDetailsPage-InfoContainer-lineHeight":"15px","--beam-ProductDetailsPage-InfoContainer-marginTop":"4px","--beam-ProductDetailsPage-backgroundColor":"unset","--beam-ProductDetailsPage-TooltipIcon-width":"10px","--beam-ProductDetailsPage-TooltipIcon-color":"inherit","--beam-ProductDetailsPage-PPGFDisclosure-backgroundColor":"#000000","--beam-ProductDetailsPage-PPGFDisclosure-paddingTop":"10px","--beam-ProductDetailsPage-PPGFDisclosure-paddingRight":"8px","--beam-ProductDetailsPage-PPGFDisclosure-paddingBottom":"10px","--beam-ProductDetailsPage-PPGFDisclosure-paddingLeft":"8px","--beam-ProductDetailsPage-PPGFDisclosureHyperlink-color":"#5CA3FF",...D("--beam-ProductDetailsPage-title",{fontSize:"12px",fontWeight:"bold"}),"--beam-ProductDetailsPage-title-textAlign":"left",...D("--beam-ProductDetailsPage-description",{marginTop:"0px",fontSize:"12px",lineHeight:"15px"}),"--beam-ProductDetailsPage-description-textAlign":"left",...D("--beam-ProductDetailsPage-PPGFDisclosureTooltipContent",{fontSize:"12px",lineHeight:"16px",color:"#FFFFFF"}),...ae("--beam-ProductDetailsPage"),"--beam-ProductDetailsPage-close-display":"initial","--beam-ProductDetailsPage-close-padding":"0","--beam-ProductDetailsPage-image-placement":"inline-left","--beam-ProductDetailsPage-blockImage-alignSelf":"center","--beam-ProductDetailsPage-promoPill-marginTop":"4px","--beam-ProductDetailsPage-promoPill-alignSelf":"left","--beam-ProductDetailsPage-shouldDisplayColon":"true","--beam-ProductDetailsPage-shouldDisplayPromoPill":"true",...N},t=this.productDetailsPageDataController?.data?.config?.web?.theme||{},o={...e,...t};return Object.assign(Object.create({toCSS(){return G(this)}}),o)}}s.tagName="beam-product-details-page",s.styles=[O,K,E`
      :host {
        font-family: var(--beam-fontFamily);
        font-style: var(--beam-fontStyle);
        font-size: var(--beam-fontSize);
        background-color: var(--beam-backgroundColor);
        color: var(--beam-textColor);
        max-width: var(--beam-ProductDetailsPage-maxWidth);
        word-break: normal;
        display: block;
      }
      .root {
        padding-top: var(--beam-ProductDetailsPage-paddingTop);
        padding-right: var(--beam-ProductDetailsPage-paddingRight);
        padding-bottom: var(--beam-ProductDetailsPage-paddingBottom);
        padding-left: var(--beam-ProductDetailsPage-paddingLeft);
        width: 100%;
        background-color: var(--beam-ProductDetailsPage-backgroundColor);
        display: flex;
        flex-direction: column;
        ${ie("--beam-ProductDetailsPage")}
      }
      /* When iconDisplay is inline-center */
      .inline-display {
        display: flex;
      }
      /* When iconDisplay is block-center */
      .block-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .promo-container {
        order: 2;
        display: flex;
        margin-top: var(--beam-ProductDetailsPage-promoPill-marginTop);
        align-self: var(--beam-ProductDetailsPage-promoPill-alignSelf);
      }
      .content-inline {
        order: 3;
        display: flex;
        align-items: center;
      }
      /* Info block for both inline and block layout */
      .info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: var(--beam-ProductDetailsPage-InfoContainer-textAlign);
        line-height: var(--beam-ProductDetailsPage-InfoContainer-lineHeight);
        margin-top: var(--beam-ProductDetailsPage-InfoContainer-marginTop);
        margin-left: var(--beam-ProductDetailsPage-InfoContainer-marginLeft);
      }
      .block-display .info-container {
        order: 3;
      }
      .root.inline-display .icon-container,
      .root.inline-display .info-container {
        display: inline-flex;
      }
      .root.inline-display {
        flex-direction: column;
      }
      .icon-container {
        width: var(--beam-ProductDetailsPage-imageWidth);
        height: var(--beam-ProductDetailsPage-imageHeight);
        align-self: var(--beam-ProductDetailsPage-blockImage-alignSelf);
        flex-shrink: 0;
      }
      .icon-container > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .title {
        ${b("--beam-ProductDetailsPage-title")}
      }
      .title-block {
        text-align: var(--beam-ProductDetailsPage-title-textAlign);
        line-height: var(--beam-ProductDetailsPage-title-lineHeight);
      }
      .info-inline-promo {
        margin-top: var(--beam-ProductDetailsPage-description-marginTop, 0px);
      }
      .description {
        ${b("--beam-ProductDetailsPage-description")}
      }
      .description-block {
        text-align: var(--beam-ProductDetailsPage-description-textAlign);
        line-height: var(--beam-ProductDetailsPage-description-lineHeight);
        ${b("--beam-ProductDetailsPage-description")}
      }
      .ppgf-disclosure-tooltip {
        --max-width: 268px;
      }
      .ppgf-disclosure-tooltip::part(body) {
        background-color: var(--beam-ProductDetailsPage-PPGFDisclosure-backgroundColor);
        padding-top: var(--beam-ProductDetailsPage-PPGFDisclosure-paddingTop);
        padding-right: var(--beam-ProductDetailsPage-PPGFDisclosure-paddingRight);
        padding-bottom: var(--beam-ProductDetailsPage-PPGFDisclosure-paddingBottom);
        padding-left: var(--beam-ProductDetailsPage-PPGFDisclosure-paddingLeft);
      }
      .ppgf-disclosure-tooltip::part(base__arrow) {
        background-color: var(--beam-ProductDetailsPage-PPGFDisclosure-backgroundColor);
      }
      .ppgf-disclosure-tooltip-content {
        display: flex;
        flex-direction: column;
        ${b("--beam-ProductDetailsPage-PPGFDisclosureTooltipContent")}
      }
      .ppgf-disclosure-tooltip-copy > a,
      .ppgf-disclosure-close {
        pointer-events: auto;
        cursor: pointer;
        color: var(--beam-ProductDetailsPage-PPGFDisclosureHyperlink-color);
      }
      .ppgf-disclosure-close {
        display: var(--beam-ProductDetailsPage-close-display);
        padding: var(--beam-ProductDetailsPage-close-padding);
        height: 12px;
        background: none;
        border: none;
        margin-left: auto;
      }
      .ppgf-disclosure-tooltip-copy > a:visited {
        color: var(--beam-ProductDetailsPage-PPGFDisclosureHyperlink-color);
      }
      .ppgf-disclosure-tooltip-trigger {
        position: relative;
      }
      .ppgf-disclosure-tooltip-trigger-mask {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(var(--beam-ProductDetailsPage-TooltipIcon-width) + 20px);
        height: calc(var(--beam-ProductDetailsPage-TooltipIcon-width) + 20px);
      }
      .ppgf-disclosure-tooltip-trigger::part(base) {
        line-height: 1;
        border: none;
        min-height: 0;
        min-width: 0;
        width: auto;
        color: var(--beam-ProductDetailsPage-TooltipIcon-color);
      }
      .ppgf-disclosure-tooltip-trigger::part(label) {
        padding: 0;
      }
      .ppgf-disclosure-tooltip-trigger > svg {
        width: var(--beam-ProductDetailsPage-TooltipIcon-width);
        color: var(--beam-ProductDetailsPage-TooltipIcon-color);
        height: auto;
      }
    `],d([c({type:String,reflect:!0})],s.prototype,"baseUrl"),d([c({type:String,reflect:!1})],s.prototype,"apiKey"),d([c({type:Number})],s.prototype,"storeId"),d([c({type:String})],s.prototype,"lang"),d([c({type:Boolean})],s.prototype,"draftConfig"),d([c({type:Boolean})],s.prototype,"debug"),d([c({type:String})],s.prototype,"remoteProductIdentifier"),d([c({type:String})],s.prototype,"promoCodes"),d([c({type:String})],s.prototype,"domain"),d([L()],s.prototype,"pluginPromoCodes"),H(s);export{s as BeamProductDetailsPage};
//# sourceMappingURL=product-details-page.esm.js.map
