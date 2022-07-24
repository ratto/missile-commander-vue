<template>
    <div id="game-container">
        <div class="h-100 w-100">
            <div class="d-block title-header text-center align-self-start">
                <h1>Level 1</h1>
            </div>
            <div class="h-100 d-flex align-items-center justify-content-center">
                <div class="main-control">
                    <b-card no-body class="text-center">
                        <b-card-body class="d-flex flex-column justify-content-end">
                                <b-button variant="danger" @click="changeView('/')">Exit</b-button>
                        </b-card-body>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LevelOneView',
    methods: {
        changeView(view) {
            this.$router.push(view);
        }
    }
}
</script>

<style lang="scss" scoped>
#game-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}

.title-header {
    position: absolute;
    right: 0;
    left: 0;
    margin-top: 4rem;
}

.card {
    width: 60rem;
}

.card-body {
    min-height: 10rem;
}
</style>