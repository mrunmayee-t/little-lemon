import CallToAction from "./CallToAction";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import Chicago from "./Chicago";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main>
        <CallToAction />
        <Specials />
        <CustomersSay />
        <Chicago />
      </main>
    </>
  );
};

export default Main;
