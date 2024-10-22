import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function Username() {
  const username: string = useSelector(
    (state: RootState) => state.user.username,
  );
  if (!username) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
