
    window._currentDevice = 'desktop';
    window.Parameters = window.Parameters || {
        AjaxContainer: 'div.dmBody',
        WrappingContainer: 'div.dmOuter',
        HomeUrl: 'http://app.multiscreensite.com/site/33889c91',
        AccountUUID: '98948312e1744dac8c4af7cbf4200cc8',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: '33889c91',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Mon May 16 16:56:18 UTC 2022',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialDynamicItem: '',
        InitialPageAlias: 'home',
        InitialPageUuid: 'ae3bd2f6b00d4f749fef4b50e328668f',
        InitialEncodedPageAlias: 'aG9tZQ==',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '5920',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/33889c91?preview=true&dm_device=tablet&dm_exportSite=true&nossl&dm_exportSite_protected=bc8d39d9_1672776147777_5_ea9100610d282a71024b89312012e86ab74647ad6f0399b4ed5a72e4c5b29e29',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        IsStoreSuspended: false,
        NotificationSubDomain: 'drpflooringltd49e67cc8',
        HasCustomDomain: true,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'en',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: 4,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/33889c91',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: true,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        

        siteInfo: null,
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 6;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if(!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function() {
            },
            getCurrentDeviceType: function() {
                return window._currentDevice;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }


(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }

  function checkCss() {
    if (cssLinks && cssLinks.runtime && cssLinks.global) {
      loadCssLink(cssLinks.runtime);
      loadCssLink(cssLinks.global);
      cssLinks = null;
    }
  }

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      /* Never fail - this is just a tool for measurements */
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();


    /* usage: window.getDeferred(<deferred name>).resolve() or window.getDeferred(<deferred name>).promise.then(...)*/
    function Def(){this.promise=new Promise((function(a,b){this.resolve=a,this.reject=b}).bind(this))}
    const defs={};
    window.getDeferred=function(a){return null==defs[a]&&(defs[a]=new Def),defs[a]}
    window.waitForDeferred = function (b, a, c) {
      let d = window?.getDeferred?.(b);
      d
        ? d.promise.then(a)
        : c && ["complete", "interactive"].includes(document.readyState)
        ? setTimeout(a, 1)
        : c
        ? document.addEventListener("DOMContentLoaded", a)
        : console.error(`Deferred  does not exist`);
    };


(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }

  function checkCss() {
    if (cssLinks && cssLinks.runtime && cssLinks.global) {
      loadCssLink(cssLinks.runtime);
      loadCssLink(cssLinks.global);
      cssLinks = null;
    }
  }

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      /* Never fail - this is just a tool for measurements */
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();


{
  "@context" : {
    "@vocab" : "http://schema.org/"
  },
  "@type" : "ProfessionalService",
  "name" : "DRP Flooring LTD",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress" : "8 Greenwood Avenue",
    "addressLocality" : "Derby",
    "addressRegion" : "England",
    "postalCode" : "DE21 4HY",
    "addressCountry" : "GBR"
  },
  "geo" : {
    "@type" : "GeoCoordinates",
    "latitude" : "52.93683",
    "longitude" : "-1.44166"
  },
  "url" : "https://www.drpflooringltd.co.uk",
  "telephone" : "+447946407787",
  "email" : "dan.parker1477@googlemail.com",
  "logo" : "https://irp.cdn-website.com/33889c91/dms3rep/multi/mainlogo-ba429764.png",
  "sameAs" : [ "https://facebook.com/pg/drpflooring/posts/?ref=page_internal" ],
  "image" : [ "https://irp.cdn-website.com/33889c91/dms3rep/multi/mainlogo-ba429764.png", "https://irp.cdn-website.com/33889c91/dms3rep/multi/12.jpeg", "https://irp.cdn-website.com/33889c91/dms3rep/multi/9-f18e578e.jpeg", "https://irp.cdn-website.com/33889c91/dms3rep/multi/3+%281%29.jpeg", "https://irp.cdn-website.com/33889c91/dms3rep/multi/Screenshot+2021-12-11+at+15.33.50.png" ],
  "openingHoursSpecification" : [ {
    "@type" : "OpeningHoursSpecification",
    "dayOfWeek" : [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
    "opens" : "09:00",
    "closes" : "18:00"
  } ],
  "@id" : "https://www.drpflooringltd.co.uk?id=105491672",
  "priceRange" : "££"
}
