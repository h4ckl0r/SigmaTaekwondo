'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, GitMerge, Trophy } from 'lucide-react'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { RootState } from '@/lib/store'

export default function BracketPage() {
  const { id } = useParams()
  const router = useRouter()
  const [category, setCategory] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedMatch, setSelectedMatch] = useState<any>(null)
  const { role } = useSelector((state: RootState) => state.auth)

  const [score1, setScore1] = useState('')
  const [score2, setScore2] = useState('')
  const [winnerId, setWinnerId] = useState('')

  const fetchBracket = async () => {
    try {
      const res = await fetch(`/api/categories/${id}`)
      if (res.ok) setCategory(await res.json())
    } catch { toast.error('Lỗi khi tải Bracket') }
    finally { setLoading(false) }
  }

  useEffect(() => { fetchBracket() }, [id])

  const handleUpdateMatch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedMatch) return
    try {
      const res = await fetch(`/api/matches/${selectedMatch.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          score1: parseFloat(score1) || 0,
          score2: parseFloat(score2) || 0,
          winner_id: winnerId || null,
          status: winnerId ? 'FINISHED' : 'ONGOING'
        })
      })

      if (res.ok) {
        toast.success('Cập nhật kết quả thành công')
        setSelectedMatch(null)
        fetchBracket()
      } else {
        const data = await res.json()
        toast.error(data.error || 'Cập nhật thất bại')
      }
    } catch { toast.error('Lỗi kết nối') }
  }

  if (loading) return <div>Đang tải sơ đồ...</div>
  if (!category) return <div>Không có dữ liệu</div>

  const matches = category.matches || []
  if (matches.length === 0) {
    return (
      <div className="text-center py-20">
        <GitMerge className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-slate-700">Chưa có sơ đồ thi đấu</h2>
        <p className="text-slate-500 mt-2 mb-6">Bạn cần tạo nhánh đấu ở trang chi tiết nội dung.</p>
        <Link href={`/categories/${id}`} className="btn-primary">Quay lại chi tiết</Link>
      </div>
    )
  }

  // Calculate rounds for flex layout
  const mainMatches = matches.filter((m: any) => m.round < 99)
  const rounds = Array.from(new Set(mainMatches.map((m: any) => m.round))).sort() as number[]
  const bracketByRound = rounds.map(r => mainMatches.filter((m: any) => m.round === r).sort((a: any, b: any) => a.match_order - b.match_order))

  const bronzeMatch = matches.find((m: any) => m.round === 99)

  const finalMatch = bracketByRound[bracketByRound.length - 1]?.[0]
  let champion: any = null, runnerUp: any = null, thirdPlace: any = null
  
  if (finalMatch?.status === 'FINISHED' && finalMatch.winner_id) {
     champion = finalMatch.winner_id === finalMatch.athlete1_registration_id ? finalMatch.player1?.athlete : finalMatch.player2?.athlete
     runnerUp = finalMatch.winner_id === finalMatch.athlete1_registration_id ? finalMatch.player2?.athlete : finalMatch.player1?.athlete
  }
  
  if (bronzeMatch?.status === 'FINISHED' && bronzeMatch.winner_id) {
     thirdPlace = bronzeMatch.winner_id === bronzeMatch.athlete1_registration_id ? bronzeMatch.player1?.athlete : bronzeMatch.player2?.athlete
  }

  const canEditResult = role === 'ADMIN' || role === 'ORGANIZER'

  return (
    <div className="space-y-6">
      <Link href={`/categories/${id}`} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Quay lại {category.category_name}
      </Link>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center">
          <GitMerge className="w-6 h-6 mr-2 text-red-600" /> Sơ đồ thi đấu
        </h1>
        <span className="bg-slate-800 text-white text-xs px-3 py-1 rounded-full font-medium">Bảng {category.bracket_type === 'ROUND_ROBIN' ? 'Vòng tròn' : 'Loại trực tiếp'}</span>
      </div>

      <div className="card overflow-x-auto overflow-y-auto bg-slate-50 border border-slate-200">
        <div className="flex flex-col gap-8">
          <div className="flex justify-start min-w-max gap-8 px-4 py-8">
            {bracketByRound.map((matchesInRound, rIndex) => (
            <div key={`round-${rIndex}`} className="flex flex-col justify-around gap-4" style={{ width: '240px' }}>
              <h3 className="text-center font-bold text-slate-400 text-sm uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Vòng {rIndex + 1} {rIndex === rounds.length - 1 ? '(CHUNG KẾT)' : ''}
              </h3>
              
              <div className="flex flex-col flex-1 justify-around gap-6 relative">
                {matchesInRound.map((match: any, mIndex: number) => {
                  const p1 = match.player1?.athlete
                  const p2 = match.player2?.athlete
                  
                  return (
                    <div 
                      key={match.id} 
                      className={`relative bg-white border-2 rounded-lg shadow-sm overflow-hidden transition-colors ${
                        canEditResult ? 'cursor-pointer hover:border-red-400' : ''
                      } ${match.status === 'FINISHED' ? 'border-slate-300' : 'border-blue-400'}`}
                      onClick={() => {
                        if (canEditResult && p1 && p2) {
                           setSelectedMatch(match)
                           setScore1(match.score1 ?? '')
                           setScore2(match.score2 ?? '')
                           setWinnerId(match.winner_id || '')
                        }
                      }}
                    >
                      <div className="flex justify-between items-center bg-slate-100 px-2 py-1 border-b border-slate-200 text-[10px] text-slate-500 font-medium">
                        <span>Trận {match.match_order + 1}</span>
                        <span className={match.status === 'FINISHED' ? 'text-green-600' : 'text-blue-600'}>
                          {match.status === 'FINISHED' ? 'Hoàn tất' : match.status === 'ONGOING' ? 'Đang đấu' : 'Chờ'}
                        </span>
                      </div>
                      
                      <div className={`p-2 border-b border-slate-100 flex justify-between items-center ${match.winner_id === match.athlete1_registration_id ? 'bg-green-50' : ''}`}>
                        <div className="truncate text-sm font-medium text-slate-800 pr-2">
                          {p1 ? p1.full_name : <span className="text-slate-400 italic">Bye</span>}
                        </div>
                        <div className="font-bold text-red-600">{Number(match.score1) > 0 ? Number(match.score1) : '-'}</div>
                      </div>
                      
                      <div className={`p-2 flex justify-between items-center ${match.winner_id === match.athlete2_registration_id ? 'bg-green-50' : ''}`}>
                        <div className="truncate text-sm font-medium text-slate-800 pr-2">
                          {p2 ? p2.full_name : <span className="text-slate-400 italic">Bye</span>}
                        </div>
                        <div className="font-bold text-blue-600">{Number(match.score2) > 0 ? Number(match.score2) : '-'}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
          
          {/* Champion Box */}
          <div className="flex flex-col justify-center gap-4 min-w-[200px]">
             <h3 className="text-center font-bold text-amber-500 text-sm uppercase tracking-wider mb-4 border-b border-amber-200 pb-2">
                BẢNG XẾP HẠNG
             </h3>
             <div className="bg-gradient-to-br from-amber-100 to-yellow-50 border-2 border-amber-400 rounded-xl p-4 shadow-lg text-center mb-4">
               <Trophy className="w-8 h-8 text-amber-500 mx-auto mb-2" />
               <div className="text-xs text-amber-700 font-bold mb-1">HUY CHƯƠNG VÀNG</div>
               <div className="font-bold text-slate-800 text-sm">
                 {champion?.full_name || 'Chưa định đoạt'}
               </div>
             </div>
             
             <div className="bg-gradient-to-br from-slate-200 to-slate-100 border-2 border-slate-300 rounded-xl p-4 shadow text-center mb-4">
               <div className="text-xs text-slate-500 font-bold mb-1">HUY CHƯƠNG BẠC</div>
               <div className="font-bold text-slate-800 text-sm">
                 {runnerUp?.full_name || 'Chưa định đoạt'}
               </div>
             </div>
             
             <div className="bg-gradient-to-br from-orange-200 to-orange-100 border-2 border-orange-300 rounded-xl p-4 shadow text-center">
               <div className="text-xs text-orange-700 font-bold mb-1">HUY CHƯƠNG ĐỒNG</div>
               <div className="font-bold text-slate-800 text-sm">
                 {thirdPlace?.full_name || 'Chưa định đoạt'}
               </div>
             </div>
          </div>
        </div>

        {bronzeMatch && (
          <div className="px-4 pb-8">
            <h3 className="font-bold text-orange-500 text-sm uppercase tracking-wider mb-4 border-b border-orange-200 pb-2 max-w-[240px]">
              Tranh Hạng 3
            </h3>
            <div className="w-[240px]">
              <div 
                className={`relative bg-white border-2 rounded-lg shadow-sm overflow-hidden transition-colors ${
                  canEditResult ? 'cursor-pointer hover:border-red-400' : ''
                } ${bronzeMatch.status === 'FINISHED' ? 'border-slate-300' : 'border-blue-400'}`}
                onClick={() => {
                  if (canEditResult && bronzeMatch.player1 && bronzeMatch.player2) {
                     setSelectedMatch(bronzeMatch)
                     setScore1(bronzeMatch.score1 ?? '')
                     setScore2(bronzeMatch.score2 ?? '')
                     setWinnerId(bronzeMatch.winner_id || '')
                  }
                }}
              >
                <div className="flex justify-between items-center bg-orange-50 px-2 py-1 border-b border-orange-200 text-[10px] text-orange-700 font-medium">
                  <span>Tranh Hạng 3</span>
                  <span className={bronzeMatch.status === 'FINISHED' ? 'text-green-600' : 'text-blue-600'}>
                    {bronzeMatch.status === 'FINISHED' ? 'Hoàn tất' : bronzeMatch.status === 'ONGOING' ? 'Đang đấu' : 'Chờ'}
                  </span>
                </div>
                
                <div className={`p-2 border-b border-slate-100 flex justify-between items-center ${bronzeMatch.winner_id === bronzeMatch.athlete1_registration_id ? 'bg-green-50' : ''}`}>
                  <div className="truncate text-sm font-medium text-slate-800 pr-2">
                    {bronzeMatch.player1?.athlete ? bronzeMatch.player1.athlete.full_name : <span className="text-slate-400 italic">Chờ KQ</span>}
                  </div>
                  <div className="font-bold text-red-600">{Number(bronzeMatch.score1) > 0 ? Number(bronzeMatch.score1) : '-'}</div>
                </div>
                
                <div className={`p-2 flex justify-between items-center ${bronzeMatch.winner_id === bronzeMatch.athlete2_registration_id ? 'bg-green-50' : ''}`}>
                  <div className="truncate text-sm font-medium text-slate-800 pr-2">
                    {bronzeMatch.player2?.athlete ? bronzeMatch.player2.athlete.full_name : <span className="text-slate-400 italic">Chờ KQ</span>}
                  </div>
                  <div className="font-bold text-blue-600">{Number(bronzeMatch.score2) > 0 ? Number(bronzeMatch.score2) : '-'}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>

      {selectedMatch && canEditResult && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-lg text-slate-800">Nhập Kết Quả (Trận {selectedMatch.match_order + 1})</h3>
              <button onClick={() => setSelectedMatch(null)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            
            <form onSubmit={handleUpdateMatch} className="p-6">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <div className="text-center font-bold text-red-800 mb-2 truncate" title={selectedMatch.player1?.athlete?.full_name}>
                    {selectedMatch.player1?.athlete?.full_name || 'Bye'}
                  </div>
                  <input 
                    type="number" step="0.1" 
                    className="w-full text-center text-2xl font-bold text-red-600 rounded-md border-red-300 py-2 focus:ring-red-500"
                    placeholder="Điểm"
                    value={score1} onChange={e => setScore1(e.target.value)}
                    disabled={!selectedMatch.player1}
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-center font-bold text-blue-800 mb-2 truncate" title={selectedMatch.player2?.athlete?.full_name}>
                     {selectedMatch.player2?.athlete?.full_name || 'Bye'}
                  </div>
                  <input 
                    type="number" step="0.1" 
                    className="w-full text-center text-2xl font-bold text-blue-600 rounded-md border-blue-300 py-2 focus:ring-blue-500"
                    placeholder="Điểm"
                    value={score2} onChange={e => setScore2(e.target.value)}
                    disabled={!selectedMatch.player2}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2 text-center">Chọn người chiến thắng (Vào Vòng Sau)</label>
                <div className="flex gap-4 justify-center">
                  <button type="button" 
                    disabled={!selectedMatch.player1}
                    className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${winnerId === selectedMatch.athlete1_registration_id ? 'bg-red-600 text-white shadow-md transform scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'} disabled:opacity-50`}
                    onClick={() => setWinnerId(selectedMatch.athlete1_registration_id)}
                  >
                    ĐỎ Thắng
                  </button>
                  <button type="button"
                    disabled={!selectedMatch.player2}
                    className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${winnerId === selectedMatch.athlete2_registration_id ? 'bg-blue-600 text-white shadow-md transform scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'} disabled:opacity-50`}
                    onClick={() => setWinnerId(selectedMatch.athlete2_registration_id)}
                  >
                    XANH Thắng
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setSelectedMatch(null)} className="btn-secondary">Hủy</button>
                <button type="submit" disabled={!winnerId} className="btn-primary">Lưu Kết Quả & Cập Nhật Nhánh</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
