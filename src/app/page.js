"use client";

export default function Home() {
  return (
    <div>
      <div
        data-us-project-src="/homepage-effect.json"
        className="h-screen w-screen"
      ></div>
      <div className="h-screen items-center justify-center">
        <div className="flex flex-row gap-10">
          <div className="text-center m-20">
            <h1 className="text-5xl font-bold">Adam's Oedipus Project</h1>
          </div>
          <div className="text-center bg-amber-50 text-black p-10 m-10">
            <h1 className="text-5xl font-bold">Adam's Oedipus Project</h1>
            <p className="text-2xl">
              Oedipus Oedipus Oedipus Oedipus Oedipus Oedipus Oedipus Oedipus
              Oedipus Oedipus Oedipus Oedipus Oedipus Oedipus Oedipus Oedipus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
