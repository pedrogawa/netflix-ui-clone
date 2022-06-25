import { useCallback } from "react";
import FAQAnswers from "../FAQAnswers";
import FAQButton from "../FAQButton";
import FormEmail from "../FormEmail";
import "./styles.css";

export default function FAQComponent() {
  const openFAQAnswer = useCallback((position: number) => {
    let faqList = document.getElementsByClassName("faq-component-questions");

    console.log(faqList[0]);

    Array.from(faqList).forEach(() => {
      let faqAnswer = document.querySelector<HTMLElement>(
        `.faq-component-questions li:nth-child(${position})`
      );

      let spanAnswer = faqAnswer?.querySelector(".faq-answer-component");
      if (spanAnswer?.classList.contains("closed")) {
        spanAnswer?.classList.remove("closed");
      } else {
        spanAnswer?.classList.add("closed");
      }
    });
  }, []);

  return (
    <div className="faq-component-container">
      <h1>Frenquently Asked Questions</h1>
      <ul className="faq-component-questions">
        <li onClick={() => openFAQAnswer(1)}>
          <FAQButton label="What is Netflix?" />
          <FAQAnswers answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!" />
        </li>
        <li onClick={() => openFAQAnswer(2)}>
          <FAQButton label="How much does Netflix cost?" />
          <FAQAnswers answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL25.90 to BRL55.90 a month. No extra costs, no contracts." />
        </li>
        <li onClick={() => openFAQAnswer(3)}>
          <FAQButton label="Where can I watch?" />
          <FAQAnswers answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." />
        </li>
        <li onClick={() => openFAQAnswer(4)}>
          <FAQButton label="How do I cancel?" />
          <FAQAnswers answer="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." />
        </li>
        <li onClick={() => openFAQAnswer(5)}>
          <FAQButton label="What can I watch on Netflix" />
          <FAQAnswers answer="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
        </li>
        <li onClick={() => openFAQAnswer(6)}>
          <FAQButton label="Is netflix good for kids?" />
          <FAQAnswers answer="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." />
        </li>
      </ul>
      <FormEmail />
    </div>
  );
}
