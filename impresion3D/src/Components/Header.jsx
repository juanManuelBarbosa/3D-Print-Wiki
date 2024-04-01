//import './Styles/Header.css'

const Header = ({headerTittle,  headerText})=>{
    return<>
        <h2 className=" text-gray-800 my-5 text-center text-xl underline">{headerTittle}</h2>
        <p className=" text-gray-800 w-3/4 my-5 mx-auto text-sm">{headerText}</p>
    </>
}



export default Header