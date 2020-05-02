<template>
    <div >
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="primary" @click="handleClick">提交<i class="el-icon-upload el-icon--right"></i></el-button>
     <ul v-if="flag">
       <li>
         {{list}}
       </li>
     </ul>
      <ul>
        <li v-for="item in names" key="item">
          {{item}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
          return {
            input: '',
            list:'erettr',
            flag:true,
            names:["zhansan","jisi","wangmazi","mjx"],
            
          }
        },
      methods:{
        handleClick(){
         this.list="hahahhahhhhahahhahhahhahha";
         this.flag=!this.flag;

        },


      }
    }
</script>

<style scoped>
  ul,li{
    list-style: none;
    color: red;
  }
</style>
