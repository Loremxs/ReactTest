import { useState } from "react";
import Button from "./Button/Button";
export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("help");
  // const [hasError, setHasError] = useState(true);
  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm({
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    });
  }
  function handleReasonChange(event) {
    setReason(event.target.value);
  }
  // function toggleError() {
  //   setHasError((prev) => !prev);
  // }
  return (
    <section>
      <h3>Обратная связь</h3>
      <form action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handleNameChange}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select id="reason" className="control" onChange={handleReasonChange}>
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <pre>
          Name: {form.name}
          Reason: {form.reason}
        </pre>
        <Button disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
      </form>
    </section>
  );
}
