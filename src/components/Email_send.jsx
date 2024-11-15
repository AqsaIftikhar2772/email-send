import { useState } from "react";
import emailjs from "@emailjs/browser";

const Email_send = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    //   your EmailJs service  ID, template ID, and public key
    const serviceId = "service_8ry407n";
    const templatedId = "template_q8duhwy";
    const publicKey = "xwRCZZnxzzMZ5XK9z";
    // create a new object that contains dyamic template
    const templateParams = {
      to_name: "web labs",
      from_name: email,

      message: message,
    };
    // send the email using Emailjs
    emailjs
      .send(serviceId, templatedId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };

  return (
    <div className="main-div">
      <h1>FORM</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">send Email</button>
      </form>
    </div>
  );
};

export default Email_send;
