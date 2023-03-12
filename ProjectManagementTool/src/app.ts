class Form_Element {
  host_element: HTMLDivElement;
  template_element: HTMLTemplateElement;
  customized_element: HTMLFormElement;

  constructor() {
    this.host_element = document.getElementById("app")! as HTMLDivElement;
    this.template_element = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.customized_element = this.template_element.content
      .firstElementChild! as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.host_element.insertAdjacentElement(
      "afterbegin",
      this.customized_element
    );
  }
}

const form_element = new Form_Element();

function Add_Project() {}
