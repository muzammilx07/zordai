import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const pricingPlans = [
  {
    name: "Free",
    price: "₹0",
    description: "Try Zordie for free",
    features: [
      "2 job posts",
      "Basic AI screening",
      "10 verified applications",
      "Candidate assessments",
      "Prime AI assistance",
      "Advanced analytics",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth Plan",
    price: "₹9,999",
    description: "For growing teams",
    features: [
      "Allows up to 25 Job Postings monthly",
      "Includes 5,000 AI Credits for extensive candidate evaluations",
      "Advanced analytics dashboard with customized reporting",
      "Priority email and chat support",
    ],
    cta: "Choose Growth",
    popular: true,
  },
  {
    name: "Starter Plan",
    price: "₹4,999",
    description: "For small startups",
    features: [
      "Up to 10 Job Postings per month",
      "Includes 1,000 AI Credits for candidate assessments and analytics",
      "Access to basic dashboard and reporting features",
      "Email support for quick assistance",
    ],
    cta: "Choose Starter",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored for large organizations",
    features: [
      "Unlimited job posts",
      "Custom integrations",
      "Dedicated account manager",
      "Custom AI training",
      "Pay as You Go model",
      "Tailored pricing",
      "Phone & priority support",
    ],
    cta: "Contact Sales",
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className="rounded-full px-4 py-1.5 text-lg font-medium bg-white" variant="secondary">
              Pricing
            </Badge>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="max-w-[700px] text-muted-foreground mt-3 md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="rounded p-1">
                <TabsTrigger value="monthly" className="rounded-full px-6">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Annually (Save 20%)
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Pricing Cards */}
            {["monthly", "annually"].map((tab, tabIndex) => (
              <TabsContent value={tab} key={tabIndex}>
                <div className="grid gap-5 lg:grid-cols-4 lg:gap-5">
                  {pricingPlans.map((plan, i) => (
                    <motion.div
  key={i}
  className={`w-full h-full transition-transform ${
    plan.popular ? "scale-[1.09]" : ""
  }`}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={i}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 250, damping: 20 }}
>

                      <Card
                        className={`relative h-full transition-shadow duration-300 ${
                          plan.popular
                            ? "border-orange-500 shadow-xl"
                            : "border-border/40 shadow-md"
                        } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg z-10">
                            Most Popular
                          </div>
                        )}
                        <CardContent className="pt-6 px-6 pb-6 flex flex-col h-full">
                          <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                          <div className="flex items-baseline mt-2">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground ml-1">/month</span>
                          </div>
                          <p className="text-muted-foreground mt-2">{plan.description}</p>

                          <ul className="space-y-3 my-6 flex-grow">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center">
                                <Check className="mr-2 size-4 text-orange-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <Link to="/signup" className="w-full mt-auto">
                            <div
                              className={`text-center py-2 px-4 font-medium transition-all duration-300 rounded-full cursor-pointer ${
                                plan.popular
                                  ? "bg-orange-500 text-white hover:bg-orange-600"
                                  : "bg-white text-black border hover:bg-neutral-100"
                              }`}
                            >
                              {plan.cta}
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
