import { usePuterStore } from "~/lib/puter";

export const meta = ()=> ([
{title : 'ResumAI | Auth'},
{name : 'description', content:'Log into your account'}
])

export default function Auth() {
  const {isLoading, auth} = usePuterStore();

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="flex flex-col items-center gap-2 text-center">
                <h1>Welcome</h1>
                <h2>Log in to continue your job journey</h2>
            </div>
            <div>
              {isLoading ? (
                <button className="auth-button animate-pulse">
                  Signing You In
                </button>
              ) : (
                <>
                {auth.isAuthenticated ? (
                  <button className="auto-button" onClick={auth.signOut}>
                    Log Out
                  </button>
                ) : (
                  <button className="auto-button" onClick={auth.signIn}>
                    Log In
                  </button>
                )}
                </>
              )}
            </div>
        </section>
        </div>
    </main>
  );
}
