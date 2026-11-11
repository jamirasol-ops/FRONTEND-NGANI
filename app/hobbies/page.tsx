
import {
  Camera,
  Gamepad2,
  BookOpen,
  Coffee,
  Heart,
} from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    icon: Camera,
    description:
      "I enjoy capturing beautiful moments, memories, and interesting things around me.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description:
      "I enjoy playing games during my free time as a way to relax and have fun.",
  },
  {
    title: "Reading",
    icon: BookOpen,
    description:
      "I enjoy reading interesting stories and learning new information that can help me grow.",
  },
  {
    title: "Coffee Time",
    icon: Coffee,
    description:
      "I enjoy having coffee during my free time while relaxing and taking a break from daily activities.",
  },
  {
    title: "Spending Time with Family",
    icon: Heart,
    description:
      "I value spending quality time with my family and creating meaningful memories with them.",
  },
];

export default function Hobbies() {
  return (
    <div className="container mx-auto max-w-5xl space-y-10 px-6 py-12">

      {/* Page Heading */}
      <div>
        <p className="mb-2 font-semibold text-pink-500">
          THINGS I LOVE
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900">
          Hobbies & Interests
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Here are some of the things I enjoy doing during my free time.
        </p>
      </div>

      {/* Hobbies Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {hobbies.map((hobby) => {
          const Icon = hobby.icon;

          return (
            <div
              key={hobby.title}
              className="pink-card group p-6"
            >

              <div className="mb-5 flex items-center gap-4">

                <div className="rounded-xl bg-pink-100 p-3 transition group-hover:bg-pink-200">
                  <Icon
                    className="text-pink-600"
                    size={27}
                  />
                </div>

                <h2 className="text-lg font-bold text-gray-900">
                  {hobby.title}
                </h2>

              </div>

              <p className="text-sm leading-7 text-gray-600">
                {hobby.description}
              </p>

            </div>
          );
        })}

      </div>

      {/* Closing Section */}
      <div className="rounded-2xl bg-pink-50 p-8 text-center">

        <Heart
          className="mx-auto mb-4 fill-pink-400 text-pink-500"
          size={35}
        />

        <h2 className="text-2xl font-bold text-pink-800">
          Enjoy Every Moment!
        </h2>

        <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
          I believe that life is not only about studying
          and responsibilities. Taking time to enjoy simple
          things, relax, and spend time with loved ones
          makes every day more meaningful.
        </p>

      </div>

    </div>
  );
}
