"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { newFacts } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { planetVariants, staggerContainer, fadeIn } from "../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        <TitleText title={<>New facts of our Universe and solar system..</>} />

        {/* <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div> */}

        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {newFacts.map((facts, index) => (
            <NewFeatures
              key={facts}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              title={facts.title}
              sub={facts.subtitle}
              url={facts.imgUrl}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[70%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
