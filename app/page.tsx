import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Heart,
  Laptop,
  Sparkles,
  Camera,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50">

      <section className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-32">

        {/* Introduction */}
        <div className="flex-1 space-y-6 text-center md:text-left">

          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-medium text-pink-600">
            <Sparkles size={16} />
            Welcome to My Portfolio
          </div>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Hi, I'm{" "}
            <span className="text-pink-500">
              Janel Mirasol!
            </span>
          </h1>

          <h2 className="text-xl font-semibold text-pink-600 md:text-2xl">
            Aspiring Web Developer
          </h2>

          <p className="max-w-xl text-base leading-8 text-gray-600 md:text-lg">
            Hello! I am Janel Mirasol, an Information
            Technology student who enjoys learning new
            things and exploring the world of technology.
            I created this portfolio to share my personal
            background, college journey, hobbies, and
            interests.
          </p>

          <p className="text-gray-600">
            My dream is to finish college, achieve my goals,
            and build a better future. Thank you for visiting
            my portfolio!
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-pink-600"
            >
              About Me
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-pink-400 bg-white px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
            >
              Contact Me
            </Link>

          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-5 pt-4 md:justify-start">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 transition hover:text-pink-500"
            >
              <Code2 size={23} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-500 transition hover:text-pink-500"
            >
              <Camera size={23} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 transition hover:text-pink-500"
            >
              <Laptop size={23} />
            </a>

          </div>

        </div>

        {/* Profile Image */}
        <div className="flex flex-1 justify-center">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-8 border-white bg-pink-200 shadow-xl md:h-96 md:w-96">

            <Image
              src="/image/Janel.jpeg"
              alt="Janel Mirasol"
              fill
              priority
              className="rounded-full object-cover"
              sizes="(max-width: 768px) 288px, 384px"
            />

            {/* Floating Icons */}
            <div className="absolute -right-2 top-10 rounded-2xl bg-white p-4 shadow-lg">
              <Code2 className="text-pink-500" size={30} />
            </div>

            <div className="absolute -bottom-2 -left-3 rounded-2xl bg-white p-4 shadow-lg">
              <Sparkles className="text-pink-500" size={30} />
            </div>

          </div>
        </div>

      </section>

      {/* Skills Preview */}
      <section className="border-t border-pink-100 bg-white py-16">

        <div className="container mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            My Skills
          </h2>

          <p className="mt-3 text-gray-500">
            Technologies and tools I am learning and exploring.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">

            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-pink-200 bg-pink-50 px-5 py-2 text-sm font-medium text-pink-700"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}
