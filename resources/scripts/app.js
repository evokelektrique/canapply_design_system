// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import NiceSelect from "nice-select2/dist/js/nice-select2";
import intlTelInput from "intl-tel-input";
window.intlTelInput = intlTelInput;
window.bootstrap = bootstrap;
window.ca = {}; // Global CanApply functions
window.NiceSelect = NiceSelect;

async function modal_request(url, method, payload) {
    const options =
        method === "GET" && payload === ""
            ? {}
            : {
                  method: method,
                  body: payload,
                  headers: {
                      "Content-Type": "application/json",
                  },
              };
    const req = await fetch(url, options);
    const res = await req.text();

    if (req.status !== 200) {
        alert("Something went wrong or server is not responding.");
        console.log(res);
    }

    return res;
}

function toggle_modal(modal) {
    modal.classList.toggle("show");
    document.querySelector(".modal-backdrop").classList.toggle("show");
    window.location.reload(); // Reload the page
}

window.ca.display_normal_modal = (options) => {
    const default_icon_class = "modal-icon fs-xl-3 d-flex ";
    const size = options["data-modal-size"];
    const type = options["data-modal-type"];
    const title = options["data-modal-title"];
    const body = options["data-modal-body"];
    const icon = options["data-modal-icon"];
    const hide_icon = options["data-modal-hidden-icon"];
    const hide_close = options["data-modal-hidden-close"];
    const hide_footer = options["data-modal-hidden-footer"];
    const button_text = options["data-modal-button-text"];
    const button_dismiss_text = options["data-modal-button-dismiss-text"];
    const href = options["data-modal-href"];
    const method = options["data-modal-method"];
    const payload = options["data-modal-payload"];

    const modal = document.getElementById(type + "_modal");
    const modal_title = modal.querySelector(".modal-title");
    const modal_body = modal.querySelector(".modal-body .message");
    const modal_icon_wrapper = modal.querySelector(".modal-icon-wrapper");
    const modal_icon = modal.querySelector(".modal-icon");
    const modal_close_icon = modal.querySelector(".modal-close-icon");
    const modal_ok_button = modal.querySelector(".button-ok");
    const modal_dismiss_button = modal.querySelector(".button-dismiss");
    const modal_footer = modal.querySelector(".modal-footer");
    const modal_dialog = modal.querySelector(".modal-dialog");

    // Create an instance from modal, and display it
    const modal_instance = new bootstrap.Modal(modal, {});
    modal_instance.show();

    if (type === "confirm") {
        modal_ok_button.addEventListener(
            "click",
            async (e) => {
                e.preventDefault();
                await modal_request(href, method, payload);
                toggle_modal(modal);
            },
            { once: true }
        );
    }

    if (size !== undefined) {
        modal_dialog.classList.add("modal-" + size);
    }

    if (button_dismiss_text !== undefined) {
        modal_dismiss_button.innerHTML = button_dismiss_text;
    }

    if (button_text !== undefined) {
        modal_ok_button.innerHTML = button_text;
    }

    // Hide Icon
    if (hide_icon !== undefined) {
        modal_icon_wrapper.classList.add("d-none");
    }

    // Hide Close Icons button
    if (hide_close !== undefined) {
        modal_close_icon.classList.add("d-none");
    }

    // Hide Footer
    if (hide_footer !== undefined) {
        modal_footer.classList.add("d-none");
        modal_body.classList.add("pb-2", "mb-1", "px-2", "mx-1");
    } else {
        modal_footer.classList.remove("d-none");
        modal_body.classList.remove("pb-2", "mb-1", "px-2", "mx-1");
    }

    // Change Icon
    if (icon !== undefined) {
        const icon_class = default_icon_class + icon;
        modal_icon.classList = icon_class;
    }

    // Change Title
    modal_title.innerHTML = title;

    // Change Body
    modal_body.innerHTML = body;
};

