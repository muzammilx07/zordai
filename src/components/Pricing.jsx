import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Container for content - max width 7xl and centered */}
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header & description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12 max-w-3xl mx-auto"
        >
          <Badge
            className="rounded-full px-4 py-1.5 text-lg font-medium bg-white"
            variant="secondary"
          >
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Choose the plan that's right for your business. All plans include a
            14-day free trial.
          </p>
        </motion.div>

        {/* Tabs wrapper */}
        <div className="mx-auto max-w-6xl">
          <Tabs defaultValue="monthly" className="w-full">
            {/* Tabs list */}
            <div className="flex justify-center mb-8">
              <TabsList className="rounded p-1 ">
                <TabsTrigger value="monthly" className="rounded-full px-6">
                  Monthly
                </TabsTrigger>
                <TabsTrigger value="annually" className="rounded-full px-6">
                  Annually (Save 20%)
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Monthly Plans */}
            <TabsContent value="monthly">
              <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
                {[
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
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${
                        plan.popular
                          ? "border-blue-500 shadow-lg"
                          : "border-border/40 shadow-md"
                      } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="pt-6 px-6 pb-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                        <div className="flex items-baseline mt-4">
                          <span className="text-4xl font-bold">
                            {plan.price}
                          </span>
                          <span className="text-muted-foreground ml-1">
                            /month
                          </span>
                        </div>
                        <p className="text-muted-foreground mt-2">
                          {plan.description}
                        </p>
                        <ul className="space-y-3 my-6 flex-grow">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 size-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to="/signup" className="w-full mt-auto">
                          <div
                            className={`text-center py-2 px-4 font-medium transition-colors rounded-full cursor-pointer ${
                              plan.popular
                                ? "bg-blue-600 text-white hover:bg-blue-700"
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

            {/* Annual Plans */}
            <TabsContent value="annually"> 
              <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
                {[
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
    price: "₹99,999",
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
    price: "₹49,999",
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
]
.map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${
                        plan.popular
                          ? "border-primary shadow-lg"
                          : "border-border/40 shadow-md"
                      } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <Card
                        className={`relative overflow-hidden h-full ${
                          plan.popular
                            ? "border-blue-500 shadow-lg"
                            : "border-border/40 shadow-md"
                        } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                            Most Popular
                          </div>
                        )}
                        <CardContent className="pt-6 px-6 pb-6 flex flex-col h-full">
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <div className="flex items-baseline mt-4">
                            <span className="text-4xl font-bold">
                              {plan.price}
                            </span>
                            <span className="text-muted-foreground ml-1">
                              /month
                            </span>
                          </div>
                          <p className="text-muted-foreground mt-2">
                            {plan.description}
                          </p>
                          <ul className="space-y-3 my-6 flex-grow">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center">
                                <Check className="mr-2 size-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Link to="/signup" className="w-full mt-auto">
                            <div
                              className={`text-center py-2 px-4 font-medium transition-colors rounded-full cursor-pointer ${
                                plan.popular
                                  ? "bg-blue-600 text-white hover:bg-blue-700"
                                  : "bg-white text-black border hover:bg-neutral-100"
                              }`}
                            >
                              {plan.cta}
                            </div>
                          </Link>
                        </CardContent>
                      </Card>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
