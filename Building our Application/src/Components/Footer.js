import appStoreImg from "../assets/img/download-now-app-store.avif";
import playStoreImg from "../assets/img/download-now-google-play.png";
const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 h-[30vh] bg-[#F0F0F5]">
      <div className="footer-text font-family">
        For better experience, download the app now
      </div>
      <div className="flex gap-3">
        <a
          href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
          target="_blank"
        >
          <img className="download-img" src={appStoreImg} />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1"
          target="_blank"
        >
          <img className="download-img" src={playStoreImg} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
