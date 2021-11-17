new Vue({
  el: '#app',
  data: {
    gamerHealth: 100,
    monsterHealth: 100,
  },
  methods: {
    attack: function() {
      this.gamerHealth = this.gamerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 10);
    }
  }
});