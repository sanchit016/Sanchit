import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section id="achievements" className="">
      {/* HEADING */}

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
            ACH<span className="text-red">IEVEMENTS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 font-mono">
          Welcome to my Achievements section! Here, I highlight my notable accomplishments, 
          awards, and milestones in my career.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
              <img
                alt="achievements"
                className="z-10"
                src="assets/achieve.png"
              />
        </div>
      </div>
      

      {/* ACHIEVEMENTS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[280px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-mono text-6xl">“</p>
          <p className="text-center text-xl">
            Qualified for ICPC 2022 regionals! A testament to my programming skills and ability to solve complex
             problems using algorithms. 
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[280px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-mono text-6xl">“</p>
          <p className="text-center text-xl">
            5-star CodeChef rating! Demonstrates my strong problem-solving skills and programming proficiency.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[280px] flex flex-col justify-end p-16 mt-20
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-mono text-6xl">“</p>
          <p className="text-center text-xl">
            Specialist rating on Codeforces! Shows expertise in algorithms, data structures, and competitive programming.
          </p>
        </motion.div>
      </div>

          {/* ROW @ */}

      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[280px] flex flex-col justify-end p-16 mt-8
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-mono text-6xl">“</p>
          <p className="text-center text-xl">
            Achieved LeetCode Knight badge! Demonstrates my problem-solving skills and is a proud addition to my achievements.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[280px] flex flex-col justify-end p-16 mt-8
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-mono text-6xl">“</p>
          <p className="text-center text-xl">
            Selected as<br/> Campus Ambassador for Infosys by achieving best rank in hackwithinfy in my campus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[280px] flex flex-col justify-end p-16 mt-8
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-mono text-6xl w-1/3">“</p>
          <p className="text-center text-xl">
             Qualified 3 roundss of Meta Hackercup 2022 and Achieved Global rank 1899 on Kickstart Round F
          </p>
        </motion.div>
      </div>


    </section>
  );
};

export default Achievements;
