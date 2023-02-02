<template style=" width: none;">
    <div class="DataSection2">
        <div>
            <h2><a href="/">리뷰어</a></h2>
        </div>
        <table class="tbList" id="" border="1">
            <form action="" id="">
            </form>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>IP</th>
                    <th>유입경로</th>
                    <th>브라우저</th>
                    <th>OS</th>
                    <th>날짜</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>400</td>
                    <td>000.000.00.00</td>
                    <td><a href="">www.abcdefu.com</a></td>
                    <td>chrome</td>
                    <td>window</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>000.000.00.00</td>
                    <td><a href="">www.abcdefu.com</a></td>
                    <td>chrome</td>
                    <td>window</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>000.000.00.00</td>
                    <td><a href="">www.abcddddddddddddddddddddefu.com</a></td>
                    <td>chrome</td>
                    <td>window</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>000.000.000.00</td>
                    <td><a href="">www.abcdefu.com</a></td>
                    <td>chrome</td>
                    <td>window</td>
                    <td>2023-01-30 16:48:45</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import BottomBanner from "@/components/Banner/BottomBanner.vue";
import "../assets/style/UserDB.css";

export default {
  name: "UserDB",
  components: { BottomBanner },
};

</script>