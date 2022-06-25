import { AiOutlinePlus } from "react-icons/ai";
import "./styles.css";

interface FAQButtonProps {
  label: string;
}

export default function FAQButton({ label }: FAQButtonProps) {
  return (
    <div className="faq-button-container">
      <span>{label}</span>
      <AiOutlinePlus size={32} />
    </div>
  );
}
