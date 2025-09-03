import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ShoppingCart,
  Calculator,
  Monitor,
  MapPin,
  Camera,
  GraduationCap,
  Building2,
  Users,
  Shield,
  Truck,
  Phone,
  Mail,
  MapPinIcon,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BullsTechConsulting() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className=" rounded-lg flex items-center justify-center">
                <img src="logo.png" width="200" height="200" alt="Bulls Tech Consulting"/>
              </div>
             
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="#services" className="text-primary-foreground hover:text-accent transition-colors">
                Services
              </a>
              <a href="#industries" className="text-primary-foreground hover:text-accent transition-colors">
                Industries
              </a>
              <a href="#contact" className="text-primary-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
           
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="py-20 bg-gradient-to-b from-blue-50 to-background relative"
        style={{
          backgroundImage: "url('/114073.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Empowering Businesses with Smart ICT Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8 text-pretty max-w-2xl mx-auto">
              Transform your business operations with our comprehensive suite of software solutions, from SaaS platforms
              to specialized systems that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#contact"><Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button></Link>
              <Link href="#services"><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 bg-white/10">
                View Our Services
              </Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">About Bulls Tech Consulting</h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  With years of expertise in the ICT industry, Bulls Tech Consulting is your trusted partner for
                  comprehensive technology solutions. We specialize in delivering cutting-edge software systems that
                  streamline operations, enhance productivity, and drive business growth across various industries.
                </p>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Our team of experienced professionals combines technical expertise with deep industry knowledge to
                  deliver solutions that not only meet your current needs but also scale with your business growth. From
                  small businesses to large enterprises, we've helped organizations transform their operations through
                  innovative technology implementations.
                </p>
              </div>
              <div>
                <img
                  src="/119962.jpg"
                  alt="Bulls Tech Consulting professional team"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  Delivering top-tier solutions with uncompromising quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Partnership</h3>
                <p className="text-muted-foreground text-sm">
                  Building lasting relationships through dedicated support
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Reliability</h3>
                <p className="text-muted-foreground text-sm">Trusted solutions that businesses depend on daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Bulls Tech Consulting</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Partner with us for reliable, innovative, and tailored ICT solutions that drive your business forward
            </p>
          </div>

          <div className="mb-12">
            {/* <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <img
                  src="/satisfied-business-client-using-bulls-tech-softwar.png"
                  alt="Client Success Story"
                  className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
                />
                <h3 className="font-semibold text-foreground mb-2">Client Success</h3>
                <p className="text-muted-foreground text-sm">Real results from our implementations</p>
              </div>
              <div className="text-center">
                <img
                  src="/bulls-tech-support-team-providing-technical-assist.png"
                  alt="Technical Support Team"
                  className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
                />
                <h3 className="font-semibold text-foreground mb-2">Expert Support</h3>
                <p className="text-muted-foreground text-sm">Dedicated technical assistance</p>
              </div>
            </div> */}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Proven Expertise</h3>
              <p className="text-muted-foreground text-sm">
                Years of experience delivering successful ICT solutions across multiple industries
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">
                Round-the-clock technical support and maintenance to keep your systems running smoothly
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Customized implementations that fit your specific business requirements and workflows
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Reliable Technology</h3>
              <p className="text-muted-foreground text-sm">
                Enterprise-grade solutions built for stability, security, and long-term performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive ICT solutions tailored to meet your business needs and drive operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <img
                src="/14801.jpg"
                alt="Accounting Systems Implementation"
                  height={200}
                className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
              />
              <h3 className="font-semibold text-foreground">Accounting Systems</h3>
            </div>
            <div className="text-center">
              <img
                src="/3440.jpg"
                alt="POS System Implementation"
                                height={200}

                className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
              />
              <h3 className="font-semibold text-foreground">POS Solutions</h3>
            </div>
            <div className="text-center">
              <img
                src="/98192.jpg"
                alt="Vehicle Tracking System"
                height={200}
                className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
              />
              <h3 className="font-semibold text-foreground">Fleet Tracking</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">SaaS Software Solutions</CardTitle>
                <CardDescription>
                  Scalable cloud-based applications that eliminate infrastructure costs while providing enterprise-grade
                  functionality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Multi-tenant architecture</li>
                      <li>• Real-time data synchronization</li>
                      <li>• Role-based access control</li>
                      <li>• API integrations</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Cloud-Based
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Scalable
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Accounting Systems</CardTitle>
                <CardDescription>
                  Professional accounting software including Palladium and QuickBooks implementations with complete
                  setup and training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Solutions:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Palladium Accounting</li>
                      <li>• QuickBooks Setup</li>
                      <li>• Financial reporting</li>
                      <li>• Tax compliance</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Palladium
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      QuickBooks
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Retail & POS Solutions</CardTitle>
                <CardDescription>
                  Advanced retail solutions including 4POS and ERP Go systems for inventory management and sales
                  tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Systems:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 4POS System</li>
                      <li>• ERP Go</li>
                      <li>• Inventory management</li>
                      <li>• Customer analytics</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      4POS
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      ERP Go
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Vehicle Tracking Solutions</CardTitle>
                <CardDescription>
                  Comprehensive GPS tracking systems for fleet management, route optimization, and security monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Real-time GPS tracking</li>
                      <li>• Route optimization</li>
                      <li>• Fuel monitoring</li>
                      <li>• Driver behavior analysis</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      GPS Tracking
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Fleet Management
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">CCTV Camera Systems</CardTitle>
                <CardDescription>
                  Professional security camera systems with HD recording, remote monitoring, and complete installation
                  services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Capabilities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 4K HD cameras</li>
                      <li>• Night vision</li>
                      <li>• Remote monitoring</li>
                      <li>• Motion detection</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      HD Cameras
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Installation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Training & Consultation</CardTitle>
                <CardDescription>
                  Expert training and consultation services for ERP and POS systems with ongoing support and
                  optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Services:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Staff training programs</li>
                      <li>• System optimization</li>
                      <li>• Business process consulting</li>
                      <li>• Ongoing support</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      ERP Training
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      Consultation
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">SaaS Software Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Scalable Software-as-a-Service solutions that eliminate infrastructure costs while providing
                  enterprise-grade functionality. Our SaaS offerings include CRM systems, project management tools, and
                  custom business applications.
                </p>
                {/* <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Multi-tenant architecture for scalability</li>
                      <li>• Real-time data synchronization</li>
                      <li>• Role-based access control</li>
                      <li>• API integrations with third-party systems</li>
                      <li>• Automated backups and disaster recovery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Benefits:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Reduce IT infrastructure costs by up to 60%</li>
                      <li>• Access from anywhere with internet connection</li>
                      <li>• Automatic updates and maintenance</li>
                      <li>• Pay-as-you-scale pricing model</li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Cloud-Based
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Scalable
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Cost-Effective
                  </Badge>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn More About SaaS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <img
                  src="/saas.jpg"
                  alt="SaaS Software Solutions Dashboard"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="116266.jpg"
                  alt="Accounting Systems Implementation"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Accounting Systems</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Professional accounting software including Palladium and QuickBooks implementations. We provide
                  complete setup, customization, and training for financial management systems that ensure compliance
                  and streamline your accounting processes.
                </p>
                {/* <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Palladium Accounting:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Advanced financial reporting and analytics</li>
                      <li>• Multi-currency support</li>
                      <li>• Automated tax calculations</li>
                      <li>• Budget planning and forecasting</li>
                      <li>• Audit trail and compliance tracking</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">QuickBooks Solutions:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Invoicing and payment processing</li>
                      <li>• Expense tracking and categorization</li>
                      <li>• Payroll management integration</li>
                      <li>• Bank reconciliation automation</li>
                      <li>• Custom financial reports</li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Palladium
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    QuickBooks
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Compliance
                  </Badge>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Explore Accounting Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Monitor className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Retail & POS Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Advanced retail solutions including 4POS and ERP Go systems. Our POS solutions handle inventory
                  management, sales tracking, customer management, and reporting. Perfect for retail stores,
                  restaurants, and service businesses.
                </p>
                {/* <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">4POS System Features:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Touch-screen interface with customizable layouts</li>
                      <li>• Barcode scanning and label printing</li>
                      <li>• Customer loyalty program management</li>
                      <li>• Multi-location inventory synchronization</li>
                      <li>• Real-time sales reporting and analytics</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">ERP Go Capabilities:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Integrated supply chain management</li>
                      <li>• Purchase order automation</li>
                      <li>• Vendor management and procurement</li>
                      <li>• Financial integration with accounting</li>
                      <li>• Mobile app for remote management</li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    4POS
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    ERP Go
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Inventory
                  </Badge>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Discover POS Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <img
                  src="/76097.jpg"
                  alt="POS System Implementation"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/98094.jpg"
                  alt="Vehicle Tracking System Dashboard"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Vehicle Tracking Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Comprehensive vehicle tracking systems for fleet management, logistics optimization, and security.
                  Real-time GPS tracking, route optimization, fuel monitoring, and detailed reporting help reduce costs
                  and improve operational efficiency.
                </p>
                {/* <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tracking Hardware:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• OBD-II plug-and-play devices</li>
                      <li>• Hardwired GPS trackers for permanent installation</li>
                      <li>• Battery-powered trackers for assets</li>
                      <li>• Dash cameras with GPS integration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Software Features:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Live tracking with 30-second updates</li>
                      <li>• Geofencing and automated alerts</li>
                      <li>• Driver behavior monitoring</li>
                      <li>• Maintenance scheduling and reminders</li>
                      <li>• Fuel consumption analysis</li>
                      <li>• Custom reporting and analytics</li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    GPS Tracking
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Fleet Management
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Route Optimization
                  </Badge>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  View Tracking Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Camera className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">CCTV Camera Systems</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Professional CCTV camera systems for comprehensive security coverage. We provide high-definition
                  cameras, digital video recorders, remote monitoring capabilities, and complete installation services
                  for businesses and residential properties.
                </p>
                {/* <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Camera Options:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 4K Ultra HD resolution cameras</li>
                      <li>• Night vision with infrared technology</li>
                      <li>• Pan-tilt-zoom (PTZ) cameras</li>
                      <li>• Weatherproof outdoor cameras (IP66 rated)</li>
                      <li>• Wireless and PoE (Power over Ethernet) options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">System Features:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Network Video Recorders (NVR) with cloud backup</li>
                      <li>• Motion detection and smart alerts</li>
                      <li>• Mobile app for remote viewing</li>
                      <li>• Facial recognition capabilities</li>
                      <li>• Integration with access control systems</li>
                      <li>• 24/7 monitoring service options</li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    HD Cameras
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Remote Monitoring
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Installation
                  </Badge>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Explore CCTV Systems
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <img
                  src="/89017.jpg"
                  alt="CCTV Security Camera System"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/37174.jpg"
                  alt="ERP Training Session"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Training & Consultation</h2>
                <p className="text-lg text-muted-foreground mb-6 text-pretty">
                  Expert training and consultation services for ERP and POS systems. We provide comprehensive user
                  training, system optimization consulting, and ongoing support to ensure your team maximizes the value
                  of your technology investments.
                </p>
                {/* <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Training Programs:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• On-site staff training sessions</li>
                      <li>• Virtual training workshops</li>
                      <li>• Custom training materials and documentation</li>
                      <li>• Certification programs for advanced users</li>
                      <li>• Train-the-trainer programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Consultation Services:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Business process optimization</li>
                      <li>• System integration planning</li>
                      <li>• Performance monitoring and tuning</li>
                      <li>• Upgrade and migration strategies</li>
                      <li>• ROI analysis and reporting</li>
                    </ul>
                  </div>
                </div> */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    ERP Training
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    POS Training
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Consultation
                  </Badge>
                </div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Schedule Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our solutions are trusted across diverse industries, delivering specialized functionality for unique
              business needs
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <img
                src="/modern-retail-store-with-pos-systems-and-inventory.png"
                alt="Retail Industry Solutions"
                className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
              />
              <h3 className="font-semibold text-foreground mb-2">Retail & Commerce</h3>
              <p className="text-muted-foreground text-sm">Complete retail management solutions</p>
            </div>
            <div className="text-center">
              <img
                src="/logistics-warehouse-with-tracking-systems-and-flee.png"
                alt="Logistics Industry Solutions"
                className="rounded-lg shadow-md mx-auto mb-4 max-w-full h-auto"
              />
              <h3 className="font-semibold text-foreground mb-2">Logistics & Transportation</h3>
              <p className="text-muted-foreground text-sm">Advanced fleet and cargo tracking systems</p>
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Retail</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Point-of-sale systems</li>
                  <li>• Inventory management</li>
                  <li>• Customer analytics</li>
                  <li>• Multi-location support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Accounting</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Financial reporting</li>
                  <li>• Tax compliance</li>
                  <li>• Audit trails</li>
                  <li>• Budget management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Logistics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Fleet tracking</li>
                  <li>• Route optimization</li>
                  <li>• Delivery management</li>
                  <li>• Fuel monitoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Security</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• CCTV surveillance</li>
                  <li>• Access control</li>
                  <li>• Remote monitoring</li>
                  <li>• Incident reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to transform your business with our ICT solutions? Contact us today for a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                    <Input placeholder="Your Company Name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Interest</label>
                    <Input placeholder="e.g., POS System, Vehicle Tracking" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                    <Textarea placeholder="Tell us about your requirements..." rows={4} />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="mb-6">
                <img
                  src="/bulls-tech-consulting-office-building-exterior-wit.png"
                  alt="Bulls Tech Consulting Office"
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>

              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@bullstechconsulting.com</p>
                      <p className="text-muted-foreground">support@bullstechconsulting.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Location</h3>
                      <p className="text-muted-foreground">123 Technology Drive</p>
                      <p className="text-muted-foreground">Business District, City 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-blue-100 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                <div className="space-y-1 text-muted-foreground text-sm">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency Support Only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100 text-pretty">
              Join hundreds of satisfied clients who have revolutionized their operations with our ICT solutions. Get
              started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Schedule Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-bold">Bulls Tech</h3>
                  <p className="text-sm text-background/80">Consulting</p>
                </div>
              </div>
              <p className="text-background/80 text-sm">Empowering businesses with smart ICT solutions since 2010.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>SaaS Software</li>
                <li>Accounting Systems</li>
                <li>POS Solutions</li>
                <li>Vehicle Tracking</li>
                <li>CCTV Systems</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Industries</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>Retail</li>
                <li>Accounting</li>
                <li>Logistics</li>
                <li>Security</li>
                <li>Healthcare</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>+1 (555) 123-4567</li>
                <li>info@bullstechconsulting.com</li>
                <li>123 Technology Drive</li>
                <li>Business District, City 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/80 text-sm">© 2024 Bulls Tech Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
