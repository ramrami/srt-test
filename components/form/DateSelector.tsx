import React, { useState } from "react"
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import dayjs from "dayjs"
import DateFnsUtils from "@date-io/date-fns"

export const DateSelector = ({
  className = "",
  minAge = 0,
  maxDateMessage = "Date should not be after maximal date",
}) => {
  const [selectedDate, handleDateChange] = useState(dayjs().subtract(minAge, "year").toDate())

  return (
    <div className={className}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          clearable
          value={selectedDate}
          placeholder="mm/dd/yyyy"
          onChange={(date) => handleDateChange(date!)}
          maxDate={dayjs().subtract(minAge, "year")}
          format="MM/dd/yyyy"
          maxDateMessage={maxDateMessage}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export const BirthDateSelector = ({ className = "" }) => {
  return (
    <DateSelector
      className={className}
      minAge={18}
      maxDateMessage={"You must be 18+ to use this site"}
    />
  )
}
