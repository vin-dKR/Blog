function BlogsSceleton() {
    return ( 
        <div className="px-10 md:p-0">
            <div className="px-4 sm:px-6 md:px-8">
                <div className='flex flex-col w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto mt-3'>
                    <div className='flex flex-col border-b border-gray-200 pb-5 animate-pulse'>
                        <div className='flex items-center gap-3'>
                            <div className='w-6 h-6 bg-gray-200 rounded-full'></div>
                            <div className='h-4 bg-gray-200 rounded w-24'></div>
                            <span className='text-gray-200'>•</span>
                            <div className='h-4 bg-gray-200 rounded w-32'></div>
                        </div>
                        <div className='mt-3'>
                            <div className='h-8 bg-gray-200 rounded w-3/4'></div>
                        </div>
                        <div className='mt-2'>
                            <div className='h-4 bg-gray-200 rounded w-full'></div>
                            <div className='h-4 bg-gray-200 rounded w-full mt-1'></div>
                            <div className='h-4 bg-gray-200 rounded w-2/3 mt-1'></div>
                        </div>
                        <div className='mt-4'>
                            <div className='h-4 bg-gray-200 rounded w-24'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default BlogsSceleton