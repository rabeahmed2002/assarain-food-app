import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
  };

  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left section */}
        <div className="mb-4 md:mb-0">
          <p className="font-semibold text-lg">
            Delivered on time with no hassle.
          </p>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Instagram">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.057 1.976.24 2.439.407a4.602 4.602 0 011.62.947c.46.459.81 1.01 1.097 1.62.168.462.35 1.233.407 2.438.059 1.268.071 1.648.071 4.851s-.012 3.584-.07 4.85c-.058 1.206-.24 1.976-.407 2.439a4.603 4.603 0 01-.947 1.62 4.6 4.6 0 01-1.62.947c-.463.168-1.233.35-2.438.407-1.268.059-1.648.071-4.851.071s-3.584-.012-4.85-.07c-1.206-.057-1.976-.24-2.439-.407a4.6 4.6 0 01-1.62-.947 4.602 4.602 0 01-.947-1.62c-.168-.463-.35-1.233-.407-2.438-.059-1.268-.071-1.648-.071-4.851s.012-3.584.07-4.85c.057-1.206.24-1.976.407-2.439a4.602 4.602 0 01.947-1.62c.459-.46 1.01-.81 1.62-.947.462-.168 1.233-.35 2.438-.407 1.268-.059 1.648-.071 4.851-.071m0-2.163C8.756 0 8.336.013 7.052.072 5.726.131 4.609.324 3.692.73a6.785 6.785 0 00-2.446 1.61A6.789 6.789 0 00.73 4.786c-.406.917-.599 2.034-.657 3.36C.013 9.664 0 10.084 0 12s.013 2.336.072 3.62c.058 1.326.251 2.443.657 3.36a6.789 6.789 0 001.516 2.446 6.786 6.786 0 002.446 1.516c.917.406 2.034.599 3.36.657 1.284.059 1.704.072 3.62.072s2.336-.013 3.62-.072c1.326-.058 2.443-.251 3.36-.657a6.786 6.786 0 002.446-1.516 6.787 6.787 0 001.516-2.446c.406-.917.599-2.034.657-3.36.059-1.284.072-1.704.072-3.62s-.013-2.336-.072-3.62c-.058-1.326-.251-2.443-.657-3.36a6.785 6.785 0 00-1.516-2.446A6.787 6.787 0 0020.308.73c-.917-.406-2.034-.599-3.36-.657C15.664.013 15.244 0 12 0z"></path>
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.127c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.23 0H1.77C.792 0 0 .792 0 1.77v20.46C0 23.208.792 24 1.77 24h20.46c.978 0 1.77-.792 1.77-1.77V1.77C24 .792 23.208 0 22.23 0zM7.061 20.452H3.955V9h3.106v11.452zM5.508 7.728a1.799 1.799 0 01-1.799-1.799c0-.993.806-1.799 1.799-1.799 1.003 0 1.799.806 1.799 1.799a1.799 1.799 0 01-1.799 1.799zM20.452 20.452h-3.106v-5.603c0-1.337-.027-3.062-1.864-3.062-1.865 0-2.15 1.457-2.15 2.96v5.705h-3.106V9h2.981v1.561h.043c.415-.785 1.43-1.61 2.945-1.61 3.15 0 3.73 2.075 3.73 4.77v6.731z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:flex-row items-center">
          <form onSubmit={handleSubmit} className="flex items-center space-x-4">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
              className="px-4 py-2 rounded-md border-none focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
            >
              SIGN ME UP!
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="container mx-auto mt-6 flex justify-between items-center text-sm">
        <p>Copyright © 2023 - Acarsan Food Products L.L.C. Design & Developed by Codenestive</p>
        <div className="space-x-2">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <span>/</span>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <span>/</span>
          <a href="#" className="hover:underline">
            Site map
          </a>
          <span>/</span>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
