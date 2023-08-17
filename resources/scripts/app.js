// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import NiceSelect from "nice-select2/dist/js/nice-select2";
import intlTelInput from "intl-tel-input";
window.intlTelInput = intlTelInput;
window.bootstrap = bootstrap;
window.ca = {}; // Global CanApply functions
window.ca.wizard = {};
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

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
let previewNames = document.getElementsByClassName("preview-name");
let previewEmails = document.getElementsByClassName("preview-email");
let previewPhones = document.getElementsByClassName("preview-phone");

let paymentFullName = document.getElementById("payment-full-name");
let paymentEmail = document.getElementById("payment-email");
let paymentPhone = document.getElementById("payment-phone-number");

// Wizard Form

window.ca.wizard.form_wizard_change_step_styles = function (
    form,
    steps,
    current_step
) {
    const styles = {
        checked: {
            icon: {
                fa: {
                    classes:
                        "icon-ic_fluent_checkmark_circle_20_regular fs-xl-5 ms-2 d-flex text-indigo-500",
                },
                en: {
                    classes:
                        "icon-ic_fluent_checkmark_circle_20_regular fs-xl-5 me-2 d-flex text-indigo-500",
                },
            },
            text: {
                classes: "fw-normal",
            },
            step_number: {},
        },
        activated: {
            icon: {
                fa: {
                    classes:
                        "bg-indigo-500 text-white ms-2 rounded-pill text-center d-flex align-items-center justify-content-center",
                },
                en: {
                    classes:
                        "bg-indigo-500 text-white me-2 rounded-pill text-center d-flex align-items-center justify-content-center",
                },
            },
            text: {
                classes: "fw-bold",
            },
            step_number: {
                styles: "width: 28px; height: 28px;",
            },
        },
        default: {
            icon: {
                fa: {
                    classes:
                        "bg-light-200 text-dark ms-2 rounded-pill text-center d-flex align-items-center justify-content-center",
                },
                en: {
                    classes:
                        "bg-light-200 text-dark me-2 rounded-pill text-center d-flex align-items-center justify-content-center",
                },
            },
            text: {
                classes: "fw-normal",
            },
            step_number: {
                styles: "width: 28px; height: 28px;",
            },
        },
        global: {
            next_chevron: {
                fa: {
                    classes:
                        "icon-ic_fluent_chevron_left_20_filled fs-1 mx-3 d-flex",
                },
                en: {
                    classes:
                        "icon-ic_fluent_chevron_right_20_filled fs-1 mx-3 d-flex",
                },
            },
        },
    };

    const current_step_element = steps[current_step];
    const next_steps = [...steps].slice(current_step + 1);
    const previous_steps = [...steps].slice(0, current_step);
    const pages = form.querySelectorAll(".ca-wizard-form-page");
    const footers = form.querySelectorAll(".ca-wizard-form-footer");
    const current_page_element = pages[current_step];
    const current_footer_element = footers[current_step];
    const is_last_step = current_step === steps.length - 1 && true; // Short circuit statement
    const is_first_step = current_step === 0 && true; // Short circuit statement

    // Pages visibility
    Array.from(pages).forEach((page) => {
        page.classList.add("d-none");
        current_page_element.classList.remove("d-none");
    });

    // Footer visibility
    Array.from(footers).forEach((footer) => {
        footer.classList.add("d-none");
        current_footer_element.classList.remove("d-none");
    });

    // Remove steps and regenerate them again
    Array.from(steps).forEach((step) => {
        step.innerHTML = "";
    });

    // Chevron
    const _next_chevron = document.createElement("i");
    if (form.classList.contains("ca-fa")) {
        _next_chevron.classList = styles.global.next_chevron.fa.classes;
    } else {
        _next_chevron.classList = styles.global.next_chevron.en.classes;
    }

    // Current step
    const { _active_step_span, _active_step_text } =
        wizard_form_generate_active_step(form, current_step_element, styles);
    current_step_element.appendChild(_active_step_span);
    current_step_element.appendChild(_active_step_text);

    if (!is_last_step) {
        current_step_element.appendChild(_next_chevron);
    }

    // Next steps
    Array.from(next_steps).forEach((step) => {
        const { _default_step_span, _default_step_text } =
            wizard_form_generate_default_step(form, step, styles);
        const _next_chevron = document.createElement("i");
        if (form.classList.contains("ca-fa")) {
            _next_chevron.classList = styles.global.next_chevron.fa.classes;
        } else {
            _next_chevron.classList = styles.global.next_chevron.en.classes;
        }
        step.appendChild(_default_step_span);
        step.appendChild(_default_step_text);
        step.appendChild(_next_chevron);
    });

    // Previous steps
    Array.from(previous_steps).forEach((step) => {
        const { _checked_step_icon, _checked_step_text } =
            wizard_form_generate_checked_step(form, step, styles);
        const _next_chevron = document.createElement("i");
        if (form.classList.contains("ca-fa")) {
            _next_chevron.classList = styles.global.next_chevron.fa.classes;
        } else {
            _next_chevron.classList = styles.global.next_chevron.en.classes;
        }

        step.appendChild(_checked_step_icon);
        step.appendChild(_checked_step_text);
        step.appendChild(_next_chevron);
    });

    // Create a custom event for next steps
    const step_change_event = new CustomEvent("CaWizardStepChange", {
        detail: {
            steps,
            current_step,
            current_footer_element,
            current_step_element,
            current_page_element,
            footers,
            form,
            next_steps,
            previous_steps,
            is_last_step,
            is_first_step,
        },
    });

    // Dispatch an event for steps
    window.dispatchEvent(step_change_event);
};
const wizard_forms = document.querySelectorAll(".ca-wizard-form");
Array.from(wizard_forms).forEach((form) => {
    // Step
    window.ca.wizard.current_step = parseInt(form.dataset.step) || 0; // Starts from zero
    const steps = form.querySelectorAll(".ca-wizard-form-steps div");

    // Buttons
    const next_step_buttons = form.querySelectorAll("button.next_step_button");
    const previous_step_buttons = form.querySelectorAll(
        "button.previous_step_button"
    );

    window.ca.wizard.form_wizard_change_step_styles(
        form,
        steps,
        window.ca.wizard.current_step
    );

    // Pages
    const pages = form.querySelectorAll(".ca-wizard-form-page");
    const current_page_element = pages[window.ca.wizard.current_step];

    Array.from(pages).forEach((page) => {
        page.classList.add("d-none");
        current_page_element.classList.remove("d-none");
    });

    const footers = form.querySelectorAll(".ca-wizard-form-footer");
    const current_footer_element = footers[window.ca.wizard.current_step];

    // Footer visibility
    Array.from(footers).forEach((footer) => {
        footer.classList.add("d-none");
        current_footer_element.classList.remove("d-none");
    });

    // Events
    Array.from(next_step_buttons).forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            if (window.ca.wizard.current_step >= steps.length - 1) {
                return false;
            }

            if (window.ca.wizard.current_step === 0) {
                let paymentFullNameInvalid = document.getElementById(
                    "payment-full-name-invalid"
                );
                let paymentEmailInvalid = document.getElementById(
                    "payment-email-invalid"
                );
                let paymentPhoneInvalid = document.getElementById(
                    "payment-phone-number-invalid"
                );
                let paymentServiceInvalid = document.getElementById(
                    "payment-service-invalid"
                );

                if (
                    paymentFullNameInvalid ||
                    paymentEmailInvalid ||
                    paymentPhoneInvalid ||
                    paymentServiceInvalid
                ) {
                    if (paymentFullName.value === "") {
                        paymentFullNameInvalid.textContent = "required !";
                        paymentFullNameInvalid.classList.remove("d-none");
                        paymentFullNameInvalid.classList.add("d-block");
                        return false;
                    } else {
                        paymentFullNameInvalid.classList.remove("d-block");
                        paymentFullNameInvalid.classList.add("d-none");
                    }
                    if (!validateEmail(paymentEmail.value)) {
                        paymentEmailInvalid.textContent =
                            "email is not valid !";
                        paymentEmailInvalid.classList.remove("d-none");
                        paymentEmailInvalid.classList.add("d-block");
                        return false;
                    } else {
                        paymentEmailInvalid.classList.remove("d-block");
                        paymentEmailInvalid.classList.add("d-none");
                    }
                    if (paymentEmail.value === "") {
                        paymentEmailInvalid.textContent = "required !";
                        paymentEmailInvalid.classList.remove("d-none");
                        paymentEmailInvalid.classList.add("d-block");
                        return false;
                    } else {
                        paymentEmailInvalid.classList.remove("d-block");
                        paymentEmailInvalid.classList.add("d-none");
                    }
                    if (paymentPhone.value === "") {
                        paymentPhoneInvalid.textContent = "required !";
                        paymentPhoneInvalid.classList.remove("d-none");
                        paymentPhoneInvalid.classList.add("d-block");
                        return false;
                    } else {
                        paymentPhoneInvalid.classList.remove("d-block");
                        paymentPhoneInvalid.classList.add("d-none");
                    }

                    let totalPrice = document.getElementById("totalPrice");
                    if (totalPrice.textContent === "0") {
                        paymentServiceInvalid.textContent =
                            "required service select!";
                        paymentServiceInvalid.classList.remove("d-none");
                        paymentServiceInvalid.classList.add("d-block");
                        return false;
                    } else {
                        paymentServiceInvalid.classList.add("d-none");
                        paymentServiceInvalid.classList.remove("d-block");
                    }
                }

                Array.from(previewNames).forEach((previewName) => {
                    previewName.textContent = paymentFullName.value;
                });
                Array.from(previewEmails).forEach((previewEmail) => {
                    previewEmail.textContent = paymentEmail.value;
                });
                Array.from(previewPhones).forEach((previewPhone) => {
                    previewPhone.textContent = paymentPhone.value;
                });
            }

            // Increase step
            if (!form.classList.contains("ca-wizard-form-manual-navigation")) {
                window.ca.wizard.current_step++;
                window.ca.wizard.form_wizard_change_step_styles(
                    form,
                    steps,
                    window.ca.wizard.current_step
                );
            }
        });
    });

    Array.from(previous_step_buttons).forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            if (window.ca.wizard.current_step <= 0) {
                return false;
            }

            // Decrease step
            if (!form.classList.contains("ca-wizard-form-manual-navigation")) {
                window.ca.wizard.current_step--;
                window.ca.wizard.form_wizard_change_step_styles(
                    form,
                    steps,
                    window.ca.wizard.current_step
                );
            }
        });
    });
});

