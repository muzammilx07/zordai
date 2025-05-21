import { cn } from "@/lib/utils";
import {
  ShieldCheck,
  Bot,
  Gauge,
  ClipboardCheck,
  Video,
  FileText,
} from "lucide-react";

export function PlatformFeatures() {
  const features = [
    {
      title: "AI Resume Verification",
      description:
        "Detect fake resumes, inflated skills claims, and false experience with 99.4% accuracy using our advanced AI verification system.",
      icon: <ShieldCheck size={28} />,
    },
    {
      title: "Prime AI Assistant",
      description:
        "An intelligent hiring companion that handles screening, scheduling, and candidate communication automatically, saving you hours of work.",
      icon: <Bot size={28} />,
    },
    {
      title: "Smart Candidate Ranking",
      description:
        "Automatically rank and score candidates based on verified skills, experience, and cultural fit specific to your job requirements.",
      icon: <Gauge size={28} />,
    },
    {
      title: "Project Authenticity Check",
      description:
        "Verify the authenticity of candidate portfolios and projects to ensure you're hiring genuine talent with original work.",
      icon: <ClipboardCheck size={28} />,
    },
    {
      title: "AI Video Interviews",
      description:
        "Conduct adaptive AI-powered video interviews that adjust questions based on candidate responses to thoroughly assess skills.",
      icon: <Video size={28} />,
    },
    {
      title: "Intelligent Job Posts",
      description:
        "Generate comprehensive job descriptions instantly with our AI-powered job post creator, optimized for attracting quality candidates.",
      icon: <FileText size={28} />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-neutral-900 mb-2">
        AI-Powered Platform Features
      </h2>
      <p className="text-neutral-600 mb-12">
        Revolutionary tools built for modern recruitment challenges
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200",
        (index === 0 || index === 3) && "lg:border-l border-neutral-200",
        index < 3 && "lg:border-b border-neutral-200"
      )}
    >
      <div
        className={cn(
          "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none",
          index < 3
            ? "bg-gradient-to-t from-neutral-100 to-transparent"
            : "bg-gradient-to-b from-neutral-100 to-transparent"
        )}
      />
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
 export default PlatformFeatures;