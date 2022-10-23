// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import NiceSelect from "nice-select2/dist/js/nice-select2";
import intlTelInput from "intl-tel-input";

function normal_modal(event, modal) {
    const default_icon_class = "modal-icon fs-xl-3 d-flex ";
    const button = event.relatedTarget;

    const title = button.getAttribute("data-modal-title");
    const body = button.getAttribute("data-modal-body");
    const icon = button.getAttribute("data-modal-icon");
    const hide_icon = button.getAttribute("data-modal-hidden-icon");
    const button_text = button.getAttribute("data-modal-button-text");
    const button_dismiss_text = button.getAttribute("data-modal-button-dismiss-text");
    // const href = button.getAttribute("data-href");

    const modal_title = modal.querySelector(".modal-title");
    const modal_body = modal.querySelector(".modal-body .message");
    const modal_icon_wrapper = modal.querySelector(".modal-icon-wrapper");
    const modal_icon = modal.querySelector(".modal-icon");
    const modal_ok_button = modal.querySelector(".button-ok");
    const modal_dismiss_button = modal.querySelector(".button-dismiss");

    // if(href !== null) {
    //     fetch()
    // }

    if(button_dismiss_text !== null) {
        modal_dismiss_button.innerHTML = button_dismiss_text;
    }

    if(button_text !== null) {
        modal_ok_button.innerHTML = button_text;
    }

    // Hide Icon
    if(hide_icon !== null) {
        modal_icon_wrapper.classList.add("d-none");
    }

    // Change Icon
    if(icon !== null) {
        const icon_class = default_icon_class + icon;
        modal_icon.classList = icon_class;
    }

    // Change Title
    modal_title.innerHTML = title;

    // Change Body
    modal_body.innerHTML = body;
}

const success_modal = document.getElementById("success_modal");
const warning_modal = document.getElementById("warning_modal");
const error_modal = document.getElementById("error_modal");
const info_modal = document.getElementById("info_modal");

if (info_modal) {
    info_modal.addEventListener("show.bs.modal", (event) =>
        normal_modal(event, info_modal)
    );
}
if (error_modal) {
    error_modal.addEventListener("show.bs.modal", (event) =>
        normal_modal(event, error_modal)
    );
}
if (warning_modal) {
    warning_modal.addEventListener("show.bs.modal", (event) =>
        normal_modal(event, warning_modal)
    );
}
if (success_modal) {
    success_modal.addEventListener("show.bs.modal", (event) =>
        normal_modal(event, success_modal)
    );
}

const phone_inputs = document.querySelectorAll(".ca-phone-input");
Array.from(phone_inputs).forEach((input) => {
    const default_country =
        input.dataset.country === undefined ? "CA" : input.dataset.country;

    intlTelInput(input, {
        initialCountry: default_country,
        separateDialCode: true,
    });

    input.addEventListener("input", (e) => {
        e.preventDefault();

        // Strip everything but 1st 10 digits
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 10);

        // var size = e.target.value.length;
        // if (size > 0) {
        //     e.target.value = " " + e.target.value;
        // }
        // if (size > 3) {
        //     e.target.value =
        //         e.target.value.slice(0, 4) + "  " + e.target.value.slice(4);
        // }
        // if (size > 6) {
        //     e.target.value =
        //         e.target.value.slice(0, 9) + " " + e.target.value.slice(9);
        // }

        return e.target.value;
    });
});

Array.from(document.querySelectorAll(".nice-select-search")).forEach(
    (select) => {
        new NiceSelect(select, { searchable: true });
    }
);

Array.from(document.querySelectorAll(".nice-select")).forEach((select) => {
    const s = new NiceSelect(select, { searchable: false });
    console.log(s);
});

// Smooth corners
CSS.paintWorklet.addModule(
    `data:application/javascript;charset=utf8,${encodeURIComponent(`
registerPaint("smooth-corners",class{static get inputProperties(){return["--smooth-corners"]}superellipse(t,e,s=4,r){Number.isNaN(s)&&(s=4),(void 0===r||Number.isNaN(r))&&(r=s),s>100&&(s=100),r>100&&(r=100),s<1e-11&&(s=1e-11),r<1e-11&&(r=1e-11);const o=2/s,a=r?2/r:o,i=2*Math.PI/360;return Array.from({length:360},(s,r)=>(s=>{const r=Math.cos(s),i=Math.sin(s);return{x:Math.abs(r)**o*t*Math.sign(r),y:Math.abs(i)**a*e*Math.sign(i)}})(r*i))}paint(t,e,s){const[r,o]=s.get("--smooth-corners").toString().replace(/ /g,"").split(","),a=e.width/2,i=e.height/2,n=this.superellipse(a,i,parseFloat(r,10),parseFloat(o,10));t.fillStyle="#000",t.setTransform(1,0,0,1,a,i),t.beginPath();for(let e=0;e<n.length;e++){const{x:s,y:r}=n[e];0===e?t.moveTo(s,r):t.lineTo(s,r)}t.closePath(),t.fill()}});
`)}`
);

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
