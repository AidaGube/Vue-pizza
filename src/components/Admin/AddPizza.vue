<template>
    <div class="add__product">
        <h1>Добавление новой пиццы</h1>
        <h3>Выберите параметры продукта</h3>
        <form>
            <div class="inputs">
                <div>
                    <label>Название</label>
                    <input v-model="pizzaName" type="text" placeholder="Пицца пепперони">
                </div>
                <div>
                    <label>Путь к картинке</label>
                    <input v-model="pizzaImg" type="text">
                </div>
            </div>

            <div class="selectors">
                <div class="selectors-up">
                    <div class="select__sizes">
                        <label>Размеры</label>
                        <div class="sizes">
                            <div  
                            @checkbox="checkbox(index)"
                                v-for="(item) in sizeItems" 
                                :key="item" class="size">
                                <Checkbox 
                                @selectedValue="handleSizeCheckboxes"  
                                :pizzaSizes="pizzaSizes"
                                :value="item" 
                                :labelValue="`${item} см`" />
                            </div>
                        </div>
                    </div>
                    <div class="select__types">
                        <label>Типы</label>
                        <div class="types">
                            <Checkbox 
                             @selectedValue="handleTypeCheckboxes"  
                                v-for="(item,index) in typeItems" 
                                 :value="index"
                                :key="item" 
                                :labelValue="item"/>
                        </div>
                    </div>
                </div>
                <div class="select__prices">
                    <label>Цены</label>

                    <div class="prices">
                        <div v-for="item in priceItems" :key="item" class="price">
                            <span>{{item.size}}</span>
                            <div>{{item.price}} сом</div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="down__info">
                <p>Не забудьте указать цену для разных резмеров пиццы*</p>
                <button class="button">Далее</button>
            </div>
        </form>
    </div>
</template>

<script>
import Checkbox from "@/components/Checkbox/Checkbox"
import { ref } from '@vue/reactivity'
export default {
    components: {Checkbox},
    setup() {
        const pizzaName = ref('');
        const pizzaImg = ref ('');
        const pizzaSizes = ref([]);
        const pizzaTypes =ref([]);
        const pizzaPrices =ref('');
        const pizzaCategory =ref(0);
        const pizzaRating=ref(0);


       const handleSizeCheckboxes = (value) => {
           if (pizzaSizes.value.includes(value)) {
               pizzaSizes.value = pizzaSizes.value.filter(item => item !== value)
               return
           }
           pizzaSizes.value.push(value)
           pizzaSizes.value.sort()
       }

       const handleTypeCheckboxes = (value) => {
           if (pizzaTypes.value.includes(value)) {
               pizzaTypes.value = pizzaTypes.value.filter(item => item !== value)
               return
           }
           pizzaTypes.value.push(value)
           pizzaTypes.value.sort()
       }





        const priceItems = [{size: 26, price: 345},{size: 30, price: 455},{size: 40, price: 620},]
        const sizeItems = [26,30,40]
        const typeItems = ["Традиционное","Тонкое"]

        const addedPizza = {
        imageUrl: "",
        name: "",
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 803,
        category: 0,
        rating: 4
      }

        return{
            priceItems,
            sizeItems,
            typeItems,
            pizzaName,
            pizzaImg,
            pizzaSizes,
            pizzaTypes,
            pizzaPrices,
            pizzaCategory,
            pizzaRating,
            handleSizeCheckboxes,
            handleTypeCheckboxes
        }
    }
    
}
</script>

<style lang="scss">
.add__product{
    label{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.01em;
        color: rgba(44, 44, 44, 0.5);
    }
    .selectors{
        margin-top: 20px;
        .selectors-up{
            display: flex;
            .select__types{
                .types{
                    margin-top: 10px;
                }
            }
            .select__sizes{
                margin-right: 100px;
                .sizes{
                    display: flex;
                    margin-top: 10px;
                    .size{
                        margin-right: 30px;
                    }
                }
            }
        }
        .prices{
            display: flex;
            flex-wrap: wrap;
            width: 330px;
            margin-top: 10px;
            .price{
                display: flex;
                align-items: center;
                margin: 0 20px 20px 0px;
                div{
                    background: #FFFFFF;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
                    border-radius: 50px;
                    padding: 15px 20px;
                    margin-left: 10px;

                    font-style: normal;
                    font-weight: 300;
                    font-size: 18px;
                    line-height: 21px;
                    letter-spacing: 0.01em;
                    color: rgba(44, 44, 44, 0.6);
                }
                span{

                    background: #2C2C2C;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.08);
                    border-radius: 100px;
                    color: #FFFFFF;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-style: normal;
                    font-weight: 300;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: 0.01em;

                }
            }
        }
    }
    .inputs{
        display: flex;
        div{
            display: flex;
            flex-direction: column;
            input{
                background: #FFFFFF;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                border-radius: 30px;
                padding: 15px 22px;
                width: 330px;
                margin-top: 10px;
                outline: none;
                border: none;
            }
            &:last-child{
                margin-left: 60px;
            }
        }
    }
}
</style>