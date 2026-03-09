<script setup>
defineProps({
    titulo: String,
    total:Number,
    gorjeta:Number,
    porPessoa:Number,
})
</script>
<template>
    <div class="conteudo">
         <h3><span class="mdi mdi-cash-100"></span> {{ titulo }}</h3>
         <div class="precos">

         <div>
         <p><span class="mdi mdi-cash-100"></span> Total:</p>
         <p><span class="mdi mdi-currency-usd"></span> Gorjeta:</p>
        </div>

        <div class="valores">
        <p>R$ {{ total }}</p>
        <p class="gorjeta">R$ {{ gorjeta }}</p>
        </div>

        </div>
        <hr class="linha">
        <div class="porPessoa">
        <span class="mdi mdi-account-multiple">Por Pessoa:</span>
        <p>R$ {{ porPessoa }}</p>
        </div>
    </div>
</template>
<style scoped>
.conteudo{
    background-color: #fff;
    padding: 10px;
    border-radius: 20px;
    color: #000;
    border-top: solid 4px #780088;
    box-shadow: 4px 4px 10px #272727;
}
.precos{
    display: flex;
}
.valores{
    justify-items: right;
    margin: 0 0 0 52vw;
    
}
.linha{
    border: 0;
    border-top: 1px solid; 
    border-image: linear-gradient(to right, #780088, #f8037e ) 1;
    margin: 10px auto;

}

h3 span{
    color: #780088;
    background: #7800883a;
    border-radius: 7px;
    padding: 4px;
}
.gorjeta{
    color: #780088;
    background-color: #78008827;
    padding: 5px;
    border-radius: 7px;
}
.porPessoa{
    display: flex;
}
.porPessoa span{
    margin: 7px 0 0 0 ;
}
.porPessoa p{
 background-image: linear-gradient(to right, #780088, #f8037e  );
 padding: 7px;
 color: #fff;
 border-radius: 7px;
 font-size: 1.2rem;
 margin: 0 0 0 42vw;
}
</style>