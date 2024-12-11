"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  return (
    <div>
      <div
        data-us-project-src="/homepage-effect.json"
        className="h-screen w-screen"
      ></div>
      <div className="min-h-screen w-screen flex flex-col items-start pt-20">
        <CardPair
          image="/Oedipus-Birth.jpg"
          title="The Birth"
          description="Oedipus was born in Thebes to Laius and Jocasta, the king and queen of Thebes. Shortly after Oedipus’ birth, Jocasta hears a prophecy from the gods that Oedipus would kill his father and marry his mother. Out of fear of this prophecy taking place, Jocasta sends Oedipus to be killed. However, the shepherd assigned the task could not bear to kill Oedipus, instead passing him off to a shepherd in Corinth, where Oedipus was raised by the king and queen of Corinth, Polybus and Merope. "
        />
        <CardPair
          image="/Oedipus-Run.jpg"
          title="The Run"
          description="Oedipus hears the same theory that was told to his parents. In an attempt to run away from the prophecy, Oedipus quickly flees Corinth, and soon reaches a crossroad where three roads meet. Oedipus kills a band of strangers who got in his way, and continues on his journey. Oedipus later confronts the Sphinx and solves its riddle, freeing Thebes from its previous plight, and Oedipus is crowned king of Thebes."
        />
        <CardPair
          image="/Oedipus-Plague.jpg"
          title="The Plague"
          description="Another plague strikes Thebes, and Oedipus is determined to find the cause. The oracle reports to free Thebes from the plague, the murderer of Laius would have to be found and exiled. Oedipus vows to find the killer at all costs. Tiresias, a prophet who sees through Apollo’s eyes, is summoned. Tiresias claims that Oedipus killed Laius, which even to Oedipus himself sounds outrageous."
        />
        <CardPair
          image="/Oedipus-Truth.jpg"
          title="The Truth"
          description="Oedipus continues to piece together the puzzle that is Laius’ death, and in the process reveals so much about himself. He soon realizes the strangers he kills at the crossroad may have been Laius and his guard. As he struggles to comprehend this, Oedipus finds out that he was the son of Laius and Jocasta, that he was found by one of Polybus’ servants, and that he had fulfilled the prophecy in trying to run away from it."
        />
      </div>
      <div className="w-screen flex flex-col items-start">
        <h1 className="text-6xl w-full font-bold align-center text-center">
          Resources
        </h1>
        <div className="p-10 w-full md:px-[20%] text-center">
          <p className="text-xl mt-5">
            Source 1 the longest of the longest of the longest of the longest of
            the longest of the longest of the longest of the longest of the
            longest of the longest of the longest of the longest of the longest
            of the longest of the longest
          </p>
          <p className="text-xl mt-5">Source 2</p>
          <p className="text-xl mt-5">
            Source 3 is long is long is long is long is long is long is long is
            long is long is long is long is long is long is long is long is long
          </p>
          <p className="text-xl mt-5">Source 4 is a bit long I guess</p>
        </div>
      </div>
      <footer>
        <h2 className="text-2xl w-full font-bold align-center text-center p-10 pb-0 text-amber-50">
          Made with ❤️ by Adam Xu
        </h2>
        <h3 className="text-lg w-full font-bold align-center text-center p-10 pt-0 pb-0 text-amber-100">
          {`Commit ${
            process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ||
            "LOCAL"
          }`}{" "}
          •{" "}
          <a
            href="https://github.com/AdamEXu/oedipus-project"
            className="underline transition duration-500 ease-in-out text-amber-200 hover:text-amber-50"
          >
            View Source Code On GitHub
          </a>{" "}
          • © 2024 Adam Xu
        </h3>
        <h2 className="text-2xl w-full font-bold text-center p-10 pt-2 text-amber-50 flex justify-center">
          <a href="https://wakatime.com/@AdamEXu/projects/ssddtwmxxa">
            <img
              src="https://wakatime.com/badge/user/ca5d86cc-5053-46ea-a909-142cda2c5e90/project/5167156c-3b5c-49a8-bd94-bb9e21a916dc.svg?style=for-the-badge"
              className="inline-block"
              alt="Wakatime badge"
            />
          </a>
        </h2>
      </footer>
    </div>
  );
}

function CardPair(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.4,
    margin: "150px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row gap-0 w-full mb-0 md:mb-10"
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.5,
      }}
      transition={{
        duration: 0.5,
        ease: "circOut",
      }}
    >
      <div className="text-center m-10 mb-0 md:mb-10 mr-10 md:mr-0">
        <img
          src={props.image}
          className="md:rounded-l-xl rounded-t-xl md:rounded-tr-none transition duration-500 ease-in-out hover:opacity-80"
        />
      </div>
      <div className="text-center bg-amber-50 text-black p-10 m-10 mt-0 md:mt-10 w-[calc(50% - 20px)] md:w-full ml-10 md:ml-0 md:rounded-r-xl rounded-b-xl md:rounded-bl-none transition duration-500 ease-in-out hover:bg-amber-100  ">
        <h1 className="text-5xl font-bold">{props.title}</h1>
        <p className="text-2xl mt-10">{props.description}</p>
      </div>
    </motion.div>
  );
}
