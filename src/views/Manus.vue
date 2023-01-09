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
                        <input type="button" @click="makeText()" value="원고제작">
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
                        <textarea class="addtextarea2"></textarea>
                        <textarea class="addtextarea2"></textarea>
                        <textarea class="addtextarea2"></textarea>
                    </div>
                    <input type="button" value="+" id="listBtn1">
                    <input type="button" value="-" id="listBtn2">
                </div>
                <div>
                    <textarea name="" id="form2Text" style="text-align: center;"></textarea>
                </div>
                <div>
                    <div>
                        <label for="">키워드 :</label> <input id="change_keyword2" type="text">
                    </div>

                    <div>
                        <textarea id="rock_keyword1_1" type="text" style="vertical-align: middle;"></textarea> 
                        <span> -> </span>
                        <input id="rock_keyword2_1" style="width: 140px; height: 100px;" type="text" placeholder="변환할 키워드">
                    </div>

                    <div>
                        <span>이미지 갯수 : </span>
                        <input id="img_int_1" type="text">
                    </div>

                    <div>
                        <input id="mobileCheck_1" type="checkbox">
                        <label for="mobileManu">모바일</label>

                        <input id="videoChecked_1" type="checkbox">
                        <label for="videoManu" style="margin-right: 10px;">동영상</label>

                        <input id="adChecked_1" type="checkbox"><label for="FTC">공정위</label> <input id="adText_1" type="text">
                    </div>
                    <div>
                        <input type="button" @click="makeTextList()" value="원고제작">
                    </div>
                    <div>
                        <label for=""> 원고 갯수 :</label> <input type="text">
                        <textarea name="" id="" cols="30"></textarea> <!--? 메모장  -->
                    </div>
                </div>
            </fieldset>
        </form>

        <form class="tabPg manform3" id="manutab3" onsubmit="return false;">
            <fieldset style="display: flex;">
                <textarea id="form3Data" style="width: 50%; height: 800px;"></textarea>
                <div style="display: grid; widows: 48%;">
                    <input type="button" @click="changeLine()" value="원고제작">
                    <textarea id="form3Text" style="height: 770px;"></textarea>
                </div>
            </fieldset>

            <ul lass="manuTab2">
                <li class="tabbtn active" data-tab="form3tab1">조회</li>
                <li class="tabbtn" data-tab="form3tab2">백업</li>
            </ul>

            <div class="inquiry tabpg active" id="form3tab1">
                <div class="inqChl" style="display: inline-block;">
                    <input @keyup.enter="findWord()" id="searchData" type="text"><input type="button" @click="findWord()" value="조회">
                    <input type="button" @click="saveWord()" value="저장">
                </div>
                <div>
                    <div id="editable" style="text-align: left; margin: 0;" contenteditable="true"></div>
                </div>
            </div>

            <div class="tabpg" id="form3tab2">
                <div>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </form>
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
        let tabbtn = null;
        let tabpg = null;
        
        $(document).ready(function(){
            init();
            tabpageJS(tabBtn,tabPg,tabbtn,tabpg);
        });
        function init(){
            tabBtn = $(".tabBtn");
            tabPg = $(".tabPg");
            tabbtn = $(".tabbtn");
            tabpg = $(".tabpg");
        }
        function tabpageJS(tabBtn,tabPg,tabbtn,tabpg){
            $(tabBtn).click(function(){
                $(tabBtn).removeClass('active');
                $(this).addClass('active');
            
                $(tabPg).removeClass('active');
                $('#' + $(this).attr('data-tab')).addClass('active')
            });

            $(tabbtn).click(function(){
                $(tabbtn).removeClass('active');
                $(this).addClass('active');
            
                $(tabpg).removeClass('active');
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
                $("#dynamic textarea:last-child").remove()
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
        async changeLine() {
            let texts = document.getElementById('form3Data').value;
            const data = {
                texts,
            }
            const result = await this.$axios.post(
                "http://49.247.32.231:5000/api/newText",
                data
            );
            document.getElementById('form3Text').innerHTML = result.data.result
        },
        async findWord() {
            const searchData = document.getElementById('searchData').value;
            console.log(searchData);
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
        async makeTextList() {
            let Beforetext = document.getElementsByClassName('addtextarea2');
            console.log(Beforetext);
            let TextList = [];
            for (let tl of Beforetext) {
                TextList.push(tl.value);
            }
            TextList = TextList.join('||');
            const change_keyword = document.getElementById('change_keyword2').value;
            const rock_keyword1 = document.getElementById('rock_keyword1_1').value;
            const rock_keyword2 = document.getElementById('rock_keyword2_1').value;
            const img_int = Number(document.getElementById('img_int_1').value);
            const videoCheck = document.getElementById('videoChecked_1').checked;
            const adCheck = document.getElementById('adChecked_1').checked;
            const adText = document.getElementById('adText_1').value;
            const mobileCheck = document.getElementById('mobileCheck_1').checked;
            const data = {
                a: TextList,
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
            document.getElementById('form2Text').innerHTML = result.data.result
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