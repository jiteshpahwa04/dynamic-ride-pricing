"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Car, Cloud, MapPin, Zap } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const API_KEY = process.env.NEXT_PUBLIC_LOCATIONQ_API_KEY;

  interface Prediction {
    prediction: number;
  }

  interface Location {
    lat: string;
    lon: string;
  }

  interface Place {
    place_id: string; // Unique identifier for the place
    display_name: string; // Full name of the location, including address
    lat: string; // Latitude of the location
    lon: string; // Longitude of the location
    type: string; // Type of location (e.g., city, road, house, etc.)
    importance: number; // Relevance or importance score
    boundingbox: [string, string, string, string]; // Coordinates defining the bounding box for the location

    // Additional optional fields for detailed address breakdown
    address?: {
      city?: string; // City name
      town?: string; // Town name, if applicable
      village?: string; // Village name, if applicable
      county?: string; // County name
      state?: string; // State or province
      country?: string; // Country name
      country_code?: string; // Country code
      postcode?: string; // Postal code
      road?: string; // Road or street name
      house_number?: string; // House or building number
      neighbourhood?: string; // Neighborhood name
      suburb?: string; // Suburb name
    };
  }

  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null);
  const [distance, setDistance] = useState(0); // This might be calculated based on pickup and dropoff
  const [cabType, setCabType] = useState("");
  const [rideType, setRideType] = useState("");

  const [pickupSuggestions, setPickupSuggestions] = useState<Place[]>([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState<Place[]>([]);

  interface AutocompleteResponse {
    place_id: string;
    display_name: string;
    lat: string;
    lon: string;
  }

  const handlePickupChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPickup(input);
    if (input.length > 2) {
      try {
        const response = await fetch(
          `https://us1.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${input}`
        );
        const data: AutocompleteResponse[] = await response.json();
        if (data == null) return;
        const places: Place[] = data.map((item) => ({
          place_id: item.place_id,
          display_name: item.display_name,
          lat: item.lat,
          lon: item.lon,
          type: "",
          importance: 0,
          boundingbox: ["", "", "", ""],
        }));
        setPickupSuggestions(places);
      } catch (e) {
        console.error(e);
      }
    } else {
      setPickupSuggestions([]);
    }
  };

  const handleDropoffChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = e.target.value;
    setDropoff(input);
    if (input.length > 2) {
      try {
        const response = await fetch(
          `https://us1.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${input}`
        );
        const data: AutocompleteResponse[] = await response.json();
        const places: Place[] = data.map((item) => ({
          place_id: item.place_id,
          display_name: item.display_name,
          lat: item.lat,
          lon: item.lon,
          type: "",
          importance: 0,
          boundingbox: ["", "", "", ""],
        }));
        setDropoffSuggestions(places);
      } catch (e) {
        console.error(e);
      }
    } else {
      setPickupSuggestions([]);
    }
  };

  interface SelectEvent {
    target: {
      value: string;
    };
  }

  const handlePickupSelect = (e: SelectEvent) => {
    const selectedLocation = pickupSuggestions.find(
      (place) => place.place_id === e.target.value
    );
    if (selectedLocation) {
      const { lat, lon } = selectedLocation;
      const location = { lat, lon };
      setPickup(selectedLocation.display_name);
      setPickupLocation(location);
      setPickupSuggestions([]);
    }
  };

  interface SelectEvent {
    target: {
      value: string;
    };
  }

  const handleDropoffSelect = (e: SelectEvent) => {
    const selectedLocation = dropoffSuggestions.find(
      (place) => place.place_id === e.target.value
    );
    if (selectedLocation) {
      const { lat, lon } = selectedLocation;
      const location = { lat, lon };
      setDropoff(selectedLocation.display_name);
      setDropoffLocation(location);
      setDropoffSuggestions([]);
    }
  };

  interface RideData {
    distance: number;
    name_Black: boolean;
    name_BlackSUV: boolean;
    name_Lux: boolean;
    name_LuxBlack: boolean;
    name_LuxBlackXL: boolean;
    name_Lyft: boolean;
    name_LyftXL: boolean;
    name_Shared: boolean;
    name_UberPool: boolean;
    name_UberX: boolean;
    name_UberXL: boolean;
    name_WAV: boolean;
    cab_type_Lyft: boolean;
    cab_type_Uber: boolean;
  }

  const fetchRoute = async () => {
    try {

      const url = `https://us1.locationiq.com/v1/directions/driving/${pickupLocation?.lon}%2C${pickupLocation?.lat}%3B${dropoffLocation?.lon}%2C${dropoffLocation?.lat}?key=${API_KEY}`;
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.code === "Ok" && result.routes && result.routes[0]) {
        setDistance(result.routes[0].distance/1600);
      }
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cabType === "" || rideType === "") {
      alert("Please select cab type and ride type");
      return;
    }

    const data: RideData = {
      distance: distance,
      name_Black: rideType === "luxury" && cabType === "uber",
      name_BlackSUV: rideType === "luxury-suv" && cabType === "uber",
      name_Lux: rideType === "Luxury" && cabType === "lyft",
      name_LuxBlack: rideType === "super-luxury" && cabType === "lyft",
      name_LuxBlackXL: rideType === "luxury-suv" && cabType === "lyft",
      name_Lyft: rideType === "normal" && cabType === "lyft",
      name_LyftXL: rideType === "suv" && cabType === "lyft",
      name_Shared: rideType === "shared" && cabType === "lyft",
      name_UberPool: rideType === "uber-pool" && cabType === "uber",
      name_UberX: rideType === "normal" && cabType === "uber",
      name_UberXL: rideType === "suv" && cabType === "uber",
      name_WAV: rideType === "WAV" && cabType === "uber",
      cab_type_Lyft: cabType === "lyft",
      cab_type_Uber: cabType === "uber",
    };

    // wait for distance to be calculated
    await fetchRoute();

    if(distance==0){
      console.log("Returning from here as distance is 0");
      return;
    }

    try {
      const response = await fetch(
        "https://dynamic-ride-pricing-backend.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setPrediction(result);
      // Handle the result (e.g., show it to the user, etc.)
    } catch (error) {
      console.error("Error calling the API:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-purple-600" />
          <span className="ml-2 text-2xl font-bold text-purple-600">
            DynamicRide
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact-us"
          >
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
                  Get fair and transparent ride prices based on real-time
                  conditions. Our advanced AI calculates the perfect fare for
                  your journey.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#calculate">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Get Started
                  </Button>
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <MapPin className="h-12 w-12 text-purple-600" />
                <h3 className="text-xl font-bold">Location-based</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our system considers your exact pickup and drop-off locations
                  for precise pricing.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Car className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold">Driver Availability</h3>
                <p className="text-sm text-gray-500 text-center">
                  Prices adjust based on the current supply of drivers in your
                  area.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Cloud className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Weather Conditions</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our AI takes into account current weather to ensure fair
                  pricing during challenging conditions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-blue-500 flex justify-center"
          id="calculate"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Calculate Your Fare
                  </h2>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                    Get an instant estimate for your ride using our advanced
                    pricing algorithm.
                  </p>
                </div>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <Label className="text-white" htmlFor="pickup">
                      Pickup Location
                    </Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-zinc-200"
                      id="pickup"
                      placeholder="Enter pickup address"
                      value={pickup}
                      onChange={handlePickupChange}
                    />
                    {pickupSuggestions.length > 0 && (
                      <select onChange={handlePickupSelect}>
                        <option value="">Select a pickup location</option>
                        {pickupSuggestions.map((suggestion) => (
                          <option
                            key={suggestion.place_id}
                            value={suggestion.place_id}
                          >
                            {suggestion.display_name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-white" htmlFor="dropoff">
                      Drop-off Location
                    </Label>
                    <Input
                      className="bg-white/10 text-white placeholder:text-zinc-200"
                      id="dropoff"
                      placeholder="Enter drop-off address"
                      value={dropoff}
                      onChange={handleDropoffChange}
                    />
                    {dropoffSuggestions.length > 0 && (
                      <select onChange={handleDropoffSelect}>
                        <option value="">Select a dropoff location</option>
                        {dropoffSuggestions.map((suggestion) => (
                          <option
                            key={suggestion.place_id}
                            value={suggestion.place_id}
                          >
                            {suggestion.display_name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-white" htmlFor="cabType">
                      Cab Type
                    </Label>
                    <select
                      id="cabType"
                      className="bg-white/10 placeholder:text-zinc-200 text-sm h-10 pl-2 pr-2 text-white rounded-lg border border-white"
                      onChange={(e) => setCabType(e.target.value)}
                    >
                      <option value="" className="text-black">
                        Select Cab Type
                      </option>
                      <option value="lyft" className="text-black">
                        Lyft
                      </option>
                      <option value="uber" className="text-black">
                        Uber
                      </option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-white" htmlFor="rideType">
                      Ride Type
                    </Label>
                    <select
                      id="rideType"
                      className="bg-white/10 placeholder:text-zinc-200 h-10 pl-2 pr-2 text-sm text-white rounded-lg border border-white"
                      disabled={!cabType}
                      onChange={(e) => setRideType(e.target.value)}
                    >
                      <option value="" className="text-black">
                        Select Ride Type
                      </option>
                      {cabType === "lyft" && (
                        <>
                          <option value="shared" className="text-black">
                            Shared
                          </option>
                          <option value="normal" className="text-black">
                            Normal
                          </option>
                          <option value="suv" className="text-black">
                            SUV
                          </option>
                          <option value="luxury" className="text-black">
                            Luxury
                          </option>
                          <option value="luxury-suv" className="text-black">
                            Luxury SUV
                          </option>
                          <option value="super-luxury" className="text-black">
                            Super Luxury
                          </option>
                        </>
                      )}
                      {cabType === "uber" && (
                        <>
                          <option value="uber-pool" className="text-black">
                            Uber Pool
                          </option>
                          <option value="normal" className="text-black">
                            Normal
                          </option>
                          <option value="suv" className="text-black">
                            SUV
                          </option>
                          <option value="wav" className="text-black">
                            WAV
                          </option>
                          <option value="luxury" className="text-black">
                            Luxury
                          </option>
                          <option value="luxury-suv" className="text-black">
                            Luxury SUV
                          </option>
                        </>
                      )}
                    </select>
                  </div>
                  <Button className="w-full bg-white text-purple-600 hover:bg-zinc-100">
                    Calculate Fare
                  </Button>
                </form>

                <div>
                  {prediction && (
                    <div className="bg-white/10 p-4 rounded-lg mt-4">
                      <h3 className="text-xl font-bold text-white">
                        Estimated Fare
                      </h3>
                      <p className="text-lg text-white">
                        ₹ {(prediction?.prediction * 12).toFixed(2)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-white flex justify-center"
          id="contact-us"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Have questions about our dynamic pricing? Want to partner with
                  us? We'd love to hear from you!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <Input
                    className="w-full"
                    placeholder="Your Name"
                    type="text"
                  />
                  <Input
                    className="w-full"
                    placeholder="Your Email"
                    type="email"
                  />
                  <Textarea className="w-full" placeholder="Your Message" />
                  <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          © 2024 DynamicRide Inc. All rights reserved.
        </p>
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
  );
}
