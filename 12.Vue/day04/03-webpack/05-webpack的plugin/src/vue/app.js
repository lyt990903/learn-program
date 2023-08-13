export default {
  template: `
    <div>
      <h2>{{message}}</h2>
      <h2>{{name}}</h2>
      <button @click="btnClick">按钮</button>
    </div>
  `,
  data() {
    return {
      message: "Hello Vue",
      name: "LYT",
    };
  },
  methods: {
    btnClick() {
      console.log("btn is clicked");
    },
  },
};