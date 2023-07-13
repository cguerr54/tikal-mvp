//@ts-nocheck
'use client'
import ActionBanner from "@/components/ActionBanner"
import InfoBanner from "@/components/InfoBanner"
import DashboardNav from "@/components/DashboardNav"
import DeployedDevices from "@/components/DeployedDevices"
import FacilityImage from "@/components/FacilityImage"
import SidebarNav from "@/components/SidebarNav"
import BarChart from "@/graphs/BarChart"
import GradientGauge from "@/graphs/GradientGauge"
import LineGraph from "@/graphs/LineGraph"

export default function Dashboard(){

  // the cards below need to stack in mobile and they currently don't
  //consider making the background data
  
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
      <section className="">
        <div className="">
          <div className="flex">
            <div className="w-2/3">
            <div className="space-y-4">
              <div className="ml-24 mt-40">
                <h1 className="  text-2xl font-semibold">inti results</h1>
              </div>
            <InfoBanner/>
            <ActionBanner />
            </div>
          </div>
          <div className="w1/3">
        <FacilityImage />
        </div>
            </div>
        
        </div>
      {/* <DeployedDevices /> */}
      </section>
      {/* 4 small graphs or cards */}
      {/* each graph or card will be its own component */}
      {/* <InfoBanner/>
      <ActionBanner />
      <FacilityImage />
      <DeployedDevices /> */}
      <section className="flex w-11/12 m-auto  mt-6">
        {/* <div className="ml-16 w-4/12 h-80 border-2 border-red-500">
          <BarChart />
        </div> */}
        {/* <div className="ml-16 w-4/12 h-80 border-2 border-red-500">
          <h1>card 2</h1>
        </div> */}
        {/* <div className="ml-16 w-4/12 h-80 border-2 border-red-500">
          <h1>graph 2</h1>
        </div> */}
      </section>

      {/* two wide graphs */}

      <section className="w-11/12 m-auto flex">
      <div className="ml-16 w-5/12 h-80">
        {/* Data display for collected temperature at multiple locations */}
        {/* <GradientGauge /> */}
        {/* lets put Deployed Devices component here */}
        <DeployedDevices />
      </div>
      <div className="ml-16 w-5/12 h-80">
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