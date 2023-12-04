import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import { BsGithub } from 'react-icons/bs';

const ModalWindow = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/[0.55]" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#1e1e1e] py-[30px] px-3 text-left flex flex-col items-center shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl tracking-wide font-medium leading-6 text-white">
                    Welcome back
                  </Dialog.Title>
                  <p className="text-[13px] mt-2 text-white">Login to your account.</p>
                  <div className="mt-6 w-full ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md w-full border border-transparent bg-[#393939] hover:bg-[#3e3e3e] py-2 text-sm font-medium text-white focus:outline-none"
                      onClick={closeModal}>
                      <BsGithub size={20} className="mr-3" />
                      Sign in with GitHub
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalWindow;
