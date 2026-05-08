import { useState } from "react";

function Hero() {

  const [showContact, setShowContact] = useState(false);

  return (

    <>

      <section className="bg-white py-20 border-b">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <p className="text-gray-500 uppercase tracking-[4px] mb-4 text-sm">

              Industrial Electronics & Tools

            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-black">

              Professional Products
              <br />
              For Businesses
              <br />
              & Technicians

            </h1>

            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl mb-8">

              ToolDec supplies industrial electronics, networking products,
              tools, accessories, and professional equipment for commercial
              and technical requirements.

            </p>

            <div className="flex gap-4 flex-wrap">

              
              <button
                onClick={() => setShowContact(true)}
                className="border border-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
              >

                Contact Us

              </button>

            </div>

          </div>

        </div>

      </section>


      {showContact && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-10 rounded-2xl shadow-2xl w-[90%] max-w-md relative">

            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-6">
              Contact ToolDec
            </h2>

            <div className="space-y-4 text-gray-700">

              <p>
                <strong>Phone:</strong>
                {" "}
                +91 9876543210
              </p>

              <p>
                <strong>Email:</strong>
                {" "}
                tooldec@gmail.com
              </p>

              <p>
                <strong>WhatsApp:</strong>
                {" "}
                +91 9876543210
              </p>

              <p>
                <strong>Address:</strong>
                {" "}
                Bangalore, Karnataka
              </p>

            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="mt-8 block bg-black text-white text-center py-4 rounded-xl font-semibold"
            >

              Chat on WhatsApp

            </a>

          </div>

        </div>

      )}

    </>

  );

}

export default Hero;