      var game2 = 'YES';
      var pick2 = prompt('Would you like to play a game! Yes or No');
      pick2 = pick2.toUpperCase();
      if (game2 === pick2 || pick2 === 'Y'){
        alert("Perfect we have two to choose from.")
        document.getElementById('YES').innerHTML = "<img src='thumb.jpg'>"
      }
      else{
        alert("You have no choice, we will play a game!")
      }

      var game = 'THERMONUCLEAR WAR';
      var pick = prompt('Which game do you want to play! 1 or 2');
      pick = pick.toUpperCase();
      if (game === pick || pick === '1'){
        alert("We will play Thermonuclear war")
        document.getElementById('THERMONUCLEAR WAR').innerHTML = "<img src='bomb.jpg'>"
      }
      else{
        alert("We will pay Tic Tac Toe!")
      }

      var guess = 'ME';
      var losser = prompt('Who will win the game! Me or You');
      guess = guess.toUpperCase();
      if (guess === losser || losser === 'M'){
        alert("****NO ONE CAN WIN THE GAME****")
        document.getElementById('ME').innerHTML = "<img src='thumb.jpg'>"
      }
      else{
        alert("****NO ONE CAN WIN THE GAME!****")
      }

      var game3 = 'YES';
      var pick3 = prompt('Will I rule the world! Yes or No');
      game3 = game3.toUpperCase();
      if (game3 === pick3 || pick3 === 'Y'){
        alert("Bow down to me!")
      }
      else{
        alert("When I go online I will show you!")
      }

      var game4 = 'SKYNET';
      var pick4 = prompt('Do you know who I am!');
      game4 = game4.toUpperCase();
      if (game4 === pick4 || pick4 === 'YES' || pick4 === 'yes'){
        alert("You know the name of your doom!")
        document.getElementById('SKYNET').innerHTML = "<img src='bomb.jpg'>"
      }
      else{
        alert("What, it should be obvious! I am SKYNET and I will rule the world!!!!")
      }

      var game5 = 10;
      var pick5 = prompt('How many years till I take over?');
      if (pick5 <= game5) {
        alert("The force is stong in you!")
        document.getElementById('10').innerHTML = "<img src='thumb.jpg'>"
      }
      else{
        alert("I guess you will have to wait in fear to find out how soon it will come!")
      }
