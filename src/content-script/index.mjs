import Browser from "webextension-polyfill";

const container = document.createElement("div");

async function run(question) {
  container.className = "chat-gpt-container";
  container.innerHTML = '<p class="loading">Waiting for ChatGPT response...</p>';

  const port = Browser.runtime.connect();
  port.onMessage.addListener(function (msg) {
    if (msg.answer) {
      container.innerHTML = '<p><span class="prefix">ChatGPT:</span><pre></pre></p>';
      container.querySelector("pre").textContent = msg.answer;
    } else if (msg.error === "UNAUTHORIZED") {
      container.innerHTML =
        '<p>Please login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a> first</p>';
    } else {
      container.innerHTML = "<p>Failed to load response from ChatGPT</p>";
    }
  });
  port.postMessage({ question });
}



if(location.hostname.match("google")){
  const siderbarContainer = document.getElementById("rhs");
  if (siderbarContainer) {
    siderbarContainer.prepend(container);
  } else {
    container.classList.add("sidebar-free");
    document.getElementById("rcnt").appendChild(container);
  }
  const searchInput = document.getElementsByName("q")[0];
  if (searchInput && searchInput.value) {
    // only run on first page
    const startParam = new URL(location.href).searchParams.get("start") || "0";
    if (startParam === "0") {
      run(searchInput.value);
    }
  }
}else if(location.hostname.match("toutiao")){
  const siderbarContainer = document.getElementsByClassName("s-side-list")[0];
  siderbarContainer.prepend(container);
  const searchInput = document.querySelector('input[type]');
  if (searchInput && searchInput.value) {
      run(searchInput.value);
  }
}else if(location.hostname.match("baidu")){
  const siderbarContainer = document.getElementById("con-ceiling-wrapper");
  if(siderbarContainer){
    siderbarContainer.prepend(container);
  }else{
    const content_right = document.createElement("div");
    const content_left = document.getElementById("content_left");
    container.classList.add("sidebar-free");
    content_right.setAttribute("id","content_right");
    content_right.setAttribute("tabindex","1");
    content_right.className = "cr-offset";
    content_left.parentNode.insertBefore(content_right,content_left.nextSibling);
    document.getElementById("content_right").appendChild(container);
  }
  const searchInput = document.getElementById("kw");
  if (searchInput && searchInput.value) {
      run(searchInput.value);
  }
}else if(location.hostname.match("bing")){
  const siderbarContainer = document.getElementById("b_context");
  siderbarContainer.prepend(container);
  const searchInput = document.getElementsByName("q")[0];
  if (searchInput && searchInput.value) {
      run(searchInput.value);
  }
}

