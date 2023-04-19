import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

interface MainProps {
  children: ReactNode
}

export default function Layout({ children }: MainProps) {
  return (
    <main className="pb-8">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Gabriel Cardoso - Homepage</title>
      </Head>

      <Navbar />

      <div className="max-w-3xl pt-14 w-full mx-auto">
        {children}
      </div>
    </main>
  )
}