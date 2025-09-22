/* Template Name: Starty - Multipurpose HTML Template
   Author: Shreethemes
   E-mail: shreethemes@gmail.com
   Created: August 2021
   Version: v1.3.0
   Updated: February 2021
   File Description: Contact Form Js
*/
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const comments = document.getElementById("comments").value.trim();

      const messageLines = [
        `📩 *Portfolio Contact*`,
        `👤 Name: ${name}`,
        `📧 Email: ${email}`,
        `📝 Subject: ${subject || 'N/A'}`,
        `💬 Message: ${comments}`
      ];

      const message = messageLines.join('\n');
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      // WhatsApp number with country code (India in this case)
      const phoneNumber = "916395525749"; 

      const whatsappUrl = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');
      form.reset(); // Reset form after submit
    });
  });


 /*
  The above code was written in plain JavaScript because the project uses Bootstrap 5 with JS.
  To use jQuery instead, include the jQuery library in your HTML file **before the closing </body> tag**:
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  Then replace the JS code with the jQuery version below.

  $(document).ready(function () {
    $("#myForm").on("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Collect form values
      const name = $("#name").val().trim();
      const email = $("#email").val().trim();
      const subject = $("#subject").val().trim();
      const comments = $("#comments").val().trim();

      // Prepare the WhatsApp message
      const messageLines = [
        `📩 *Portfolio Contact*`,
        `👤 Name: ${name}`,
        `📧 Email: ${email}`,
        `📝 Subject: ${subject || 'N/A'}`,
        `💬 Message: ${comments}`
      ];

      const message = messageLines.join('\n');

      // Detect if device is mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const phoneNumber = "916395525749";

      // Construct WhatsApp URL
      const whatsappUrl = isMobile
        ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      // Reset the form
      $("#myForm")[0].reset();
    });
  });
*/