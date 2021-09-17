import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import NProgress from "nprogress";
export default function Layout({ children, isHome }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.start();
    };
    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <main className="container py-4">{children}</main>
      <Footer isHome={isHome}></Footer>
    </div>
  );
}
