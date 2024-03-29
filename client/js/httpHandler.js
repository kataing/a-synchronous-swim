(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  
  // TODO: build the swim command fetcher here
  const getSwimCommand = () => {
    $.ajax({
      type: 'GET',
      url: serverUrl,
      error: () => {console.log('YOU ERRORED')},
      success: (data) => {
        var actions = data.split(',');
        for(var i = 0; i < actions.length; i++) {
          SwimTeam.move(actions[i]);
        }
      }
    });
  }
  getSwimCommand();

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    // console.log(file);
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'http://127.0.0.1:3000',
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        // reload the page
        console.log('success', data)

        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
