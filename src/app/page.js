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
          image="/oedipus_birth.png"
          title="Oedipus' Birth"
          description="Oedipus is born in Thebes to his parents, Jocasta and Laius. Jocasta hears a prophecy that Oedipus would kill his father and marry his mother. Out of fear, Jocasta orders a shepherd to kill Oedipus. The shepherd, however, does not kill Oedipus, but instead gives him to another shepherd in Corinth. Oedipus is raised by Polybus and Merope, the king and queen of Corinth."
        />
        <CardPair
          image="/crossroads.jpg"
          title="Oedipus Runs Away"
          description="After hearing the prophecy that Oedipus would kill his father and marry his mother, Oedipus runs away from Corinth to Thebes. At a crossroad where three roads met, Oedipus kills what initially seems to be a group of strangers. He later confronts the Sphinx and solves its riddle. Finally, upon reaching Thebes, Oedipus is crowned king of Thebes as the previous king of Thebes, Laius, had been assassinated."
        />
        <CardPair
          image="/thebes.jpeg"
          title="A Plague Strikes Thebes"
          description="A plague strikes Thebes, and Oedipus vows to find out what caused the plague. Creon brings news from the oracle that the plague is caused by the murderer of Laius. Tiresias is called in, who reports that Oedipus is the murderer. Oedipus is apalled at this thought and he vows to exile the true murderer."
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
        <h3 className="text-lg w-full font-bold align-center text-center p-10 pt-0 text-amber-100">
          {`Commit ${process.env.VERCEL_GIT_COMMIT_SHA || "LOCAL"}`} •{" "}
          <a
            href="https://github.com/AdamEXu/oedipus-project"
            className="underline transition duration-100 ease-in-out text-amber-200 hover:text-amber-50"
          >
            View Source On GitHub
          </a>{" "}
          • © 2024 Adam Xu
        </h3>
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
          className="rounded-l-none md:rounded-l-xl rounded-t-xl md:rounded-t-none transition duration-500 ease-in-out hover:opacity-80"
        />
      </div>
      <div className="text-center bg-amber-50 text-black p-10 m-10 mt-0 md:mt-10 w-[calc(50% - 20px)] md:w-full ml-10 md:ml-0 rounded-r-none md:rounded-r-xl rounded-b-xl md:rounded-b-none transition duration-500 ease-in-out hover:bg-amber-100  ">
        <h1 className="text-5xl font-bold">{props.title}</h1>
        <p className="text-2xl mt-10">{props.description}</p>
      </div>
    </motion.div>
  );
}
