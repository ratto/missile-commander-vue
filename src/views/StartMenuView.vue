<template>
    <div id="game-container">
        <div class="h-100 w-100">
            <div class="d-block title-header text-center align-self-start">
                <h1>Missile Command</h1>
                <small>Remake</small>
            </div>
            <div class="h-100 d-flex align-items-center justify-content-center">
                <div class="main-control">
                    <b-card no-body class="text-center">
                        <template #header>
                            <h2>Main Menu</h2>
                        </template>
                        <b-card-body class="d-flex flex-column justify-content-around">
                                <b-button variant="primary" @click="changeView('level-1')">Start Game</b-button>
                                <b-button variant="primary" @click="changeView('options')">Options</b-button>
                        </b-card-body>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartMenuView',
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
    width: 20rem;
}

.card-body {
    min-height: 10rem;
}
</style>