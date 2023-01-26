const Button = ({ className = '', children }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export { Button };
