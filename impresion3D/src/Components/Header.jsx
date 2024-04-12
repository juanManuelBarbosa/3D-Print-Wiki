import { motion } from 'framer-motion';

const Header = ({ headerText, headerBanner }) => {
  return (
    <>
      <motion.img
        src={headerBanner}
        className="w-full max-h-52"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-[#3d0b40] w-10/12 mx-auto mb-20 mt-5 text-center xl:text-md md:text-md"
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
