new Vue({
  el: '#app',
  data: {
    gamerHealth: 100,
    monsterHealth: 100,
    gameIsOver: false
  },
  methods: {
    attack: function() {
      if(this.gameIsOver) {
        return;
      }
      this.gamerHealth = this.gamerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 10);
      this.gameOverChecker();
    },
    specialAttack: function() {
      if(this.gameIsOver) {
        return;
      }
      this.gamerHealth = this.gamerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 15);
      this.gameOverChecker();
    },
    heal: function() {
      if(this.gameIsOver) {
        return;
      }
      this.gamerHealth = this.gamerHealth + Math.floor(Math.random() * 10);
    },
    giveUp: function() {
      if(this.gameIsOver) {
        return;
      }
      this.gamerHealth = 0;
      this.gameIsOver = true;
    },
    gameOverChecker: function() {
      if((this.gamerHealth === 0 || this.gamerHealth < 0) || (this.monsterHealth === 0 || this.monsterHealth < 0)) {
        this.gameIsOver = true;
        if(this.gamerHealth === 0 || this.gamerHealth < 0) {
          this.gamerHealth = 0
        }
        if(this.monsterHealth === 0 || this.monsterHealth < 0) {
          this.monsterHealth = 0
        }
      }
    }
  }
});