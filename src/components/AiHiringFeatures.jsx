import { motion } from "framer-motion";
import { Zap,Clock, Code2, CheckCircle, BadgeCheck, Brain, ShieldCheck } from "lucide-react";

const featureItems1 = [
  {
    icon: <Zap className="text-blue-500" size={20} />,
    title: "Intelligent Conversations",
    description: "Chat with candidates and teams using natural language AI.",
  },
  {
    icon: <Clock className="text-blue-500" size={20} />,
    title: "Scheduling & Coordination",
    description: "Automated interview scheduling, reminders, and follow-ups.",
  },
  {
    icon: <Brain className="text-blue-500" size={20} />,
    title: "Personalized Insights",
    description: "AI-generated insights on candidate strengths and weaknesses.",
  },
  {
    icon: <CheckCircle className="text-blue-500" size={20} />,
    title: "Decision Support",
    description: "Data-driven hiring decisions based on verified information.",
  },
];

const featureItems2 = [
  {
    icon: <ShieldCheck className="text-blue-500" size={20} />,
    title: "Resume Fact Checking",
    description: "AI validates resume claims using public data.",
  },
  {
    icon: <Code2 className="text-blue-500" size={20} />,
    title: "Code & Project Analysis",
    description: "Verifies authorship of code samples and projects.",
  },
  {
    icon: <Brain className="text-blue-500" size={20} />,
    title: "Neural Skill Assessment",
    description: "Adaptive challenges verify claimed technical skills.",
  },
  {
    icon: <BadgeCheck className="text-blue-500" size={20} />,
    title: "Credential Verification",
    description: "Confirms academic degrees, certifications, and credentials.",
  },
];

const wobbleAnimation = {
  animate: {
    y: [0, -8, 0, 8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function AIHiringShowcase() {
  return (
    <section className="py-16 bg-white text-gray-800 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6  ">

        {/* Assistant Experience */}
        <motion.div
          className="relative rounded-2xl shadow-xl overflow-hidden bg-blue-900 text-white p-8"
          {...wobbleAnimation}
        >
          <img
            src="https://images.unsplash.com/photo-1664575197229-3bbebc281874?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AI Assistant"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center space-x-3">
              <Zap className="text-white" />
              <span className="text-sm font-semibold bg-blue-700 px-2 py-1 rounded-md">73% Faster Hiring</span>
            </div>
            <h3 className="text-2xl font-bold">Your Intelligent Hiring Companion</h3>
            <p>
              Prime AI revolutionizes recruitment by automating screening, scheduling, insights, and communication.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {featureItems1.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  {item.icon}
                  <div>
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-blue-100">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fake Resume Detection */}
        <motion.div
          className="relative rounded-2xl shadow-xl overflow-hidden bg-gray-100 text-gray-900 p-8"
          {...wobbleAnimation}
        >
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="Code Analysis"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 space-y-6">
            <span className="inline-block text-sm font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
              99.4% Accuracy
            </span>
            <h3 className="text-2xl font-bold">Detect Fake Resumes with 99.4% Accuracy</h3>
            <p>
              AI scans resumes, projects, and credentials to detect inconsistencies and false claims with unmatched precision.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {featureItems2.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  {item.icon}
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
