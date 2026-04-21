import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex min-h-screen flex-col items-center justify-center bg-gray-100 selection:bg-red-500 selection:text-white dark:bg-zinc-950">
                <div className="w-full max-w-2xl px-6 text-center lg:max-w-7xl">
                    <main>
                        <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
                            Jissho<span className="text-red-600">Web</span>
                        </h1>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            Empowering your academic and organizational projects.
                        </p>

                        <div className="mt-10 flex justify-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700"
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-full bg-white px-8 py-3 font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:ring-zinc-800"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-red-600 px-8 py-3 font-semibold text-white transition hover:bg-red-700"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </main>

                    <footer className="mt-20 text-sm text-zinc-500">
                        &copy; {new Date().getFullYear()} Secret Forest
                    </footer>
                </div>
            </div>
        </>
    );
}