type Props = {
  username: string;
};

function Username({ username }: Props) {
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
