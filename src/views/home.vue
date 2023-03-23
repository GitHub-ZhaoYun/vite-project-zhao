<script setup>
import TodoItem from '@/components/TodoItem.vue';
import TreeItem from '@/components/TreeItem.vue';

const text = ref('Edit me');
const checkedNames = ref(['Jack']);
let buttonName = ref('按钮1');
let buttonName1 = reactive({
    a: 1,
    b: '2',
    c: '3',
    d: 'dasdasd'
});
let buttonName2 = reactive('str');
const buttonNameClick = () => {
    buttonName.value = '按钮2';
    buttonName1 = {f: 2};
    console.log(buttonName1);
};
const groceryList = ref([
    {id: 0, text: 'Vegetables'},
    {id: 1, text: 'Cheese'},
    {id: 2, text: 'Whatever else humans are supposed to eat'}
]);
const treeData = ref({
    name: 'My Tree',
    children: [
        {name: 'hello'},
        {name: 'world'},
        {
            name: 'child folder',
            children: [
                {
                    name: 'child folder',
                    children: [{name: 'hello'}, {name: 'world'}]
                },
                {name: 'hello'},
                {name: 'world'},
                {
                    name: 'child folder',
                    children: [{name: 'hello'}, {name: 'world'}]
                }
            ]
        }
    ]
});
</script>

<template>
    <input v-model="buttonName" />
    {{ buttonName }}
    <br />
    <div>
        <div></div>
    </div>
    <input id="jack" v-model="checkedNames" type="checkbox" value="Jack" />
    <label for="jack">Jack</label>
    <input id="john" v-model="checkedNames" type="checkbox" value="John" />
    <label for="john">John</label>
    <input id="mike" v-model="checkedNames" type="checkbox" value="Mike" />
    <label for="mike">Mike</label>
    <div class="ellipsisClass">
        <span>asdas</span>
        aswfaqs wfasfa sfasfas
    </div>
    <el-button @click="buttonNameClick">
        {{ buttonName }}
    </el-button>
    <TodoItem
        v-for="item in groceryList"
        :key="item.id"
        :todo="item"
    ></TodoItem>
    <h2>1.vite 中的 tree-shaking</h2>
    <ul>
        <TreeItem :model="treeData" class="item"></TreeItem>
    </ul>
    <progress max="100" value="22"></progress>
</template>

<style lang="scss" scoped>
p {
    font-size: $font-size-normal;
}

.ellipsisClass {
    width: 100px;
    height: 33px;
    @include ellipsis(2);
}

.item {
    cursor: pointer;
    line-height: 1.5;
}

.bold {
    font-weight: bold;
}

</style>
<style>
progress {
    width: 200px;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
}

progress::-webkit-progress-bar {
    background-color: indianred;
}

progress::-webkit-progress-value {
    background-color: cadetblue;
}
</style>
