import { useState } from "react";
import Image from "next/image";

import styles from "./Nav.module.css";

export default function Nav({ click }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const handleClick = () => {
    click();
  };

  return (
    <>
      <div className={styles.navWrapper}>
        <div className={styles.leftScreenContainer}>
          <div className={styles.logoWrapper}>
            <Image
              alt="logo"
              src="/images/logo.svg"
              width={84}
              height={27}
              layout="responsive"
            />
          </div>
          <div className={styles.linkContainer}>
            <div
              className={styles.featuresContainer}
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <a href="#">Features</a>
              {!featuresOpen ? (
                <Image
                  alt="down arrow icon"
                  src="/images/icon-arrow-down.svg"
                  height={6}
                  width={10}
                />
              ) : (
                <Image
                  alt="up arrow icon"
                  src="/images/icon-arrow-up.svg"
                  height={6}
                  width={10}
                />
              )}
              <div className={styles.featuresDropdown}>
                <div>
                  <Image
                    alt="todo icon"
                    src="/images/icon-todo.svg"
                    height={20}
                    width={18}
                  />
                  <a href="#">Todo List</a>
                </div>
                <div>
                  <Image
                    alt="calendar icon"
                    src="/images/icon-calendar.svg"
                    height={20}
                    width={20}
                  />
                  <a href="#">Calendar</a>
                </div>
                <div>
                  <Image
                    alt="reminders icon"
                    src="/images/icon-reminders.svg"
                    height={20}
                    width={16}
                  />
                  <a href="#">Reminders</a>
                </div>
                <div>
                  <Image
                    alt="planning icon"
                    src="/images/icon-planning.svg"
                    height={20}
                    width={20}
                  />
                  <a href="#">Planning</a>
                </div>
              </div>
            </div>
            <div
              className={styles.companyContainer}
              onMouseEnter={() => setCompanyOpen(true)}
              onMouseLeave={() => setCompanyOpen(false)}
            >
              <a href="#">Company</a>
              {!companyOpen ? (
                <Image
                  alt="down arrow icon"
                  src="/images/icon-arrow-down.svg"
                  height={6}
                  width={10}
                />
              ) : (
                <Image
                  alt="up arrow icon"
                  src="/images/icon-arrow-up.svg"
                  height={6}
                  width={10}
                />
              )}
              <div className={styles.companyDropdown}>
                <a href="#">History</a>
                <a href="#">Our Team</a>
                <a href="#">Blog</a>
              </div>
            </div>
            <a style={{ marginRight: "24px" }} href="#">
              Careers
            </a>
            <a style={{ marginRight: "24px" }} href="#">
              About
            </a>
          </div>
        </div>
        <div className={styles.rightScreenContainer}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.registerButton}>Register</button>
        </div>
        <button onClick={handleClick} className={styles.menuButtonContainer}>
          <Image
            alt="hamburger"
            src="/images/icon-menu.svg"
            height={18}
            width={32}
          />
        </button>
      </div>
    </>
  );
}
