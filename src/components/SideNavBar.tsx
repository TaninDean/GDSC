import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ActivitySelection from './ActivitySelection';

const SideNavBar = () => {

  return (
    <div className="h-screen w-[25vh] bg-white ">
      <div className="bg-[#F4F4F4] rounded-lg p-3 h-screen">
        <div>
          <p className="text-2xl font-bold">Menu</p>
        </div>
        <div>
          <button className="bg-[#E44F44] w-full rounded-lg text-white h-[2rem] mt-3">+ Add todo</button>
        </div>
        <div className="grid gap-2 mt-2">
          <ActivitySelection icon={<FormatListBulletedIcon />} name="Active list" />
          <ActivitySelection icon={<HourglassEmptyIcon />} name="Due soon" />
          <ActivitySelection icon={<StarOutlineIcon />} name="Important" />
          <ActivitySelection icon={<DomainVerificationIcon />} name="Completed" />
        </div>
      </div>
    </div>
  )
}

export default SideNavBar