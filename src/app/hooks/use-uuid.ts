import { v4 as uuidv4 } from 'uuid';

/**
 * Generates a unique UUID (Universally Unique Identifier).
 * @returns {string} The generated UUID.
 */
function useUUID() {
    return uuidv4();
}

export default useUUID;
