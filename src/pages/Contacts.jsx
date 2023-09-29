import React from "react";

export const Contacts = () => {
  return (
    <div className="contactWraper">
      <h1>Contact</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58502.452065858255!2d72.34177921479044!3d23.58986656749427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c422caf789ef5%3A0x170bbc90b8be8bdc!2sMehsana%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1692867415769!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="form_container">
        <div className="contact_form">
          <form action="https://formspree.io/f/maygopnq" method="post">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
              // value=""
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
              // value=""
            />

            <textarea
              name="message"
              id=""
              cols="30"
              rows="5"
              placeholder="Enter Your Message"
              autoComplete="off"
              required
            ></textarea>

            <input id="contactSubmitBtn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
