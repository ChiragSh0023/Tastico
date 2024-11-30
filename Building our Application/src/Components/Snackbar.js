const SnackBar = ({ message }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#60b246] text-[#fff] p-2 h-9 text-[14px] text-center tracking-[0.3px] font-metropolis">
      <div>{message}</div>
    </div>
  );
};

export default SnackBar;
