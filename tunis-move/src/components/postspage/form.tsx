export function FormButton(){
    return(
        <div className="pt-4">
            <button 
                type="submit" 
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
                Submit
            </button>
        </div>
    )
}