import { useState } from "react";
import Modal from "react-modal";

const ModalR = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div className="bg-cover mix-blend-hue">
            <button
        className="bg-green-600 m-5 p-3 border rounded-lg text-white"
        onClick={() => setModalIsOpen(true)}
      >
        Opne Modal
      </button>
      <Modal isOpen={modalIsOpen} >
        <h2 className="text-2xl font-bold"> Modal title</h2>
        <p>Modal body
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit corrupti earum, quaerat sunt impedit iure facere natus voluptate! Libero assumenda cum molestias distinctio dolor numquam est quasi nemo quidem.
        </p>
        <button
          className="bg-red-700 text-xl font-extrabold text-yellow-200 m-5 p-3 ml-0 border rounded-xl  "
          onClick={() => setModalIsOpen(false)}
        >
          Do you want to closed Modal !!!
        </button>
      </Modal>
        </div>

    )
}

export default ModalR;