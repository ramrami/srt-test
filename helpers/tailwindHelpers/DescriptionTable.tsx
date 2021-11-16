export const DTElement = ({ children }) => {
  return <div className="sm:col-span-1">{children}</div>;
};

export const DescriptionTable = ({ children, ...props }) => {
  let className = props.className || "";
  return (
    <dl
      className={`grid grid-cols-1 pt-3 gap-x-12 gap-y-3 sm:gap-y-4 sm:grid-cols-2 ${className}`}
    >
      {children}
    </dl>
  );
};

export const DTTitle = ({ children, prose = true }) => {
  return (
    <dt
      className={`mt-1 ${
        prose ? "prose" : ""
      } font-medium prose text-gray-500 `}
    >
      {children}
    </dt>
  );
};
export const DTBody = ({ children, prose = true }) => {
  return (
    <dd className={`mt-0.5 ${prose ? "prose" : ""} text-gray-900 `}>
      {children}
    </dd>
  );
};

export const ListOfItems = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

export const EducationList = ({ credentials }) => {
  return (
    <div className="flex flex-row flex-initial gap-x-4 ">
      {credentials.map((degree) => (
        <div
          className="grid grid-cols-1 p-5 border-2 rounded-md gap-y-3 "
          key={degree.id}
        >
          <p className="font-bold ">
            {degree.scope
              ? `${degree.level} of ${degree.scope} in `
              : `${degree.level} in`}
            <br />
            {degree.major}
          </p>
          <p>
            <b>At: </b>
            {degree.location}
          </p>
          <p>
            <b>Year: </b>
            {degree.year}
          </p>
        </div>
      ))}
    </div>
  );
};
