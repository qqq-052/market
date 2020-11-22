<template>
 <div class="recommend">
     <div v-for="(item,key) in recommends" :key="key" class="recommend-item">
         <a :href="item.link">
             <img :src="item.image" alt="">
             <div>{{item.title}}</div>
         </a>
     </div>
 </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props: {
            recommends: {
                type: Array,
                default() {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .recommend {
        display: flex;
        text-align: center;
        font-size: 12px;
        padding:15px 0 15px 0;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 80%;
        height: 80%;
        margin-bottom: 10px;
    }
</style>