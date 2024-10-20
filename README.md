
# 오픈 마켓 서비스

**프로젝트 저장소:** [Open-Market-Service](https://github.com/ddhsl/Open-Market-Service.git)

## 📖 목차
- [소개하기]
- [사용 방법]
- [주요 기능]
- [개발환경 및 배포 url]
- [API 문서]
- [개발하며 느낀점]
  

## 🌟 소개하기
오픈 마켓 서비스는 상품 정보를 조회하고, 판매자와 구매자 간의 거래를 중개하는 간단한 오픈마켓 서비스입니다.

이 프로젝트는 클라이언트 측에서 API를 통해 데이터를 받아와 사용자에게 상품 정보를 제공하고, 로그인 및 회원가입 기능을 지원합니다.


## 🚀 사용 방법
1. **구매자/판매자로 로그인:**
   - 구매자: 
     - ID: `buyer1` | PW: `weniv1234`
     - ID: `buyer2` | PW: `weniv1234`
     - ID: `buyer3` | PW: `weniv1234`
   - 판매자:
     - ID: `seller1` | PW: `weniv1234`
     - ID: `seller2` | PW: `weniv1234`
     - ID: `seller3` | PW: `weniv1234`
     
2. **상품 목록 보기:**
   - 메인 페이지에서 상품 목록을 표시합니다.
  
3. **상품 수량 추가하기 :**
   - 상품 상세 페이지에서 상품의 수량을 추가할 수 있습니다.

5. **로그인 모달:**
   - 로그인 대화창은 비회원 상태에서 '쇼핑카트 아이콘' 또는 '바로 구매' 버튼을 클릭했을 때 표시됩니다.

6. **로그아웃:**
   - 사용자 토큰을 클라이언트 측에서 삭제하여 로그아웃을 수행할 수 있습니다.


## ✨ 주요 기능
- **사용자 인증**: 로그인 모달을 통해 구매자와 판매자 로그인을 지원합니다.
- **상품 관리**: API의 `/products/` 엔드포인트를 통해 상품 목록을 가져와 화면에 표시합니다.
- **커스텀 입력 검증**:
  - 사용자 ID와 비밀번호의 유효성을 커스텀 에러 메시지로 검증하고, 올바른 입력 형식을 보장합니다.
  - 영어 대소문자 및 숫자만을 허용하는 ID 검증을 지원합니다.
- **커스텀 드롭다운 메뉴**: HTML과 CSS를 활용하여 드롭다운 메뉴를 직접 구현하여 스타일링 유연성을 높였습니다.


## 🖇️ 개발환경 및 배포 url
- **개발환경**
  - 언어 : JavaScript, HTML, CSS
  - API 서버 : https://estapi.openmarket.weniv.co.kr/
  - 개발 도구 : VSCode
  - 버전 관리 : Git, GitHub

- **배포 url**
  - https://ddhsl.github.io/Open-Market-Service/
  

## 📑 API 문서
- **기본 URL**: `https://estapi.openmarket.weniv.co.kr/`
- **엔드포인트**:
  - `POST /login/`: 사용자를 인증하고 토큰을 반환합니다.
  - `POST /signup/`: 새로운 사용자를 등록합니다.


## ❗️개발하며 느낀점
처음에는 API를 구현하는데 어려움을 겪었지만, 프로젝트를 진행할수록 프론트엔드와 백엔드를 통합하며 데이터 흐름을 이해하게 되었고, 

API 설계와 데이터 구조의 중요성을 느꼈습니다. 특히, 클라이언트와 서버 간의 원활한 데이터 전송의 중요성을 깨달았습니다.

코드와 기능에 대한 문서화 작업을 통해, 나중에 다른 개발자들이 이해하기 쉽도록 만드는 것이 얼마나 중요한지를 느끼게 되었으며,

또한 프로젝트 중 여러 가지 버그와 문제에 직면하면서 문제를 분석하고 해결하는 능력이 크게 향상되었습니다. 

