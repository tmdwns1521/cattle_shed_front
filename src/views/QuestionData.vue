<template style=" width: none;">
    <div class="DataSection">
        <div>
            <h2><a href="/">리뷰어</a></h2>
        </div>
        <table class="tbList" id="" border="1">
            <form action="" id="">
            </form>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>상담횟수(IP)</th>
                    <th>상담횟수(HP)</th>
                    <th>IP</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>업체명</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>4</td>
                    <td>1</td>
                    <td>1</td>
                    <td>000.000.00.00</td>
                    <td>홍길동</td>
                    <td>010-0000-0000</td>
                    <td>브릴리언트 라임에드</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>1</td>
                    <td>1</td>
                    <td>000.000.00.00</td>
                    <td>홍길동</td>
                    <td>010-0000-0000</td>
                    <td>브릴리언트 라임에드</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>1</td>
                    <td>1</td>
                    <td>000.000.00.00</td>
                    <td>홍길동</td>
                    <td>010-0000-0000</td>
                    <td>브릴리언트 라임에드</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>000.000.00.00</td>
                    <td>홍길동</td>
                    <td>010-0000-0000</td>
                    <td>브릴리언트 라임에드</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>



<script>
import BottomBanner from "@/components/Banner/BottomBanner.vue";
import "../assets/style/QData.css";

export default {
  name: "QuestionData",
  components: { BottomBanner },
};

</script>