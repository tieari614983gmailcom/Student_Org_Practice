import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import UPLOAD_FILE from '@salesforce/apex/FileUploaderClass.uploadFile';

export default class FileUploaderCompLwc extends LightningElement {
    @api recordId;
    fileData; // Store information about the selected file.

    // Handle file selection and extract file details.
    uploadFileChange(event) {
        const file = event.target.files[0]; // Get the selected file.

        // Create a new FileReader object to read the selected file.
        const reader = new FileReader();

        // Define an onload event handler for the FileReader.
        reader.onload = () => {
            // When the FileReader finishes loading the file content:
            // Split the result by ',' to extract the base64-encoded data part.
            const base64 = reader.result.split(',')[1];
            // The 'base64' variable now holds the base64-encoded content of the file.

            // Populate the 'fileData' object with file details.
            this.fileData = {
                'fileName': file.name,      // Extract and store the file name.
                'base64': base64,           // Store the base64-encoded file data.
                'recordId': this.recordId   // Include the record ID.
            };
            console.log(this.fileData);
        };

        reader.readAsDataURL(file);
    }

    // Handle the submit button click event.
    handleClick() {
        const { fileName, base64, recordId } = this.fileData; // Get file details.

        // Call the Apex method to upload the file.
        UPLOAD_FILE({ fileName, base64, recordId })
            .then(result => {
                this.fileData = null; // Reset file data after successful upload.
                let title = `${fileName} Uploaded Successfully !!`;
                this.toast(title);
            })
            .catch(error => {
                this.toastError("Error Uploading File : " + error.message);
            });
    }

    // Display a success toast message.
    toast(title) {
        const toastEvent = new ShowToastEvent({
            title,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

    // Display an error toast message.
    toastError(errorMessage) {
        const toastEvent = new ShowToastEvent({
            title: 'Error',
            message: errorMessage,
            variant: 'error'
        });
        this.dispatchEvent(toastEvent);
    }
}
