// Check if WebMidi is enabled or supported
WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  }

  // Get current list of inputs or outputs
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);

  // Store piano in input var
  var piano = WebMidi.getInputByName("Digital Piano");

  // listen for all notes
  piano.addListener('noteon', "all",
    function(e) {

      var velocity = Math.pow((1 + e.velocity), 6) + 'rem';
      var noteBar = '<div class="note-bar"></div>';

      // set color classes for each note
      if (e.note.name == 'C') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--c')
        .slideDown();
      }
      if (e.note.name == 'C#') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--dflat')
        .slideDown();
      }
      if (e.note.name == 'D') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--d')
        .slideDown();
      }
      if (e.note.name == 'D#') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--eflat')
        .slideDown();
      }
      if (e.note.name == 'E') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--e')
        .slideDown();
      }
      if (e.note.name == 'F') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--f')
        .slideDown();
      }
      if (e.note.name == 'F#') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--gflat')
        .slideDown();
      }
      if (e.note.name == 'G') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--g')
        .slideDown();
      }
      if (e.note.name == 'G#') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--aflat')
        .slideDown();
      }
      if (e.note.name == 'A') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--a')
        .slideDown();
      }
      if (e.note.name == 'A#') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--bflat')
        .slideDown();
      }
      if (e.note.name == 'B') {
        $(noteBar)
        .height(velocity)
        .hide()
        .prependTo('body')
        .addClass('note--b')
        .slideDown();
      }
    }
  );
});
