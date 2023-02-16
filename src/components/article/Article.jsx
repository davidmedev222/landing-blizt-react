const Article = ({ className, children }) => {
  return <article className={`article ${className ?? ''}`}>{children}</article>
}

export { Article }
