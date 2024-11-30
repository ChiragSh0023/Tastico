import appStoreImg from "../assets/img/download-now-app-store.avif";
import playStoreImg from "../assets/img/download-now-google-play.png";
const Footer = () => {
  return (
    <div className="flex flex-col bg-[#F0F0F5]">
      <div className="flex justify-center items-center gap-5 my-4">
        <div className="font-gilroyMedium text-xl">
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

      <div className="flex gap-4 w-[30vw] m-auto justify-between mt-4">
        <div className="flex flex-col font-gilroy text-[#02060c99] text-sm">
          <div className="font-gilroyBold text-black text-base">Company</div>
          <div className="my-3 cursor-pointer">About Us</div>
          <div className="my-3 cursor-pointer">Corporate</div>
          <div className="my-3 cursor-pointer">Careers</div>
          <div className="my-3 cursor-pointer">Teams</div>
          <div className="my-3 cursor-pointer">Corporate</div>
        </div>

        <div className="flex flex-col font-gilroy text-[#02060c99] text-sm">
          <div className="font-gilroyBold text-black text-base">Contact Us</div>
          <div className="my-3 cursor-pointer">Help & Support</div>
          <div className="my-3 cursor-pointer">Partner with us</div>
          <div className="my-3 cursor-pointer">Ride with us</div>
        </div>

        <div className="flex flex-col font-gilroy text-[#02060c99] text-sm">
          <div className="font-gilroyBold text-black text-base">Legal</div>
          <div className="my-3 cursor-pointer">Terms & Conditions</div>
          <div className="my-3 cursor-pointer">Cookie Policy</div>
          <div className="my-3 cursor-pointer">Privacy Policy</div>
          <div className="my-3 cursor-pointer">Investor Relations</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
