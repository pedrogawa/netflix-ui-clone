import "./styles.css";

import { AiOutlineRight } from "react-icons/ai";

export default function FormEmail() {
  return (
    <div className="send-email">
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <div className="send-email-form-button">
        <input placeholder="Email address" />
        <button className="get-started-button">
          <span>Get Started</span>
          <AiOutlineRight size={26} />
        </button>
      </div>
    </div>
  );
}
