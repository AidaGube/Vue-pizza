<template>
    <div class="container">
        <div class="empty">
            <h1>Корзина пустая 😕</h1>
            <p>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            <img :src="emptyCartIcon" alt="emptyCartIcon">
            <div class="buttons">
                <div class="button button--outline button--add go-back-btn">
                    <span>Вернуться назад</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emptyCartIcon from "@/assets/img/empty-cart.png"

export default {
    setup() {


        return{
            emptyCartIcon
        }
    }
}
</script>

<style lang="scss">
.empty{
    text-align: center;
    padding: 160px 0;

    h1{
        // font-family: "Raleway";
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
        letter-spacing: 0.01em;
        color: #000000;
    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 145.4%;
        text-align: center;
        letter-spacing: 0.01em;
        color: #777777;

        width: 550px;
        margin: 11px auto;
    }

    img{
        width: 300px;
        margin-bottom: 70px;
    }

    .buttons{

        .button{
            border:2px solid #282828;
            
            span{
                color: #282828;
            }
        }
        :hover{
            span{
                color: #fff;
            }
            background: #282828;
        }
    }
}
</style>