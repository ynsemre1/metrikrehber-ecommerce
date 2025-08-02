export const SITE_CONFIG = {
  name: "EduShop",
  tagline: "Premium Educational Courses",
  description:
    "Transform your learning journey with our comprehensive online courses designed by industry experts. Learn at your own pace and achieve your goals.",
  phone: "0 533 236 20 05",
  email: "info@edushop.com",
} as const

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Sample Videos", href: "#videos" },
  { label: "Reviews & Success", href: "#reviews" },
  { label: "Help", href: "#help" },
  { label: "Contact", href: "#contact" },
] as const

export const HERO_CONTENT = {
  headline: "Master Your Exams with Expert-Led Courses",
  description:
    "Join thousands of successful students who have achieved their academic goals through our comprehensive online education platform. Start your journey to success today.",
  ctaText: "Explore Courses",
  ctaSecondary: "Watch Demo",
} as const

export const PRODUCT_CATEGORIES = [
  { id: "yks-2026", label: "YKS 2026", active: true },
  { id: "yks-2027", label: "YKS 2027", active: false },
  { id: "lgs-2026", label: "LGS 2026", active: false },
  { id: "grade-9-11", label: "9, 10, 11th Grade", active: false },
  { id: "grade-5-7", label: "5, 6, 7th Grade", active: false },
  { id: "grade-1-4", label: "1, 2, 3, 4th Grade", active: false },
  { id: "kpss-pre", label: "KPSS Pre-License", active: false },
  { id: "kpss-license", label: "KPSS License", active: false },
] as const

