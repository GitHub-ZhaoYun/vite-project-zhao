<script setup>
const text = ref('Edit me')
const checkedNames = ref(['Jack'])
let buttonName = ref('按钮1')
const buttonNameClick = () => {
    buttonName.value = '按钮2'
}
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
    <div class="ellipsisClass">aswfaqs wfasfa sfasfas</div>
    <el-button @click="buttonNameClick">
        {{ buttonName }}
    </el-button>
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
</style>
