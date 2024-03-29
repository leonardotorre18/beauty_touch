import { useNavigate } from "react-router-dom";


export default function CardComponent({data}: {data:any}) {

    const navigate = useNavigate();

    const navigateToId = (id: string) => {
        navigate(`/services/${id}`)
    }
    
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            {/* <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            /> */}
            <div className="p-4 flex flex-col items-start justify-between h-full">
                <div>
                    <h4 className="text-xl font-semibold tracking-tigh">
                        {data.title}
                    </h4>
                    <p className="mb-2 leading-normal">
                        {data.description}
                    </p>
                </div>
                <button 
                    className="px-4 py-2 text-sm text-blue-100 bg-MainColor rounded shadow"
                    onClick={() => {
                        navigateToId(data._id.$oid)
                    }}
                >
                    Más información
                </button>
            </div>
        </div>
    );
}