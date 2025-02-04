import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { CompleteDialogProps } from "../interface/interface"

export const CompleteDialog: React.FC<CompleteDialogProps> = ({ open, title, message, onClose }) => {
    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <p>{message}</p>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center' }}>
                    <Button onClick={onClose} color="primary" variant="contained">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}