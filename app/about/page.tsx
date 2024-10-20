import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import AboutImage1 from "@/public/about1.jpg";
import AboutImage2 from "@/public/about2.jpg";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Zap className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-2xl font-bold text-purple-600">DynamicRide</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact-us">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About DynamicRide
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Revolutionizing ride pricing with cutting-edge technology and fairness at our core.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="text-gray-600 md:text-xl">
                  At DynamicRide, we're on a mission to create a fair and transparent ride pricing system that benefits
                  both riders and drivers. We believe in harnessing the power of technology to solve complex problems and
                  improve urban mobility.
                </p>
                <p className="text-gray-600 md:text-xl">
                  Our dynamic pricing algorithm takes into account various factors such as traffic conditions, weather,
                  driver availability, and historical data to provide the most accurate and fair pricing for every ride.
                </p>
              </div>
              <Image
                src={AboutImage1}
                width={600}
                height={400}
                alt="Team working on algorithms"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white/10 backdrop-blur-lg">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-bold text-white">Fairness</h3>
                  <p className="text-sm text-zinc-100 text-center">
                    We ensure fair pricing for both riders and drivers, creating a balanced ecosystem.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <TrendingUp className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-bold text-white">Innovation</h3>
                  <p className="text-sm text-zinc-100 text-center">
                    We continuously improve our algorithms to provide the most accurate pricing.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Shield className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-bold text-white">Transparency</h3>
                  <p className="text-sm text-zinc-100 text-center">
                    We believe in clear communication about how our pricing works.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-lg">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Zap className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-bold text-white">Efficiency</h3>
                  <p className="text-sm text-zinc-100 text-center">
                    Our system optimizes for the most efficient use of resources and time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-center">
              <Image
                src={AboutImage2}
                width={600}
                height={400}
                alt="AI and machine learning concept"
                className="rounded-lg object-cover order-2 lg:order-1"
              />
              <div className="space-y-4 order-1 lg:order-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Technology</h2>
                <p className="text-gray-600 md:text-xl">
                  At the heart of DynamicRide is our advanced machine learning algorithm. This AI-powered system
                  processes vast amounts of data in real-time to determine the optimal price for each ride.
                </p>
                <p className="text-gray-600 md:text-xl">
                  Our technology considers factors such as:
                </p>
                <ul className="list-disc list-inside text-gray-600 md:text-xl space-y-2">
                  <li>Current traffic conditions</li>
                  <li>Weather patterns</li>
                  <li>Driver availability</li>
                  <li>Historical ride data</li>
                  <li>Special events and local demand</li>
                </ul>
                <p className="text-gray-600 md:text-xl">
                  This comprehensive approach ensures that our pricing is always fair, transparent, and reflective of
                  real-world conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the DynamicRide Revolution</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Be part of the future of ride pricing. Whether you're a rider looking for fair fares or a driver
                  seeking optimal earnings, DynamicRide has you covered.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 flex flex-col gap-1">
                <Link href="/#calculate">
                  <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button className="w-full" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 DynamicRide Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}