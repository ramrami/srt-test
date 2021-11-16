import React, { Children } from "react"

export const FormRow = ({ className = "", children }) => {
  if (Children.count(children) > 1) {
    children = Children.map(children, (child) =>
      React.cloneElement(child, { className: "flex-grow" })
    )
  }
  return <div className={`${className} flex flex-row space-x-2`}>{children}</div>
}

export const Form = ({ children, className = "", ...props }) => {
  return (
    <form className={`${className} space-x-2 space-y-2`} {...props}>
      {children}
    </form>
  )
}

export const FormRowItem = ({ children, className = "" }) => {
  return <div className={`${className}`}>{children}</div>
}
