const submitBtn = document.getElementById("submitBtn");
const messageList = document.getElementById("messageList");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const newMessage = `
    <div class="col-md-6">
      <div class="message-card">
        <div class="message-name">
          <i class="fa-solid fa-circle-user"></i>
          ${name}
        </div>

        <div class="message-text">
          ${message}
        </div>
      </div>
    </div>
  `;

  messageList.innerHTML += newMessage;

  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
});
