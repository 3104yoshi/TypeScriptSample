class Form_Element {
  host_element: HTMLDivElement;
  template_element: HTMLTemplateElement;
  customized_element: HTMLFormElement;
  titleInputElement : HTMLInputElement;
  descriptionInputElement : HTMLInputElement;
  mandayInputElement : HTMLInputElement;

  constructor() {
    this.host_element = document.getElementById("app")! as HTMLDivElement;
    this.template_element = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.customized_element = this.template_element.content
      .firstElementChild! as HTMLFormElement;
    this.customized_element.id = "user-input";

    this.titleInputElement = this.customized_element.querySelector("#title")! as HTMLInputElement;
    this.descriptionInputElement = this.customized_element.querySelector("#title")! as HTMLInputElement;
    this.mandayInputElement = this.customized_element.querySelector("#title")! as HTMLInputElement;

    // bind がないと、submit_project のthisはform を参照する
    this.customized_element.addEventListener("submit", this.submit_project);

    this.attach();
  }

  private submit_project(event : Event){
    // イベントのデフォルトの操作 (submit のデフォルトはフォームの内容を指定したURLへ送信する、というもの) をキャンセル
    event.preventDefault();
    console.log(this);
    console.log(this.titleInputElement.value);
  }

  private attach() {
    this.host_element.insertAdjacentElement(
      "afterbegin",
      this.customized_element
    );
  }
}

const form_element = new Form_Element();