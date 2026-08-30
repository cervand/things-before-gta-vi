import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useSubmitBar } from '@/hooks/useSubmitBar';

export default function SubmitBar() {
    const { handleSubmit, isSubmitting, error } = useSubmitBar();
    const [text, setText] = useState(''); 

    return (
        <div>
            <TextField
                label="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={() => handleSubmit({ text })} disabled={isSubmitting}>
                Submit
            </Button>
            {error && <p>{error}</p>}
        </div>
    );
}
