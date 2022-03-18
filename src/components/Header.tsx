import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between h-24" />
        <div className="mt-16 text-center m-auto">
          <h1 className="m-auto mt-6 text-5xl sm:text-6xl tracking-tight font-black max-w-2xl leading-tight">
            Hello!
          </h1>
          <h1 className="m-auto mt-6 text-5xl sm:text-6xl tracking-tight font-black max-w-2xl leading-tight">
            My name is
          </h1>
          <h1 className="m-auto mt-6 text-5xl sm:text-6xl tracking-tight font-black max-w-2xl leading-tight">
            Mihir Patel
          </h1>
          <p className="mt-6 text-2xl text-gray-300 font-medium">
            and I am a <em>Web Developer</em>
          </p>
        </div>
        <div className="text-center m-20">
          <Link href={'/projects'}>
            <a className="bg-gray-900 text-xl shadow-lg rounded-xl font-medium py-4 px-8 inline-block hover:scale-105 hover:no-underline transform transition-all">
              View My Work
            </a>
          </Link>
          <p className="mt-4 text-gray-400 font-medium text-sm">
            Take a look at some of my{' '}
            <span className="font-bold">personal projects</span> I have built.
          </p>
        </div>
        {/* Image */}
      </div>
    </header>
  )
}

export default Header