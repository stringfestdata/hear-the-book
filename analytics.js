/* Uses the existing Stringfest Analytics GA4 property. No note text is sent. */
(() => {
  if (location.hostname !== 'playthebook.stringfestanalytics.com') return;
  const id='G-HYN5W1BYX5';
  if(document.cookie.split(';').some(c=>c.trim()==='ga-disable-'+id+'=true')) return;
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  const tag=document.createElement('script');tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id='+id;document.head.append(tag);
  window.gtag('js',new Date());
  window.gtag('config',id,{allow_google_signals:false,allow_ad_personalization_signals:false,page_title:document.title});
})();

