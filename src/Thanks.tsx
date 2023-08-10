import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

function Thanks() {
  return (
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div className=" sm:items-start">
        <div className="mx-auto flex w-full flex-shrink-0 items-center justify-center sm:mx-0">
          <div className="sm:w-10 justify-center flex items-center sm:h-10 bg-red-100 rounded-full">
            <CheckCircleIcon
              className="h-6 w-6 text-green-600"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <Dialog.Title
            as="h3"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Guarantor Saved Successfully
          </Dialog.Title>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Your guarantor has been saved successfully. You can now proceed to
              the next step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
