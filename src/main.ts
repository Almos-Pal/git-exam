import "./style.css";

let numberArray: number[] = [];

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
  <label for"input">Item: </label>
    <input type="number" name="input" id="input">
    <button  id="btn" >Add new item</button>

    <ul id="list">
    
    </ul>
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
