import Navbar from "./Navbar"

function PublishSkeleton() {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto mt-8 px-4 grid gap-10">
                <div className="w-full h-16 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
                <div className="flex flex-col gap-1">
                    <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                    <div className="w-full h-8 bg-gray-200 rounded-md animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default PublishSkeleton