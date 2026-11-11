
import {
  User,
  Code2,
  Heart,
  Target,
  Lightbulb,
} from "lucide-react";

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

      {/* Page Introduction */}
      <div>
        <p className="mb-2 font-semibold text-pink-500">
          GET TO KNOW ME
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900">
          About Me
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          A little introduction about myself, my dreams,
          and my journey as a college student.
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
          Hello! My name is Janel Mirasol. I am a simple
          person who dreams of finishing college and
          building a better future for myself and my family.
          I am currently taking Bachelor of Science in
          Information Technology (BSIT).
        </p>

        <p className="leading-8 text-gray-600">
          As a college student, I enjoy learning new things
          and exploring technology. I know that college
          comes with challenges, but I believe that every
          experience teaches me something valuable.
          I may not know everything yet, but I am always
          willing to learn, improve, and do my best.
        </p>

        <p className="leading-8 text-gray-600">
          My biggest dream is to graduate, make my family
          proud, and have a successful future someday.
          I want to achieve my goals through patience,
          determination, and hard work. I believe that
          even small steps can bring me closer to my dreams.
        </p>

      </div>

      {/* Skills and Technologies */}
      <div className="pink-card space-y-5 p-7">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-pink-100 p-3">
            <Code2 className="text-pink-600" size={25} />
          </div>

          <h2 className="text-xl font-bold">
            Skills & Technologies
          </h2>
        </div>

        <p className="text-gray-600 leading-7">
          These are some of the technologies and tools
          I am learning and exploring as an IT student.
        </p>

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

        {/* My Passion */}
        <div className="pink-card p-6">
          <Heart
            className="mb-4 text-pink-500"
            size={30}
          />

          <h3 className="mb-2 text-lg font-bold">
            My Passion
          </h3>

          <p className="text-sm leading-7 text-gray-600">
            I enjoy discovering new things, learning about
            technology, and spending time with the people
            who are important to me. I also love experiences
            that help me grow and become a better person.
          </p>
        </div>

        {/* My Goal */}
        <div className="pink-card p-6">
          <Target
            className="mb-4 text-pink-500"
            size={30}
          />

          <h3 className="mb-2 text-lg font-bold">
            My Goal
          </h3>

          <p className="text-sm leading-7 text-gray-600">
            My main goal is to finish my BSIT degree,
            graduate from college, find a good opportunity,
            and build a successful future. Most importantly,
            I want to make my family proud.
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
            "Small progress is still progress.
            Never give up on your dreams."
          </p>
        </div>

      </div>

    </div>
  );
}
