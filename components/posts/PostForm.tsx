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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
      width: "40%",
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
export const PostForm = ({ submitText, initialValues, onSubmit, title, schema }) => {
  const classes = useStyles()

  const [step, setStep] = useState(0)

  return (
    <div className={classes.root}>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
        {({ values, setFieldValue, handleSubmit, isSubmitting, ...props }) => (
          <Grid container item className={classes.mainContainer} spacing={3} xs={10}>
            <Form onSubmit={handleSubmit} className={classes.form}>
              <h1>{title}</h1>
              {step == 0 ? (
                <div>
                  <FirstStep values={values} setFieldValue={setFieldValue} classes={classes} />
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    onClick={() => setStep(1)}
                  >
                    {"Next"}
                  </Button>
                </div>
              ) : (
                <div>
                  <SecondStep values={values} setFieldValue={setFieldValue} classes={classes} />
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    onClick={() => setStep(0)}
                  >
                    {"Back"}
                  </Button>
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {submitText}
                  </Button>
                </div>
              )}

              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            </Form>
          </Grid>
        )}
      </Formik>
    </div>
  )
}

const FirstStep = ({ values, setFieldValue, classes }) => {
  return (
    <>
      <Grid item className={classes.item} xs={11}>
        <MultiLineTextField
          value={values.problems}
          name="problems"
          placeholder="Your Struggles"
          label="What are you struggling with?"
        />
      </Grid>
      <Grid item className={classes.item} xs={11}>
        <MultiLineTextField
          value={values.problems}
          name="expectations"
          label="What do you expect to get out of therapy?"
          placeholder="Your Expectations"
        />
      </Grid>
      <Grid item className={classes.item} xs={11}>
        <MultiLineTextField
          value={values.problems}
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
    </>
  )
}

const SecondStep = ({ values, setFieldValue, classes }) => {
  return (
    <>
      <TherapySettingInput
        name={"settingPreference"}
        value={values.settingPreference}
        setFieldValue={setFieldValue}
      />
      <Grid container item className={classes.container} xs={6}>
        <FormLabel className={classes.formLabel}> What is your budget per session?</FormLabel>
        <Grid item className={classes.item} xs={6}>
          <SingleLineTextField
            name="minBudget"
            value={values.minBudget}
            label="Min Budget"
            placeholder="Min"
            type="number"
            startAdornment={USDInputAdornment}
          />
        </Grid>
        <Grid item className={classes.item} xs={6}>
          <SingleLineTextField
            name="maxBudget"
            value={values.maxBudget}
            label="Max Budget"
            placeholder="Max"
            type="number"
            startAdornment={USDInputAdornment}
          />
        </Grid>
      </Grid>
    </>
  )
}
