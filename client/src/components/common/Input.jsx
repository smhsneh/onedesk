const Input = ({ className = "", ...props }) => {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-2xl
        border border-white/30
        bg-white/40
        px-4
        py-3
        outline-none
        backdrop-blur-xl
        placeholder:text-black/40
        focus:ring-2
        focus:ring-black/10
        ${className}
      `}
    />
  );
};

export default Input;