const Text = ({ className, children }) => {
  return <span className={`text ${className ?? ''}`}>{children}</span>
}

export { Text }
