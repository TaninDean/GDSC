interface props {
    color: string,
    name: string
}

const CategoriesList = ({ color, name }: props) => {
    return (
        <div className="flex items-center ml-2 mt-2">
            <div className={`w-3 h-3 rounded-full `} style={{ backgroundColor: color }}></div>
            <button>
                <p className="ml-2">{name}</p>
            </button>
        </div>
    )
}

export default CategoriesList