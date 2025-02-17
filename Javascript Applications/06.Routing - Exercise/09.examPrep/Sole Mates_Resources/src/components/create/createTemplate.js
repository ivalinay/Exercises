import { html } from "../../../node_modules/lit-html/lit-html.js";

export const createTemplate = (submitHandler) => html` <section id="create">
  <div class="form">
    <h2>Add item</h2>
    <form class="create-form" @submit=${submitHandler}>
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
      <input type="text" name="model" id="shoe-model" placeholder="Model" />
      <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
      <input type="text" name="release" id="shoe-release" placeholder="Release date" />
      <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
      <input type="text" name="value" id="shoe-value" placeholder="Value" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;
