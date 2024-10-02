import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@v1/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from '@v1/ui/form';
import { MinimalTiptapEditor } from '../index';
import '@/minimal-editor.css';
import { cn } from '@/lib/editor/utils';
/**
 * Zod schema for form validation.
 */
const formSchema = z.object({
    description: z
        .string({ required_error: 'Description is required' })
        .min(1, 'Description is required'),
});
/**
 * MinimalEditorForm component.
 *
 * This component provides a minimal text editor with form capabilities.
 * It can be used in both controlled and uncontrolled modes.
 *
 * @example
 * // Controlled usage
 * const [value, setValue] = useState('');
 * return (
 *   <MinimalEditorForm
 *     onSubmit={handleSubmit}
 *     value={value}
 *     onValueChange={setValue}
 *     outputValue="json"
 *     disabled={false}
 *   />
 * );
 *
 * @example
 * // Uncontrolled usage
 * return (
 *   <MinimalEditorForm
 *     onSubmit={handleSubmit}
 *     defaultDescription="Initial content"
 *   />
 * );
 */
export const MinimalEditorForm = ({ onSubmit, value, onValueChange, outputValue = 'html', disabled = false, defaultDescription = '', }) => {
    /**
     * Determines if the component is being used in a controlled manner.
     */
    const isControlled = value !== undefined && onValueChange !== undefined;
    /**
     * Form instance created with react-hook-form.
     */
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description: isControlled ? value : defaultDescription,
        },
    });
    /**
     * Handles form submission.
     * @param values The form values.
     */
    const handleSubmit = (values) => {
        onSubmit(values);
    };
    return (<Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className='w-full space-y-6'>
        <FormField control={form.control} name='description' render={({ field }) => (<FormItem>
              <FormLabel className='sr-only'>Description</FormLabel>
              <FormControl>
                <Controller name='description' control={form.control} render={({ field }) => (<MinimalTiptapEditor {...field} value={isControlled ? value : field.value} onValueChange={(newValue) => {
                    if (isControlled) {
                        onValueChange(newValue);
                    }
                    field.onChange(newValue);
                }} outputValue={outputValue} disabled={disabled} className={cn('min-h-[300px] w-full', {
                    'border-red-500 focus-within:border-red-500': form.formState.errors.description,
                })}/>)}/>
              </FormControl>
              <FormMessage />
            </FormItem>)}/>
        <Button type='submit' className='w-fit' variant={'outline'} disabled={disabled}>
          Submit
        </Button>
      </form>
    </Form>);
};
