const FormWrapper = ({ title, children }) => {
  return (
    <div className="flex flex-col w-[50%] border-dashed border-2 border-black rounded-lg p-6 mt-8">
      <h3 className="">{title}</h3>
      {children}
    </div>
  );
};

export default FormWrapper;
