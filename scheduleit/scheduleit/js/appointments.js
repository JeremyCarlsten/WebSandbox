function buildAppointment(name, email, phone, time, amPm) {
    var appointment = $('<div class="appointment"></div>');

    appointment.append('<div class="appointment-overview"></div>');
    appointment.find('.appointment-overview').append('<img class="remove-control" src="images/remove.png"/>');
    appointment.find('.appointment-overview').append('<img class=" dropdown-control" src="images/arrowheadLeft.png"/>');
    appointment.find('.appointment-overview').append('<p>'+time + amPm+' '+name+'</p>');

    appointment.append('<div class="appointment-details"></div>');
    appointment.find('.appointment-details').append('<ul></ul>');
    appointment.find('.appointment-details ul').append('<li>Full Name:'+ name +'</li>');
    appointment.find('.appointment-details ul').append('<li>Phone Number:'+ phone +'</li>');
    appointment.find('.appointment-details ul').append('<li>Email Address:'+ email +'</li>');

    return appointment;
}

function appointmentInterface(appointmentButton) {
    appointmentButton.fadeOut('normal', function () {
        $('.appointment-form').fadeIn('normal');
    });
}

function fadeOutAppointmentForm(appointmentFormSubButton) {
    $(appointmentFormSubButton).closest('.appointment-form').fadeOut('fast', function () {
        $(this).closest('.page-controls').find('.add-appointment').fadeIn('fast');
    });
}

$("#appointments").on('click', '.dropdown-control', function () {
    $(this).closest('.appointment').find('.appointment-details').slideToggle('normal');
    var currentSrc = $(this).attr('src');
    if (currentSrc.toLowerCase().indexOf('arrowheadleft') >= 0) {
        $(this).fadeOut("fast", function () {
            $(this).attr('src', currentSrc.replace("arrowheadLeft", "arrowheadDown")).fadeIn("fast");
        });
    } else {
        $(this).fadeOut("fast", function () {
            $(this).attr('src', currentSrc.replace("arrowheadDown", "arrowheadLeft")).fadeIn("fast");
        });
    }
});

$("#appointments").on('click', '.remove-control', function () {
    var conf = confirm("You are about to remove this appointment. \n Proceed? ");

    if (conf == true) {
        $(this).closest('.appointment').remove();
    }
});

$(".page-controls").on('click', '.remove-new-control', function () {
    var conf = confirm("You are about to cancel this appointment. \n Proceed? ");

    if (conf == true) {
        fadeOutAppointmentForm($(this));
    }
});

$(".add-appointment").on('click', function (event) {
    event.preventDefault();
    appointmentInterface($(this));
});

$('.appointment-form').on('click', '.add-it', function (event) {
    event.preventDefault();
    $form = $(this).closest('.appointment-form');

    var name = $form.find('#new-appointment-name').val();
    var email = $form.find('#new-appointment-email').val();
    var phone = $form.find('#new-appointment-phone').val();
    var time = $form.find('#new-appointment-time').val();
    var amPm = $form.find('#new-appointment-am-pm').val();

    $('#appointments').append(buildAppointment(name, email, phone, time, amPm));

    fadeOutAppointmentForm($(this));
});