

// var number = 45;
// var intervalId;
// // starts timer and quiz
// $("#start").on("click", run)

// function run() {
//     clearInterval(intervalId)
//     intervalId = setInterval(decrement, 1000)
//     $(this).hide()
// }

// function decrement() {
//     number--;
//     $("#time-left").html("<h2> Time Left: " + number + "</h2>")

//     if (number === 0) {

//         stop();
//         alert("Time's Up! Click 'Next'!")
//     }
//     function stop() {

//         clearInterval(intervalId);
//     }

// }


// function mainQuestion(question, choices, correctAnswer) {
//     this.question = question;
//     this.choices = choices;
//     this.correctAnswer = correctAnswer;
// }

// var allQuestions = [

//     new mainQuestion("In Final Fantasy 7, who is the main antagonist?", [" Rufus", " Cait Sith", " Sephiroth", " Tifa"], 2),
//     new mainQuestion("Who is a trumpet-wielding robotic cat, perched on top of a giant stuffed mog, controlled by a man far away?", [" Cait Sith", " Yuffie", " Red XIII", " The Diamond Weapon"], 0),
//     new mainQuestion("What is the item that is inserted into a weapon and provides its bearer with the ability to wield magic?", [" Ether", " Buster Sword", " The Diamond Weapon", " Materia"], 3),
//     new mainQuestion("What mystical red-rocked sanctuary is home to Red XIII?", [" Midgar", " Cosmo Canyon", " Narshe", " Koblenz"], 1),
//     new mainQuestion("Gun-toting super transformative genetically modified brooding hero with a heart of gold?", [" Cloud", " Barret", " Cid Highwind", " Vincent"], 3),
//     new mainQuestion("Denizens of the world can go to this amusement park to escape their woes, if only for a short while...", [" The Golden Saucer", " Costa del Sol", " Seventh Heaven", " Sector 7 Slums"], 0),
//     new mainQuestion("What duo makes a non-playable appearance in Final Fantasy 7, as in all Final Fantasies?", [" Abbot and Costello", " Biggs and Wedge", " Hardy and Lowell", " Bonnie and Clyde"], 1),
//     new mainQuestion("What is the materia that comes to bring the end of the world?", [" Fire", " Ice", " Meteor", " Ultima"], 2),

// ];

// var currentquestion = 0;
// var correctAnswers = 0;
// //set up form for answer options
// function setupOptions() {
//     $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
//     var options = allQuestions[currentquestion].choices;
//     var formHtml = '';
//     for (var i = 0; i < options.length; i++) {
//         formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/>';
//     }
//     $('#form').html(formHtml);
//     $(".options:eq(0)").prop('checked', true);
// }
// //function to check correct answers
// function checkAns() {
//     if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
//         correctAnswers++;
//     }
// }

// $(document).ready(function () {

//     var $jumbotron = $(".jumbotron");
//     var $start = $("#start");
//     var $next = $("#next");
//     var $result = $("#result");

//     $jumbotron.hide();
//     $start.click(function () {
//         $jumbotron.fadeIn();
//         $(this).hide();
//     });



//     setupOptions();

//     $next.click(function () {
//         event.preventDefault();
//         checkAns();
//         currentquestion++;

//         if (currentquestion < allQuestions.length) {
//             setupOptions();
//             if (currentquestion == allQuestions.length - 1 || number === 0) {

//                 clearInterval(intervalId)
//                 $next.html("Submit");
//                 $next.click(function () {

//                     $jumbotron.hide();
//                     $result.html("You answered " + correctAnswers + " out of " + currentquestion + " questions correctly! ").hide();
//                     $result.fadeIn(1500);
//                 });

//                 //Somehow need to figure out how to fade directly to "correct answers" message, instead of letting 
//                 //player answer one more question. Close but not quite.
//             }

//         }


//     });


// });

