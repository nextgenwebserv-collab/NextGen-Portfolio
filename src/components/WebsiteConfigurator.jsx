'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Hospital,
  GraduationCap,
  Plane,
  Hotel,
  ShoppingCart,
  Dumbbell,
  School,
  User,
  Grid2X2,
  Check,
  ArrowRight,
  ArrowLeft,
  Globe,
  FileText,
  Phone,
  MessageCircle,
  MapPin,
  Image,
  Search,
  ShieldCheck,
  Clock,
  BookOpen,
  Stethoscope,
  ClipboardList,
  Bed,
  Users,
  Briefcase,
  Calendar,
  CreditCard,
  QrCode,
  LayoutDashboard,
  Star,
  UserRound,
  Video,
  HeartHandshake,
  Truck,
  TicketPercent,
  Boxes,
  Receipt,
  Activity,
  Apple,
  Moon,
  Sparkles,
  PanelsTopLeft,
  Rocket,
  LockIcon,
} from 'lucide-react';

const categories = [
  {
    name: 'Restaurant',
    icon: UtensilsCrossed,
    color: 'text-orange-400',
    description: 'Food & Dining',
  },
  {
    name: 'Travel Agency',
    icon: Plane,
    color: 'text-sky-400',
    description: 'Travel & Tourism',
  },
  {
    name: 'Clinic / Hospital',
    icon: Hospital,
    color: 'text-green-400',
    description: 'Healthcare Services',
  },
  {
    name: 'Coaching Institute',
    icon: GraduationCap,
    color: 'text-indigo-400',
    description: 'Education & Training',
  },
  {
    name: 'E-commerce',
    icon: ShoppingCart,
    color: 'text-pink-400',
    description: 'Online Store',
  },

  {
    name: 'School',
    icon: School,
    color: 'text-red-400',
    description: 'Education',
  },

  {
    name: 'Portfolio',
    icon: User,
    color: 'text-blue-400',
    description: 'Personal Showcase',
  },

  {
    name: 'Landing Page',
    icon: PanelsTopLeft,
    color: 'text-gray-600',
    description: 'Perfect for Promotions',
  },
  {
    name: 'Hotel',
    icon: Hotel,
    color: 'text-yellow-400',
    description: 'Hospitality & Accommodation',
  },
  {
    name: 'Gym / Fitness',
    icon: Dumbbell,
    color: 'text-violet-400',
    description: 'Fitness & Wellness',
  },
];

