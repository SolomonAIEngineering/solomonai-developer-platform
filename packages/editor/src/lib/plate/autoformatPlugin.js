import { autoformatRules } from '@/lib/plate/autoformatRules';
export const autoformatPlugin = {
    options: {
        rules: autoformatRules,
        enableUndoOnDelete: true,
    },
};
