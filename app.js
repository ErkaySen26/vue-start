const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.cvcim.com.tr',
      showBooks: true,
      books: [
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true }
      ],
      x: 0,
      y: 0,
      eventMessage: ''
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(){
      book.isFav=!book.isFav

      
    },
    handleEvent(event) {
      this.eventMessage = `${event} event triggered`;
      console.log(this.eventMessage);
    },
    handleMousemove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    computed :{
        filteredBooks(){
           return this.books.filter((book)=>book.isFav)
        }
    }
  }
});

app.mount('#app');
