import { useFetcher } from "react-router-dom";
import Button from "../../components/Button";

const UpdateOrder = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;
