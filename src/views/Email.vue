<template>
    <section>
        <h2>Send Email</h2>
        <!-- <table>
          <tr>
            <th>ID</th>
            <th>PWD</th>
          </tr>
          <tr>
            <td><input type="text"></td>
            <td><input type="text"></td>
          </tr>
        </table> -->
        <div>
          <label class="idlabel" for="">ID</label>
          <input class="idput" type="text">
        </div>
        
        <div>
          <label class="pwdlabel" for="">PWD</label>
          <input class="pwdput" type="text">
        </div>

        <div>
            <input type="text" placeholder="제목">
            <div class="editBox" id="editor"></div>
            <textarea></textarea>
            <input type="file">
        </div>
        
        <div>
          <button>작성완료</button>
          <button>취소</button>
        </div>
    </section>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default {
  name: "Email",
  components: { Tabs },
  data(){
    return{
        editor : null
    }
  },
  mounted(){
    this.editor = new Editor({
        el: document.querySelector("#editor"),
        height: "500px",
        initialEditType: "WYSIWYG"
    })
  }
}
</script>