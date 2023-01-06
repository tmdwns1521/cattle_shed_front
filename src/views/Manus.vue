<template>
    <section class="ManuSection">
        <ul class="manuTab">
            <li class="tabBtn active" data-tab="manutab1">Form1</li>
            <li class="tabBtn" data-tab="manutab2">Form2</li>
            <li class="tabBtn" data-tab="manutab3">Form3</li>
        </ul>

        <form class="tabPg active manform1" id="manutab1">
            <fieldset>
                <textarea class="maInput1"></textarea>
                <textarea class="maInput2"></textarea>
                <div>
                    <div>
                        <label for="">키워드 :</label>  <input id="change_keyword" type="text">
                    </div>

                    <div>
                        <textarea id="rock_keyword1" type="text" style="vertical-align: middle;"></textarea> 
                        <span> -> </span>
                        <input id="rock_keyword2" style="width: 140px; height: 100px;" type="text" placeholder="변환할 키워드">
                    </div>

                    <div>
                        <span>이미지 갯수 : </span>
                        <input id="img_int" type="text">
                    </div>

                    <div>
                        <input id="mobileCheck" type="checkbox">
                        <label for="mobileCheck">모바일</label>
                        
                        <input id="videoChecked" type="checkbox">
                        <label for="videoChecked" style="margin-right: 10px;">동영상</label>

                        <input id="adChecked" type="checkbox"><label for="adChecked">광고</label> <input id="adText" type="text">
                    </div>

                    <div>
                        <input type="button" @click="makeText" value="원고제작">
                        <textarea name="" id="" cols="30"></textarea> <!--? 메모장  -->
                    </div>

                    <!-- <div>
                        <label for=""> 원고 갯수 :</label> <input type="text">
                    </div> -->
                </div>
            </fieldset>
        </form>

        <form class="tabPg manform2" id="manutab2">
            <fieldset>
                <div>
                    <div id="dynamic">
                        <textarea></textarea>
                        <textarea></textarea>
                        <textarea></textarea>
                    </div>
                    <input type="button" value="+" id="listBtn1">
                    <input type="button" value="-" id="listBtn2">
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
                        <textarea type="text" style="vertical-align: middle;"></textarea> 
                        <span> -> </span>
                        <input id="rock_keyword2" style="width: 140px; height: 100px;" type="text" placeholder="변환할 키워드">
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
                        <textarea name="" id="" cols="30"></textarea> <!--? 메모장  -->
                    </div>
                </div>
            </fieldset>
        </form>

        <form class="tabPg manform3" id="manutab3">
            <fieldset>
                <textarea class="maInput1"></textarea>
                <textarea class="maInput2"></textarea>
                <div>
                    <div>
                        <label for="">키워드 :</label>  <input id="change_keyword" type="text">
                    </div>

                    <div>
                        <textarea id="rock_keyword1" type="text" style="vertical-align: middle;"></textarea> 
                        <span> -> </span>
                        <input id="rock_keyword2" style="width: 140px; height: 100px;" type="text" placeholder="변환할 키워드">
                    </div>

                    <div>
                        <span>이미지 갯수 : </span>
                        <input id="img_int" type="text">
                    </div>

                    <div>
                        <input id="mobileCheck" type="checkbox">
                        <label for="mobileCheck">모바일</label>
                        
                        <input id="videoChecked" type="checkbox">
                        <label for="videoChecked" style="margin-right: 10px;">동영상</label>

                        <input id="adChecked" type="checkbox"><label for="adChecked">광고</label> <input id="adText" type="text">
                    </div>

                    <div>
                        <input type="button" @click="makeText" value="원고제작">
                        <textarea name="" id="" cols="30"></textarea> <!--? 메모장  -->
                    </div>

                    <!-- <div>
                        <label for=""> 원고 갯수 :</label> <input type="text">
                    </div> -->
                </div>
            </fieldset>
        </form>

        <div>
            <div>
                <input id="searchData" type="text"><input type="button" @click="findWord" value="조회"><input type="button" @click="saveWord" value="저장">
            </div>
            <div>
                <div id="editable" style="text-align: left" contenteditable="true">
                </div>
                <!-- <div id="editable" contenteditable="true">
                </div> -->
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
        $(document).ready(function(){
            let i=1;
            $("#listBtn1").click(function(){
                $("#dynamic").append("<textarea class='addtextarea"+i+"'></textarea>")
            });
            i++;

            $("#listBtn2").click(function(){
                $("#dynamic textarea:last-child" ).remove()
            });
        });
    },
    methods: {
        async saveWord() {
            let EditBox = document.getElementById('editable').innerText;
            let newData = EditBox.split('\n');
            newData = newData.filter(e => e != '')
            const texts = (newData.join("\n"))
            const data = {
                texts
            }
            const result = await this.$axios.post(
                "http://49.247.32.231:5000/api/saveWords",
                data
            );
        },
        async findWord() {
            const searchData = document.getElementById('searchData').value;
            if (searchData != ''){
                let EditBox = document.getElementById('editable').innerText;
                let newData = EditBox.split('\n');
                newData = newData.filter(e => e != '')
                const findData = newData.filter(e => e.indexOf(searchData) != -1)
                findData.forEach(e => {
                    console.log(newData.indexOf(e))
                    const item = newData.splice(newData.indexOf(e), 1);
                    newData.splice(0, 0, item[0]);
                });
                newData.splice(findData.length, 0, '<br>');
                document.getElementById('editable').innerHTML = newData.join("<br>")
            } else {
                const result = await this.$axios.get(
                    "http://49.247.32.231:5000/api/get_words"
                );
                document.getElementById('editable').innerHTML = result.data.result.join("<br>")
            }
            
        },
        async makeText() {
            const Beforetext = document.getElementsByClassName('maInput1')[0].value;
            const change_keyword = document.getElementById('change_keyword').value;
            const rock_keyword1 = document.getElementById('rock_keyword1').value;
            const rock_keyword2 = document.getElementById('rock_keyword2').value;
            const img_int = Number(document.getElementById('img_int').value);
            const videoCheck = document.getElementById('videoChecked').checked;
            const adCheck = document.getElementById('adChecked').checked;
            const adText = document.getElementById('adText').value;
            const mobileCheck = document.getElementById('mobileCheck').checked;
            const data = {
                a: Beforetext,
                img_int,
                change_keyword,
                rock_keyword1,
                rock_keyword2,
                videoCheck,
                adCheck,
                adText,
                mobileCheck
            }
            const result = await this.$axios.post(
                "http://49.247.32.231:5000/api/script_substitution",
                data
            );
            document.getElementsByClassName('maInput2')[0].innerHTML = result.data.result
        }
    }
}

</script>