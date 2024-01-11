const FormWrapper = ({ title, titleExpence, children }) => {
  return (
    <div className="flex flex-col w-[48%] border-dashed border-2 border-black rounded-lg p-6 mt-8">
      <h3 className="">
        {title}
        {titleExpence && (
          <>
            <span className="text-success">{titleExpence}</span>
            <span className="mx-1">Expense</span>
          </>
        )}
      </h3>
      {children}
    </div>
  );
};

export default FormWrapper;
