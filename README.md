# Instogram

인스타그램을 클론 코딩한 프로젝트입니다.


* 프로젝트 배포: [https://instogram-1c5f9.web.app](https://instogram-1c5f9.web.app)

<br/>

 (프로젝트 열람을 위해 접근 제한 기능(Protectd Route)을 잠시 비활성화 했습니다.)

<br/>

# 프로젝트 구성

## 1. 회원가입/로그인 기능 구현

https://github.com/jissssoo1717/instogram-clone/assets/115405178/7d994600-4afa-41f6-8d4d-72fd8417fa42

<br/><br/>

## 2. 인스타그램 메인 페이지 구현


https://github.com/jissssoo1717/instogram-clone/assets/115405178/6558a658-2810-4085-8f5f-cc36ff1701c5


<br/><br/>

   * 게시글 등록 후 홈페이지에 실시간 렌더링됨.

https://github.com/jissssoo1717/instogram-clone/assets/115405178/d195cbd8-8f0b-4080-8d94-348702637b11

<br/><br/>

   * 댓글 기능


https://github.com/jissssoo1717/instogram-clone/assets/115405178/9729c5e7-5d78-4d49-b332-3982b24fb2c7


   <br/><br/>

   * 좋아요 기능
     
https://github.com/jissssoo1717/instogram-clone/assets/115405178/0e10cceb-91d7-45a6-adf9-9a44dae0e66c


   <br/><br/>

   * 게시글 삭제

https://github.com/jissssoo1717/instogram-clone/assets/115405178/fb86653a-e604-4867-bde6-3da6d3d3e6bf


   <br/><br/>


## 3. 프로필 페이지


https://github.com/jissssoo1717/instogram-clone/assets/115405178/5bc7b18f-e375-4e35-bba3-1ab9f90f9e51

<br/><br/>

  * 프로필 이미지 변경


https://github.com/jissssoo1717/instogram-clone/assets/115405178/3cc4dc89-961a-40c7-aef8-6dc86adb5e08


<br/><br/>


   * 3열로 등록된 게시글의 이미지 배열



https://github.com/jissssoo1717/instogram-clone/assets/115405178/11216d6e-64a4-4f6f-b5e5-8c9d9e485aac



   <br/><br/>

   
  * 프로필 페이지에서 로그아웃


https://github.com/jissssoo1717/instogram-clone/assets/115405178/9a7a16a9-8251-4b86-be56-ae25e7a2f842

   <br/><br/>


# 이슈 해결
 + React.StrictMode로 인해 프로필 탭의 게시글 이미지/좋아요 개수 변동 생김
   
   => 첫 렌더링 시 필요한 초기화 부분과 리렌더링마다 변하는 부분을 각각 나누어 useEffect로 작성

 + stylee-componets에서 props를 넘겨줄 때, 기본 DOM 으로 전달되는 문제 발생

   => $기호를 통해 transient props로 지정하여 요소를 넘겨주어 문제 해결
   (+ Cleanup function으로 리팩토링해야 함)

<br/>

# 이후에 추가할 기능
 + 로그인 페이지
   * 등록된 이메일을 이용한 '비밀번호 찾기/변경'
   * Github 계정으로 로그인(O)
     

 + 홈 탭
   * 게시글 수정
   * 댓글 수정 및 삭제


 + 프로필 탭
   * 프로필 이미지 삭제 기능
   * 게시글 이미지 클릭하면 해당 게시글로 이동
   * 게시글 이미지에 마우스 hover 시, 좋아요/댓글 개수 표시

  
 + 헤더(메뉴)
   * 검색 모달 구현
   * 로그아웃 버튼 추가
<br/> 

# 개발 환경

+ Front-end: React.js, HTML, CSS, TypeScript, JavaScript 
+ Back-end: Firebase

<br/>

# 참고 자료
 + 강의 - nomadcoder 트위터 클론 코딩(https://nomadcoders.co/nwitter/lobby)
 + 문서
    * https://styled-components.com/docs/api (styled-components transient props)
    * https://velog.io/@yedol1/%EC%8A%A4%ED%83%80%EC%9D%BC%EB%93%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A1%9C-props-%EB%84%98%EA%B2%A8%EC%A4%84%EB%95%8C-Dom-%EC%9A%94%EC%86%8C%EB%A1%9C-%EC%A0%84%EB%8B%AC%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C-%ED%8F%AC%EC%9D%B8%ED%8B%B0-%EB%94%94%EC%9E%90%EC%9D%B8-%EC%8B%9C%EC%8A%A4%ED%85%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8 (styled-components transient props)
    * https://sezzled.tistory.com/173 (twice rendered in React.StrictMode)
    * https://ko.legacy.reactjs.org/docs/strict-mode.html (about StrictMode)
    * https://krpeppermint100.medium.com/js-useeffect%EB%A5%BC-%ED%86%B5%ED%95%9C-react-hooks%EC%9D%98-lifecycle-%EA%B4%80%EB%A6%AC-3a65844bcaf8 (React lifecycle)
    * Firebase 공식 문서
