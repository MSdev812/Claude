# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**나의 버킷 리스트**: 인생의 목표를 기록하고 관리하는 개인 생산성 웹 애플리케이션

- **번들링/빌드 과정 없음**: 순수 HTML/CSS/JavaScript 단일 페이지 앱
- **외부 의존성**: Tailwind CSS CDN만 사용
- **데이터 저장소**: 브라우저 LocalStorage (서버 불필요)
- **실행 방법**: 브라우저에서 `index.html` 직접 열기

## 실행 및 개발

```bash
# 1. 브라우저에서 직접 열기 (가장 간단)
start index.html   # Windows
open index.html    # macOS

# 2. 로컬 서버로 실행 (권장 - CORS 문제 방지)
python -m http.server 8000
# http://localhost:8000 접속

# 3. VS Code Live Server 사용
# index.html 우클릭 → "Open with Live Server"
```

## 아키텍처

### 3계층 구조

```
┌─────────────────────────────────────┐
│  View (index.html)                  │
│  - HTML 마크업 + Tailwind CSS       │
│  - 통계, 폼, 리스트, 모달 UI       │
└────────────┬────────────────────────┘
             │ DOM 이벤트
┌────────────▼────────────────────────┐
│  Controller (app.js - BucketListApp)│
│  - 이벤트 핸들링 (add, edit, delete)│
│  - 렌더링 로직                      │
│  - 필터링 상태 관리                 │
└────────────┬────────────────────────┘
             │ 데이터 CRUD 호출
┌────────────▼────────────────────────┐
│  Model (storage.js - BucketStorage) │
│  - LocalStorage I/O                 │
│  - 데이터 필터링 및 통계 계산       │
└─────────────────────────────────────┘
```

### 데이터 흐름

**항목 추가**:
1. 사용자가 입력 필드에 텍스트 입력 → `handleAdd()` 호출
2. `BucketStorage.addItem()` → LocalStorage 저장
3. `render()` 호출 → DOM 업데이트

**완료 상태 변경**:
- 체크박스 클릭 → `handleToggle(id)` → `toggleComplete()` → `completedAt` 자동 기록

**필터링**:
- 필터 버튼 클릭 → `handleFilter()` → `currentFilter` 변경 → `getFilteredList()` 호출

## 핵심 모듈

### `storage.js` - BucketStorage 객체

**책임**: 데이터의 CRUD, 필터링, 통계

**주요 메서드**:
- `load()` / `save(bucketList)` - LocalStorage I/O
- `addItem(title)` - 새 항목 추가 (timestamp 기반 ID 자동 생성)
- `updateItem(id, newTitle)` - 제목 수정
- `deleteItem(id)` - 항목 삭제
- `toggleComplete(id)` - 완료/미완료 상태 토글 (completedAt 자동 갱신)
- `getStats()` - 전체/완료/진행중 개수 및 달성률(%) 계산
- `getFilteredList(filter)` - 'all' | 'active' | 'completed' 필터링

**데이터 구조**:
```javascript
{
  id: "1730880000000",        // Date.now().toString()
  title: "세계 일주하기",
  completed: false,
  createdAt: "2025-11-06",    // ISO 문자열
  completedAt: null            // ISO 문자열 또는 null
}
```

### `app.js` - BucketListApp 클래스

**책임**: UI 이벤트 처리, 렌더링, 상태 관리

**주요 메서드**:
- `init()` - 앱 초기화 (캐싱 + 이벤트 바인딩 + 렌더)
- `bindEvents()` - 폼/필터/모달 이벤트 등록
- `handleAdd()`, `handleDelete()`, `handleToggle()` - CRUD 이벤트
- `handleFilter()` - 필터 버튼 클릭 (currentFilter 업데이트)
- `openEditModal()` / `closeEditModal()` - 모달 표시/숨김
- `handleEditSubmit()` - 수정 폼 제출
- `render()` - 전체 렌더링 (통계 + 리스트 DOM 생성)
- `createBucketItemHTML()` - 각 항목의 HTML 문자열 생성
- `escapeHtml()` - XSS 방지 (HTML 특수문자 이스케이프)

**상태**:
- `currentFilter` - 현재 활성 필터 ('all', 'active', 'completed')
- `editingId` - 수정 중인 항목의 ID

### `index.html` - 뷰

**구조**:
1. **통계 영역** - 4개 박스 (전체, 완료, 진행중, 달성률)
2. **입력 폼** - 텍스트 필드 + 추가 버튼
3. **필터 버튼** - 3개 필터 (전체/진행중/완료)
4. **리스트 컨테이너** - 동적으로 생성되는 항목들 (체크박스 + 제목 + 수정/삭제 버튼)
5. **빈 상태 메시지** - 리스트가 없을 때 표시
6. **수정 모달** - 항목 수정용 대화상자

모든 스타일은 **Tailwind CSS (CDN)** 사용, 커스텀 스타일은 `styles.css`에서 추가.

### `styles.css` - 커스텀 스타일

**주요 내용**:
- `.filter-btn.active` - 활성 필터 버튼 스타일
- `.bucket-item` - 항목의 `slideIn` 애니메이션
- 모달의 `scaleIn` 애니메이션
- 모바일 반응형 조정 (640px 이하)
- 다크 모드 지원 (`prefers-color-scheme: dark`)

## 코딩 가이드

### 데이터 추가/수정 시
- 새 필드를 추가하려면 **두 곳 모두** 수정:
  1. `BucketStorage.addItem()` - 기본값 설정
  2. `createBucketItemHTML()` - 렌더링 로직
  3. (선택) `updateStats()` - 통계에 포함되는 경우

### 이벤트 추가 시
- `bindEvents()`에 이벤트 리스너 등록
- 핸들러 메서드는 `handle*` 또는 `on*` 접두사 사용
- 필요시 `render()` 호출하여 DOM 업데이트

### 렌더링 최적화 유의사항
- `render()`는 전체 리스트를 다시 생성 (변경 시 호출 필수)
- 대규모 리스트의 경우 성능 저하 가능 (현재는 문제없음)

### XSS 방지
- 사용자 입력은 항상 `escapeHtml()`로 처리
- onclick 핸들러에서도 문자열 이스케이프 필요: `.replace(/'/g, "\\'")`

## 향후 확장 포인트

현재 README에 제시된 개선사항:
- 카테고리/태그
- 항목 이미지 추가
- 상세 메모
- 목표 날짜 설정
- 우선순위
- 데이터 내보내기/가져오기 (JSON)
- 드래그 앤 드롭 정렬

**확장 시 주의**: 새 필드는 데이터 모델, 저장소 로직, UI 렌더링 세 곳 모두 영향.

## 브라우저 호환성

- LocalStorage 지원 모든 모던 브라우저 (Chrome, Firefox, Safari, Edge)
- IE11 미지원
