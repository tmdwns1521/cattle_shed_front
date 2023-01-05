<template>
    <section class="ManuSection">
        <ul class="manuTab">
            <li class="tabBtn active" data-tab="manutab1">Form1</li>
            <li class="tabBtn" data-tab="manutab2">Form2</li>
        </ul>

        <form class="tabPg active manform1" id="manutab1" action="">
            <fieldset>
                <textarea class="maInput1"></textarea>
                <textarea class="maInput2"></textarea>
                <div>
                    <div>
                        <label for="">키워드 :</label>  <input type="text">
                    </div>

                    <div>
                        <span style="display: block; margin-bottom: 10px;">고정키워드</span>
                        <textarea type="text" style="vertical-align: middle;"></textarea> 
                        <span> -> </span>
                        <input style="width: 140px;" type="text">
                    </div>

                    <div>
                        <span>이미지 갯수 : </span>
                        <input type="text">
                    </div>

                    <div>
                        <input id="mobileManu" type="checkbox">
                        <label for="mobileManu">모바일</label>
                        
                        <input type="checkbox">
                        <label for="" style="margin-right: 10px;">동영상</label>
                        <input type="checkbox"><label for="">광고</label> <input type="text">
                    </div>

                    <div>
                        <input type="button" value="원고제작">
                    </div>

                    <div>
                        <label for=""> 원고 갯수 :</label> <input type="text">
                    </div>
                </div>
            </fieldset>
        </form>

        <form class="tabPg manform2" id="manutab2" action="">
            <fieldset>
                <div>
                    <textarea name="" id=""></textarea>
                    <textarea name="" id=""></textarea>
                    <input type="button" value="+">
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <textarea name="" id=""></textarea>
                    <input type="button" value="치환하기">
                </div>
                <div>
                    <div>
                        <label for="">키워드 :</label> <input type="text">
                    </div>

                    <div>
                        <span style="display: block; margin-bottom: 10px;">고정키워드</span>
                        <textarea type="text" style="vertical-align: middle;"></textarea> 
                        <span> -> </span>
                        <input style="width: 140px;" type="text">
                    </div>

                    <div>
                        <span>이미지 갯수 : </span>
                        <input type="text">
                    </div>

                    <div>
                        <input id="mobileManu" type="checkbox">
                        <label for="mobileManu">모바일</label>

                        <input id="videoManu" type="checkbox">
                        <label for="videoManu" style="margin-right: 10px;">동영상</label>

                        <input id="FTC" type="checkbox"><label for="FTC">공정위</label> <input type="text">
                    </div>
                    <div>
                        <input type="button" value="원고제작">
                    </div>
                    <div>
                        <label for=""> 원고 갯수 :</label> <input type="text">
                    </div>
                </div>
            </fieldset>
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
    },
    created() {
        let tabBtn = null;
        let tabPg = null;
            
        $(document).ready(function(){
            init();
            tabpageJS(tabBtn,tabPg);
        });
        function init(){
            tabBtn = $(".tabBtn");
            tabPg = $(".tabPg");
        }
        function tabpageJS(tabBtn,tabPg){
            $(tabBtn).click(function(){
                $(tabBtn).removeClass('active');
                $(this).addClass('active');
            
                $(tabPg).removeClass('active');
                $('#' + $(this).attr('data-tab')).addClass('active')
            });
        }
            }
}

</script>