import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="py-12 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Strumflex</h3>
            <p className="text-gray-400">
              Master the art of guitar with professional instruction and
              structured learning.
            </p>
          </div>
          {/* <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-red-500 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-red-500 transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div> */}
          {/* <div></div>
          <div></div> */}
          <div className="md:flex flex-col content-end">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: strumflex01@gmail.com</li>
              <li>Address: Sec 16 Airoli Navi Mumbai 400708</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Strumflex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
