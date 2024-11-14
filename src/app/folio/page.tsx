'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ShoppingBag, Gift, Calendar, Heart, Instagram, Twitter, Youtube, ChevronRight, Send, Sparkles } from 'lucide-react'

export default function RetroInfluencerLandingPage() {
  const [name] = useState('Priyank Patidar')
  const [bio] = useState('Hustling hard 💪 | Tech Enthusiast 💻 | Always Learning 📚')
  const [selectedService, setSelectedService] = useState('')
  const [paymentMade, setPaymentMade] = useState(false)

  const wishlists = [
    {
      name: 'Tech Gadgets',
      items: ['Retro Gaming Console', 'Mechanical Keyboard', 'Vintage-style Headphones']
    },
    {
      name: 'Retro Games',
      items: ['Space Invaders', 'Pac-Man', 'Tetris']
    },
    {
      name: 'Vinyl Records',
      items: ['Pink Floyd - Dark Side of the Moon', 'Michael Jackson - Thriller', 'Queen - A Night at the Opera']
    }
  ]

  const services = [
    { id: 'gaming', name: 'Retro Gaming Session', price: 3500 },
    { id: 'photoshoot', name: 'Vintage Photoshoot', price: 7500 },
    { id: 'consultation', name: 'Tech Consultation', price: 5000 }
  ]

  const handleServiceSelection = (serviceId: string) => {
    setSelectedService(serviceId)
    setPaymentMade(false)
  }

  const handlePayment = () => {
    // Simulate payment process
    setTimeout(() => {
      setPaymentMade(true)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 sm:p-6 font-mono">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <Avatar className="w-24 h-24 sm:w-30 sm:h-30 mx-auto mb-8 border-3 border-green-500 shadow-lg shadow-green-500/50">
            <AvatarImage src="/placeholder.svg" alt={name} />
            <AvatarFallback className="bg-black text-green-500">{name[0]}</AvatarFallback>
          </Avatar>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-green-500">{name}</h2>
          <p className="text-lg sm:text-xl text-blue-300 mb-4">{bio}</p>
          <div className="flex justify-center space-x-4 mb-4">
            {[Instagram, Twitter, Youtube].map((Icon, index) => (
              <Button key={index} variant="outline" size="icon" className="border-black bg-black text-green-500 hover:bg-green-500 hover:text-black shadow-md shadow-green-500/30">
                <Icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button className="bg-green-600 text-black hover:bg-green-500 shadow-md shadow-green-600/30">
              <Send className="mr-2 h-4 w-4" /> Turbo DM (₹500)
            </Button>
            <Button variant="outline" className="border-green-500 bg-black text-green-500 hover:bg-green-500 hover:text-black shadow-md shadow-green-500/30">Message</Button>
          </div>
        </div>

        <Tabs defaultValue="wishlists" className="w-full">
          <TabsList className="flex w-full mb-8 gap-4 overflow-x-auto bg-black">
            {[
              { value: "wishlists", icon: Heart, label: "Wishlists" },
              { value: "offers", icon: Gift, label: "Offers" },
              { value: "shop", icon: ShoppingBag, label: "Shop" },
              { value: "book", icon: Calendar, label: "Book" },
            ].map(({ value, icon: Icon, label }) => (
              <TabsTrigger 
                key={value} 
                value={value} 
                className="flex-shrink-0 text-sm sm:text-base py-2 px-4 bg-black hover:bg-white hover:text-black text-green-500 data-[state=active]:bg-green-500 data-[state=active]:text-black rounded border-2 border-green-500 shadow-inner shadow-green-500/50"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="wishlists">
            <Card className="bg-black border-2 border-green-500 text-green-400 shadow-lg shadow-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-500">Wishlists</CardTitle>
                <CardDescription className="text-blue-300">My curated collections</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {wishlists.map((list, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-green-500 hover:text-green-600">{list.name}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2">
                          {list.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2 text-blue-300">
                              <ChevronRight className="w-4 h-4 text-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="offers">
            <Card className="bg-black border-2 border-green-500 text-green-400 shadow-lg shadow-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-500">Special Offers</CardTitle>
                <CardDescription className="text-blue-300">Exclusive deals for my followers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((offer) => (
                    <div key={offer} className="bg-black p-4 rounded-lg border border-green-500 shadow-md shadow-green-500/20">
                      <h3 className="font-semibold mb-2 text-green-500">Retro Offer {offer}</h3>
                      <p className="text-sm text-blue-300 mb-2">Get 20% off with code: RETRO20</p>
                      <Button size="sm" className="bg-green-600 text-black hover:bg-green-500 shadow-sm shadow-green-600/30">Claim Offer</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="shop">
            <Card className="bg-black border-2 border-green-500 text-green-400 shadow-lg shadow-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-500">Shop My Favorites</CardTitle>
                <CardDescription className="text-blue-300">Retro products and services I endorse</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((product) => (
                    <div key={product} className="bg-black p-4 rounded-lg border border-green-500 text-center shadow-md shadow-green-500/20 w-[70%] mx-auto">
                      <div className="w-full h-24 bg-green-200 rounded-md mb-2 flex items-center justify-center text-black font-bold">
                        Retro {product}
                      </div>
                      <h3 className="font-semibold text-green-500">Vintage Item {product}</h3>
                      <p className="text-sm text-blue-300 mb-2">₹1,499</p>
                      <Button size="sm" className="w-full bg-green-600 text-black hover:bg-green-500 shadow-sm shadow-green-600/30">Buy Now</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="book">
            <Card className="bg-black border-2 border-green-500 text-green-400 shadow-lg shadow-green-500/30">
              <CardHeader>
                <CardTitle className="text-green-500">Book an Appointment</CardTitle>
                <CardDescription className="text-blue-300">Schedule a retro-themed session with me</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-green-500">Select a Service</Label>
                    <RadioGroup onValueChange={handleServiceSelection} className="space-y-2">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2 bg-black p-3 rounded-lg border border-green-500">
                          <RadioGroupItem value={service.id} id={service.id} className="border-green-500 text-green-500" />
                          <Label htmlFor={service.id} className="flex-grow">{service.name}</Label>
                          <span className="text-blue-300">₹{service.price}</span>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  
                  {selectedService && !paymentMade && (
                    <div className="space-y-2">
                      <p className="text-blue-300">Please make a payment to proceed with booking.</p>
                      <Button onClick={handlePayment} className="w-full bg-green-600 text-black hover:bg-green-500 shadow-md shadow-green-600/30">
                        Make Payment
                      </Button>
                    </div>
                  )}

                  {paymentMade && (
                    <div className="space-y-4">
                      <p className="text-green-500">Payment received. You can now book your appointment.</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-green-500">Name</Label>
                          <Input id="name" placeholder="Your name" className="bg-black border-green-500 text-green-400 placeholder:text-blue-300 shadow-inner shadow-green-500/20" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-green-500">Email</Label>
                          <Input id="email" placeholder="Your email" type="email" className="bg-black border-green-500 text-green-400 placeholder:text-blue-300 shadow-inner shadow-green-500/20" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date" className="text-green-500">Preferred Date</Label>
                        <Input id="date" type="date" className="bg-black border-green-500 text-green-400 shadow-inner shadow-green-500/20" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-green-500">Message</Label>
                        <textarea 
                          id="message" 
                          placeholder="Tell me what you'd like to discuss" 
                          className="w-full h-24 px-3 py-2 text-green-400 bg-black border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-blue-300 shadow-inner shadow-green-500/20"
                        ></textarea>
                      </div>
                      <Button className="w-full bg-green-600 text-green-400 hover:bg-green-600 shadow-md shadow-green-600/30">Book Now</Button>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="mt-12 text-center">
        <div className="flex items-center justify-center space-x-2 text-green-500">
          <span>Built with</span>
          <Sparkles className="w-5 h-5" />
          <span>mega-influence</span>
        </div>
        <p className="text-blue-300 text-sm mt-2">Create your own influencer page today!</p>
      </footer>
    </div>
  )
}