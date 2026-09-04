
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Db3KX98s.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DYKQASG3.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BgMbUV1p.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.BEVkgR0N.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-policy.C0n_wzZC.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.C_IRBfgV.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.CTifOHp7.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.BQfoQsLb.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.DN7VQWF6.js","/cdn/shopifycloud/checkout-web/assets/c1/sections-shared.BMk6Z7jm.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error.BjApetik.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.C444AxN2.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.D-2Kyerj.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.kzOk1V3a.js","/cdn/shopifycloud/checkout-web/assets/c1/color-contrast-colorContrast.CIiXVvwl.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-redeemable.DAbJfgpo.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.BENd9N1i.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.BsSJ7QtZ.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BqHdjmAI.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.Dq4rQvA7.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.CJd4nTlq.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.Bhs4Snuz.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks.BnWN4wAm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePickupPoints.6xlBf0g1.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.CT9RiCU3.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.C4oazu8R.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.pr48dOET.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.BxzjH36F.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module.BhNn-NX_.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.BnysvWjw.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.er3T3k49.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.BUYpZTgD.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.CYxkphaP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.Dlal6_Ay.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.CnDFFj3c.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.Keu0s4HJ.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel.zcOFeARb.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.DDaw4WuG.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.zQcZ65_X.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.CjSgTDt1.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.C4GWxrMd.js","/cdn/shopifycloud/checkout-web/assets/c1/EmptyState.BTtzlhsX.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.CdblE_AE.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.kY15AlZg.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.BbAWjjTB.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.CnYu0-Je.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.C87jeQG3.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.CoGDx5Vx.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.CQq4WFxG.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.CQ59UtJX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.Be4z3XcU.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.gsmyLs1L.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.CJ_0FRiu.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.861n4X_k.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.B25M4QUX.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.CQOErPzy.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButton-sizing.D7S9NSVh.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.fSw9fytF.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-helpers.Cfe4kU6J.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.ClIUwRF7.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay.D_3LFKrC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.CbP4Djak.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealExtension.Wbp_s2qu.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.CaEZOZrS.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.sa_AcI5r.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.Cxx_KChO.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.BigTkQgO.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.CZVkzVUD.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.DA6x15Sq.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.DQMD8i0s.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.GjNTjsjQ.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CaXbW7zJ.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.Cl2KgeLc.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.s-Yx4BHA.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.D5OS8LCr.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.D0eE7Fwv.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.Dgh3QA-L.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.CTgY-ICX.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.MQwX318N.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.Pwq6ZeO1.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-browser-engine.BX8XTFjB.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors.DLakeFOH.js","/cdn/shopifycloud/checkout-web/assets/c1/performance-index.BqsxpRCA.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.DGnIkBdN.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.CkARqw_5.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.CdGLBylA.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode.CCZLwvGr.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates.ChO2GdxN.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.DvhdOtCJ.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.Dy2nUBZv.js","/cdn/shopifycloud/checkout-web/assets/c1/EmailField.BwLOB-cU.js","/cdn/shopifycloud/checkout-web/assets/c1/Sheet.ANC0d-6X.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.CEchbkQI.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4.EwEgHOG0.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.DtEm2hnG.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-host.BRhaT_5N.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.yFnJdgO9.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.6kKHlBw6.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.DzNfZ5Oj.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.a2gnWm8u.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/checkout-policy.Dy6nOzcc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.BVCZzykB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DkWpx8b4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.CxmS455s.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.DQeXjG1A.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.tSP6pJcp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/cvvBridge.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.DNWz77j7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/sizing.ZgfJ23-d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BbF1yV61.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DWE5rRxz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Checkbox.CfwUdlpL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.BXWsWJJp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.DfWUBaTh.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0495/9446/6472/files/stumptowncoffee_favicon_logo_x320.png?v=1723138132"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  