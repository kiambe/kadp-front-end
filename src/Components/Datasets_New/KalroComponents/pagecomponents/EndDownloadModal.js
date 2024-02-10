import { ChatError, Check } from "akar-icons";
// import { Button, Modal } from "flowbite-react";
import React from "react";

function EndDownloadModal({ msg, isSuccess = false, setOpenModal, openModal }) {
  return (
    <div>
      {/* <Modal
        className={`z-[1000] ${isSuccess ? "bg-green-200" : "bg-red-500"}`}
        position="center"
        show={openModal}
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {!isSuccess ? (
              <ChatError
                color="red"
                className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
              />
            ) : (
              <Check
                color="green"
                className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
              />
            )}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {msg}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color={isSuccess ? "success" : "failure"}
                onClick={() => setOpenModal(false)}
              >
                OK
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal> */}
    </div>
  );
}

export default EndDownloadModal;
