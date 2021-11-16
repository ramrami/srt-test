import _ from "lodash"

const InsuranceCard = ({ insurance }) => {
  let { name, state, country } = insurance

  return (
    <div className={`grid grid-cols-1 p-5 border-2 rounded-md border-grey-100 gap-y-3`}>
      <p className="font-bold">{name}</p>
      {state ? (
        <p>
          <b>State:</b> {state}
        </p>
      ) : (
        ""
      )}
      {country ? (
        <p>
          <b>Country:</b> {country}
        </p>
      ) : (
        ""
      )}
    </div>
  )
}

export const InsuranceDisplay = ({ insurances }) => {
  // Make if no insurances then put out of pocket only
  // Add out of pocket only option to interface
  // Add filter to grey out insurances if insurances aren't in their country (unless international)
  return (
    <div className="flex space-x-4 flex-rows">
      {insurances.map((option) => {
        return <InsuranceCard key={option.id} insurance={option} />
      })}
    </div>
  )
}
