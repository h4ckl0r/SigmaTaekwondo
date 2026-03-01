'use client'

import { useState, useEffect } from 'react'
import { Plus, Users, ArrowLeft, Trash2, Shuffle, GitMerge } from 'lucide-react'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

type Category = {
  id: string
  category_name: string
  gender: string
  type: string
  group_age: string
  bracket_type: string
  total_athletes: string
  status: string
  registrations: Array<{
    id: string
    athlete: { id: string, full_name: string, unit: { name: string } }
  }>
  matches: any[]
}

type Athlete = { id: string, full_name: string, gender?: string, unit: { name: string } }

export default function CategoryDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [category, setCategory] = useState<Category | null>(null)
  const [allAthletes, setAllAthletes] = useState<Athlete[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  // For multi-select athlete registration
  const [searchAthlete, setSearchAthlete] = useState('')
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([])

  // For manual bracket
  const [isManualBracketOpen, setIsManualBracketOpen] = useState(false)
  const [manualOrder, setManualOrder] = useState<string[]>([])

  const fetchCategory = async () => {
    try {
      const res = await fetch(`/api/categories/${id}`)
      if (res.ok) setCategory(await res.json())
      else { toast.error('Không tìm thấy nội dung'); router.push('/categories') }
    } catch {
      toast.error('Lỗi khi tải dữ liệu')
    } finally {
      setLoading(false)
    }
  }

  const fetchAthletes = async () => {
    // For simplicity we load all athletes and filter on client to exclude already registered
    try {
      const res = await fetch('/api/athletes?fetchAll=true')
      if (res.ok) {
        const { data } = await res.json()
        setAllAthletes(data)
      }
    } catch { console.error('Lỗi tải VĐV') }
  }

  useEffect(() => {
    fetchCategory()
    fetchAthletes()
  }, [id])

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedAthletes.length === 0) return

    try {
      const promises = selectedAthletes.map(athleteId => 
        fetch('/api/registrations', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ category_id: id, athlete_id: athleteId })
        })
      )
      
      const results = await Promise.all(promises)
      
      const successCount = results.filter(r => r.ok).length
      if (successCount > 0) {
        toast.success(`Đã đăng ký thành công ${successCount} VĐV`)
        setIsModalOpen(false)
        setSelectedAthletes([])
        fetchCategory()
      } else {
        toast.error('Đăng ký thất bại cho một số VĐV')
      }
    } catch {
      toast.error('Lỗi kết nối server')
    }
  }

  const handleGenerateBracket = async (manualOrderData?: string[]) => {
    if (!manualOrderData && !confirm('Hệ thống sẽ tự động ghép cặp đấu ngẫu nhiên. Bạn có chắc chắn?')) return
    setIsGenerating(true)
    try {
      const body = manualOrderData ? { manualOrder: manualOrderData } : {}
      const res = await fetch(`/api/categories/${id}/generate-bracket`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      if (res.ok) {
        toast.success('Đã tạo sơ đồ thi đấu thành công')
        setIsManualBracketOpen(false)
        fetchCategory()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Không thể tạo sơ đồ thi đấu')
      }
    } catch {
      toast.error('Lỗi kết nối')
    } finally {
      setIsGenerating(false)
    }
  }

  if (loading) return <div>Đang tải dữ liệu...</div>
  if (!category) return <div>Không có dữ liệu</div>

  const maxAthletes = parseInt(category.total_athletes.replace('A', ''))
  const currentAthletes = category.registrations.length

  // Filter out athletes already registered
  const avaiableAthletes = allAthletes.filter(a => !category.registrations.some(r => r.athlete.id === a.id))

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Link href="/categories" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Quay lại danh sách
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 text-xs font-bold rounded-md uppercase ${
              category.status === 'READY' ? 'bg-amber-100 text-amber-700' :
              category.status === 'PROGRESS' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
              {category.status === 'READY' ? 'Chuẩn bị' : category.status === 'PROGRESS' ? 'Đang thi đấu' : 'Kết thúc'}
            </span>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{category.type}</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-800">{category.category_name}</h1>
          <p className="text-slate-500 mt-1">Lứa tuổi: {category.group_age} • Giới tính: {category.gender === 'NAM' ? 'Nam' : category.gender === 'NU' ? 'Nữ' : 'Hỗn hợp'}</p>
        </div>
        
        {category.status === 'READY' ? (
          <div className="flex gap-2">
            <button 
              onClick={() => {
                setManualOrder(new Array(maxAthletes).fill(''))
                setIsManualBracketOpen(true)
              }}
              disabled={isGenerating || currentAthletes < 2}
              className="btn-secondary flex items-center disabled:opacity-50"
            >
              <GitMerge className="w-4 h-4 mr-2" /> Tạo Thủ Công
            </button>
            <button 
              onClick={() => handleGenerateBracket()} 
              disabled={isGenerating || currentAthletes < 2}
              className="btn-primary flex items-center bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300"
            >
              <Shuffle className="w-4 h-4 mr-2" /> 
              {isGenerating ? 'Đang xếp lịch...' : 'Tạo Lịch Ngẫu Nhiên'}
            </button>
          </div>
        ) : (
          <Link href={`/categories/${id}/bracket`} className="btn-primary flex items-center bg-green-600 hover:bg-green-700">
            <GitMerge className="w-4 h-4 mr-2" /> Xem Sơ đồ thi đấu
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800 flex items-center">
              <Users className="w-5 h-5 mr-2 text-slate-400" /> Vận động viên đã đăng ký
            </h2>
            <span className="text-sm font-medium px-3 py-1 bg-slate-100 rounded-full text-slate-600">
              {currentAthletes} / {maxAthletes}
            </span>
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3">STT</th>
                  <th className="px-4 py-3">Họ và Tên</th>
                  <th className="px-4 py-3">Đơn vị</th>
                  <th className="px-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {category.registrations.length > 0 ? (
                  category.registrations.map((reg, index) => (
                    <tr key={reg.id} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-500">{index + 1}</td>
                      <td className="px-4 py-3 font-medium text-slate-800">{reg.athlete.full_name}</td>
                      <td className="px-4 py-3 text-slate-600">{reg.athlete.unit.name}</td>
                      <td className="px-4 py-3 text-right">
                        {category.status === 'READY' && (
                          <button className="text-slate-400 hover:text-red-600 p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                      Chưa có vận động viên nào. Vui lòng thêm VĐV.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="card sticky top-24">
            <h3 className="font-bold text-slate-800 mb-4">Quản lý Đăng ký</h3>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-500">Tỉ lệ lấp đầy</span>
                <span className="font-medium text-slate-700">{Math.round((currentAthletes / maxAthletes) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full transition-all" style={{ width: `${(currentAthletes / maxAthletes) * 100}%` }}></div>
              </div>
            </div>

            {category.status === 'READY' ? (
              <button 
                onClick={() => setIsModalOpen(true)}
                disabled={currentAthletes >= maxAthletes}
                className="w-full btn-secondary flex items-center justify-center disabled:opacity-50"
              >
                <Plus className="w-4 h-4 mr-1" /> Thêm VĐV vào nội dung
              </button>
            ) : (
              <p className="text-sm text-slate-500 text-center bg-slate-50 p-3 rounded-lg border border-slate-200">
                Không thể thêm VĐV vì giải đấu đã bắt đầu hoặc hoàn tất.
              </p>
            )}
          </div>
        </div>
      </div>

      {isManualBracketOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-slate-800">Tạo Sơ Đồ Thủ Công</h3>
                <p className="text-sm text-slate-500">Kéo thả hoặc chọn VĐV cho từng vị trí trong bảng {maxAthletes} người</p>
              </div>
              <button onClick={() => setIsManualBracketOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 bg-slate-50">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {Array.from({ length: maxAthletes }).map((_, i) => (
                   <div key={`slot-${i}`} className="bg-white p-3 border border-slate-200 rounded-md shadow-sm">
                     <span className="text-xs font-bold text-slate-400 block mb-1">Vị trí {i + 1}</span>
                     <select 
                       className="w-full text-sm border-slate-300 rounded outline-none p-2 border focus:border-blue-500"
                       value={manualOrder[i] || ''}
                       onChange={(e) => {
                         const newOrder = [...manualOrder]
                         newOrder[i] = e.target.value
                         setManualOrder(newOrder)
                       }}
                     >
                       <option value="">-- Trống (BYE) --</option>
                       {category.registrations.map(reg => {
                         const isSelected = manualOrder.includes(reg.athlete.id)
                         const isCurrent = manualOrder[i] === reg.athlete.id
                         return (
                           <option key={reg.id} value={reg.athlete.id} disabled={isSelected && !isCurrent}>
                             {reg.athlete.full_name} ({reg.athlete.unit.name})
                           </option>
                         )
                       })}
                     </select>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="px-6 py-4 border-t border-slate-200 bg-white flex justify-between items-center">
              <span className="text-sm text-slate-600 font-medium">
                Đã xếp: {manualOrder.filter(Boolean).length} / {currentAthletes} VĐV
              </span>
              <div className="flex gap-3">
                <button type="button" onClick={() => setIsManualBracketOpen(false)} className="btn-secondary">Hủy</button>
                <button 
                  type="button" 
                  onClick={() => handleGenerateBracket(manualOrder)}
                  disabled={manualOrder.filter(Boolean).length !== currentAthletes} 
                  className="btn-primary disabled:opacity-50"
                >
                  Xác nhận & Tạo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
              <h3 className="font-bold text-lg text-slate-800">Đăng ký Thêm VĐV</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            
            <div className="p-4 border-b border-slate-200">
               <input 
                 type="text" 
                 placeholder="Tìm VĐV theo tên..."
                 className="w-full p-2 border border-slate-300 rounded focus:border-blue-500 outline-none"
                 value={searchAthlete}
                 onChange={e => setSearchAthlete(e.target.value)}
               />
            </div>

            <div className="p-0 overflow-y-auto flex-1">
              {avaiableAthletes.filter(a => a.full_name.toLowerCase().includes(searchAthlete.toLowerCase())).length === 0 ? (
                <div className="p-8 text-center text-slate-500">Không tìm thấy VĐV nào.</div>
              ) : (
                <table className="w-full text-sm text-left">
                  <thead className="sticky top-0 bg-slate-100 text-xs text-slate-500 uppercase shadow-sm">
                    <tr>
                      <th className="px-4 py-3 w-10">
                        <input 
                          type="checkbox" 
                          onChange={(e) => {
                            const filteredIds = avaiableAthletes.filter(a => a.full_name.toLowerCase().includes(searchAthlete.toLowerCase())).map(a => a.id)
                            if (e.target.checked) setSelectedAthletes(Array.from(new Set([...selectedAthletes, ...filteredIds])))
                            else setSelectedAthletes(selectedAthletes.filter(id => !filteredIds.includes(id)))
                          }}
                          checked={
                            avaiableAthletes.filter(a => a.full_name.toLowerCase().includes(searchAthlete.toLowerCase())).length > 0 && 
                            avaiableAthletes.filter(a => a.full_name.toLowerCase().includes(searchAthlete.toLowerCase())).every(a => selectedAthletes.includes(a.id))
                          }
                        />
                      </th>
                      <th className="px-4 py-3">Họ Tên</th>
                      <th className="px-4 py-3">Giới Tính</th>
                      <th className="px-4 py-3">Đơn Vị</th>
                    </tr>
                  </thead>
                  <tbody>
                    {avaiableAthletes.filter(a => a.full_name.toLowerCase().includes(searchAthlete.toLowerCase())).map(a => (
                      <tr key={a.id} className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer" onClick={() => {
                        if (selectedAthletes.includes(a.id)) setSelectedAthletes(selectedAthletes.filter(id => id !== a.id))
                        else setSelectedAthletes([...selectedAthletes, a.id])
                      }}>
                        <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                          <input type="checkbox" checked={selectedAthletes.includes(a.id)} 
                            onChange={() => {
                              if (selectedAthletes.includes(a.id)) setSelectedAthletes(selectedAthletes.filter(id => id !== a.id))
                              else setSelectedAthletes([...selectedAthletes, a.id])
                            }} 
                          />
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-800">{a.full_name}</td>
                        <td className="px-4 py-3">{a.gender === 'NAM' ? 'Nam' : a.gender === 'NU' ? 'Nữ' : 'Khác'}</td>
                        <td className="px-4 py-3 text-slate-500">{a.unit.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center">
              <span className="font-medium text-slate-700">Đã chọn: {selectedAthletes.length}</span>
              <div className="flex gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Hủy</button>
                <button 
                  type="button" 
                  disabled={selectedAthletes.length === 0}
                  className="btn-primary disabled:opacity-50"
                  onClick={handleRegister}
                >
                  Đăng ký ({selectedAthletes.length})
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
