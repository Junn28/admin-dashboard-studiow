import iSuccess from "../../assets/success.svg";

export default function Modal({ open, send }) {
  const sendData = () => {
    send(!open);
  };

  return (
    <div id="myModal" className={`${open ? "block" : "hidden"} modal`}>
      <div className="modal-content text-end">
        <span className="close text-lg px-2" onClick={sendData}>
          &times;
        </span>
        <img src={iSuccess} alt="success" className="mx-auto" />
        <p className="text-2xl font-medium text-center mt-5">
          Data is successfully added
        </p>
      </div>
    </div>
  );
}
