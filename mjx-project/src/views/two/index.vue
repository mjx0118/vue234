<template>
  <div id="app">
   <!-- <ul>
      <li v-for="(item,index) in names"  :class="{active:reindex==index}" @click="liclick(index)">
        {{index}}&#45;&#45;{{item}}
      </li>
    </ul>-->
   <div v-if="books.length<=0">
     <h1>此购物车为空</h1>
   </div>
    <div v-else="books.length>0">
    <table>
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
      <tr v-for="item in books">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.date}}</td>
        <td>{{item.price | showPrice}}</td>
        <td>
          <button @click="decrement(item.id)" :disabled="item.count<=1">-</button>
          {{item.count}}
          <button @click="increment(item.id)">+</button>
        </td>
        <td> <button @click="removecliack(item.id)">移除</button></td>
      </tr>
      </tbody>
    </table>
    <h2>总价格：{{totalPrice | showPrice}}</h2>
      </div>
  </div>
</template>

<script>
    export default {
        name: "index",
      data() {
          return {
          /*names:["张三","李四","叶云里","mjx","哈啊哈"],
          reindex:0,*/
          books:[
            {
              id:1,
              name:"《我爱你》",
              date:"2019-10-8",
              price:85.00,
              count:1

            },
            {
              id:2,
              name:"《java》",
              date:"2019-1-8",
              price:59.00,
              count:1

            },
            {
              id:3,
              name:"《css》",
              date:"2019-09-8",
              price:39.00,
              count:1

            },
            {
              id:4,
              name:"《vue》",
              date:"2020-10-8",
              price:43.00,
              count:1

            }],
            sum:0,
            isDisabled:false,

      }},
      methods:{
          liclick(index){
            this.reindex=index;
          },
        getsum(){
            this.sum=0;
            for (let i=0;i<this.books.length;i++){
             this.sum+=this.books[i].count*this.books[i].price
            }
        },
        increment(id){
            this.books.forEach((item,index)=>{
              if (item.id==id){
                this.books[index].count++;
              }
            })
         // this.getsum();
        },
        decrement(id){
          this.books.forEach((item,index)=>{
            if (item.id==id){
              if ( this.books[index].count>1){
                this.books[index].count--;
              }else {
                this.books[index].count=1;

              }


            }
          })
          //this.getsum();
        },
        removecliack(id){
            this.books.forEach((item,index)=>{
              if (item.id==id){
                this.books.splice(index,1)

              }
            })
         // this.getsum();

        },
      },
      /*created() {
          this.getsum()
      },*/
      filters :{
          showPrice(price){
            return "¥"+ price.toFixed(2)
          }
      },
      computed:{
        totalPrice(){
        let sum=0;
          for (let i=0;i<this.books.length;i++){
            sum+=this.books[i].count*this.books[i].price
          }
          return sum;
        }
      },
    }
</script>

<style scoped>
  table{
    border: 1px solid  #42b983;
    border-collapse: collapse;
    border-spacing: 0;
  }
  th,td{
    padding: 8px 16px;
    border: 1px solid  #42b983;
    text-align: left;
  }
  th{
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: 600;
  }
</style>
