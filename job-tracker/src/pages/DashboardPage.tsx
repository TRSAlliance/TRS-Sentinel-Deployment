import { JobForm, JobList, StatsChart } from '../components/jobs'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom'

export default function Dashboard() {
  const { user } = useAuth()

  if (!user) return <Navigate to="/login" />

  return (
    <div className="space-y-8">
      <JobForm />
      <StatsChart />
      <JobList />
    </div>
  )
}
