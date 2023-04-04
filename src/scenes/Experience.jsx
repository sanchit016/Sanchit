import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Experience = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="experience" className="pt-0 pb-34">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-mono font-semibold text-4xl mb-5">
            EX<span className="text-red">PERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
          {/* <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p> */}
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="experience"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="experience" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* infosys */}
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-mono font-semibold text-5xl">01</p>
              <p className="font-mono font-semibold text-3xl mt-3">
                Infosys Campus Ambassador
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-5 font-mono">
            <li>
              •  Promoted Infosys brand on campus through various marketing and communication channels.
            </li>
            <li>
              •  Attended more regular seminars on latest technology, enhancing my knowledge and proficiency in these areas.
            </li>
            <li>
              •  Selected as Campus Ambassador for Infosys after achieving the highest score on the hackwithinfy exam in my campus
            </li>
          </ul>
        </motion.div>

        {/* iOS dev */}
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-mono font-semibold text-5xl">02</p>
              <p className="font-mono font-semibold text-3xl mt-3">
                AK GLOBAL INFOTECH
              </p>
              <p className="font-mono font-semibold text-3xl mt-3">
                iOS Developer        
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <ul className="mt-14 font-mono">
            <li>
              •  Designed fully responsive  iOS 15 applications with intuitive UI/UX.
            </li>
            <li>
              •  Implemented about 10 apps with dual dark and light theme.
            </li>
            <li>
              •  Built user authentication system using Firebase authentication.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
