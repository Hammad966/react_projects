import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

// export default function ModalTest() {
//   const [showModalPopup, setShowModalPopup] = useState(false);

//   function handleToggleModalPopup() {
//     setShowModalPopup(!showModalPopup);
//   }

//   function onClose() {
//     setShowModalPopup(false);
//   }

//   return (
//     <div className="text-center">
//       <button className="bg-gray-500 px-4 py-2 rounded-xl m-5" onClick={handleToggleModalPopup}>Open Modal Popup</button>

//       {showModalPopup && (
//         <Modal
//           id={"custom-id"}
//           header={<h1>Customized Header</h1>}
//           footer={<h1>Customized Footer</h1>}
//           onClose={onClose}
//           body={<div>Customized body</div>}
//         />
//       )}
//     </div>
//   );
// }

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleClick = () => {
    setShowModalPopup(!showModalPopup);
  };

  const onClose = () => {
    setShowModalPopup(false);
  };

  return (
    <div className="text-center">
      <button
        className="bg-gray-500 px-4 py-2 rounded-xl m-5"
        onClick={handleClick}
      >
        Open Modal Popup
      </button>
      {showModalPopup && (
        <Modal
          id={"Modal-popap"}
          header={<div>Customized Header</div>}
          body={<div>Customized Body</div>}
          footer={<div>Customized Footer</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
