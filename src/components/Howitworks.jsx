import { motion } from "framer-motion";
import { Badge } from "../ui/badge";

export default function ScreeningFlowSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Light background grid */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
        >
          <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            AI-Powered Candidate Screening Flow
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-lg">
            Our intelligent system verifies candidate information across multiple dimensions to ensure you only interview qualified talent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />

          {[
            {
              step: "01",
              title: "Document Analysis",
              description: "Advanced AI scans and verifies resume content against multiple data sources.",
            },
            {
              step: "02",
              title: "Credential Verification",
              description: "Authentication of certifications, degrees, and professional qualifications.",
            },
            {
              step: "03",
              title: "Skill Assessment",
              description: "Objective validation of technical and soft skills through adaptive testing.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                {step.step}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
