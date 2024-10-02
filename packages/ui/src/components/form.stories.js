"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const react_1 = require("react");
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const button_1 = require("@/primitives/button");
const input_1 = require("@/primitives/input");
const _1 = require(".");
const typography_1 = require("../typography");
const formSchema = zod_2.z.object({
    username: zod_2.z.string().min(2).max(50),
});
const FormExample = (props) => {
    const [username, setUsername] = (0, react_1.useState)("");
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            username: "",
        },
    });
    /**
     * Handles the form submission.
     * @param values The form values.
     */
    function onSubmit(values) {
        console.log(values);
        setUsername(values.username);
    }
    return (<_1.Form {...props} {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <_1.FormField control={form.control} name="username" render={({ field }) => (<_1.FormItem>
              <_1.FormLabel>Username</_1.FormLabel>
              <_1.FormControl>
                <input_1.Input placeholder="shadcn" {...field}/>
              </_1.FormControl>
              <_1.FormDescription>
                This is your public display name.
              </_1.FormDescription>
              <_1.FormMessage />
            </_1.FormItem>)}/>
        <button_1.Button type="submit">Submit</button_1.Button>
      </form>
      {username && (<typography_1.Typography variant="muted" className="mt-6">
          You have submitted: {username}
        </typography_1.Typography>)}
    </_1.Form>);
};
const meta = {
    component: _1.Form,
    render: (args) => {
        return <FormExample {...args}/>;
    },
};
exports.default = meta;
exports.Default = {};
