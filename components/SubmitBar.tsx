import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SubmitBarProps {
    onAddItem: (item: string) => void;
}

export default function SubmitBar({ onAddItem }: SubmitBarProps) {
    const [text, setText] = useState('');

    const handleAddItem = () => {
        if (text.trim() !== '') {
            onAddItem(text);
            setText('');
        }
    };

    return (
        <Box>
            <TextField
                label="Text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={handleAddItem}>
                Add Item
            </Button>
        </Box>
    );
}