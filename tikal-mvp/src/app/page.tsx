//@ts-nocheck
import Image from 'next/image'

export default function Login() {
  return (
    <main className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <section className=" sm:mx-auto sm:w-full sm:max-w-sm border-pink-500">
        <div>
          <div className="border-2  border-green-400">
            <Image
              src="/assets/tikal-logo.png"
              alt='skyblue logo for tikal industries'
              width={400}
              height={400}
              // className='mx-auto h-10 w-auto' not sure if this looks better or the set height width
            />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
          </div>
          <div className=" mt-10 sm:mx-auto sm:w-full sm:max-w-sm  border-dotted border-2 border-blue-700">
            <form className='space-y-6' action="#" method='POST' >
              <div>
                <label className='block text-sm font-medium leading-6 text-gray-900' htmlFor="email">Email Address</label>
                <div className='mt-2' >
                  <input id='email' name='email' autoComplete='email' type="email" required className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between'>
                  <label htmlFor="password" className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                  <div className='text-sm'>
                    {/* change the text color to match the logo */}
                    <a href="#" className='font-semibold text-blue-300 hover:text-indigo-500'>Forgot your password</a>
                  </div>
                  <div></div>

                </div>
              </div>
                <input 
                  type="checkbox"
                  name="checkbox" 
                  title="checkbox"
                />
              <label className="checkbox" htmlFor="checkbox">Remember me</label>
          <div className="">
                {/* needs to be a link as a button */}
                <h1>Sign in</h1>  
                {/* needs to be a link but just bolded */}
                <p>Don&apos;t have an account?</p>
          </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
