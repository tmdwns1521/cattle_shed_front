<template>
    <section class="ManuSection">
        <form class="manform1" action="">
            <fieldset>
                <textarea class="maInput1"></textarea>
                <textarea class="maInput2"></textarea>
                <div>
                    <span>키워드 : </span><input type="text">
                    <span>고정키워드</span>

                    <textarea type="text"></textarea> ->
                    <input type="text">

                    <span>이미지 겟수 : </span> <input type="text">

                    <input type="checkbox"> <label for="">동영상</label>
                    <input type="checkbox"> <label for="">광고</label> <input type="text">

                    <input class="maBtn" type="button" value="원고제작">

                    <span>원고 갯수 : </span> <input type="text">
                </div>
            </fieldset>
        </form>

        <form class="manform2" action="">
            <div>
                <textarea></textarea>
                <textarea></textarea>
                <button>+</button>
                <input type="text">
            </div>
            <div>
                <input type="text">
            </div>
            <div>
                <span>키워드 : </span><input type="text">
                    <span>고정키워드</span>
                    <textarea></textarea> ->
                    <input type="text">
                    <span>이미지 겟수 : </span> <input type="text">
                    <input type="chexkbox"> <label for="">동영상</label>
                    <input type="chexkbox"> <label for="">광고</label> <input type="text">

                    <input class="maBtn" type="button" value="원고제작">

                    <span>원고 갯수 : </span> <input type="text">
            </div>
        </form>

        <div>
            <div>
                <input type="text"><input type="button" value="찾기">
            </div>
            <div>
                <textarea></textarea>
                <textarea></textarea>
                <textarea></textarea>
                <textarea></textarea>
            </div>
        </div>
    </section>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import $ from 'jquery';

export default {
    name:"Manus",
    components: {Tabs},
    data(){
        return{}
    }
}

</script>