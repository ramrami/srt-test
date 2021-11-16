import { NextPage, useMutation } from "blitz";
import Layout from "app/core/layouts/Layout";
import { LabeledTextField } from "app/core/components/form/LabeledTextField";
import { Form, FORM_ERROR } from "app/core/components/form/Form";
import { ForgotPassword } from "app/auth/validations";
import forgotPassword from "app/auth/mutations/forgotPassword";
import TailwindBlitzImage from "app/core/components/display/TailwindBlitzImage";

const ForgotPasswordPage: NextPage = () => {
  const [forgotPasswordMutation, { isSuccess }] = useMutation(forgotPassword);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <TailwindBlitzImage
            className="w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
            h={48}
            w={48}
          />
          <h2 className="mt-6 font-extrabold prose-lg text-center text-gray-900">
            Forgot your password?
          </h2>
          <p className="px-5 mt-2 prose text-center text-gray-600">
            {
              "No worries, type in your email and we'll send you a password reset link"
            }
          </p>
        </div>
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          {isSuccess ? (
            <div className="prose">
              <h2 className="prose-lg">Request Submitted</h2>
              <p>
                If your email is in our system, you will receive instructions to
                reset your password shortly.
              </p>
            </div>
          ) : (
            <Form
              submitText="Send Reset Password Instructions"
              schema={ForgotPassword}
              initialValues={{ email: "" }}
              onSubmit={async (values) => {
                try {
                  await forgotPasswordMutation(values);
                } catch (error) {
                  return {
                    [FORM_ERROR]:
                      "Sorry, we had an unexpected error. Please try again.",
                  };
                }
              }}
            >
              <LabeledTextField
                name="email"
                label="Email"
                placeholder="Email"
              />
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

ForgotPasswordPage.redirectAuthenticatedTo = "/";
// ForgotPasswordPage.getLayout = (page) => <Layout title="Forgot Your Password?">{page}</Layout>

export default ForgotPasswordPage;
