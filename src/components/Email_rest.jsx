import axios from "axios";
import { useState } from "react";

const Email_rest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_8ry407n";
    const templatedId = "template_q8duhwy";
    const publicKey = "xwRCZZnxzzMZ5XK9z";

    const datas = {
      service_id: serviceId,
      template_id: templatedId,
      user_id: publicKey,
      template_params: {
        to_name: "web labs",
        from_name: name,
        message: message,
        user_email: email,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        datas
      );
      console.log(res.data);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Email_rest;
