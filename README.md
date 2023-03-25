# 원티드 프리온보딩 인턴쉽 2주차 과제

> [Travel Tech 스타트업 라이크어로컬 기업](https://likealocal.co.kr/) 과제 입니다.

## [🔗 결과 링크](https://pre-onboarding-9th-2-8.netlify.app/)

## 📝 과제 목적

- 여행 상품 리스트를 보고 장바구니에 저장할 수 있는 사이트 구현
- Best Practice 만들어 제출하기

## 📷 DEMO

#### 예약하기 기능

![](https://velog.velcdn.com/images/hyorimm/post/6fa2f2c5-d6ae-4f02-9855-c60bb839f007/image.gif)

#### 다중 필터링 기능

![](https://velog.velcdn.com/images/hyorimm/post/95ec840f-49bc-4885-aed5-77988cd6b4e9/image.gif)

#### 장바구니 기능

![](https://velog.velcdn.com/images/hyorimm/post/bad2bf0e-01f8-4927-a69c-a284c8dc62b1/image.gif)



## 🚀 기능

### 메인 페이지

- 여행 상품 정보 (Mock JSON) 를 활용하여 여행 상품 정보 노출
- 예약 버튼 클릭 시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터를 저장
- 여행 상품 정보 클릭 시 모달창을 통해 여행 상품을 자세히 안내
- 여행 상품 조회 시 필터 기능 (가격, 지역, 다중 필터)

### 장바구니 페이지

- 장바구니 내부 여행 상품 조회
- 장바구니 내부 여행 상품 삭제
- 장바구니 내부 여행 상품의 구매 수량 변경
- 장바구니 내부 여행 상품의 총 결제액, 총 상품 개수를 계산하여 표시

## ✨ 기술 스택

- React
- Typescript
- redux-toolkit
- axios
- react-router-dom
- chakra-ui
- emotion
- craco → webpack 설정을 확장하기 위해 사용하였습니다. Path Alias를 사용합니다

## ✅ 과제 진행 방법

[기능 구현 목록](./REQUIREMENTS.md)을 작성 후 아래와 같이 분류하였습니다.

1. **main page 구현**
2. **상품 필터 기능 구현**
3. **reservations page 구현**

분류에 따라 팀원 개개인이 과제를 수행했습니다. 리뷰 시간을 정하여 해당 시간에 PR에서 코드리뷰를 했습니다. 투표를 통해 Best Practice를 선정한 후, 다른 과제 중 좋았던 구현들을 의논하여 추가하였습니다.  [이슈](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues)와 [PR메시지](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pulls)를 활용하여 문서화하였습니다.

## 🌟 Best Practice Process

**Mar 8, 2023**  　|　[main page 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/12) <br />
**Mar 9, 2023**  　|　[여행 상품 filter 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/18) <br />
**Mar 10, 2023**　 |　[reservations page 구현](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/pull/29) <br />

## 🐞 이슈 및 버그

**Mar 7, 2023**  　|　[상태 관리 툴 사용 유무](https://github.com/Wanted-PreOnboarding-Team-8/pre-onboarding-9th-2-8/issues/7)

## 👨‍💻 팀원 소개

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/67201870?v=4"  alt="김상연님"/><br />
        <br/>
        <a href="https://github.com/greyHairChooseLife">
          <img src="https://img.shields.io/badge/김상연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90181028?v=4'  alt="박지헌님"/><br />
        <br/>
        <a href="https://github.com/jiheon788">
          <img src="https://img.shields.io/badge/박지헌-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106523012?v=4"  alt="복준우님"/><br />
       <br/>
        <a href="https://github.com/bokjunwoo">
          <img src="https://img.shields.io/badge/복준우-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/48446896?v=4"  alt="양소연님"/><br/>
                <br/>
        <a href="https://github.com/Noeyso">
          <img src="https://img.shields.io/badge/양소연-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/62588402?v=4"  alt="정찬욱님"/><br />
       <br/>
        <a href="https://github.com/raw20">
          <img src="https://img.shields.io/badge/정찬욱-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림님"/><br/>
       <br/>
        <a href="https://github.com/hyorimcho">
          <img src="https://img.shields.io/badge/팀장 : 조효림-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/82688516?v=4"  alt="최정훈님"/><br/>
                <br/>
        <a href="https://github.com/jhoon9494">
          <img src="https://img.shields.io/badge/최정훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/17325845?v=4"  alt="한호수님"/><br/>
       <br/>
        <a href="https://github.com/tnghgks">
          <img src="https://img.shields.io/badge/한호수-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>

## ⚙️ 설치 및 실행 가이드

#### Install

```
npm i
```

#### Build

```
npm run build
```

#### Start

```
npm start
```


## 🗂️ 파일 구조

```
src
 ┣ api
 ┃ ┗ product
 ┣ components
 ┃ ┣ main
 ┃ ┗ reservations
 ┣ constants
 ┣ interface
 ┣ lib
 ┃ ┣ hooks
 ┃ ┗ utils
 ┣ pages
 ┗ store
   ┗ slices

```
