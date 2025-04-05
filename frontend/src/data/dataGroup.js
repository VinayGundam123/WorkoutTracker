const dataGroup = [
    // Day 1: Push (Chest, Shoulders, Triceps)
    [
      { 
        id: 0, type: "Warmup", 
        data: [
          { id: 1, type: "Jump Rope" }, 
          { id: 2, type: "Dynamic Arm Circles" }, 
          { id: 3, type: "Push-Ups" }
        ] 
      },
      { 
        id: 1, type: "Chest", 
        data: [
          { id: 1, type: "Barbell Bench Press" }, 
          { id: 2, type: "Incline Dumbbell Press" },  
          { id: 3, type: "Machine Flys" }
        ] 
      },
      { 
        id: 2, type: "Shoulders", 
        data: [
          { id: 1, type: "Dumbell Shoulder Press" }, 
          { id: 2, type: "Lateral Raises" }, 
          { id: 3, type: "Rear Delt Flys" }
        ] 
      },
      { 
        id: 3, type: "Triceps", 
        data: [ 
          { id: 1, type: "Triceps Rope Pushdowns" }, 
          { id: 2, type: "Overhead Dumbbell Extension" }
        ] 
      }
    ],
    // Day 2: Pull (Back, Biceps, Forearms)
    [
      { 
        id: 0, type: "Warmup", 
        data: [
          { id: 1, type: "Jump Rope" }, 
          { id: 2, type: "Dynamic Stretching" }, 
          { id: 3, type: "Dead Hangs" }
        ] 
      },
      { 
        id: 1, type: "Back", 
        data: [
          { id: 1, type: "Lat Pulldowns" }, 
          { id: 2, type: "Bent-Over Rows" }, 
          { id: 3, type:  "Shrugs"},
          { id: 4, type: "Deadlifts" }
        ] 
      },
      { 
        id: 2, type: "Biceps", 
        data: [
          { id: 1, type: "Barbell Curls" }, 
          { id: 2, type: "Dumbbell Hammer Curls" }
        ] 
      },
      { 
        id: 3, type: "Forearms", 
        data: [
          { id: 1, type: "Wrist Curls" }, 
          { id: 2, type: "Reverse Wrist Curls" }
        ] 
      }
    ],
    // Day 3: Legs & Abs
    [
      { 
        id: 0, type: "Warmup", 
        data: [
          { id: 1, type: "Jump Rope" }, 
          { id: 2, type: "Bodyweight Squats" }, 
          { id: 3, type: "Leg Swings" }
        ] 
      },
      { 
        id: 1, type: "Legs", 
        data: [
          { id: 1, type: "Barbell Squats" }, 
          { id: 2, type: "Hamstring Curls" }, 
          { id: 3, type: "Leg Press" }, 
          { id: 4, type: "Standing Calf raises" }
        ] 
      },
      { 
        id: 2, type: "Abs", 
        data: [
          { id: 1, type: "Hanging Leg Raises" }, 
          { id: 2, type: "Plank Holds" }, 
          { id: 3, type: "Russian Twists" }
        ] 
      }
    ],
    // Day 4: Push (Same as Day 1, but variation)
    [
      { 
        id: 0, type: "Warmup", 
        data: [
          { id: 1, type: "Jump Rope" }, 
          { id: 2, type: "Push-Ups" }, 
          { id: 3, type: "Arm Circles" }
        ] 
      },
      { 
        id: 1, type: "Chest", 
        data: [
          { id: 1, type: "Incline Barbell Bench Press" }, 
          { id: 2, type: "Flat Dumbbell Press" }, 
          { id: 3, type: "Cable Crossovers" }, 
          { id: 4, type: "Dips" }
        ] 
      },
      { 
        id: 2, type: "Shoulders", 
        data: [
          { id: 1, type: "Arnold Press" }, 
          { id: 2, type: "Lateral Raises" }, 
          { id: 3, type: "Cable Rear Delt Flys" }, 
          { id: 4, type: "Shrugs" }
        ] 
      },
      { 
        id: 3, type: "Triceps", 
        data: [
          { id: 1, type: "Dips" }, 
          { id: 2, type: "Skull Crushers" }, 
          { id: 3, type: "Triceps Rope Extensions" }, 
          { id: 4, type: "Close-Grip Push-Ups" }
        ] 
      }
    ],
    // Day 5: Pull (Same as Day 2, but variation)
    // Day 6: Legs & Abs (Same as Day 3)
];

export default dataGroup;