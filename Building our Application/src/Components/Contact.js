import ContactUs from "../assets/img/contactus.jpg";

const Contact = () => {
  return (
    <div className="main-block font-family">
      <div>
        <img className="about-img" src={ContactUs} />
      </div>
      <h3 className="heading-block">Feel free to contact us</h3>
      <p className="content-block">
        We’d love to hear from you! Whether you have a question, feedback, or
        need assistance, the Fast Delivery team is here to help.
        <br />
        <br />
        If you need help with your order or have any inquiries about our
        services, feel free to contact our customer support team:
        <br />
        Email:support@fastdelivery.com
        <br />
        Phone: +1-800-555-1234
        <br />
        Live Chat: Available on our app and website from 9 AM to 9 PM (Mon-Sun)
        <br />
        <br />
        For partnership opportunities, restaurant collaborations, or any other
        business-related inquiries, please reach out to our business team:
        <br />
        Email: business@fastdelivery.com
        <br />
        Phone: +1-800-555-5678
        <br />
        <br />
        Visit us or send us mail at our headquarters:
        <br />
      </p>
    </div>
  );
};

export default Contact;
