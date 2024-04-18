import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";
import FormWrapper from "../layouts/formWrapper";

const AddBudgetForm = () => {
  // use useFetcher hook for access to state of form submissions
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const fromRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      fromRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <FormWrapper title={"Create budget"}>
      <fetcher.Form
        method="post"
        ref={fromRef}
        className="w-full flex flex-col gap-4 mt-4"
      >
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="newBudget" className="text-lg font-bold">
            Budget Name
          </label>
          <input
            required
            type="text"
            id="newBudget"
            name="newBudget"
            placeholder="work supplies"
            className="input input-bordered input-success w-full text-lg"
            ref={focusRef}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="newBudgetAmount" className="text-lg font-bold">
            Amount
          </label>
          <input
            required
            type="number"
            step={0.5}
            id="newBudgetAmount"
            name="newBudgetAmount"
            inputMode="decimal"
            placeholder="800$"
            className="input input-bordered input-success w-full text-lg"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-success text-white text-lg"
        >
          Create budget
        </button>
      </fetcher.Form>
    </FormWrapper>
  );
};

export default AddBudgetForm;
