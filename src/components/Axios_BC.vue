<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id = "chart">
            <lectureProblem></lectureProblem>
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import lectureProblem from '../lectureProblem.js'

export default {
    components:{
        axiosExample,PSIIndex, lectureProblem
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>