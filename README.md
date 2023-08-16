# Two Weeks Challenges

2주에 하나씩 끝내는 프로젝트 레포입니다.

이제 개발 공부를 시작한지 8개월차 주니어 백엔드 개발자 입니다.

최근 클린한 코드를 작성하는 것에 집중하다 보니 정작 기능 구현 능력은 떨어진다는 것을 알게 되었습니다.

가독성과 확장성이 좋은 코드를 쓰는 능력은 아주 중요하지만, 정작 주어진 기간에 요구된 기능을 구현하지 못한다면 무슨 의미가 있을까 라는 생각이 들었습니다.

그래서 이 2주 챌린지(Two Weeks Challenge)를 통해 아래의 목표를 완수하려고 합니다.

#### 프로젝트 하나 당 총 3주를 소요합니다. (2주 개발 + 1주 회고 및 준비)

- 프로젝트는 회사에서 진행중인 프로젝트와 관련된 기능들을 우선순위로 진행됩니다.
- 2주 동안은 순수 개발에만 몰입합니다.
- 그 후 1주는 2주 동안 사용한 기술들에 대한 개념 공부 및 정리, 회고, 그리고 어떤 주제로 다음 챌린지를 이어갈 것인지 구상하는 시간을 가집니다.
- 또한 쉬는 기간을 가져 지치지 않고 계속해서 챌린지를 이어 나갈 수 있는 힘을 비축하는 시간입니다.

#### 우선은 코드를 많이 써보려고 합니다.

- 비전공자 신입 개발자로 이제 일을 시작한지 한달 되었습니다.
- 매일 매일 개발자로서 부족한 CS 지식, 구현 속도와 수준 등 부족한 점을 피부로 느낍니다.
- 가장 빨리 많이 배웠던 때를 기억해보니 부트캠프 때 프로젝트를 하나씩 끝낼 때 마다 였습니다.
- 그래서 '코드를 우선 많이 작성해보는 것'을 목표로 합니다.

#### 매일 공부하는 습관을 기릅니다.

- 저는 유혹에도 약하고 노는 것도 좋아합니다. 이를 제어 하기위해 스스로에게 많은 장치를 만들려고 노력합니다.
- `빨리 가는 유일한 방법은 제대로 가는 것이다.` 빨리 가기 위해 많지 않더라도 매일 공부하는 습관을 기르려고 노력합니다.

## 모든 챌린지는 아래의 규칙을 따릅니다.

### Commit Convention

| 태그 이름  | 설명                                                                                 |
| ---------- | ------------------------------------------------------------------------------------ |
| [FEAT]     | 새로운 기능 구현                                                                     |
| [PROG]     | 기능 구현 중                                                                         |
| [IMPROVE]  | codding/commit convention 및 코드 구조 수정                                          |
| [ADD]      | 라이브러리 추가, 파일 생성, dependency 및 config 추가                                |
| [DEL]      | 쓰지 않는 코드, 파일, 라이브러리 등 삭제 (모든 종류의 삭제 커밋)                     |
| [FIX]      | 버그 수정, 오류 해결                                                                 |
| [HOTFIX]   | 급한 버그 수정 (issue, QA)                                                           |
| [MOVE]     | 파일이나 폴더, 코드의 이동 및 이름 변경                                              |
| [DOCS]     | README, WIKI 등 모든 종류의 문서 수정 및 업데이트                                    |
| [REFACTOR] | 코드 전면 수정이 있을 때                                                             |
| [CONFLICT] | merge 할 때 나는 conflict 수정 시 사용 (커밋 메세지는 “conflict resolved” 로 통일) |
| [DEPLOY]   | 배포 관련 모든 커밋                                                                  |
| [CI/CD]    | CI/CD 파이프라인 빌드 관련 모든 커밋                                                 |

### Branch Strategy

| 브랜치 이름            | 용도                    |
| ---------------------- | ----------------------- |
| main                   | 2주 챌린지 최종 브랜치  |
| dev                    | development 메인 브랜치 |
| [project-name] feat\_# | 기능 구현 브랜치        |
