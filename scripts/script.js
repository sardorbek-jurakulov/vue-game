 new Vue({
  el: '#app',
  data: {
    gamerHealth: 100,
    monsterHealth: 100,
    gameIsOver: false,
    specialAttackController: 0,
    specialAttackUnactive: true,
    winnerIs: '',
    gameOverallProcess: []
  },
  methods: {
    /*******************************************************\ 
     * 
     * external communication methods
     * 
    \*******************************************************/
    attack: function() {
      // checking for game is over or not, if game finished button will not reply for click
      if(this.gameIsOver) {
        return;
      }

      // checking for special attack is available, that is check gamer attacked two time
      if(this.specialAttackController === 0 || this.specialAttackController < 2) {
        this.specialAttackController++
        if(this.specialAttackController === 2) {
          this.specialAttackUnactive = false;
        }
      } else {
        this.specialAttackController = 0;
        this.specialAttackUnactive = true;
      }

      // attack performing and storing actions count
      let monsterHittingCount = Math.floor(Math.random() * 10);
      let gamerHittingCount = Math.floor(Math.random() * 10);

      this.gamerHealth = this.gamerHealth - monsterHittingCount;
      this.monsterHealth = this.monsterHealth - gamerHittingCount;

      // unshifting actions result to overall actions data storage 
      this.gameOverallProcess.unshift(
        {
          monsterHittingCount: monsterHittingCount,
          gamerHittingCount: gamerHittingCount
        }
      );

      // checking for after action, is gamer's or monster's health not finished?
      this.gameOverChecker();

    },
    specialAttack: function() {
      // checking for game is over or not, if game finished button will not reply for click
      if(this.gameIsOver) {
        return;
      }

      // checking for special attack is available
      if(this.specialAttackController === 0 || this.specialAttackController < 2) {
        return;
      }
      this.gamerHealth = this.gamerHealth - Math.floor(Math.random() * 10);
      this.monsterHealth = this.monsterHealth - Math.floor(Math.random() * 15);

      // Offing special attack button conditionally after using it
      this.specialAttackController = 0;
      this.specialAttackUnactive = true;
      this.gameOverChecker();
    },
    heal: function () {
      // checking for game is over or not, if game finished button will not reply for click
      if(this.gameIsOver) {
        return;
      }

      // checking for user thealth is not full
      if(this.gamerHealth === 100 || this.gamerHealth > 100) {
        this.gamerHealth = 100;
        return;
      }

      // acting heal for user health
      this.gamerHealth = this.gamerHealth + Math.floor(Math.random() * 20) - Math.floor(Math.random() * 10);
      if(this.gamerHealth === 100 || this.gamerHealth > 100) {
        this.gamerHealth = 100;
      }
    },
    giveUp: function () {
      // checking for game is over or not, if game finished button will not reply for click
      if(this.gameIsOver) {
        return;
      }

      // acting user's give up
      this.gamerHealth = 0;
      this.gameOverChecker();
    },
    restartGame: function () {
      // acting restart game
      this.gamerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsOver = false;
      this.specialAttackController = 0;
      this.specialAttackUnactive = true;
    },

    /**********************************************\ 
     * 
     * internal communication methods
     * 
    \**********************************************/
    gameOverChecker: function () {
      if((this.gamerHealth === 0 || this.gamerHealth < 0) || (this.monsterHealth === 0 || this.monsterHealth < 0)) {
        this.gameIsOver = true;
        if(this.gamerHealth === 0 || this.gamerHealth < 0) {
          this.gamerHealth = 0
          this.winnerIs = 'monster';
        }
        if(this.monsterHealth === 0 || this.monsterHealth < 0) {
          this.monsterHealth = 0
          this.winnerIs = 'gamer';
        }
      }
    },
    gameProcessWather: function (actionName) {

    }
  }
});