export const PRODUCTS = [
  {
    id: 1,
    title: "Complete Course Package + Numerical Focus 2026",
    image: "/placeholder.svg?height=300&width=400&text=Course+Package+1",
    successRate: "95% Success Rate",
    originalPrice: 33599,
    discountedPrice: 24999,
    installmentInfo: "26 Installments",
    advancePayment: "2,083 TL Advance",
    curriculum: {
      title: "Curriculum",
      items: ["6,258 Course Videos", "39,335 Video Solutions"],
    },
    features: {
      title: "Features",
      items: ["Practice Exams & Question Bank", "Advanced Personal Development System", "Expert Training"],
    },
    additionalFeatures: {
      title: "Additional Features",
      items: [
        { name: "Question Solving Rights", details: ["1st Year", "2nd Year", "Extra Package"] },
        { name: "Random Small Group Meetings", details: ["2nd Year", "Extra Package"] },
        { name: "Private Lessons", details: ["2nd Year", "Extra Package"] },
        { name: "Random 40 Minute Private Lessons", details: ["Extra Package"] },
      ],
    },
  },
  {
    id: 2,
    title: "Complete Course Package + Equal Weight Focus 2026",
    image: "/placeholder.svg?height=300&width=400&text=Course+Package+2",
    successRate: "95% Success Rate",
    originalPrice: 33599,
    discountedPrice: 24999,
    installmentInfo: "26 Installments",
    advancePayment: "2,083 TL Advance",
    curriculum: {
      title: "Curriculum",
      items: ["6,131 Course Videos", "37,505 Video Solutions"],
    },
    features: {
      title: "Features",
      items: ["Practice Exams & Question Bank", "Advanced Personal Development System", "Expert Training"],
    },
    additionalFeatures: {
      title: "Additional Features",
      items: [
        { name: "Question Solving Rights", details: ["1st Year", "2nd Year", "Extra Package"] },
        { name: "Random Small Group Meetings", details: ["2nd Year", "Extra Package"] },
        { name: "Private Lessons", details: ["2nd Year", "Extra Package"] },
        { name: "Random 40 Minute Private Lessons", details: ["Extra Package"] },
      ],
    },
  },
  {
    id: 3,
    title: "Complete Course Package + Verbal Focus 2026",
    image: "/placeholder.svg?height=300&width=400&text=Course+Package+3",
    successRate: "95% Success Rate",
    originalPrice: 33599,
    discountedPrice: 24999,
    installmentInfo: "26 Installments",
    advancePayment: "2,083 TL Advance",
    curriculum: {
      title: "Curriculum",
      items: ["5,705 Course Videos", "36,333 Video Solutions"],
    },
    features: {
      title: "Features",
      items: ["Practice Exams & Question Bank", "Advanced Personal Development System", "Expert Training"],
    },
    additionalFeatures: {
      title: "Additional Features",
      items: [
        { name: "Question Solving Rights", details: ["1st Year", "2nd Year", "Extra Package"] },
        { name: "Random Small Group Meetings", details: ["2nd Year", "Extra Package"] },
        { name: "Private Lessons", details: ["2nd Year", "Extra Package"] },
        { name: "Random 40 Minute Private Lessons", details: ["Extra Package"] },
      ],
    },
  },
  {
    id: 4,
    title: "Premium Course Package + Science Focus 2026",
    image: "/placeholder.svg?height=300&width=400&text=Course+Package+4",
    successRate: "98% Success Rate",
    originalPrice: 45999,
    discountedPrice: 34999,
    installmentInfo: "36 Installments",
    advancePayment: "2,500 TL Advance",
    curriculum: {
      title: "Curriculum",
      items: ["8,500 Course Videos", "45,000 Video Solutions"],
    },
    features: {
      title: "Features",
      items: [
        "Practice Exams & Question Bank",
        "Advanced Personal Development System",
        "Expert Training",
        "1-on-1 Mentoring",
      ],
    },
    additionalFeatures: {
      title: "Additional Features",
      items: [
        { name: "Question Solving Rights", details: ["1st Year", "2nd Year", "Extra Package"] },
        { name: "Random Small Group Meetings", details: ["2nd Year", "Extra Package"] },
        { name: "Private Lessons", details: ["2nd Year", "Extra Package"] },
        { name: "Random 40 Minute Private Lessons", details: ["Extra Package"] },
      ],
    },
  },
  {
    id: 5,
    title: "Standard Course Package + Math Focus 2026",
    image: "/placeholder.svg?height=300&width=400&text=Course+Package+5",
    successRate: "92% Success Rate",
    originalPrice: 28999,
    discountedPrice: 19999,
    installmentInfo: "24 Installments",
    advancePayment: "1,500 TL Advance",
    curriculum: {
      title: "Curriculum",
      items: ["4,200 Course Videos", "28,500 Video Solutions"],
    },
    features: {
      title: "Features",
      items: ["Practice Exams & Question Bank", "Personal Development System", "Expert Training"],
    },
    additionalFeatures: {
      title: "Additional Features",
      items: [
        { name: "Question Solving Rights", details: ["1st Year", "2nd Year"] },
        { name: "Random Small Group Meetings", details: ["2nd Year"] },
        { name: "Private Lessons", details: ["Extra Package"] },
      ],
    },
  },
  {
    id: 6,
    title: "Elite Course Package + Literature Focus 2026",
    image: "/placeholder.svg?height=300&width=400&text=Course+Package+6",
    successRate: "96% Success Rate",
    originalPrice: 38999,
    discountedPrice: 29999,
    installmentInfo: "30 Installments",
    advancePayment: "2,200 TL Advance",
    curriculum: {
      title: "Curriculum",
      items: ["6,800 Course Videos", "42,000 Video Solutions"],
    },
    features: {
      title: "Features",
      items: [
        "Practice Exams & Question Bank",
        "Advanced Personal Development System",
        "Expert Training",
        "Writing Workshop",
      ],
    },
    additionalFeatures: {
      title: "Additional Features",
      items: [
        { name: "Question Solving Rights", details: ["1st Year", "2nd Year", "Extra Package"] },
        { name: "Random Small Group Meetings", details: ["2nd Year", "Extra Package"] },
        { name: "Private Lessons", details: ["2nd Year", "Extra Package"] },
        { name: "Random 40 Minute Private Lessons", details: ["Extra Package"] },
      ],
    },
  },
] as const

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayşe Kaya",
    role: "YKS Student",
    content:
      "EduShop completely transformed my exam preparation. The structured courses and expert guidance helped me achieve my target score.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 2,
    name: "Mehmet Demir",
    role: "LGS Student",
    content:
      "The video solutions and practice exams were incredibly helpful. I felt confident and well-prepared for my LGS exam.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatma Yılmaz",
    role: "KPSS Candidate",
    content:
      "Thanks to EduShop's comprehensive materials and expert instructors, I successfully passed my KPSS exam on the first try.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
] as const

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "How do I get started with the courses?",
    answer:
      "Simply create an account, browse our course catalog, and enroll in the courses that interest you. You can start learning immediately after enrollment.",
  },
  {
    id: 2,
    question: "Are the courses self-paced or scheduled?",
    answer:
      "Our courses are designed to be self-paced, allowing you to learn at your own speed. However, some courses may have optional live sessions and deadlines for assignments.",
  },
  {
    id: 3,
    question: "Do I receive a certificate upon completion?",
    answer:
      "Yes, you will receive a verified certificate of completion for each course you successfully finish. These certificates can be shared on your professional profiles.",
  },
  {
    id: 4,
    question: "What if I'm not satisfied with a course?",
    answer:
      "We offer a 30-day money-back guarantee for all our courses. If you're not satisfied, you can request a full refund within the first 30 days of enrollment.",
  },
  {
    id: 5,
    question: "Can I access courses on mobile devices?",
    answer:
      "Our platform is fully responsive and optimized for mobile devices. You can learn anywhere, anytime using your smartphone or tablet.",
  },
] as const

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
    { label: "Blog", href: "#blog" },
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "System Status", href: "#status" },
    { label: "Community", href: "#community" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Accessibility", href: "#accessibility" },
  ],
} as const
