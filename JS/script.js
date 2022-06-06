if(document.getElementById("pasar_c")){
    var modal_c = document.getElementById("myModal_c");
    var button_c = document.getElementById("pasar_c");
    var span_c = document.getElementsByClassName("close_c")[0];
    var body_c = document.getElementsByTagName("body");

    button_c.onclick = function() {

        modal_c.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span_c.onclick = function() {
        modal_c.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if(document.getElementById("pasar_f")){
    var modal_f = document.getElementById("myModal_f");
    var button_f = document.getElementById("pasar_f");
    var span_f = document.getElementsByClassName("close_f")[0];
    var body_f = document.getElementsByTagName("body");

    button_f.onclick = function() {

        modal_f.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span_f.onclick = function() {
        modal_f.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
        location.href = location.href;
    }
}

if(document.getElementById("pasar_ck")){
    var modal_ck = document.getElementById("myModal_ck");
    var button_ck = document.getElementById("pasar_ck");
    var span_ck = document.getElementsByClassName("close_ck")[0];
    var body_ck = document.getElementsByTagName("body");

    button_ck.onclick = function() {

        modal_ck.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span_ck.onclick = function() {
        modal_ck.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if(document.getElementById("pasar_fk")){
    var modal_fk = document.getElementById("myModal_fk");
    var button_fk = document.getElementById("pasar_fk");
    var span_fk = document.getElementsByClassName("close_fk")[0];
    var body_fk = document.getElementsByTagName("body");

    button_fk.onclick = function() {

        modal_fk.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span_fk.onclick = function() {
        modal_fk.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if(document.getElementById("pasar_kc")){
    var modal_kc = document.getElementById("myModal_kc");
    var button_kc = document.getElementById("pasar_kc");
    var span_kc = document.getElementsByClassName("close_kc")[0];
    var body_kc = document.getElementsByTagName("body");

    button_kc.onclick = function() {

        modal_kc.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span_kc.onclick = function() {
        modal_kc.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

if(document.getElementById("pasar_kf")){
    var modal_kf = document.getElementById("myModal_kf");
    var button_kf = document.getElementById("pasar_kf");
    var span_kf = document.getElementsByClassName("close_kf")[0];
    var body_kf = document.getElementsByTagName("body");

    button_kf.onclick = function() {

        modal_kf.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span_kf.onclick = function() {
        modal_kf.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}

function calcular_f(){
    let valor_c = document.getElementById("calcular_c").value;
    const resultado_c = document.getElementById("resultado_c");
    resultado_c.innerHTML = ("El resultado es: ") + parseFloat(valor_c * 1.8 + 32);
}

function calcular_c(){
    let valor_f = document.getElementById("calcular_f").value;
    const resultado_f = document.getElementById("resultado_f");
    resultado_f.innerHTML = ("El resultado es: ") + (valor_f - 32) / 1.8;
}

function calcular_ck(){
    let valor_ck = document.getElementById("calcular_ck").value;
    const resultado_ck = document.getElementById("resultado_ck");
    valor_total = parseInt(valor_ck) + parseFloat(273.15);
    resultado_ck.innerHTML = "El resultado es: " + (valor_total);
}

function calcular_fk(){
    let valor_fk = document.getElementById("calcular_fk").value;
    const resultado_fk = document.getElementById("resultado_fk");
    valor_totalfk = (valor_fk - 32)*5/9 + parseFloat(273.15);
    resultado_fk.innerHTML = "El resultado es: " + (valor_totalfk);
}

function calcular_kc(){
    let valor_kc = document.getElementById("calcular_kc").value;
    const resultado_kc = document.getElementById("resultado_kc");
    resultado_kc.innerHTML = "El resultado es: " + (valor_kc - 273.15);
}

function calcular_kf(){
    let valor_kf = document.getElementById("calcular_kf").value;
    const resultado_kf = document.getElementById("resultado_kf");
    valor_totalkf = (valor_kf - 273.15)*9/5 + 32;
    resultado_kf.innerHTML = "El resultado es: " + (valor_totalkf);
}

