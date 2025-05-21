import {
  Twitter,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      {/* Newsletter Signup */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-blue-50 p-6 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-1">
              Stay up to date with Zordie
            </h3>
            <p className="text-gray-600 text-sm">
              Get the latest news and updates on AI-powered hiring
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="md:col-span-2">
          <h4 className="text-2xl font-bold text-blue-900 mb-2">
            Zordie<span className="text-purple-500">.</span>
          </h4>
          <p className="text-gray-600 text-sm mb-4">
            AI-powered verified hiring platform that eliminates fake resumes and brings trust to the hiring process. Our mission is to connect the right talent with the right opportunities.
          </p>
          <div className="flex gap-3 mt-4">
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Github size={18} />} />
            <SocialIcon icon={<Mail size={18} />} />
          </div>
        </div>

        {/* Links Columns */}
        <div>
          <h5 className="text-sm font-semibold text-gray-800 mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-800 mb-3">For Companies</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">AI Screening</a></li>
            <li><a href="#">Verification</a></li>
            <li><a href="#">Enterprise Solutions</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-800 mb-3">For Job Seekers</h5>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Find Jobs</a></li>
            <li><a href="#">Verify Profile</a></li>
            <li><a href="#">Practice Interviews</a></li>
            <li><a href="#">Resources</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-100 py-6 px-6 md:px-10 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© 2025 Zordie. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms of Service</a>
          <a href="#" className="hover:text-blue-600">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

// Reusable Social Icon Button
function SocialIcon({ icon }) {
  return (
    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 cursor-pointer transition">
      {icon}
    </div>
  );
}
