import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://raw.githubusercontent.com/lwinmoepaing/lwinmoepaing/main/img/gitto.gif"
              className="h-12 mr-3"
              alt="Git"
            />
            <div>
              <a
                href="https://github.com/Bhargav-Nadiadra/Invoice-Generator"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
              We are Web Developers
              </a>
              <h1>
                {" "}
                Free Invoice Generator for your business using ReactJS and
                Local Storage.
              </h1>
            </div>
          </div>

          <PageTitle title="Invoice Generator" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export invoice to  PDF </li>
              <li> Can Export invoice to Image </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 I’m looking for help with ReactJS dev to build Many new projects.
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:pankaj720525@gmail.com"
                className="underline cursor-pointer"
              >
                pankaj720525@gmail.com
              </a>{" "}     
            </div>
            <div>
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion For each component Animation</li>
              <li> Lottiefiles For Dashboard Widgets Icons</li>
              <li> IndexedDB for Local Storage </li>
              <li> ReactJS </li>
            </ul>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="tel:+918128237083"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +91 8128237083
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
