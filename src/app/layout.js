import { GoogleTagManager } from '@next/third-parties/google'
import PoppinsFont from "@/utils/PoppinsFont";
import "./globals.css";
import { DictProvider } from "@/locales/dict";
import Head from 'next/head';
import Script from 'next/script'

export const metadata = {
  title: "TEDxLINTAC Youth | Website",
  description: "TEDxLINTAC Youth 2025: All Limits; Beyond Limits. Lincoln International Academy Gymnasium",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <Script id="mcjs" dangerouslySetInnerHTML={{__html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/15c5e06e2a90369792070f52d/ff995de835200c0851b31524d.js");`}} />
      </Head>
      <PoppinsFont />
      <GoogleTagManager gtmId="GTM-N25H7QRD" />
      <body className="selection:bg-red selection:text-white">
        <DictProvider>
          {children}
        </DictProvider>
      </body>
    </html>
  );
}
