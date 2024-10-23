// type Props = {};

import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import SignOut from "../features/user/SignOut";
import { useSelector } from "react-redux";
import { getUsername } from "../store/userSlice";

function Header() {
  const username = useSelector(getUsername);
  const isLoggedIn = !!username;
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-sans uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <div className="flex items-center justify-between gap-2">
        {isLoggedIn && (
          <>
            <Username username={username} />
            <SignOut />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
