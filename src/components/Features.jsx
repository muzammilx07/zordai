import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Check } from "lucide-react";

function Feature({ title, description, features }) {
  return (
    <Card className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
  <CardContent className="p-8">
    <h3 className="text-2xl font-bold my-4 text-gray-900">{title}</h3>
    <p className="text-gray-600  leading-relaxed">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 text-sm text-gray-700 hover:text-green-700 transition-colors duration-200"
        >
          <Check className="w-5 h-5 mt-1 text-green-600 flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

  );
}

const companiesFeatures = [
  {
    title: "AI Resume Verification",
    description: "Our advanced algorithms analyze candidate resumes to detect inconsistencies and verify claimed skills.",
    features: [
      "99.4% accuracy rate",
      "Multi-source verification",
      "Fake resume detection",
    ],
  },
  {
    title: "Intelligent Matching",
    description: "Matching verified candidates with your specific job requirements for optimal fit.",
    features: [
      "Skill-based matching",
      "Cultural fit analysis",
      "Automated ranking",
    ],
  },
  {
    title: "Streamlined Interviews",
    description: "Schedule and conduct AI-assisted interviews in one unified platform.",
    features: [
      "Calendar integration",
      "Video interviews",
      "AI feedback analysis",
    ],
  },
  {
    title: "Data-Driven Decisions",
    description: "Make confident hiring choices based on verified data and predictive analytics.",
    features: [
      "Performance prediction",
      "Comparison tools",
      "Risk assessment",
    ],
  },
];

const jobSeekersFeatures = [
  {
    title: "Create Your Profile",
    description: "Build a comprehensive profile showcasing your skills, experience, and achievements.",
    features: [
      "Quick profile builder",
      "AI optimization tips",
      "Portfolio integration",
    ],
  },
  {
    title: "Verify Your Credentials",
    description: "Get your skills and experience authenticated to stand out from the competition.",
    features: [
      "GitHub integration",
      "Certificate verification",
      "Experience validation",
    ],
  },
  {
    title: "AI Interview Prep",
    description: "Practice with our AI interviewer to prepare for your real interviews.",
    features: [
      "Industry-specific questions",
      "Performance feedback",
      "Improvement suggestions",
    ],
  },
  {
    title: "Get Matched",
    description: "Our AI connects you with companies looking for your verified skill set.",
    features: [
      "Personalized matches",
      "Direct introductions",
      "Feedback loop",
    ],
  },
];

export default function Features() {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white " />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 max-w-3xl mx-auto"
        >
          <Badge className="rounded-full px-4 py-1.5 text-lg font-medium bg-white" variant="secondary">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Choose the plan that's right for your goal. All plans include verified features.
          </p>
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="companies" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded p-1">
                <TabsTrigger value="companies" className="rounded-full px-6">
                  For Companies
                </TabsTrigger>
                <TabsTrigger value="jobSeekers" className="rounded-full px-6">
                  For Job Seekers
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Companies Tab */}
            <TabsContent value="companies">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {companiesFeatures.map((card, i) => (
                  <Feature key={i} {...card} />
                ))}
              </div>
            </TabsContent>

            {/* Job Seekers Tab */}
            <TabsContent value="jobSeekers">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                {jobSeekersFeatures.map((card, i) => (
                  <Feature key={i} {...card} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
