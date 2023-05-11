var singou = "k";

// 条件に応じて処理をわけること
if (singou === "あか") {
  console.log("とまれ");
} else if (singou === "あお") {
  console.log("進め");
} else {
  console.log("がいとうしません");
}

var random = Math.floor(Math.random() * 3 + 1);
console.log(random, "ランダムな数字の箱");

if (random === 1) {
  console.log("大吉");
} else if (random === 2) {
  console.log("中吉");
} else if (random === 3) {
  console.log("小吉");
}

$(".aa").on("click", function () {
    $("h1").html("おされました");
});

var random = Math.floor(Math.random() * 3 + 1);
console.log(random, "ランダムな数字の箱");

if (random === 1) {
  console.log("大吉");
} else if (random === 2) {
  console.log("中吉");
} else if (random === 3) {
  console.log("小吉");
}


$(".aa").on("click", function () {
    
    var random = Math.floor(Math.random() * 3 + 1);
    console.log(random, "ランダムな数字の箱");
  
    if (random === 1) {
      console.log("✊");
      $("h1").html("✊");
      $("h1").css("color", "red");
    } else if (random === 2) {
      console.log("🤘");
      $("h1").html("🤘");
      $("h1").css("color", "black");
    } else if (random === 3) {
      console.log("🖐");
      $("h1").html("🖐");
      $("h1").css("color", "black");
    }
    })

$(".bb").on("click", function () {
    
        var random = Math.floor(Math.random() * 3 + 1);
        console.log(random, "ランダムな数字の箱");
      
        if (random === 1) {
          console.log("✊");
          $("h2").html("✊");
          $("h2").css("color", "red");
        } else if (random === 2) {
          console.log("🤘");
          $("h2").html("🤘");
          $("h2").css("color", "black");
        } else if (random === 3) {
          console.log("🖐");
          $("h2").html("🖐");
          $("h2").css("color", "black");
        }
        })