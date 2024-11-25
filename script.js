$(function() {
  
    // Initialize petInfo With Default Values
    var petInfo = {
        name: "Charlie",
        weight: 5, 
        happiness: 5,
        energy: 5
    };
  
    // Sound Effects for Button Clicks
    var happySound = new Audio('https://cdn.glitch.global/9e3603b7-c71a-4aa3-8ea6-2180e2dd7d0c/happy-sound.mp3?v=1731314345116'); // Happiness Increase
    var sadSound = new Audio('https://cdn.glitch.global/9e3603b7-c71a-4aa3-8ea6-2180e2dd7d0c/sad-sound.mp3?v=1731314346699'); // Happiness Decrease

    // Display's the Initial Pet Information
    checkAndUpdatePetInfoInHtml(petInfo);

    // Event Listeners for Button Clicks to Trigger Corresponding Functions
    $('.treat-button').click(function() { clickedTreatButton(petInfo); }); 
    $('.play-button').click(function() { clickedPlayButton(petInfo); }); 
    $('.exercise-button').click(function() { clickedExerciseButton(petInfo); }); 
    $('.nap-button').click(function() { clickedNapButton(petInfo); }); 
    $('.bath-button').click(function() { clickedBathButton(petInfo); }); 
    $('.vet-visit-button').click(function() { clickedVetVisitButton(petInfo); });
    $('.groom-button').click(function() { clickedGroomButton(petInfo); });
    $('.walk-button').click(function() { clickedWalkButton(petInfo); });
    $('.feed-button').click(function() { clickedFeedButton(petInfo); });
    $('.cuddle-button').click(function() { clickedCuddleButton(petInfo); });
    $('.medicine-button').click(function() { clickedMedicineButton(petInfo); });
    $('.pet-button').click(function() { clickedPetButton(petInfo); });
  
    // Function to Handle When the Treat Button is Clicked
    function clickedTreatButton(pet) {
        pet.happiness += 2; 
        pet.weight += 1; 
        pet.energy += 1; 
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " Loved the Treat!"); 
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Play Button is Clicked
    function clickedPlayButton(pet) {
        pet.happiness += 3; 
        pet.weight -= 1; 
        pet.energy -= 2;
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " Had so Much Fun Playing!"); 
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Exercise Button is Clicked
    function clickedExerciseButton(pet) {
        pet.happiness -= 1; 
        pet.weight -= 2; 
        pet.energy -= 2;
        playSound(sadSound); // Play Sad Sound
        displayNotification(pet.name + " Had a Tough Workout!"); 
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Nap Button is Clicked
    function clickedNapButton(pet) {
        pet.happiness += 1; 
        pet.energy += 10;
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " Feels Refreshed After a Nap!"); 
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Bath Button is Clicked
    function clickedBathButton(pet) {
        pet.happiness += 2; 
        pet.energy -= 1;
        playSound(happySound);
        displayNotification(pet.name + " Enjoyed the Bath!"); 
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Vet Visit Button is Clicked
    function clickedVetVisitButton(pet) {
        pet.happiness -= 2; 
        pet.weight += 1;
        pet.energy -= 2;
        playSound(sadSound); // Play Sad Sound
        displayNotification(pet.name + " Visited the Vet. It's for Their Health!"); 
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Groom Button is Clicked
    function clickedGroomButton(pet) {
        pet.happiness -= 2;
        pet.energy -= 1;
        playSound(sadSound); // Play Sad Sound
        displayNotification(pet.name + " Looks Great After Grooming!");
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Walk Button is Clicked
    function clickedWalkButton(pet) {
        pet.happiness += 2;
        pet.weight -= 1;
        pet.energy -= 2;
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " Had a Nice Walk!");
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Feed Button is Clicked
    function clickedFeedButton(pet) {
        pet.happiness += 1;
        pet.weight += 2;
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " is Full and Happy After Eating!");
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Handle When the Cuddle Button is Clicked
    function clickedCuddleButton(pet) {
        pet.happiness += 4;
        pet.energy -= 2;
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " Loved the Cuddles!");
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }
  
    // Function to Handle When the Medicine Button is Clicked
    function clickedMedicineButton(pet) {
        pet.happiness -= 1; 
        playSound(sadSound); // Play Sad Sound
        displayNotification(pet.name + " Took Some Medicine. It's For Their Well-Being!");
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }
  
    // Function to Handle When the Pet Button is Clicked
    function clickedPetButton(pet) {
        pet.happiness += 2; 
        playSound(happySound); // Play Happy Sound
        displayNotification(pet.name + " Enjoyed Being Petted!");
        checkAndUpdatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Check and Update Pet's Info
    function checkAndUpdatePetInfoInHtml(pet) {
        //  Ensures Attributes are Within Valid Ranges Before Proceeding
        checkWeightHappinessEnergyBeforeUpdating(pet);

        // Disable All Buttons Initially
        toggleButtons(true);

        // Enable Actions that Raise Attributes at 0
        if (pet.happiness === 0) {
            enableSpecificButton('.treat-button'); 
            enableSpecificButton('.play-button'); 
            enableSpecificButton('.cuddle-button'); 
            enableSpecificButton('.pet-button'); 
        }
      
        if (pet.energy === 0) {
            enableSpecificButton('.nap-button'); 
            enableSpecificButton('.treat-button'); 
        }
      
        if (pet.weight === 0) {
            enableSpecificButton('.feed-button'); 
            enableSpecificButton('.treat-button'); 
        }

        // If None are at 0, Enable All Buttons
        if (pet.happiness > 0 && pet.energy > 0 && pet.weight > 0) {
            toggleButtons(false);
        }

        updatePetInfoInHtml(pet); // Updates Pet Info
    }

    // Function to Enable or Disable All Buttons
    // If 'disable' is True, All Buttons on the Page Will be Disabled.
    // If 'disable' is False, All Buttons on the Page Will be Enabled.
    function toggleButtons(disable) {
        $('button').prop('disabled', disable);
    }

    // Function to Enable Specific Button
    // Enables Button(s) that Match the Given Selector by Setting the 'disabled' Property to False.
    function enableSpecificButton(selector) {
        $(selector).prop('disabled', false);
    }

    // Function to Ensure Weight, Happiness, and Energy Values are not Negative
    function checkWeightHappinessEnergyBeforeUpdating(pet) {
        if (pet.weight < 0) {
            pet.weight = 0; 
            displayNotification("Oops! " + pet.name + " is too Light. Time for Some Food!");
        }
      
        if (pet.happiness < 0) {
            pet.happiness = 0; 
            displayNotification(pet.name + " is Sad. Time for Some Love!"); 
        }
      
        if (pet.energy < 0) {
            pet.energy = 0; 
            displayNotification(pet.name + " is Too Tired. Time for a Nap!"); 
        }
    }

    // Function to Update Pet's Info
    function updatePetInfoInHtml(pet) {
        $('.name').text(pet['name']); // Updates HTML element with Class "Name"
        $('.weight').text(pet['weight']); // Updates HTML element with Class "Weight"
        $('.happiness').text(pet['happiness']); // Updates HTML element with Class "Happiness"
        $('.energy').text(pet['energy']); // Updates HTML element with Class "Energy"
    }

    // Function to Display a Notification with a Message
    function displayNotification(message) {
        var notification = $('<p class="notification">' + message + '</p>');
        $('.notification-messages').append(notification);

        // Automatically Remove's the Notification After 1.5 Seconds
        setTimeout(function() {
            // Fades out the "Notification" Element Over 0.5 Seconds
            notification.fadeOut(500, function() {
                $(this).remove(); // Remove's the "Notification" Element From the DOM
            });
        }, 1500); // Waits for 1.5 seconds Before Executing fadeOut
    }

    // Function to Play a Sound Effect When a Button is Clicked
    function playSound(sound) {
        sound.currentTime = 0; // Reset's Sound to the Beginning
        sound.play(); // Play's a Sound when Clicked On
    }
});
