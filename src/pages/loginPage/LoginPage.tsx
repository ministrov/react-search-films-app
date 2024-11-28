import EnterFrom from "../../components/enterForm/EnterFrom";
import FeedbackFrom from "../../components/feedbackForm/FeedbackFrom";

function LoginPage() {
  return (
    <section>
      <h2 className="visually-hidden">Страница входа пользователя</h2>
      <EnterFrom />

      <FeedbackFrom />
    </section>
  )
}

export default LoginPage;
