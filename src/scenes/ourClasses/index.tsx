import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "EduBaby",
    description:
      "The short stay group EduBaby for children from 1.5 to 3 years old has opened its doors at the Child Development Center!",
    image: image1,
  },
  {
    name: "Fitness",
    description:"Fitness is a way to lift your spirits and keep fit. This is an opportunity to always be healthy and cheerful. We instill a love for sports and a healthy lifestyle. Fitness is aimed at harmonious and comprehensive development.",
    image: image2,
  },
  {
    name: "Creative Classes",
    description:
      "Creative programs develop imagination, a sense of harmony and color. Form ideas about materials, their properties and qualities.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "This is a fabulous fascinating world in which we teach children to play, develop imagination, fantasy and imaginative thinking.",
    image: image4,
  },
  {
    name: "Playing Room",
    description:"Under the supervision of an experienced teacher, the children draw, do modeling, appliqué, and participate in role-playing games. For those who love a relaxing holiday, there are books, board games, a twister. There are thematic classes.",
    image: image5,
  },
  {
    name: "Developing Classes",
    description:
      "Classes on the formation of elementary mathematical knowledge and correct oral speech; teaching competent reading technique; preparing the child for school.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              We will help to discover and develop the talents of the child. In case of success, he will receive the appropriate sports category, will take part in specialized creative competitions, incl. interregional scale. Based on the results of the classes, we communicate with parents and talk about successes, give the necessary recommendations.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
