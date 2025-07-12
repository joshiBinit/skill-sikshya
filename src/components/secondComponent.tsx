import { BookOpen, Target, Users, Trophy, Rocket } from "lucide-react";

// Mock images - replace with your actual image imports
import ClarityImage from "../assets/clarity.png";
import DoingImage from "../assets/doing.png";
import MentoredImage from "../assets/mentored.png";
import ShowcaseImage from "../assets/showcase.png";

const journeySteps = [
  {
    title: "Start with Clarity",
    subtitle: "Step into a better learning path.",
    description:
      "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
    bgColor: "bg-gradient-to-br from-red-400 via-red-500 to-pink-500",
    icon: BookOpen,
    image: ClarityImage,
  },
  {
    title: "Learn by Doing",
    subtitle: "Practical skills, real projects.",
    description:
      "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
    bgColor: "bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500",
    icon: Target,
    image: DoingImage,
  },
  {
    title: "Get Mentored & Supported",
    subtitle: "You're not learning alone.",
    description:
      "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
    bgColor: "bg-gradient-to-br from-purple-400 via-purple-500 to-indigo-500",
    icon: Users,
    image: MentoredImage,
  },
  {
    title: "Achieve & Showcase",
    subtitle: "Build your portfolio, get job-ready.",
    description:
      "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
    bgColor: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
    icon: Trophy,
    image: ShowcaseImage,
  },
];

type JourneyCardProps = {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  imagePosition: "left" | "right";
};

const JourneyCard: React.FC<JourneyCardProps> = ({
  title,
  subtitle,
  description,
  bgColor,
  icon: Icon,
  image,
  imagePosition,
}) => (
  <div
    className={`${bgColor} relative rounded-3xl text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-visible`}
  >
    {/* Floating Image */}
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-10 ${
        imagePosition === "left" ? "-left-16" : "-right-16"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="h-56 w-50 object-contain drop-shadow-2xl"
      />
    </div>

    {/* Content Container */}
    <div
      className={`min-h-[200px] p-6 ${
        imagePosition === "left" ? "pl-32" : "pr-32"
      }`}
    >
      {/* Text Content */}
      <div className="relative z-20">
        <div className="flex items-center mb-3">
          <Icon className="w-6 h-6 text-white/90 mr-2" />
        </div>
        <h3 className="text-xl font-bold mb-2 leading-tight">{title}</h3>
        <p className="text-white/90 font-medium mb-3 text-sm">{subtitle}</p>
        <p className="text-white/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const SecondComponent = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <div className=" mb-12">
        <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">
          Your SkillShikshya Journey
        </p>
        <h2 className="text-4xl font-bold text-gray-800 mt-3 leading-tight">
          Step In. <span className="text-green-500">Skill Up.</span>{" "}
          <span className="text-blue-500">Stand Out.</span>
          <Rocket className="inline-block ml-2 text-orange-500 w-8 h-8 animate-bounce" />
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {journeySteps.map((step, idx) => (
          <JourneyCard
            key={idx}
            {...step}
            imagePosition={idx % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
};

export default SecondComponent;
