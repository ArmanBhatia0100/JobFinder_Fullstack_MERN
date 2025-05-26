import { useParams, Link } from 'react-router-dom'
import { Building2, MapPin, Calendar, ArrowLeft } from 'lucide-react'

// In a real app, this would come from an API
const jobs = {
  '1': {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    description: 'We are seeking an experienced Frontend Developer to join our team. You will be responsible for building beautiful, responsive web applications using React and modern web technologies.',
  },
  '2': {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'Innovation Labs',
    location: 'Remote',
    description: 'Join our dynamic team building the next generation of cloud-native applications. Experience with React, Node.js, and cloud platforms required.',
  },
  '3': {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Creative Solutions',
    location: 'New York, NY',
    description: 'Looking for a talented UI/UX Designer to create intuitive and engaging user experiences for our digital products. Strong portfolio and experience with Figma required.',
  },
}

export function JobDetails({ job: propJob, isPreview }) {
  const { id } = useParams()
  const job = propJob || (id ? jobs[id] : null)

  if (!job) {
    return <div>Job not found</div>
  }

  const handleApply = () => {
    alert('Application submitted!')
  }

  const content = (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${isPreview ? '' : 'max-w-7xl mx-auto'}`}>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-600">
              <Building2 size={20} className="mr-2" />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={20} className="mr-2" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar size={20} className="mr-2" />
              <span>Posted 2 days ago</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleApply}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold"
        >
          Apply Now
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
        <p className="text-gray-600 whitespace-pre-line">  <span dangerouslySetInnerHTML={{ __html: job.description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} /></p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
          Full-time
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          Remote
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
          React
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
          JavaScript
        </span>
      </div>
    </div>
  )

  if (isPreview) {
    return content
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700">
            <ArrowLeft size={20} className="mr-2" />
            Back to Jobs
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {content}
      </main>
    </div>
  )
} 