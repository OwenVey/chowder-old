import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="h-full bg-gray-1">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <body className="h-full" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
