import { AppWindow } from "@phosphor-icons/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='backdrop-blur-md py-2 bg-zinc-800/70 fixed w-full z-10'>
      <div className='flex justify-between p-2 mx-auto w-full max-w-3xl'>
        <div className="flex gap-10">
          <Link href={'/'} className="flex items-center gap-2 group">
            <AppWindow className="transition-all group-hover:-translate-x-1" size={20} weight="fill" />
            <p className="font-title">Gabriel Cardoso</p>
          </Link>

          <div className="flex gap-5">
            <Link href={'/works'}>
              <span className="underline-offset-4 hover:underline transition-all">Works</span>
            </Link>

            <Link href={'/contact'}>
              <span className="underline-offset-4 hover:underline transition-all">Contact</span>
            </Link>
          </div>
        </div>

        <div>Menu</div>
      </div>
    </nav>
  )
}