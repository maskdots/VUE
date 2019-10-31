Vue.component('product', {
   props: {
       premium: {
           type: Boolean,
           required: true
       },
       size: {
        type: String,
        required: true
    },
    price: {
        type: [Number, String],
        required: true
    },
   },
    template: `
    <div class="product">
        <div class="product-img">
            <img v-bind:src="image" alt="sock-img">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>  
            <p v-else :style="styleObject">Out of Stock</p>
            <p>Shipping: {{ shipping }} </p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>
            <div v-for="(variant, index) in variants" 
                :key="variant.variantId" class="color-box"
                :style="{backgroundColor: variant.variantColor}"
                @mouseover="updateProduct(index)">
            </div>
            <div class="product-review">
                <h3>Product Reviews</h3>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                    </li>
                </ul>
            </div>
            <button v-on:click="addToCart()" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
                >Add to Cart
            </button>
            <product-review @review-submitted="addReview"></product-review>   
        </div>
    </div>
    `,
    data() {
        return {
        brand: "Coeus",
        product: 'Socks',
        selectedVariant: 0,
        selectedProducts: [],
        details: ["80% Cotton", "20% Polyster", "Gender-neutral"],
        variants:[
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage:"images/vmSocks-green-onWhite.jpg",
                variantQuantity: 100
            },
            {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: "images/vmSocks-blue-onWhite.jpg",
                variantQuantity: 100
            }
        ],
        styleObject: {
            color: 'red',
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        },
        reviews: []
        }
    },
    methods: {
        addToCart(product = {}) {
            console.log(product);
            //this.selectedProducts.push(product)
            // console.log(this.variants[this.selectedVariant].variantId);
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId )
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.review.push(productReview)
        }
    },
    computed: {
        title () {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping() {
            if(this.premium) {
                return "Free "
            }
            return 2.99
        }
    }   
})
Vue.component('cart', {
    template:`
        <p>Cart:{{this.length}}</p>
    `,
    props: {
        length: {
            type: Number,
            required: true
        }
    }

})
Vue.component('product-review', {
    template: `
    <form action="" class="review-form" @submit.prevent="onSubmit">
        <p>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name">
        </p>
        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"> </textarea>
        </p>
        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </p>
        <p>
            <input type="submit" value="Submit">
        </p>
    </form>
    `,
    data() {
        return {
            name: null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium :true,
        cart: [],
        products: [
            {
                type: 'premium',
                color: 'green',
                price: 100
            },{
                type: 'medium',
                color: 'red',
                price: 60
            },{
                type: 'small',
                color: 'blue',
                price: 30
            },
        ]
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})
