import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png"
import project7 from "../assets/projects/project-10.png"
import project12 from "../assets/projects/sync.png"

export const HERO_CONTENT = `Dynamic professional specializing in software and web development, with proficiency in various programming languages, frameworks, and web technologies. Aiming to utilize technical skills and strong problem-solving capabilities to contribute to team success in a collaborative and innovative setting`;

export const ABOUT_TEXT = `Full stack development professional with hands-on experience in real-time MERN stack projects. Proficient in MongoDB, Express.js, React.js, and Node.js, with a strong understanding of web development, database management, and API integration. Successfully developed and implemented multi-tenancy SaaS applications, integrated third-party APIs, and built robust authentication mechanisms. Demonstrated ability to adapt quickly to new technologies and work effectively in team environments.`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Web Developer Intern",
    company: "Tech vaseegrah",
    description: `I developed and implemented multi-tenancy using the F3 engine for a WooCommerce site, managing functionalities such as printing, holding, tracking, productivity, and dashboard features. Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), I built and maintained robust web applications, and integrated Firebase for backend services and real-time data synchronization. Additionally, I designed and managed backend APIs to support various functionalities, and implemented the WhatsApp API to send order status notifications and updates to customers, enhancing communication and customer satisfaction. Furthermore, I developed a recommendation engine module to improve user experience and site functionality by providing personalized suggestions.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"]
  },
   {
    year: "2025 - Present",
    role: "Apprenticeship",
    company: "Integrated India",
    description: `I work as an IT Developer at Integrated Enterprises (India) Pvt. Ltd., where I build and maintain internal web applications using HTML, CSS, JavaScript, and C# (.NET). My role involves designing and optimizing SQL databases, creating responsive and user-friendly interfaces, and ensuring secure, reliable software solutions tailored for financial services. I collaborate closely with finance teams to understand business needs, provide technical support, and implement scalable IT solutions that streamline operations and enhance productivity.`,
   technologies: ["HTML", "CSS", "JavaScript", "SQL", "C# (.NET)"]
  }
  
  
];

export const PROJECTS = [
  {
    title:"F3 Engine (Multi Tendancy SAAS Application)",
    image: project5,
    description:"The F3 Engine (SaaS application) reduces operational costs by 50% and streamlines processes by consolidating multiple functions into a single platform. It integrates billing, tracking, holding, and dashboard features through API integration to enhance efficiency for both customers and business owners. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and third-party API integrations, the F3 Engine delivers a seamless, scalable solution, optimizing workflows and providing real-time insights for improved decision-making.",
    technologies:["React JS","Express JS","Node JS","MongoDB","API Integration"],
    Link:"https://f3engine.com/login"


  },
  {
    title: "Real Estate",
    image: project2,
    description:
      "I developed a full-stack real estate application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Auth0 authentication, achieving 100% secure user login and role-based access control (RBAC). Property owners can add new listings with 95% data accuracy, while buyers can browse and purchase properties with a 40% faster workflow. The responsive React.js front-end ensures 99% compatibility across devices, while optimized backend APIs for authentication, CRUD operations, and transactions improved performance by 35%. This project demonstrates expertise in full-stack development, secure authentication, and efficient API design",
    technologies: ["React JS","Node JS","Express Js","Mongo DB","Tailwind CSS"],
    Link:"https://frontend-realestate.pages.dev/"
  },
  {
    title: "Boutique Store",
    image: project7,
    description:
      "Developed and deployed a full-stack boutique store using the MERN stack (MongoDB, Express.js, React.js, Node.js), now actively used by a client. The platform offers a seamless shopping experience, enabling customers to browse and purchase fashion items 40% faster, while store admins manage inventory and orders with 98% data accuracy. The responsive React.js front-end ensures 99% compatibility across devices, while optimized backend APIs for authentication, product management, and transactions improve performance by 35%. This project demonstrates expertise in full-stack development, secure authentication, and high-performance API design, delivering a smooth and scalable e-commerce solution.",
    technologies: ["Tailwind CSS","React JS","Node JS","Express Js","Mongo DB"],
    Link:"https://botique-frontend.onrender.com"
  },
  {
    title: "Sync-Inevntory",
    image: project12,
    description:
      "Developed a robust **inventory synchronization system** integrating **WooCommerce and Shopify APIs** within a **MERN stack** application. This system ensures **real-time stock updates** across multiple platforms, reducing discrepancies by **95%** and preventing overselling. Automated sync processes update product quantities, pricing, and availability **40% faster**, enhancing operational efficiency for e-commerce businesses. The optimized backend handles **bulk product updates seamlessly**, while the secure API architecture ensures **data integrity and consistency**. This solution showcases expertise in **third-party API integration, real-time data synchronization, and scalable e-commerce solutions**.",
    technologies: ["React JS","Node JS","Express Js","Mongo DB"," Woocommerce API","Shopify API"],
   
  }
  
  
];

export const CONTACT = {
  address: "kurunji nagar,Thanjavur,Tamilnadu",
  phoneNo: "8056455767",
  email: "keerthivasan903@gmail.com",
};
