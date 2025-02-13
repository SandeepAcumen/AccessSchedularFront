export const formatString = (input) => {
    return input
        .replace(/[-]/g, ' ') // Replace '-' and '' with space
        .split(' ') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
        .join(' '); // Join the words back into a single string
}