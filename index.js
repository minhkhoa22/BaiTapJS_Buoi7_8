let numberArr = [];

let add = () => {
  //---thêm số vào mảng
  let number = document.getElementById("number").value * 1;
  {
    if (!isNaN(number) && document.getElementById("number").value !== "") {
      numberArr.push(number);
      document.getElementById("listNumber").innerText = numberArr;
      document.getElementById("number").value = "";
    } else {
      alert("Vui lòng nhập số");
    }
  }
};
// clear mảng
let clear = () => {
  numberArr = [];
  document.getElementById("listNumber").innerText = "";
  console.log("Text");
};
// Tổng số dương
let sumPositive = () => {
  let sum = 0;
  numberArr.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  document.getElementById(
    "resultSumPositive"
  ).innerText = `Tổng số dương là: ${sum}`;
};
// Đếm số dương
let countPositive = () => {
  let count = 0;
  numberArr.forEach((num) => {
    if (num > 0) {
      count++;
    }
  });
  document.getElementById(
    "resultcountPositive"
  ).innerText = `Trong mảng có ${count} số dương`;
};
// Tìm số nhỏ nhất
let findMin = () => {
  let min = null;
  numberArr.forEach((num) => {
    if (min > num) {
      min = num;
    }
  });
  document.getElementById("resultfindMin").innerText = `Số nhỏ nhất là: ${min}`;
};
// Tìm số dương nhỏ nhất
let findMinPositive = () => {
  let minPositive = null;
  numberArr.forEach((num) => {
    if (num > 0) {
      if (minPositive > num || minPositive === null) {
        minPositive = num;
      }
    }
  });
  if (minPositive !== null) {
    document.getElementById(
      "resultfindMinPositive"
    ).innerText = `Số nhỏ nhất là: ${minPositive}`;
  } else {
    document.getElementById("resultfindMinPositive").innerText =
      "Không có số dương trong mảng";
  }
};
// Tìm số chẳn cuối cùng
let findLastEven = () => {
  let lastEven = null;
  numberArr.forEach((num) => {
    if (num % 2 == 0) {
      lastEven = num;
    }
  });
  document.getElementById(
    "resultfindLastEven"
  ).innerText = `Số chẳn cuối cùng là: ${lastEven}`;
};
// Đổi vị trí
let changePosition = () => {
  let num1 = document.getElementById("number1").value * 1;
  let num2 = document.getElementById("number2").value * 1;

  let num1Index = numberArr.indexOf(num1);
  let num2Index = numberArr.indexOf(num2);
  if (num1Index !== -1 && num2Index !== -1) {
    let temp = numberArr[num1Index];
    numberArr[num1Index] = numberArr[num2Index];
    numberArr[num2Index] = temp;
    document.getElementById(
      "resultchangePosition"
    ).innerText = `Mảng sau khi hoán đổi là: ${numberArr}`;
  } else {
    document.getElementById("resultchangePosition").innerText =
      "Số không có trong mảng";
  }
};
// Sắp xếp tăng dần
let increase = () => {
  numberArr.sort((a, b) => a - b);
  document.getElementById("resultIncrease").innerHTML = `Mảng sau khi sắp xếp tăng dần: ${numberArr}`;
};
// Tìm số nguyên tố đầu tiên
let primeNumber = () => {
  numberArr.sort((a, b) => a - b);
  document.getElementById("resultIncrease").innerHTML = `Mảng sau khi sắp xếp tăng dần: ${numberArr}`;
};