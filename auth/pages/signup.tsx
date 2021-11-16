import { useRouter, NextPage, Routes, Link } from "blitz";
import { SignupForm } from "app/auth/components/SignupForm";
import TailwindBlitzImage from "app/core/components/display/TailwindBlitzImage";
import Layout from "app/core/layouts/Layout";
const SignupPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <TailwindBlitzImage
            className="relative w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
            h={48}
            w={48}
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            {"Already have an account? "}
            <Link passHref href={Routes.LoginPage()}>
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Click here to login
              </a>
            </Link>
          </p>
        </div>
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <SignupForm onSuccess={() => router.push(Routes.NewClientPage())} />
        </div>
      </div>
    </div>
  );
};

SignupPage.redirectAuthenticatedTo = "/";
SignupPage.getLayout = (page) => <Layout title="Sign Up">{page}</Layout>;

export default SignupPage;
