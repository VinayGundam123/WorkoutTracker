const dataExcercise = [
  {
    id: 1,
    name: "Jump Rope",
    description:
      "Jump Rope is a highly effective cardiovascular exercise that not only improves your heart health but also enhances your coordination, agility, and endurance. This full-body workout engages your legs, arms, and core while burning calories quickly, making it an excellent warm-up or standalone exercise. It's perfect for beginners and advanced athletes alike, as you can easily adjust the intensity by varying your speed or jump style.",
    duration: "5 minutes",
    level: "Beginner",
    equipment: "Jump Rope",
    imageUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMm5weWJkbm11Mzhyc3ZkbHNlaWR0d3M5YWkxdmkxbGt2NmcwaDEyZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUNd9JTtcmYNhOLNeg/giphy.gif",
  },
  {
    id: 2,
    name: "Dynamic Arm Circles",
    description:
      "Dynamic Arm Circles are an essential warm-up exercise designed to increase blood flow to your shoulders and improve joint mobility. By performing controlled circular motions with your arms, you prepare your upper body for intense workouts while reducing the risk of injury. This exercise is particularly beneficial for loosening tight shoulders and enhancing flexibility, making it ideal for any upper-body routine or sports activity.",
    duration: "2 minutes",
    level: "Beginner",
    equipment: "None",
    imageUrl: "https://cdn.jefit.com/assets/img/exercises/gifs/867.gif",
  },
  {
    id: 3,
    name: "Push-Ups",
    description:
      "Push-Ups are a foundational bodyweight exercise that strengthens multiple muscle groups simultaneously, including the chest, shoulders, triceps, and core. This versatile movement is perfect for building upper-body strength and improving posture. Whether you're a beginner or an advanced athlete, push-ups can be modified to suit your fitness level. They also help enhance functional strength for everyday activities by mimicking natural pushing motions.",
    duration: "3 sets of 10-15 reps",
    level: "Beginner",
    equipment: "None",
    imageUrl: "https://cdn.jefit.com/assets/img/exercises/gifs/47.gif",
  },
  {
    id: 4,
    name: "Barbell Bench Press",
    description:
      "The Barbell Bench Press is a classic compound exercise that primarily targets the chest muscles while also engaging the shoulders and triceps. It is a staple in strength training routines and is highly effective for building upper-body strength and muscle mass. By lying on a flat bench and pressing a weighted barbell upward, you develop power and stability in your chest. This exercise is ideal for intermediate and advanced lifters aiming to maximize their pushing strength.",
    duration: "4 sets of 8-12 reps",
    level: "Intermediate",
    equipment: "Barbell, Bench Press Station",
    imageUrl: "https://cdn.jefit.com/assets/img/exercises/gifs/2.gif",
  },
  {
    id: 5,
    name: "Incline Dumbbell Press",
    description:
      "The Incline Dumbbell Press is a versatile exercise designed to target the upper portion of your chest muscles while also engaging your shoulders and triceps. Performing this movement on an incline bench helps emphasize the upper chest, creating a well-rounded and defined look. Using dumbbells allows for a greater range of motion compared to barbells, helping improve muscle symmetry and stability. This exercise is perfect for those looking to enhance their chest development and overall upper-body strength.",
    duration: "3 sets of 10-12 reps",
    level: "Intermediate",
    equipment: "Dumbbells, Incline Bench",
    imageUrl: "https://cdn.jefit.com/assets/img/exercises/gifs/31.gif",
  },
  {
    id: 6,
    name: "Machine Flys",
    description:
      "Cable Flys are an isolation exercise that focuses on the chest muscles, specifically the inner portion, helping create definition and shape. By using cables, you maintain constant tension throughout the movement, which maximizes muscle engagement. This exercise is performed by standing between two cable machines and pulling the handles inward in a controlled manner, mimicking a hugging motion. Cable Flys are excellent for sculpting your chest while improving stability and coordination.",
    duration: "3 sets of 12-15 reps",
    level: "Intermediate",
    equipment: "Cable Machine",
    imageUrl: "https://cdn.jefit.com/assets/img/exercises/gifs/45.gif",
  },
  {
    id: 7,
    name: "Dumbbell Shoulder Press",
    description:
      "The Dumbbell Shoulder Press is a powerful exercise that targets the shoulder muscles, specifically the deltoids, while also engaging the triceps and upper chest. By pressing dumbbells overhead, you develop strength, stability, and muscle definition in your shoulders. This exercise can be performed seated or standing, making it versatile for different fitness levels. It's an essential movement for building upper-body strength and improving functional fitness.",
    duration: "3 sets of 8-10 reps",
    level: "Intermediate",
    equipment: "Dumbbells",
    imageUrl: "https://example.com/dumbbell-shoulder-press.jpg",
  },
  {
    id: 8,
    name: "Lateral Raises",
    description:
      "Lateral Raises are an isolation exercise that primarily targets the lateral deltoid muscles, helping to create well-rounded shoulders and improve shoulder stability. By lifting dumbbells out to the sides in a controlled manner, you enhance muscle definition and symmetry. This exercise is essential for developing the 'cap' of the shoulder and is often included in shoulder workouts. Lateral Raises can be performed with light weights to focus on form and control.",
    duration: "3 sets of 12-15 reps",
    level: "Beginner",
    equipment: "Dumbbells",
    imageUrl: "https://example.com/lateral-raises.jpg",
  },
  {
    id: 9,
    name: "Rear Delt Flys",
    description:
      "Cable Rear Delt Flys are an effective isolation exercise that targets the rear deltoid muscles, helping to improve shoulder stability and posture. By using cables, you maintain constant tension throughout the movement, which enhances muscle engagement. This exercise is performed by pulling the cables outward while keeping your arms slightly bent, mimicking a reverse fly motion. Cable Rear Delt Flys are essential for achieving balanced shoulder development and preventing injuries.",
    duration: "3 sets of 12-15 reps",
    level: "Intermediate",
    equipment: "Cable Machine",
    imageUrl: "https://example.com/cable-rear-delt-flys.jpg",
  },
  {
    id: 10,
    name: "Triceps Rope Pushdowns",
    description:
      "Triceps Rope Pushdowns are an isolation exercise that targets the triceps muscles, specifically the lateral and long heads. This exercise is performed using a cable machine with a rope attachment, allowing for a natural range of motion and optimal muscle activation. By pushing the rope downward while keeping your elbows stationary, you effectively build strength and definition in your triceps. This movement is ideal for enhancing arm size and improving pushing strength, making it a great addition to any upper-body workout routine.",
    duration: "3 sets of 12-15 reps",
    level: "Intermediate",
    equipment: "Cable Machine, Rope Attachment",
    imageUrl: "https://example.com/triceps-rope-pushdowns.jpg",
  },
  {
    id: 11,
    name: "Overhead Dumbbell Extension",
    description:
      "The Overhead Dumbbell Extension is a powerful exercise that focuses on building strength and size in the triceps muscles, particularly the long head. By holding a dumbbell with both hands and extending your arms overhead, you stretch and contract the triceps through a full range of motion. This exercise not only enhances arm definition but also improves functional strength for overhead movements. It is suitable for lifters of all levels and can be performed seated or standing based on preference.",
    duration: "3 sets of 10-12 reps",
    level: "Intermediate",
    equipment: "Dumbbell",
    imageUrl: "https://example.com/overhead-dumbbell-extension.jpg",
  },
  {
    id: 12,
    name: "Dynamic Stretching",
    description:
      "Dynamic Stretching is a warm-up technique that involves active movements to prepare your muscles and joints for exercise. Unlike static stretching, dynamic stretches use functional movements that mimic the activity you're about to perform, helping to increase blood flow, improve flexibility, and reduce the risk of injury. Examples include arm circles, leg swings, and walking lunges. This type of stretching is ideal for athletes or anyone looking to enhance their workout performance and mobility.",
    duration: "5 minutes",
    level: "Beginner",
    equipment: "None",
    imageUrl: "https://example.com/dynamic-stretching.jpg",
  },
  {
    id: 13,
    name: "Dead Hangs",
    description:
      "Dead Hangs are a simple yet highly effective exercise for improving grip strength, posture, and shoulder mobility. By hanging from an overhead bar with your arms fully extended, you engage your forearms, shoulders, and core muscles. This exercise also helps decompress the spine and can alleviate tension in the upper body. Dead hangs are suitable for all fitness levels and can be scaled by increasing hang time or adding advanced variations like single-arm hangs or towel hangs.",
    duration: "3 sets of 20-30 seconds",
    level: "Intermediate",
    equipment: "Pull-Up Bar",
    imageUrl: "https://example.com/dead-hangs.jpg",
  },
  {
    id: 14,
    name: "Lat Pulldowns",
    description: "Lat Pulldowns are a compound exercise designed to target the latissimus dorsi, the largest muscles in your back. This exercise helps build a wider and stronger back while also engaging the biceps, traps, and rhomboids. By pulling a weighted bar down toward your chest, you mimic the motion of a pull-up, making it an excellent alternative for those who struggle with bodyweight exercises. Variations such as wide-grip and reverse-grip pulldowns allow you to target different parts of the lats for balanced development.",
    duration: "3 sets of 10-12 reps",
    level: "Intermediate",
    equipment: "Cable Machine",
    imageUrl: "https://example.com/lat-pulldowns.jpg"
  },
  {
    id: 15,
    name: "Bent-Over Rows",
    description: "Bent-Over Rows are a classic strength-training exercise that primarily targets the muscles of the back, including the lats, traps, rhomboids, and posterior deltoids. This movement also engages the core and lower body for stability. By pulling a barbell or dumbbells toward your torso while maintaining a hinged position, you build strength and mass in your upper back. Proper form is essential to avoid injury and maximize muscle activation. Variations like single-arm dumbbell rows can help correct muscle imbalances.",
    duration: "4 sets of 8-10 reps",
    level: "Intermediate",
    equipment: "Barbell or Dumbbells",
    imageUrl: "https://example.com/bent-over-rows.jpg"
  },
  {
    id: 16,
    name: "Shrugs",
    description: "Shrugs are an isolation exercise that focuses on strengthening the trapezius muscles, which run along your upper back and neck. This exercise is particularly beneficial for improving posture and relieving tension caused by prolonged sitting or poor ergonomics. By lifting your shoulders toward your ears while holding weights, you effectively engage and build your traps. Shrugs can be performed with dumbbells, barbells, or resistance bands, making them versatile for any fitness level.",
    duration: "3 sets of 12-15 reps",
    level: "Beginner",
    equipment: "Dumbbells or Barbell",
    imageUrl: "https://example.com/shrugs.jpg"
  },
  {
    id: 17,
    name: "Deadlifts",
    description: "Deadlifts are one of the most effective compound exercises for building full-body strength. They target multiple muscle groups, including the glutes, hamstrings, quads, lower back, traps, and core. This exercise involves lifting a loaded barbell from the ground to hip height while maintaining a neutral spine. Deadlifts improve posture, enhance athletic performance, and increase functional strength for everyday activities. Variations like Romanian deadlifts and sumo deadlifts allow you to focus on specific muscle groups.",
    duration: "5 sets of 5 reps",
    level: "Advanced",
    equipment: "Barbell",
    imageUrl: "https://example.com/deadlifts.jpg"
  },
  {
    id: 18,
    name: "Barbell Curls",
    description: "Barbell Curls are a fundamental exercise for building biceps size, strength, and overall arm definition. This isolation movement targets the biceps brachii while also engaging the brachialis and forearm muscles as stabilizers. By gripping the barbell shoulder-width apart with an underhand grip, you perform controlled curls that maximize muscle contraction. Proper form includes keeping your elbows tucked at your sides, maintaining a neutral wrist position, and focusing on slow eccentric (lowering) movements to enhance muscle growth. Variations such as wide-grip or close-grip curls allow you to target different areas of the biceps for balanced development.",
    duration: "4 sets of 8-12 reps",
    level: "Intermediate",
    equipment: "Barbell",
    imageUrl: "https://example.com/barbell-curls.jpg"
  },
  {
    id: 19,
    name: "Dumbbell Hammer Curls",
    description: "Dumbbell Hammer Curls are a highly effective exercise for increasing biceps mass and thickness by targeting the brachioradialis and inner biceps head. This movement involves curling dumbbells with a neutral grip (palms facing inward), which minimizes strain on the wrists and emphasizes forearm engagement. Hammer curls can be performed standing or seated, either alternating arms or curling both arms simultaneously. Proper form includes keeping your elbows stationary at your sides, engaging your core, and controlling the weight during both lifting and lowering phases. This exercise is ideal for sculpting well-rounded arms while improving grip strength.",
    duration: "3 sets of 10-12 reps",
    level: "Intermediate",
    equipment: "Dumbbells",
    imageUrl: "https://example.com/dumbbell-hammer-curls.jpg"
  },
  {
    id: 20,
    name: "Wrist Curls",
    description: "Wrist Curls are an isolation exercise designed to strengthen the forearm flexor muscles, which play a crucial role in grip strength and wrist stability. This exercise is performed by holding a barbell or dumbbells with an underhand grip and curling the weight upward using only your wrists. Wrist curls are ideal for athletes, climbers, and anyone looking to improve their grip for functional strength or sports performance. Proper form involves keeping your forearms stationary on a bench or your thighs while focusing on controlled movements to maximize muscle engagement.",
    duration: "3 sets of 12-15 reps",
    level: "Beginner",
    equipment: "Barbell or Dumbbells",
    imageUrl: "https://example.com/wrist-curls.jpg"
  },
  {
    id: 21,
    name: "Reverse Wrist Curls",
    description: "Reverse Wrist Curls target the forearm extensor muscles, which are often neglected in traditional arm workouts. This exercise helps create balanced forearm development while improving grip strength and wrist stability. By holding a barbell or dumbbells with an overhand grip and curling the weight upward using only your wrists, you engage the extensor muscles effectively. Reverse wrist curls are particularly beneficial for injury prevention and enhancing forearm endurance. Proper form includes keeping your forearms stationary on a bench or your thighs while performing slow and controlled movements.",
    duration: "3 sets of 12-15 reps",
    level: "Beginner",
    equipment: "Barbell or Dumbbells",
    imageUrl: "https://example.com/reverse-wrist-curls.jpg"
  },
  {
    id: 22,
    name: "Bodyweight Squats",
    description: "Bodyweight Squats are a foundational exercise that strengthens the lower body muscles, including the quadriceps, glutes, hamstrings, and calves. This movement also engages the core for stability and improves flexibility in the hips and knees. By lowering your hips from a standing position and returning to upright, you enhance functional strength for everyday activities like walking and climbing stairs. Proper form involves keeping your torso upright, weight in your heels, and knees aligned with your toes. Bodyweight squats are ideal for beginners or as a warm-up for advanced workouts.",
    duration: "3 sets of 15 reps",
    level: "Beginner",
    equipment: "None",
    imageUrl: "https://example.com/bodyweight-squats.jpg"
  },
  {
    id: 23,
    name: "Leg Swings",
    description: "Leg Swings are a dynamic stretching exercise that targets the hip muscles and joints while also engaging the hamstrings, quads, and calves. This movement helps improve mobility and flexibility in the lower body while reducing the risk of injury during workouts. To perform leg swings, stand straight with one leg stationary while swinging the other leg forward and backward in a controlled motion. This exercise is perfect as part of a warm-up routine or to loosen up tight hips before lower-body workouts.",
    duration: "2 sets of 20 swings per leg",
    level: "Beginner",
    equipment: "None",
    imageUrl: "https://example.com/leg-swings.jpg"
  },
  {
    id: 24,
    name: "Barbell Squats",
    description: "Barbell Squats are a compound movement that builds strength and size in the lower body muscles, including the quadriceps, glutes, hamstrings, and calves. This exercise also engages stabilizing muscles like the core and lower back. By holding a barbell across your upper back or shoulders while squatting down and standing back up, you develop power and stability in your legs. Proper form involves keeping your chest upright, weight evenly distributed on your feet, and maintaining a neutral spine throughout the movement. Barbell squats are ideal for intermediate to advanced lifters aiming to enhance their athletic performance.",
    duration: "4 sets of 8-10 reps",
    level: "Intermediate",
    equipment: "Barbell",
    imageUrl: "https://example.com/barbell-squats.jpg"
  },
  {
    id: 25,
    name: "Hamstring Curls",
    description: "Hamstring Curls are an isolation exercise that focuses on strengthening the hamstring muscles located at the back of your thighs. This movement is crucial for improving lower-body strength, stability, and injury prevention. To perform hamstring curls using a machine or lying flat on your stomach, bend your knees to lift the weight while keeping your body stable. Proper form includes engaging your core for support and controlling both upward and downward phases of the movement. Hamstring curls are suitable for all fitness levels and help improve athletic performance.",
    duration: "3 sets of 12-15 reps",
    level: "Beginner",
    equipment: "Hamstring Curl Machine or None (for bodyweight variation)",
    imageUrl: "https://example.com/hamstring-curls.jpg"
  },
  {
    id: 26,
    name: "Leg Press",
    description: "The Leg Press is a strength-training exercise that targets the quadriceps, hamstrings, glutes, and calves. Performed on a leg press machine, this movement allows you to lift heavy weights safely while minimizing strain on your lower back. By pushing a weighted sled away from your body using your legs, you build muscle mass and improve lower-body strength. Proper form involves keeping your heels flat on the sled, avoiding knee lockout at full extension, and controlling both upward and downward movements. The leg press is ideal for intermediate lifters looking to add volume to their leg workouts.",
    duration: "4 sets of 10-12 reps",
    level: "Intermediate",
    equipment: "Leg Press Machine",
    imageUrl: "https://example.com/leg-press.jpg"
  },
  {
    id: 27,
    name: "Standing Calf Raises",
    description: "Standing Calf Raises are an isolation exercise that strengthens the calf muscles (gastrocnemius and soleus), which play a vital role in ankle stability and lower-body endurance. This movement involves raising your heels off the ground while keeping your knees slightly bent to engage the calves fully. Proper form includes maintaining balance by holding onto a stable surface or using a calf raise machine for support. Standing calf raises improve posture, balance, and athletic performance in activities like running or jumping.",
    duration: "3 sets of 15-20 reps",
    level: "Beginner",
    equipment: "Calf Raise Machine or None (for bodyweight variation)",
    imageUrl: "https://example.com/standing-calf-raises.jpg"
  },
  {
    id: 28,
    name: "Hanging Leg Raises",
    description: "Hanging Leg Raises are an advanced core exercise that primarily targets the lower abdominal muscles while also engaging the hip flexors, lats, and grip strength. This movement involves hanging from a pull-up bar and lifting your legs in a controlled manner to engage your core. Proper form includes avoiding momentum or swinging and keeping your legs slightly bent if you're a beginner. This exercise is excellent for building core strength, improving spinal stability, and enhancing overall athletic performance.",
    duration: "3 sets of 8-12 reps",
    level: "Advanced",
    equipment: "Pull-Up Bar",
    imageUrl: "https://example.com/hanging-leg-raises.jpg"
  },
  {
    id: 29,
    name: "Plank Holds",
    description: "Plank Holds are an isometric core exercise that strengthens the abdominals, back, shoulders, and hips. By maintaining a straight line from head to toe while supporting your body weight on your forearms and toes, you engage multiple muscle groups simultaneously. Proper form includes keeping your core tight, avoiding sagging or arching your back, and breathing steadily throughout the hold. Plank variations like side planks or extended planks can add variety and challenge to your routine. This exercise is ideal for improving posture, core stability, and overall endurance.",
    duration: "3 sets of 30-60 seconds",
    level: "Beginner to Intermediate",
    equipment: "None",
    imageUrl: "https://example.com/plank-holds.jpg"
  },
  {
    id: 30,
    name: "Russian Twists",
    description: "Russian Twists are a dynamic core exercise that targets the obliques and rectus abdominis while also improving rotational stability and spine flexibility. This exercise involves sitting on the floor with your knees bent and twisting your torso from side to side while holding a weight or clasping your hands together. For added intensity, lift your feet off the ground to create a V-shape with your body. Proper form includes keeping your spine straight, engaging your core throughout the movement, and avoiding rapid or uncontrolled twists. Russian Twists are excellent for building core strength and toning the midsection.",
    duration: "3 sets of 15-20 reps per side",
    level: "Intermediate",
    equipment: "Medicine Ball or Dumbbell (optional)",
    imageUrl: "https://example.com/russian-twists.jpg"
  }
];

export default dataExcercise;
