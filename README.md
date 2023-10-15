# Toy Projects

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

| 브랜치 이름 | 용도                    |
| ----------- | ----------------------- |
| main        | 2주 챌린지 최종 브랜치  |
| dev         | development 메인 브랜치 |
| feat\_#     | 기능 구현 브랜치        |
