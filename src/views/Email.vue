<template>
    <section>
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
    sendEmail: function(){
      console.log(this.M_id, this.M_pwd, this.title, this.editor);
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        M_id: this.M_id,
        M_pwd: this.M_pwd,
        title: this.title,
        editbox: this.editor
      }
      axios.post(url, data)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}

</script>