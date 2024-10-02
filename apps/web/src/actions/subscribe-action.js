"use server";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeAction = subscribeAction;
async function subscribeAction(formData, userGroup) {
    const email = formData.get("email");
    const res = await fetch(`https://app.loops.so/api/newsletter-form/${process.env.NEXT_PUBLIC_LOOPS_FORM_ID}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            userGroup,
        }),
    });
    const json = await res.json();
    return json;
}
