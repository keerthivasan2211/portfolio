import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script");
    script.src = "//js-na2.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "245070599",
          formId: "83dfcb6b-1e75-45c0-9c6d-f95a342723cc",
          region: "na2",
          target: "#hubspot-form"
        });
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact
      </motion.h2>

      {/* HubSpot Form Container */}
      <div className="flex justify-center">
        <div id="hubspot-form" className="w-full max-w-md"></div>
      </div>

      <div className="mt-5 text-center font-medium">
        @ 2024 All rights reserved by Keerthivasan
      </div>
    </div>
  );
};

export default Contact;
