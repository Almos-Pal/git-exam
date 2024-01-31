import "./style.css";

let numberArray: number[] = [];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <label for"input">Item: </label>
    <input type="number" name="input" id="input">
    <button  id="btn" >Add new item</button>

    <ul id="list">
    </ul>
    <button  id="btn_max" >show the maximum value</button>
    <div id="max_result"></div>
  </div>

`;

document.getElementById("btn")?.addEventListener("click", () => {
  let number: number = parseInt(
    (document.getElementById("input") as HTMLInputElement).value
  );
  if (Number.isNaN(number)) {
    alert("empty input block");
  } else {
    console.log(number);
    numberArray.push(number);
    console.log(numberArray);
    (document.getElementById("input") as HTMLInputElement).value = "";

    let list = document.getElementById("list") as HTMLElement;
    list.innerHTML = "";
    numberArray.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = element.toString() + ",";
      list?.append(li);
    });
  }
});

document.getElementById("btn_max")?.addEventListener("click", () => {
  if (numberArray.length == 0) {
    alert("empty array");
  } else {
    let max: number = numberArray[0];
    numberArray.forEach((element) => {
      if (max < element) {
        max = element;
      }
    });
    let res = document.getElementById("max_result") as HTMLElement;
    res.innerHTML = max.toString();
  }
});
