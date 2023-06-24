import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "SAFETY",
    description:
      "We equipped and lit the Studios in accordance with all safety and SanPiN requirements, and installed disinfecting infrared lamps everywhere. The schedule of visits to the Center is prescribed in a special agreement, which also indicates the list of authorized persons who pick up the child. Security is monitored by employees of the secure reception area, teachers and instructors.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "INDIVIDUAL APPROACH",
    description:
      "We will help to discover and develop the talents of the child. In case of success, he will receive the appropriate sports category, will take part in specialized creative competitions, incl. interregional scale. Based on the results of the classes, we communicate with parents and talk about successes, give the necessary recommendations.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "AGE MATTERS",
    description:
      "We are waiting for classes as soon as toddlers and teenagers begin to walk. Trainings are held individually and in groups of small occupancy, which are formed according to the age principle. Educational - up to 5, fitness - up to 8, swimming pool - up to 10 people. Each lesson lasts 25-45 minutes according to age.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST EDUCATION.</HText>
          <p className="my-5 text-sm">
          We offer interesting classes: developing, creative, health and sports programs; dance classes; martial arts; rhythmic gymnastics; swimming and water programs. People come to us for the Extended Day Group and the Early Development Group. Classes are found in young children (3-5 people), formed according to age-related use. Everything we do is aimed at the thoroughness of the comprehensive development of children, preparation for kindergarten and school.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto w-80"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic} 
          />
          <div>
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY CHILDREN{" "}
                    <span className="text-primary-500">DEVELOP TOGETHER</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                The Child Development Center is an interest club where children are fun and comfortable, useful and exciting. Just by looking at the class schedule, you will understand why. Dance classes from disco to hip-hop, martial arts from boxing to kobudo, rhythmic gymnastics, yoga, cycling, swimming. All this we are happy to teach.
              </p>
              <p className="mb-5">
                At the Center for Child Development, we have collected creative areas, emotional and physical development into one complex. Now you save time on the road and energy, doing more.
              </p>
            </motion.div>
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
