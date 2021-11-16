import { InputAdornment } from "@material-ui/core"

// To do: Provide intl support
export const CurrencyInputAdornment = (locales = "en-US", alpha3Code) => {
  const Intlnumber = new Intl.NumberFormat(locales, {
    style: "currency",
    currency: alpha3Code,
  }).format(10.0)

  const currecny = Intlnumber.replace(/[\d\., ]/g, "")
  return <InputAdornment position="start">₹</InputAdornment>
}

export const USDInputAdornment = <InputAdornment position="start">$</InputAdornment>
