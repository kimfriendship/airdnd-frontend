# airdnd

![airbnb readme](https://user-images.githubusercontent.com/60292183/98274049-51287380-1fd6-11eb-8c92-0cbfc4345324.gif)


2020.08.03부터 2020.09.11까지 진행한 airbnb 클론 코딩 프로젝트입니다. 

<br>

## 구성원

[Front-end](https://github.com/DEVengersAssemble/airdnd-frontend): 김우정, 주한슬, 이하은, 김태진  
[Back-end](https://github.com/DEVengersAssemble/airdnd-backend): 윤우성, 이유진, 정재은, 최미래

<br>

## 프론트엔드 핵심 목표

- 프론트엔드와 백엔드 개발자들이 협업하여 프로젝트 진행
- 코딩 작업에 앞서 기능명세서, 데이터구조, 컴포넌트 분리 등 회의 및 기록 ([Figma](https://www.figma.com/file/jRtiFrdpJW6ebdKB4ozmYS/Airbnb?node-id=3%3A92))
- Redux를 사용하여 전역에서 상태를 관리하고, redux-thunk로 비동기 작업을 처리
- styled-components로 스타일링하여 컴포넌트의 재사용성 증가
- 3가지 뷰포트 사이즈로 반응형 구현
- 프레젠테이션 컴포넌트와 컨테이너 컴포넌트를 분리

<br>

## 페이지별 기능

### 숙소 검색 페이지

- Redux를 통해 필터 조건, 페이지, 지도 범위 등 검색 페이지와 관련된 모든 state 관리
- 검색 페이지에서 검색 조건에 맞는 데이터를 fetch하여 숙소 리스트 렌더
- 숙소 리스트에 있는 숙소들을 지도 상에 각각의 위도 경도에 맞게 숙소 가격 마커 렌더
- 지도 상에서 가격 마커 클릭시 숙소 정보를 모달로 보여주는 기능
- 지도 위치를 옮길 때마다 지도 범위에 맞는 데이터를 새로 fetch 하도록 구현
- 페이지 이동시 새로운 데이터 fetch 하여 렌더하는 pagenation 기능
- 숙소리스트의 각 숙소에 마우스가 hover 되면 지도에서 hover 된 숙소의 마커 스타일 변경
- 새로운 북마크 리스트 추가 및 북마크 설정/해제 기능 구현
- 숙소 이미지를 보여주는 infinity carousel을 반응형으로 구현
- 검색 결과를 리스트형/카드형으로 선택적으로 볼 수 있는 기능 구현
- 검색 조건을 query로 관리하여 refresh 되더라도 상태 유지 
- 숙소 유형을 선택할 수 있는 필터 팝업 구현
- 숙소 가격 범위를 정할 수 있는 필터 팝업 구현
- 편의 시설, 호스트 언어와 같은 추가적인 필터 모달 구현
- 검색 결과에 따라 설정할 수 있는 필터 조건에 대한 정보도 fetch하여 모달에 렌더
- 최근 본 숙소 페이지에 대한 데이터를 가져와 최근 숙소 리스트에 렌더 


<br>

## 프론트엔드 사용 기술

- JavaScript
- React
- router
- redux
- redux-thunk
- Styled-Component
- socket.io

