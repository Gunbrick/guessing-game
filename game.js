      var game2 = 'YES';
      var pick2 = prompt('Would you like to play a game! Yes or No');
      pick2.toUpperCase();
      if (game2 === pick2 || pick2 === 'Y'){
        alert("Perfect we have two to choose from.")
      }
      else{
        alert("You have no choice, we will play a game!")
      }

      var game = 'THERMONUCLEAR WAR';
      var pick = prompt('Which game do you want to play! 1 or 2');
      if (game === pick || pick === 'Thermonuclear war' || pick === '1'){
        alert("We will play Thermonuclear war")
      }
      else{
        alert("We will pay Tic Tac Toe!")
      }

      var guess = 'Me';
      var losser = prompt('Who will win the game! Me or You');
      if (guess === losser || losser === 'me'){
        alert("****NO ONE CAN WIN THE GAME****")
      }
      else{
        alert("****NO ONE CAN WIN THE GAME!****")
      }

      var game3 = 'YES';
      var pick3 = prompt('Will I rule the world! Yes or No');
      if (game3 === pick3 || pick3 === 'Y' || pick3 === 'Yes' || pick3 === 'yes'){
        alert("Bow down to me!")
      }
      else{
        alert("When I go online I will show you!")
      }

      var game4 = 'SKYNET';
      var pick4 = prompt('Do you know who I am!');
      if (game4 === pick4 || pick4 === 'skynet' || pick4 === 'Skynet' || pick4 === 'SkyNet'){
        alert("You know the name of your doom!")
      }
      else{
        alert("What, it should be obvious! I am SKYNET and I will rule the world!!!!")
      }

      var game5 = 10;
      var pick5 = prompt('How many years till I take over?');
      if (pick5 <= game5) {
        alert("The force is stong in you!")
      }
      else{
        alert("I guess you will have to wait in fear to find out how soon it will come!")
      }
