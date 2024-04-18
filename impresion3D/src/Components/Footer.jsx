import { motion } from "framer-motion"

import { FaFacebookSquare } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { FaYoutube , FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";



const Footer = ()=>{
    return <>
    <div className="bg-fuchsia-900 p-1 border-t-2 border-fuchsia-950">
        <div className=" flex auto item-around">
            <div className="W-1/3  border-t-2 border-gray-300 flex-1 my-1" />

            <div className="W-1/3  flex flex-1 justify-around m-0.5">

            <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                 <a target="_blank" href="https://www.instagram.com/majora_impresiones/" > 
                    <GrInstagram className="text-gray-300 text-2xl"/> 
                </a>
            </motion.a>




            <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                <a href="https://www.facebook.com/Majora.impresiones" >
                    <FaFacebookSquare className="text-gray-300 text-2xl m-0 p-0 "/>
                </a>
            </motion.a>

            <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                <a href="https://majoraimpresiones.mercadoshops.com.ar/" target="_blank" >
                    <BsCart4 className="text-gray-300 text-2xl"/> 
                </a>
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                <a href="https://www.youtube.com/channel/UCvBfuH_wJ9gWJOwoNWyMqrg" target="_blank" > 
                    <FaYoutube className="text-gray-300 text-2xl"/>
                </a>

            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => {}}
                onHoverEnd={e => {}}>
                <a href="https://www.tiktok.com/@majora_impresiones" target="_blank">
                    <FaTiktok className="text-gray-300 text-2xl"/>
                </a>

            </motion.a>
               
        
            </div>

            <div className="W-1/3  border-t-2  border--300gray flex-1 my-1"/>
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