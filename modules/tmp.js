function reply_edit(btnel, rid) {
  var form = $(btnel).parents('form');
  var checkFields = ['.field'];
  var checkThings = ['textarea'];
  var checkPass = true;

  $.each(checkFields, function (i, value) {
    var field = form.find(value);
    var input = field.find(checkThings[i]);

    if (!input.val()) {
      field.addClass('error');
      checkPass = false;
    } else {
      field.removeClass('error');
    }

  });

  if (checkPass) {
    var csrf = form.find('input[name=csrf]').val();
    var content = form.find('textarea').val();
    var data = {
      csrf: csrf,
      reply: {
        id: rid,
        content: content,
      },
    };

    var ro = $(form).parents('.reply');
    form.remove();
    var rc = ro.find('.reply-content');
    rc.show();

    $.ajax({
      type: "POST",
      url: '/topic/reply/edit',
      data: data,
      success: function (data) {
        rc.find('.dimmer').remove();
        if (!data || data.err) {
          //alert(data.err);
          return;
        }
        rc.html(data.reply.content);
      },
      dataType: 'json',
    });
  }
  return false;
}




function reply_edit_cancel(btnel, rid) {
  var form = $(btnel).parents('form');
  var ro = $(form).parents('.reply');
  var rc = ro.find('.reply-content');

  form.remove();
  
  rc.find('.dimmer').remove();
  rc.show();
}


function check_reply() {
  var form = $('#topic_reply_form');
  var checkFields = ['#reply_text'];
  var checkThings = ['textarea'];
  var checkPass = true;

  $.each(checkFields, function (i, value) {
    var field = form.find(value);
    var input = field.find(checkThings[i]);

    if (!input.val()) {
      field.addClass('error');
      checkPass = false;
    } else {
      field.removeClass('error');
    }

  });

  if (checkPass) {
    form.submit();
  }
}