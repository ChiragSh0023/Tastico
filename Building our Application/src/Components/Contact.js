import AccordionForContactUs from "./AccordionForContactUs";

const Contact = () => {
  return (
    <div className="bg-[#366D8A]">
      <div className="w-[80vw] m-auto">
        <div className="flex flex-col pt-8 pb-4">
          <div className="text-[32px] text-white font-metropolisBold">
            Help & Support
          </div>
          <div className="text-white font-metropolis text-base">
            Let's take a step ahead and help you better.
          </div>
        </div>

        <div className="bg-white p-8">
          <div className="font-metropolisBold text-2xl">General Issues</div>
          <div>
            <AccordionForContactUs
              question={"What is our Customer Care Number?"}
              ans={
                "We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly."
              }
            />
            <AccordionForContactUs
              question={"I am unable to find the restaurant I'm looking for"}
              ans={
                "The restaurant might either be closed at the moment or temporarily not serviceable due to the low rider availability near the restaurant. Please try again after some time or consider ordering from a different restauraunt."
              }
            />
            <AccordionForContactUs
              question={"I see surge fees on app"}
              ans={
                "Non-premium customer: Surge fee is generally enabled temporarily due to higher than expected demand to help us to fairly compensate the delivery executive. Explore our Premium one feature which eliminates surge fee along with other benefits. If you have any questions please feel free to drop a note at 'support@rusticspot.in'"
              }
            />
            <AccordionForContactUs
              question={"I am unable to place a cash on delivery order"}
              ans={
                <div>
                  <div>
                    COD option may not be available due to the below reasons:
                  </div>
                  <div>- High value order</div>
                  <div>- If order is placed from a desktop application</div>
                  <div>- Any recent history of cancelling a COD order</div>
                  <div>
                    In case your reason is not listed here, please write to us
                    at support@rusticspot.in.
                  </div>
                </div>
              }
            />
            <AccordionForContactUs
              question={"I did not receive my OTP on SMS"}
              ans={
                "If you're not receiving the OTP, it's usually due to a network issue. Please check your mobile network settings and try generating a new OTP. If the problem persists, you might want to restart your device or reach out to us at support@rusticspot.in for assistance."
              }
            />
            <AccordionForContactUs
              question={
                "My payment was deducted but the order was not processed"
              }
              ans={
                <div>
                  <div>
                    If your payment has been deducted, it will be refunded to
                    the source account
                  </div>
                  <div>1. UPI (2 hours)</div>
                  <div>2. Credit Card (4-7 days)</div>
                  <div>3. Debit Card (4-7 days)</div>
                  <div>4. Net Banking (4-7 days)</div>
                  <div>
                    In case you have not received the refund within the above
                    timelines please reach out to us at support@rusticspot.in
                  </div>
                </div>
              }
            />
            <AccordionForContactUs
              question={"I want to unsubscribe from Rustic Spot communications"}
              ans={
                "Please drop us an email mentioning the channels you would like to be unsubscribed from. We will take an action and confirm within 24-48 hours"
              }
            />
            <AccordionForContactUs
              question={"Why was I charged a cancellation fee?"}
              ans={
                "A cancellation fee applies if you request to cancel your order after placing it. For more details about your specific order, go to the Profile section in the app, select the relevant order, then click on Help, and choose I have a payment and billing-related query. Our support team will be happy to assist you further."
              }
            />
            <AccordionForContactUs
              question={"I have a query/issue regarding the bill amount"}
              ans={
                <div>
                  <div>
                    Kindly send us an email at support@rusticspot.in with the
                    following information:
                  </div>
                  <div>
                    - Attach a screenshot of the bill, indicating the issue
                  </div>
                  <div>- Include the Order ID (if applicable)</div>
                  <div>- Specify the item price and any extra charges</div>
                  <div>
                    - Provide a description of the problem you're encountering
                  </div>
                </div>
              }
            />
            <AccordionForContactUs
              question={"I want an invoice for my order"}
              ans={
                <div>
                  <div>
                    To receive the order invoice via email, follow these steps:
                  </div>
                  <div>
                    - Navigate to ""My Account"" and then select the order for
                    which you need an invoice
                  </div>
                  <div>
                    - Click on ""HELP"" and choose ""I have payment and bill
                    related queries for this order"" and then select ""I want an
                    invoice for this order"" to initiate the request
                  </div>
                  <div>
                    - You'll receive the invoice within 24 hours on your
                    registered email address
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
