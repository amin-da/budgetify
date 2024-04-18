import { Form, useLoaderData } from "react-router-dom";
import { fetchData } from "../utils/helpers";

//loader
export const testLoader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
};

export const testAction = async ({ request }) => {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  alert(_action);
  return null;
};

const Test = () => {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <div>
      <Form method="post" action="/test">
        <input type="text" name="testPage" className="input" />
        <input
          type="hidden"
          name="_action"
          value={userName}
        />
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </Form>
    </div>
  );
};

export default Test;
