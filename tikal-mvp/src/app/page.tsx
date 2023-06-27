//@ts-nocheck
import Image from 'next/image'

export default function Login() {
  return (
    <main className="">
      <section className=" w-3/5 m-auto  border-2 border-pink-500">
        <div>
          <div className="border-2  border-green-400">
            <Image
              src="/assets/tikal-logo.png"
              alt='skyblue logo for tikal industries'
              width={400}
              height={400}
            />
          </div>
          <div className="  border-dotted border-2 border-blue-700">
            <form action="">
              <label className="text" for="text">username:</label>
                <input 
                  name="text" 
                  type="text"
                  title="username"
                />
              <label className="password" for="password">password:</label>
                <input 
                  name="password" 
                  type="password"
                  title="password"
                />
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
