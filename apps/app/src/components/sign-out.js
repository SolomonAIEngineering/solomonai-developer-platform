"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignOut = SignOut;
const client_1 = require("@v1/supabase/client");
const button_1 = require("@v1/ui/button");
const icons_1 = require("@v1/ui/icons");
function SignOut() {
    const supabase = (0, client_1.createClient)();
    const handleSignOut = () => {
        supabase.auth.signOut();
    };
    return (<button_1.Button onClick={handleSignOut} variant="outline" className="font-mono gap-2 flex items-center">
      <icons_1.Icons.SignOut className="size-4"/>
      <span>Sign out</span>
    </button_1.Button>);
}