const categoryFeatures = {
  Restaurant: {
    basePrice: 3999,
    includes: [
      'Responsive Design',
      'Up to 5 Pages',
      'Contact Form',
      'WhatsApp Button',
      'Google Maps',
      'Gallery',
      'Basic SEO',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Online Menu', price: 400 },
      { id: 2, name: 'Table Reservation', price: 800 },
      { id: 3, name: 'Online Ordering', price: 800 },
      { id: 4, name: 'Call Button', price: 150 },
      { id: 5, name: 'Payment Gateway', price: 1500 },
      { id: 6, name: 'QR Menu', price: 700 },
      { id: 7, name: 'Admin Panel', price: 2500 },
      { id: 8, name: 'Customer Reviews', price: 400 },
    ],
  },

  'Clinic / Hospital': {
    basePrice: 4999,
    includes: [
      'Responsive Design',
      'Up to 6 Pages',
      'Doctor Profiles',
      'Departments',
      'Contact Form',
      'WhatsApp Button',
      'Google Maps',
      'Basic SEO',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Appointment Booking', price: 1600 },
      { id: 2, name: 'Patient Portal', price: 1500 },
      { id: 3, name: 'Online Consultation', price: 2500 },
      { id: 4, name: 'Medical Reports', price: 1600 },
      { id: 5, name: 'Payment Gateway', price: 1500 },
      { id: 6, name: 'Emergency Contact', price: 600 },
    ],
  },

  'Coaching Institute': {
    basePrice: 4000,
    includes: [
      'Responsive Design',
      'Up to 6 Pages',
      'Courses',
      'Faculty',
      'Gallery',
      'Contact Form',
      'WhatsApp Button',
      'Google Maps',
      'Basic SEO',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Course Listing', price: 1200 },
      { id: 2, name: 'Admission Form', price: 1400 },
      { id: 3, name: 'Student Login', price: 1500 },
      { id: 4, name: 'Online Test', price: 1000 },
      { id: 5, name: 'Notes Upload', price: 800 },
      { id: 6, name: 'Fee Payment', price: 1500 },
      { id: 7, name: 'Notice Board', price: 800 },
    ],
  },

  'Travel Agency': {
    basePrice: 4500,
    includes: [
      'Responsive Design',
      'Up to 6 Pages',
      'Tour Packages',
      'Gallery',
      'Inquiry Form',
      'WhatsApp Button',
      'Google Maps',
      'Basic SEO',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Tour Booking', price: 1000 },
      { id: 2, name: 'Flight Booking', price: 1800 },
      { id: 3, name: 'Hotel Booking', price: 1600 },
      { id: 4, name: 'Package Deals', price: 800 },
      { id: 5, name: 'Payment Gateway', price: 1500 },
      { id: 6, name: 'Customer Reviews', price: 500 },
    ],
  },

  Hotel: {
    basePrice: 4600,
    includes: [
      'Responsive Design',
      'Up to 6 Pages',
      'Room Gallery',
      'Amenities',
      'Contact Form',
      'WhatsApp Button',
      'Google Maps',
      'Basic SEO',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Room Booking', price: 2500 },
      { id: 2, name: 'Availability Calendar', price: 1500 },
      { id: 3, name: 'Online Payment', price: 1500 },
      { id: 4, name: 'Customer Reviews', price: 800 },
      { id: 5, name: 'Admin Panel', price: 3000 },
    ],
  },

  'E-commerce': {
    basePrice: 8000,
    includes: [
      'Responsive Design',
      'Unlimited Products',
      'Categories',
      'Search',
      'Shopping Cart',
      'User Login',
      'Basic SEO',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 3000,
    features: [
      { id: 1, name: 'Wishlist', price: 1500 },
      { id: 2, name: 'Payment Gateway', price: 1500 },
      { id: 3, name: 'Order Tracking', price: 2000 },
      { id: 4, name: 'Admin Dashboard', price: 3000 },
      { id: 5, name: 'Coupon System', price: 800 },
      { id: 6, name: 'Inventory Management', price: 2500 },
      { id: 7, name: 'Invoice System', price: 1000 },
    ],
  },

  'Gym / Fitness': {
    basePrice: 3999,
    includes: [
      'Responsive Design',
      'Up to 5 Pages',
      'Membership Plans',
      'Trainer Profiles',
      'Gallery',
      'WhatsApp Button',
      'Google Maps',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Membership Registration', price: 1000 },
      { id: 2, name: 'Trainer Booking', price: 1200 },
      { id: 3, name: 'BMI Calculator', price: 600 },
      { id: 4, name: 'Diet Plan', price: 1500 },
    ],
  },

  School: {
    basePrice: 6999,
    includes: [
      'Responsive Design',
      'Up to 8 Pages',
      'Student Login',
      'Teacher Login',
      'Faculty',
      'Gallery',
      'Notice Board',
      'Contact Form',
      'WhatsApp Button',
      'Google Maps',
      'Basic SEO',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2500,
    features: [
      { id: 1, name: 'Admission Form', price: 1600 },
      { id: 2, name: 'Student Portal', price: 3000 },
      { id: 3, name: 'Fee Payment', price: 2000 },
      { id: 4, name: 'Result System', price: 2500 },
      { id: 5, name: 'Event Calendar', price: 800 },
      { id: 6, name: 'Admin Panel', price: 1500 },
    ],
  },

  Portfolio: {
    basePrice: 1999,
    includes: [
      'Responsive Design',
      'Single Page Design',
      'Projects',
      'Skills',
      'Resume Download',
      'Contact Form',
      'WhatsApp Button',
      'SSL Security',
      '3 Months Support',
    ],
    domainPrice: 1200,
    hostingPrice: 2000,
    features: [
      { id: 1, name: 'Blog', price: 900 },
      { id: 2, name: 'Testimonials', price: 800 },
      { id: 3, name: 'Services Section', price: 700 },
      { id: 4, name: 'Dark Mode', price: 600 },
      { id: 5, name: 'Animation Effects', price: 1000 },
    ],
  },

  'Landing Page': {
    basePrice: 1000,
    includes: [
      'Responsive Design',
      'Single Page',
      'Gallery',
      'Testimonials',
      'Contact Form',
      '3 Months Support',
    ],
    domainPrice: 999,
    hostingPrice: 0,
    features: [
      { id: 1, name: 'Lead Capture Form', price: 500 },
      { id: 2, name: 'WhatsApp Button', price: 300 },
      { id: 3, name: 'Gallery', price: 400 },
      { id: 4, name: 'Google Analytics', price: 500 },
      { id: 5, name: 'Meta Pixel', price: 500 },
    ],
  },
};

const featureIcons = {
  'Responsive Design': Globe,
  'Up to 5 Pages': FileText,
  'Up to 6 Pages': FileText,
  'Up to 8 Pages': FileText,
  'Single Page': FileText,
  'Single Page Design': FileText,

  'Contact Form': Phone,
  'Inquiry Form': Phone,

  'WhatsApp Button': MessageCircle,
  'Google Maps': MapPin,
  Gallery: Image,

  'Basic SEO': Search,
  'SSL Security': ShieldCheck,
  '3 Months Support': Clock,

  Courses: BookOpen,
  Faculty: GraduationCap,
  'Doctor Profiles': Stethoscope,
  Departments: ClipboardList,

  'Tour Packages': MapPin,
  Amenities: Bed,
  'Room Gallery': Image,

  Categories: ClipboardList,
  Search: Search,
  'Shopping Cart': ShoppingCart,
  'User Login': User,

  'Membership Plans': Users,
  'Trainer Profiles': Users,

  Projects: Briefcase,
  Skills: User,
  'Resume Download': FileText,

  'Notice Board': ClipboardList,
  'Student Login': LockIcon,
  'Teacher Login': LockIcon,
  Testimonials: Star,
};

const addOnFeatureIcons = {
  // Restaurant
  'Online Menu': UtensilsCrossed,
  'Table Reservation': Calendar,
  'Online Ordering': ShoppingCart,
  'Payment Gateway': CreditCard,
  'QR Menu': QrCode,
  'Admin Panel': LayoutDashboard,
  'Customer Reviews': Star,
  'Call Button': Phone,

  // Clinic
  'Appointment Booking': Calendar,
  'Patient Portal': UserRound,
  'Online Consultation': Video,
  'Medical Reports': FileText,
  'Emergency Contact': Phone,

  // Coaching
  'Course Listing': BookOpen,
  'Admission Form': FileText,
  'Student Login': UserRound,
  'Online Test': ClipboardList,
  'Fee Payment': CreditCard,
  'Notice Board': ClipboardList,
  'Notes Upload': FileText,

  // Travel
  'Tour Booking': Plane,
  'Flight Booking': Plane,
  'Hotel Booking': Hotel,
  'Visa Services': FileText,

  // Hotel
  'Room Booking': Hotel,
  'Availability Calendar': Calendar,
  'Online Payment': CreditCard,

  // Ecommerce
  Wishlist: HeartHandshake,
  'Order Tracking': Truck,
  'Admin Dashboard': LayoutDashboard,
  'Coupon System': TicketPercent,
  'Inventory Management': Boxes,
  'Invoice System': Receipt,

  // Gym
  'Membership Registration': Dumbbell,
  'Trainer Booking': Activity,
  'Online Classes': Video,
  'BMI Calculator': Activity,
  'Diet Plan': Apple,

  // School
  'Student Portal': GraduationCap,
  'Result System': ClipboardList,
  'Event Calendar': Calendar,

  // Portfolio
  Blog: FileText,
  Testimonials: Star,
  'Services Section': Briefcase,
  'Dark Mode': Moon,
  'Animation Effects': Sparkles,

  // Landing Page
  'Lead Capture Form': FileText,
  Gallery: Image,
  'Google Analytics': Activity,
  'Meta Pixel': Activity,
};
export default function WebsiteConfigurator() {
  const [step, setStep] = useState(1);
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('Restaurant');

  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const currentCategory = categoryFeatures[selectedCategory];
  const [business, setBusiness] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [requirements, setRequirements] = useState('');
  const [includeDomain, setIncludeDomain] = useState(true);
  const [showAllIncludes, setShowAllIncludes] = useState(false);
  const [includeHosting, setIncludeHosting] = useState(true);
  const totalPrice = useMemo(() => {
    const featureTotal = selectedFeatures.reduce((sum, item) => sum + item.price, 0);

    return (
      currentCategory.basePrice +
      (includeDomain ? currentCategory.domainPrice : 0) +
      (includeHosting ? currentCategory.hostingPrice : 0) +
      featureTotal
    );
  }, [selectedFeatures, includeDomain, includeHosting, currentCategory]);

  const handleSubmit = async () => {
    const message = `

Hello NextGen Web Services,

Business:
${business}

Category:
${selectedCategory}

Features:
${selectedFeatures.map(f => f.name).join(', ')}

Estimated Price:
₹${totalPrice}

Owner:
${name}

Phone:
${phone}

Email:
${email}

Requirements:
${requirements}

`;

    window.open(
      `https://wa.me/+918340593996?text=${encodeURIComponent(message)}`,

      '_blank'
    );
  };
  return (
    <section className="px-4 sm:px-8 pt-20 text-black bo" ref={sectionRef}>

      <div className="max-w-7xl mx-auto rounded-[32px] border border-violet-500/10 bg-white/40 backdrop-blur-xl p-6 sm:p-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-500/30 blur-[180px]" />

        </div>
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ x: 0, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="text-center">
                <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
                  <Rocket size={20} />
                  Choose Your Business Category
                </span>

                <h2 className="text-3xl sm:text-4xl font-bold">Choose Your Business Category</h2>

                <p className="text-gray-700 mt-4 mb-14">
                  Select your business type and we'll build a modern website tailored to your needs.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {categories.map(item => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedCategory(item.name)}
                      className={`relative rounded-2xl border p-4 sm:p-5 transition-all duration-300

                      ${selectedCategory === item.name
                          ? '0 border border-violet-500/20 bg-white/50 backdrop-blur-xl shadow-xl shadow-violet-500/30 scale-105'
                          : ' border border-violet-500/20 bg-white/50 backdrop-blur-xl hover:border-violet-500 hover:-translate-y-2'
                        }`}
                    >
                      {selectedCategory === item.name && (
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-violet-500 flex items-center justify-center text-white">
                          <Check size={16} />
                        </div>
                      )}

                      <div className="w-16 h-16 rounded-2xl bg-white/30 flex items-center justify-center mx-auto mb-5">
                        <Icon size={32} className={item.color} />
                      </div>

                      <h3 className="font-semibold">{item.name}</h3>

                      <p className="text-xs text-gray-800 mt-2">{item.description}</p>
                    </button>
                  );
                })}
              </div>

              {/* Bottom */}

              <div className="flex justify-between items-center mt-14">
                <div className="text-left">
                  <p className="text-sm text-gray-700">Selected Category</p>

                  <h3 className="text-xl sm:text-2xl font-bold text-violet-500 mt-2">
                    {selectedCategory}
                  </h3>

                  <p className="text-gray-700 mt-2">
                    Base Price :
                    <span className="text-black font-semibold ml-2">
                      ₹{categoryFeatures[selectedCategory].basePrice.toLocaleString()}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setSelectedFeatures([]);
                    setStep(2);
                    setTimeout(() => {
                      sectionRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }, 50);
                  }}
                  className="px-4 sm:px-8 py-2 sm:py-4 rounded-xl bg-violet-500/80 text-white font-semibold flex items-center gap-2 hover:scale-105 transition"
                >
                  Continue
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-violet-400 text-sm mb-2">Selected Category</p>

                      <h2 className=" text-2xl sm:text-4xl font-bold">{selectedCategory}</h2>

                      <p className="text-gray-700 mt-2">
                        Choose the features you want in your website.
                      </p>
                    </div>

                    <div className="px-3 sm:px-5 py-2 rounded-xl border border-violet-500/20 bg-white/70 backdrop-blur-xl">
                      <p className="text-sm text-gray-700">Base Price</p>

                      <h3 className="text-2xl font-bold text-violet-400">
                        ₹{currentCategory.basePrice.toLocaleString()}
                      </h3>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="font-semibold mb-4 text-lg">Base Package Includes</h4>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
                      {currentCategory.includes.map((item, index) => {
                        const Icon = featureIcons[item] || Check;

                        return (
                          <div
                            key={index}
                            className="relative rounded-2xl border border-violet-500/20 bg-white/70 backdrop-blur-xl p-2 sm:p-3"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-violet-500/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-violet-400" />
                              </div>

                              <span className="text-sm sm:text-md text-gray-700 font-medium">
                                {item}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Feature Grid */}
                  <h4 className="font-semibold my-4 text-lg">Essential Features</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
                    {currentCategory.features.map(feature => {
                      const active = selectedFeatures.some(item => item.id === feature.id);

                      const Icon = addOnFeatureIcons[feature.name] || Check;

                      return (
                        <button
                          key={feature.id}
                          onClick={() => {
                            if (active) {
                              setSelectedFeatures(prev =>
                                prev.filter(item => item.id !== feature.id)
                              );
                            } else {
                              setSelectedFeatures(prev => [...prev, feature]);
                            }
                          }}
                          className={`relative rounded-2xl border p-4 text-left transition-all duration-300 ${active
                              ? 'border-violet-500/20 bg-white/70 backdrop-blur-xl shadow-lg shadow-green-400/20'
                              : 'border-violet-500/20 bg-white/70 backdrop-blur-xl hover:border-violet-500/20 hover:-translate-y-1'
                            }`}
                        >
                          {active && (
                            <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-violet-500 text-white flex items-center justify-center">
                              <Check size={16} />
                            </div>
                          )}

                          <div className="flex items-center gap-3">
                            {/* Icon */}
                            <div
                              className={`sm:w-11 sm:h-11 w-8 h-8 rounded-xl flex items-center justify-center transition-all ${active
                                  ? 'bg-violet-500 text-white'
                                  : 'bg-violet-500/10 text-violet-400'
                                }`}
                            >
                              <Icon className="sm:w-6 sm:h-6 w-5 h-5" />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <h3 className="text-sm sm:text-base font-medium text-gray-700">
                                {feature.name}
                              </h3>

                              <p className="mt-1 text-violet-500 font-bold text-md sm:text-lg">
                                +₹{feature.price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="lg:sticky lg:top-24">
                    <div className="rounded-3xl border border-violet-500/20 bg-white/70 backdrop-blur-xl p-6">
                      <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

                      {/* Selected Category */}

                      <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                        <div>
                          <p className="text-gray-700 text-sm">Category</p>

                          <h4 className="font-semibold mt-1">{selectedCategory}</h4>
                        </div>

                        <span className="font-semibold">
                          ₹{currentCategory.basePrice.toLocaleString()}
                        </span>
                      </div>
                      <div className="mt-2">
                        <h4 className="font-semibold mb-4">Base Package Includes</h4>

                        <div className="space-y-3">
                          {(showAllIncludes
                            ? currentCategory.includes
                            : currentCategory.includes.slice(0, 4)
                          ).map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <Check size={16} className="text-violet-400 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>

                        {currentCategory.includes.length > 4 && (
                          <button
                            onClick={() => setShowAllIncludes(!showAllIncludes)}
                            className="mt-4 text-violet-500 hover:text-violet-400 font-medium text-sm transition-colors"
                          >
                            {showAllIncludes
                              ? 'Show Less ↑'
                              : `+${currentCategory.includes.length - 4} More`}
                          </button>
                        )}
                      </div>

                      {/* Selected Features */}

                      <div className="py-5 space-y-4">
                        <h4 className="text-sm uppercase tracking-wider text-gray-900">
                          Selected Features
                        </h4>

                        {selectedFeatures.length === 0 ? (
                          <p className="text-gray-700 text-sm">No extra features selected.</p>
                        ) : (
                          selectedFeatures.map(feature => (
                            <div key={feature.id} className="flex justify-between items-center">
                              <span className="text-gray-700">{feature.name}</span>

                              <span className="text-violet-500 font-medium">
                                ₹{feature.price.toLocaleString()}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                      <div className="mt-2 rounded-2xl">
                        <h3 className="font-bold text-l mb-2">Optional Services</h3>

                        <label className="flex justify-between py-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={includeDomain}
                              onChange={() => setIncludeDomain(!includeDomain)}
                              className="w-4 h-4 accent-violet-500 border-gray-300 rounded cursor-pointer"
                            />

                            <span>Domain (.com)</span>
                          </div>

                          <span>₹{currentCategory.domainPrice}</span>
                        </label>

                        <label className="flex justify-between py-3">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={includeHosting}
                              onChange={() => setIncludeHosting(!includeHosting)}
                              className="w-4 h-4 accent-violet-500 border-gray-300 rounded cursor-pointer"
                            />

                            <span>Hosting</span>
                          </div>

                          <span>₹{currentCategory.hostingPrice}</span>
                        </label>
                      </div>
                      {/* Divider */}

                      <div className="border-t border-zinc-800 my-5"></div>

                      {/* Total */}

                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total Amount</span>

                        <span className="text-2xl sm:text-3xl font-bold text-violet-500">
                          ₹{totalPrice.toLocaleString()}
                        </span>
                      </div>

                      {/* Buttons */}

                      <div className="flex gap-4 mt-8">
                        <button
                          onClick={() => {
                            setStep(1);

                            setTimeout(() => {
                              sectionRef.current?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                              });
                            }, 50);
                          }}
                          className="flex-1 py-3 rounded-xl border border-violet-500/40 flex items-center justify-center gap-2"
                        >
                          <ArrowLeft size={18} />
                          Back
                        </button>

                        <button
                          onClick={() => {
                            setStep(3);
                            setTimeout(() => {
                              sectionRef.current?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                              });
                            }, 50);
                          }}
                          className="flex-1 py-3 rounded-xl bg-violet-500 text-white font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
                        >
                          Continue
                          <ArrowRight size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
                {/* Left Side - Form */}
                <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-violet-500/10 rounded-3xl p-4 sm:p-8">
                  <span className="inline-flex items-center gap-2 border border-black/50 text-black px-4 py-2 rounded-full text-sm mb-5">
                    <FileText size={18} className='text-violet-500' />
                    Business Details
                  </span>

                  <h2 className="text-2xl sm:text-4xl font-bold text-black">
                    Tell us about your business
                  </h2>

                  <p className="text-gray-700 mt-3 mb-10">
                    Fill in your details and we'll contact you with your customized website
                    quotation.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-900 mb-2">Business Name</label>

                      <input
                        value={business}
                        onChange={e => setBusiness(e.target.value)}
                        placeholder="ABC Restaurant"
                        className="w-full rounded-xl border border-violet-500/20 bg-white/10 backdrop-blur-xl px-4 py-3 outline-none focus:border-violet-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-900 mb-2">Owner Name</label>

                      <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        className="w-full rounded-xl border border-violet-500/20 bg-white/10 backdrop-blur-xl px-4 py-3 outline-none  focus:border-violet-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-900 mb-2">Phone Number</label>

                      <input
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+91"
                        className="w-full rounded-xl border border-violet-500/20 bg-white/10 backdrop-blur-xl px-4 py-3 outline-none  focus:border-violet-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-900 mb-2">Email Address</label>

                      <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="abc@gmail.com"
                        className="w-full rounded-xl border border-violet-500/20 bg-white/10 backdrop-blur-xl px-4 py-3 outline-none  focus:border-violet-400"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm text-gray-900 mb-2">
                      Additional Requirements
                    </label>

                    <textarea
                      rows={5}
                      value={requirements}
                      onChange={e => setRequirements(e.target.value)}
                      placeholder="Describe your requirements..."
                      className="w-full rounded-xl border border-violet-500/20 bg-white/10 backdrop-blur-xl px-4 py-3 outline-none focus:border-violet-400 resize-none"
                    />
                  </div>

                  <div className="flex gap-4 mt-10">
                    <button
                      onClick={() => {
                        setStep(2);
                        setTimeout(() => {
                          sectionRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                          });
                        }, 50);
                      }}
                      className="flex-1 py-4 rounded-xl border border-violet-500"
                    >
                      ← Back
                    </button>

                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-4 rounded-xl bg-violet-500 text-white font-semibold hover:scale-105 transition"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </div>

                {/* Right Side Summary */}

                <div className="sticky top-24 h-fit bg-white/70 backdrop-blur-xl border border-violet-500/10 rounded-3xl p-6">
                  <h3 className="text-2xl font-bold mb-6">Order Summary</h3>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-700">Category</span>
                    <span>{selectedCategory}</span>
                  </div>

                  <div className="flex justify-between mb-4">
                    <span className="text-gray-700">Base Price</span>
                    <span>₹{currentCategory.basePrice.toLocaleString()}</span>
                  </div>

                  <div className="border-t border-zinc-800 my-4"></div>

                  <h4 className="text-gray-900 mb-3">Selected Features</h4>

                  <div className="space-y-2">
                    {selectedFeatures.map(feature => (
                      <div key={feature.id} className="flex justify-between text-sm">
                        <span>{feature.name}</span>

                        <span className="text-violet-500">₹{feature.price}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-zinc-800 my-5"></div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Total</span>

                    <span className="text-3xl font-bold text-violet-500">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
