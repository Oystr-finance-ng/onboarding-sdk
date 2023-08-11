/* import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react"; */
import CongratsIcon from "./congrats.svg";

function Thanks() {
  return (
    <div className="bg-white thanks-container">
      <img src={CongratsIcon} alt="congrats" />
      <div className="congrats-title">
        <h2>Congratulations!!!</h2>
        <p>Your Guarantor have been successfully verified.</p>
      </div>
    </div>
  );
}

export default Thanks;