// Generate default steps
function wizard_form_generate_default_step(form, step, styles) {
    const _default_step_span = document.createElement("span");
    if (form.classList.contains("ca-fa")) {
        _default_step_span.classList = styles.default.icon.fa.classes;
    } else {
        _default_step_span.classList = styles.default.icon.en.classes;
    }
    _default_step_span.style = styles.default.step_number.styles;
    _default_step_span.innerText = step.dataset.number;

    const _default_step_text = document.createElement("b");
    _default_step_text.classList = styles.default.text.classes;
    _default_step_text.innerText = step.dataset.text;

    return {
        _default_step_span,
        _default_step_text,
    };
}

// Generate active step
function wizard_form_generate_active_step(form, step, styles) {
    const _active_step_span = document.createElement("span");
    if (form.classList.contains("ca-fa")) {
        _active_step_span.classList = styles.activated.icon.fa.classes;
    } else {
        _active_step_span.classList = styles.activated.icon.en.classes;
    }

    _active_step_span.style = styles.activated.step_number.styles;
    _active_step_span.innerText = step.dataset.number;

    const _active_step_text = document.createElement("b");
    _active_step_text.classList = styles.activated.text.classes;
    _active_step_text.innerText = step.dataset.text;

    return {
        _active_step_span,
        _active_step_text,
    };
}

// Generate checked step
function wizard_form_generate_checked_step(form, step, styles) {
    const _checked_step_icon = document.createElement("i");
    if (form.classList.contains("ca-fa")) {
        _checked_step_icon.classList = styles.checked.icon.fa.classes;
    } else {
        _checked_step_icon.classList = styles.checked.icon.en.classes;
    }

    const _checked_step_text = document.createElement("b");
    _checked_step_text.classList = styles.checked.text.classes;
    _checked_step_text.innerText = step.dataset.text;

    return {
        _checked_step_icon,
        _checked_step_text,
    };
}
