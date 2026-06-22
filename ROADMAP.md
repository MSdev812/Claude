# 개발자 웹 이력서 프로젝트 ROADMAP

## 📋 프로젝트 개요

HTML, CSS, JavaScript, Tailwind CSS를 활용한 **반응형 개발자 웹 이력서** 제작 프로젝트입니다.  
순수 프론트엔드 기술만으로 구현되며, 별도의 서버나 빌드 도구 없이 브라우저에서 직접 실행 가능합니다.

---

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 반응형 디자인
- **Tailwind CSS**: 유틸리티 CSS 프레임워크
- **JavaScript (Vanilla)**: 인터랙션 & 다이나믹 기능

---

## 📁 파일 구조

```
resume-project/
├── index.html           # 메인 이력서 파일
├── styles/
│   └── tailwind.css     # Tailwind 커스텀 스타일
├── scripts/
│   ├── app.js           # 메인 애플리케이션 로직
│   └── data.js          # 이력서 데이터 (JSON 포맷)
├── assets/
│   ├── images/          # 프로필 이미지, 아이콘 등
│   └── icons/           # SVG 또는 폰트 아이콘
└── ROADMAP.md           # 이 파일
```

---

## 🎯 주요 기능

### Phase 1: 기본 구조 (필수)
- [ ] **프로필 섹션**
  - 이름, 직책, 한줄 소개
  - 프로필 이미지
  - 연락처 정보 (이메일, 전화, 깃허브, 링크드인)

- [ ] **소개 섹션**
  - 자기소개 (About)
  - 핵심 역량/스킬 요약

- [ ] **기술 스택 섹션**
  - 언어 (JavaScript, Python 등)
  - 프레임워크 (React, Vue 등)
  - 도구 & 기타 (Git, Docker 등)
  - 진행도 바 또는 레벨 표시

### Phase 2: 상세 정보 (필수)
- [ ] **경력 섹션**
  - 회사명, 직급, 근무 기간
  - 담당 업무 및 성과

- [ ] **프로젝트 섹션**
  - 프로젝트명, 기술스택, 설명
  - 깃허브 링크, 라이브 데모 링크
  - 주요 성과/기여도

- [ ] **학력 섹션**
  - 학교명, 학위, 졸업 연도
  - 전공 및 주요 과목

### Phase 3: 인터랙티브 기능 (선택)
- [ ] **다크모드 토글**
  - 라이트/다크 테마 전환
  - localStorage에 설정 저장

- [ ] **스무스 스크롤**
  - 네비게이션 앵커 링크
  - 자연스러운 페이지 이동

- [ ] **필터링**
  - 기술 스택 필터 (클릭하면 관련 프로젝트만 표시)

- [ ] **섹션별 애니메이션**
  - Scroll-in 효과
  - Hover 인터랙션

### Phase 4: 고급 기능 (선택)
- [ ] **PDF 다운로드**
  - 이력서를 PDF로 다운로드 기능

- [ ] **반응형 설계**
  - 모바일 (320px+)
  - 태블릿 (768px+)
  - 데스크톱 (1024px+)

---

## 📊 샘플 이력서 데이터 구조

```javascript
// scripts/data.js 예시
const resumeData = {
  profile: {
    name: "김개발",
    title: "Full-Stack Developer",
    bio: "웹 개발에 열정이 있는 개발자입니다.",
    email: "dev@example.com",
    phone: "010-1234-5678",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username"
  },
  skills: [
    { category: "Language", items: ["JavaScript", "Python", "HTML/CSS"] },
    { category: "Frontend", items: ["React", "Vue", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code"] }
  ],
  experience: [
    {
      company: "OO 회사",
      position: "웹 개발자",
      duration: "2022.03 ~ 2024.02",
      description: ["프로젝트 A 개발", "성능 최적화 작업"]
    }
  ],
  projects: [
    {
      title: "프로젝트명",
      description: "프로젝트 설명",
      skills: ["React", "Node.js"],
      github: "https://github.com/...",
      demo: "https://..."
    }
  ],
  education: [
    {
      school: "OO 대학교",
      degree: "컴퓨터공학 학사",
      graduation: "2022.02"
    }
  ]
};
```

---

## 🚀 개발 단계

### Week 1: 레이아웃 & 스타일
1. HTML 기본 구조 작성
2. Tailwind CSS를 이용한 반응형 레이아웃
3. 색상/폰트 테마 설정

### Week 2: 컨텐츠 통합
1. 샘플 데이터 추가
2. 각 섹션별 마크업 작성
3. 스타일 완성

### Week 3: 인터랙션
1. 스크롤 애니메이션
2. 다크모드 토글
3. 모바일 반응형 테스트

### Week 4: 배포 & 최적화
1. 성능 최적화 (이미지 압축 등)
2. SEO 메타 태그 추가
3. GitHub Pages 배포

---

## 📝 체크리스트

### 필수 완료
- [ ] HTML 구조 작성
- [ ] Tailwind 레이아웃 완성
- [ ] 이력서 데이터 입력
- [ ] 모바일 반응형 테스트
- [ ] 배포 (GitHub Pages)

### 추가 개선
- [ ] 다크모드 기능
- [ ] 애니메이션 효과
- [ ] PDF 다운로드
- [ ] 방문자 분석 (Google Analytics)

---

## 💡 개발 팁

1. **Tailwind CSS 활용**: `@apply` 디렉티브로 반복되는 스타일 통합
2. **접근성**: `aria-label`, `alt` 속성 필수 추가
3. **성능**: 이미지 최적화, 불필요한 JS 제거
4. **SEO**: Open Graph 메타 태그, Sitemap 추가 고려

---

## 🔗 참고 자료

- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web Dev 성능 최적화](https://web.dev)

---

**작성일**: 2026-06-19  
**최근 수정**: 2026-06-19
