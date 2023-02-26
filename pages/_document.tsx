/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          {/* <link rel="shortcut icon" href="/img/brand/favicon.ico" /> */}
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/img/brand/apple-icon.png"
          />
          {/* <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.min.css"
          /> */}
        </Head>
        <body className="text-slate-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
          {/* <script src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.min.js" /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