function normal_modal(event, modal) {
    // Prevent errors while displaying modals via JavaScript
    if (event.relatedTarget === undefined) {
        return;
    }

    const default_icon_class = "modal-icon fs-xl-3 d-flex ";
    const button = event.relatedTarget;

    const size = button.getAttribute("data-modal-size");
    const type = button.getAttribute("data-modal-type");
    const title = button.getAttribute("data-modal-title");
    const body = button.getAttribute("data-modal-body");
    const icon = button.getAttribute("data-modal-icon");
    const hide_icon = button.getAttribute("data-modal-hidden-icon");
    const hide_close = button.getAttribute("data-modal-hidden-close");
    const hide_footer = button.getAttribute("data-modal-hidden-footer");
    const button_text = button.getAttribute("data-modal-button-text");
    const button_dismiss_text = button.getAttribute(
        "data-modal-button-dismiss-text"
    );
    const href = button.getAttribute("data-modal-href");
    const method = button.getAttribute("data-modal-method");
    const payload = button.getAttribute("data-modal-payload");
    const modal_title = modal.querySelector(".modal-title");
    const modal_body = modal.querySelector(".modal-body .message");
    const modal_icon_wrapper = modal.querySelector(".modal-icon-wrapper");
    const modal_close_icon = modal.querySelector(".modal-close-icon");
    const modal_icon = modal.querySelector(".modal-icon");
    const modal_ok_button = modal.querySelector(".button-ok");
    const modal_dismiss_button = modal.querySelector(".button-dismiss");
    const modal_footer = modal.querySelector(".modal-footer");
    const modal_dialog = modal.querySelector(".modal-dialog");

    if (type === "confirm") {
        modal_ok_button.addEventListener(
            "click",
            async (e) => {
                e.preventDefault();
                await modal_request(href, method, payload);
                toggle_modal(modal);
            },
            { once: true }
        );
    }

    if (size !== null) {
        modal_dialog.classList.add("modal-" + size);
    }

    if (button_dismiss_text !== null) {
        modal_dismiss_button.innerHTML = button_dismiss_text;
    }

    if (button_text !== null) {
        modal_ok_button.innerHTML = button_text;
    }

    // Hide Icon
    if (hide_icon !== null) {
        modal_icon_wrapper.classList.add("d-none");
    }

    // Hide Close Icons button
    if (hide_close !== null) {
        modal_close_icon.classList.add("d-none");
    }

    // Hide Footer
    if (hide_footer !== null) {
        modal_footer.classList.add("d-none");
        modal_body.classList.add("pb-2", "mb-1", "px-2", "mx-1");
    } else {
        modal_footer.classList.remove("d-none");
        modal_body.classList.remove("pb-2", "mb-1", "px-2", "mx-1");
    }

    // Change Icon
    if (icon !== null) {
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
const confirm_modal = document.getElementById("confirm_modal");

if (confirm_modal) {
    confirm_modal.addEventListener("show.bs.modal", (event) =>
        normal_modal(event, confirm_modal)
    );
}
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

    const options =
        input.dataset.options === undefined
            ? []
            : JSON.parse(input.dataset.options);

    intlTelInput(input, {
        ...options,
        initialCountry: default_country,
        separateDialCode: true,
    });

    input.addEventListener("input", (e) => {
        e.preventDefault();

        // Strip everything but 1st 10 digits
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 11);

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

Array.from(document.querySelectorAll(".nice-select, .ca-select")).forEach(
    (element) => {
        const is_search = element.classList.contains("ca-select-search");
        const is_multiple = element.classList.contains("ca-select-multiple");
        const placeholder = element.dataset.placeholder || undefined;
        const selected_text_placeholder =
            element.dataset.selectedTextPlaceholder || undefined;
        const dropdown_max_height =
            element.dataset.dropdownMaxHeight || undefined;
        const search_placeholder = element.dataset.searchPlaceholder;
        const config = {};

        config["searchable"] = is_search;
        config["placeholder"] = placeholder;
        if (is_search) {
            config["searchtext"] = search_placeholder;
        }

        if (is_multiple) {
            config["selectedtext"] = selected_text_placeholder;
        }

        const s = new NiceSelect(element, config);
        window.ca.selectBoxes ||= {};

        if (element.id) {
            window.ca.selectBoxes[element.id] = s;
        }

        const dropdown = s.dropdown.querySelector(".nice-select-dropdown");
        const select = s.el;
        // select.classList.add('d-none')
        const is_full_width = select.classList.contains("ca-select-fullwidth");

        if (dropdown_max_height) {
            const list = s.dropdown.querySelector(".list");
            list.style.maxHeight = `${dropdown_max_height}px`;
            list.style.margin = "0px";
        }

        // Change select input width relative to its dropdown width
        if (is_full_width) {
            const dropdown_width = dropdown.offsetWidth;
            s.dropdown.style.width = dropdown_width + "px";
            s.dropdown.style.maxWidth = "100%"; // Safety
        }
    }
);

const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
