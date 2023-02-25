import "@/styles/index.css";
import "@/styles/tailwind.css";

import type { AppProps } from "next/app";
import { Fragment } from "react";
import type { Page } from "@/types/page";

type Props = AppProps & {
  Component: Page;
};

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
};

export default MyApp;
