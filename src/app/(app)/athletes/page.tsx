'use client'

import { useState, useEffect, useCallback } from 'react'
import { Plus, Search, Edit2, Trash2, ChevronLeft, ChevronRight, Filter, Upload } from 'lucide-react'
import { toast } from 'react-toastify'
import { format } from 'date-fns'
import * as XLSX from 'xlsx'

type Athlete = {
  id: string
  full_name: string
  unit_id: string
  gender: string
  birthday: string
  unit: { name: string }
}

type Unit = { id: string, name: string }

export default function AthletesPage() {
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(true)
  
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [search, setSearch] = useState('')
  const [unitFilter, setUnitFilter] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAthlete, setEditingAthlete] = useState<Athlete | null>(null)
  const [isImporting, setIsImporting] = useState(false)
  
  const [formData, setFormData] = useState({
    full_name: '',
    unit_id: '',
    gender: 'NAM',
    birthday: ''
  })

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAthletes()
    }, 500)
    return () => clearTimeout(timer)
  }, [search, unitFilter, page])

  useEffect(() => {
    fetchUnits()
  }, [])

  const fetchUnits = async () => {
    try {
      const res = await fetch('/api/units')
      if (res.ok) setUnits(await res.json())
    } catch (e) { console.error(e) }
  }

  const fetchAthletes = async () => {
    try {
      setLoading(true)
      const query = new URLSearchParams({
        page: page.toString(),
        ...(search && { q: search }),
        ...(unitFilter && { unitId: unitFilter })
      })
      const res = await fetch(`/api/athletes?${query}`)
      if (res.ok) {
        const { data, meta } = await res.json()
        setAthletes(data)
        setTotalPages(meta.totalPages || 1)
      }
    } catch {
      toast.error('Lỗi khi tải dữ liệu VĐV')
    } finally {
      setLoading(false)
    }
  }

  const openModal = (athlete?: Athlete) => {
    if (athlete) {
      setEditingAthlete(athlete)
      setFormData({
        full_name: athlete.full_name,
        unit_id: athlete.unit_id,
        gender: athlete.gender,
        birthday: athlete.birthday.split('T')[0]
      })
    } else {
      setEditingAthlete(null)
      setFormData({ full_name: '', unit_id: units[0]?.id || '', gender: 'NAM', birthday: '' })
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingAthlete ? 'PUT' : 'POST'
    const url = editingAthlete ? `/api/athletes/${editingAthlete.id}` : '/api/athletes'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        toast.success(editingAthlete ? 'Cập nhật VĐV thành công' : 'Thêm VĐV thành công')
        setIsModalOpen(false)
        fetchAthletes()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Có lỗi xảy ra')
      }
    } catch {
      toast.error('Không kết nối được server')
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Bạn có chắc muốn xóa VĐV: ${name}?`)) return
    try {
      const res = await fetch(`/api/athletes/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Xóa thành công')
        fetchAthletes()
      } else {
        toast.error('Xóa thất bại')
      }
    } catch {
      toast.error('Lỗi khi xóa')
    }
  }

  const handleImportExcel = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsImporting(true)
    try {
      const data = await file.arrayBuffer()
      const workbook = XLSX.read(data)
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][]

      // Assume row 0 is header. Data starts from index 1.
      // Column format: [Họ và tên, Giới tính, Ngày sinh, Đơn vị]
      const athletesData = []
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i]
        if (!row || row.length === 0 || !row[0]) continue

        const name = String(row[0]).trim()
        const rawGender = String(row[1] || '').trim().toLowerCase()
        const rawBirthday = row[2] // Could be excel date number or string
        const rawUnit = String(row[3] || '').trim()

        let gender = 'NAM'
        if (rawGender.includes('nữ')) gender = 'NU'
        else if (rawGender.includes('hợp')) gender = 'HONHOP'
        else if (rawGender.includes('khác')) gender = 'KHAC'

        let birthday = new Date().toISOString()
        if (typeof rawBirthday === 'number') {
           // Excel date to JS Date
           birthday = new Date(Math.round((rawBirthday - 25569) * 86400 * 1000)).toISOString()
        } else if (typeof rawBirthday === 'string') {
           // Try to parse string DD/MM/YYYY or YYYY-MM-DD
           const parts = rawBirthday.split(/[-/]/)
           if (parts.length === 3) {
             if (parts[2].length === 4) {
               // DD/MM/YYYY
               birthday = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`).toISOString()
             } else {
               // YYYY-MM-DD
               birthday = new Date(rawBirthday).toISOString()
             }
           }
        }

        // Match unit
        let unit_id = units[0]?.id // default
        const matchingUnit = units.find(u => u.name.toLowerCase() === rawUnit.toLowerCase())
        if (matchingUnit) {
          unit_id = matchingUnit.id
        }

        athletesData.push({
          full_name: name,
          gender,
          birthday,
          unit_id
        })
      }

      if (athletesData.length === 0) {
        toast.error('File Excel không có dữ liệu hợp lệ')
        return
      }

      const res = await fetch('/api/athletes/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ athletes: athletesData })
      })

      if (res.ok) {
        const result = await res.json()
        toast.success(`Đã nhập ${result.count} VĐV thành công`)
        setPage(1)
        fetchAthletes()
      } else {
        const errorData = await res.json()
        toast.error(errorData.error || 'Lỗi khi nhập dữ liệu')
      }
    } catch (err) {
      console.error(err)
      toast.error('Có lỗi xảy ra khi đọc file Excel')
    } finally {
      setIsImporting(false)
      // Reset input file
      e.target.value = ''
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quản lý Vận Động Viên</h1>
          <p className="text-slate-500 text-sm">Quản lý hồ sơ vận động viên từ các đơn vị</p>
        </div>
        <div className="flex gap-2">
          <label className={`btn-secondary flex items-center ${isImporting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
            <Upload className="w-5 h-5 mr-1" /> {isImporting ? 'Đang nhập...' : 'Nhập từ Excel'}
            <input type="file" accept=".xlsx, .xls" className="hidden" onChange={handleImportExcel} disabled={isImporting} />
          </label>
          <button onClick={() => openModal()} className="btn-primary flex items-center">
            <Plus className="w-5 h-5 mr-1" /> Thêm VĐV
          </button>
        </div>
      </div>

      <div className="card space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-2">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Tìm kiếm VĐV theo tên..." 
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              className="bg-transparent border-none outline-none w-full text-sm"
            />
          </div>
          <div className="w-full md:w-64 flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-2">
            <Filter className="w-5 h-5 text-slate-400 mr-2" />
            <select 
              value={unitFilter}
              onChange={(e) => { setUnitFilter(e.target.value); setPage(1) }}
              className="bg-transparent border-none outline-none w-full text-sm text-slate-700"
            >
              <option value="">Tất cả đơn vị</option>
              {units.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Vận động viên</th>
                <th className="px-6 py-4 font-semibold">Giới tính</th>
                <th className="px-6 py-4 font-semibold">Ngày sinh</th>
                <th className="px-6 py-4 font-semibold">Câu lạc bộ / Đơn vị</th>
                <th className="px-6 py-4 font-semibold text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
                  </td>
                </tr>
              ) : athletes.length > 0 ? (
                athletes.map(athlete => (
                  <tr key={athlete.id} className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-800">{athlete.full_name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        athlete.gender === 'NAM' ? 'bg-blue-100 text-blue-700' : 
                        athlete.gender === 'NU' ? 'bg-pink-100 text-pink-700' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {athlete.gender === 'NAM' ? 'Nam' : athlete.gender === 'NU' ? 'Nữ' : 'Khác'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {athlete.birthday ? format(new Date(athlete.birthday), 'dd/MM/yyyy') : ''}
                    </td>
                    <td className="px-6 py-4 text-slate-600 font-medium">{athlete.unit?.name}</td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button onClick={() => openModal(athlete)} className="text-blue-600 hover:text-blue-800 font-medium">Sửa</button>
                      <button onClick={() => handleDelete(athlete.id, athlete.full_name)} className="text-red-600 hover:text-red-800 font-medium">Xóa</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-slate-500">
                    Không tìm thấy dữ liệu phù hợp.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-4">
            <span className="text-sm text-slate-500">
              Trang {page} / {totalPages}
            </span>
            <div className="flex gap-2">
              <button 
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="btn-secondary px-2 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="btn-secondary px-2 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">{editingAthlete ? 'Cập nhật VĐV' : 'Thêm VĐV Mới'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Họ và Tên</label>
                <input required type="text"
                  className="input-field" 
                  value={formData.full_name}
                  onChange={e => setFormData({...formData, full_name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Giới tính</label>
                  <select 
                    className="input-field"
                    value={formData.gender}
                    onChange={e => setFormData({...formData, gender: e.target.value})}
                  >
                    <option value="NAM">Nam</option>
                    <option value="NU">Nữ</option>
                    <option value="HONHOP">Hỗn hợp</option>
                    <option value="KHAC">Khác</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ngày sinh</label>
                  <input required type="date"
                    className="input-field" 
                    value={formData.birthday}
                    onChange={e => setFormData({...formData, birthday: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Đơn vị / CLB</label>
                <select required
                  className="input-field"
                  value={formData.unit_id}
                  onChange={e => setFormData({...formData, unit_id: e.target.value})}
                >
                  <option value="" disabled>-- Chọn Đơn vị --</option>
                  {units.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Hủy</button>
                <button type="submit" className="btn-primary">Lưu Vận Động Viên</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
