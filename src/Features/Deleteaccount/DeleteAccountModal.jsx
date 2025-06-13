import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteAccountModal = ({ open, onClose, onDelete }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-red-600 text-lg">Delete Account</DialogTitle>
          <DialogDescription className="text-gray-700 mt-2">
            Are you sure you want to delete this account? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-3 mt-4">
          <Button variant="ghost" onClick={onClose} className="bg-gray-100 text-gray-700">
            Cancel
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAccountModal;

