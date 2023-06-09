import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";
import ParticlesC from "./ParticlesC";

import planet from "./images/planet.svg";
import flyMeter from "./images/flyingMeterior.svg";
import hMet from "./images/halfmeterior3.svg";
import manWithSpacesuit from "./images/manWithSpacesuit.svg";
import metH from "./images/meterorhalf.svg";
import small1 from "./images/small1.svg";
import small2 from "./images/small2.svg";
import small3 from "./images/small3.svg";
import shalf from "./images/shalf.svg";

import star from "./images/star.svg";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <ParticlesC />
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: {
            clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          },
        }}
      >
        <div className="background">
          <motion.div
            animate={{ y: [0, 20] }}
            transition={{
              type: "spring",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2,
            }}
          >
            <h2 className="ques">Did not find what are you looking for?</h2>
          </motion.div>
          <motion.div
            animate={{ x: [0, 100] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
            }}
          >
            <div className="planet">
              <Image src={planet} alt="planet" width={100} />
            </div>
          </motion.div>
          <div className="flyMeter">
            <Image src={flyMeter} alt="planet" width={100} />
          </div>
          <div className="hMet">
            <Image src={hMet} alt="planet" width={100} />
          </div>

          <motion.div
            animate={{ rotate: 70 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10,
              from: 30,
            }}
          >
            <div className="manWithSpacesuit">
              <Image src={manWithSpacesuit} alt="planet" width={100} />
            </div>
          </motion.div>

          <div className="metH">
            <Image src={metH} alt="planet" width={100} />
          </div>
          <div className="small1">
            <Image src={small1} alt="planet" width={100} />
          </div>
          <div className="small2">
            <Image src={small2} alt="planet" width={100} />
          </div>

          <div className="small3">
            <Image src={small3} alt="planet" width={100} />
          </div>

          <div className="shalf">
            <Image src={shalf} alt="planet" width={100} />
          </div>

          <p className="hotline">Hotline + 959324562130</p>
          <h2>TRUST FROM CUSTOMERS</h2>
          <h4 className="join">Join our 1000+ Happy</h4>
          <h4 className="customers">Customers</h4>
          <div className="para">
            <p className="para--text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="para--footer">
              <h3>Uden Michel</h3>
              <Image src={star} alt="stars" width={2} height={2} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
