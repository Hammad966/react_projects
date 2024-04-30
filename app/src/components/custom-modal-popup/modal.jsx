export default function Modal({ id, header, body, footer, onClose }) {
  return (
    <div
      id={id || "Modal"}
      className="modal z-10 backdrop-blur-sm backdrop-brightness-90"
    >
      <div className="modal-content rounded-xl">
        <div className="header rounded-t-xl">
         <span className="close-modal-icon text-black py-4" onClick={onClose}>&times;</span>
         <h1 className="header">
            {header ? header : "Header"}
         </h1>
        </div>
        <div className="body text-black flex items-center justify-center">
        {body ? body : "Body"}
        </div>
        <div className="footer rounded-b-xl">
        {footer ? footer : "Footer"}
        </div>
      </div>
    </div>
  );
}
