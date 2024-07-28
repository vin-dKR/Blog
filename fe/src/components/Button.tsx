
interface ButtonProps {
    type: 'signup' | 'signin'
    onClick: (type: 'signup' | 'signin') => void
}

function Button({ type, onClick }: ButtonProps) {
    return (
        <div>
            <button
                type="submit"
                onClick={() => onClick(type)}
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {type === 'signup' ? 'Sign Up' : 'Sign In'}
            </button>
        </div>
    )
}

export default Button