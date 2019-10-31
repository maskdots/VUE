// new Vue ({
//     el: '#shopping-list',
//     data: {
//         header: 'Here is Vue First Exercise'
//     }
// });

// 2nd Way
var shoppingList = new Vue ({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'Shopping List App',
        newItem: '',
        items: [
            {
                label: 'Cooking Oil 5Ltr',
                purchased: true,
                highPriority: false,
            },
            {
                label: 'Shamppo Family Pack',
                purchased: false,
                highPriority: false,
            },
            {
                label: 'Lux Soap 150g 12',
                purchased: false,
                highPriority: true,
            },
        ]
    },
    computed: {
        characterCount() {
            return this.newItem.length;
        },
        reversedItems() {
            return this.items.slice(0).reverse();
        }
    },
    methods: {
        // saveItem: function() {
        //     this.items.push(this.newItem);
        //     this.newItem='';
        // },
        saveItem: function() {
            this.items.push({
                label: this.newItem,
                purchased: false,
            },);
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';
        },
        togglePurchased: function (item) {
            item.purchased = !item.purchased;
        },

        removeItem: function (index) {
            let reversedItems =  this.items.slice(0).reverse();
            reversedItems.splice(index, 1);
            this.items = reversedItems.slice(0).reverse(); 
        },
    }
});
