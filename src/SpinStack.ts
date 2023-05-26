import { OrderPayload } from "./OrderPayload";

export class SpinStack {
  public api_key: string;
  static setup(api_key: string) {
    return new SpinStack(api_key);
  }
  constructor(api_key: string) {
    this.api_key = api_key;
  }

  public initializePayment = async (data: OrderPayload) => {
    this.displayLoading();
    let response;
    try {
      response = await fetch("https://eo1onhxcc6n1esc.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.api_key}`,
        },
        body: JSON.stringify(data),
      });
      this.removeLoading();
      return response.json();
    } catch (error) {
      console.log(error);
      this.removeLoading();
    }
  };

  private displayLoading() {
    const html = `<div class="half-circle-spinner">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>`;
    const css = `.half-circle-spinner, .half-circle-spinner * {
        box-sizing: border-box;
      }
  
      .half-circle-spinner {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        position: relative;
      }
  
      .half-circle-spinner .circle {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: calc(60px / 10) solid transparent;
      }
  
      .half-circle-spinner .circle.circle-1 {
        border-top-color: #ff1d5e;
        animation: half-circle-spinner-animation 1s infinite;
      }
  
      .half-circle-spinner .circle.circle-2 {
        border-bottom-color: #ff1d5e;
        animation: half-circle-spinner-animation 1s infinite alternate;
      }
  
      @keyframes half-circle-spinner-animation {
        0% {
          transform: rotate(0deg);
  
        }
        100%{
          transform: rotate(360deg);
        }
      }`;
    //   append css to head
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);

    //   append html to body
    const div = document.createElement("div");
    div.id = "spinstack-loading";
    //   let it be in the middle of the page
    div.style.position = "absolute";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.innerHTML = html;
    document.body.appendChild(div);

    //   add an overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.id = "spinstack-overlay";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "999";
    document.body.appendChild(overlay);
  }

  private removeLoading() {
    const loading = document.querySelector("#spinstack-loading");
    const overlay = document.querySelector("#spinstack-overlay");
    if (loading) {
      loading.remove();
    }
    if (overlay) {
      overlay.remove();
    }
  }
}
