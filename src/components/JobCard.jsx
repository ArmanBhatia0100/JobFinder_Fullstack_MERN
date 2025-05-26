import React from 'react'
import { Building2, MapPin } from 'lucide-react'

export function JobCard({ job, onSelect, isSelected }) {
  const handleApply = (e) => {
    e.preventDefault() // Prevent card click when clicking apply button

    window.open(job.job_url, '_blank')
  }

  return (
    <div 
      onClick={onSelect}
      className={`cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border ${
        isSelected ? 'border-indigo-500' : 'border-gray-200'
      }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
              {job.title}
            </h3>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Building2 size={16} className="mr-1.5" />
              <span>{job.company}</span>
              <MapPin size={16} className="ml-4 mr-1.5" />
              <span>{job.location}</span>
            </div>
          </div>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Apply
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
           {job.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Full-time
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Remote
          </span>
        </div>
      </div>
    </div>
  )
} 