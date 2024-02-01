window.addEventListener("load", () => {
    const loadingContainer = document.querySelector("#loading-screen");
    // setTimeout(() => { 로딩 화면 확인을 위한 임시 setTimeout 함수
        // 로딩이 완료되면 로딩 화면 숨기기
        loadingContainer.style.display = "none";
        // 비디오 애니메이션 실행
        videoTextAni();
        // 섹션-1 애니메이션 실행
        sectionAni1();
        // 섹션-2 애니메이션 실행
        sectionAni2()
        // Partners 애니메이션 실행
        sectionAni3();
    // }, 1000);
});