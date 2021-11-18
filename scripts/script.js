 new Vue({
  el: '#app',
  data: {
    gamerHealth: 100,
    monsterHealth: 100,
    gameIsOver: false,
    specialAttackController: 0,
    specialAttackUnactive: true,
  },
  methods: {
    attack: function() {
      if(this.gameIsOver) {
        return;
      }
      if(this.specialAttackController === 0 || this.specialAttackController < 2) {
        this.specialAttackController++
        if(this.specialAttackController === 2) {
          this.specialAttackUnactive = false;
        }
      } else {
        this.specialAttackController = 0;
        this.specialAttackUnactive = true;
      }
      this.gamerHealth = this.gamerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 10);
      this.gameOverChecker();
    },
    specialAttack: function() {
      if(this.gameIsOver) {
        return;
      }
      if(this.specialAttackController === 0 || this.specialAttackController < 2) {
        return;
      }
      this.gamerHealth = this.gamerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 15);
      this.specialAttackController = 0;
      this.specialAttackUnactive = true;
      this.gameOverChecker();
    },
    heal: function() {
      if(this.gameIsOver) {
        return;
      }
      this.gamerHealth = this.gamerHealth + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 10);
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