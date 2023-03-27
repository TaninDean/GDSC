import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';
import ActivitySelection from './ActivitySelection';
import CategoriesList from './CategoriesList';

const SideNavBar = () => {
  return (
    <div className="h-screen w-[25vh] fixed bg-white p-3 mt-[5vh]">
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
        <hr className='my-2 border-[#999999]' />
        <div>
          <div className=''>
            <p className='text-sm'> Catagorise</p>
          </div>
          <div className=''>
            <CategoriesList color='#EBCD72' name="SKE head work" />
            <CategoriesList color='#70CA88' name="CPSK work" />
            <CategoriesList color='#739FE8' name="GDSC work" />
            <CategoriesList color='#EA6C64' name="HA work" />
            <CategoriesList color='#B8B8B8' name="Homework work" />
            <CategoriesList color='#AA94E6' name="Personal" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNavBar