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
            },
            {
                label: 'Shamppo Family Pack',
                purchased: false,
            },
            {
                label: 'Lux Soap 150g 12',
                purchased: false,
            }
        ]
    },
    methods: {
        // saveItem: function() {
        //     this.items.push(this.newItem);
        //     this.newItem='';
        // },
        saveItem: function() {
            this.items.push({
                label: 'this.newItem',
                purchased: false,
            },);
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';

        }
    }
});