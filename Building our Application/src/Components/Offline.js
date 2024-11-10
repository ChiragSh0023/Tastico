import { offlineImgBase64 } from "../utils/constants";

const Offline = () => {
  return (
    <div className="offline-container">
      <div>
        <img src={offlineImgBase64} alt="offline-image" height="209px" />
      </div>
      <div className="oops-message">Oops! Looks like you're offline!</div>
      <div className="retry-message">
        Please Check your Internet connection and try again
      </div>
    </div>
  );
};

export default Offline;
