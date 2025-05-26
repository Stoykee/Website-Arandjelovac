function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const emailFormat = /\S+@\S+\.\S+/;
    const passwordFormat = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!emailFormat.test(email)) {
      alert('E-mail adresa nije ispravna!');
      return false;
    }

    if (!password.match(passwordFormat) || password !== confirmPassword) {
      alert('Lozinka nije ispravno uneta ili se ne poklapa!');
      return false;
    }

    return true;
  }