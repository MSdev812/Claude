# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

---

## 프로젝트 개요

HTML, CSS, JavaScript, Tailwind CSS를 활용한 **반응형 개발자 웹 이력서** 프로젝트입니다.

- 빌드 도구, 패키지 매니저 없는 순수 프론트엔드
- 브라우저에서 직접 실행 가능
- Tailwind CSS CDN으로 스타일링

---

## 실행 방법

### Windows
```bash
start index.html   # 기본 브라우저에서 열기
```

### macOS / Linux
```bash
open index.html    # 브라우저에서 열기
```

Tailwind CSS는 CDN으로 제공되므로 별도 빌드 과정이 필요하지 않습니다.

---

## 프로젝트 구조

```
resume-project/
├── index.html              # 메인 이력서 파일
├── scripts/
│   ├── app.js              # 메인 애플리케이션 로직
│   └── data.js             # 이력서 데이터 (JSON)
├── styles/
│   └── custom.css          # 커스텀 CSS (필요시)
├── assets/
│   ├── images/             # 프로필 이미지, 스크린샷
│   └── icons/              # SVG 또는 폰트 아이콘
├── ROADMAP.md              # 개발 로드맵
└── CLAUDE.md               # 이 파일
```

---

## 아키텍처

### 핵심 원칙
- **단일 진입점**: `index.html`이 유일한 HTML 파일
- **데이터와 뷰 분리**: `scripts/data.js`에서 이력서 데이터 관리, `scripts/app.js`에서 DOM 렌더링
- **Tailwind 활용**: 유틸리티 클래스로 반응형 디자인 구현

### 데이터 흐름
1. `data.js`에서 `resumeData` 객체 정의
2. `app.js`의 `renderResume()` 함수가 데이터를 읽어 DOM 생성
3. `index.html`의 JavaScript 실행 시 렌더링 수행

### 주요 DOM 구조
```html
<body>
  <!-- 네비게이션 -->
  <nav id="navbar">...</nav>
  
  <!-- 메인 컨텐츠 -->
  <main>
    <section id="profile">...</section>
    <section id="about">...</section>
    <section id="skills">...</section>
    <section id="experience">...</section>
    <section id="projects">...</section>
    <section id="education">...</section>
  </main>
  
  <!-- 푸터 -->
  <footer>...</footer>
</body>
```

---

## 개발 체크리스트

기본 구현 (필수):
- [ ] HTML 마크업 (시맨틱 태그 사용)
- [ ] Tailwind CSS 기본 스타일 적용
- [ ] `data.js`에 샘플 데이터 입력
- [ ] `app.js`로 동적 렌더링 구현
- [ ] 모바일 반응형 테스트 (320px, 768px, 1024px+)

고급 기능 (선택):
- [ ] 다크모드 토글 + localStorage 저장
- [ ] 스크롤 인 애니메이션
- [ ] 기술 스택 필터링
- [ ] PDF 다운로드 기능

---

## 자주 사용하는 코드 패턴

### 이력서 데이터 추가
`scripts/data.js`의 `resumeData` 객체에 필드 추가:

```javascript
const resumeData = {
  profile: { /* 프로필 정보 */ },
  skills: [ /* 기술 스택 */ ],
  experience: [ /* 경력 */ ],
  projects: [ /* 프로젝트 */ ],
  education: [ /* 학력 */ ]
};
```

### DOM 렌더링
`scripts/app.js`에서:

```javascript
function renderResume() {
  // resumeData를 읽어 HTML 문자열로 변환
  // document.getElementById()로 타겟 요소 선택
  // innerHTML에 렌더링된 HTML 할당
}

document.addEventListener('DOMContentLoaded', renderResume);
```

### Tailwind 반응형 클래스
```html
<!-- 모바일에서는 1단, 태블릿에서 2단, 데스크톱에서 3단 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  ...
</div>
```

---

## 성능 & SEO 체크리스트

- [ ] 이미지 최적화 (JPEG/WebP, 적절한 크기)
- [ ] `<title>`, `<meta name="description">` 작성
- [ ] Open Graph 메타 태그 추가 (SNS 공유용)
- [ ] `<link rel="canonical">` 추가
- [ ] 접근성: `alt` 텍스트, `aria-label` 속성 포함

---

## 관련 문서

- [ROADMAP.md](./ROADMAP.md) - 4주 개발 계획 및 상세 기능 목록
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
