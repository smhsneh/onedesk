const Button = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`
        rounded-2xl
        px-5
        py-3
        bg-black
        text-white
        font-medium
        transition-all
        hover:scale-[1.02]
        active:scale-[0.98]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;