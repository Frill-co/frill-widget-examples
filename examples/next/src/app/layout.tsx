import Script from "next/script";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="frill-widget-init"
          strategy="beforeInteractive">{`(function(t,r){function s(){var a=r.getElementsByTagName("script")[0],e=r.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://widget.frill.co/v2/container.js",a.parentNode.insertBefore(e,a)}if(!t.Frill){var f=0,i={};t.Frill=function(e,o){var n,l=f++,c=new Promise(function(v,d){i[l]={params:[e,o],resolve(p){n=p,v(p)},reject:d}});return c.destroy=function(){delete i[l],n&&n.destroy()},c},t.Frill.q=i}r.readyState==="complete"||r.readyState==="interactive"?s():r.addEventListener("DOMContentLoaded",s)})(window,document);
    window.Frill('container', {
      // Put your Frill Script key here
      key: 'a809b4ac-5976-4444-8684-15f7a3a20b4c',
      autoLoad:false,
      // Identify your users (optional)
      // user: { email: 'email@domain.com', name: 'my user'}
    })`}</Script>
      </body>
    </html>
  );
}
