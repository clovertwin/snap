import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Main from "./Main";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <MobileNav click={handleCloseMenu} isOpen={openMenu} />
      <Nav click={handleOpenMenu} />
      <Main />
    </>
  );
}
