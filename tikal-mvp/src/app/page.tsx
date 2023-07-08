//@ts-nocheck
import TikalLogo from '@/components/TikalLogo'
import Image from 'next/image'


export default function Login() {

  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-28 lg:px-8">
      <section className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <div>
          <div className="">
            <Image
              src={TikalLogo}
              alt='skyblue logo for tikal industries'
              width={400}
              height={400}
              // className='mx-auto h-10 w-auto' not sure if this looks better or the set height width
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
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
                      <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                    </div>
                  </div>
                  
                </div>
              </div>
              <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
              </div>

            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a href="#" class="font-semibold leading-6 text-black hover:text-indigo-500"> Sign up for an account</a>
    </p>
          </div>
        </div>
      </section>
    </main>
  )
}
