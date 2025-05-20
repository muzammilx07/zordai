import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  CheckCircle,
  ShieldCheck,
  Video,
  BarChart2,
  Zap,
  UserCheck,
  Sparkles,
  Brain,
  MessageCircle,
  FileCheck,
} from "lucide-react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../ui/tabs";

const featuresCompanies = [
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: "AI-Powered Screening",
    description: "Scans and ranks resumes based on job fit and required skills.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Credential Verification",
    description: "Verifies skills, projects, and credentials from trusted sources.",
  },
  {
    icon: <Video className="w-6 h-6 text-blue-600" />,
    title: "Automated Video Interviews",
    description: "Analyze tone and responses in real-time with AI insights.",
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
    title: "Comprehensive Analytics",
    description: "Get scorecards, rankings, and insights for better hiring.",
  },
];

const featuresJobSeekers = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: "Skill Verification",
    description: "Link GitHub/LinkedIn and upload projects to earn badges.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "AI-Optimized Profile",
    description: "Real-time feedback to maximize visibility and match rate.",
  },
  {
    icon: <Video className="w-6 h-6 text-blue-600" />,
    title: "Interview Practice",
    description: "Practice with AI feedback tailored to your job goals.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Stand Out from the Crowd",
    description: "Get hired for verified strengths and real skills, not just resumes.",
  },
];

export default function AIHiringTabs() {
  const [activeTab, setActiveTab] = useState("companies");

  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-2">
          AI-Powered Hiring Platform
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Tailored solutions for companies and job seekers
        </p>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100 p-1 rounded-full shadow-sm flex gap-2">
              <TabsTrigger
                value="companies"
                className="px-6 py-2 rounded-full data-[state=active]:bg-blue-600  transition-all"
              >
                For Companies
              </TabsTrigger>
              <TabsTrigger
                value="jobseekers"
                className="px-6 py-2 rounded-full data-[state=active]:bg-blue-600  transition-all"
              >
                For Job Seekers
              </TabsTrigger>
            </TabsList>
          </div>

          {/* COMPANIES */}
          <TabsContent value="companies">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Features */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Find verified talent faster with our AI-powered screening
                </h3>
                <p className="text-gray-600 mb-6">
                  Prime HR handles everything from resume scanning to skills verification
                  — so you can hire smarter and faster.
                </p>
                <div className="space-y-5">
                  {featuresCompanies.map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="text-base font-semibold text-black">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6">
                  Learn More for Companies
                </Button>
              </div>

              {/* Right Box */}
              <div className="bg-white border rounded-2xl p-8 shadow-lg relative">
                <Badge className="absolute top-0 right-0 mt-2 mr-4 bg-blue-600 text-white text-xs">
                  Prime HR AI
                </Badge>
                <h4 className="text-lg font-semibold text-black mb-4">
                  Candidate Screening Process
                </h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li><strong>1. Resume Analysis:</strong> AI parses resumes and extracts skills.</li>
                  <li><strong>2. Credential Verification:</strong> Connected profiles checked for fraud.</li>
                  <li><strong>3. Automated Interviews:</strong> Real-time video scoring.</li>
                  <li><strong>4. Candidate Ranking:</strong> Ranked with verified performance.</li>
                  <li><strong>5. Hiring Decision:</strong> Final pick based on AI recommendation.</li>
                </ul>
                <p className="mt-6 text-blue-700 font-semibold text-lg">
                  Average time saved <br />
                  <span className="text-3xl font-bold">23 hours/week</span>
                </p>
                <Button variant="outline" className="mt-6 border-blue-600 text-blue-600 hover:bg-blue-50">
                  View Demo
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* JOB SEEKERS */}
          <TabsContent value="jobseekers">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Features */}
              <div>
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Showcase your verified skills to stand out
                </h3>
                <p className="text-gray-600 mb-6">
                  Let recruiters see the real you — verified, prepared, and AI-matched to the best jobs.
                </p>
                <div className="space-y-5">
                  {featuresJobSeekers.map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="text-base font-semibold text-black">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6">
                  Learn More for Job Seekers
                </Button>
              </div>

              {/* Right Box */}
              <div className="bg-white border rounded-2xl p-8 shadow-lg relative">
                <Badge className="absolute top-0 right-0 mt-2 mr-4 bg-purple-600 text-white text-xs">
                  Verified Profile
                </Badge>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://i.pravatar.cc/100?img=52"
                    alt="User"
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-black">David Chen</h4>
                    <p className="text-sm text-gray-500">Full Stack Developer</p>
                    <span className="text-green-600 text-xs font-medium">✔ Verified Skills</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <ProgressBar label="Technical Skills" value={92} />
                  <ProgressBar label="Project Verification" value={100} />
                  <ProgressBar label="Interview Readiness" value={85} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6 text-center text-sm">
                  <div>
                    <p className="text-blue-600 font-medium">GitHub</p>
                    <p className="text-gray-500">Verified</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium">LinkedIn</p>
                    <p className="text-gray-500">Verified</p>
                  </div>
                  <div>
                    <p className="text-blue-600 font-medium">Interviews</p>
                    <p className="text-gray-500">5 Passed</p>
                  </div>
                </div>
                <Button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white">
                  Get Your Profile Verified
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

// Reusable progress bar
function ProgressBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className="text-gray-600 font-semibold">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
