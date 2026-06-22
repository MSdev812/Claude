// 이력서 데이터
const resumeData = {
  profile: {
    name: "김개발",
    title: "Full-Stack Developer",
    bio: "사용자 중심의 서비스를 만드는 것을 좋아하는 2년차 웹 개발자입니다. 빠르게 배우고 팀과 함께 성장하는 것을 즐깁니다.",
    email: "dev@example.com",
    phone: "010-1234-5678",
    location: "서울, 대한민국",
    sns: [
      { platform: "github",    label: "GitHub",    url: "https://github.com/username",              icon: "github" },
      { platform: "youtube",   label: "YouTube",   url: "https://youtube.com/@username",            icon: "youtube" },
      { platform: "instagram", label: "Instagram", url: "https://instagram.com/username",           icon: "instagram" },
      { platform: "linkedin",  label: "LinkedIn",  url: "https://linkedin.com/in/username",         icon: "linkedin" },
      { platform: "twitter",   label: "Twitter",   url: "https://twitter.com/username",             icon: "twitter" }
    ]
  },

  skills: [
    { category: "Language",  items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"] },
    { category: "Frontend",  items: ["React", "Vue.js", "Tailwind CSS", "Sass"] },
    { category: "Backend",   items: ["Node.js", "Express", "MongoDB", "MySQL"] },
    { category: "Tools",     items: ["Git", "GitHub", "VS Code", "Figma", "Docker"] }
  ],

  experience: [
    {
      company: "(주)테크스타트",
      position: "프론트엔드 개발자",
      duration: "2023.03 ~ 현재",
      description: [
        "React 기반 관리자 대시보드 개발 및 유지보수",
        "Tailwind CSS 도입으로 스타일 작업 시간 40% 단축",
        "웹 접근성 개선 작업 (WCAG 2.1 AA 기준 대응)"
      ]
    },
    {
      company: "(주)웹에이전시",
      position: "웹 개발 인턴",
      duration: "2022.07 ~ 2023.02",
      description: [
        "기업 홈페이지 퍼블리싱 및 반응형 작업",
        "WordPress 기반 CMS 커스터마이징",
        "고객사 20여 곳의 유지보수 업무 지원"
      ]
    }
  ],

  projects: [
    {
      title: "ShopEasy — 온라인 쇼핑몰",
      description: "React와 Node.js로 구현한 풀스택 커머스 플랫폼. 상품 등록, 장바구니, 결제 플로우를 포함합니다.",
      skills: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/username/shopeasy",
      demo: "https://shopeasy.vercel.app"
    },
    {
      title: "DevLog — 개발자 블로그",
      description: "Markdown 기반 정적 블로그. 태그 필터링, 다크모드, 검색 기능을 지원합니다.",
      skills: ["Vue.js", "CSS3", "JavaScript"],
      github: "https://github.com/username/devlog",
      demo: "https://devlog.netlify.app"
    },
    {
      title: "WeatherNow — 날씨 앱",
      description: "OpenWeatherMap API를 활용한 실시간 날씨 조회 앱. 현재 위치 자동 감지 기능을 제공합니다.",
      skills: ["JavaScript", "REST API", "CSS3"],
      github: "https://github.com/username/weather-now",
      demo: ""
    }
  ],

  education: [
    {
      school: "한국공과대학교",
      degree: "컴퓨터공학 학사",
      graduation: "2022.02",
      note: "졸업 프로젝트: 실시간 협업 메모 앱 개발"
    }
  ]
};
