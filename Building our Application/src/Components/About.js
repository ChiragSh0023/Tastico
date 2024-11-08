import Logo from "../assets/img/logo.jpg";
import UserClass from "./UserClass";
import React from "react";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  componentDidUpdate() {
    console.log("Parent componentDidUpdate");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="main-block font-family">
        <div>
          <img className="about-img" src={Logo} />
        </div>
        <h3 className="heading-block">About us Class</h3>
        <p className="content-block">
          Welcome to Fast Delivery! At Fast Delivery, we are passionate about
          connecting people with the best food from their favorite local
          restaurants, all delivered right to their doorstep. Whether you’re
          craving a quick bite or planning a family feast, we make it easy and
          convenient to satisfy your hunger.
          <br />
          <br />
          Our mission is to bring people closer to the food they love by
          offering a seamless, reliable, and enjoyable food delivery experience.
          We partner with a wide range of restaurants, from popular local
          eateries to well-known chains, so you always have plenty of options to
          choose from.
          <br />
          <br />
          Vast Selection of Restaurants: Explore a diverse selection of
          cuisines, from the comfort of your home. We bring you the best from
          local favorites to gourmet dining options. Fast and Reliable Delivery:
          We understand the importance of timely delivery. Our dedicated
          delivery partners ensure your food arrives hot and fresh, just as the
          chef intended. Easy-to-Use Platform: With a user-friendly interface,
          placing an order has never been easier. Track your order in real-time
          and receive updates at every step of the process. Secure Payments: We
          prioritize your security with multiple payment options, including
          credit/debit cards, digital wallets, and cash on delivery.
          <br />
          <br />
          Fast Delivery was founded with the belief that great food should be
          accessible to everyone. Whether you’re a busy professional, a student,
          or a family on the go, our app makes it simple to enjoy delicious
          meals without the hassle of cooking or dining out. From our humble
          beginnings, we've grown into a community-driven platform, committed to
          supporting local businesses while providing a convenient service to
          our customers. We’re proud to be part of your dining experience, and
          we’re constantly working to improve and expand our services.
          <br />
          <br />
          Join Us on Our Journey We’re more than just a food delivery
          service—we’re a community of food lovers. Follow us on social media,
          share your favorite meals, and join us in celebrating the joy of food.
          Thank you for choosing Fast Delivery. We’re excited to continue
          serving you! Contact Us Got questions, feedback, or just want to say
          hello? Reach out to us at fast.delivery@gmail.com or follow us on
          instagram.
        </p>
        <UserClass />
      </div>
    );
  }
}

export default AboutClass;

// const About = () => {
//   return (
//     <div className="main-block font-family">
//       <div>
//         <img className="about-img" src={Logo} />
//       </div>
//       <h3 className="heading-block">About us</h3>
//       <p className="content-block">
//         Welcome to Fast Delivery! At Fast Delivery, we are passionate about
//         connecting people with the best food from their favorite local
//         restaurants, all delivered right to their doorstep. Whether you’re
//         craving a quick bite or planning a family feast, we make it easy and
//         convenient to satisfy your hunger.
//         <br />
//         <br />
//         Our mission is to bring people closer to the food they love by offering
//         a seamless, reliable, and enjoyable food delivery experience. We partner
//         with a wide range of restaurants, from popular local eateries to
//         well-known chains, so you always have plenty of options to choose from.
//         <br />
//         <br />
//         Vast Selection of Restaurants: Explore a diverse selection of cuisines,
//         from the comfort of your home. We bring you the best from local
//         favorites to gourmet dining options. Fast and Reliable Delivery: We
//         understand the importance of timely delivery. Our dedicated delivery
//         partners ensure your food arrives hot and fresh, just as the chef
//         intended. Easy-to-Use Platform: With a user-friendly interface, placing
//         an order has never been easier. Track your order in real-time and
//         receive updates at every step of the process. Secure Payments: We
//         prioritize your security with multiple payment options, including
//         credit/debit cards, digital wallets, and cash on delivery.
//         <br />
//         <br />
//         Fast Delivery was founded with the belief that great food should be
//         accessible to everyone. Whether you’re a busy professional, a student,
//         or a family on the go, our app makes it simple to enjoy delicious meals
//         without the hassle of cooking or dining out. From our humble beginnings,
//         we've grown into a community-driven platform, committed to supporting
//         local businesses while providing a convenient service to our customers.
//         We’re proud to be part of your dining experience, and we’re constantly
//         working to improve and expand our services.
//         <br />
//         <br />
//         Join Us on Our Journey We’re more than just a food delivery
//         service—we’re a community of food lovers. Follow us on social media,
//         share your favorite meals, and join us in celebrating the joy of food.
//         Thank you for choosing Fast Delivery. We’re excited to continue serving
//         you! Contact Us Got questions, feedback, or just want to say hello?
//         Reach out to us at fast.delivery@gmail.com or follow us on instagram.
//       </p>
//       <UserClass name="Chirag Sharma (Class)" location="Jaipur (Class)" />
//     </div>
//   );
// };
