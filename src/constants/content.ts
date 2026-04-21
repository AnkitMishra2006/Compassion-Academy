import {
  HeartHandshake,
  Sparkles,
  BookOpen,
  Compass,
  FileText,
  CalendarCheck,
  MessageSquare,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Clock,
  Heart,
  Lightbulb,
  Globe2,
  Users,
} from "lucide-react";

import heroImg from "@/assets/hero-students.jpg";
import aboutImg from "@/assets/about-teacher.jpg";
import earlyImg from "@/assets/program-early.jpg";
import primaryImg from "@/assets/program-primary.jpg";
import middleImg from "@/assets/program-middle.jpg";
import sportsImg from "@/assets/life-sports.jpg";
import artsImg from "@/assets/life-arts.jpg";
import musicImg from "@/assets/life-music.jpg";

/* -------------------------------------------------------------------------- */
/*  SITE — global meta, contact, navigation                                    */
/* -------------------------------------------------------------------------- */

export const SITE = {
  name: "Compassion Academy",
  tagline: "Where curiosity meets compassion",
  description:
    "A nurturing K–12 school where children grow into confident, kind, curious learners. Explore programs, life on campus, and admissions at Compassion Academy.",
  shortDescription: "Where curiosity meets compassion — a school built around every child.",
  email: "hello@compassionacademy.edu",
  phone: "+1 (000) 000-0000",
  phoneHref: "tel:+10000000000",
  address: "123 Learning Lane, Greenfield District",
  officeHours: "Mon – Fri · 8am – 4pm",
  themeColor: "#1A8FCC",
  intake: "Admissions open · 2025",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/student-life", label: "Student Life" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;

export const FOOTER = {
  blurb:
    "A nurturing school where curiosity meets compassion. We grow confident, kind learners ready for the world ahead.",
  exploreLinks: [
    { to: "/about", label: "About" },
    { to: "/academics", label: "Academics" },
    { to: "/student-life", label: "Student Life" },
    { to: "/admissions", label: "Admissions" },
    { to: "/contact", label: "Contact" },
  ],
  legalLinks: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
    { href: "#", label: "Accessibility" },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/*  HOME                                                                       */
/* -------------------------------------------------------------------------- */

export const HOME_META = {
  title: "Compassion Academy — Where curiosity meets compassion",
  description: SITE.description,
  ogTitle: "Compassion Academy",
  ogDescription: SITE.shortDescription,
};

export const HOME_HERO = {
  pill: SITE.intake,
  titleStart: "Where curiosity",
  titleAccent: "meets",
  titleEnd: "compassion.",
  subtitle:
    "Compassion Academy is a nurturing K–12 school where children grow into confident, kind, and curious learners — guided by teachers who truly know them.",
  ctaPrimary: { label: "Start your application", to: "/admissions" as const },
  ctaSecondary: { label: "Discover our story", to: "/about" as const },
  image: { src: heroImg, alt: "Joyful students at Compassion Academy" },
  badge: "Loved by parents across our community.",
  floatNote: "Inquiry-led, child-first learning.",
};

export const HERO_STATS: ReadonlyArray<readonly [string, string]> = [
  ["12:1", "Student–teacher ratio"],
  ["20+", "Years of nurturing"],
  ["98%", "Parent satisfaction"],
];

export const HOME_VALUES = [
  {
    icon: HeartHandshake,
    title: "Compassion first",
    desc: "Empathy and respect shape every classroom, every conversation, every choice.",
  },
  {
    icon: Sparkles,
    title: "Curiosity always",
    desc: "We honor questions, encourage wonder, and turn lessons into lifelong habits of mind.",
  },
  {
    icon: BookOpen,
    title: "Excellence in craft",
    desc: "Skilled teachers, small classes, and a curriculum designed for depth, not just coverage.",
  },
  {
    icon: Compass,
    title: "Character that travels",
    desc: "We grow students who lead with integrity — at school, at home, and out in the world.",
  },
] as const;

export const HOME_VALUES_SECTION = {
  eyebrow: "What we stand for",
  title: "A school built around every child.",
  intro:
    "Four ideas guide how we teach, how we listen, and how we welcome every family through our doors.",
};

export const HOME_PROGRAMS = [
  {
    title: "Early Years",
    age: "Ages 3 – 5",
    img: earlyImg,
    desc: "Play-based discovery that nurtures curiosity, language, and the joy of learning together.",
  },
  {
    title: "Primary",
    age: "Ages 6 – 10",
    img: primaryImg,
    desc: "A balanced foundation in literacy, numeracy, and the arts — taught with warmth and rigor.",
  },
  {
    title: "Middle & High",
    age: "Ages 11 – 17",
    img: middleImg,
    desc: "Inquiry-led learning, leadership, and real-world projects that prepare students for what's next.",
  },
] as const;

export const HOME_PROGRAMS_SECTION = {
  eyebrow: "Our programs",
  title: "From first words to first steps into the world.",
  intro:
    "A continuous learning journey from Early Years through Middle & High — designed to grow with your child.",
};

export const HOME_MISSION = {
  pill: "Our promise",
  title: "We teach children, not just subjects.",
  body: "Every learner arrives with something special. Our job is to notice it, nurture it, and give it room to grow — through warm relationships, thoughtful lessons, and a community that believes in them.",
  image: { src: aboutImg, alt: "A teacher reading to students" },
  ctaPrimary: { label: "Read our story", to: "/about" as const },
  ctaSecondary: { label: "Visit campus", to: "/contact" as const },
};

export const HOME_TESTIMONIALS = [
  {
    quote:
      "My daughter walks in with a smile every morning. The teachers know her, challenge her, and truly care.",
    name: "Ayesha R.",
    role: "Parent · Grade 4",
  },
  {
    quote:
      "Compassion Academy didn't just teach my son math — they taught him how to think, ask, and lead.",
    name: "David O.",
    role: "Parent · Grade 8",
  },
  {
    quote: "It's the warmest school community I've ever been part of. Every child is seen.",
    name: "Mariam K.",
    role: "Parent · Early Years",
  },
] as const;

export const HOME_TESTIMONIALS_SECTION = {
  eyebrow: "Loved by families",
  title: "A community that feels like home.",
  intro:
    "What parents say about the everyday moments that make Compassion Academy different.",
};

export const HOME_CTA = {
  title: "Ready to give your child a brighter chapter?",
  body: "Applications for the upcoming academic year are open. Visit us, meet our teachers, and see why families call Compassion Academy home.",
  primary: { label: "Apply now", to: "/admissions" as const },
  secondary: { label: "Book a tour", to: "/contact" as const },
};

/* -------------------------------------------------------------------------- */
/*  ABOUT                                                                      */
/* -------------------------------------------------------------------------- */

export const ABOUT_META = {
  title: "About — Compassion Academy",
  description:
    "Our mission, values, and the people behind Compassion Academy — a school where every child is known, challenged, and cared for.",
  ogTitle: "About Compassion Academy",
  ogDescription:
    "Meet the school where every child is known, challenged, and cared for.",
};

export const ABOUT_HERO = {
  eyebrow: "About us",
  title: "A school where every child is truly known.",
  subtitle:
    "Founded on the belief that learning grows best in an environment of warmth, wonder, and respect — Compassion Academy has spent two decades shaping confident, caring young people.",
};

export const ABOUT_STORY = {
  pill: "Our story",
  title: "A community built on quiet, everyday compassion.",
  paragraphs: [
    "Compassion Academy began with a simple idea: children flourish when they feel seen. Two decades later, that idea still shapes every hallway, lesson plan, and parent conversation on our campus.",
    "We've grown into a vibrant K–12 school — but we've held on to what made us start. Teachers who know your child's story. A curriculum that respects their pace. A community that celebrates their progress.",
    "The world outside is changing fast. Our promise to families is steady: we'll meet your child where they are, and walk with them toward who they're becoming.",
  ],
  image: { src: aboutImg, alt: "Teacher with students" },
};

export const ABOUT_PILLARS_SECTION = {
  eyebrow: "What guides us",
  title: "Four pillars, one philosophy.",
  intro:
    "They show up in how we hire, how we plan lessons, and how we welcome every new family.",
};

export const ABOUT_PILLARS = [
  {
    icon: Heart,
    title: "Care that's noticed",
    desc: "Small classes, real relationships, and a school where children feel safe to be themselves.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity in motion",
    desc: "We teach by asking better questions, not just giving better answers.",
  },
  {
    icon: Globe2,
    title: "Global mindset",
    desc: "Languages, cultures, and the world brought into every classroom.",
  },
  {
    icon: Users,
    title: "A true community",
    desc: "Families, teachers, and students learning side-by-side.",
  },
] as const;

export const ABOUT_STATS: ReadonlyArray<readonly [string, string]> = [
  ["20+", "Years of nurturing learners"],
  ["12:1", "Student–teacher ratio"],
  ["35+", "Clubs & activities"],
  ["98%", "Parent satisfaction"],
];

export const ABOUT_CTA = {
  title: "Want to feel it for yourself?",
  body: "Visit our campus and see a school day in motion.",
  cta: { label: "Book a tour", to: "/contact" as const },
};

/* -------------------------------------------------------------------------- */
/*  ACADEMICS                                                                  */
/* -------------------------------------------------------------------------- */

export const ACADEMICS_META = {
  title: "Academics — Compassion Academy",
  description:
    "Explore our K–12 academic programs: Early Years, Primary, and Middle & High. Inquiry-led learning, small classes, lifelong skills.",
  ogTitle: "Academics at Compassion Academy",
  ogDescription: "Inquiry-led K–12 programs designed to grow with your child.",
};

export const ACADEMICS_HERO = {
  eyebrow: "Academics",
  title: "A learning journey that grows with your child.",
  subtitle:
    "From the first day of pre-K to the last day of Grade 12, our programs are built around how children actually learn — with depth, joy, and care.",
};

export const ACADEMICS_PROGRAMS = [
  {
    img: earlyImg,
    age: "Ages 3 – 5",
    title: "Early Years",
    desc: "A joyful start to school — built on play, language, and a sense of belonging. Our youngest learners explore the world through stories, music, movement, and meaningful relationships with their teachers.",
    bullets: [
      "Play-based learning",
      "Phonics & early literacy",
      "Social-emotional foundations",
      "Creative expression",
    ],
  },
  {
    img: primaryImg,
    age: "Ages 6 – 10",
    title: "Primary",
    desc: "A balanced foundation in literacy, numeracy, science, and the arts — with a curriculum that values depth over speed. Children learn to ask great questions and follow them with care.",
    bullets: [
      "Inquiry-based curriculum",
      "Strong literacy & math core",
      "Hands-on STEM",
      "Performing & visual arts",
    ],
  },
  {
    img: middleImg,
    age: "Ages 11 – 17",
    title: "Middle & High",
    desc: "Where academic rigor meets real-world projects. Students take on leadership, deepen specialisms, and graduate ready for university and beyond — with character that travels with them.",
    bullets: [
      "Project-based learning",
      "Advanced sciences & humanities",
      "Leadership & service",
      "University counselling",
    ],
  },
] as const;

export const ACADEMICS_CTA = {
  title: "Curious about the curriculum?",
  body: "Download our academic handbook or schedule a one-on-one with our admissions team.",
  primary: { label: "Apply", to: "/admissions" as const },
  secondary: { label: "Talk to us", to: "/contact" as const },
};

/* -------------------------------------------------------------------------- */
/*  STUDENT LIFE                                                               */
/* -------------------------------------------------------------------------- */

export const LIFE_META = {
  title: "Student Life — Compassion Academy",
  description:
    "Sports, arts, music, and a community that celebrates every child. Discover the everyday joy of life at Compassion Academy.",
  ogTitle: "Student Life at Compassion Academy",
  ogDescription:
    "Sports, arts, music, clubs — a campus that celebrates every child.",
};

export const LIFE_HERO = {
  eyebrow: "Student life",
  title: "The school day, full of life.",
  subtitle:
    "Beyond the classroom, our students discover passions, find their people, and learn what it means to be part of a community.",
};

export const LIFE_FEATURES = [
  {
    img: sportsImg,
    tag: "Athletics",
    title: "Sports & wellbeing",
    desc: "From football and basketball to yoga and athletics — children build strength, teamwork, and confidence through movement.",
  },
  {
    img: artsImg,
    tag: "Creativity",
    title: "Visual & performing arts",
    desc: "Painting, sculpture, drama, dance — our studios give every student space to find their creative voice.",
  },
  {
    img: musicImg,
    tag: "Music",
    title: "Music & ensembles",
    desc: "Choir, strings, band, and individual lessons. Music is woven through our school year — and our school spirit.",
  },
] as const;

export const LIFE_FEATURES_SECTION = {
  eyebrow: "Beyond the classroom",
  title: "Where curiosity finds its outlet.",
  intro:
    "Clubs, ensembles, fields, studios — a campus designed for kids to try, fail, try again, and shine.",
};

export const LIFE_EVENTS = [
  {
    title: "Annual Sports Day",
    desc: "A morning of friendly competition, cheering families, and well-earned medals.",
  },
  {
    title: "Cultural Festival",
    desc: "Food, dance, language, and stories from every culture in our community.",
  },
  {
    title: "Science Fair",
    desc: "Young inventors present projects to a full audience of parents and peers.",
  },
  {
    title: "Reading Week",
    desc: "Authors, costumes, cozy corners — a celebration of the books that move us.",
  },
  {
    title: "Service Days",
    desc: "Students give back through partnerships with local non-profits.",
  },
  {
    title: "Graduation",
    desc: "Where families celebrate the journey of every senior and what comes next.",
  },
] as const;

export const LIFE_EVENTS_SECTION = {
  eyebrow: "Year-round moments",
  title: "Events & celebrations.",
  intro:
    "Traditions that bring our community together and create memories children carry for life.",
};

export const LIFE_SUPPORTS = [
  {
    title: "Counselling",
    desc: "Caring counsellors offer guidance for emotional, social, and academic wellbeing.",
  },
  {
    title: "Learning Support",
    desc: "Personalised plans for students who benefit from extra time, scaffolding, or stretch.",
  },
  {
    title: "Parent Partnership",
    desc: "Regular conferences and open communication so families and teachers stay aligned.",
  },
] as const;

export const LIFE_SUPPORTS_SECTION = {
  eyebrow: "Support that surrounds",
  title: "Every child, every step.",
  intro:
    "Wraparound care so every learner has what they need to thrive — academically and emotionally.",
};

/* -------------------------------------------------------------------------- */
/*  ADMISSIONS                                                                 */
/* -------------------------------------------------------------------------- */

export const ADMISSIONS_META = {
  title: "Admissions — Compassion Academy",
  description:
    "Admissions are open at Compassion Academy. Learn about our process, fees, scholarships, and how to apply for the upcoming academic year.",
  ogTitle: "Admissions — Compassion Academy",
  ogDescription:
    "Apply to Compassion Academy. A simple, warm, four-step process.",
};

export const ADMISSIONS_HERO = {
  eyebrow: SITE.intake,
  title: "Begin your child's chapter with us.",
  subtitle:
    "Our admissions process is warm, simple, and designed for families. Here's everything you need to know to get started.",
  ctaPrimary: { label: "Start application", to: "/contact" as const },
  ctaSecondary: { label: "Book a tour", to: "/contact" as const },
};

export const ADMISSIONS_STEPS = [
  {
    icon: FileText,
    title: "Submit application",
    desc: "Complete our short online form. We'll respond within two working days.",
  },
  {
    icon: CalendarCheck,
    title: "Visit & meet",
    desc: "Tour our campus, meet teachers, and bring your child to our family interview.",
  },
  {
    icon: MessageSquare,
    title: "Assessment & chat",
    desc: "An age-appropriate conversation so we get to know your child's strengths.",
  },
  {
    icon: GraduationCap,
    title: "Welcome day",
    desc: "Receive your offer, complete enrollment, and meet your future classmates.",
  },
] as const;

export const ADMISSIONS_STEPS_SECTION = {
  eyebrow: "The process",
  title: "Four warm steps.",
  intro:
    "From inquiry to first day — designed to feel personal at every stage.",
};

export const ADMISSIONS_TUITION = {
  pill: "Tuition",
  title: "Transparent, all-inclusive",
  body: "Our tuition includes books, technology access, most clubs, and on-campus activities. Detailed fee schedules are shared with families during the application visit.",
  rows: ["Early Years", "Primary School", "Middle & High School"],
  rowValue: "On request",
};

export const ADMISSIONS_SCHOLARSHIPS = {
  pill: "Scholarships",
  title: "Talent shouldn't wait for resources.",
  body: "We award merit and need-based scholarships every year — supporting children whose curiosity and character deserve a place to grow.",
  cta: { label: "Ask about scholarships", to: "/contact" as const },
};

export const ADMISSIONS_FAQS = [
  {
    q: "When is the application deadline?",
    a: "We accept applications on a rolling basis throughout the year, with priority given to those received before March for the following August intake.",
  },
  {
    q: "What grades do you offer?",
    a: "We welcome children from age 3 (Pre-K) through Grade 12 across our three schools — Early Years, Primary, and Middle & High.",
  },
  {
    q: "Do you offer scholarships or fee assistance?",
    a: "Yes. We offer merit and need-based support to ensure that every promising child has the chance to learn here.",
  },
  {
    q: "Can we visit before applying?",
    a: "Absolutely — we encourage it. Book a campus tour through our contact page and we'll arrange a personal walk-through.",
  },
] as const;

export const ADMISSIONS_FAQ_SECTION = {
  eyebrow: "Helpful answers",
  title: "Frequently asked questions.",
};

/* -------------------------------------------------------------------------- */
/*  CONTACT                                                                    */
/* -------------------------------------------------------------------------- */

export const CONTACT_META = {
  title: "Contact — Compassion Academy",
  description:
    "Get in touch with Compassion Academy. Book a campus tour, ask about admissions, or simply say hello.",
  ogTitle: "Contact Compassion Academy",
  ogDescription: "Book a tour, ask about admissions, or say hello.",
};

export const CONTACT_HERO = {
  eyebrow: "Contact",
  title: "Let's start a conversation.",
  subtitle:
    "Whether you're curious about admissions, want to book a tour, or just have a question — we'd love to hear from you.",
};

export const CONTACT_FORM = {
  title: "Send us a message",
  subtitle: "We typically respond within two working days.",
  toastSuccess: "Thanks! We'll be in touch within 2 working days.",
  fields: {
    name: { label: "Your name", placeholder: "Jane Doe" },
    email: { label: "Email", placeholder: "jane@example.com" },
    phone: { label: "Phone", placeholder: "+1 (000) 000-0000" },
    grade: { label: "Child's grade", placeholder: "e.g. Grade 3 / Pre-K" },
    message: {
      label: "Message",
      placeholder: "Tell us a little about your child and how we can help…",
    },
  },
  submit: "Send message",
  submitting: "Sending…",
};

export const CONTACT_INFO = [
  { icon: MapPin, label: "Visit us", value: SITE.address },
  { icon: Phone, label: "Call us", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Office hours", value: SITE.officeHours },
] as const;

export const CONTACT_BOOK_CARD = {
  title: "Prefer a real conversation?",
  body: "Book a personal campus tour and we'll show you a school day in motion.",
  cta: "Call to schedule",
  href: SITE.phoneHref,
};
