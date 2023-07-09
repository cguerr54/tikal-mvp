//@ts-nocheck
'use client'
import Banner from "@/components/Banner"
import DashboardNav from "@/components/DashboardNav"
import SidebarNav from "@/components/SidebarNav"
import BarChart from "@/graphs/BarChart"
import GradientGauge from "@/graphs/GradientGauge"
import LineGraph from "@/graphs/LineGraph"

export default function Dashboard(){

  // the cards below need to stack in mobile and they currently don't
  
  return (
    <main className="">
      <section>
        <div className="fixed top-0 left-0 w-full h-4 z-10">
        <DashboardNav />
        </div>
        <div className="fixed top-16 left-0 h-screen w-16 z-10">
        <SidebarNav />
        </div>
      </section>
      {/* 4 small graphs or cards */}
      {/* each graph or card will be its own component */}
      <Banner />
      <section className="flex w-11/12 m-auto  mt-6">
        <div className="ml-16 w-4/12 h-80 border-2 border-red-500">
          {/* Nutrient testing results displayed from Inti */}
          <BarChart />
        </div>
        <div className="ml-16 w-4/12 h-80 border-2 border-red-500">
          {/* Collected air quality data from weather.com or some other public resource */}
          {/* for this one we'll put an ul of contaminants  */}
          <h1>card 2</h1>
        </div>
        <div className="ml-16 w-4/12 h-80 border-2 border-red-500">
          {/* Data display for collected soil moisture */}
          {/* put a spectra graph here so that would look 
          like a curved lined graph
          with a gradient horizontal bar under it */}
          <h1>graph 2</h1>
        </div>
      </section>

      {/* two wide graphs */}

      <section className="w-11/12 m-auto flex mt-2">
      <div className="ml-16 w-5/12 h-80 border-2 border-green-700">
        {/* Data display for collected temperature at multiple locations */}
        <GradientGauge />
      </div>
      <div className="ml-16 w-5/12 h-80 border-2 border-green-500">
        {/* Collected data CO2 respiration measurement for soil */}
        {/* i would consider just putting text in this one */}
        <LineGraph />
      </div>
      </section>

      {/* unsure about the following: */}
      {/* right now i'm leaning towards making these two items
      icons in the sidebar and the adding a notification to them or just 
      editing the tooltip
       */}
      {/* Irrigation automation notifications (aka text notifications to tell them to water the crops) */}
      {/* Nutrient dispersion update/notification */}
    
     
    </main>
  )
}