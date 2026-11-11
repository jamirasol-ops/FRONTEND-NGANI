import {
  User,
  Code2,
  Heart,
  Target,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="container mx-auto max-w-4xl space-y-10 px-6 py-12">

      <div>
        <p className="mb-2 font-semibold text-pink-500">
          GET TO KNOW ME
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900">
          About Me
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          A little introduction about myself, my dreams, and my journey as a student.
        </p>
      </div>

      {/* My Story */}
      <div className="pink-card space-y-5 p-7">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-pink-100 p-3">
            <User className="text-pink-600" size={25} />
          </div>

          <h2 className="text-xl font-bold">
            My Story
          </h2>
        </div>

        <p className="leading-8 text-gray-600">
          Hello! My name is Janel Mirasol. I am a simple person
          who dreams of finishing college and having a better
          future. I am currently taking Bachelor of Science in
          Information Technology (BSIT).
        </p>

        <p className="leading-8 text-gray-600">
          I enjoy learning new things, exploring technology,
          and gaining new experiences. As a student, I know
          that there are still many things I need to learn,
          but I am always willing to improve myself and do
          my best in everything I do.
        </p>

        <p className="leading-8 text-gray-600">
          One of my biggest dreams is to graduate, make my
          family proud, and become successful someday.
          I believe that with patience, hard work, and
          determination, I can achieve the goals I have
          always dreamed of.
        </p>

      </div>

      {/* Skills */}
      <div className="pink-card space-y-5 p-7">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-pink-100 p-3">
            <Code2 className="text-pink-600" size={25} />
          </div>

          <h2 className="text-xl font-bold">
            Skills & Technologies
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>

      {/* Passion and Goal */}
      <div className="grid gap-5 md:grid-cols-2">

        <div className="pink-card p-6">
          <Heart className="mb-4 text-pink-500" size={30} />

          <h3 className="mb-2 text-lg font-bold">
            My Passion
          </h3>

          <p className="text-sm leading-7 text-gray-600">
            I enjoy learning new things, exploring technology,
            and discovering experiences that help me grow
            as a person and as a student.
          </p>
        </div>

        <div className="pink-card p-6">
          <Target className="mb-4 text-pink-500" size={30} />

          <h3 className="mb-2 text-lg font-bold">
            My Goal
          </h3>

          <p className="text-sm leading-7 text-gray-600">
            My goal is to finish my college education,
            graduate with a BSIT degree, build a successful
            career, and make my family proud.
          </p>
        </div>

      </div>

      {/* Personal Motto */}
      <div className="pink-card flex gap-4 p-6">
        <Lightbulb
          className="shrink-0 text-pink-500"
          size={30}
        />

        <div>
          <h3 className="font-bold">
            My Personal Motto
          </h3>

          <p className="mt-2 italic text-gray-600">
            "Small progress is still progress. Never give up on your dreams."
          </p>
        </div>
      </div>

    </div>
  );
}