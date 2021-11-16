import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import isBetween from "dayjs/plugin/isBetween"

dayjs.extend(relativeTime)
dayjs.extend(isBetween)
dayjs().format()

export const displayDependingOnAgeOfItem = (date) => {
  return isOlderThan5Days(date) ? displayRelativeDate(date) : displayLongDate(date)
}

const displayLongDate = (date) => {
  return `on ${dayjs(date).format("MMMM D, YYYY")}`
}
const displayRelativeDate = (date) => {
  return dayjs(date).fromNow()
}

const isOlderThan5Days = (date) => {
  return dayjs(date).isBetween(dayjs().subtract(5, "days"), dayjs())
}
