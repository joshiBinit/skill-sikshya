import {
  ArrowRight,
  Trophy,
  ThumbsUp,
  Heart,
  MessageCircle,
  Star,
} from "lucide-react";
import profile1 from "../assets/testimonial.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import profile6 from "../assets/profile6.png";

const thirdComponent = () => {
  const profileImages = [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
  ];

  const icons = [
    { Icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-100" },
    { Icon: ThumbsUp, color: "text-blue-500", bg: "bg-blue-100" },
    { Icon: Heart, color: "text-red-500", bg: "bg-red-100" },
    { Icon: MessageCircle, color: "text-green-500", bg: "bg-green-100" },
    { Icon: Star, color: "text-purple-500", bg: "bg-purple-100" },
  ];

  const imageRadius = 190; // more gap now
  const iconRadius = 230; // more gap now
  const containerSize = 440; // bigger container to fit everything

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16">
      <div className="text-center relative">
        <div
          className="relative mx-auto mb-8"
          style={{ width: containerSize, height: containerSize }}
        >
          {profileImages.map((image, index) => {
            const angle = index * 60 - 90;
            const x = Math.cos((angle * Math.PI) / 180) * imageRadius;
            const y = Math.sin((angle * Math.PI) / 180) * imageRadius;

            return (
              <div
                key={index}
                className="absolute w-16 h-16 rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <img
                  src={image}
                  alt={`Profile ${index + 1}`}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            );
          })}

          {icons.map((item, index) => {
            const angle = index * 72 + 36;
            const x = Math.cos((angle * Math.PI) / 180) * iconRadius;
            const y = Math.sin((angle * Math.PI) / 180) * iconRadius;

            return (
              <div
                key={index}
                className={`absolute w-10 h-10 ${item.bg} rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 animate-pulse-slow`}
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <item.Icon className={`w-5 h-5 ${item.color}`} />
              </div>
            );
          })}

          <div
            className="absolute inset-0 flex items-center justify-center p-6"
            style={{ pointerEvents: "auto", zIndex: 10 }}
          >
            <div className="space-y-4 max-w-sm">
              <p className="text-gray-600 text-lg">
                Hear How They Level Up Their Game!
              </p>

              <h2 className="text-4xl font-bold text-gray-800">
                Skill <span className="text-green-500">Masters</span> Unite!
                <span className="ml-2">🤝</span>
              </h2>

              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-lg hover:underline transition-colors duration-300 group">
                View all Testimonials
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default thirdComponent;
