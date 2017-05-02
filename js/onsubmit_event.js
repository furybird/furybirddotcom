//Below function executes on form submit
function validateForm() {
  var form = document.forms.cform;
  var valid = true;

  var name = form.elements.name.value;
  var nameLabel = form.querySelector('label[for=name]');
  if (name) {
    nameLabel.classList.remove('missing');
  } else {
    valid = false;
    nameLabel.classList.add('missing');
  }

  var subject = form.elements.subject.value;
  var subjectLabel = form.querySelector('label[for=subject]');
  if (subject) {
    subjectLabel.classList.remove('missing');
  } else {
    valid = false;
    subjectLabel.classList.add('missing');
  }

  var email = form.elements.email.value;
  var emailLabel = form.querySelector('label[for=email]');
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (email) {
    emailLabel.classList.remove('missing');
    if (email.match(emailReg)) {
      emailLabel.classList.remove('formaterror');
    } else {
      valid = false;
      emailLabel.classList.add('formaterror');
    }
  } else {
    valid = false;
    emailLabel.classList.add('missing');
  }

  return valid;
}
