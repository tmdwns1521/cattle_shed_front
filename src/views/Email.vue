<template>
    <section class="mailSection">
        <h2>Send Email</h2>
        <div>
          <label class="idlabel" for="M_id">ID</label>
          <input class="idput" id="M_id" type="text" v-model="M_id">
        </div>

        <div>
          <label class="pwdlabel" for="M_pwd">PWD</label>
          <input class="pwdput" id="M_pwd" type="text" v-model="M_pwd">
        </div>

        <div>
            <input id="title" v-model="title" type="text" placeholder="제목">
            <div class="editBox" id="editor"></div>
            <textarea class="IDBox" name="" id="" cols="30" rows="10"></textarea>
            <input type="file">
        </div>

        <div>
          <button id="send" @click="sendEmail()">보내기</button>
          <button>취소</button>
        </div>
    </section>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import axios from 'axios';

export default {
  name: "Email",
  components: { Tabs },
  mounted(){
    this.editor = new Editor({
       el: document.querySelector("#editor"),
       height: "500px",
       initialEditType: "WYSIWYG"
    })
    const editbox = document.getElementsByClassName('ProseMirror');
        console.log(editbox);
  },
  data: function(){
    return{
        editor : null,
        M_id: '',
        M_pwd: '',
        title: '',
        editor: ''
    }
  },
  methods:{
    sendEmail: async function(){
      const user = this.M_id;
      const pass = this.M_pwd;
      const subject = this.title;
      const html = document.getElementsByClassName('ProseMirror toastui-editor-contents')[0].innerHTML;
      const idList = document.getElementsByClassName('IDBox')[0].value
      const data = {
        user,
        pass,
        subject,
        html,
        idList
      }
      const result = await this.$axios.post(
          "http://49.247.32.231:5000/api/sendMail",
          data
      );
      alert("메일이 발송 되었습니다.")
      location.reload();
    }
  }
}

</script>