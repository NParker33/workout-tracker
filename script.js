"use strict";

/*

This is the documentation for the gym workout tracker app. 

As a user, I want to be able to:
    1. Track the date of my workout 
    2. Track the time of my workout
    3. Log the type of my workout (upper, lower, full body, cardio, etc)
    4. Log the exercises in my workout
        4a) Track the weight
        4b) Track the reps
        4c) Track the sets
    5. See if I'm progressively overloading my exercises
    6. Preserve each workout to look back on in the future

Features required:
    1. Date picker to keep track of the workout date
    2. Timer to time a 'live' workout
    3. Form to input exercise name, weight, reps, and sets
    4. Display all workouts with, date and type, in a list (with ability to sort based on date or type)
    5. Expand workout upon selection


Classes required:
    * Workout
    * Exercise
    * App

Workout info will contain:
    * id
    * workout type (upper, lower, etc...)
    * list of exercises completed
    * time of workout
    * date of workout

Exercise info will contain:
    * name of exercise
    * number of reps
    * number of sets
    * weight used


Considerations:
 - Will a set need to have its own class?
 - How will different reps and weights for different sets be logged?
*/

const btnNewWorkout = document.querySelector(".btn--new-workout");
const containerWorkouts = document.querySelector(".workouts");
const containerExercises = document.querySelector(".workouts__exercises");
const workouts = document.querySelectorAll(".workouts__workout");
const exercises = document.querySelectorAll(".workouts__exercise");

// Classes

class Workout {
  date = new Date();
  id = (Date.now() + "").slice(-10); // CHANGE LATER

  constructor(duration, type) {
    this.duration = duration;
    this.type = type;
    this.exercises = [];
  }

  addExercise(name, numSets) {
    const exercise = new Exercise(name, numSets);
    // this.exercises.push(exercise);
  }
}

class Exercise {
  constructor(name) {
    this.name = name;
    this.sets = []; // array of each individual set
  }

  addSet(reps, weight) {
    this.sets.push({reps, weight});
    this.getNumSets(); // update set count with each push (will be used for displaying exercise information later)
  }

  getNumSets() {
    this.numSets = this.sets.length;
  }
}

/*

- How do I want to enter set info? Form row that allows user to enter reps and weight, then click 'Add Set' button. After clicking, first set is pushed to set list, and next row displays for next set. 
        btnAddSet.addEventListener('click', exercise.addSet(reps, weight));

- How addExercise should work:
    1) user selects '+ Add Exercise' button
    2) Form is displayed to enter exercise name and number of sets (MAY NOT BE NECESSARY) Instead, user can just keep pressing '+' to add a set. Number doesn't need to be pre-defined. That MAY require having a Set class.

*/

// class Set {
//     constructor(reps, weight){
//         this.reps = reps;
//         this.weight = weight;
//     }
// }
