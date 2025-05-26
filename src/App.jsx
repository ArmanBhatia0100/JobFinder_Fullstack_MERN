import { useState } from 'react'
import { getJobs } from "./api/JobSearch"
import { Routes, Route } from 'react-router-dom'
import { Search, MapPin, Briefcase, Clock, Filter,Loader2 } from 'lucide-react'
import { JobCard } from './components/JobCard'
import { JobDetails } from './pages/JobDetails'
import { Header } from './components/Header'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleSearch = async () => {
    setLoading(true)
    let jobsData = null;
    jobsData = await getJobs(searchTerm, location)

    if(jobsData){
        setJobs(jobsData.jobs)
        setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              autoFocus
              placeholder="Search for jobs..."
              className="w-full p-4 border rounded-lg pl-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-gray-400" />
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="w-full p-4 border rounded-lg pl-12"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <MapPin className="absolute left-4 top-4 text-gray-400" />
          </div>
        </div>
        <button
          onClick={handleSearch}
          className={`${loading ? "disabled:opacity-10" : ""} bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors`}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Search"}
          {/* {loading ? "Searching..." : "Search"} */}
        </button>
      </div>

      {/* Job Type and Date Posted */}
      {/* <div className="flex gap-4 mb-8">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Briefcase size={20} />
          Job Type
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Clock size={20} />
          Date Posted
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
          <Filter size={20} />
          Filters
        </button>
      </div> */}


    {jobs.length> 0 ?
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
        ))}
    </div>
    :
    <h1 className='text-center text-2xl font-bold'>Search to Find Jobs</h1>
    }

      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <JobDetails job={selectedJob} onClose={() => setSelectedJob(null)} />
          </div>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App 