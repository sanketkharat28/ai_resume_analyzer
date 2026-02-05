/* formats a file size in bytes to a human readable string (kb, mb, gb)
@params bytes - the size in bytes
@returns A formatted string with the appropriate unit
*/

export function formatSize(bytes:number): string {
    if(bytes === 0) return '0 bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) +  ' ' + sizes[i];
}

export const generateUUID = () => {
    // Try to use crypto.randomUUID if available (secure contexts)
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    
    // Fallback: Generate a UUID v4 manually
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};