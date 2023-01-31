import { type NextPage } from "next";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import Layout from "../components/layout";
import Button from "../components/button";
import { FaGoogle } from "react-icons/fa";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <main
                    className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1e3a8a] to-[#312e81] bg-gray-900 text-gray-100">
                    <HomeContents/>
                </main>
            </Layout>
        </>
    );
};


const HomeContents = () => {
    const { data } = useSession();

    if (!data)
        return (
            <div className="relative flex h-screen w-screen flex-col justify-between bg-landing">
                <div className="flex grow flex-col items-center justify-center p-4 align-middle">
                    <div className="relative mb-8 text-6xl font-bold">
                        Business Brigade{" "}
                        <sup className="absolute top-0 left-full text-xs text-pink-400">
                            [Queens]
                        </sup>
                    </div>
                    <div className="mb-8 text-center text-lg">
                        international movement of students and professionals building economic
                        opportunities in the developing world.
                    </div>
                    <Button
                        variant="secondary-inverted"
                        size="xl"
                        onClick={() => void signIn("google")}
                    >
                        <div className="flex items-center">
                            <FaGoogle/> &nbsp; Sign In
                        </div>
                    </Button>
                </div>
            </div>
        );

    return (
        <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center justify-between px-4 pt-4 pb-2 sm:py-4 sm:px-8">
                <div className="relative whitespace-nowrap text-2xl font-bold">
                    Queens University{" "}
                    <sup className="absolute top-0 left-[calc(100%+.25rem)] text-xs font-extrabold text-pink-400">
                        [BETA]
                    </sup>
                </div>
            </div>
        </div>
    );
};

export default Home;


// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();
//
//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );
//
//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };