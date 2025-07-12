import { Eye, ArrowRight, Plus } from "lucide-react";
import ReactImage from "../assets/react.png";
import Reaction from "../assets/reaction.png";
import PenIcon from "../assets/pen.png";
import VueIcon from "../assets/vue.png";

const FirstComponent = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="  rounded-lg p-8 bg-blue-50/30">
        <div className="mb-8">
          <p className="text-gray-600 text-sm mb-2">
            Explore our classes and master trending skills!
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Dive Into{" "}
            <span className="text-green-500">What's Hot Right Now!</span>
            <span className="text-2xl ml-2">🔥</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-500 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-80 w-full flex flex-col justify-between relative">
            <div className="flex justify-end">
              <button className="bg-white/20 hover:bg-white/30 transition-colors text-white px-7 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <Eye className="w-4 h-4" />
                View all Courses
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div>
              <div className="flex gap-2 mb-6">
                {[ReactImage, Reaction, VueIcon, PenIcon].map((img, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                  >
                    <img src={img} alt={`tech-${idx}`} />
                  </div>
                ))}
              </div>

              <div className="flex items-end gap-2">
                <span className="text-6xl font-bold">23</span>
                <div>
                  <Plus className="w-6 h-6 mb-1" />
                  <p className="text-lg font-semibold">All Courses</p>
                  <p className="text-white/80 text-sm">
                    courses you're powering through right now.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pink-100 rounded-2xl h-80 w-full shadow-md flex flex-col justify-between px-4 py-6">
            <div className="flex-1 flex items-center justify-center">
              <div className="transform rotate-270 origin-center text-center">
                <div className="text-red-600 font-bold text-lg leading-tight">
                  Upcoming Courses
                </div>
                <p className="text-sm text-red-500 mt-2">
                  exciting new courses
                  <br />
                  waiting to boost your skills.
                </p>
              </div>
            </div>

            <div className="text-center">
              <span className="text-7xl font-extrabold text-red-600 leading-none">
                05
              </span>
              <span className="text-3xl font-extrabold text-red-600 align-top">
                +
              </span>
            </div>
          </div>

          <div className="bg-pink-100 rounded-2xl h-80 w-full shadow-md flex flex-col justify-between px-4 py-6">
            <div className="flex-1 flex items-center justify-center">
              <div className="transform rotate-270 origin-center text-center">
                <div className="text-red-600 font-bold text-lg leading-tight">
                  Ongoing Courses
                </div>
                <p className="text-sm text-red-500 mt-2">
                  currently happening—don’t
                  <br />
                  miss out on the action!
                </p>
              </div>
            </div>

            <div className="text-center">
              <span className="text-7xl font-extrabold text-red-600 leading-none">
                10
              </span>
              <span className="text-3xl font-extrabold text-red-600 align-top">
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstComponent;
