const Icon = ({ className, children }) => {
  return <button className={`icon ${className ?? ''}`}>{children}</button>
}

export { Icon }
