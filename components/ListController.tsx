import { useEffect } from 'react';
import { Box, Typography, CircularProgress, Alert, Container, Paper } from '@mui/material';
import { useListController } from '@/hooks/useListController';
import SubmitBar from './SubmitBar';
import CustomList from './CustomList';

export default function ListController() {
    const { items, loading, error, loadItems, addItem } = useListController();

    // Load items on initial mount
    useEffect(() => {
        loadItems();
    }, []);

    const handleAddItem = (text: string) => {
        addItem({ text });
    };

    return (
        <Container maxWidth="sm" sx={{ py: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography>
                    Things We Got Before GTA VI
                </Typography>

                <SubmitBar onAddItem={handleAddItem} />

                {error && (
                    <Alert severity="error">
                        {error}
                    </Alert>
                )}

                {loading && items.length === 0 ? (
                    <Box>
                        <CircularProgress />
                    </Box>
                ) : (
                    <CustomList items={items} />
                )}
            </Paper>
        </Container>
    );
}