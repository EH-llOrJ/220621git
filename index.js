//git 프로젝트

//git은 뭔가

//1. 형상관리도구 중에 하나
//형상관리도구 : 버전 관리 시스템
//작업을 하면서 작업의 리스트를 관리 할 수 있다.

//2. git의 장점
//협업하는 단계에서 소스코드를 주고 받을 필요 없이 같은 파일을 팀원들과 동시에 병렬로 작업이 가능하다.

//A작업을 하고 -> B작업을 넘겨주는데
//A랑 B랑 메인페이지를 같이 작업을 하고 있는데
//A는 상품 페이지, B는 장바구니 페이지
//파일로 넘겨주고 어디가 다른지 눈으로 보고 이렇게 작업을 하면 시간도 오래 걸리고 버그 잡기도 어렵다.
//즉, 코드가 어디가 다른지 찾기 힘들다.

//서버에 서로 푸쉬를 하면 서버에 있는 파일이 자동으로 갱신된다.
//A랑 B랑 작업을 하는데
//C라는 새로운 팀원 생겼는데 A랑 B랑 파일 C한테 줄 필요없이 
//git이라는 저장소에서 클론으로 파일을 내려받아서 바로 작업이 가능하다.


//git init
//새로운 git저장소를 생성할 때 사용하는 git 명령어

//git 저장소를 생성한 폴더에서
//숨김파일 보기를 체크하면 .git

//git add 커밋을 추가하는데 git저장소에 추가하려고 대기
//git add README.md 이렇게 쓰면 git저장소에 README.md 추가하려고 대기

//git commit -m 커밋 메시지를 작성할 수 있다.
//git commit -m "first commit" 이거면 저장소에 추가하면서
//작업 내용 메시지는 first commit이 메시지가 보인다.

//git branch -M 이건 마스터 브런치를 설정한다.
//git branch -M main 이렇게 하면 main이라는 마스터 브런치 설정

//git remote add origin 깃 저장소 링크를 추가한다.
//origin : 복제한 원격 git 저장소의 기본 이름
//git remote : origin 복제한 url을 참조하기 위해 호출
//git remote add origin https://github.com/EH-llOrJ/220621.git 이건
// https://github.com/EH-llOrJ/220621.git(자신의 깃 저장소 주소)를 추가해준다.

//cd "들어갈 폴더" : 경로 변경하는데
//cd .. : 경로가 한 단계 위로 올라간다.

//git 저장소가 초기화된 경로인지 확인 잘하고 사용
//경로는 git init을 한 경로

//git push -u origin main 깃 저장소에 첫 커밋을 푸쉬

//소스제어 탭을 선택시 git 그래프에 변경사항 중 파일 이름 옆에

// U : 저장소에 없는 새로운 파일

// M : 저장소에 파일은 있고 내용이 변경됐을 때

// D : 저장소에 있는 파일이 제거됐을 때

//1. git설정
//사용자 설정
//깃을 사용할 때 사용하는 깃의 사용자 세팅
//git config --global user.name "닉네임"
//git config --global user.email "이메일"

//설정 정보 조회
//git config --global --list
//git config --list 도 되네 뭐지?
//git config [--global] 설정_이름 설정값 이라서

//git 저장소 초기화 저장소 생성
//git의 저장소로 지정할 경로로 이동해서
//git init

//git 저장소 복제 (파일 내려받기)
//git clone (url)