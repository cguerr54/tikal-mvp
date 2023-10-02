//@ts-nocheck
"use client"
import React, { useState, useEffect } from "react"
import Map from '../../components/Map'
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Container from '../../components/Container';


export default function TestButton(){

  // lat /long for new mhub

  const DEFAULT_CENTER = [41.886870, -87.668060]

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = ()=> {
    setIsLoading(true)

    setTimeout(()=> {
    console.log('processing'), 
    setIsLoading(false)
  }, 5000)

  }
  

  return(
    <main>
      <button
        onClick={handleClick} disabled={isLoading}
        className="flex w-1/2 mx-auto mt-6 justify-center rounded-full px-3 py-1.5 text-sm leading-6 border-tikal-cyan border-2 text-tikal-cyan shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
        >
      {isLoading ? "Processing" : "Run Test"}
      </button>

<Layout>

      <Section>
        <Container>

          <Map className={''} width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={DEFAULT_CENTER}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </>
            )}
          </Map>

        </Container>
      </Section>
    </Layout>

    </main>

  )

}