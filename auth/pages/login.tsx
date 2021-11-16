import { useRouter, NextPage, Link, Routes } from "blitz";
import { LoginForm } from "app/auth/components/LoginForm";
import TailwindBlitzImage from "app/core/components/display/TailwindBlitzImage";
import Layout from "app/core/layouts/Layout";

const LoginPage: NextPage = () => {
  const router = useRouter();

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
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Or{" "}
            <Link passHref href={Routes.SignupPage()}>
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                start your 14-day free trial
              </a>
            </Link>
          </p>
        </div>
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <LoginForm
            onSuccess={() => {
              const next = router.query.next
                ? decodeURIComponent(router.query.next as string)
                : "/";
              router.push(next);
            }}
          />
        </div>
      </div>
    </div>
  );
};
LoginPage.redirectAuthenticatedTo = "/";
LoginPage.getLayout = (page) => <Layout title="Log In">{page}</Layout>;

export default LoginPage;
