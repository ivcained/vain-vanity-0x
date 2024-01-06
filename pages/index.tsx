import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useContractWrite } from "@thirdweb-dev/react";

/**
 * Vain Landing Page.
 * Let's get the vanity bounty marketplace ready!.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="bg gradient fm red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="VAIN, The ETH Vanity Address Marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>BUY & SELL</span>
                <br />
                Vanity Addresses
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://vain.ivc.lol"
                  target="_blank"
                >
                  VAIN
                </Link>{" "}
                enables you to buy and sell / mine <b>vanity</b>, <i>ETH</i>{" "}
                addresses.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Buy Vanity Add
                </Link>
                <Link className={styles.secondaryCta} href="#" target="_blank">
                  Mine Vanity Address
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
