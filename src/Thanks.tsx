/* import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react"; */
// import CongratsIcon from "./congrats.svg";
import Lottie from "lottie-react";
import ThanksAnimation from './animation_lottie_thanks.json'

function Thanks() {
  const closeModal = () => {
    const closeModalEvent = new CustomEvent('close-modal');
    window.dispatchEvent(closeModalEvent)
  }

  return (
    <div className="bg-white thanks__container">
      {/* <img src={CongratsIcon} alt="congrats" /> */}
      <div className="close-icon-parent">
        <CloseIcon onClick={closeModal} />
      </div>
      <Lottie
        animationData={ThanksAnimation}
        className="lottie-style"
        loop={true}
      />
      <div className="congrats-title">
        <h2>Congratulations!!!</h2>
        <p>Your Guarantor have been successfully verified.</p>
      </div>
    </div>
  );
}

const CloseIcon = ({onClick}: {onClick: () => void}) => {
  return (
    <svg 
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M19.7711 19.7713L12.2286 12.2288M12.2286 19.7713L19.7711 12.2288M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63629 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63629 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default Thanks;
