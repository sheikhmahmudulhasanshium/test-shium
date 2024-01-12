import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" >
      <Head >
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Head>
      <body className='bg-gradient-to-r from-slate-200 to-shiumcustom '>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
