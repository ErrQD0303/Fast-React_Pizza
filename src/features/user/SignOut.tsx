import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { AppDispatch } from "../../store/store";
import { updateName } from "../../store/userSlice";
import { setLocalStorageData } from "../../services/localStorageData";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

function SignOut() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  function handleSignOut() {
    dispatch(updateName(""));
    setLocalStorageData({ username: "" });
    navigate("/");
  }
  return (
    <Button type="logout" onClick={handleSignOut}>
      <AiOutlineLogout size={20} />
    </Button>
  );
}

export default SignOut;
