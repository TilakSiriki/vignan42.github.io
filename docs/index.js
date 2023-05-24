$(document).ready(function() {
  $("#1").click(function() {
    $(".cont").html('<a href="https://e42.dev/code-trace/"><h4>LOOPS</h4><p><b>About:</b>This module covers walkthroughs programs for loops. You\'ll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>for-loops, while-loops, do-while loops</p></a>');

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(12);
  });

  $("#2").click(function() {
    $(".cont").html('<a href="https://replit.com/teams/join/ycdibbhavbsdzxfelbodfybnwdhvgezr-Vignan-py-4th-sem"><h4>FUNCTIONS</h4><p><b>About:</b>This module covers fundamentals of functions. You\'ll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>functions, Recursions, flow of programs</p></a>');

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(11);
  });

  $("#3").click(function() {
    $(".cont").html("<p>comming soon</p>");

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(13);
  });

  $("#4").click(function() {
    $(".cont").html("<h4>Data Structures and Algorithms</h4><p><b>About:</b>This module covers fundamentals of DSA. You'll gain problem-solving skills through practical exercises</p><p><b>Topics Covered:</b>ArrayList, Switch cases, Strings, Sorting, StringBuilder, BufferReader, Recursion & Data Interpretation</p>");

    // Add the CSS class
    $(".cont").addClass("transi");

    // Remove the CSS class after a certain duration
    setTimeout(function() {
      $(".cont").removeClass("transi");
    }, 1000);

    // Call the change_color function
    change_color(14);
  });
});

function change_color(id) {
  $(".circle").removeClass("concentric");
    var i=id;
    $("#" + i).addClass("concentric");
      }
