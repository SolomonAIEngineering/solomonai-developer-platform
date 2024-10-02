"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSignin = GoogleSignin;
const client_1 = require("@v1/supabase/client");
const button_1 = require("@v1/ui/button");
function GoogleSignin() {
    const supabase = (0, client_1.createClient)();
    const handleSignin = () => {
        supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/api/auth/callback`,
            },
        });
    };
    return (<button_1.Button onClick={handleSignin} variant="outline" className="font-mono">
      Sign in with Google
    </button_1.Button>);
}
