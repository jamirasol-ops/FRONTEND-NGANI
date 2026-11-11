
"use client";

import { useState, type FormEvent } from "react";

import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const recipient = "jamirasol@gbox.ncf.edu.ph";

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
  }

  return (
    <div className="container mx-auto max-w-5xl space-y-10 px-6 py-12">

      {/* Page Heading */}
      <div>
        <p className="mb-2 font-semibold text-pink-500">
          LET'S CONNECT
        </p>

        <h1 className="text-4xl font-extrabold text-gray-900">
          Contact Me
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Have a question, collaboration idea, or project
          in mind? Feel free to contact me!
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-5">

        {/* Contact Information */}
        <div className="space-y-4 md:col-span-2">

          {/* Email */}
          <div className="pink-card flex items-center gap-4 p-5">
            <div className="rounded-xl bg-pink-100 p-3">
              <Mail className="text-pink-600" size={24} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-gray-500">
                Email
              </p>

              <a
                href="mailto:jamirasol@gbox.ncf.edu.ph"
                className="break-all font-semibold text-gray-900 transition hover:text-pink-600"
              >
                jamirasol@gbox.ncf.edu.ph
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="pink-card flex items-center gap-4 p-5">
            <div className="rounded-xl bg-pink-100 p-3">
              <MapPin className="text-pink-600" size={24} />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Location
              </p>

              <p className="font-semibold text-gray-900">
                Canaman, Camarines Sur, Philippines
              </p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="pink-card p-6 md:col-span-3">

          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-pink-100 p-3">
              <MessageCircle
                className="text-pink-600"
                size={24}
              />
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Send a Message
              </h2>

              <p className="text-sm text-gray-500">
                Fill out the form below.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name and Email */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
                />
              </div>

            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Subject
              </label>

              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Project Inquiry / Hello"
                required
                className="w-full rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                required
                className="w-full resize-none rounded-lg border border-pink-200 bg-white px-4 py-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-pink-600"
            >
              <Send size={18} />
              Send Message
            </button>

            {submitted && (
              <p className="flex items-center gap-2 text-sm text-pink-600">
                <CheckCircle size={18} />
                Your email application should open with your message.
              </p>
            )}

          </form>

        </div>

      </div>

    </div>
  );
}
