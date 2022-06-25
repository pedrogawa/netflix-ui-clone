import "./styles.css";

interface FAQAnswersProps {
  answer: string;
}

export default function FAQAnswers({ answer }: FAQAnswersProps) {
  return (
    <div className="faq-answer-component closed">
      <span>{answer}</span>
    </div>
  );
}
