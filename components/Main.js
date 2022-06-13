import Image from "next/image";

import styles from "./Main.module.css";

export default function Main() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.gridContainer}>
        <div className={styles.mobileImage}>
          <Image
            alt="mobile hero image"
            src="/images/image-hero-mobile.png"
            height={900}
            width={1000}
            priority
          />
        </div>
        <div className={styles.desktopImage}>
          <Image
            alt="desktop hero image"
            src="/images/image-hero-desktop.png"
            height={900}
            width={780}
          />
        </div>
        <div className={styles.bodyText}>
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn more</button>
          <div className={styles.logosContainer}>
            <Image
              alt="databiz logo"
              src="/images/client-databiz.svg"
              height={20}
              width={114}
            />
            <Image
              alt="audiophile logo"
              src="/images/client-audiophile.svg"
              height={36}
              width={73}
            />
            <Image
              alt="meet logo"
              src="/images/client-meet.svg"
              height={20}
              width={90}
            />
            <Image
              alt="maker logo"
              src="/images/client-maker.svg"
              height={24}
              width={83}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
