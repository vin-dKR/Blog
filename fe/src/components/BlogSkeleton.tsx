import { useRecoilValue } from 'recoil'
import Navbar from './Navbar'
import { authorAtom } from '../store/atoms/atom'

function InnerBlogSkeleton() {
    const authorr = useRecoilValue(authorAtom)
  return (
    <div>
        <Navbar author={authorr} />
    <div className="max-w-3xl mx-auto px-4 py-8 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="h-4 bg-gray-200 rounded w-32 ml-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24 ml-4"></div>
        </div>
        <div className="border-t border-b border-gray-300 py-4 mb-6 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="h-6 bg-gray-200 rounded w-16"></div>
                <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="h-4 bg-gray-200 rounded w-20"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
            </div>
        </div>
        <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
    </div>
    </div>
  )
}

export default InnerBlogSkeleton