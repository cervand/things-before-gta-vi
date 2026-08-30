import { useState } from 'react';
import { ListItemSubmission } from '@/types/listItem';
import { submitListItem } from '@/lib/listAPI';

export function useSubmitBar() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(item: ListItemSubmission) {
        setIsSubmitting(true);
        setError(null);
        try {
            await submitListItem(item);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return {
        handleSubmit,
        isSubmitting,
        error,
    };
}