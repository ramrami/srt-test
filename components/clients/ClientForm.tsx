import { CheckboxInput } from "app/core/components/form/CheckboxInput"
import { SingleLineTextField } from "app/core/components/form/SingleLineTextField"
import { CountrySelectField } from "app/core/components/form/CountrySelectField"
import React from "react"
export { FORM_ERROR } from "app/core/components/form/Form"
import { Formik } from "formik"
import { MultiSelectInput } from "app/core/components/form/MultiSelectInput"
import { languagesArray } from "app/core/helpers/languageList"
import Button from "app/tailwindHelpers/Button"
import { BirthDateSelector } from "app/core/components/form/DateSelector"

export const ClientForm = ({ submitText, initialValues, title, onSubmit, schema }) => {
  return (
    <div className="flex justify-between mx-auto rounded-md xl:shadow-md xl:w-4/5 xl:p-5">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
        {({ values, handleChange, handleBlur, setFieldValue, handleSubmit, isSubmitting }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-start mx-auto space-y-4 xl:justify-between xl:p-5 xl:w-9/12 xl:space-y-8"
          >
            <h1 className="prose prose-2xl">{title}</h1>
            <div className="flex flex-col flex-wrap justify-start space-y-4 xl:space-y-0 xl:flex-nowrap xl:space-x-5 xl:flex-row xl:justify-between">
              <SingleLineTextField
                name="city"
                value={values.postalCode}
                label="Residing City"
                placeholder="Los Angeles"
              />
              <SingleLineTextField
                name="state"
                value={values.postalCode}
                label="Residing State"
                placeholder="California"
              />
              <CountrySelectField
                name="country"
                value={values.country}
                label="Residing Country"
                setFieldValue={setFieldValue}
              />
            </div>
            <div className="flex flex-col flex-wrap justify-start pt-4 space-y-4 xl:space-y-0 xl:flex-nowrap xl:space-x-5 xl:flex-row">
              <MultiSelectInput
                name="languages"
                value={values.languages}
                label="Spoken Languages"
                placeholder="Spoken Languages"
                className={"w-2/4"}
                options={languagesArray}
                isRequired={true}
                setFieldValue={setFieldValue}
              />
              <BirthDateSelector className={"w-1/3"} />
            </div>

            <div className="flex flex-col flex-wrap justify-start pt-4 space-y-4 xl:space-y-0 xl:flex-nowrap xl:space-x-5 xl:flex-row">
              <CheckboxInput
                name="hadSeenTherapist"
                label="I have seen a therapist before"
                value={values.hadSeenTherapist}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <CheckboxInput
                name="isTakingMeds"
                label="I am taking medication"
                value={values.isTakingMeds}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="flex flex-col justify-start space-y-4 xl:space-y-0 xl:flex-nowrap xl:space-x-5 ">
              <CheckboxInput
                name="isInsured"
                label="I am insured"
                value={values.isInsured}
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.isInsured || false}
              />
              <div
                className="w-1/2 p-2 prose bg-indigo-700 bg-opacity-25 rounded "
                style={values.isInsured ? { display: "none" } : { display: "inline" }}
              >
                <p>{"When this is not checked this marks that you will pay out of pocket only"}</p>
              </div>
              <div
                className="w-64 space-y-4"
                style={values.isInsured ? { display: "inline" } : { display: "none" }}
              >
                <SingleLineTextField
                  name="insurance.name"
                  label="Insurance Name"
                  placeholder="Insurance Name"
                  value={values.insuranceName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <SingleLineTextField
                  name="insurance.state"
                  label="Insurance State"
                  placeholder="Insurance Name"
                  defaultValue={values.state}
                  value={values.insuranceName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <SingleLineTextField
                  name="insurance.country"
                  label="Insurance Country"
                  placeholder="Insurance Name"
                  defaultValue={values.country}
                  value={values.insuranceName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            <Button disabled={isSubmitting} type="submit" className="pb-5">
              {submitText}
            </Button>
          </form>
        )}
      </Formik>
    </div>
  )
}
