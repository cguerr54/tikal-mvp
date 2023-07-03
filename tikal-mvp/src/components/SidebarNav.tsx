//@ts-nocheck
import { CiCoffeeCup, CiBatteryFull, CiWheat } from 'react-icons/ci'
import { IoFlashlightOutline, IoFlashlight } from 'react-icons/io5'
import useDarkMode from '../hooks/useDarkMode';
// import { IconBaseProps } from 'react-icons';


export default function SidebarNav() {

  const SideBarIcon = ({ icon, text = 'tooltip 🚨' }) => (
    <div className="sidebar-icon group" >
      {icon}
      <span class='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )

  const SwitchTheme = () => {
    const [darkTheme, setDarkTheme] = useDarkMode()
    const handleMode = () => setDarkTheme(!darkTheme)

    return ( 
        <span onClick={handleMode}>
        {darkTheme ? (
                <IoFlashlightOutline size='28' /> 
            ) : (
                <IoFlashlight size='28' />
            )}
        </span>
    );
}
  
  return(
    <div className="fixed h-screen w-16 flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white shadow-lg">

<SideBarIcon icon={<CiCoffeeCup size="28" />} />
        <SideBarIcon icon={<CiBatteryFull size="28" />} />
        <SideBarIcon icon={<CiWheat size="28" />} />
        {/* <SideBarIcon icon={<GoMarkGithub size="28" />} /> */}
        <SideBarIcon icon={<SwitchTheme />} />

    </div>
  )
}


// ok technically you need to add the 
// dark mode stuff to the navbar and 
// the side bar using the class system
// so just do that 