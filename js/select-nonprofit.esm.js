import{h as $,f as L,y as d,g as f,t as z,q as v,u as q,m as E,k as V}from"../chunks/lit-WqMxC_PA.esm.js";import{i as J,d as G}from"../chunks/lodash-D3TLHRR_.esm.js";import{u as S,A as D,d as h,a as Q,_ as A,i as m}from"../chunks/localize-Btu9xYcE.esm.js";import{D as X,W as y,d as Y,h as Z,S as ee}from"../chunks/routes-DbSRg8Jw.esm.js";import{p as te}from"../chunks/progress-bar-DF7UuuHb.esm.js";import{p as oe}from"../chunks/promo-pill-label-CbW_Vcru.esm.js";import{c as ie,d as ne,e as P}from"../chunks/enforce-config-CZ3ToOgr.esm.js";import{_ as ae}from"../chunks/loading-template-DG4lkIIc.esm.js";import{f as B,c as re,k as se,i as I,j as le,g as T,a as M}from"../chunks/events-Dki0ka4F.esm.js";import{logger as ce}from"../utils/logger.esm.js";import{createScopedLocalStorage as pe}from"../utils/local-storage.esm.js";import{formatStoreAndReturnPromoCodes as de,isEmptyPromoData as fe,parseJsonStringArray as me,getPromoCodesFromCart as ge,setPromoCodesInLocalStorage as he,setPromoCodeInCookie as be}from"../utils/promoManager.esm.js";import{c as ue}from"../chunks/responsive-BR8qUfBa.esm.js";import{B as F}from"../chunks/cart-contents-DkoytiZh.esm.js";import{getBeamCartId as K,getExternalCartId as W}from"../utils/cart.esm.js";import"../chunks/beam-errors-Ci0d3926.esm.js";import"../chunks/promo-types-DKAOFHJr.esm.js";import"../chunks/vendor-KKSARHWL.esm.js";import"../utils/cookies.esm.js";class Se extends ${static get styles(){return L`
      :host {
      }

      .notification-blip {
        background-color: var(--beam-notificationBlip-color-background, #000);
        border-radius: 50%;
        width: 12px;
        height: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
      }
    `}render(){return d`<div
      class="notification-blip-container"
      part="notification-blip-container"
      aria-label="Notification Blip"
    >
      <span class="notification-blip" part="notification-blip" role="button" tabindex="0" aria-hidden="true"></span>
    </div>`}}customElements.get("beam-notification-blip")||customElements.define("beam-notification-blip",Se);const Ne={"--beam-notificationBlip-color-background":"#000"},g={en:{beamAttribution:()=>"Powered by Beam",ctaTitle:()=>"Choose your impact",ctaPromoPrefixMessage:()=>"At no extra cost,",ctaPromoMessage:({donationPercentage:o="1"}={})=>`select a nonprofit and ${o}% will be donated for you.`,ctaMessage:({donationPercentage:o="1"}={})=>`At no extra cost, select a nonprofit and ${o}% will be donated for you.`,inlineSeparator:()=>": "},fr:{beamAttribution:()=>"Optimis\xE9 par Beam",ctaTitle:()=>"Choisissez votre cause",ctaPromoPrefixMessage:()=>"Sans frais suppl\xE9mentaires,",ctaPromoMessage:({donationPercentage:o="1"}={})=>`s\xE9lectionnez une association et ${o} % sera revers\xE9 en votre nom.`,ctaMessage:({donationPercentage:o="1"}={})=>`Sans frais suppl\xE9mentaires, choisissez une association et ${o} % de votre commande sera revers\xE9 en votre nom.`,inlineSeparator:()=>" : "},de:{beamAttribution:()=>"Unterst\xFCtzt von Beam",ctaTitle:()=>"W\xE4hle deine Wirkung",ctaPromoPrefixMessage:()=>"Ohne zus\xE4tzliche Kosten,",ctaPromoMessage:({donationPercentage:o="1"}={})=>`w\xE4hle eine Organisation und ${o}% deines Einkaufs werden gespendet.`,ctaMessage:({donationPercentage:o="1"}={})=>`Ohne zus\xE4tzliche Kosten kannst du eine gemeinn\xFCtzige Organisation ausw\xE4hlen und ${o}% deiner Bestellung werden gespendet.`,inlineSeparator:()=>": "},es:{beamAttribution:()=>"Ofrecido por Beam",ctaTitle:()=>"Elige tu impacto",ctaPromoPrefixMessage:()=>"Sin coste adicional,",ctaPromoMessage:({donationPercentage:o="1"}={})=>`elige una organizaci\xF3n y donaremos el ${o}% en tu nombre.`,ctaMessage:({donationPercentage:o="1"}={})=>`Sin coste adicional, elige una organizaci\xF3n sin fines de lucro y donaremos el ${o}% de tu compra en tu nombre.`,inlineSeparator:()=>": "},it:{beamAttribution:()=>"Gestito da Beam",ctaTitle:()=>"Scegli il tuo impatto",ctaPromoPrefixMessage:()=>"Senza costi aggiuntivi,",ctaPromoMessage:({donationPercentage:o="1"}={})=>`scegli un'organizzazione e doneremo l\u2019${o}% per te.`,ctaMessage:({donationPercentage:o="1"}={})=>`Senza costi aggiuntivi, seleziona un'organizzazione no-profit e doneremo l\u2019${o}% del tuo acquisto per te.`,inlineSeparator:()=>": "},pl:{beamAttribution:()=>"Obs\u0142ugiwane przez Beam",ctaTitle:()=>"Wybierz sw\xF3j wp\u0142yw",ctaPromoPrefixMessage:()=>"Bez dodatkowych koszt\xF3w,",ctaPromoMessage:({donationPercentage:o="1"}={})=>`wybierz organizacj\u0119, a ${o}% zostanie przekazane w Twoim imieniu.`,ctaMessage:({donationPercentage:o="1"}={})=>`Bez dodatkowych koszt\xF3w wybierz organizacj\u0119, kt\xF3rej przeka\u017Cemy ${o}% warto\u015Bci Twojego zam\xF3wienia w Twoim imieniu.`,inlineSeparator:()=>": "}};var ve=Object.defineProperty,p=(o,e,t,a)=>{for(var i=void 0,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=s(e,t,i)||i);return i&&ve(e,t,i),i};let _=!1;class l extends ${constructor(){super(...arguments),this.baseUrl=X,this.selectedNonprofitId=null,this.lang="en",this.debug=!1,this.draftConfig=!1,this.isMobile=window.innerWidth<768,this.enableNonprofitDeselection=!1,this.didTryToCreateNewSelectionFromCache=!1,this.pluginPromoCodes=[],this.handlePromoCodesStored=e=>{const t=(e.detail.promoCodes?.unvalidatedPromoCodes??[]).map(a=>a.attributes?.value??a.attributes?.url??"").sort();this.pluginPromoCodes=t},this.getChainNonprofits=async()=>{P(["apiKey"],this);const e=K(F,{apiKey:this.apiKey}),t=W("cart",{apiKey:this.apiKey}),a=this.cart?.content?{schema:this.cart?.schema,content:this.cart?.content}:void 0,i=this.getManualPromoCodes(),n=de(i.map(b=>({value:b})),this.apiKey),s=n&&!fe(n);s&&this.dispatchEvent(new B({source:y.select_nonprofit}));const c=await Y({baseUrl:this.baseUrl,apiRoot:"/api/v3",headers:{authorization:`Api-Key ${this.apiKey}`},requestBody:{storeId:this.storeId,widgetName:y.select_nonprofit,postalCode:this.postalCode,countryCode:this.countryCode,beamCartId:e||void 0,cartId:t||void 0,version:"1.0.0",lang:this.configLang,...s&&{promos:n},options:{config:{draftConfig:this.draftConfig}},cart:a}});return this.enableNonprofitDeselection=!!c.config.enableNonprofitDeselection,this.selectedNonprofitId!==null&&this.selectedNonprofitId&&!c.nonprofits.map(b=>b.nonprofit.id).includes(this.selectedNonprofitId)&&(this.selectedNonprofitId=null,await this.postSelectNonprofit({selectedNonprofitId:null}),this.localStorage.setItem("nonprofit",null)),c.store?.id&&c.store.id!==this.storeId&&(this.storeId=c.store.id),await this.createNewSelectionForCachedNonprofit(),this.localStorage.setItemJson("chainNonprofits",{createdAt:new Date,data:c}),this.handleValidatedPromoCodes(c),c},this.postSelectNonprofit=async({selectedNonprofitId:e})=>{P(["apiKey","storeId"],this);const t=W("cart",{apiKey:this.apiKey}),a=K(F,{apiKey:this.apiKey}),i=await Z({baseUrl:this.baseUrl,headers:{authorization:`Api-Key ${this.apiKey}`},requestBody:{nonprofitId:e,selectionId:this.selectionId,storeId:this.storeId,cartId:t||void 0,beamCartId:a||void 0,creationMethod:"cart",postalCode:this.postalCode,countryCode:this.countryCode}});this.selectionId=i?.selectionId,this.localStorage.setItem("transaction",this.selectionId),this.localStorage.setItem("nonprofit",e),this.localStorage.setItem("nonprofit_selected_at",new Date().toISOString()),await this.updateComplete;const n=this.getNonprofitById(e);e!==null&&this.dispatchEvent(new re({selectedNonprofitId:e,selectionId:this.selectionId,nonprofitName:n?.nonprofit?.name??null,source:y.select_nonprofit})),e===null&&this.dispatchEvent(new se({newNonprofitId:null,selectionId:this.selectionId}))},this.nonprofitListDataController=new D(this,this.getChainNonprofits),this.selectionDataController=new D(this,this.postSelectNonprofit),this.localStorage=pe(this),this.handleCartChange=e=>{this.cart=e.detail},this.handleInitialNonprofitSync=e=>{if(_)return;const{nonprofitId:t,selectionId:a}=e.detail,i=t!==void 0&&this.selectedNonprofitId!==t,n=a!==void 0&&this.selectionId!==a;(i||n)&&(i&&(this.selectedNonprofitId=t),n&&(this.selectionId=a),this.requestUpdate(),_=!0,window.removeEventListener(I.eventName,this.handleInitialNonprofitSync))},this.makeHandleSelect=(e,t,a)=>async i=>{const n=this.selectedNonprofitId;if(i instanceof KeyboardEvent){let s=null;switch(i.key){case"ArrowUp":case"ArrowLeft":t===0?s=a[a.length-1]:s=a[t-1],i.preventDefault();break;case"ArrowRight":case"ArrowDown":t===a.length-1?s=a[0]:s=a[t+1],i.preventDefault();break;case"Enter":case" ":i.preventDefault();break;default:return}if(s){n!=null&&(this.selectedNonprofitId=s.nonprofit.id);const c=this.renderRoot.querySelector(`[data-value="${s.nonprofit.id}"]`);c!==null&&(c.tabIndex=0,c.focus());return}}if(i.currentTarget instanceof HTMLElement)if(n===e)if(this.enableNonprofitDeselection)this.selectedNonprofitId=null,this.localStorage.setItem("nonprofit",null);else return;else this.selectedNonprofitId=e;this.dispatchEvent(new le({})),window.removeEventListener(I.eventName,this.handleInitialNonprofitSync),await this.selectionDataController.exec({selectedNonprofitId:this.selectedNonprofitId})},this.evaluateBreakPoints=G(()=>{this.isMobile=window.innerWidth<768},50,{maxWait:50,leading:!0})}get configLang(){return ee[this.lang]||"en"}get parsedPromoCodes(){return me(this.promoCodes)}getManualPromoCodes(){if(this.parsedPromoCodes&&this.parsedPromoCodes.length>0)return this.parsedPromoCodes;const e=this.localStorage.getItemJson("cart");return e?ge(e):[]}async handleValidatedPromoCodes(e){e.promos?.validatedPromoCodes&&(await Promise.all([he({apiKey:this.apiKey,promoCodes:{validatedPromoCodes:e.promos.validatedPromoCodes,unvalidatedPromoCodes:[]}}),be({validatedPromoCodes:e.promos.validatedPromoCodes,domain:this.domain})]),this.dispatchEvent(new B({source:y.select_nonprofit})))}getNonprofitById(e){return e?this.nonprofitListDataController?.data?.nonprofits.find(t=>t.nonprofit.id===e):null}async connectedCallback(){super.connectedCallback(),window.addEventListener(I.eventName,this.handleInitialNonprofitSync),this.nonprofitListDataController.loading=!0,window.addEventListener(T.eventName,this.handleCartChange),window.addEventListener("resize",this.evaluateBreakPoints)}async firstUpdated(){await this.restoreStateFromCache(),window.addEventListener(M.eventName,this.handlePromoCodesStored)}async updated(e){const t=["baseUrl","storeId","apiKey","countryCode","postalCode","cart","lang","promoCodes","pluginPromoCodes"];this.pluginPromoCodes;for(const a of t)if(e.has(a)){await this.nonprofitListDataController.exec();break}}disconnectedCallback(){window.removeEventListener(T.eventName,this.handleCartChange),window.removeEventListener("resize",this.evaluateBreakPoints),window.removeEventListener(M.eventName,this.handlePromoCodesStored),super.disconnectedCallback()}async restoreStateFromCache(){try{const e=new Date().valueOf();this.cart=this.localStorage.getItemJson("cart")??void 0;const t=30*24*60*60*1e3,a=this.localStorage.getItem("nonprofit_selected_at")??0,i=e>new Date(a).valueOf()+t;i?i&&this.selectedNonprofitId!==null&&(await this.postSelectNonprofit({selectedNonprofitId:null}),this.localStorage.setItem("nonprofit",null)):(this.selectedNonprofitId=parseInt(this.localStorage.getItem("nonprofit")||"")||null,this.selectionId=this.localStorage.getItem("transaction")??void 0);const{createdAt:n=0,data:s}=this.localStorage.getItemJson("chainNonprofits")||{},c=2*60*60*1e3;!(e>new Date(n).valueOf()+c)&&this.nonprofitListDataController.loading&&(this.nonprofitListDataController.data=s,this.nonprofitListDataController.loading=!1)}catch(e){ce.error(e)}}async createNewSelectionForCachedNonprofit(){if(P(["apiKey"],this),!(!this.storeId||this.didTryToCreateNewSelectionFromCache))try{this.didTryToCreateNewSelectionFromCache=!0}catch{}}get cssVariables(){const e={"--beam-fontFamily":"inherit","--beam-fontStyle":"inherit","--beam-fontSize":"inherit","--beam-textColor":"inherit","--beam-backgroundColor":"inherit",...te,"--beam-SelectNonprofit-title-textAlign":"inherit","--beam-SelectNonprofit-description-textAlign":"inherit","--beam-SelectNonprofit-maxWidth":"800px","--beam-SelectNonprofit-options-marginTop":"0px","--beam-SelectNonprofit-options-iconHeight":"24px","--beam-SelectNonprofit-options-padding":"10px","--beam-SelectNonprofit-options-borderRadius":"0px","--beam-SelectNonprofit-options-borderColor":"currentColor","--beam-SelectNonprofit-options-borderWidth":"1px","--beam-SelectNonprofit-options--selected-borderColor":"currentColor","--beam-SelectNonprofit-options-backgroundColor":"transparent","--beam-SelectNonprofit-options-gap":"8px","--beam-SelectNonprofit-options--selected-backgroundColor":"currentColor","--beam-SelectNonprofit-details-marginTop":"10px","--beam-SelectNonprofit-details-borderRadius":"0px","--beam-SelectNonprofit-details-borderColor":"currentColor","--beam-SelectNonprofit-details-backgroundColor":"inherit","--beam-SelectNonprofit-details-padding":"10px",...h("--beam-SelectNonprofit-title",{fontSize:"1.25em",fontWeight:"bold"}),"--beam-SelectNonprofit-header-inline-lineHeight":"inherit",...h("--beam-SelectNonprofit-title-inline",{fontWeight:"bold"}),"--beam-SelectNonprofit-title-inline-textTransform":"none","--beam-SelectNonprofit-title-block-margin-right":"8px",...h("--beam-SelectNonprofit-description",{marginTop:"0.5em"}),...h("--beam-SelectNonprofit-description-inline"),...h("--beam-SelectNonprofit-details-cause",{fontSize:"0.85em",fontWeight:"bold"}),...h("--beam-SelectNonprofit-details-beamAttribution",{fontSize:"0.85em"}),...h("--beam-SelectNonprofit-details-impactDescription",{fontSize:"1em",marginTop:"10px"}),"--beam-SelectNonprofit-details-nonprofitName-fontWeight":"bold","--beam-SelectNonprofit-details-nonprofitName-fontStyle":"inherit","--beam-SelectNonprofit-details-fundingProgress-marginTop":"10px",...h("--beam-SelectNonprofit-details-fundingProgressLabel",{fontSize:"0.85em"}),...Ne,...oe,"--beam-SelectNonprofit-promo-block-header-justifyContent":"initial","--beam-SelectNonprofit-notification-blip-top":"4px","--beam-SelectNonprofit-notification-blip-left":"50%","--beam-SelectNonprofit-display-notification-blip":"true","--beam-SelectNonprofit-enable-inline-header":"false"},t=this.nonprofitListDataController?.data?.config?.web?.theme||{},a={...e,...t};return Object.assign(Object.create({toCSS(){return Q(this)}}),a)}render(){const{selectedNonprofitId:e}=this,{data:t,loading:a}=this.nonprofitListDataController;if(a&&!t)return ae();if(this.nonprofitListDataController.error)return this.debug?A({error:this.nonprofitListDataController.error}):"";if(this.selectionDataController.error&&this.debug)return A({error:this.selectionDataController.error});const i=t?.nonprofits||[],n=i.find(r=>r.nonprofit.id===e)||null,s=!!t?.config?.web?.promo,c=i.some(r=>!r.promo||!r.promo.isActive),b=r=>this.cssVariables[r],U=b("--beam-SelectNonprofit-display-notification-blip")==="true",C=b("--beam-SelectNonprofit-title-textAlign")==="center",u=b("--beam-SelectNonprofit-enable-inline-header")==="true"||this.isMobile,k=d`<h3
      class=${v({"title-block":!0,"d-none":!0,"d-block":!u})}
      part="title"
      id="beam-SelectNonprofit-title"
    >
      ${m(this.configLang,t?.config?.web?.title||"")||g[this.configLang].ctaTitle()}
    </h3>`,O=()=>{const r=v({"block-header-promo-pill-container":!u&&!C,"block-header-promo-pill-container-responsive":u&&!C,"block-header-promo-pill-center-block-container-responsive":!u&&C}),w=E({display:u?"flex":void 0});return s?d`<div class=${r} style=${w}>
            ${k}
            <beam-promo-info-pill .promo=${t?.config?.web?.promo}></beam-promo-info-pill>
          </div>`:k},j=()=>d`
      <div part="heading">
          ${O()}
          <p class="description" part="description">
            <span class=${v({"d-none":!0,"d-inline":!u})}>
            ${s?d`<span style="font-weight:bold">
                      ${m(this.configLang,t?.config?.web?.promoDescriptionPrefix||"")||g[this.configLang].ctaPromoPrefixMessage()}
                    </span>
                    <span>
                      ${m(this.configLang,t?.config?.web?.promoDescription||"")||g[this.configLang].ctaPromoMessage()}
                    </span>`:d`<span>
                    ${m(this.configLang,t?.config?.web?.description||"")||g[this.configLang].ctaMessage()}
                  </span>`}
            </span>
            <div class=${v({"d-none":!u,"header-inline":!0})}>
              <span class="title-inline" part="title">
                ${(m(this.configLang,t?.config?.web?.title||"")||g[this.configLang].ctaTitle())+g[this.configLang].inlineSeparator()}
              </span>
              <span class="description-inline" part="description">
              ${s?d`<span style="font-weight:bold">
                        ${m(this.configLang,t?.config?.web?.promoDescriptionPrefix||"")||g[this.configLang].ctaPromoPrefixMessage()}
                      </span>
                      <span>
                        ${m(this.configLang,t?.config?.web?.promoDescription||"")||g[this.configLang].ctaPromoMessage()}
                      </span>`:d`<span
                      >${m(this.configLang,t?.config?.web?.description||"")||g[this.configLang].ctaMessage()}
                    </span>`}
            </div>
          </p>
        </div>`;return d`
      <style>
        :host {
          ${this.cssVariables.toCSS()}
        }
      </style>
      ${j()}
      <div
        class="options"
        part="options"
        role="radiogroup"
        aria-labelledby="beam-SelectNonprofit-title"
        style="display: flex; gap: var(--beam-SelectNonprofit-options-gap); margin: 10px 0 0 0;"
      >
        ${q(i,r=>r.nonprofit.id,({nonprofit:r,promo:w},x)=>{const N=e===r.id,R=N||n==null&&x===0,H=w?.isActive&&t?.config.web.promo&&c&&U;return d`
              <div
                class="option"
                part="option"
                role="radio"
                tabindex="${R?0:-1}"
                data-value=${r.id}
                aria-checked=${N}
                @click=${this.makeHandleSelect(r.id,x,i)}
                @keydown=${this.makeHandleSelect(r.id,x,i)}
                aria-label="${m(this.configLang,r.cause||"")}"
                style="${E({cursor:"pointer",flex:"1",textAlign:"center",lineHeight:"1",marginTop:"var(--beam-SelectNonprofit-options-marginTop, 0px)",padding:"var(--beam-SelectNonprofit-options-padding, 10px)",borderStyle:"solid",position:"relative",borderRadius:"var(--beam-SelectNonprofit-options-borderRadius, 0)",borderColor:N?r.causeColor||"var(--beam-SelectNonprofit-options--selected-borderColor, currentColor)":"var(--beam-SelectNonprofit-options-borderColor, currentColor)",borderWidth:"var(--beam-SelectNonprofit-options-borderWidth, 1px)",backgroundColor:N?r.causeColor||"var(--beam-SelectNonprofit-options--selected-backgroundColor, currentColor)":"var(--beam-SelectNonprofit-options-backgroundColor, transparent)"})}"
              >
                <img
                  src="${N?r.causeIconSelectedUrl:r.causeIconUrl}"
                  alt=""
                  role="presentation"
                  style="
                        height: var(--beam-SelectNonprofit-options-iconHeight, 24px);
                        user-select: none;
                        vertical-align: -webkit-baseline-middle;
                    "
                />
                ${H?d`<beam-notification-blip></beam-notification-blip>`:d``}
              </div>
            `})}
      </div>
      ${n!=null?d`
            <div
              class="details"
              part="details"
              style="
              border: 1px solid var(--beam-SelectNonprofit-details-borderColor);
              border-radius: var(--beam-SelectNonprofit-details-borderRadius);
              background-color: var(--beam-SelectNonprofit-details-backgroundColor);
              padding: var(--beam-SelectNonprofit-details-padding);
              margin-top: var(--beam-SelectNonprofit-details-marginTop);
            "
              aria-label="Funding information for selected nonprofit ${n.nonprofit?.name}. Powered by Beam"
            >
              <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap-reverse">
                <span
                  class="details-cause"
                  style="flex: 0 1; white-space: nowrap; ${S("--beam-SelectNonprofit-details-cause")}"
                >
                  ${n?.promo?.isActive&&c?t?.config.web.promo?.["promo-cause-alt-text"]||n.nonprofit.cause:m(this.configLang,n.nonprofit.cause||"")}
                </span>
                <div aria-hidden="true">
                  <span
                    class="details-beamAttribution"
                    aria-hidden="true"
                    style="flex: 0 1; white-space: nowrap; ${S("--beam-SelectNonprofit-details-beamAttribution")}"
                  >
                    ${g[this.configLang].beamAttribution()}
                  </span>
                </div>
              </div>
              <p class="details-impactDescription">
                ${V(m(this.configLang,n.impact.description||""))}
              </p>
              <div
                style="display: flex; margin-top: var(--beam-SelectNonprofit-details-fundingProgress-marginTop); align-items: center;"
              >
                <beam-progress-bar
                  value="${n.impact.goalProgressPercentage}"
                  style="flex: 1 0;"
                ></beam-progress-bar>
                <span
                  class="details-fundingProgressLabel"
                  style="${S("--beam-SelectNonprofit-details-fundingProgressLabel")} white-space: nowrap; text-align: right; flex: 0 1; margin-left: 15px;"
                >
                  ${m(this.configLang,n.impact.goalProgressText)}
                </span>
              </div>
            </div>
          `:""}
    `}}l.tagName="beam-select-nonprofit",l.styles=[ie,ue,L`
      :host {
        display: block;
        max-width: var(--beam-SelectNonprofit-maxWidth, 800px);
        font-family: var(--beam-fontFamily);
        font-style: var(--beam-fontStyle);
        font-size: var(--beam-fontSize);
        background-color: var(--beam-backgroundColor);
        color: var(--beam-textColor);
        word-break: normal;
      }

      .details-impactDescription {
        ${S("--beam-SelectNonprofit-details-impactDescription")}
      }

      .details-impactDescription .nonprofitName {
        font-weight: var(--beam-SelectNonprofit-details-nonprofitName-fontWeight);
        font-style: var(--beam-SelectNonprofit-details-nonprofitName-fontStyle, inherit);
      }

      /* Note: title/description display is responsive */

      .title-block {
        margin-right: var(--beam-SelectNonprofit-title-block-margin-right);
        ${S("--beam-SelectNonprofit-title")}
        text-align: var(--beam-SelectNonprofit-title-textAlign);
      }

      .header-inline {
        line-height: var(--beam-SelectNonprofit-header-inline-lineHeight);
      }

      .title-inline {
        font-size: var(--beam-SelectNonprofit-title-inline-fontSize);
        font-weight: var(--beam-SelectNonprofit-title-inline-fontWeight);
        color: var(--beam-SelectNonprofit-title-inline-color);
        font-family: var(--beam-SelectNonprofit-title-inline-fontFamily);
        text-transform: var(--beam-SelectNonprofit-title-inline-textTransform);
      }

      .description-inline {
        font-family: var(--beam-SelectNonprofit-description-inline-fontFamily);
        font-weight: var(--beam-SelectNonprofit-description-inline-fontWeight);
        color: var(--beam-SelectNonprofit-description-inline-color);
        text-transform: var(--beam-SelectNonprofit-description-inline-textTransform);
        font-size: var(--beam-SelectNonprofit-description-inline-fontSize);
      }

      .description {
        ${S("--beam-SelectNonprofit-description")}
        text-align: var(--beam-SelectNonprofit-description-textAlign);
      }

      .block-header-promo-pill-container {
        display: flex;
        align-items: center;
        justify-content: var(--beam-SelectNonprofit-promo-block-header-justifyContent);
      }

      .block-header-promo-pill-container-responsive {
        flex-direction: column;
        align-items: flex-start;
      }
      .block-header-promo-pill-center-block-container-responsive {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .block-header-promo-pill-container-responsive beam-promo-info-pill {
        order: -1;
      }
      .block-header-promo-pill-center-block-container-responsive beam-promo-info-pill {
        order: -1;
      }
      .option {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      beam-notification-blip::part(notification-blip-container) {
        position: absolute;
        top: var(--beam-SelectNonprofit-notification-blip-top);
        left: var(--beam-SelectNonprofit-notification-blip-left);
      }
    `],p([f({type:String})],l.prototype,"baseUrl"),p([f({type:String})],l.prototype,"apiKey"),p([f({type:Number,reflect:!0})],l.prototype,"storeId"),p([f({type:String})],l.prototype,"countryCode"),p([f({type:String})],l.prototype,"postalCode"),p([f({attribute:!1,hasChanged:(o,e)=>!J(o,e)})],l.prototype,"cart"),p([f({type:Number,reflect:!0})],l.prototype,"selectedNonprofitId"),p([f({type:String})],l.prototype,"lang"),p([f({type:Boolean})],l.prototype,"debug"),p([f({type:Boolean})],l.prototype,"draftConfig"),p([f({type:String})],l.prototype,"promoCodes"),p([f({type:String})],l.prototype,"domain"),p([z()],l.prototype,"isMobile"),p([z()],l.prototype,"pluginPromoCodes"),ne(l);export{l as BeamSelectNonprofit};
//# sourceMappingURL=select-nonprofit.esm.js.map
