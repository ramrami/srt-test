import { SingleLineTextField } from "app/core/components/form/SingleLineTextField"
import { CountrySelectField } from "app/core/components/form/CountrySelectField"
import React from "react"
export { FORM_ERROR } from "app/core/components/form/Form"
import { Formik } from "formik"
import { MultiLineTextField } from "app/core/components/form/MultilineTextField"
import { modalitiesArray } from "app/core/helpers/modalitiesList"
import { demographicsArray } from "app/core/helpers/demographicList"
import { MultiSelectInput } from "app/core/components/form/MultiSelectInput"
import { issuesArray } from "app/core/helpers/issuesList"
import { languagesArray } from "app/core/helpers/languageList"
import { Form, FormRow, FormRowItem } from "app/tailwindHelpers/FormDesignComponents"
import Button from "app/tailwindHelpers/Button"
import { Card } from "app/tailwindHelpers/Card"
import { ImageUploader } from "app/core/components/form/ImageUploader"

export const TherapistForm = ({ submitText, initialValues, onSubmit, title, schema }) => {
  return (
    <Card className="max-w-4xl">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
        {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <FormRow>
              <FormRowItem>
                <SingleLineTextField
                  name="firstName"
                  value={values.firstName}
                  label="First Name"
                  placeholder="Hanz"
                />
              </FormRowItem>

              <FormRowItem>
                <SingleLineTextField
                  name="lastName"
                  value={values.lastName}
                  label="Last Name"
                  placeholder="Zimmer"
                />
              </FormRowItem>
            </FormRow>
            <FormRow>
              <FormRowItem>
                <SingleLineTextField
                  name="phone"
                  label="Phone Number"
                  placeholder="+1-818-555-0123"
                />
              </FormRowItem>
              <div className="col-span-1">
                <SingleLineTextField
                  name="postalCode"
                  value={values.postalCode}
                  label="Postal Code"
                  placeholder="94306"
                />
              </div>
              <FormRowItem>
                <CountrySelectField
                  name="country"
                  value={values.country}
                  label="What country do you live in?"
                  setFieldValue={setFieldValue}
                />
              </FormRowItem>
            </FormRow>
            <FormRow>
              <FormRowItem className="flex-grow">
                <MultiLineTextField
                  name="description"
                  value={values.description}
                  placeholder="About You"
                  label="Please give a description of who you are"
                />
              </FormRowItem>
            </FormRow>
            <FormRow>
              <FormRowItem className="flex-grow">
                <MultiLineTextField
                  value={values.therapyProcess}
                  name="therapyProcess"
                  placeholder="Therapy Process"
                  label="Please give a description of your therapy process"
                />
              </FormRowItem>
            </FormRow>
            <FormRow>
              {/* <FileUploader /> */}
              <FormRowItem>
                <SingleLineTextField
                  name="profileImageUrl"
                  value={values.profileImageUrl}
                  label="Website / Social Media URL"
                  placeholder="www.yoursite.com"
                />
              </FormRowItem>

              <FormRowItem>
                <ImageUploader />
              </FormRowItem>
            </FormRow>
            <FormRow>
              <FormRowItem className="w-1/2">
                <MultiSelectInput
                  name="modalities"
                  value={values.modalities}
                  label="Provided Modalities"
                  placeholder="Your Modalities"
                  options={modalitiesArray}
                  isRequired={true}
                  setFieldValue={setFieldValue}
                />
              </FormRowItem>
              <FormRowItem className="w-1/2">
                <MultiSelectInput
                  name="languages"
                  value={values.languages}
                  label="Spoken Languages"
                  placeholder="Spoken Languages"
                  options={languagesArray}
                  isRequired={true}
                  setFieldValue={setFieldValue}
                />
              </FormRowItem>
            </FormRow>
            <FormRow>
              <FormRowItem className="w-3/4">
                <MultiSelectInput
                  name="demographics"
                  value={values.demographics}
                  label="Demographics you work with"
                  placeholder="Demographics you work with"
                  options={demographicsArray}
                  isRequired={true}
                  setFieldValue={setFieldValue}
                />
              </FormRowItem>
            </FormRow>
            <FormRow>
              <FormRowItem className="w-3/4">
                <MultiSelectInput
                  name="specializedIssues"
                  label="Issues you specialize in"
                  placeholder="Issues you specialize in"
                  options={issuesArray}
                  isRequired={true}
                  setFieldValue={setFieldValue}
                />
              </FormRowItem>
            </FormRow>
            <Button className="mt-5" disabled={isSubmitting} type="submit">
              {submitText}
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  )
}
