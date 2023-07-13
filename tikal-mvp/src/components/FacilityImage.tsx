//@ts-nocheck
import Image from 'next/image'


export default function FacilityImage() {

  

  return (
    <section className=' border-tikal-cyan mt-32' >
      <div>
        <div className='float-right mr-32'>
          <h1 className='  text-lg font-semibold'>Plant Name</h1>
        </div>
        <Image
        alt='facility map'
        src='/assets/facility2.jpg'
        width={1000}
        height={1000}
        />
      </div>
    </section>

  )

}