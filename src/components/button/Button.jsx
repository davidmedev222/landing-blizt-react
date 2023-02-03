const Button = ({ className = '', children, ...rest }) => {
  return (
    <button {...rest} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export { Button };
