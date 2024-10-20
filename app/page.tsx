import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Car, Cloud, MapPin, Zap } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-2xl font-bold text-purple-600">DynamicRide</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact-us">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Dynamic Ride Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Get fair and transparent ride prices based on real-time conditions. Our advanced AI calculates the
                  perfect fare for your journey.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#calculate">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <MapPin className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-bold">Location-based</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our system considers your exact pickup and drop-off locations for precise pricing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Car className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Driver Availability</h3>
                <p className="text-sm text-gray-500 text-center">
                  Prices adjust based on the current supply of drivers in your area.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Cloud className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Weather Conditions</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our AI takes into account current weather to ensure fair pricing during challenging conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center" id="calculate">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Calculate Your Fare
                  </h2>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                    Get an instant estimate for your ride using our advanced pricing algorithm.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <div className="grid gap-2">
                    <Label className="text-white" htmlFor="pickup">
                      Pickup Location
                    </Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-zinc-200"
                      id="pickup"
                      placeholder="Enter pickup address"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-white" htmlFor="dropoff">
                      Drop-off Location
                    </Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-zinc-200"
                      id="dropoff"
                      placeholder="Enter drop-off address"
                    />
                  </div>
                  <Button className="w-full bg-white text-purple-600 hover:bg-zinc-100">Calculate Fare</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center" id="contact-us">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Have questions about our dynamic pricing? Want to partner with us? We'd love to hear from you!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <Input className="w-full" placeholder="Your Name" type="text" />
                  <Input className="w-full" placeholder="Your Email" type="email" />
                  <Textarea className="w-full" placeholder="Your Message" />
                  <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">Send Message</Button>
                </form>
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