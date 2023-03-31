import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ActivitySelection from './ActivitySelection';
import { useContext } from 'react';
import ModificationStoresContext from '../stores/ModificationStores';
interface props {
  showNavbar: boolean
}

const SideNavBar = ({showNavbar}:props) => {
  const modification = useContext(ModificationStoresContext)

  return (
    <div className="h-full bg-white" style={{width: (showNavbar?"25vh":"5vh")}}>
      <div className="bg-[#F4F4F4] rounded-lg p-3 h-screen">
        <div>
          <p className={`text-2xl font-bold`}>{showNavbar?"Menu":" "}</p>
        </div>
        <div>
          <button className="bg-[#E44F44] w-full rounded-lg text-white h-[2rem] mt-3" onClick={() => {modification.changeOpenState(true)}}>{showNavbar? '+ Add todo': '+'}</button>
        </div>
        <div className="grid gap-2 mt-2">
          <ActivitySelection icon={<FormatListBulletedIcon />} name={showNavbar?"Active list": ""} />
          <ActivitySelection icon={<StarOutlineIcon />} name={showNavbar?"Important":''} />
          <ActivitySelection icon={<DomainVerificationIcon />} name={showNavbar?"Completed":''} />
        </div>
      </div>
    </div>
  )
}

export default SideNavBar