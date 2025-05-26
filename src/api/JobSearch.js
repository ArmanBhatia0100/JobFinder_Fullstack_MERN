export async function getJobs(jobTitle, jobLocation) {
  const url = "https://jobs-search-api.p.rapidapi.com/getjobs";

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "45659bf817msh30b4ba1b1f53161p1757ffjsn6432596ce234",
      "x-rapidapi-host": "jobs-search-api.p.rapidapi.com",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      search_term: jobTitle,
      location: jobLocation,
      results_wanted: 10,
      site_name: ["indeed", "linkedin", "zip_recruiter", "glassdoor"],
      distance: 50,
      job_type: "fulltime",
      is_remote: false,
      linkedin_fetch_description: true,
      hours_old: 72
    })
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
} 