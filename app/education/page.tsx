
import {
  GraduationCap,
  BookOpen,
} from "lucide-react";

export default function Education() {
  return (
    <div className="container mx-auto max-w-4xl space-y-10 px-6 py-12">

      {/* Page Heading */}
      <div>
        <p className="mb-2 font-semibold text-pink-500">
          MY ACADEMIC JOURNEY
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900">
          My College Journey
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Every day is an opportunity to learn, grow, and move closer to my dreams.
        </p>
      </div>

      {/* College Information */}
      <div className="pink-card p-6 md:p-8">

        <div className="flex flex-col justify-between gap-4 sm:flex-row">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-pink-100 p-3">
              <GraduationCap
                className="text-pink-600"
                size={30}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                College Student
              </h2>

              <p className="mt-1 text-sm font-medium text-pink-600">
                Bachelor of Science in Information Technology (BSIT)
              </p>
            </div>

          </div>

          <span className="h-fit rounded-full bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700">
            Currently Studying
          </span>

        </div>

        <p className="mt-6 leading-8 text-gray-600">
          I am currently pursuing a Bachelor of Science in
          Information Technology (BSIT). My college journey
          allows me to gain knowledge and develop my skills
          in computers, programming, web development, and
          other areas of technology.
        </p>

        <p className="mt-4 leading-8 text-gray-600">
          As a college student, I continue to learn, face
          challenges, and improve myself. Every lesson and
          experience brings me one step closer to achieving
          my dream of graduating and building a successful
          future.
        </p>

      </div>

      {/* Learning Section */}
      <div className="rounded-2xl bg-pink-50 p-6">

        <div className="flex items-center gap-3">
          <BookOpen
            className="text-pink-500"
            size={27}
          />

          <h2 className="text-lg font-bold text-pink-800">
            Learning Never Stops
          </h2>
        </div>

        <p className="mt-3 leading-7 text-gray-600">
          My college journey is not just about earning a
          degree. It is also about learning new skills,
          discovering my abilities, overcoming challenges,
          and preparing myself for the future.
        </p>

      </div>

    </div>
  );
}
