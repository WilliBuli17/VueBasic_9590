new Vue( {
    el: '#app',
    data: {
        newItem: '',
        newPriority: '',
        newDesc: '',
        mhs: {
            nama: 'Styephen William Buli',
            npm: 180709590,
            kelas: 'PAW Kelas B',
        },
        items: [],
    },
    computed: {
        reversedItems() {
            return this.items.slice( 0 ).reverse();
        },
    },
    methods: {
        addItem: function () {
            this.items.push( {
              id: this.items.length + 1,
              name: this.newItem,
              priority: this.newPriority,
              desc: this.newDesc,
              completed: false,
            } );
            this.newItem = '';
            this.newPriority = '';
            this.newDesc = '';
        },
        resetItem: function () {
            this.newItem = '';
            this.newPriority = '';
            this.newDesc = '';
        },
        toggleCompleted: function ( item ) {
            item.completed = !item.completed;
        },
        removeItem: function ( item ) {
            this.items = this.items.filter( ( newItem ) => newItem.name !== item.name );
        },
    },
} );