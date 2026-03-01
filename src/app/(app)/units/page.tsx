'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Edit2, Trash2, Users } from 'lucide-react'
import { toast } from 'react-toastify'

type Unit = {
  id: string
  name: string
  created_at: string
  _count: { athletes: number }
}

export default function UnitsPage() {
  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUnit, setEditingUnit] = useState<Unit | null>(null)
  const [nameInput, setNameInput] = useState('')

  const fetchUnits = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/units')
      if (res.ok) {
        setUnits(await res.json())
      }
    } catch {
      toast.error('Lỗi khi tải danh sách đơn vị')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUnits()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nameInput.trim()) return

    const method = editingUnit ? 'PUT' : 'POST'
    const url = editingUnit ? `/api/units/${editingUnit.id}` : '/api/units'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: nameInput })
      })

      if (res.ok) {
        toast.success(editingUnit ? 'Cập nhật thành công' : 'Thêm mới thành công')
        setIsModalOpen(false)
        fetchUnits()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Có lỗi xảy ra')
      }
    } catch {
      toast.error('Không kết nối được server')
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Bạn có chắc muốn xóa Đơn vị: ${name}?`)) return

    try {
      const res = await fetch(`/api/units/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Xóa thành công')
        fetchUnits()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Xóa thất bại')
      }
    } catch {
      toast.error('Lỗi khi xóa')
    }
  }

  const filteredUnits = units.filter(u => u.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quản lý Đơn vị</h1>
          <p className="text-slate-500 text-sm">Quản lý các câu lạc bộ và đơn vị tham gia</p>
        </div>
        <button 
          onClick={() => { setEditingUnit(null); setNameInput(''); setIsModalOpen(true) }}
          className="btn-primary flex items-center"
        >
          <Plus className="w-5 h-5 mr-1" /> Thêm đơn vị
        </button>
      </div>

      <div className="card">
        <div className="flex items-center mb-6 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 w-full max-w-md">
          <Search className="w-5 h-5 text-slate-400 mr-2" />
          <input 
            type="text" 
            placeholder="Tìm kiếm đơn vị..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent border-none outline-none w-full text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {loading ? (
             Array.from({length: 3}).map((_, i) => (
               <div key={i} className="animate-pulse flex space-x-4 border border-slate-200 rounded-lg p-4">
                 <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                 <div className="flex-1 space-y-4 py-1">
                   <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                   <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                 </div>
               </div>
             ))
          ) : filteredUnits.length > 0 ? (
            filteredUnits.map(unit => (
              <div key={unit.id} className="border border-slate-200 rounded-lg p-4 hover:border-red-300 transition-colors bg-white shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mr-3 font-bold text-lg">
                      {unit.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{unit.name}</h3>
                      <p className="text-sm text-slate-500 flex items-center mt-1">
                        <Users className="w-4 h-4 mr-1" /> {unit._count?.athletes || 0} vận động viên
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-2 mt-4 pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => { setEditingUnit(unit); setNameInput(unit.name); setIsModalOpen(true) }}
                    className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(unit.id, unit.name)}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-slate-500">
              Không tìm thấy đơn vị nào.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">{editingUnit ? 'Sửa Đơn Vị' : 'Thêm Đơn Vị Mới'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-1">Tên Câu Lạc Bộ / Đơn Vị</label>
                <input 
                  type="text" 
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="input-field" 
                  required autoFocus
                  placeholder="Ví dụ: CLB Taekwondo Hà Nội"
                />
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Hủy</button>
                <button type="submit" className="btn-primary">Lưu Đơn Vị</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
