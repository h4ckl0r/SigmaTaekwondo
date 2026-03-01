'use client'

import { useEffect, useState } from 'react'
import { Users, Shield, Trophy, Medal } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { toast } from 'react-toastify'

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalAthletes: 0,
    totalUnits: 0,
    totalCategories: 0,
    totalMatches: 0
  })
  const [chartData, setChartData] = useState<any[]>([])
  const [medalStandings, setMedalStandings] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch('/api/dashboard')
        if (res.ok) {
          const data = await res.json()
          if (data.stats) setStats(data.stats)
          if (data.chartData) setChartData(data.chartData)
          if (data.medalStandings) setMedalStandings(data.medalStandings)
        }
      } catch (err) {
        toast.error('Lỗi tải dữ liệu dashboard')
      } finally {
        setLoading(false)
      }
    }
    fetchDashboard()
  }, [])

  if (loading) return <div className="p-8 text-center text-slate-500">Đang tải biểu mẫu...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Tổng quan giải đấu</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card border-l-4 border-l-red-500">
          <div className="flex items-center">
            <div className="p-3 bg-red-50 text-red-600 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-slate-500">Tổng VĐV</h3>
              <p className="text-2xl font-bold text-slate-800">{stats.totalAthletes}</p>
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-l-blue-500">
          <div className="flex items-center">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-slate-500">Tổng Đơn vị</h3>
              <p className="text-2xl font-bold text-slate-800">{stats.totalUnits}</p>
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-l-amber-500">
          <div className="flex items-center">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-lg">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-slate-500">Nội dung thi đấu</h3>
              <p className="text-2xl font-bold text-slate-800">{stats.totalCategories}</p>
            </div>
          </div>
        </div>

        <div className="card border-l-4 border-l-emerald-500">
          <div className="flex items-center">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <Medal className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-slate-500">Trận đấu</h3>
              <p className="text-2xl font-bold text-slate-800">{stats.totalMatches}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Biểu đồ VĐV theo Đơn vị</h2>
          <div className="h-80 w-full font-sans">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="vdv" name="Vận động viên" fill="#dc2626" radius={[4, 4, 0, 0]} maxBarSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold text-slate-800 mb-4">Bảng tổng sắp Huy Chương (Dự kiến)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg rounded-bl-lg">Đơn vị</th>
                  <th className="px-4 py-3 flex justify-center"><div className="w-4 h-4 rounded-full bg-yellow-400" title="Vàng"></div></th>
                  <th className="px-4 py-3"><div className="w-4 h-4 rounded-full mx-auto bg-slate-400" title="Bạc"></div></th>
                  <th className="px-4 py-3"><div className="w-4 h-4 rounded-full mx-auto bg-amber-700" title="Đồng"></div></th>
                  <th className="px-4 py-3 rounded-tr-lg rounded-br-lg text-right">Tổng số</th>
                </tr>
              </thead>
              <tbody>
                {medalStandings.length > 0 ? medalStandings.map((unit, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-4 py-3 font-medium text-slate-800">{unit.name}</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">{unit.gold}</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">{unit.silver}</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">{unit.bronze}</td>
                    <td className="px-4 py-3 text-right font-bold text-red-600">{unit.total}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                      Chưa có dữ liệu huy chương (Cần có giải đấu đã cập nhật xếp hạng)
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
