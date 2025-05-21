import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Github } from "lucide-react"
import { Label } from "../ui/label"
import { Link } from "react-router-dom"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-white max-w-7xl mx-auto    ">
      {/* Left Section with 3D Background */}
      <div className="relative hidden w-1/2 p-8 lg:block">
        <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-white">
          {/* 3D Background Elements */}
          <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-200 opacity-70"></div>
          <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-300 opacity-60"></div>
          <div className="absolute left-40 top-40 h-60 w-60 rounded-full bg-blue-400 opacity-50"></div>

          {/* Floating 3D Shapes */}
          <div
            className="absolute bottom-40 left-20 h-20 w-20 animate-bounce rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-xl"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute right-32 top-32 h-16 w-16 animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl"
            style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-60 right-60 h-24 w-24 animate-bounce rounded-lg bg-gradient-to-r from-blue-300 to-blue-500 shadow-xl transform rotate-45"
            style={{ animationDuration: "4s" }}
          ></div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-blue-600">Flowers&Saints</h1>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-800">Get Started with Us</h2>
            <p className="mb-12 text-lg text-gray-600">Complete these easy steps to register your account.</p>

            <div className="w-full max-w-sm space-y-4">
              <div className="rounded-lg bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    1
                  </span>
                  <span className="text-lg text-gray-800">Sign up your account</span>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                    2
                  </span>
                  <span className="text-lg text-gray-600">Set up your workspace</span>
                </div>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                    3
                  </span>
                  <span className="text-lg text-gray-600">Set up your profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full items-center justify-center bg-white p-6 lg:w-1/2">
        <div className="w-full max-w-md rounded-[40px] p-12 shadow-lg">
          <div className="mx-auto max-w-sm">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">Sign Up Account</h2>
            <p className="mb-8 text-gray-500">Enter your personal data to create your account.</p>

            <div className="mb-8 grid gap-4">
              <Button variant="outline" className="h-12 border-gray-200 hover:bg-gray-50">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </Button>
              <Button variant="outline" className="h-12 border-gray-200 hover:bg-gray-50">
                <Github className="mr-2 h-5 w-5" />
                Github
              </Button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  className="h-12 border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  className="h-12 border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="example@flowersandsaints.com"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  className="h-12 border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Create a strong password"
                  type="password"
                />
                <p className="text-sm text-gray-500">Must be at least 8 characters.</p>
              </div>

              <Button className="h-12 w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                Sign Up
              </Button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
