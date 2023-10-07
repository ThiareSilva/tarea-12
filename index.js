function handleClickIzzy() {
  let izzy = document.getElementById("ponyIzzy");
  if (izzy.style.border) {
    izzy.style.border = "";
  } else {
    izzy.style.border = "2px solid red";
  }
}

function requerimientoDos() {
  let stickerUno = document.getElementById("txtNum1").value;
  let stickerDos = document.getElementById("txtNum2").value;
  let stickerTres = document.getElementById("txtNum3").value;

  let suma = Number(stickerUno) + Number(stickerDos) + Number(stickerTres);
  if (suma > 10) {
    document.getElementById("req2Resp").innerHTML =
      "Llevas demasiados stickers";
  } else {
    document.getElementById("req2Resp").innerHTML =
      "Llevas " + suma + " stickers";
  }
}

function requerimientoTres() {
  let con1 = document.getElementById("pass1").value;
  let con2 = document.getElementById("pass2").value;
  let con3 = document.getElementById("pass3").value;

  let resultado = con1.toString() + con2.toString() + con3.toString();

  if (resultado === "911") {
    document.getElementById("passResp").innerHTML = "Password 1 Correcto";
  } else if (resultado === "714") {
    document.getElementById("passResp").innerHTML = "Password 2 Correcto";
  } else {
    document.getElementById("passResp").innerHTML = "Password Incorrecto";
  }
}
