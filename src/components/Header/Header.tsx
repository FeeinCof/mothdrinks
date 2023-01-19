import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import styles from "./Header.module.css";
import {
  logo,
  moth,
  user,
  cart,
  hamburger_sticky,
  ins,
  fb,
  tiktok,
  close,
} from "@/assets/icons";

export default function Header() {
  const [isNavShow, setNavShow] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const toggleNavbar = () => {
    setNavShow(!isNavShow);
  };
  const [scrollDir] = useDetectScroll({});
  useLayoutEffect(() => {
    const scrollHandle = () => {
      if (window.scrollY > 68.2) {
        scrollDir == "up" ? setHeaderFixed(true) : setHeaderFixed(false);
      }
      if (window.scrollY == 0) {
        setHeaderFixed(false);
      }
    };
    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, [scrollDir]);
  return (
    <>
      <header className={`${styles.wrapper} ${isHeaderFixed && styles.fixed}`}>
        <Image
          className={`${styles.logo} ${!isHeaderFixed && styles.disapere}`}
          src={logo}
          width={70}
          alt="Logo"
        />
        <Image
          className={`${styles.logo} ${isHeaderFixed && styles.disapere}`}
          src={moth}
          width={100}
          alt="MOTH"
        />
        <nav className={styles.nav_desktop}>
          <ul>
            <li>
              <Link href="/">SHOP</Link>
            </li>
            <li>
              <Link href="/">GIFTS</Link>
            </li>
            <li>
              <Link href="/">STORIES</Link>
            </li>
            <li>
              <Link href="/">ABOUT</Link>
            </li>
          </ul>
          <div className={styles.header_icons}>
            <span className={styles.hide_on_desktop}>
              {isNavShow ? (
                <Image
                  onClick={() => toggleNavbar()}
                  src={close}
                  alt="icon"
                  width={20}
                />
              ) : (
                <Image
                  onClick={() => toggleNavbar()}
                  src={hamburger_sticky}
                  alt={"icon"}
                  width={20}
                />
              )}
            </span>
            <span className={styles.hide_on_mobile}>
              <Image src={user} alt="login" width={16} />
            </span>
            <span>
              <Image src={cart} alt="Add to card" width={22}></Image>
            </span>
          </div>
        </nav>
      </header>
      {isNavShow && (
        <nav className={styles.nav_mobile}>
          <ul>
            <li>
              <Link href="/">SHOP</Link>
            </li>
            <li>
              <Link href="/">GIFTS</Link>
            </li>
            <li>
              <Link href="/">STORIES</Link>
            </li>
            <li>
              <Link href="/">ABOUT</Link>
            </li>
            <li>
              <Link href="/">ACCOUNT</Link>
            </li>
            <li className={styles.nav_icons}>
              <Link href="/">
                <span>
                  <Image src={ins} alt="instgram" />
                </span>
              </Link>
              <Link href="/">
                <span>
                  <Image src={fb} alt="facebook" />
                </span>
              </Link>
              <Link href="/">
                <span>
                  <Image src={tiktok} alt="tiktok" />
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
