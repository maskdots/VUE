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
        header: 'Shopping List App',
        newItem: '',
        items: [
            'Cooking Oil 5Ltr',
            'Shamppo Family Pack',
            'Lux Soap 150g 12',
        ]
    },
    methods: {
        saveItem: function() {
            this.items.push(this.newItem);
            this.newItem='';
        }
    }
});