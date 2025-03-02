const coursesData = [
  // Khóa học PRO
  {
    id: "reactjs",
    title: "ReactJS Cơ Bản",
    description: "Hiểu về ReactJS từ cơ bản đến nâng cao.",
    isPro: true,
    oldPrice: "2.500.000",
    price: "1.299.000",
    image: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu về React",
        videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
      },
      {
        id: "2",
        title: "Component trong React",
        videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
      },
      {
        id: "3",
        title: "React Hooks",
        videoUrl: "https://www.youtube.com/embed/-MlNBTSg_Ww",
      },
    ],
  },
  {
    id: "nodejs",
    title: "NodeJS Cơ Bản",
    description: "Tìm hiểu NodeJS và xây dựng API với ExpressJS.",
    isPro: true,
    oldPrice: "3.200.000",
    price: "1.499.000",
    image: "https://vncoder.vn/upload/img/course/1582267106.png",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu về NodeJS",
        videoUrl: "https://www.youtube.com/embed/TlB_eWDSMt4",
      },
      {
        id: "2",
        title: "ExpressJS và REST API",
        videoUrl: "https://www.youtube.com/embed/SccSCuHhOw0",
      },
    ],
  },
  {
    id: "typescript",
    title: "TypeScript Mastery",
    description: "Tối ưu code JavaScript với TypeScript.",
    isPro: true,
    oldPrice: "2.900.000",
    price: "1.599.000",
    image: "https://topdev.vn/blog/wp-content/uploads/2023/10/Typescript.jpg",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu về TypeScript",
        videoUrl: "https://www.youtube.com/embed/BwuLxPH8IDs",
      },
      {
        id: "2",
        title: "TypeScript nâng cao",
        videoUrl: "https://www.youtube.com/embed/d56mG7DezGs",
      },
      {
        id: "3",
        title: "Kết hợp React & TypeScript",
        videoUrl: "https://www.youtube.com/embed/Z5iWr6Srsj8",
      },
    ],
  },

  // Khóa học miễn phí
  {
    id: "html-css",
    title: "HTML & CSS Cơ Bản",
    description: "Bắt đầu với HTML, CSS và Flexbox.",
    isPro: false,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
    lessons: [
      {
        id: "1",
        title: "HTML cơ bản",
        videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
      },
      {
        id: "2",
        title: "CSS cơ bản",
        videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
      },
      {
        id: "3",
        title: "Flexbox trong CSS",
        videoUrl: "https://www.youtube.com/embed/fYq5PXgSsbE",
      },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript Cơ Bản",
    description: "Hiểu về JavaScript và lập trình web.",
    isPro: false,
    image: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
    lessons: [
      {
        id: "1",
        title: "Biến và kiểu dữ liệu",
        videoUrl: "https://www.youtube.com/embed/W6NZfCO5SIk",
      },
      {
        id: "2",
        title: "Hàm và vòng lặp",
        videoUrl: "https://www.youtube.com/embed/kJEsTjH5mVg",
      },
      {
        id: "3",
        title: "DOM Manipulation",
        videoUrl: "https://www.youtube.com/embed/y17RuWkWdn8",
      },
    ],
  },
  {
    id: "python",
    title: "Lập trình Python cơ bản",
    description: "Học Python từ số 0.",
    isPro: false,
    image:
      "https://s3-sgn09.fptcloud.com/codelearnstorage/files/thumbnails/python-co-ban_b80bca9b238b4615b94541de28af00ae.png",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu Python",
        videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
      },
      {
        id: "2",
        title: "Biến và điều kiện",
        videoUrl: "https://www.youtube.com/embed/kqtD5dpn9C8",
      },
      {
        id: "3",
        title: "Lập trình hướng đối tượng",
        videoUrl: "https://www.youtube.com/embed/MOIswrN7wSI",
      },
    ],
  },
  {
    id: "git-github",
    title: "Git & GitHub",
    description: "Quản lý mã nguồn với GitHub.",
    isPro: false,
    image:
      "https://techvccloud.mediacdn.vn/280518386289090560/2021/3/2/023-1614681588418717257234-0-0-767-1366-crop-16146815915111444794187.png",
    lessons: [
      {
        id: "1",
        title: "Git cơ bản",
        videoUrl: "https://www.youtube.com/embed/SWYqp7iY_Tc",
      },
      {
        id: "2",
        title: "Làm việc với GitHub",
        videoUrl: "https://www.youtube.com/embed/RGOj5yH7evk",
      },
    ],
  },
  {
    id: "tailwindcss",
    title: "Tailwind CSS",
    description: "Học Tailwind CSS để tối ưu giao diện.",
    isPro: false,
    image:
      "https://200lab.io/blog/_next/image?url=https%3A%2F%2Fstatics.cdn.200lab.io%2F2024%2F11%2Fhuong-dan-cai-dat-tailwind-css-co-ban.png&w=3840&q=75",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu về Tailwind",
        videoUrl: "https://www.youtube.com/embed/dFgzHOX84xQ",
      },
      {
        id: "2",
        title: "Responsive với Tailwind",
        videoUrl: "https://www.youtube.com/embed/txZq7Laz7_4",
      },
    ],
  },
  {
    id: "figma",
    title: "Thiết kế UI/UX với Figma",
    description: "Thiết kế giao diện chuyên nghiệp.",
    isPro: false,
    image:
      "https://d1j8r0kxyu9tj8.cloudfront.net/files/GtLEzoJ18BMO0D3mb9VH3e44zLHLyHQ1WQ2anZLJ.jpg",
    lessons: [
      {
        id: "1",
        title: "Giới thiệu về Figma",
        videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
      },
      {
        id: "2",
        title: "Tạo UI Design",
        videoUrl: "https://www.youtube.com/embed/FTFaQWZBqQ8",
      },
    ],
  },
  {
    id: "docker",
    title: "Docker & Kubernetes",
    description: "Quản lý container & microservices.",
    isPro: false,
    image:
      "https://athena.edu.vn/content/uploads/2021/06/khoa-hoc-docker-can-ban.jpg",
    lessons: [
      {
        id: "1",
        title: "Docker cơ bản",
        videoUrl: "https://www.youtube.com/embed/fqMOX6JJhGo",
      },
      {
        id: "2",
        title: "Làm việc với Docker Compose",
        videoUrl: "https://www.youtube.com/embed/Qw9zlE3t8Ko",
      },
    ],
  },
];

export default coursesData;
