import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, CloudRain, Wind, MapPin, Users, Star, Building, TreePine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import FeaturesImage1 from "@/public/features1.jpg";

export default function FeaturesPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact-us">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Advanced Dynamic Ride Pricing Model
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our sophisticated algorithm considers multiple factors to provide fair and accurate pricing for every ride.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Factors in Our Pricing Model
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <CloudRain className="mr-2 h-6 w-6" /> Weather Conditions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our model factors in various weather elements including rain, cloud cover, wind speed, and temperature to adjust pricing accordingly.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500 to-green-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="mr-2 h-6 w-6" /> Driver Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Real-time data on driver availability in the area is used to balance supply and demand, ensuring fair pricing during peak hours.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-yellow-500 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MapPin className="mr-2 h-6 w-6" /> Location Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our algorithm distinguishes between urban, suburban, and rural areas, adjusting prices based on the unique characteristics of each location type.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comprehensive Analysis</h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our advanced machine learning algorithms analyze a wide range of factors to provide the most accurate and fair pricing for every ride.
                </p>
                <ul className="grid gap-4 md:grid-cols-2">
                  <li className="flex items-center space-x-2">
                    <Wind className="h-5 w-5 text-purple-600" />
                    <span>Wind speed impact</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-purple-600" />
                    <span>Urban density factors</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <TreePine className="h-5 w-5 text-purple-600" />
                    <span>Rural route analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-purple-600" />
                    <span>Customer loyalty rewards</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src={FeaturesImage1}
                  width={600}
                  height={400}
                  alt="Dynamic pricing model visualization"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Detailed Factor Breakdown
            </h2>
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <CloudRain className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Comprehensive Weather Analysis</h3>
                    <p className="text-gray-600">Incorporates rainfall intensity, cloud cover percentage, wind speed, and temperature to adjust pricing for weather-related challenges.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Dynamic Driver Allocation</h3>
                    <p className="text-gray-600">Analyzes real-time driver availability and demand patterns to optimize pricing and ensure efficient service coverage.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Location Category Insights</h3>
                    <p className="text-gray-600">Classifies areas as urban, suburban, or rural, considering factors like population density, traffic patterns, and typical trip distances.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Star className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Customer-Centric Pricing</h3>
                    <p className="text-gray-600">Factors in customer loyalty, ratings, and frequency of use to provide personalized pricing and rewards for regular users.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Real-Time Adjustments</h3>
                    <p className="text-gray-600">Continuously updates pricing based on current conditions, ensuring accuracy and fairness at all times.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Building className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Urban Complexity Handling</h3>
                    <p className="text-gray-600">Accounts for urban-specific challenges like traffic congestion, one-way streets, and limited parking to provide accurate urban pricing.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <TreePine className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Rural Route Optimization</h3>
                    <p className="text-gray-600">Considers longer distances, road conditions, and limited driver availability typical in rural areas for fair rural pricing.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Wind className="h-8 w-8 text-purple-600" />
                  <div>
                    <h3 className="text-xl font-bold">Environmental Factor Integration</h3>
                    <p className="text-gray-600">Incorporates environmental conditions like wind speed and direction to account for their impact on vehicle performance and travel time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Experience Precision in Ride Pricing
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our sophisticated model ensures fair and accurate pricing for every ride, considering all relevant factors for an optimal experience.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 flex flex-col gap-1">
                <Link href="/about">
                    <Button className="w-full bg-white text-purple-600 hover:bg-zinc-100">Learn More</Button>
                </Link>
                <Link href="/#contact-us">
                    <Button className="w-full bg-purple-700 text-white hover:bg-purple-800" variant="outline">
                        Contact Us
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