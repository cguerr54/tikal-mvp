"use client"
//@ts-nocheck
import TikalLogo from '@/app/utils/TikalLogo'
import Image from 'next/image'
// import { useRouter } from 'next/router'
import Link from 'next/link'
import {PiEnvelopeSimple} from 'react-icons/pi'
import {TbLockSquareRounded} from 'react-icons/tb'
import {BsEye, BsEyeSlash} from 'react-icons/bs'
import {useState} from 'react'
import googleIcon from '../utils/GoogleIcon'
import TikalCircle from '../utils/TikalCircleLogo'
import Navbar from '@/components/Navbar'
import {FaUnity} from 'react-icons/fa6'
import {FcOrgUnit} from 'react-icons/fc' 
import {GiSattelite} from 'react-icons/gi'
import {GiDefenseSatellite} from 'react-icons/gi'

export default function DeviceSetup() {

  const [passwordVisible, setPasswordVisible] = useState(false)

  // maybe make the cards more square add space between, center the icons, 
  // make ring on hover, make them link to the dashboard route or whatever the 
  // next step is. maybe add a link to purchasing or contacting to get a device
  // the current sign up can be changed into a buy device link


  return (
    <main className="flex h-screen flex-col justify-center px-6 py-24 lg:px-8 border-2 border-red-500 bg-[url('/assets/wave1.svg')] ">

      {/* <header className=' border-2 border-yellow-300'>
        <div className=''>
        <Navbar />
        </div>
      </header> */}
      <div>
        <h1>Choose a device to setup</h1>
      </div>
    
    <section className="sm:mx-auto sm:w-full sm:max-w-6xl border rounded-xl shadow-2xl flex flex-col sm:flex-row bg-white border-pink-400 " >    
    <div className='w-full p-6 rounded-xl border border-black'>
        {/* this div on the left */}
      <div className='text-center'>
        <h1 className='font-bold pt-4 text-3xl text-gray-900 my-auto'>Satellite</h1>
          <br />

          {/* <GiSattelite
            size={200}
          /> */}
          <div className='flex items-center justify-center border border-tikal-cyan mx-auto'>
          <GiDefenseSatellite
            size={200}
            color = 'teal'
            className='object-center'
          />
          </div>
          <br />
      </div>
    </div>
    <div className=' w-full p-6 rounded-xl border border-red-800'>
        {/* this div on right */}
      <div className="text-center">
        <h1 className="pt-4 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Base Unit</h1>
          <br />
          {/* <FaUnity /> */}
          <div className='flex items-center justify-center border border-lime-700'>
          <FcOrgUnit
            size={200}
            className='object-center'
          />
          </div>
          <br />
      </div>
    </div>
    </section>
    <div className=' flex justify-center items-center '>
              <Link 
                type="submit" 
                href='/registration'
                className="flex w-9/12 justify-center rounded-full bg-tikal-cyan px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase ">Sign up</Link>
            </div>
  </main>
  )


}