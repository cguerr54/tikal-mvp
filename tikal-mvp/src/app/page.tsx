//@ts-nocheck
'use client'
import TikalLogo from '@/components/TikalLogo'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Login() {
  // you need an input called "code" and it's a code that the user needs to input
  // you still need a confidence interval box on the dashboard page
  // THIS APP NEEDS TO STACK IN MOBILE VIEW

// MAKE IT MORE LIKE THIS: 
// https://tikalfilters.slack.com/files/U030RSXFUSE/F05NDQTRPFH/image.png

  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-64 lg:px-8 border-2 border-red-500">
      <section className="sm:mx-auto sm:w-full sm:max-w-6xl border-dotted border-gray-400 border-2 flex" >
        {/* need to increase box height here but it's not working */}
        <div className='border-dashed border-2 border-pink-500 w-2/6'>
          {/* this div on the left */}
          <div className="pt-4 ml-4">
            <Image
              src={TikalLogo}
              alt='skyblue logo for tikal industries'
              width={100}
              height={100}
            />
          </div>

          <div className='text-center '>
          <h1 className='font-bold pt-10 text-3xl'>New Here??</h1>
          <br />
          <p>Create a new account</p>
          <br />
          <div className='border-2 border-yellow-600 flex justify-center items-center '>
                <Link 
                  type="submit" 
                  href='/registration'
                  className="flex w-9/12 justify-center rounded-md bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase ">Sign up</Link>
              </div>
          </div>

        </div>
        <div className='border-2 border-tikal-cyan w-4/6'>
          {/* this div on right */}
          <div className="">
            <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            <p>add social media icons here chile</p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
            <form className='space-y-6' action="#" method='POST' >
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor="email">Email Address:</label>
                <div className='mt-2' >
                  <input id='email' name='email' autoComplete='email' type="email" required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                </div>
              </div>
              <div>
                <div className=' items-center justify-between'>
                  <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900 '>Password:</label>
                  <div className='text-sm'>
                    {/* change the text color to match the logo */}
                    <a href="#" className='font-semibold text-tikal-cyan hover:text-indigo-500 float-right -mt-6 '>Forgot your password?</a>
                    <div className=''>
                      <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  
                </div>
              </div>
              <div>
                <Link 
                  type="submit" 
                  // onClick={handleClick}
                  href='/dashboard-view'
                  
                  className="flex w-full justify-center rounded-md bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase">Sign in</Link>
              </div>

            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="/registration" className="font-semibold leading-6 text-black hover:text-indigo-500"> Sign up for an account</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
