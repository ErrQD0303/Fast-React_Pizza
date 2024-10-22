import { FormEvent, useState } from "react";
import Button from "../../components/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { updateName } from "../../store/userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
