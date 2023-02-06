import http from "@/api/http";


// const headers = {   
//     'Content-Type': 'application/json'
// }

export default {
    // 회원가입
    postUser(user) {      
        http.post(`/users`, user)
            .then(({ data }) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

     // 회원정보 조회
    fetchUser(userSeq){    
        http.get(`/users/${userSeq}`)
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log(response.data);
                } else if(code == 204) {
                    alert("회원정보 조회 실패: 회원 없음");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // 회원정보 수정
    updateUser(payload) {     
        http.put(`/users/${payload.userSeq}`, payload.update)
            .then((response) => {
                const code = response.status;

                if (code == 201) {
                    console.log("수정 완료")
                    console.log(response.data);
                } else if(code == 204) {
                    alert("회원정보 수정 실패: 회원 없음")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // 비밀번호 수정
    updatePW(payload){             
        http.put(`/users/${payload.userSeq}/password`, payload.password, {
            headers: {
                'Content-Type': 'text/plain'
            }})
            .then((response) => {
                const code = response.status;

                if (code == 201) {
                    console.log("비밀번호 변경 완료");
                } else if (code == 204) {
                    alert("비번 찾기 실패: 회원없음");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // 포인트 수정
    updatePoint(payload){    
        http.put(`/users/${payload.userSeq}/point`, payload.point, {
            headers: {
                'Content-Type': 'text/plain'
            }})
            .then((response) => {
                const code = response.status;

                if (code == 201) {
                    console.log(response.data);
                } else if (code == 204) {
                    alert("포인트 수정 실패: 회원없음");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // 회원 탈퇴
    deleteUser(userSeq){
        http.delete(`/users/${userSeq}`)
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log("회원 탈퇴 완료");
                } else if (code == 204) {
                    alert("회원 탈퇴 실패: 회원없음");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    },

    // 아이디찾기
    findUserId(email) {
        http.get(`/users/find-id`, {
            params: {
                email: email
            }})
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log("찾은 ID: "+response.data);
                } else if (code == 204) {
                    alert("아이디 찾기 실패 : 회원없음");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },

    // 비밀번호 찾기
    findUserPW(email) {
        http.get(`/users/find-password`, {
            params: {
                email: email
            }})
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log("찾은 PW: "+response.data);
                } else if (code == 204) {
                    alert("비번 찾기 실패 : 회원없음");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },

    // 닉네임 중복확인
    checkUserNick(nick) {
        http.get(`/users/check-nick`, {
            params: {
                nick: nick
            }})
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log("중복된 닉네임");
                } else if (code == 204) {
                    console.log("사용 가능한 닉네임");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },

    // 아이디 중복확인
    checkUserId(id) {
        http.get(`/users/check-id`, {
            params: {
                id: id
            }})
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log("중복된 아이디");
                } else if (code == 204) {
                    console.log("사용 가능한 아이디");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },    

    // 이메일 중복확인
    checkUserEmail(email) {
        http.get(`/users/check-email`, {
            params: {
                email: email
            }})
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    console.log("중복된 이메일");
                } else if (code == 204) {
                    console.log("사용 가능한 이메일");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },
    
    // 로그인
    login(payload) {
        http.post(`/users/login`, payload)
            .then((response) => {
                const code = response.status;

                if (code == 200) {
                    if (response.data) {
                        console.log("로그인 성공");
                        console.log(response.data.token)
                        localStorage.setItem('jwt', response.data.token); // 로컬 스토리지에 저장
                        // userStore에 로그인한 멤버 저장하고싶다..
                        // store.loginUser = response.data;
                        console.log("로그인 멤버:" + response.data);     
                    } else {
                        console.log("로그인 실패: 비밀번호 불일치")
                    }
                } else if (code == 204) {
                    alert("로그인 실패: 회원없음");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    




}