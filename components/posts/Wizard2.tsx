import { Button, createStyles, FormLabel, Grid, makeStyles, Theme } from "@material-ui/core"
import { SingleLineTextField } from "app/core/components/form/SingleLineTextField"
import React, { useState } from "react"
export { FORM_ERROR } from "app/core/components/form/Form"
import { Form, Formik } from "formik"
import { MultiSelectInput } from "app/core/components/form/MultiSelectInput"
import { MultiLineTextField } from "app/core/components/form/MultilineTextField"
import TherapySettingInput from "app/core/components/form/TherapySettingInput"
import { USDInputAdornment } from "app/core/helpers/inputDecorators"
import { issuesArray } from "app/core/helpers/issuesList"
import { YCreatePostSchemaPage0, YCreatePostSchemaPage1 } from "app/validators/postValidators"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
      margin: "auto",
      paddingTop: "2em",
      paddingBottom: "2em",
    },
    form: {
      width: "90%",
      margin: "auto",
    },
    item: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      whiteSpace: "nowrap",
      marginBottom: theme.spacing(1),
    },
    container: { paddingTop: "1ch", paddingBottom: "1ch" },
    button: {
      marginLeft: "1ch",
    },
    mainContainer: { margin: "auto", alignItems: "flex-start" },
    formLabel: { paddingBottom: "1ch" },
  })
)
export const PostForm2 = ({ submitText, initialValues, onSubmit, title }) => {
  const classes = useStyles()
  const [fValues, setFValues] = useState(initialValues)
  const [currentStep, setCurrentStep] = useState(0)

  const handleNextStep = (newValues, isFinal = false) => {
    if (isFinal) {
      onSubmit(newValues)
    }
    setFValues((prevStepValues) => ({ ...prevStepValues, ...newValues }))
    setCurrentStep((currentStep) => currentStep + 1)
  }

  const handlePrevStep = (newValues) => {
    setFValues((prevStepValues) => ({ ...prevStepValues, ...newValues }))
    setCurrentStep((currentStep) => currentStep - 1)
  }

  const steps = [
    <FirstStep key={1} next={handleNextStep} data={fValues} classes={classes} />,
    <SecondStep
      key={1}
      prev={handlePrevStep}
      next={handleNextStep}
      data={fValues}
      classes={classes}
      submitText={submitText}
    />,
  ]
  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      {steps[currentStep]}
      <pre>{JSON.stringify(fValues, null, 2)}</pre>
    </div>
  )
}
const FirstStep = (cProps) => {
  const cHandleSubmit = (values) => {
    cProps.next(values)
  }
  const { classes, data } = cProps
  return (
    <Formik initialValues={data} onSubmit={cHandleSubmit} validationSchema={YCreatePostSchemaPage0}>
      {({ values, setFieldValue, handleSubmit, isSubmitting, ...props }) => (
        <Form onSubmit={handleSubmit} className={classes.form}>
          <Grid item className={classes.item} xs={11}>
            <MultiLineTextField
              value={data.problems}
              name="problems"
              placeholder="Your Struggles"
              label="What are you struggling with?"
            />
          </Grid>
          <Grid item className={classes.item} xs={11}>
            <MultiLineTextField
              value={data.expectations}
              name="expectations"
              label="What do you expect to get out of therapy?"
              placeholder="Your Expectations"
            />
          </Grid>
          <Grid item className={classes.item} xs={11}>
            <MultiLineTextField
              value={data.furtherInfo}
              name="furtherInfo"
              placeholder="Anything else we should know?"
              label="Further Information"
            />
          </Grid>
          <Grid item className={classes.item} xs={8}>
            <MultiSelectInput
              name="specializedIssues"
              label="What issues best align with what you're struggling with?"
              placeholder="Issues you're stuggling with"
              options={issuesArray}
              isRequired={true}
              setFieldValue={setFieldValue}
            />
          </Grid>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            disabled={isSubmitting}
            type="submit"
          >
            Next
          </Button>
        </Form>
      )}
    </Formik>
  )
}

const SecondStep = (cProps) => {
  const cHandleSubmit = (values) => {
    cProps.next(values, true)
  }
  const { classes, data } = cProps
  return (
    <Formik initialValues={data} onSubmit={cHandleSubmit} validationSchema={YCreatePostSchemaPage1}>
      {({ values, setFieldValue, handleSubmit, isSubmitting, ...props }) => (
        <Form onSubmit={handleSubmit} className={classes.form}>
          <TherapySettingInput
            name={"settingPreference"}
            value={data.settingPreference}
            setFieldValue={setFieldValue}
          />
          <Grid container item className={classes.container} xs={6}>
            <FormLabel className={classes.formLabel}> What is your budget per session?</FormLabel>
            <Grid item className={classes.item} xs={6}>
              <SingleLineTextField
                name="minBudget"
                value={data.minBudget}
                label="Min Budget"
                placeholder="Min"
                startAdornment={USDInputAdornment}
              />
            </Grid>
            <Grid item className={classes.item} xs={6}>
              <SingleLineTextField
                name="maxBudget"
                value={data.maxBudget}
                label="Max Budget"
                placeholder="Max"
                startAdornment={USDInputAdornment}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => {
              cProps.prev(data)
            }}
            type="button"
          >
            Back
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            disabled={isSubmitting}
            type="submit"
          >
            {cProps.submitText}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
