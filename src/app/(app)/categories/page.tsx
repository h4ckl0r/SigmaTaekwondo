'use client'

import { useState, useEffect } from 'react'
import { Plus, Search, Edit2, Trash2, Filter, Eye } from 'lucide-react'
import { toast } from 'react-toastify'
import { format } from 'date-fns'
import Link from 'next/link'

type Category = {
  id: string
  category_name: string
  gender: string
  type: string
  group_age: string
  bracket_type: string
  total_athletes: string
  status: string
  start_date: string
  end_date: string
  _count: { registrations: number }
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [genderFilter, setGenderFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCat, setEditingCat] = useState<Category | null>(null)
  
  const [formData, setFormData] = useState({
    category_name: '',
    gender: 'NAM',
    type: 'KYORUGI',
    group_age: 'U14',
    bracket_type: 'BRACKET',
    total_athletes: 'A16',
    start_date: '',
    end_date: ''
  })

  // Debounce search
  useEffect(() => {
    const t = setTimeout(fetchCategories, 500)
    return () => clearTimeout(t)
  }, [search, genderFilter, typeFilter])

  const fetchCategories = async () => {
    try {
      setLoading(true)
      const query = new URLSearchParams({
        ...(search && { q: search }),
        ...(genderFilter && { gender: genderFilter }),
        ...(typeFilter && { type: typeFilter })
      })
      const res = await fetch(`/api/categories?${query}`)
      if (res.ok) setCategories(await res.json())
    } catch {
      toast.error('Lỗi tải danh sách Nội dung thi đấu')
    } finally {
      setLoading(false)
    }
  }

  const openModal = (cat?: Category) => {
    if (cat) {
      setEditingCat(cat)
      setFormData({
        category_name: cat.category_name,
        gender: cat.gender,
        type: cat.type,
        group_age: cat.group_age,
        bracket_type: cat.bracket_type,
        total_athletes: cat.total_athletes,
        start_date: cat.start_date.split('T')[0],
        end_date: cat.end_date.split('T')[0]
      })
    } else {
      setEditingCat(null)
      setFormData({
        category_name: '', gender: 'NAM', type: 'KYORUGI', group_age: 'U14',
        bracket_type: 'BRACKET', total_athletes: 'A16', start_date: '', end_date: ''
      })
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const method = editingCat ? 'PUT' : 'POST'
    const url = editingCat ? `/api/categories/${editingCat.id}` : '/api/categories'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (res.ok) {
        toast.success(editingCat ? 'Cập nhật thành công' : 'Thêm mới thành công')
        setIsModalOpen(false)
        fetchCategories()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Có lỗi xảy ra')
      }
    } catch {
      toast.error('Không kết nối được server')
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Xóa nội dung: ${name}?`)) return
    try {
      const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' })
      if (res.ok) {
        toast.success('Xóa thành công')
        fetchCategories()
      } else toast.error('Xóa thất bại')
    } catch { toast.error('Lỗi khi xóa') }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Nội dung thi đấu</h1>
          <p className="text-slate-500 text-sm">Quản lý các hạng cân, lứa tuổi và nội dung quyền</p>
        </div>
        <button onClick={() => openModal()} className="btn-primary flex items-center">
          <Plus className="w-5 h-5 mr-1" /> Thêm Nội dung
        </button>
      </div>

      <div className="card space-y-4">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px] flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-2">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <input 
              type="text" 
              placeholder="Tìm tên nội dung..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-sm"
            />
          </div>
          
          <div className="w-full sm:w-auto flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-2">
            <Filter className="w-5 h-5 text-slate-400 mr-2" />
            <select 
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="bg-transparent border-none outline-none text-sm text-slate-700 w-full sm:w-32"
            >
              <option value="">Giới tính</option>
              <option value="NAM">Nam</option>
              <option value="NU">Nữ</option>
              <option value="HONHOP">Hỗn hợp</option>
            </select>
          </div>

          <div className="w-full sm:w-auto flex items-center bg-slate-50 border border-slate-200 rounded-md px-3 py-2">
            <Filter className="w-5 h-5 text-slate-400 mr-2" />
            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-transparent border-none outline-none text-sm text-slate-700 w-full sm:w-32"
            >
              <option value="">Thể loại</option>
              <option value="KYORUGI">Đối kháng</option>
              <option value="POOMSAE">Quyền</option>
              <option value="SKILL">Kỹ năng</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-4">
          {loading ? (
             <div className="col-span-full py-10 text-center text-slate-500">Đang tải dữ liệu...</div>
          ) : categories.length > 0 ? (
            categories.map(cat => (
              <div key={cat.id} className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden flex flex-col hover:border-red-300 transition-colors">
                <div className="p-5 flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 text-[10px] uppercase font-bold tracking-wider rounded-md ${
                      cat.status === 'READY' ? 'bg-amber-100 text-amber-700' :
                      cat.status === 'PROGRESS' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {cat.status === 'READY' ? 'Chuẩn bị' : cat.status === 'PROGRESS' ? 'Đang thi đấu' : 'Đã kết thúc'}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">{cat.type}</span>
                  </div>
                  
                  <Link href={`/categories/${cat.id}`} className="block group">
                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-red-600 transition-colors line-clamp-2">
                      {cat.category_name}
                    </h3>
                  </Link>

                  <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-slate-600">
                    <div>
                      <span className="block text-xs text-slate-400">Đăng ký</span>
                      <span className="font-medium text-slate-700">{cat._count?.registrations || 0} / {cat.total_athletes.replace('A','')} VĐV</span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">Giới tính</span>
                      <span className="font-medium text-slate-700">{cat.gender === 'NAM' ? 'Nam' : cat.gender === 'NU' ? 'Nữ' : 'Hỗn hợp'}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">Lứa tuổi</span>
                      <span className="font-medium text-slate-700">{cat.group_age}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-400">Thể thức</span>
                      <span className="font-medium text-slate-700">{cat.bracket_type === 'BRACKET' ? 'Loại trực tiếp' : 'Vòng tròn'}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                    <span>{format(new Date(cat.start_date), 'dd/MM/yyyy')} - {format(new Date(cat.end_date), 'dd/MM/yyyy')}</span>
                  </div>
                </div>

                <div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex justify-between items-center">
                  <Link href={`/categories/${cat.id}`} className="text-sm font-medium text-red-600 hover:text-red-700 flex items-center">
                    <Eye className="w-4 h-4 mr-1" /> Chi tiết
                  </Link>
                  <div className="flex gap-3">
                    <button onClick={() => openModal(cat)} className="text-slate-400 hover:text-blue-600">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(cat.id, cat.category_name)} className="text-slate-400 hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-slate-500">
              Không có nội dung thi đấu nào.
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">{editingCat ? 'Sửa Nội Dung' : 'Thêm Nội Dung'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tên Nội Dung</label>
                <input required type="text"
                  className="input-field" 
                  placeholder="Ví dụ: Đối kháng Nam U14 - 45kg"
                  value={formData.category_name}
                  onChange={e => setFormData({...formData, category_name: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Thể loại</label>
                  <select className="input-field" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option value="KYORUGI">Đối kháng (Kyorugi)</option>
                    <option value="POOMSAE">Quyền (Poomsae)</option>
                    <option value="SKILL">Kỹ năng</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Giới tính</label>
                  <select className="input-field" value={formData.gender} onChange={e => setFormData({...formData, gender: e.target.value})}>
                    <option value="NAM">Nam</option>
                    <option value="NU">Nữ</option>
                    <option value="HONHOP">Hỗn hợp</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Lứa tuổi / Nhóm</label>
                  <input required type="text"
                    className="input-field" 
                    placeholder="VD: U14, U17, VoNga"
                    value={formData.group_age}
                    onChange={e => setFormData({...formData, group_age: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Thể thức thi đấu</label>
                  <select className="input-field" value={formData.bracket_type} onChange={e => setFormData({...formData, bracket_type: e.target.value})}>
                    <option value="BRACKET">Loại trực tiếp (Bracket)</option>
                    <option value="ROUND_ROBIN">Vòng tròn (Round Robin)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Số lượng VĐV tối đa</label>
                  <select className="input-field" value={formData.total_athletes} onChange={e => setFormData({...formData, total_athletes: e.target.value})}>
                    <option value="A4">4 VĐV</option>
                    <option value="A8">8 VĐV</option>
                    <option value="A16">16 VĐV</option>
                    <option value="A32">32 VĐV</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ngày bắt đầu</label>
                  <input required type="date" className="input-field" value={formData.start_date} onChange={e => setFormData({...formData, start_date: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ngày kết thúc</label>
                  <input required type="date" className="input-field" value={formData.end_date} onChange={e => setFormData({...formData, end_date: e.target.value})} />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-secondary">Hủy</button>
                <button type="submit" className="btn-primary">Lưu Nội Dung</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
