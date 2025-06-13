import Footer from "@/react-components/Footer";
import Navbar from "@/react-components/Navbar";
import React from "react";

function TermsAndCondition() {
  return (
    <div>
      <div>
        {/* navbar */}
        <Navbar />
        {/* term and condition page navigation */}
        <div
          className="text-sm mb-6 flex items-center space-x-2 text-gray-600 ml-20 "
          style={{ border: "1px 1px solid gray" }}
        >
          <span
            className="text-blue-600 cursor-pointer font-bold "
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            Home
          </span>
          <span style={{ marginTop: "20px" }}>{">"}</span>
          <span
            className="text-blue-600 cursor-pointer font-bold"
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            Profile
          </span>
          <span style={{ marginTop: "20px" }}>{">"}</span>
          <span
            className=" text-black font-bold"
            style={{ fontSize: "20px", marginTop: "20px" }}
          >
            Terms And Condition
          </span>
        </div>

        {/* terms and condition banner */}
        <div className="h-20  bg-sky-400 flex items-center  ">
          <div className=" ">
            <h1 className="  text-center  ml-20 text-3xl text-white font-medium">
              Terms And Condition
            </h1>
          </div>
        </div>

        {/* terms and condition */}

        <div className=" flex items-center justify-center bg-gray-50 mb-5 mt-5">
          <div className="bg-white max-w-6xl w-full rounded-lg shadow p-6">
            <h1 className="text-xl font-semibold mb-4">Terms & Conditions</h1>

            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h2 className="font-semibold text-base mb-1">
                  1. Introduction
                </h2>
                <p>
                  These terms and conditions apply to the Prime Select app
                  (hereby referred to as "Application") for mobile devices that
                  was created by Jiss Anto (hereby referred to as "Service
                  Provider") as a Free service. Upon downloading or utilizing
                  the Application, you are automatically agreeing to the
                  following terms. It is strongly advised that you thoroughly
                  read and understand these terms prior to using the
                  Application. Unauthorized copying, modification of the
                  Application, any part of the Application, or our trademarks is
                  strictly prohibited. Any attempts to extract the source code
                  of the Application, translate the Application into other
                  languages, or create derivative versions are not permitted.
                  All trademarks, copyrights, database rights, and other
                  intellectual property rights related to the Application remain
                  the property of the Service Provider.
                </p>
                <p className="mt-2">
                  Upon downloading or utilizing the Application, you are
                  automatically agreeing to the following terms...
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-base mb-1">
                  2. Modifications and Charges
                </h2>
                <p>
                  The Service Provider is dedicated to ensuring that the
                  Application is as beneficial and efficient as possible. As
                  such, they reserve the right to modify the Application or
                  charge for their services at any time and for any reason...
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-base mb-1">
                  3. Data Privacy and Security
                </h2>
                <p>
                  The Application stores and processes personal data that you
                  have provided to the Service Provider in order to provide the
                  Service...
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-base mb-1">
                  4. Third-Party Services
                </h2>
                <p>
                  Please note that the Application utilizes third-party services
                  that have their own Terms and Conditions...
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">
                  5. Connectivity and Charges
                </h2>
                <p>
                  Please be aware that the Service Provider does not assume
                  responsibility for certain aspects. Some functions of the
                  Application require an active internet connection, which can
                  be Wi-Fi or provided by your mobile network provider. The
                  Service Provider cannot be held responsible if the Application
                  does not function at full capacity due to lack of access to
                  Wi-Fi or if you have exhausted your data allowance. If you are
                  using the Application outside of a Wi-Fi area, please be aware
                  that your mobile network provider's agreement terms still
                  apply. Consequently, you may incur charges from your mobile
                  provider for data usage during the connection to the
                  Application, or other third-party charges. By using the
                  Application, you accept responsibility for any such charges,
                  including roaming data charges if you use the Application
                  outside of your home territory (i.e., region or country)
                  without disabling data roaming. If you are not the bill payer
                  for the device on which you are using the Application, they
                  assume that you have obtained permission from the bill payer..
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">
                  6. Usage Responsibilities
                </h2>
                <p>
                  Similarly, the Service Provider cannot always assume
                  responsibility for your usage of the Application. For
                  instance, it is your responsibility to ensure that your device
                  remains charged. If your device runs out of battery and you
                  are unable to access the Service, the Service Provider cannot
                  be held responsible.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">
                  7. Limitation of Liability
                </h2>
                <p>
                  In terms of the Service Provider’s responsibility for your use
                  of the Application, it is important to note that while they
                  strive to ensure that it is updated and accurate at all times,
                  they do rely on third parties to provide information to them
                  so that they can make it available to you. The Service
                  Provider accepts no liability for any loss, direct or
                  indirect, that you experience as a result of relying entirely
                  on this functionality of the Application.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">
                  8. Updates and Termination
                </h2>
                <p>
                  The Service Provider may wish to update the Application at
                  some point. The Application is currently available as per the
                  requirements for the operating system (and for any additional
                  systems they decide to extend the availability of the
                  Application to) may change, and you will need to download the
                  updates if you want to continue using the Application. The
                  Service Provider does not guarantee that it will always update
                  the Application so that it is relevant to you and/or
                  compatible with the particular operating system version
                  installed on your device. However, you agree to always accept
                  updates to the Application when offered to you. The Service
                  Provider may also wish to cease providing the Application and
                  may terminate its use at any time without providing
                  termination notice to you. Unless they inform you otherwise,
                  upon any termination, (a) the rights and licenses granted to
                  you in these terms will end; (b) you must cease using the
                  Application, and (if necessary) delete it from your device.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">
                  9. Changes to These Terms and Conditions
                </h2>
                <p>
                  The Service Provider may periodically update their Terms and
                  Conditions. Therefore, you are advised to review this page
                  regularly for any changes. The Service Provider will notify
                  you of any changes by posting the new Terms and Conditions on
                  this page. These terms and conditions are effective as of
                  2025-04-19.
                </p>
              </div>
              <div>
                <h2 className="font-semibold text-base mb-1">10. Contact Us</h2>
                <p>
                  If you have any questions or suggestions about the Terms and
                  Conditions, please do not hesitate to contact the Service
                  Provider at: Email: info@primeselect.ae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default TermsAndCondition;
