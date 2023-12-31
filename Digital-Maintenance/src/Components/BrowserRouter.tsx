import { Route,Routes } from 'react-router-dom'


//pages
import AdduUser from '../Pages/AdduUser'
import LogIn from "../Pages/LogIn"
import HomeSupervisor from '../Pages/HomeSupervisor'
import HomeTechnican from '../Pages/HomeTechnican'
import HomeManager from '../Pages/HomeManager'
import Dashboard from '../Pages/Dashboard'
import TechnicianReport from '../Pages/TechnicianReport'
import FactoryReports from '../Pages/FactoryReports'
import SupervisorReport from '../Pages/SupervisorReport'
import TechReportsDetails from '../Pages/TechReportsDetails'
import CityFactoryReports from './CityFactoryReports'

function BrowserRouter() {
  return (
    <div>
    <Routes>
      <Route path='/AddUser' element={<AdduUser/>}/>
      <Route path='/HomeSup' element={<HomeSupervisor/>}/>
      <Route path='/HomeTech' element={<HomeTechnican/>}/>
      <Route path='/HomeManager' element={<HomeManager/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/TechnicianReport' element={<TechnicianReport/>}/>
      <Route path='/TechnicianReport/:id' element={<TechReportsDetails/>}/>
      <Route path='/FactoryReports' element={<FactoryReports/>}/>
      <Route path='/FactoryReports/:id' element={<SupervisorReport/>}/>
      <Route path='/CityFactoryReports' element={<CityFactoryReports/>}/>

      <Route path="/" element={ <LogIn/>} />
    </Routes>
    </div>
  )
}

export default BrowserRouter