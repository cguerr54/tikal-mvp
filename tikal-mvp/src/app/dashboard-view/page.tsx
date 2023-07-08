//@ts-nocheck
'use client'
import DashboardNav from "@/components/DashboardNav"
import SidebarNav from "@/components/SidebarNav"

export default function Dashboard(){
  
  return (
    <main className="">
      <DashboardNav />
      <section className="flex">
        <SidebarNav />
        {/* put Sidebar component here */}
      </section>
    
      <section>
      {/*put DataViz component here  */}


    {/*  */}



      </section>
    </main>
  )
}