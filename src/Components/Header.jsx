import { motion } from 'framer-motion';

const Header = ({ headerText, headerBanner , theme }) => {
  return (
    <>
      <motion.img
        src={headerBanner}
        className="w-full border-gray-950 border-b-3 shadow-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className={theme === 'light' ?
        'text-fuchsia-950 w-10/12 mx-auto mb-10 mt-10 text-center xl:text-xl md:text-md' 
        : 'text-[#fff] w-10/12 mx-auto mb-10 mt-10 text-center xl:text-xl md:text-md'}  //estilos condicionales
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5}}
      >
        {headerText}
      </motion.p>
    </>
  );
};

export default Header;
