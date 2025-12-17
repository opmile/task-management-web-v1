export default function Input({ ...props }) {
    return (
        <input 
            className="bg-white mt-2 block outline-none rounded-xl placeholder-gray-300 text-sm font-light border-solid px-4 py-2 transition-shadow duration-500 ease-in-out shadow-sm hover:shadow-md"
            {...props} 
        />
    )
}