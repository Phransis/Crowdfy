import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="absolute  left-0 w-full h-16 bg-white opacity-80 flex items-center justify-center">
          <div className="flex flex-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-gray-700">Learn more about our mission.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-700">Get in touch with us.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Privacy Policy</h3>
              <p className="text-gray-700">Read our privacy policy.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold">Terms of Service</h3>
              <p className="text-gray-700">View our terms of service.</p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-700">
              © 2023 Crowdfy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
