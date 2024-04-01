const Footer = ()=>{
    return <>
    <div className="bg-fuchsia-900 p-1 border-t-2 border-fuchsia-950">
        <div className=" flex auto item-around">
            <div className="W-1/3  border-t-2 border-slate-900 flex-1 my-1" />

            <div className="W-1/3  flex flex-1 justify-around m-0.5">
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png"  className="w-6 " alt="" /></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/739/739237.png" className="w-6" alt="" /></a>
                <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2478/2478188.png" className="w-6" alt="" /></a>
                <a href="#"><img src="   https://cdn-icons-png.flaticon.com/512/1077/1077046.png " className="w-6" alt="" /></a>
                <a href="#"><img src="   https://cdn-icons-png.flaticon.com/512/1946/1946552.png " className="w-6" alt="" /></a>
            </div>

            <div className="W-1/3  border-t-2  border-slate-900 flex-1 my-1"/>
        </div>


        <div className=" p-1">
        <img src="https://http2.mlstatic.com/storage/mshops-appearance-api/images/94/46961294/logo-2023020410355415900.webp" className="w-14 mx-auto" alt="" />
        <p className="text-xs text-center">Majora impreciones © Copyright </p>
        <div className="flex justify-center gap-2">
            <a href="#" className="text-xs underline text-gray-400" >Contactanos</a>
            <a href="#" className="text-xs underline text-gray-400">Sobre nosotros</a>
        </div>
        </div>
       
        




    </div>
        
    </>
}

export default Footer