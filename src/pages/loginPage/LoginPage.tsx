import EnterFrom from "../../components/enterForm/EnterFrom";

export default function LoginPage() {
  // const onSubmitHandler = () => {
  //   console.log('form is submitted!!!');
  //   // console.log(inputValue);
  // };

  // useEffect(() => {
  //   onSubmitHandler();
  // }, [inputValue]);

  return (
    <section>
      <h2 className="visually-hidden">Страница входа пользователя</h2>
      <EnterFrom />
    </section>
  )
}
