import React from "react";

export default function Home() {
  const teacherCourses = [
    "Advanced Teaching Methods",
    "Digital Classroom Tools",
    "Student Psychology",
  ];

  const studentCourses = [
    "Full Stack Development",
    "AI & Data Science",
    "Spoken English Mastery",
  ];

  const testimonials = [
    {
      name: "Riya Sharma",
      text: "This platform completely transformed my learning experience.",
    },
    {
      name: "Aman Verma",
      text: "Professional teachers and excellent course quality!",
    },
    {
      name: "Sneha Gupta",
      text: "Highly recommended for both students and teachers.",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          
          <div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Learn Without Limits 🚀
            </h1>

            <p className="mb-6 text-lg text-indigo-100">
              Join thousands of students and teachers on our professional
              learning platform.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
                Explore Courses
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition">
                Join Live Classes
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="learning"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* 👩‍🏫 TEACHERS COURSES */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Courses for Teachers 👩‍🏫
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teacherCourses.map((course, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-600 text-sm">
                Upgrade your teaching skills with expert guidance.
              </p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🎓 STUDENTS COURSES */}
      <section className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Courses for Students 🎓
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {studentCourses.map((course, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{course}</h3>
              <p className="text-gray-600 text-sm">
                Build real-world skills and advance your career.
              </p>
              <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ WHY CHOOSE US */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us ⭐
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Teachers</h3>
            <p className="text-gray-600">
              Learn from industry professionals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">
              Study anytime, anywhere at your own pace.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Certification</h3>
            <p className="text-gray-600">
              Get recognized certificates after completion.
            </p>
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS */}
      <section className="py-20 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Feedback 💬
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border"
            >
              <p className="text-gray-600 italic mb-4">"{item.text}"</p>
              <h4 className="font-semibold text-indigo-600">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Learning Journey?
        </h2>
        <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Join Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 EduLearn. All rights reserved.</p>
      </footer>

    </div>
  );
}