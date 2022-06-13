import { useState } from "react";
import Image from "next/image";
import styles from "./MobileNav.module.css";

export default function MobileNav({ click, isOpen }) {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const mobileWrapperStyles = {
    position: "fixed",
    top: "0",
    right: "0",
    width: isOpen ? "65%" : "0",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "hsl(0, 0%, 98%)",
    zIndex: "3",
    transition: "0.5s",
  };

  const handleClick = () => {
    setFeaturesOpen(false);
    setCompanyOpen(false);
    click();
  };

  const handleFeaturesListClick = () => {
    setFeaturesOpen((prev) => !prev);
  };

  const handleCompanyListClick = () => {
    setCompanyOpen((prev) => !prev);
  };

  return (
    <>
      <div style={mobileWrapperStyles}>
        <div className={styles.closeWrapper}>
          <Image
            alt="close menu icon"
            src="/images/icon-close-menu.svg"
            height={26}
            width={26}
            onClick={handleClick}
          />
        </div>
        <div className={styles.menuWrapper}>
          <div
            onClick={handleFeaturesListClick}
            className={styles.featuresList}
          >
            <p>Features</p>
            {!featuresOpen ? (
              <Image
                alt="dropdown arrow"
                src="/images/icon-arrow-down.svg"
                height={6}
                width={10}
              />
            ) : (
              <Image
                alt="up arrow"
                src="/images/icon-arrow-up.svg"
                height={6}
                width={10}
              />
            )}
          </div>
          <div
            style={!featuresOpen ? { display: "none" } : { display: "block" }}
            className={styles.featuresSub}
          >
            <div>
              <Image
                alt="todo icon"
                src="/images/icon-todo.svg"
                height={20}
                width={18}
              />
              <p>Todo list</p>
            </div>
            <div>
              <Image
                alt="calendar icon"
                src="/images/icon-calendar.svg"
                height={20}
                width={20}
              />
              <p>Calendar</p>
            </div>
            <div>
              <Image
                alt="reminders icon"
                src="/images/icon-reminders.svg"
                height={20}
                width={16}
              />
              <p>Reminders</p>
            </div>
            <div>
              <Image
                alt="planning icon"
                src="/images/icon-planning.svg"
                height={20}
                width={20}
              />
              <p>Planning</p>
            </div>
          </div>
          <div onClick={handleCompanyListClick} className={styles.companyList}>
            <p>Company</p>
            {!companyOpen ? (
              <Image
                alt="dropdown arrow"
                src="/images/icon-arrow-down.svg"
                height={6}
                width={10}
              />
            ) : (
              <Image
                alt="up arrow"
                src="/images/icon-arrow-up.svg"
                height={6}
                width={10}
              />
            )}
          </div>
          <div
            style={!companyOpen ? { display: "none" } : { display: "block" }}
            className={styles.companySub}
          >
            <div>History</div>
            <div>Our team</div>
            <div>Blog</div>
          </div>
          <a href="#">Careers</a>
          <a href="#">About</a>
          <button className={styles.login}>Login</button>
          <button className={styles.register}>Register</button>
        </div>
      </div>
      <div
        onClick={handleClick}
        style={isOpen ? { display: "block" } : { display: "none" }}
        className={styles.backdrop}
      ></div>
    </>
  );
}
