<template>
    <div class="footer">
        <div class="item">
            <a href="https://github.com/DavidAriasM/Buscador-GoogleBooks-Vuejs" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/david-arias-maulen-58432692/" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
            </a>
            <a href="mailto:arias.maulen@gmail.com">
                <font-awesome-icon :icon="['fab', 'google-plus-square']" size="2x"/>
            </a>
            <a href="https://codepen.io/pen/" target="_blank">
                <font-awesome-icon :icon="['fab', 'codepen']" size="2x"/>
            </a>
        </div>
    </div>
</template>

<style scoped>
.footer{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    background: #ecf0f1;
    bottom: 0;
    margin-top: 250px;
}
.item{
    float: right;
}
.item a{
margin: 10px;
color: #34495E;
}

@media(max-width:300px){
    a{
        font-size: 14px;
    }
}
</style>