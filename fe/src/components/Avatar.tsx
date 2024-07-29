interface AvatarProps {
  author: string
  size: "small" | "medium" | "large"
}

function Avatar({ author, size }: AvatarProps) {
  return (
    <div className={`relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "w-6 h-6" : size === "medium" ? "w-8 h-8" : "w-10 h-10"}`}>
      <span className="font-medium text-gray-600 dark:text-gray-300">{author[0]}</span>
    </div>
  )
}

export default Avatar